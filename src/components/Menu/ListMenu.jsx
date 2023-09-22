"use client";

import { IconChevronDown, IconChevronUp, IconTrash } from "@tabler/icons-react";
import { Menu } from "./Menu";

// 買い物リスト画面で使用するリストメニュー
export function ListMenu({ order, itemsLength }) {
  const items = [
    order === 0
      ? undefined
      : {
          type: "button",
          onClick: () => alert("TODO: 上に移動する"),
          icon: IconChevronUp,
          text: "上に移動する",
        },
    order === itemsLength
      ? undefined
      : {
          type: "button",
          onClick: () => alert("TODO: 下に移動する"),
          icon: IconChevronDown,
          text: "下に移動する",
        },
    { type: "divider" },
    {
      type: "button",
      onClick: () => alert("TODO: アイテムを削除する"),
      icon: IconTrash,
      text: "アイテムを削除する",
    },
  ].filter(Boolean);

  return <Menu items={items} />;
}
