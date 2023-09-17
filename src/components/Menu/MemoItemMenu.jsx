"use client";

import { IconCircleCheck, IconTrash } from "@tabler/icons-react";
import { Menu } from "./Menu";
import { MenuItemContainer } from "./MenuItemContainer";

// 買い物リスト画面のレシピがある場合のアイテムメニュー
export function MemoItemMenu() {
  return (
    <Menu
      items={[
        {
          type: "item",
          key: "check",
          component: (
            <MenuItemContainer icon={IconCircleCheck}>
              <button onClick={() => {}}>完了したアイテムだけを削除する</button>
            </MenuItemContainer>
          ),
        },
        {
          type: "item",
          key: "delete",
          component: (
            <MenuItemContainer icon={IconTrash}>
              <button onClick={() => {}}>すべてのアイテムを削除する</button>
            </MenuItemContainer>
          ),
        },
      ]}
    />
  );
}
