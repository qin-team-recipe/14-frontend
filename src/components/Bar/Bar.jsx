import clsx from "clsx";

export function Bar({
  children,
  leftComponent,
  rightComponent,
  noPadding,
  noBorder,
}) {
  return (
    <nav
      className={clsx(
        "flex justify-between",
        noPadding ?? "px-4 py-3",
        noBorder ?? "border-b",
      )}
    >
      {leftComponent ? leftComponent : <div className="h-6 w-6" />}
      <span className="text-xl font-bold">{children}</span>
      {rightComponent ? rightComponent : <div className="h-6 w-6" />}
    </nav>
  );
}
