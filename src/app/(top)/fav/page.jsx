import { FavBar } from "@/components/Bar";
import { ChefImages } from "@/components/Chef/ChefImages";
// import src from "~/images/bakingGirl.png";

export default function Fav() {
  return (
    <div className="px-4 py-3">
      <FavBar />
      <ChefImages />
    </div>
  );
}
