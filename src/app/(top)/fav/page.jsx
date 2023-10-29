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
    <div className="flex flex-col gap-y-5">
      <div className="px-4 py-3 border-b">
        <FavBar />
      </div>
      {isSignedIn ? (
        <div className="space-y-12 px-4">
          <Section text="シェフ">
            <SmallChefList />
          </Section>
          <Section text="新着レシピ" showMore href="/new-recipes">
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
