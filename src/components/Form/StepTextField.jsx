"use client";

import clsx from "clsx";

// フォームで使用するinput行が増えるコンポーネント（材料）
export function StepTextField({ name, addButtonElement, label, items }) {
  return (
    <div className="space-y-0.5">
      <label htmlFor={name} className="block px-4 text-base font-bold">
        {label}
      </label>
      {/* 工程のinputを複数表示するエリア */}
      <div>
        {items.map((val, index) => (
          <div
            key={val.id}
            className={clsx(
              "flex items-center gap-2",
              "w-full border-0 border-b px-4 py-2",
              index === 0 && "border-t"
            )}
          >
            <span
              className={clsx(
                "h-4 w-4 rounded-full",
                "flex items-center justify-center",
                "bg-orange-500 text-xs text-white"
              )}
            >
              {index + 1}
            </span>
            <input
              type="text"
              id={index === 0 ? name : undefined}
              defaultValue={val.value}
              placeholder="工程をご記入ください"
              className="flex-1 text-sm focus:outline-none"
            />
          </div>
        ))}
      </div>
      {/* 〇〇を追加するボタン */}
      <div className="px-4 pt-2">{addButtonElement}</div>
    </div>
  );
}
