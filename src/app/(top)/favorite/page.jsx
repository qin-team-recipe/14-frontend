import Link from "next/link";
import { IconSettings } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="p-2 sm:mx-3 sm:mt-3">
      <div className="flex justify-between">
        {/* justify-betweenで中央と右端に置くための空のdivです */}
        <div></div>
        <div className="">お気に入り</div>
        {/* hrefはまだ決めてません */}
        <Link href="#">
          <IconSettings />
        </Link>
      </div>
    </div>
  );
}
