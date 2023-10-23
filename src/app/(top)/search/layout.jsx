import Link from "next/link";
import { SearchBox } from "@/components/SearchBox";
import { Tabs } from "@/components/Tabs";
import { IconArrowLeft } from "@tabler/icons-react";

export default function SearchLayout({ children }) {
  return (
    <div>
      <div className="flex items-center gap-3 p-4">
        <Link href="/">
          <IconArrowLeft className="text-gray-500" />
        </Link>
        <SearchBox hasCloseIcon />
      </div>
      <Tabs
        tabItems={[
          { label: "レシピ", href: "/search/recipe" },
          { label: "シェフ", href: "/search/chef" },
        ]}
      />
      <div className="px-4 py-5">{children}</div>
    </div>
  );
}
