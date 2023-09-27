import {
  IconArrowNarrowLeft,
  IconDotsCircleHorizontal,
} from "@tabler/icons-react";
import { ChefProfileEditButton } from "./_components/ChefProfileEditButton";
import { Tabs } from "@/components/Tabs";
import { AddMyRecipeButton } from "@/components/Button";

export default function ChefMyPageLayout({ children, params }) {
  return (
    <div  className="relative">
      <div>
        <div>
          <div className="px-4 py-3">
            <div className="flex justify-between">
              <IconArrowNarrowLeft />
              <IconDotsCircleHorizontal />
            </div>
            <div>
              <h1>山田シェフ</h1>
              <h2>{params.id}</h2>
            </div>
            <div className="flex">
              <div>123レシピ</div>
              <div>456フォロワー</div>
            </div>
            <ChefProfileEditButton />
          </div>

          <Tabs
            tabItems={[
              {
                label: "新着レシピ",
                href: `/chefmypage/${params.id}`,
              },
              {
                label: "人気レシピ",
                href: `/chefmypage/${params.id}/ingredient`,
              },
            ]}
          />
        </div>
        {/* <div className="absolute bottom--40 right--4">
          <AddMyRecipeButton />
        </div> */}
        <div>{children}</div>
      </div>
    </div>
  );
}
