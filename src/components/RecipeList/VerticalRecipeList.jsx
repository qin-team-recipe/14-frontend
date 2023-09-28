"use client";

import Link from "next/link";
import Image from "next/image";

const DUMMY_DATE = [
  {
    id: 1,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",
    image: "https://picsum.photos/160/160?random-1",
  },
  {
    id: 2,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "マイレシピ",

    image: "https://picsum.photos/160/160?random-2",
  },
  {
    id: 3,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",
    image: "https://picsum.photos/160/160?random-3",
  },
  {
    id: 4,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",
    image: "https://picsum.photos/160/160?random-4",
  },
  {
    id: 5,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",

    image: "https://picsum.photos/160/160?random-5",
  },
  {
    id: 6,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",

    image: "https://picsum.photos/160/160?random-6",
  },
  {
    id: 7,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",

    image: "https://picsum.photos/160/160?random-7",
  },
];

export function VerticalRecipeList() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {DUMMY_DATE.map((recipe) => (
        <Link key={recipe.id} href="#TODO">
          <Image
            className="w-full rounded-2xl"
            key={recipe.id}
            src={recipe.image}
            alt={recipe.recipeName}
            width={200}
            height={200}
          />

          <div className="mt-2 line-clamp-2 text-sm font-bold">
            {recipe.recipeName}
          </div>
          <div className="mt-0.5 line-clamp-1 text-xs text-gray-400">
            {recipe.chefName}
          </div>
        </Link>
      ))}
    </div>
  );
}
