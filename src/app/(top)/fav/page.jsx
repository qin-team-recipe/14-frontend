import { AuthScreen } from "@/components/Auth";
import { FavBar } from "@/components/Bar";
import { AddMyRecipeButton } from "@/components/Button";
import src from "~/images/bakingGirl.png";

export default function Fav() {
  return (
    <div className="px-4 py-3">
      <FavBar />
      <AuthScreen src={src} />
      <AddMyRecipeButton />
    </div>
  );
}
