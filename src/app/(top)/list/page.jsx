import { AuthScreen } from "@/components/Auth";
import { ListBar } from "@/components/Bar";
import src from "~/images/cookingGirl.png";

export default function List() {
  return (
    <div className="py-3 px-4">
      <ListBar />
      <AuthScreen src={src} />
    </div>
  );
}
