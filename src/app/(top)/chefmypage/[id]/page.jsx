import { AddMyRecipeButton } from "@/components/Button";
import RecipeCard from "./_components/RecipeCard";

export default function NewRecipe() {
  const chefCards = Array.from({ length: 20 }).map((_, i) => {
    return (
      <RecipeCard
        title="メイン文章メイン文章メイン文章メイン文章メイン文章メイン文章メイン文章メイン文章メイン文章"
        summary="補足文章補足文章補足文章補足文章補足文章補足文章補足文章補足文章補足文章補足文章"
        key={i}
      />
    );
  });
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">{chefCards}</div>
      <div className="top-0  sticky">
        <AddMyRecipeButton />
      </div>
    </div>
  );
}
