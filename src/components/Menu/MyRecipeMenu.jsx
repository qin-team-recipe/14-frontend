"use client";

import {
  IconCopy,
  IconEdit,
  IconLock,
  IconLockOpen,
  IconTrash,
} from "@tabler/icons-react";
import { Menu } from "./Menu";
import { MenuItemContainer } from "./MenuItemContainer";

// マイレシピ画面で使用するメニュー
export function MyRecipeMenu({ status }) {
  // statusが公開か非公開かで切り替える
  return status === "public" ? (
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
          key: "copy",
          component: (
            <MenuItemContainer icon={IconCopy}>
              <button onClick={() => {}}>URLをコピーする</button>
            </MenuItemContainer>
          ),
        },
        {
          type: "item",
          key: "unlock",
          component: (
            <MenuItemContainer icon={IconLock}>
              <button onClick={() => {}}>レシピを非公開にする</button>
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
              <button onClick={() => {}}>削除する</button>
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
          key: "edit",
          component: (
            <MenuItemContainer icon={IconEdit}>
              <button onClick={() => {}}>編集する</button>
            </MenuItemContainer>
          ),
        },
        {
          type: "item",
          key: "unlock",
          component: (
            <MenuItemContainer icon={IconLockOpen}>
              <button onClick={() => {}}>レシピを公開にする</button>
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
              <button onClick={() => {}}>削除する</button>
            </MenuItemContainer>
          ),
        },
      ]}
    />
  );
}
