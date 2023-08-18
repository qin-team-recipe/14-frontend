import { EditBar } from "@/components/Bar";
import {
  TextField,
  MultiTextField,
  CommonButton,
  ImageField,
} from "@/components/Form";

export default function Edit() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-3">
        <EditBar />
      </div>
      <div className="mt-4 h-full space-y-8">
        <TextField label="ニックネーム" />
        <ImageField label="プロフィール画像（任意）" />
        <TextField label="自己紹介" multiline />
        <MultiTextField type="link" />
        <div className="mx-4 flex items-center justify-center gap-2">
          <CommonButton bgColor="orange">保存</CommonButton>
          <CommonButton>キャンセル</CommonButton>
        </div>
      </div>
    </div>
  );
}
