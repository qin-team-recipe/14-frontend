import { VerticalChefList } from "@/components/VerticalChefList/VerticalChefList";

const DUMMY_DATE = [
  {
    id: 1,
    name: "ひふみシェフ",
    image: "https://picsum.photos/88/116?random-1",
    text: "短い文章です",
    numberOf: "",
  },
  {
    id: 2,
    name: "しまぶー",
    image: "https://picsum.photos/88/116?random-2",
    text: "三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します三行で省略します",
    numberOf: "10000",
  },
  {
    id: 3,
    name: "山田太郎",
    image: "https://picsum.photos/88/116?random-3",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    numberOf: "123",
  },
  {
    id: 4,
    name: "りゅーじ",
    image: "https://picsum.photos/88/116?random-4",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    numberOf: "123",
  },
  {
    id: 5,
    name: "長谷部シェフ",
    image: "https://picsum.photos/88/116?random-5",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    numberOf: "123",
  },
];

export default function Home() {
  return (
    
    <div className="p-4">
      <VerticalChefList chefs={DUMMY_DATE} />
    </div>
  );
}
