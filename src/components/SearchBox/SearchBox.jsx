"use client";

import { useCallback, useRef, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconSearch, IconX, IconLoader2 } from "@tabler/icons-react";

export function SearchBox() {
  const ref = useRef(null);
  const navigationTimeout = useRef(null); // タイマーを管理するref
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toString();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // 検索処理
  const handleSearch = useCallback(
    (term) => {
      // タイマーがある場合クリア
      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current);
      }

      startTransition(async () => {
        // 500ミリ秒遅延後にナビゲーション実行
        navigationTimeout.current = setTimeout(async () => {
          const params = new URLSearchParams(searchParams);
          // 検索情報の有無に応じて、パラメータ操作
          if (term) {
            params.set("q", term);
          } else {
            params.delete("q");
          }
          // パスが初期URLかどうかチェック
          if (pathname === "/") {
            router.push(`/search/recipe?${params.toString()}`);
          } else {
            router.replace(`${pathname}?${params.toString()}`);
          }
        }, 500);
      });
    },
    [pathname, router, searchParams],
  );

  // リセット処理
  const handleReset = useCallback(() => {
    startTransition(async () => {
      await sleep(500);
      const params = new URLSearchParams(searchParams);
      params.delete("q");
      ref.current.value = "";
      router.replace(pathname);
    });
  }, [pathname, router, searchParams]);

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

      {isPending ? (
        <IconLoader2 size={24} className="animate-spin text-gray-500" />
      ) : query ? (
        <button onClick={handleReset}>
          <IconX size={24} className="text-gray-500" />
        </button>
      ) : null}
    </div>
  );
}

// スリープ処理
export function sleep(ms) {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
}
