import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { Bar } from "./Bar";

export function SettingBar() {
  return (
    <Bar
      leftComponent={
        <div className="flex items-center gap-x-4">
          <Link href="/fav">
            <IconArrowLeft stroke={1.5} />
          </Link>
          <span className="text-xl font-bold">設定</span>
        </div>
      }
    />
  );
}
