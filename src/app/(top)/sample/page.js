import { TextField } from "@/app/_components/Form";
import { InputAddButton } from "@/app/_components/Form/InputAddButton";

// コンポーネントを確認するためだけの仮ページ（自分用）
export default function Sample() {
  return (
    <>
      <div className="text-red-500">コンポーネント確認ページです</div>
      <TextField label={"レシピ名"} placeholder={"例：肉じゃが"} />
      <TextField label={"レシピの紹介文（任意）"} multiline />
      <InputAddButton text={"材料"} />
      <InputAddButton text={"リンク"} />
      <InputAddButton text={"工程"} />
    </>
  );
}
