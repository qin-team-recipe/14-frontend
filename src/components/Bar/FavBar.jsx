import { IconUserCircle, IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import { Bar } from "./Bar";

export function FavBar(props) {
  // 将来的にはロジックをちゃんと書く
  const isSignedIn = true;

  return (
    <Bar
      leftComponent={
        <Link href="/settings">
          <IconMenu stroke={1.5} />
        </Link>
      }
      rightComponent={
        isSignedIn && (
          <Link href="/my-page">
            <IconUserCircle stroke={1.5} />
          </Link>
        )
      }
      {...props}
    >
      お気に入り
    </Bar>
  );
}
