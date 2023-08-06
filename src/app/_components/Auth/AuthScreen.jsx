"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import { IconBrandApple, IconBrandGoogle } from "@tabler/icons-react";

// ログイン画面用のコンポーネント
export const AuthScreen = () => {
  // 現在のパス取得
  const pathname = usePathname();

  return (
    <div className="p-4 text-center">
      <div className="mx-auto w-1/2">
        {/* お気に入り画面の画像 */}
        {pathname === "/fav" ? (
          <Image
            src="/images/bakingGirl.png"
            width={1000}
            height={1000}
            alt="クッキーを焼く女の子"
          />
        ) : null}

        {/* 買い物リスト画面の画像 */}
        {pathname === "/list" ? (
          <Image
            src="/images/cookingGirl.png"
            width={1000}
            height={1000}
            alt="料理をする女の子"
          />
        ) : null}
      </div>
      <h1 className="mt-2 font-bold">ログインをお願いします</h1>
      <p className="mt-2 text-sm">
        こちらの機能を利用するにはログインが必要です
      </p>
      {/* ボタンはコンポーネントするか悩み中。。。 */}
      <div className="mt-6 flex flex-row items-center justify-center gap-2">
        <button
          onClick={() => {}}
          className="flex items-center justify-center gap-1 rounded-md bg-blue-500 px-3 py-2 text-sm font-bold text-white hover:opacity-90"
        >
          <IconBrandGoogle size={18} strokeWidth={3} />
          Googleログイン
        </button>
        <button
          onClick={() => {}}
          className="flex items-center justify-center gap-1 rounded-md bg-black px-3 py-2 text-sm font-bold text-white hover:opacity-80"
        >
          <IconBrandApple size={18} strokeWidth={3} />
          Appleログイン
        </button>
      </div>
    </div>
  );
};
