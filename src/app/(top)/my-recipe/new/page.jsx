import { NewMyRecipeBar } from "@/components/Bar";
import {
  CommonButton,
  ImageField,
  InputAddButton,
  MultiTextField,
  TextField,
  getLabelAndText,
} from "@/components/Form";

// マイレシピ追加画面
export default function New() {
  const { label, text } = getLabelAndText("link");

  return (
    <div>
      <div className="px-4 py-3">
        <NewMyRecipeBar />
      </div>
      <div className="mt-4 space-y-8">
        <TextField label="レシピ名" name="name" placeholder="例：肉じゃが" />
        <ImageField label="画像（任意）" name="image" />
        <TextField label="レシピの紹介文（任意）" multiline />
        <MultiTextField
          name="link"
          label={label}
          addButtonElement={<InputAddButton>{text}</InputAddButton>}
          items={ITEMS}
        />
        <div className="flex items-center justify-center gap-2 px-4">
          <CommonButton bgColor="orange">保存する</CommonButton>
          <CommonButton>削除する</CommonButton>
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
