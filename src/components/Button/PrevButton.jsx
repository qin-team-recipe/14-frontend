import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export function PrevButton({ href }) {
  return (
    <Link href={href}>
      <IconArrowLeft />
    </Link>
  );
}
