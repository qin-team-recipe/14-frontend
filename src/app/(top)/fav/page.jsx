import { AuthScreen } from "@/components/Auth";
import { FavBar } from "@/components/Bar";
import src from "~/images/bakingGirl.png";

export default function Fav() {
  return (
    <div className="py-3 px-4">
      <FavBar />
      <AuthScreen src={src} />
    </div>
  );
}
