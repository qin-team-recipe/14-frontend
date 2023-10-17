import { NewRecipesBar } from "@/components/Bar";
import { VerticalRecipeList } from "@/components/RecipeList";

// 新着レシピ画面
export default function NewRecipes() {
  return (
    <div>
      <div className="px-4 py-3">
        <NewRecipesBar />
      </div>

      <div className="px-4 pt-5">
        <VerticalRecipeList />
      </div>
    </div>
  );
}
