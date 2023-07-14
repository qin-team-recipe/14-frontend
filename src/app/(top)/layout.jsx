import { MainNav } from "@/components/MainNav";

export default function Layout({ children }) {
  return (
    <div className="flex w-full flex-col sm:items-center">
      <div className="flex">
        {/* ↓stickyが効かない対策のdiv*/}
        <div>
          <MainNav />
        </div>
        {/* スクロール確認用のh-[1000px] */}

        <main className="h-[1000px] w-full sm:w-96 sm:border sm:p-0">{children}</main>
      </div>
    </div>
  );
}
