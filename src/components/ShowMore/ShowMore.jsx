import Link from "next/link";

export function ShowMore({ href }) {
  return (
    <Link className="font-bold text-gray-400 hover:underline" href={href}>
      もっと見る
    </Link>
  );
}
