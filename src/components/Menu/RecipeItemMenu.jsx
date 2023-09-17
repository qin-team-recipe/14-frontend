"use client";

import {
  IconChefHat,
  IconChevronDown,
  IconCircleCheck,
  IconTrash,
} from "@tabler/icons-react";
import { Menu } from "./Menu";
import { MenuItemContainer } from "./MenuItemContainer";

// 買い物リスト画面のレシピがある場合のアイテムメニュー
export function RecipeItemMenu() {
  return (
    <Menu
      items={[
        {
          type: "item",
          key: "show",
          component: (
            <MenuItemContainer icon={IconChefHat}>
              <button onClick={() => {}}>レシピ詳細をみる</button>
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
          key: "check",
          component: (
            <MenuItemContainer icon={IconCircleCheck}>
              <button onClick={() => {}}>完了したアイテムだけ削除する</button>
            </MenuItemContainer>
          ),
        },
        {
          type: "item",
          key: "delete",
          component: (
            <MenuItemContainer icon={IconTrash}>
              <button onClick={() => {}}>
                レシピを買い物リストから削除する
              </button>
            </MenuItemContainer>
          ),
        },
      ]}
    />
  );
}
