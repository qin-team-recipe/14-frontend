import { AuthScreen } from "@/components/Auth";
// import { ListBar } from "@/components/Bar";
import src from "~/images/cookingGirl.png";
import { ShoppingList } from "../shoppingList/ShoppingList";

export default function List() {
  const isSignedIn = true;

  return (
    <div className="">
      {/* <ListBar /> */}
      {isSignedIn ? <ShoppingList /> : <AuthScreen src={src} />}
    </div>
  );
}
