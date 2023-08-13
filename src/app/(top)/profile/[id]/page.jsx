import { PrevButton } from "./_components/PrevButton";
import { ProfileImage } from "./_components/ProfileImage";
import { Sns } from "./_components/Sns";
import { Counter } from "./_components/Counter";
import { FollowButton } from "./_components/FollowButton";

export default function Profile({ params }) {
  return (
    <div className="mx-auto min-h-screen px-4">
      <div className="flex flex-col gap-y-2">
        <div className="flex h-10 items-center justify-between">
          <PrevButton />
          <Sns />
        </div>

        <div className="flex items-center justify-between gap-x-4">
          <div className="flex flex-col gap-1">
            <p className="line-clamp-2 break-all text-2xl font-bold">
              山田シェフ山田シェフ山田シェフ山田シェフ山田シェフ山田シェフ
            </p>
            <p className="line-clamp-1 break-all text-sm">{params.id}</p>
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

      <div className="mt-4">
        <FollowButton>フォローする</FollowButton>
      </div>
    </div>
  );
}
