"use client";

import { IconPlus } from "@tabler/icons-react";

// テキストフィールドを追加するボタン(MultiInputField用)
export const InputAddButton = ({ text }) => {
  return (
    <button onClick={() => {}} className="mx-4 mt-2 flex items-center gap-1">
      <IconPlus size={16} className="text-orange-600" />
      <p className="text-orange-600">{text}を追加する</p>
    </button>
  );
};
