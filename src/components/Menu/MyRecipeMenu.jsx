import {
  IconCopy,
  IconEdit,
  IconLock,
  IconLockOpen,
  IconTrash,
} from "@tabler/icons-react";

// マイレシピ画面で使用するメニュー
export function MyRecipeMenu({ status = "public" }) {
  return (
    <div className="w-64 rounded-md border shadow-xl">
      <div className="divide-y text-gray-500">
        <div className="space-y-3 px-3 py-2.5 text-gray-500">
          <div className="flex items-center gap-x-2">
            <IconEdit size={16} stroke={1.5} />
            <div className="text-sm">編集する</div>
          </div>
          {/* ステータスに応じてメニューアイテム切り替え */}
          {status === "public" ? (
            <>
              <div className="flex items-center gap-x-2">
                <IconCopy size={16} stroke={1.5} />
                <div className="text-sm">URLをコピーする</div>
              </div>
              <div className="flex items-center gap-x-2">
                <IconLock size={16} stroke={1.5} />
                <div className="text-sm">レシピを非公開にする</div>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-x-2">
              <IconLockOpen size={16} stroke={1.5} />
              <div className="text-sm">レシピを公開する</div>
            </div>
          )}
        </div>
        <div className="space-y-3 px-3 py-2.5 text-gray-500">
          <div className="flex items-center gap-x-2">
            <IconTrash size={16} stroke={1.5} />
            <div className="text-sm">削除する</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// TODO: <div><Icon /><div>テキスト</div></div>はコンポーネントにする
