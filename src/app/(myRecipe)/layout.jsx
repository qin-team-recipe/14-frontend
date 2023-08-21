import { SlideTab } from "@/components/SlideTab/SlideTab";
import { Navigation } from "../_components/Navigation";

export default function myRecipeLayout({ children }) {
  return (
    <div className="mx-auto flex min-h-screen sm:max-w-2xl sm:gap-x-5 sm:px-4">
      <Navigation />
      <div className="w-full overflow-hidden border-gray-200 pb-5 sm:border-x">
        <SlideTab
          tabItem1="作り方"
          tabItem2="材料"
          page1="/Recipe"
          page2="/Ingredient"
        />
        {children}
      </div>
    </div>
  );
}
