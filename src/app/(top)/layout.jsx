import "@/app/globals.css";
import Link from "next/link";
import { IconSearch, IconHeart, IconShoppingCart } from "@tabler/icons-react";

// ナビゲーションは全ページに共通していないと思ったため、一つ階層を増やして設置。
// また、全ページに共通しているものはないと判断したためtopのpage.jsxを削除し、searchをtop階層の替わりとする。
export default function Layout({ children }) {
  return (
    // <div className="mx-auto my-0 flex max-w-screen-sm flex-col sm:flex-row sm:gap-3">
    //   <div className="fixed bottom-0 order-2 w-full sm:sticky sm:order-1">
    //     <h1 className="hidden sm:block">ロゴ</h1>
    //     <nav>
    //       <ul className="flex flex-initial grow justify-between sm:flex-col">
    //         <Link href="/">
    //           <li className="flex">
    //             <IconSearch />
    //             <span>さがす</span>
    //           </li>
    //         </Link>
    //         <Link href="/favorite">
    //           <li className="flex">
    //             <IconHeart />
    //             <span>お気に入り</span>
    //           </li>
    //         </Link>
    //         <Link href="/list">
    //           <li className="flex">
    //             <IconShoppingCart />
    //             <span>買い物リスト</span>
    //           </li>
    //         </Link>
    //       </ul>
    //     </nav>
    //     {/* ボーダーの設定 */}
    //   </div>
    //   <main className="order-1 sm:order-2">{children}</main>
    // </div>

    // tailwindcssの考え方は①スマホサイズの時どうなるか②大きくしたときにどうなるのか③バッティングしたら初期値を与える。「flex flex-col sm:flex-row」のように。
    <div className="mx-auto my-0 flex min-h-screen max-w-screen-sm flex-col-reverse gap-3 sm:flex-row">
      <div className="sticky bottom-0">
        <div className="sticky bottom-0 border-t sm:top-0 sm:border-0">
          <h1 className="ml-2 hidden py-3 sm:block">ロゴ</h1>
          <nav className="text-xs sm:text-base">
            <ul className="flex sm:flex-col">
              {/* rounded-fullはborder-radiusのこと。 */}
              <Link href="/" className="block flex-1 p-2 hover:bg-gray-200 sm:rounded-full">
                <li className="flex flex-col items-center sm:flex-row">
                  <IconSearch />
                  <span className="sm:ml-2">さがす</span>
                </li>
              </Link>
              <Link href="/favorite" className="block flex-1 p-2 hover:bg-gray-200 sm:mt-2 sm:rounded-full">
                <li className="flex flex-col items-center sm:flex-row">
                  <IconHeart />
                  <span className="sm:ml-2">お気に入り</span>
                </li>
              </Link>
              <Link href="/list" className="block flex-1 p-2 hover:bg-gray-200 sm:mt-2 sm:rounded-full">
                <li className="flex flex-col items-center sm:flex-row">
                  <IconShoppingCart />
                  <span className="sm:ml-2">買い物リスト</span>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <main className="flex-1 border-x py-3">{children}</main>
    </div>
  );
}
