import { VerticalRecipeList } from "@/components/RecipeList";

// マイページ（人気レシピ）
export default function Popular() {
  return (
    <div className="px-4 pt-5">
      <VerticalRecipeList />
    </div>
  );
}
