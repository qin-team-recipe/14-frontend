"use client";

// ログインボタン(AuthScreenで使用)
export const LoginButton = ({
  label,
  icon: Icon,
  onClick,
  disable,
  bgColor,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`relative w-60 rounded-lg border py-2 text-white ${
        bgColor === "blue"
          ? "border-blue-500 bg-blue-500 text-white"
          : "border-black bg-black text-white"
      }}`}
    >
      <div className="flex items-center justify-center">
        {Icon ? <Icon className="" /> : null}
        <span className="text-base">{label}</span>
      </div>
    </button>
  );
};
