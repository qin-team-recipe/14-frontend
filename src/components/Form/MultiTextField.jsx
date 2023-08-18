import clsx from "clsx";

// フォームで使用するinput行が増えるコンポーネント
export function MultiTextField({ name, addButtonElement, label, items }) {
  return (
    <div className="space-y-0.5">
      <label htmlFor={name} className="block px-4 text-base font-bold">
        {label}
      </label>
      {/* inputを複数表示するエリア */}
      <div>
        {items.map((val, index) => (
          <input
            type="text"
            key={val.id}
            id={index === 0 ? name : undefined}
            defaultValue={val.value}
            className={clsx(
              "w-full border-0 border-b px-4 py-2 focus:outline-none",
              index === 0 && "border-t"
            )}
          />
        ))}
      </div>
      {/* 〇〇を追加するボタン */}
      <div className="px-4 pt-2">{addButtonElement}</div>
    </div>
  );
}
