import { IconUserCircle, IconMenu } from "@tabler/icons-react";
import Link from "next/link";

export default function FavBar() {
  return (
    <div className="m-8">
      <ul className="flex justify-between">
        <li>
          <IconMenu stroke={1.5} />
        </li>
        <li className="font-bold">お気に入り</li>
        {/* userアイコンだけがないログアウト状態はログイン画面ができてから作ると思ったので飛ばしました */}
        <li>
          <Link href="/fav">
            <IconUserCircle stroke={1.5} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
