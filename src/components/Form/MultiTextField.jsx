import { InputAddButton } from "./InputAddButton";
import { getLabelAndText } from "./utils/helper";

// サンプルデータ あとで消す
const samples = [
  {
    id: 1,
    value: "https://www.youtube.com/xxx",
  },
  {
    id: 2,
    value: "https://www.sirogohan.com/xxx",
  },
  {
    id: 3,
    value:
      "https://www.test.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // 長いやつ
  },
];

// フォームで使用するinput行が増えるコンポーネント
export function MultiTextField({ name, type }) {
  // typeに応じたラベルを取得
  const label = getLabelAndText(type).label;

  return (
    <div className="space-y-0.5">
      <label htmlFor={name} className="block px-4 text-base font-bold">
        {label}
      </label>
      {/* inputを複数表示するエリア */}
      <div>
        {samples.map((val, index) => (
          <input
            type="text"
            key={index}
            className={`w-full truncate border border-x-0 px-4 py-2 focus:outline-none ${
              index !== 0 ? "border-t-0" : null
            }`}
            value={val.value}
          />
        ))}
      </div>
      {/* 〇〇を追加するボタン */}
      <div className="px-4 pt-2">
        <InputAddButton type={type} />
      </div>
    </div>
  );
}
