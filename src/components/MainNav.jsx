"use client";
import Link from "next/link";
import { Search } from "tabler-icons-react";
import { Heart } from "tabler-icons-react";
import { ShoppingCart } from "tabler-icons-react";
import { usePathname } from "next/navigation";

export function MainNav() {
  // pathnameで現在のurlを取得
  const pathname = usePathname();
  console.log(pathname);
  return (
    // fixedにしてbottomを効かせて、w-screenでborderを画面横全体に引く＋j-aroundを効かせる
    <div className="fixed sm:sticky left-0 sm:top-0 bottom-0 w-screen sm:w-36 sm:mr-3 z-50">
      <nav>
        <ul className="flex sm:flex-col font-sans justify-around border sm:border-none text-[10px] sm:text-base py-0.5">
          <li className="hidden sm:block p-5">ロゴ</li>
          <li>
            {/*colをrowで上書き */}
            <Link
              href="/"
              className="flex flex-col sm:flex-row items-center gap-x-2 rounded-3xl sm:p-3 sm:hover:bg-gray-100"
            >
              <Search
                size={24}
                strokeWidth={`${pathname === "/" ? 2 : 1}`}
                color={"black"}
              />
              {/* ページに合わせて文字の太さを変えたい */}
              <div
                className={`${pathname === "/" ? "font-bold" : "font-sans"}`}
              >
                さがす
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/favoriteSearch"
              className="flex flex-col sm:flex-row items-center gap-x-2 rounded-3xl sm:p-3 sm:hover:bg-gray-100"
            >
              <Heart
                size={24}
                strokeWidth={`${pathname === "/favoriteSearch" ? 2 : 1}`}
                color={"black"}
              />
              <div
                className={`${
                  pathname === "/favoriteSearch" ? "font-bold" : "font-sans"
                }`}
              >
                お気に入り
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/shoppingList"
              className="flex flex-col sm:flex-row items-center gap-x-2 rounded-3xl sm:p-3 sm:hover:bg-gray-100"
            >
              <ShoppingCart
                size={24}
                strokeWidth={`${pathname === "/shoppingList" ? 2 : 1}`}
                color={"black"}
              />
              <div
                className={`${
                  pathname === "/shoppingList" ? "font-bold" : "font-sans"
                }`}
              >
                買い物リスト
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
