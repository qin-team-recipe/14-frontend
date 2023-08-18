import { EditBar } from "@/components/Bar";
import {
  TextField,
  MultiTextField,
  CommonButton,
  ImageField,
  InputAddButton,
  getLabelAndText,
} from "@/components/Form";

export default function Edit() {
  const { label, text } = getLabelAndText("link");

  return (
    <div>
      <div className="px-4 py-3">
        <EditBar />
      </div>
      <div className="mt-4 space-y-8">
        <TextField label="ニックネーム" name="name" />
        <ImageField label="プロフィール画像（任意）" name="image" />
        <TextField label="自己紹介" name="description" multiline />
        <MultiTextField
          name="link"
          label={label}
          addButtonElement={<InputAddButton>{text}</InputAddButton>}
          items={ITEMS}
        />
        <div className="flex items-center justify-center gap-2 px-4">
          <CommonButton bgColor="orange">保存</CommonButton>
          <CommonButton>キャンセル</CommonButton>
        </div>
      </div>
    </div>
  );
}

// サンプルデータ あとで消す
const ITEMS = [
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
