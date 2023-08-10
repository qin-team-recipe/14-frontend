import {
  IconChefHat,
  IconHeart,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";
import { NavigationItem } from "./NavigationItem";

// ナビゲーション
export function Navigation() {
  return (
    <nav className="fixed bottom-0 z-10 flex w-full flex-col gap-10 sm:sticky sm:w-60 sm:pt-5">
      {/* ロゴ（PCサイズで表示） */}
      <div className="hidden sm:block">
        <div className="flex items-center gap-2.5">
          <IconChefHat />
          <span className="font-bold">Top Chefs</span>
        </div>
      </div>

      {/* ナビゲーションメニュー */}
      <div className="flex border-t pt-1 sm:flex-col sm:justify-start sm:space-y-2 sm:border-none">
        <NavigationItem text="見つける" icon={<IconSearch />} href="/" />
        <NavigationItem text="お気に入り" icon={<IconHeart />} href="/fav" />
        <NavigationItem
          text="買い物リスト"
          icon={<IconShoppingCart />}
          href="/list"
        />
      </div>
    </nav>
  );
}
