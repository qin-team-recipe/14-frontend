import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { Bar } from "./Bar";

export function BarWithBackLink({ title, href }) {
  return (
    <Bar
      leftComponent={
        <div className="flex items-center gap-x-4">
          <Link href={href}>
            <IconArrowLeft stroke={1.5} />
          </Link>
          <span className="text-xl font-bold">{title}</span>
        </div>
      }
    />
  );
}
