// メニュー内の単一アイテムを囲うコンポーネント
export function MenuItemContainer({ children, icon: Icon }) {
  return (
    <div className="flex items-center gap-x-2">
      <Icon size={16} stroke={1.5} />
      <div className="text-sm">{children}</div>
    </div>
  );
}
