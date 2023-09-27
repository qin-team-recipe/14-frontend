import { Recipe } from "./Recipe";
import { ShowMore } from "../ShowMore";

export function HorizontalRecipeList() {
  return (
    <div className="space-y-2.5">
      <ShowMore href="#" text="新着レシピ" />

      <div className="flex gap-x-4">
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </div>
  );
}
