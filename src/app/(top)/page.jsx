import { CreateRecipeMenu, MyRecipeMenu, SNSMenu } from "@/components/Menu";
import { SearchBox } from "@/components/SearchBox";

export default function Home() {
  return (
    <div className="px-4 py-2">
      <SearchBox />
      <SNSMenu />
      <div className="py-2"></div>
      <MyRecipeMenu />
      <div className="py-2"></div>
      <CreateRecipeMenu />
    </div>
  );
}
