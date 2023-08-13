import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export function PrevButton() {
  return (
    <Link href="/">
      <IconArrowLeft />
    </Link>
  );
}
