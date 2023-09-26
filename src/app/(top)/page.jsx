import { SearchBox } from "@/components/SearchBox";
import { Section } from "@/components/Section";
import { HorizontalRecipeList } from "@/components/RecipeList";
import { VerticalChefList, HorizontalChefList } from "@/components/ChefList";

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
];

export default function Home() {
  return (
    <div className="flex flex-col gap-y-5 p-4 pb-20">
      <SearchBox />

      <div className="space-y-12">
        <Section text="注目のシェフ">
          <HorizontalChefList />
        </Section>

        <Section text="話題のレシピ" href="/search/recipe" showMore>
          <HorizontalRecipeList />
        </Section>

        <Section text="シェフ" href="/search/chef" showMore>
          <VerticalChefList chefs={DUMMY_DATE} />
        </Section>
      </div>
    </div>
  );
}
