import { Navigation } from "@/app/_components/Navigation";
import { CopyButton } from "./_components";
import { Tabs } from "@/components/Tabs";

export default function MyRecipeLayout({ children, params }) {
  return (
    <div className="mx-auto flex min-h-screen sm:max-w-2xl sm:gap-x-5 sm:px-4">
      <Navigation />
      <main className="w-full overflow-hidden border-gray-200 pb-20 sm:border-x">
        <Tabs
          tabItems={[
            { label: "作り方", href: `/recipe/${params.id}` },
            { label: "材料", href: `/recipe/${params.id}/ingredient` },
          ]}
        />

        {children}

        <div className="mt-2 flex justify-end px-4">
          <CopyButton />
        </div>
      </main>
    </div>
  );
}
