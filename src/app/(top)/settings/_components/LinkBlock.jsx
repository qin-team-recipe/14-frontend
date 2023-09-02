import Link from "next/link";

// TODO: hrefのデフォルト値はあとで外す(現状はエラー回避のため設定)
export function LinkBlock({ children, icon, href = "#" }) {
  return (
    <Link href={href} className="flex justify-between gap-x-4">
      <p>{children}</p>
      {icon}
    </Link>
  );
}
