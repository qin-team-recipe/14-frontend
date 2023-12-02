"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";

export function Tabs({ tabItems }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  return (
    <div className="flex border-b text-center text-sm">
      {tabItems.map((item) => {
        return (
          <Link
            key={item.href}
            href={`${item.href}${query ? `?${query}` : ""}`}
            className={clsx(
              "flex-1 py-2.5",
              pathname === item.href && "border-b-2 border-black font-bold",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
