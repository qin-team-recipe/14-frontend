import { Tabs } from "@/components/Tabs";
import { ChefPageDetail } from "./_components/ChefPageDetail";

export default function Profile({ id }) {
  console.log("aaa");
  return (
    <div>
      <ChefPageDetail id={id} />
      <Tabs
        tabItems={[
          { label: "新着レシピ", href: "/recipe" },
          { label: "人気レシピ", href: "/ingredient" },
        ]}
      />
    </div>
  );
}
