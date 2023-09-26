import { VerticalChefList } from "@/components/ChefList";

//topページのDUMMY_DATEより数が多いです
const DUMMY_DATE = [
  {
    id: 1,
    name: "ひふみシェフ",
    image: "https://picsum.photos/88/116?random-1",
    text: "短い文章です",
    recipeLength: 0,
  },
  {
    id: 2,
    name: "しまぶー",
    image: "https://picsum.photos/88/116?random-2",
    text: "三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します",
    recipeLength: 10000,
  },
  {
    id: 3,
    name: "山田太郎",
    image: "https://picsum.photos/88/116?random-3",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    recipeLength: 123,
  },
  {
    id: 4,
    name: "りゅーじ",
    image: "https://picsum.photos/88/116?random-4",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    recipeLength: 123,
  },
  {
    id: 5,
    name: "長谷部シェフ",
    image: "https://picsum.photos/88/116?random-5",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    recipeLength: 123,
  },
  {
    id: 6,
    name: "一郎シェフ",
    image: "https://picsum.photos/88/116?random-6",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    recipeLength: 123,
  },
  {
    id: 7,
    name: "二郎シェフ",
    image: "https://picsum.photos/88/116?random-7",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    recipeLength: 123,
  },
  {
    id: 8,
    name: "三郎シェフ",
    image: "https://picsum.photos/88/116?random-8",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    recipeLength: 123,
  },
  {
    id: 9,
    name: "四郎シェフ",
    image: "https://picsum.photos/88/116?random-9",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    recipeLength: 123,
  },
  {
    id: 10,
    name: "五郎シェフ",
    image: "https://picsum.photos/88/116?random-10",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    recipeLength: 123,
  },
];

export default function Chef() {
  return <VerticalChefList chefs={DUMMY_DATE} />;
}
