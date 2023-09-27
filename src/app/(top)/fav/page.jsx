import { AuthScreen } from "@/components/Auth";
import { FavBar } from "@/components/Bar";

import { ChefImages } from "@/components/Chef";
import src from "~/images/bakingGirl.png";

export default function Fav() {
  const isSignedIn = true;

  return (
    <div className="px-4 py-3">
      <FavBar />
      {isSignedIn ? (
        <div className="space-y-12">
          <ChefImages />
        </div>
      ) : (
        <AuthScreen src={src} />
      )}
    </div>
  );
}
