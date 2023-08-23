"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Tabs({ tabItems }) {
  const pathname = usePathname();

  return (
    <div className="flex border-b text-center text-sm">
      {tabItems.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "flex-1 py-2.5",
              pathname === item.href && "border-b-2 border-black font-bold"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
