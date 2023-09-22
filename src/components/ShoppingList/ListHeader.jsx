"use client";

import { IconDotsCircleHorizontal, IconPlus } from "@tabler/icons-react";

export function ListHeader({ label }) {
  return (
    <div className="flex items-center gap-x-4 px-4">
      <div className="mr-auto line-clamp-1 flex-1 font-bold">{label}</div>

      <button onClick={() => alert("TODO: 実装")}>
        <IconPlus className="h-5 w-5" stroke={1.5} />
      </button>

      <button onClick={() => alert("TODO: 実装")}>
        <IconDotsCircleHorizontal className="h-5 w-5" stroke={1.5} />
      </button>
    </div>
  );
}
