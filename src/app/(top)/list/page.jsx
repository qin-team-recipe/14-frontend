import { AuthScreen } from "@/components/Auth";
import { ShoppingList } from "@/components/ShoppingList";
import { ListBar } from "@/components/Bar";
import src from "~/images/cookingGirl.png";

export default function List() {
  const isSignedIn = true;

  return (
    <div>
      <div className="px-4 py-3">
        <ListBar />
      </div>
      {isSignedIn ? <ShoppingList /> : <AuthScreen src={src} />}
    </div>
  );
}
