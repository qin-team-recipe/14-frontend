import { TextField, InputAddButton } from "@/components/Form";

// コンポーネントを確認するためだけの仮ページ（自分用）
export default function Sample() {
  return (
    <>
      <div className="text-red-500">コンポーネント確認ページです</div>
      <div className="mt-4 space-y-4">
        <TextField name="name" label="レシピ名" placeholder="例：肉じゃが" />
        <TextField
          name="description"
          label="レシピの紹介文（任意）"
          multiline
        />
        <InputAddButton>材料を追加する</InputAddButton>
        <InputAddButton>リンクを追加する</InputAddButton>
        <InputAddButton>工程を追加する</InputAddButton>
      </div>
    </>
  );
}
