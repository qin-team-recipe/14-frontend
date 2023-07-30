import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function PrevButton() {
  return (
    <div>
      {/* 戻る矢印 */}
      <Link href="/">
        <IconArrowLeft />
      </Link>
    </div>
  );
}
