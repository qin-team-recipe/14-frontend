"use client";

import { useState } from "react";

import { IconMinus, IconPlus, IconDotsVertical } from "@tabler/icons-react";
import clsx from "clsx";

// フォームで使用するinput行が増える材料用コンポーネント
export function IngredientTextField({ name, addButtonElement, label, items }) {
  const [num, setNum] = useState(1);

  const plus = () => {
    setNum((prev) => prev + 1);
  };

  const minus = () => {
    setNum((prev) => prev - 1);
  };

  return (
    <div className="space-y-0.5">
      <div className="flex items-center gap-x-2 px-4">
        <label htmlFor={name} className="block text-base font-bold">
          {label} / {num}人前
        </label>
        {/* 材料の◯人前を増減させるボタン */}
        <div className="flex gap-1.5">
          <button
            onClick={minus}
            disabled={num === 1}
            className={clsx(
              "cursor-pointer bg-orange-50 text-orange-700",
              num === 1 && "cursor-not-allowed bg-gray-100 text-gray-300"
            )}
          >
            <IconMinus size={16} />
          </button>
          <button
            onClick={plus}
            disabled={num === 6}
            className={clsx(
              "cursor-pointer bg-orange-50 text-orange-700",
              num === 6 && "cursor-not-allowed bg-gray-100 text-gray-300"
            )}
          >
            <IconPlus size={16} />
          </button>
        </div>
      </div>
      {/* 材料のinputを複数表示するエリア */}
      <div>
        {items.map((val, index) => (
          <div
            key={val.id}
            className={clsx(
              "flex items-center justify-between gap-4",
              "px-4 py-2",
              "border-0 border-b",
              index === 0 && "border-t"
            )}
          >
            <input
              type="text"
              id={index === 0 ? name : undefined}
              defaultValue={val.value}
              className="flex-1 text-sm focus:outline-none"
            />
            <div onClick={() => alert("モーダルでます")}>
              <IconDotsVertical
                size={20}
                className="cursor-pointer text-gray-500"
              />
            </div>
          </div>
        ))}
      </div>
      {/* 材料を追加するボタン */}
      <div className="px-4 pt-2">{addButtonElement}</div>
    </div>
  );
}
