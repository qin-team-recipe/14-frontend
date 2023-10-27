"use client";

import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { RecipeBadge } from "./RecipeBadge";

const DUMMY_DATA = [
  {
    id: 1,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",
    image: "https://picsum.photos/160/160?random-1",
    favCount: 1234,
    isPublished: true,
  },
  {
    id: 2,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",

    image: "https://picsum.photos/160/160?random-2",
    favCount: 1234,
    isPublished: false,
  },
  {
    id: 3,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",
    image: "https://picsum.photos/160/160?random-3",
    favCount: 123400000000,
    isPublished: true,
  },
  {
    id: 4,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",
    image: "https://picsum.photos/160/160?random-4",
    favCount: 0,
    isPublished: false,
  },
  {
    id: 5,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",

    image: "https://picsum.photos/160/160?random-5",
    favCount: 1234,
    isPublished: true,
  },
  {
    id: 6,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",

    image: "https://picsum.photos/160/160?random-6",
    favCount: 0,
    isPublished: true,
  },
  {
    id: 7,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",

    image: "https://picsum.photos/160/160?random-7",
    favCount: 1234,
    isPublished: true,
  },
];

export function HorizontalRecipeList() {
  const [emblaRef] = useEmblaCarousel();

  const recipes = DUMMY_DATA;

  return (
    <div ref={emblaRef}>
      <div className="flex gap-4">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`recipe/${recipe.id}`}
            className="relative w-40 flex-shrink-0"
          >
            <Image
              className="rounded-2xl"
              key={recipe.id}
              src={recipe.image}
              alt={recipe.recipeName}
              width={160}
              height={160}
            />
            <RecipeBadge>
              {recipe.isPublished ? recipe.favCount : "非公開"}
            </RecipeBadge>
            <div className="mt-2 line-clamp-2 text-sm font-bold">
              {recipe.recipeName}
            </div>
            <div className="mt-1 line-clamp-1 text-xs text-gray-500">
              {recipe.chefName}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
