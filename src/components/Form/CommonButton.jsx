import { clsx } from "clsx";

// フォームで使用する共通ボタン(ex.保存する、キャンセルする)
export function CommonButton({ children, onClick, disable, bgColor }) {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={clsx(
        "w-full rounded-md border px-3 py-2 text-base hover:opacity-80",
        bgColor === "orange"
          ? "bg-orange-600 text-white"
          : "border-orange-600 bg-white text-orange-700"
      )}
    >
      {children}
    </button>
  );
}
