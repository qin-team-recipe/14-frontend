"use client";

import {
  IconChevronDown,
  IconChevronUp,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";
import { Menu } from "./Menu";
import { MenuItemContainer } from "./MenuItemContainer";

// マイレシピ作成画面で使用するメニュー
// TODO: buttonのonClickに処理を追加
export function CreateRecipeMenu({ isEdit }) {
  // 編集用のメニューかどうかで切り替える
  return isEdit ? (
    <Menu
      items={[
        {
          type: "item",
          key: "edit",
          component: (
            <MenuItemContainer icon={IconEdit}>
              <button onClick={() => {}}>編集する</button>
            </MenuItemContainer>
          ),
        },
        {
          type: "item",
          key: "up",
          component: (
            <MenuItemContainer icon={IconChevronUp}>
              <button onClick={() => {}}>上に移動する</button>
            </MenuItemContainer>
          ),
        },
        {
          type: "item",
          key: "down",
          component: (
            <MenuItemContainer icon={IconChevronDown}>
              <button onClick={() => {}}>下に移動する</button>
            </MenuItemContainer>
          ),
        },
        {
          type: "divider",
          key: "divider1",
        },
        {
          type: "item",
          key: "delete",
          component: (
            <MenuItemContainer icon={IconTrash}>
              <button onClick={() => {}}>リストから削除する</button>
            </MenuItemContainer>
          ),
        },
      ]}
    />
  ) : (
    <Menu
      items={[
        {
          type: "item",
          key: "up",
          component: (
            <MenuItemContainer icon={IconChevronUp}>
              <button onClick={() => {}}>上に移動する</button>
            </MenuItemContainer>
          ),
        },
        {
          type: "item",
          key: "down",
          component: (
            <MenuItemContainer icon={IconChevronDown}>
              <button onClick={() => {}}>下に移動する</button>
            </MenuItemContainer>
          ),
        },
        {
          type: "divider",
          key: "divider1",
        },
        {
          type: "item",
          key: "delete",
          component: (
            <MenuItemContainer icon={IconTrash}>
              <button onClick={() => {}}>リストから削除する</button>
            </MenuItemContainer>
          ),
        },
      ]}
    />
  );
}
