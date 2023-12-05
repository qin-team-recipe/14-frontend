"use client";

import Link from "next/link";
import { useState } from "react";
import { DetailLayout } from "@/components/Layout";
import { IconArrowLeft } from "@tabler/icons-react";
import { SnsMyRecipe } from "./_components";
import { FavoriteButton } from "./_components";
import clsx from "clsx";

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
          chefId={1}
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
  chefId,
}) {
  // 公開非公開
  const [isPublished, setIsPublished] = useState(false);

  //ログインユーザー（自分のIDです）
  const DUMMY_ID = {
    userId: 1,
  };

  const isEqual = chefId === DUMMY_ID.userId;
  return (
    <>
      <div className="absolute top-4">
        {isEqual && (
          <Link href="/fav">
            <IconArrowLeft />
          </Link>
        )}
      </div>
      <div className="space-y-4">
        <div className="flex">
          <div className="text-xl font-bold">{recipeName}</div>
          <div className="ml-4">
            <SnsMyRecipe
              isPublished={isPublished}
              setIsPublished={setIsPublished}
              boolean={isEqual}
            />
          </div>
        </div>
        <div className="text-sm">{description}</div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-xs ">
            {isEqual && (
              <div
                className={clsx(
                  "rounded border px-1.5 py-0.5",
                  isPublished
                    ? "border-[#E54D2E] text-[#CA3214]"
                    : "text-gray-500",
                )}
              >
                {(isPublished && "公開中") || "非公開"}
              </div>
            )}

            {isEqual || (
              <div className="h-3 w-3 rounded-full bg-gray-200"></div>
            )}
            {isEqual || <Link href={`${chefHref}`}>{chefName}</Link>}
          </div>
          <div className="text-gray-500">
            <span className="font-bold">{favCount}</span> お気に入り
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-4">
        <FavoriteButton />
        {isEqual && (
          <Link
            className="block w-full rounded border border-black px-3 py-1 text-center text-sm"
            href={"/my-recipe/new"}
          >
            レシピを編集する
          </Link>
        )}
      </div>
    </>
  );
}
