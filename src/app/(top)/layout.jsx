import Link from "next/link";
import { IconSearch, IconHeart, IconShoppingCart } from "@tabler/icons-react";

// ナビゲーションは全ページに共通していないと思ったため、一つ階層を増やして設置。
//(忘れないように)繰り返して同じクラス名を付与する部分をどうにか改善したい。global.cssを使う？
export default function Layout({ children }) {
  return (
    <div className="mx-auto my-0 flex min-h-screen max-w-screen-sm flex-col-reverse gap-3 sm:flex-row">
      <div className="sticky bottom-0">
        <div className="sticky bottom-0 border-t sm:top-0 sm:border-0">
          <h1 className="ml-2 hidden py-3 sm:block">ロゴ</h1>
          <nav className="text-xs sm:text-base">
            <ul className="flex sm:flex-col">
              {/* rounded-fullはborder-radiusのこと。 */}
              <li className="flex flex-col items-center sm:flex-row">
                <Link href="/" className="block flex-1 p-2 hover:bg-gray-200 sm:rounded-full">
                  <IconSearch />
                  <span className="sm:ml-2">さがす</span>
                </Link>
              </li>
              <li className="flex flex-col items-center sm:flex-row">
                <Link href="/favorite" className="block flex-1 p-2 hover:bg-gray-200 sm:mt-2 sm:rounded-full">
                  <IconHeart />
                  <span className="sm:ml-2">お気に入り</span>
                </Link>
              </li>
              <li className="flex flex-col items-center sm:flex-row">
                <Link href="/list" className="block flex-1 p-2 hover:bg-gray-200 sm:mt-2 sm:rounded-full">
                  <IconShoppingCart />
                  <span className="sm:ml-2">買い物リスト</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <main className="flex-1 border-x">{children}</main>
    </div>
  );
}
