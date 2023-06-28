import Image from "next/image";
export function MainNav() {
  return (
    <div className="sticky top-0 w-36">
      <nav>
        <ul className="flex font-sans flex-col">
          <li className="p-5">ロゴ</li>
          <li>
            <button className="flex items-center gap-x-2 rounded-3xl p-3 hover:bg-gray-100">
              <Image src="/search.svg" alt="search" width={24} height={24} />
              <div>さがす</div>
            </button>
          </li>
          <li>
            <button className="flex items-center gap-x-2 rounded-3xl p-3 hover:bg-gray-100">
              <Image src="/heart.svg" alt="heart" width={24} height={24} />
              <div>お気に入り</div>
            </button>
          </li>
          <li>
            <button className="flex items-center gap-x-2 rounded-3xl p-3 hover:bg-gray-100">
              <Image
                src="/shopping-cart.svg"
                alt="cart"
                width={24}
                height={24}
              />
              <div>買い物リスト</div>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
