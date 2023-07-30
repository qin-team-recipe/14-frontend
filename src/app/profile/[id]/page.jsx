import { PrevButton } from "@/app/_components/PrevButton";
import { ProfileName } from "@/app/_components/ProfileName";
import { ProfileImage } from "@/app/_components/ProfileImage";
import { Sns } from "@/app/_components/Sns";

export default function Profile() {
  return (
    <>
      <div className="mx-auto min-h-screen sm:max-w-2xl px-4">
        <div className="flex justify-between items-center h-10">
          <PrevButton />
          <Sns />
        </div>
        <div>
          <div className="flex justify-between items-center mt-4">
            <ProfileName />
            <ProfileImage />
          </div>
          <div>{/* 説明文 */}</div>
          <div>
            {/* レシピ数 */}
            {/* フォロワー数 */}
          </div>
        </div>

        <div>{/* フォローボタン */}</div>
      </div>
    </>
  );
}
