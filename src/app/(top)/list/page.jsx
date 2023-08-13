import { AuthScreen } from "@/components/Auth";
import src from "~/images/cookingGirl.png";

export default function List() {
  return (
    <>
      <p className="text-red-500">お買い物リストページ</p>
      <AuthScreen src={src} />
    </>
  );
}
