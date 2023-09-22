"use client";

import {
  IconChefHat,
  IconChevronDown,
  IconCircleCheck,
  IconTrash,
} from "@tabler/icons-react";
import { Menu } from "./Menu";

// 買い物リスト画面のレシピがある場合のアイテムメニュー
export function RecipeItemMenu() {
  return (
    <Menu
      items={[
        {
          type: "anchor",
          href: "https://yahoo.co.jp/",
          icon: IconChefHat,
          text: "レシピ詳細をみる",
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
          onClick: () => alert("TODO: 完了したアイテムだけ削除する"),
          icon: IconCircleCheck,
          text: "完了したアイテムだけ削除する",
        },
        {
          type: "button",
          onClick: () => alert("TODO: レシピを買い物リストから削除する"),
          icon: IconTrash,
          text: "レシピを買い物リストから削除する",
        },
      ]}
    />
  );
}
