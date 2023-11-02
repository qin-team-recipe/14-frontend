import Link from "next/link";
import { DetailLayout } from "@/components/Layout";
import { FavoriteButton } from "./_components";
import { Sns } from "@/components/Sns";

export default function MyRecipeLayout({ children, params }) {
  return (
    <DetailLayout
      image="https://picsum.photos/300/300?random-1"
      header={
        <RecipeDetail
          recipeName="トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン"
          chefName="ウルトラハイパー超すごいしまぶーシェフ"
          chefHref={`/profile/${params.id}`}
          description="はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。"
          favCount={1234}
          isAdded
        />
      }
      tabItems={[
        { label: "作り方", href: `/recipe/${params.id}` },
        { label: "材料", href: `/recipe/${params.id}/ingredient` },
      ]}
    >
      {children}
    </DetailLayout>
  );
}

function RecipeDetail({
  recipeName,
  description,
  chefHref,
  chefName,
  favCount,
}) {
  return (
    <div>
      <div className="space-y-4">
        <div className="flex">
          <div className="text-xl font-bold">{recipeName}</div>
          <div className="ml-4">
            <Sns />
          </div>
        </div>
        <div className="text-sm">{description}</div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <div className="h-3 w-3 rounded-full bg-gray-200"></div>
            <Link href={`${chefHref}`}>{chefName}</Link>
          </div>
          <div className="text-xs text-gray-500">
            <span className="font-bold">{favCount}</span> お気に入り
          </div>
        </div>
      </div>

      <div className="mt-4">
        <FavoriteButton />
      </div>
    </div>
  );
}
