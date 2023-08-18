import { AuthScreen } from "@/components/Auth";
import { ListBar } from "@/components/Bar";
import src from "~/images/cookingGirl.png";

export default function List() {
  return (
    <div className="px-4 py-3">
      <ListBar />
      <AuthScreen src={src} />
    </div>
  );
}
