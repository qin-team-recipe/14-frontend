import { NewMyRecipeBar } from "@/components/Bar";
import {
  CommonButton,
  ImageField,
  InputAddButton,
  MultiTextField,
  TextField,
  getLabelAndText,
} from "@/components/Form";
import { IngredientTextField } from "@/components/Form/IngredientTextField";
import { StepTextField } from "@/components/Form/StepTextField";

// マイレシピ追加画面
export default function New() {
  // 各typeのラベルと追加ボタンのテキストを取得
  const ingredient = getLabelAndText("ingredient"); // 材料
  const step = getLabelAndText("step"); // 作り方
  const link = getLabelAndText("link"); // リンク

  return (
    <div>
      <NewMyRecipeBar />
      <div className="mt-4 space-y-8">
        {/* レシピ名フィールド */}
        <TextField label="レシピ名" name="name" placeholder="例：肉じゃが" />

        {/* 材料フィールド */}
        <IngredientTextField
          name="ingredient"
          label={ingredient.label}
          addButtonElement={<InputAddButton>{ingredient.text}</InputAddButton>}
          items={INGREDIENTS}
        />

        {/* 作り方フィールド */}
        <StepTextField
          name="step"
          label={step.label}
          addButtonElement={<InputAddButton>{step.text}</InputAddButton>}
          items={STEPS}
        />

        {/* 画像フィールド */}
        <ImageField label="画像（任意）" name="image" />

        {/* レシピの紹介文フィールド */}
        <TextField
          label="レシピの紹介文（任意）"
          name="introduction"
          multiline
        />

        {/* リンクフィールド */}
        <MultiTextField
          label={link.label}
          name="link"
          addButtonElement={<InputAddButton>{link.text}</InputAddButton>}
          items={LINKS}
        />

        {/* 新規追加の場合 */}
        <div className="px-4">
          <CommonButton bgColor="orange">保存する</CommonButton>
        </div>
        {/* 編集の場合 */}
        <div className="flex items-center justify-center gap-2 px-4">
          <CommonButton bgColor="orange">保存する</CommonButton>
          <CommonButton>削除する</CommonButton>
        </div>
      </div>
    </div>
  );
}

// サンプルデータ（材料）
const INGREDIENTS = [
  {
    id: 1,
    value: "キャベツ2個",
  },
  {
    id: 2,
    value: "チーズ",
  },
  {
    id: 3,
    value:
      "テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト", // 長いやつ
  },
];

// サンプルデータ（作り方）
const STEPS = [
  {
    id: 1,
    value:
      "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
  },
  {
    id: 2,
    value:
      "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
  },
  {
    id: 3,
    value:
      "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。", // 長いやつ
  },
];

// サンプルデータ（リンク）
const LINKS = [
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
