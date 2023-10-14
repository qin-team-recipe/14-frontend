import { VerticalRecipeList } from "@/components/RecipeList";

// マイページ（新着レシピ）
export default function MyPage() {
  return (
    <div className="px-4 pt-5">
      <VerticalRecipeList />
    </div>
  );
}
