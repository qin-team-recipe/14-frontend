import { SearchBox } from "@/components/SearchBox";
import { Tabs } from "@/components/Tabs";

export default function SearchLayout({ children }) {
  return (
    <div>
      <div className="p-4">
        <SearchBox />
      </div>
      <Tabs
        tabItems={[
          { label: "レシピ", href: "/search/recipe" },
          { label: "シェフ", href: "/search/chef" },
        ]}
      />
      <div className="p-4">{children}</div>
    </div>
  );
}
