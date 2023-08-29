"use client";

import { useState } from "react";

import { IconMinus, IconPlus, IconDotsVertical } from "@tabler/icons-react";
import clsx from "clsx";

// フォームで使用するinput行が増える材料用コンポーネント
export function IngredientTextField({ name, addButtonElement, label, items }) {
  const [num, setNum] = useState(2);

  const increment = () => {
    setNum((prev) => prev + 1);
  };

  const decrement = () => {
    setNum((prev) => prev - 1);
  };

  return (
    <div className="space-y-0.5">
      <div className="flex items-center px-4">
        <label htmlFor={name} className="block w-24 text-base font-bold">
          {label} / {num}人前
        </label>
        {/* 材料の◯人前を増減させるボタン */}
        <div className="flex gap-x-1.5">
          <button
            onClick={decrement}
            disabled={num === 1}
            className={clsx(
              "cursor-pointer bg-orange-50 text-orange-700",
              "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300"
            )}
          >
            <IconMinus size={16} />
          </button>
          <button
            onClick={increment}
            disabled={num === 6}
            className={clsx(
              "cursor-pointer bg-orange-50 text-orange-700",
              "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300"
            )}
          >
            <IconPlus size={16} />
          </button>
        </div>
      </div>
      {/* 材料のinputを複数表示するエリア */}
      <ul className="divide-y border-y">
        {items.map((val, index) => (
          <li
            key={val.id}
            className="flex items-center justify-between gap-x-4 px-4 py-2"
          >
            <input
              type="text"
              id={index === 0 ? name : undefined}
              defaultValue={val.value}
              className="flex-1 text-sm focus:outline-none"
            />
            <button onClick={() => alert("TODO: モーダルでます")}>
              <IconDotsVertical
                size={20}
                stroke={1.5}
                className="text-gray-500"
              />
            </button>
          </li>
        ))}
      </ul>
      {/* 材料を追加するボタン */}
      <div className="px-4 pt-2">{addButtonElement}</div>
    </div>
  );
}
