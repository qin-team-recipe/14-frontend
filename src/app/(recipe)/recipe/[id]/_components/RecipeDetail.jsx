import Image from "next/image";
import Link from "next/link";
import { Sns } from "@/components/Sns";
import { AddToggle } from "./AddToggle";

export function RecipeDetail({ pathId }) {
  // DUMMY_DATAのisAddedは将来的にお気に入り追加済みかどうかを判断するのに使う予定です
  const DUMMY_DATA = [
    {
      id: 1,
      recipeName:
        "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
      chefName: "ウルトラハイパー超すごいしまぶーシェフ",
      chefHref: `/profile/${pathId}`,
      Description:
        "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",
      image: "https://picsum.photos/300/300?random-1",
      favCount: 1234,
      isAdded: true,
    },
    {
      id: 2,
      recipeName:
        "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
      chefName: "ウルトラハイパー超すごいしまぶーシェフ",
      chefHref: `/profile/${pathId}`,
      Description:
        "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",

      image: "https://picsum.photos/300/300?random-2",
      favCount: 1234,
      isAdded: false,
    },
    {
      id: 3,
      recipeName:
        "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
      chefName: "ウルトラハイパー超すごいしまぶーシェフ",
      chefHref: `/profile/${pathId}`,
      Description:
        "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",
      image: "https://picsum.photos/300/300?random-3",
      favCount: 123400000000,
      isAdded: true,
    },
    {
      id: 4,
      recipeName:
        "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
      chefName: "ウルトラハイパー超すごいしまぶーシェフ",
      chefHref: `/profile/${pathId}`,
      Description:
        "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",
      image: "https://picsum.photos/300/300?random-4",
      favCount: 0,
      isAdded: false,
    },
    {
      id: 5,
      recipeName:
        "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
      chefName: "ウルトラハイパー超すごいしまぶーシェフ",
      chefHref: `/profile/${pathId}`,
      Description:
        "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",

      image: "https://picsum.photos/300/300?random-5",
      favCount: 1234,
      isAdded: true,
    },
    {
      id: 6,
      recipeName:
        "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
      chefName: "ウルトラハイパー超すごいしまぶーシェフ",
      chefHref: `/profile/${pathId}`,
      Description:
        "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",

      image: "https://picsum.photos/300/300?random-6",
      favCount: 0,
      isAdded: true,
    },
    {
      id: 7,
      recipeName:
        "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
      chefName: "ウルトラハイパー超すごいしまぶーシェフ",
      chefHref: `/profile/${pathId}`,
      Description:
        "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",

      image: "https://picsum.photos/300/300?random-7",
      favCount: 1234,
      isAdded: true,
    },
  ];

  const selectedData = DUMMY_DATA[pathId - 1];
  return (
    <>
      <div className="relative mb-4">
        <Image
          className="w-full sm:h-screen"
          src={selectedData.image}
          width={500}
          height={500}
          priority
          alt={selectedData.recipeName}
        />
        <div className="absolute bottom-0 left-0 h-10 w-full bg-gradient-to-b from-transparent to-white opacity-70"></div>
      </div>
      <div className="mx-4 space-y-4">
        <div className="flex">
          <div className="text-xl font-bold">{selectedData.recipeName}</div>
          <div className="ml-4">
            <Sns />
          </div>
        </div>
        <div className="text-sm">{selectedData.Description}</div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <div className="h-3 w-3 rounded-full bg-gray-200"></div>
            <Link href={`${selectedData.chefHref}`}>
              {selectedData.chefName}
            </Link>
          </div>
          <div className="text-xs text-gray-500">
            <span className="font-bold">{selectedData.favCount}</span>{" "}
            お気に入り
          </div>
        </div>
      </div>
      <div className="mt-4 px-4">
        <AddToggle add="お気に入りに追加" addEd="お気に入りに追加済" />
      </div>
    </>
  );
}
