import { Textarea } from "./Textarea";

// フォームで使用するテキストフィールド用のコンポーネント
export function TextField({ label, multiline, placeholder, name }) {
  return (
    <div className="space-y-0.5">
      <label htmlFor={name} className="block px-4 text-base font-bold">
        {label}
      </label>
      {/* 1行テキストか複数行テキストかで切り替えられるように */}
      {multiline ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full border border-x-0 px-4 py-2 focus:outline-none"
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full border border-x-0 px-4 py-2 focus:outline-none"
        />
      )}
    </div>
  );
}
