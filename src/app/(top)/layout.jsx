import { Navigation } from "../_components/Navigation";
import { Tabs } from "@/components/Tabs";

export default function TopLayout({ children, params }) {
  const paramsId = params.id;
  return (
    <div className="mx-auto flex sm:max-w-2xl sm:gap-x-5 sm:px-4">
      <Navigation />
      <main className="w-full overflow-hidden border-gray-200 pb-5 sm:border-x">
        {children}
        <Tabs
          tabItems={[
            {
              label: "新着レシピ",
              href: `/profile/${paramsId}`,
            },
            {
              label: "人気レシピ",
              href: `/profile/${paramsId}/newrecipe`,
            },
          ]}
        />
      </main>
    </div>
  );
}
