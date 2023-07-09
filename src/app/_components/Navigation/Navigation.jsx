"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconChefHat,
  IconHeart,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";

// ナビゲーション
export const Navigation = () => {
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
        <NavigationItem text="さがす" icon={<IconSearch />} href="/" />
        <NavigationItem text="お気に入り" icon={<IconHeart />} href="/fav" />
        <NavigationItem
          text="買い物リスト"
          icon={<IconShoppingCart />}
          href="/list"
        />
      </div>
    </nav>
  );
};

// ナビゲーションアイテム
const NavigationItem = ({ text, icon, href }) => {
  // hrefと現在のパスが一致している場合にtrueを返す
  const isActive = usePathname() === href;

  return (
    <Link href={href} className="flex-1 select-none">
      <div
        className={`flex w-full flex-col items-center gap-y-0.5 hover:border-slate-100 sm:-ml-3 sm:w-fit sm:flex-row sm:gap-2 sm:rounded-full sm:py-1.5 sm:pl-3 sm:pr-5 sm:hover:bg-slate-100 sm:active:bg-slate-100 ${
          isActive ? "font-bold" : ""
        }`}
      >
        <div className="h-6 w-6">{icon}</div>
        <div className="text-xs sm:text-base">{text}</div>
      </div>
    </Link>
  );
};
