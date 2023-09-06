import { VerticalChefImage } from "@/components/VerticalChefImage";

const DUMMY_DATE = [
  {
    id: 1,
    name: "ひふみシェフ",
    image: "https://picsum.photos/88/116?random-1",
  },
  { id: 2, name: "しまぶー", image: "https://picsum.photos/88/116?random-2" },
  { id: 3, name: "山田太郎", image: "https://picsum.photos/88/116?random-3" },
  { id: 4, name: "りゅーじ", image: "https://picsum.photos/88/116?random-4" },
  {
    id: 5,
    name: "長谷部シェフ",
    image: "https://picsum.photos/88/116?random-5",
  },
];

export default function Home() {
  return (
    <div className="px-4">
      <VerticalChefImage chefs={DUMMY_DATE} />
    </div>
  );
}
