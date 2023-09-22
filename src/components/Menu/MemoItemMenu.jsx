"use client";

import { IconCircleCheck, IconTrash } from "@tabler/icons-react";
import { Menu } from "./Menu";

// 買い物リスト画面のレシピがある場合のアイテムメニュー
export function MemoItemMenu() {
  return (
    <Menu
      items={[
        {
          type: "button",
          onClick: () => alert("TODO: 完了したアイテムだけを削除する"),
          icon: IconCircleCheck,
          text: "完了したアイテムだけを削除する",
        },
        {
          type: "button",
          onClick: () => alert("TODO: すべてのアイテムを削除する"),
          icon: IconTrash,
          text: "すべてのアイテムを削除する",
        },
      ]}
    />
  );
}
