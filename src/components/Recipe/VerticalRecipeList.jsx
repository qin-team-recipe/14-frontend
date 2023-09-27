import clsx from "clsx";
import { Recipe } from "./Recipe";
import { Zen_Antique } from "next/font/google";

const ZenAntique = Zen_Antique({
  weight: "400",
  subsets: ["latin"],
});

export function VerticalRecipeList() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center">
        <p className={clsx("text-xl", ZenAntique.className)}>
          お気に入りレシピ
        </p>
      </div>
      <div className="flex gap-x-4">
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </div>
  );
}
