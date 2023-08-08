import { PrevButton } from "@/app/_components/PrevButton";
import { ProfileName } from "@/app/_components/ProfileName";
import { ProfileImage } from "@/app/_components/ProfileImage";
import { Sns } from "@/app/_components/Sns";
import { ProfileId } from "@/app/_components/ProfileId";
import { IntroductionText } from "@/app/_components/IntroductionText";
import { RecipesNumber } from "@/app/_components/recipesNumber";
import { FollowerNumber } from "@/app/_components/followerNumber";
import { Button } from "@/app/_components/button";

export default function Profile() {
  return (
    <>
      <div className="mx-auto min-h-screen px-4 sm:max-w-2xl">
        <div className="flex h-10 items-center justify-between">
          <PrevButton />
          <Sns />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <ProfileName />
            <ProfileId />
          </div>
          <ProfileImage />
        </div>
        <IntroductionText text="初の絵本出版！ 『 まねっこシェフ』 ・ふわふわ！スクランブルエッグ ・にぎにぎ！おにぎり 主婦の友社より３月３日、２冊同時発売！ 絶賛発売中！" />
        <div className="mt-2 flex text-gray-500">
          <RecipesNumber />
          <FollowerNumber />
        </div>
        <div className="mt-3">
          <Button className="mx-auto h-6 w-358 bg-[#E54D2E] text-white" text="フォローする" />
        </div>
      </div>
    </>
  );
}
