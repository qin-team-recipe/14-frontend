import { InputAddButton } from "./InputAddButton";
import { getLabelAndText } from "./utils/helper";

// フォームで使用するinput行が増えるコンポーネント
export function MultiTextField({ name, type }) {
  // typeに応じたラベルを取得
  const label = getLabelAndText(type).label;

  return (
    <div className="space-y-0.5">
      <label htmlFor={name} className="block px-4 text-base font-bold">
        {label}
      </label>
      <div>
        <input
          type="text"
          id={name}
          name={name}
          className="w-full border border-x-0 px-4 py-2"
        />
        <input
          type="text"
          id={name}
          name={name}
          className="w-full border-x-0 border-b px-4 py-2"
        />
        <input
          type="text"
          id={name}
          name={name}
          className="w-full border-x-0 border-b px-4 py-2"
        />
      </div>
      {/* 〇〇を追加するボタン */}
      <div className="px-4 pt-2">
        <InputAddButton type={type} />
      </div>
    </div>
  );
}
