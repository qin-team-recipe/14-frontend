import { VerticalRecipeList } from "@/components/RecipeList";

// 検索画面（レシピ部分）
export default function Recipe({ searchParams }) {
  return (
    <div className="space-y-2">
      <div className="text-xl font-bold">
        {searchParams.q ? `「${searchParams.q}」で検索` : "話題のレシピ"}
      </div>
      <VerticalRecipeList />
    </div>
  );
}
