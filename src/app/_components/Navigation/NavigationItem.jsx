"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ナビゲーションアイテム
export const NavigationItem = ({ text, icon, href }) => {
  // 現在のパス取得
  const pathname = usePathname();
  // 現在のパスとhrefが一致している場合はtrueを返す
  const isActive = pathname === href;

  return (
    <Link href={href} className="flex-1 select-none">
      <div
        className={`flex w-full flex-col items-center gap-y-0.5 hover:border-slate-100 sm:-ml-3 sm:w-fit sm:flex-row sm:gap-2 sm:rounded-full sm:py-1.5 sm:pl-3 sm:pr-5 sm:hover:bg-slate-100 sm:active:bg-slate-100 ${
          isActive ? "font-bold" : ""
        }`}
      >
        <div className="h-6 w-6">{icon}</div>
        <span className="text-xs sm:text-base">{text}</span>
      </div>
    </Link>
  );
};
