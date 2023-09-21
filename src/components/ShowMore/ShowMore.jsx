import Link from "next/link";
import { Zen_Antique } from "next/font/google";
import clsx from "clsx";

const ZenAntique = Zen_Antique({
  weight: "400",
  subsets: ["latin"],
});

export function ShowMore({ href, text }) {
  return (
    <div className="flex items-center">
      {text ? (
        <p className={clsx("text-xl", ZenAntique.className)}>{text}</p>
      ) : null}
      <Link
        className="ml-auto font-bold text-gray-400 hover:underline"
        href={href}
      >
        もっと見る
      </Link>
    </div>
  );
}
