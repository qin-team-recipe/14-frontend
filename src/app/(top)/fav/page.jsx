import { AuthScreen } from "@/components/Auth";
import { FavBar } from "@/components/Bar";

import { ChefImages } from "@/components/Chef";
import { HorizontalRecipeList, VerticalRecipeList } from "@/components/Recipe";
import src from "~/images/bakingGirl.png";

export default function Fav() {
  const isSignedIn = true;

  return (
    <div className="px-4 py-3">
      <FavBar />
      {isSignedIn ? (
        <div className="space-y-12">
          <ChefImages />
          <HorizontalRecipeList />
          <VerticalRecipeList />
        </div>
      ) : (
        <AuthScreen src={src} />
      )}
    </div>
  );
}
