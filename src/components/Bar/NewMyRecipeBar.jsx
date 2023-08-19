import Link from "next/link";
import { IconX } from "@tabler/icons-react";
import { Bar } from "./Bar";

export function NewMyRecipeBar() {
  return (
    <Bar
      leftComponent={
        <Link href="#">
          <IconX stroke={1.5} />
        </Link>
      }
      rightComponent={
        <Link
          href="/my-recipe/draft"
          className="text-base font-bold text-gray-500"
        >
          下書き一覧
        </Link>
      }
    />
  );
}
