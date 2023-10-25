import { VerticalRecipeList } from "@/components/RecipeList";

// 検索画面（レシピ部分）
export default function Recipe() {
  return (
    <div className="space-y-2">
      <div className="text-xl font-bold">話題のレシピ</div>
      <VerticalRecipeList />
    </div>
  );
}
