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

    <div className="mx-auto my-0 flex min-h-screen max-w-screen-sm gap-3">
      <div className="">
        <h1 className="py-3">ロゴ</h1>
        <nav className="">
          <ul className="">
            <Link href="/" className="block rounded-full  p-2">
              <li className="flex">
                <IconSearch />
                <span className="ml-2">さがす</span>
              </li>
            </Link>
            <Link href="/favorite" className="mt-2 block rounded-full p-2">
              <li className="flex">
                <IconHeart />
                <span className="ml-2">お気に入り</span>
              </li>
            </Link>
            <Link href="/list" className="mt-2 block rounded-full p-2">
              <li className="flex">
                <IconShoppingCart />
                <span className="ml-2">買い物リスト</span>
              </li>
            </Link>
          </ul>
        </nav>
        {/* ボーダーの設定 */}
      </div>
      <main className="flex-1 border-x py-3">{children}</main>
    </div>
  );
}
