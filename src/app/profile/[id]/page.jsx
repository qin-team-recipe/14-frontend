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
      <div className="mx-auto min-h-screen sm:max-w-2xl px-4">
        <div className="flex justify-between items-center h-10">
          <PrevButton />
          <Sns />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <ProfileName />
            <ProfileId />
          </div>
          <ProfileImage />
        </div>
        <IntroductionText text="初の絵本出版！ 『 まねっこシェフ』 ・ふわふわ！スクランブルエッグ ・にぎにぎ！おにぎり 主婦の友社より３月３日、２冊同時発売！ 絶賛発売中！" />
        <div className="flex text-gray-500 mt-2">
          <RecipesNumber />
          <FollowerNumber />
        </div>
        <div className="py-1 px-3">
          <Button className="px-3" text="フォローする" />
        </div>
      </div>
    </>
  );
}
