import { Tabs } from "@/components/Tabs";
import { ProfileImage } from "../../profile/[id]/_components/ProfileImage";
import { Counter } from "../../profile/[id]/_components/Counter";
import { PrevButton } from "@/components/Button";
import { MenuButton } from "./_components";
import Link from "next/link";
import clsx from "clsx";

export default function MyPageLayout({ children }) {
  return (
    <div className="relative">
      <div className="px-4 pt-3">
        <div className="space-y-2">
          <div className="flex items-center">
            <PrevButton href="/fav" />
            <div className="ml-auto">
              <MenuButton />
            </div>
          </div>

          {/* プロフィール部分 */}
          <div className="flex items-center justify-between gap-x-4">
            <div className="flex flex-col gap-y-1">
              <div className="line-clamp-2 break-all text-2xl font-bold">
                山田シェフ山田シェフ山田シェフ山田シェフ山田シェフ山田シェフ山田シェフ山田シェフ
              </div>
              <div className="text-sm">foobarid</div>
            </div>
            <ProfileImage src="https://picsum.photos/200" />
          </div>

          <p className="text-sm">
            初の絵本出版！ 『 まねっこシェフ』 ・ふわふわ！スクランブルエッグ
            ・にぎにぎ！おにぎり 主婦の友社より３月３日、２冊同時発売！
            絶賛発売中！
          </p>

          {/* レシピ数・フォロー数 */}
          <div className="flex gap-x-4 text-gray-500">
            <Counter count={123} type="recipe" />
            <Counter count={456} type="follower" />
          </div>
        </div>

        <Link
          href="/my-page/edit"
          className="mt-4 block w-full rounded border border-black px-3 py-1 text-center text-sm"
        >
          プロフィールを編集
        </Link>
      </div>

      {/* 切り替えタブ */}
      <div className="mt-5">
        <Tabs
          tabItems={[
            { label: "新着レシピ", href: "/my-page" },
            { label: "人気レシピ", href: "/my-page/popular" },
          ]}
        />
      </div>

      <div className="px-4 pt-5">{children}</div>

      <div className="fixed inset-x-0 bottom-20 mx-auto w-fit sm:inset-x-auto sm:left-1/2">
        <Link
          href="/my-recipe/new"
          className={clsx(
            "flex items-center justify-center",
            "w-full rounded-full px-5 py-3",
            "bg-red-500 font-bold text-white shadow-md shadow-red-800 hover:bg-red-400",
          )}
        >
          マイレシピを追加する
        </Link>
      </div>
    </div>
  );
}
