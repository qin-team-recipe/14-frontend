"use client";

import {
  IconCopy,
  IconEdit,
  IconLock,
  IconLockOpen,
  IconTrash,
} from "@tabler/icons-react";
import { Menu } from "./Menu";

// マイレシピ画面で使用するメニュー
export function MyRecipeMenu({ status, handleClick }) {
  const items = [
    {
      type: "anchor",
      href: "#",
      icon: IconEdit,
      text: "編集する",
    },
    ...(status === "public"
      ? [
          {
            type: "button",
            onClick: () => alert("TODO: URLをコピーします"),
            icon: IconCopy,
            text: "URLをコピーする",
          },
          {
            type: "button",
            onClick: () => handleClick(),
            icon: IconLock,
            text: "レシピを非公開にする",
          },
        ]
      : [
          {
            type: "button",
            onClick: () => handleClick(),
            icon: IconLockOpen,
            text: "レシピを公開にする",
          },
        ]),
    { type: "divider" },
    {
      type: "button",
      onClick: () => alert("TODO: 削除する"),
      icon: IconTrash,
      text: "削除する",
    },
  ];

  return <Menu items={items} />;
}
