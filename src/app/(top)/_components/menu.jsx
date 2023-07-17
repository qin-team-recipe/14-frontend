import Link from "next/link";
import { IconSearch, IconHeart, IconShoppingCart } from "@tabler/icons-react";

const Navigations = [
  {
    url: "/",
    icon: IconSearch,
    text: "探す",
  },
  {
    url: "/favorite",
    icon: IconHeart,
    text: "お気に入り",
  },
  {
    url: "/list",
    icon: IconShoppingCart,
    text: "買い物リスト",
  },
];

export function Menu() {
  return (
    <ul className="flex sm:flex-col">
      {Navigations.map((Navigation) => {
        const IconComponent = Navigation.icon;
        return (
          // rounded-fullはborder-radiusのこと。
          <li key={Navigation.url} className="block flex-1 p-2 hover:bg-gray-200 sm:rounded-full">
            <Link href={Navigation.url} className="flex flex-col items-center sm:flex-row">
              <IconComponent />
              <span className="sm:ml-2">{Navigation.text}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
