import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconDotsCircleHorizontal,
} from "@tabler/icons-react";
import Link from "next/link";

export function Sns() {
  return (
    // map関数を使用するとコードが長くなると思ったため、このまま。
    <div className="flex gap-3">
      <Link href="https://www.youtube.com/">
        <IconBrandYoutube />
      </Link>
      <Link href="https://www.instagram.com/">
        <IconBrandInstagram />
      </Link>
      <IconDotsCircleHorizontal />
    </div>
  );
}
