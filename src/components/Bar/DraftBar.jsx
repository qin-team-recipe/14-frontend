import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { Bar } from "./Bar";

// TODO: Linkの遷移先を指定する
export function DraftBar() {
  return (
    <Bar
      leftComponent={
        <div className="flex gap-x-4">
          <Link href="#">
            <IconArrowLeft stroke={1.5} />
          </Link>
          <span className="font-bold text-gray-500">下書き</span>
        </div>
      }
    />
  );
}
