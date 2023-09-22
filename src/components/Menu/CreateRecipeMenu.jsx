"use client";

import {
  IconChevronDown,
  IconChevronUp,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";
import { Menu } from "./Menu";

// マイレシピ作成画面で使用するメニュー
// TODO: buttonのonClickに処理を追加
export function CreateRecipeMenu({ isEditable }) {
  const items = [
    isEditable
      ? {
          type: "anchor",
          href: "https://yahoo.co.jp/",
          icon: IconEdit,
          text: "編集する",
        }
      : undefined,
    {
      type: "button",
      onClick: () => alert("TODO: 上に移動する"),
      icon: IconChevronUp,
      text: "上に移動する",
    },
    {
      type: "button",
      onClick: () => alert("TODO: 下に移動する"),
      icon: IconChevronDown,
      text: "下に移動する",
    },
    { type: "divider" },
    {
      type: "button",
      onClick: () => alert("TODO: リストから削除する"),
      icon: IconTrash,
      text: "リストから削除する",
    },
  ].filter(Boolean);

  return <Menu items={items} />;
}
