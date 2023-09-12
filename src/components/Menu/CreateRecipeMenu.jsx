import {
  IconChevronDown,
  IconChevronUp,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";
import { MenuContainer } from "./MenuContainer";

// マイレシピ作成画面で使用するメニュー
export function CreateRecipeMenu() {
  return (
    <div className="w-64 rounded-md border shadow-xl">
      <div className="divide-y text-gray-500">
        <div className="space-y-3 px-3 py-2.5 text-gray-500">
          <MenuContainer icon={IconEdit}>編集する</MenuContainer>
          <MenuContainer icon={IconChevronUp}>上に移動する</MenuContainer>
          <MenuContainer icon={IconChevronDown}>下に移動する</MenuContainer>
        </div>
        <div className="space-y-3 px-3 py-2.5 text-gray-500">
          <MenuContainer icon={IconTrash}>リストから削除する</MenuContainer>
        </div>
      </div>
    </div>
  );
}
