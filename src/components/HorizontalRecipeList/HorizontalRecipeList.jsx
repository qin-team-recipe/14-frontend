"use client";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const DUMMY_DATE = [
  {
    id: 1,
    mainText: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    subText: "ウルトラハイパー超すごいしまぶーシェフ",
    image: "https://picsum.photos/160/160?random-1",
  },
  {
    id: 2,
    mainText: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    subText: "ウルトラハイパー超すごいしまぶーシェフ",

    image: "https://picsum.photos/160/160?random-2",
  },
  {
    id: 3,
    mainText: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    subText: "ウルトラハイパー超すごいしまぶーシェフ",
    image: "https://picsum.photos/160/160?random-3",
  },
  {
    id: 4,
    mainText: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    subText: "ウルトラハイパー超すごいしまぶーシェフ",
    image: "https://picsum.photos/160/160?random-4",
  },
  {
    id: 5,
    mainText: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    subText: "ウルトラハイパー超すごいしまぶーシェフ",

    image: "https://picsum.photos/160/160?random-5",
  },
  {
    id: 6,
    mainText: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    subText: "ウルトラハイパー超すごいしまぶーシェフ",

    image: "https://picsum.photos/160/160?random-6",
  },
  {
    id: 7,
    mainText: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    subText: "ウルトラハイパー超すごいしまぶーシェフ",

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
            className="relative flex w-40 flex-shrink-0 flex-col"
            key={chef.id}
            href="#"
          >
            <Image
              className="rounded-2xl"
              key={chef.id}
              src={chef.image}
              alt={chef.mainText}
              width={160}
              height={160}
            />
            <p className="line-clamp-2 text-sm font-bold">{chef.mainText}</p>
            <p className="line-clamp-1 text-xs leading-6 text-gray-400">
              {chef.subText}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
