"use client";

import { useCallback, useRef, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconSearch, IconX, IconLoader2 } from "@tabler/icons-react";

export function SearchBox() {
  const ref = useRef(null);
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toString();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // 検索処理
  // MEMO: routerのpushとreplaceの使い分け
  // startTransitionの引数は同期関数じゃないの？
  const handleSearch = useCallback(
    (term) => {
      startTransition(async () => {
        // スリープ処理
        await sleep(1000);
        const params = new URLSearchParams(searchParams);
        // 検索情報の有無に応じて、パラメータ操作
        if (term) {
          params.set("q", term);
        } else {
          params.delete("q");
        }
        // パスが初期URLかどうかチェック
        if (pathname === "/") {
          // historyにエントリー追加して遷移
          router.push(`search/recipe?${params.toString()}`);
        } else {
          // historyにエントリー追加せず遷移
          router.replace(`${pathname}?${params.toString()}`);
        }
      });
    },
    [pathname, router, searchParams],
  );

  // 検索リセット処理
  const handleReset = () => {
    startTransition(async () => {
      await sleep(500);
      const params = new URLSearchParams(searchParams);
      params.delete("q");
      ref.current.value = "";
      router.replace(pathname);
    });
  };

  return (
    <div className="flex w-full items-center gap-x-2 rounded-lg bg-gray-100 px-3 py-2">
      <IconSearch size={24} className="text-gray-500" />
      <input
        type="text"
        placeholder="シェフやレシピを検索"
        onChange={(e) => handleSearch(e.target.value)}
        ref={ref}
        defaultValue={query}
        className="w-full bg-transparent font-bold outline-none placeholder:text-gray-500"
      />
      {isPending && (
        <IconLoader2 size={24} className="animate-spin text-gray-500" />
      )}
      {query && !isPending ? (
        <button onClick={handleReset}>
          <IconX size={24} className="text-gray-500" />
        </button>
      ) : null}
    </div>
  );
}

// スリープ処理(ミリ秒後に解決する)
export function sleep(ms) {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
}
