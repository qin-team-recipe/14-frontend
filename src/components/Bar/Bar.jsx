export function Bar({ children, leftComponent, rightComponent }) {
  return (
    <nav className="flex justify-between">
      {leftComponent ? leftComponent : <div className="h-6 w-6" />}
      <span className="font-bold  ">{children}</span>
      {rightComponent ? rightComponent : <div className="h-6 w-6" />}
    </nav>
  );
}
