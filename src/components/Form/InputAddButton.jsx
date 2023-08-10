import { IconPlus } from "@tabler/icons-react";

// テキストフィールドを追加するボタン(MultiInputField用)
export function InputAddButton({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-1 text-sm text-orange-600"
    >
      <IconPlus size={14} />
      <p>{children}</p>
    </button>
  );
}
