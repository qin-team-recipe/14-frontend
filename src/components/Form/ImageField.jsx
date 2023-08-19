import { IconPlus } from "@tabler/icons-react";
import clsx from "clsx";

// フォームで使用する画像設定用のコンポーネント
export function ImageField({ label, name }) {
  return (
    <div className="space-y-2 px-4">
      <label htmlFor={name} className="block text-base font-bold">
        {label}
      </label>
      <div
        className={clsx(
          "relative h-28 w-28",
          "flex flex-col items-center justify-center",
          "rounded-lg border bg-white text-gray-500"
        )}
      >
        <input
          type="file"
          accept="image/*"
          id={name}
          name={name}
          className="absolute h-full w-full cursor-pointer opacity-0"
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-xs">画像を設定</span>
          <IconPlus size={20} />
        </div>
      </div>
    </div>
  );
}
