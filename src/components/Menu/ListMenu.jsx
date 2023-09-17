import { IconChevronDown, IconChevronUp, IconTrash } from "@tabler/icons-react";
import { Menu } from "./Menu";
import { MenuItemContainer } from "./MenuItemContainer";

// 買い物リスト画面で使用するリストメニュー
export function ListMenu({ listItemCount }) {
  // リストアイテムの数が1かどうかで切り替え
  return listItemCount === 1 ? (
    <Menu
      items={[
        {
          type: "item",
          key: "down",
          component: (
            <MenuItemContainer icon={IconChevronDown}>
              下に移動する
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
              アイテムを削除する
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
              上に移動する
            </MenuItemContainer>
          ),
        },
        {
          type: "item",
          key: "down",
          component: (
            <MenuItemContainer icon={IconChevronDown}>
              下に移動する
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
              アイテムを削除する
            </MenuItemContainer>
          ),
        },
      ]}
    />
  );
}
