import { MainNav } from "@/components/MainNav/MainNav";


export default function Layout({ children }) {
  return (
    <div className=" flex flex-col items-center ">
      <div className="flex">
        {/* ↓stickyが効かない対策のdiv*/}
        <div>
          <MainNav />
        </div>
        {/* スクロール確認用のh-[1000px] */}
        <main className="h-[1000px] border">{children}</main>
      </div>
    </div>
  );
}
