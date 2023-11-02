import { SignUpBar } from "@/components/Bar";
import { CommonButton, TextField } from "@/components/Form";

export default function SignUp() {
  return (
    <div>
      <SignUpBar />
      <div className="mb-12 mt-5 space-y-8">
        <TextField
          label="ニックネーム"
          name="name"
          placeholder="ニックネームをご入力ください"
        />
        <div className="flex items-center justify-center gap-4 px-4">
          <CommonButton bgColor="orange">登録する</CommonButton>
          <CommonButton>ログアウト</CommonButton>
        </div>
      </div>
    </div>
  );
}
