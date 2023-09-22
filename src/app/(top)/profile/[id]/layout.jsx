import { Tabs } from "@/components/Tabs";
import { PrevButton } from "./_components/PrevButton";
import { ProfileImage } from "./_components/ProfileImage";
import { Sns } from "./_components/Sns";
import { Counter } from "./_components/Counter";
import { FollowButton } from "./_components/FollowButton";

export default function ProfileLayout({ children, params }) {
  return (
    <div>
      <div className="py-3">
        <div className="flex flex-col gap-y-2 px-4">
          <div className="flex items-center">
            <PrevButton />
            <div className="ml-auto">
              <Sns />
            </div>
          </div>

          <div className="flex items-center justify-between gap-x-4">
            <div className="flex flex-col gap-y-1">
              <div className="line-clamp-2 break-all text-2xl font-bold">
                山田シェフ山田シェフ山田シェフ山田シェフ山田シェフ山田シェフ
              </div>
              <div className="text-sm">{params.id}</div>
            </div>
            <ProfileImage src="https://picsum.photos/200" />
          </div>

          <p className="text-sm">
            初の絵本出版！ 『 まねっこシェフ』 ・ふわふわ！スクランブルエッグ
            ・にぎにぎ！おにぎり 主婦の友社より３月３日、２冊同時発売！
            絶賛発売中！
          </p>

          <div className="flex gap-x-3 text-gray-500">
            <Counter count={123} type="recipe" />
            <Counter count={456} type="follower" />
          </div>
        </div>

        <div className="mt-4 px-4">
          <FollowButton>フォローする</FollowButton>
        </div>

        <div className="mt-5">
          <Tabs
            tabItems={[
              {
                label: "新着レシピ",
                href: `/profile/${params.id}`,
              },
              {
                label: "人気レシピ",
                href: `/profile/${params.id}/popular`,
              },
            ]}
          />
        </div>

        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
