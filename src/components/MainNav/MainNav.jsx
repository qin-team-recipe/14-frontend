import Link from "next/link";
import { Search } from "tabler-icons-react";
import { Heart } from "tabler-icons-react";
import { ShoppingCart } from "tabler-icons-react";
export function MainNav() {
  return (
    // pcサイズの見た目だけしかできてません
    <div className="sticky top-0 w-36">
      <nav>
        <ul className="flex flex-col font-sans">
          <li className="p-5">ロゴ</li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-x-2 rounded-3xl p-3 hover:bg-gray-100"
            >
              <Search size={24} strokeWidth={1} color={"black"} />
              <div>さがす</div>
            </Link>
          </li>
          <li>
            <Link
              href="/favoriteSearch"
              className="flex items-center gap-x-2 rounded-3xl p-3 hover:bg-gray-100"
            >
              <Heart size={24} strokeWidth={1} color={"black"} />
              <div>お気に入り</div>
            </Link>
          </li>
          <li>
            <Link href="/shoppingList" className="flex items-center gap-x-2 rounded-3xl p-3 hover:bg-gray-100">
              <ShoppingCart size={24} strokeWidth={1} color={"black"} />
              <div>買い物リスト</div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
