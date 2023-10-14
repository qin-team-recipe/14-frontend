import { Tabs } from "@/components/Tabs";
import { ProfileImage } from "../../profile/[id]/_components/ProfileImage";
import { Counter } from "../../profile/[id]/_components/Counter";
import { PrevButton } from "@/components/Button";
import { ProfileEditLink, RecipeAddLink } from "./_components";
import { MenuButton } from "./_components/MenuButton";

export default function MyPageLayout({ children }) {
  return (
    <div className="pb-20">
      <div className="flex flex-col gap-y-2 px-4 pt-3">
        <div className="flex items-center justify-between">
          <PrevButton href="/fav" />
          <MenuButton />
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

        <div className="mt-4">
          <ProfileEditLink>プロフィールを編集する</ProfileEditLink>
        </div>
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

      {children}

      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 transform sm:bottom-6 sm:translate-x-0">
        <RecipeAddLink>マイレシピを追加する</RecipeAddLink>
      </div>
    </div>
  );
}
