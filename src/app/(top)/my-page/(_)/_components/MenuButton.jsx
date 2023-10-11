"use client";

import { IconDotsCircleHorizontal } from "@tabler/icons-react";

export function MenuButton() {
  return (
    <>
      <button
        onClick={() => alert("TODO: メニュー表示します")}
        className="relative"
      >
        <IconDotsCircleHorizontal size={24} stroke={1.5} />
      </button>
    </>
  );
}
