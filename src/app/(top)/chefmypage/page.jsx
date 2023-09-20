import { IconDotsCircleHorizontal } from "@tabler/icons-react";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { ChefProfileEditButton } from "./_components/ChefProfileEditButton";
import { Tabs } from "@/components/Tabs";

export default function Profile() {
  return (
    <div className="px-4 py-3">
      <div className="flex justify-between">
        <IconArrowNarrowLeft />
        <IconDotsCircleHorizontal />
      </div>
      <div>
        <h1>山田シェフ</h1>
        <p>foobarid</p>
      </div>
      <div className="flex">
        <div>123レシピ</div>
        <div>456フォロワー</div>
      </div>
      <ChefProfileEditButton />
      <Tabs
        tabItems={[
          { label: "新着レシピ", href: "/recipe" },
          { label: "人気レシピ", href: "/ingredient" },
        ]}
      />
    </div>
  );
}
