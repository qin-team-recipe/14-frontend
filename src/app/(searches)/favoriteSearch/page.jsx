import Link from "next/link";
import { Settings } from "tabler-icons-react";
export default function Home() {
  return (
    <div className="sm:mx-3 sm:mt-3">
      <div className="flex justify-between">
      {/* justify-betweenで中央と右端に置くための空のdivです */}
        <div></div>
        <div className="">お気に入り</div>
        <Link href="#">
        <Settings size={20} strokeWidth={1.5} color={"black"} />
        </Link>
      </div>
      {/* hrefはまだ決めてません */}
    </div>
  );
}
