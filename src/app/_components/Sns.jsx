import { IconBrandYoutube, IconBrandInstagram, IconDotsCircleHorizontal } from "@tabler/icons-react";
import Link from "next/link";

export function Sns() {
  return (
    <div className="flex gap-3">
      <Link href="https://www.youtube.com/" target="_blank">
        <IconBrandYoutube />
      </Link>
      <Link href="https://www.instagram.com/" target="_blank">
        <IconBrandInstagram />
      </Link>
      <button>
        <IconDotsCircleHorizontal />
      </button>
    </div>
  );
}
