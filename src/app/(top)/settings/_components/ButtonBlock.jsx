"use client";

export function ButtonBlock({ children, icon }) {
  return (
    <button
      onClick={() => alert("TODO: モーダル出します")}
      className="flex w-full justify-between gap-x-4 px-4 py-3"
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}
