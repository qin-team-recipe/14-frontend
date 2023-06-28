import "@/app/globals.css";
import Link from "next/link";
import { IconName } from "@tabler/icons";

// ナビゲーションは全ページに共通していないと思ったため、一つ階層を増やして設置。
// また、全ページに共通しているものはないと判断したためtopのpage.jsxを削除し、searchをtop階層の替わりとする。
export default function Layout({ children }) {
  return (
    <div className="flex">
      <div>
        <h1>ロゴ</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-search"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                  <path d="M21 21l-6 -6"></path>
                </svg>
                さがす
              </Link>
            </li>
            <li>
              <Link href="/favorite">お気に入り</Link>
            </li>
            <li>
              <Link href="/list">買い物リスト</Link>
            </li>
          </ul>
        </nav>
        {/* ボーダーの設定 */}
      </div>
      <main>{children}</main>
    </div>
  );
}
