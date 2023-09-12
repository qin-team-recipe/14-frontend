export function MenuContainer({ children, icon }) {
  return (
    <div className="flex items-center gap-x-2">
      {icon}
      <div className="text-sm">{children}</div>
    </div>
  );
}
