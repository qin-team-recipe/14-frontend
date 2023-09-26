"use client";

import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

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
    chefName: "ウルトラハイパー超すごいしまぶーシェフ",

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

export function HorizontalRecipeList() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div ref={emblaRef}>
      <div className="flex gap-4">
        {DUMMY_DATE.map((chef) => (
          <Link
            className="relative w-40 flex-shrink-0"
            key={chef.id}
            href="#TODO"
          >
            <Image
              className="rounded-2xl"
              key={chef.id}
              src={chef.image}
              alt={chef.recipeName}
              width={160}
              height={160}
            />
            <div className="mt-2 line-clamp-2 text-sm font-bold">
              {chef.recipeName}
            </div>
            <div className="mt-0.5 line-clamp-1 text-xs text-gray-400">
              {chef.chefName}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
