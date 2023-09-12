import {
  IconChevronDown,
  IconChevronUp,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";
import { MenuItemContainer } from "./MenuItemContainer";

// マイレシピ作成画面で使用するメニュー
export function CreateRecipeMenu() {
  return (
    <div className="w-64 rounded-md border shadow-xl">
      <div className="divide-y text-gray-500">
        <div className="space-y-3 px-3 py-2.5 text-gray-500">
          <MenuItemContainer icon={IconEdit}>編集する</MenuItemContainer>
          <MenuItemContainer icon={IconChevronUp}>
            上に移動する
          </MenuItemContainer>
          <MenuItemContainer icon={IconChevronDown}>
            下に移動する
          </MenuItemContainer>
        </div>
        <div className="space-y-3 px-3 py-2.5 text-gray-500">
          <MenuItemContainer icon={IconTrash}>
            リストから削除する
          </MenuItemContainer>
        </div>
      </div>
    </div>
  );
}
