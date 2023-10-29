"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconSearch, IconX, IconLoader2 } from "@tabler/icons-react";
import { useDebouncedCallback } from "use-debounce";

export function SearchBox({ hasCloseIcon }) {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter();

  // 検索処理
  const handleSearch = useDebouncedCallback((term) => {
    // ローディング開始
    setIsLoading(true);
    const params = new URLSearchParams(searchParams);
    // 検索情報の有無に応じて、パラメータ操作
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    // URL更新
    replace(`${pathname}?${params.toString()}`);

    if (pathname === "/") {
      router.push(`search/recipe?${params.toString()}`);
    }
    // ローディング終了
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, 1000);

  // 検索のリセット処理
  const handleReset = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("q");
    // URL更新
    replace(pathname);
  }, 1000);

  return (
    <div className="flex w-full items-center gap-x-2 rounded-lg bg-gray-100 px-3 py-2">
      <IconSearch size={24} className="text-gray-500" />
      <input
        type="text"
        placeholder="シェフやレシピを検索"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
        className="w-full bg-transparent font-bold outline-none placeholder:text-gray-500"
      />
      {isLoading && <IconLoader2 size={24} className="text-gray-500" />}
      {hasCloseIcon && !isLoading ? (
        <button onClick={handleReset}>
          <IconX size={24} className="text-gray-500" />
        </button>
      ) : null}
    </div>
  );
}
