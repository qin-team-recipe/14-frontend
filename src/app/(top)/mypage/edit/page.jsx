import { EditBar } from "@/components/Bar";
import { InputAddButton, TextField } from "@/components/Form";
import { ImageField } from "@/components/Form/ImageField";

export default function Edit() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-3">
        <EditBar />
      </div>
      <div className="mt-4 h-full space-y-6">
        <TextField label="ニックネーム" />
        <ImageField label="プロフィール画像（任意）" />
        <TextField label="自己紹介" multiline />
        <TextField label="リンク（任意）" />
        <InputAddButton>リンクを追加する</InputAddButton>
      </div>
    </div>
  );
}
