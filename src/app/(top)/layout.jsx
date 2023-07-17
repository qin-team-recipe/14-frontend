import { Menu } from "./_components/Menu";

// ナビゲーションは全ページに共通していないと思ったため、一つ階層を増やして設置。
export default function Layout({ children }) {
  return (
    <div className="mx-auto my-0 flex min-h-screen max-w-screen-sm flex-col-reverse gap-3 sm:flex-row">
      <div className="sticky bottom-0  z-auto">
        <div className="sticky bottom-0 border-t sm:top-0 sm:border-0">
          <h1 className="ml-2 hidden py-3 sm:block">ロゴ</h1>
          <nav className="bg-white text-xs sm:text-base">
            <Menu />
          </nav>
        </div>
      </div>
      <main className="flex-1 border-x">{children}</main>
    </div>
  );
}
