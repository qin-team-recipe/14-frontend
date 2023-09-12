// メニュー用のコンポーネント
export function Menu({ TopMenuElement, BottomMenuElement }) {
  return (
    <div className="w-64 rounded-md border shadow-xl">
      <div className="divide-y text-gray-500">
        {/* メニュー上部 */}
        {TopMenuElement && (
          <div className="space-y-3 px-3 py-2.5 text-gray-500">
            {TopMenuElement}
          </div>
        )}
        {/* メニュー下部 */}
        {BottomMenuElement && (
          <div className="space-y-3 px-3 py-2.5 text-gray-500">
            {BottomMenuElement}
          </div>
        )}
      </div>
    </div>
  );
}
