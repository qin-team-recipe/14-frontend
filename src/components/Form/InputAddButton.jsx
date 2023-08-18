import { IconPlus } from "@tabler/icons-react";
import { getLabelAndText } from "./utils/helper";

// テキストフィールドを追加するボタン
export function InputAddButton({ onClick, disabled, type }) {
  // typeに応じたボタンテキストを取得
  const text = getLabelAndText(type).text;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-1 text-sm text-orange-600"
    >
      <IconPlus size={14} />
      <p>{text}</p>
    </button>
  );
}
