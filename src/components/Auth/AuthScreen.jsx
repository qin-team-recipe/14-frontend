import Image from "next/image";

import { IconBrandApple, IconBrandGoogle } from "@tabler/icons-react";
import { LoginButton } from "./LoginButton";

// ログイン画面用のコンポーネント
export function AuthScreen({ src }) {
  return (
    <div className="p-4 text-center">
      <div className="mx-auto w-1/2">
        <Image src={src} alt="ログインが必要なときに表示させる画像" />
      </div>

      <h1 className="mt-2 font-bold">ログインをお願いします</h1>

      <p className="mt-2 text-sm">
        こちらの機能を利用するにはログインが必要です
      </p>

      <div className="mt-6 flex items-center justify-center gap-2">
        <LoginButton bgColor="blue" icon={IconBrandGoogle}>
          Googleログイン
        </LoginButton>
        <LoginButton icon={IconBrandApple}>Appleログイン</LoginButton>
      </div>
    </div>
  );
}
