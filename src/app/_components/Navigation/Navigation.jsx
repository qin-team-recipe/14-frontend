import Link from "next/link";
import {
  IconChefHat,
  IconHeart,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";

// ナビゲーション
export const Navigation = () => {
  return (
    // sm以上でナビゲーションを固定する方法については模索中
    <nav className="fixed bottom-0 z-10 sm:sticky sm:w-auto">
      <div className="flex flex-col gap-10 p-5 sm:w-60 ">
        {/* ロゴ（PCサイズで表示） */}
        <div className="hidden sm:block">
          <div className="flex items-center gap-2.5">
            <IconChefHat />
            <span className="font-bold">Top Chefs</span>
          </div>
        </div>

        {/* ナビゲーションメニュー */}
        <div className="flex border-t pt-1 sm:flex-col sm:justify-start sm:space-y-4 sm:border-none">
          <NavigationItem text="さがす" icon={<IconSearch />} href="/" />
          <NavigationItem text="お気に入り" icon={<IconHeart />} href="/fav" />
          <NavigationItem
            text="買い物リスト"
            icon={<IconShoppingCart />}
            href="list"
          />
        </div>
      </div>
    </nav>
  );
};

// ナビゲーションアイテム
const NavigationItem = ({ text, icon, href }) => {
  return (
    <Link
      href={href}
      className="flex w-full flex-col items-center gap-y-1 hover:border-slate-100 sm:flex-row sm:space-x-2 sm:rounded-full sm:py-1.5 sm:hover:bg-slate-100"
    >
      <div className="h-6 w-6">{icon}</div>
      <div className="text-xs sm:text-base">{text}</div>
    </Link>
  );
};
