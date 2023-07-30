import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export function PrevButton() {
  return (
    <div>
      <Link href="/">
        <IconArrowLeft />
      </Link>
    </div>
  );
}
