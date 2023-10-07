"use client";

import Link from "next/link";
import Image from "next/image";
import { FavCountBadge } from "../Badge";

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
    chefName: "マイシェフ",

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
    favCount: 1234,
    isPublished: true,
  },
  {
    id: 4,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",
    image: "https://picsum.photos/160/160?random-4",
    favCount: 456,
    isPublished: true,
  },
  {
    id: 5,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",

    image: "https://picsum.photos/160/160?random-5",
    favCount: 50000,
    isPublished: false,
  },
  {
    id: 6,
    recipeName:
      "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",

    image: "https://picsum.photos/160/160?random-6",
    favCount: 50000,
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

export function VerticalRecipeList() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {DUMMY_DATA.map((recipe) => (
        <Link key={recipe.id} href="#TODO" className="relative">
          <Image
            className="w-full rounded-2xl"
            key={recipe.id}
            src={recipe.image}
            alt={recipe.recipeName}
            width={200}
            height={200}
          />
          <FavCountBadge isPublished={recipe.isPublished}>
            {recipe.favCount.toLocaleString()}
          </FavCountBadge>

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
