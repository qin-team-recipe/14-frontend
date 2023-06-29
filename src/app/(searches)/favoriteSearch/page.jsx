import Link from "next/link";
import { Settings } from "tabler-icons-react";
export default function Home() {
  return (
    <div className="mx-3 mt-3">
      <div className="flex text-center">
        <div className="w-116">お気に入り</div>
        {/* hrefはまだ決めてません */}
        <Link href="#">
        <Settings size={24} strokeWidth={1.5} color={"black"} />
        </Link>
      </div>
    </div>
  );
}
