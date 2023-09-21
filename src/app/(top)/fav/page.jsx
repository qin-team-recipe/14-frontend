import { AuthScreen } from "@/components/Auth";
import { FavBar } from "@/components/Bar";
import { AddMyRecipeButton } from "@/components/Button";
import { RecipeStatusBadge } from "@/components/Badge";
import { ChefImages } from "@/components/Chef";
import src from "~/images/bakingGirl.png";

export default function Fav() {
  const isSignedIn = true;

  return (
    <div className="px-4 py-3">
      <FavBar />
      {isSignedIn ? <ChefImages /> : <AuthScreen src={src} />}
      <AddMyRecipeButton />
      <RecipeStatusBadge status="public" />
      <RecipeStatusBadge status="private" />
    </div>
  );
}
