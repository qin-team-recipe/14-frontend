// メニュー用のコンポーネント
export function Menu({ items }) {
  return (
    <div className="w-72 rounded-md border shadow-xl">
      {/* typeに応じてメニューアイテムまたはディバイダーを表示 */}
      {items.map((item) =>
        item.type === "item" ? (
          <div
            key={item.key}
            className="w-full space-y-3 px-3 py-2.5 text-gray-500"
          >
            {item.component}
          </div>
        ) : (
          <hr key={item.key} />
        ),
      )}
    </div>
  );
}
