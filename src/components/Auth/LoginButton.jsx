import { clsx } from "clsx";

// ログインボタン(AuthScreenで使用)
export function LoginButton({
  children,
  icon: Icon,
  onClick,
  disabled,
  bgColor,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center gap-1",
        "text-sm font-bold text-white",
        "rounded-md border px-3 py-2 hover:opacity-80",
        bgColor === "blue"
          ? "border-blue-500 bg-blue-500"
          : "border-black bg-black",
      )}
    >
      {Icon ? <Icon size={18} strokeWidth={3} /> : null}
      {children}
    </button>
  );
}
