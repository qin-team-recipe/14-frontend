import { AuthScreen } from "@/components/Auth";
import { FavBar } from "@/components/Bar";
import { SmallChefList } from "@/components/ChefList";
import {
  HorizontalRecipeList,
  VerticalRecipeList,
} from "@/components/RecipeList";

import { Section } from "@/components/Section";
import src from "~/images/bakingGirl.png";

export default function Fav() {
  const isSignedIn = true;

  return (
    <div className="px-4 py-3">
      <FavBar />
      {isSignedIn ? (
        <div className="space-y-12">
          <Section text="シェフ">
            <SmallChefList />
          </Section>
          <Section text="新着レシピ" showMore href="#">
            <HorizontalRecipeList />
          </Section>
          <Section text="お気に入りレシピ">
            <VerticalRecipeList />
          </Section>
        </div>
      ) : (
        <AuthScreen src={src} />
      )}
    </div>
  );
}
