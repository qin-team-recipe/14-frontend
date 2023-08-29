"use client";

import { IconDotsVertical } from "@tabler/icons-react";
import clsx from "clsx";

// フォームで使用する作り方のフィールドが増えるコンポーネント（材料）
export function StepTextField({ name, addButtonElement, label, items }) {
  return (
    <div className="space-y-0.5">
      <label htmlFor={name} className="block px-4 text-base font-bold">
        {label}
      </label>
      {/* 作り方のフィールドを複数表示するエリア */}
      <ul className="divide-y border-y">
        {items.map((step, index) => (
          <li key={step.id} className="flex gap-x-2 px-4 py-2">
            <div
              className={clsx(
                "h-5 w-5 rounded-full",
                "flex shrink-0 items-center justify-center",
                "bg-orange-500 text-xs text-white"
              )}
            >
              {index + 1}
            </div>
            <p className="line-clamp-3 text-sm">{step.value}</p>
            <div onClick={() => alert("モーダルでます")}>
              <IconDotsVertical
                size={20}
                className="cursor-pointer text-gray-500"
              />
            </div>
          </li>
        ))}
      </ul>
      {/* 工程を追加するボタン */}
      <div className="px-4 pt-2">{addButtonElement}</div>
    </div>
  );
}
