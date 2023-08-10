import { IconUserCircle, IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import { Bar } from "./Bar";

export function FavBar() {
  // 将来的にはロジックをちゃんと書く
  const isSignedIn = true;

  return (
    <Bar
      leftComponent={
        <Link href="#">
          <IconMenu stroke={1.5} />
        </Link>
      }
      rightComponent={
        isSignedIn && (
          <Link href="/fav">
            <IconUserCircle stroke={1.5} />
          </Link>
        )
      }
    >
      お気に入り
    </Bar>
  );
}
