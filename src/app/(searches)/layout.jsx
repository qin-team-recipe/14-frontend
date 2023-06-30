import { MainNav } from "@/components/MainNav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col sm:items-center w-full">
      <div className="flex">
        {/* ↓stickyが効かない対策のdiv*/}
        <div>
          <MainNav />
        </div>
        {/* スクロール確認用のh-[1000px] */}

        <main className="h-[1000px]  sm:border w-full sm:w-116 p-3 sm:p-0">
          {children}
        </main>
      </div>
    </div>
  );
}
