import { AuthScreen } from "@/components/Auth";
import { ListBar } from "@/components/Bar";
import src from "~/images/cookingGirl.png";
import { ShoppingList } from "../shoppinsList/ShoppingList";

export default function List() {
  const isSignedIn = true;

  return (
    <div className="px-4 py-3">
      <ListBar />
      {isSignedIn ? <ShoppingList /> : <AuthScreen src={src} />}
    </div>
  );
}
