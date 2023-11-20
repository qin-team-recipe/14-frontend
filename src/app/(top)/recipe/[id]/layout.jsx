"use client";

import Link from "next/link";
import { useState } from "react";
import { DetailLayout } from "@/components/Layout";
import { FavoriteButton } from "./_components";
import { Sns } from "@/components/Sns";
import { EditRecipe } from "./_components";
import { IconArrowLeft } from "@tabler/icons-react";

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
  // 公開非公開
  const [isPublished, setIsPublished] = useState(false);
  const handleClick = () => {
    setIsPublished((prevState) => !prevState);
  };
  // 遷移元URL
  const TransitionSourceUrl = sessionStorage.getItem("previousPageUrl");
  const isUrlEqual = TransitionSourceUrl === "/fav";

  return (
    <>
      <div className="absolute top-4">
        {isUrlEqual && (
          <Link href="/fav">
            <IconArrowLeft />
          </Link>
        )}
      </div>
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
            {isUrlEqual && (
              <div className="rounded border px-1.5 py-0.5">
                {(isPublished && "公開") || "非公開"}
              </div>
            )}

            {isUrlEqual || (
              <div className="h-3 w-3 rounded-full bg-gray-200"></div>
            )}
            {isUrlEqual || <Link href={`${chefHref}`}>{chefName}</Link>}
          </div>
          <div className="text-gray-500">
            <span className="font-bold">{favCount}</span> お気に入り
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-4">
        <FavoriteButton />
        {/* handleClickで公開非公開を切り替える */}
        {isUrlEqual && (
          <EditRecipe isPublished={isPublished} handleClick={handleClick} />
        )}
      </div>
    </>
  );
}
