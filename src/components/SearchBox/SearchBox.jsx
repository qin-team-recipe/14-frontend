"use client";

import { IconSearch, IconX } from "@tabler/icons-react";

export function SearchBox({ hasCloseIcon }) {
  return (
    <div className="flex w-full items-center gap-x-2 rounded-lg bg-gray-100 px-3 py-2">
      <IconSearch size={24} className="text-gray-500" />
      <input
        type="text"
        placeholder="シェフやレシピを検索"
        className="w-full bg-transparent font-bold outline-none placeholder:text-gray-500"
      />
      {hasCloseIcon && (
        <button onClick={() => alert("TODO: 検索テキストをクリアします")}>
          <IconX size={24} className="text-gray-500" />
        </button>
      )}
    </div>
  );
}
