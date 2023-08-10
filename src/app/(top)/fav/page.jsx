import { AuthScreen } from "@/components/Auth";
import src from "~/images/bakingGirl.png";

export default function Fav() {
  return (
    <>
      <p className="text-red-500">お気に入りページ</p>
      <AuthScreen src={src} />
    </>
  );
}
