"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SlideTab({ page1, page2, tabItem1, tabItem2 }) {
  const pathname = usePathname();

  return (
    <div className="flex pt-2 text-center text-sm">
      <div
        className={`w-1/2 pb-2 ${
          pathname === page1 ? "border-b-2 border-black font-bold" : "border-b"
        }`}
      >
        <Link className="w-full" href={page1}>
          {tabItem1}
        </Link>
      </div>
      <div
        className={`w-1/2 pb-2 ${
          pathname === page2 ? "border-b-2 border-black font-bold" : "border-b"
        }`}
      >
        <Link className="w-full" href={page2}>
          {tabItem2}
        </Link>
      </div>
    </div>
  );
}

/* 使い方です
   <SlideTab tabItem1="作り方" tabItem2="材料" page１="/xx" page2="/xx" /> 
   */
