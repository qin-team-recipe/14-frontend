"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  // pathnameで現在のurlを取得
  const pathname = usePathname();
  console.log(pathname);
  return (
    // fixedにしてbottomを効かせて、w-screenでborderを画面横全体に引く＋j-aroundを効かせる
    <div className="fixed bottom-0 left-0 z-50 w-screen sm:sticky sm:top-0 sm:mr-3 sm:w-36">
      <nav>
        <ul className="flex justify-around border py-0.5 font-sans text-[10px] sm:flex-col sm:border-none sm:text-base">
          <li className="hidden p-5 sm:block">ロゴ</li>
          <li>
            {/*colをrowで上書き */}
            <Link
              href="/"
              className="flex flex-col items-center gap-x-2 rounded-3xl sm:flex-row sm:p-3 sm:hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-search"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width={`${pathname === "/" ? 2 : 1}`}
                stroke="black"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>

              {/* 現在ページとurlが等しい時太字にしています */}
              <div
                className={`${pathname === "/" ? "font-bold" : "font-sans"}`}
              >
                さがす
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/favorite"
              className="flex flex-col items-center gap-x-2 rounded-3xl sm:flex-row sm:p-3 sm:hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-heart"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width={`${pathname === "/favorite" ? 2 : 1}`}
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
              </svg>

              <div
                className={`${
                  pathname === "/favorite" ? "font-bold" : "font-sans"
                }`}
              >
                お気に入り
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/list"
              className="flex flex-col items-center gap-x-2 rounded-3xl sm:flex-row sm:p-3 sm:hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-shopping-cart"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width={`${pathname === "/list" ? 2 : 1}`}
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>

              <div
                className={`${
                  pathname === "/list" ? "font-bold" : "font-sans"
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
