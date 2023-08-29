import { AuthScreen } from "@/components/Auth";
import { FavBar } from "@/components/Bar";
import { PrivateButton, PublicButton } from "@/components/Button";
import src from "~/images/bakingGirl.png";

export default function Fav() {
  return (
    <div className="px-4 py-3">
      <FavBar />
      <AuthScreen src={src} />
      <PublicButton />
      <PrivateButton />
    </div>
  );
}
