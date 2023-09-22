"use client";

import { IconCircle, IconDotsVertical } from "@tabler/icons-react";

export function IngredientList({ name }) {
  return (
    <div className="flex items-center justify-between gap-x-4">
      <button onClick={() => alert("TODO: 実装")}>
        <IconCircle className="text-red-400" stroke={1.5} />
      </button>

      <div className="flex-1 text-sm">{name}</div>

      <button onClick={() => alert("TODO: 実装")}>
        <IconDotsVertical className="h-5 w-5 text-gray-400" stroke={1.5} />
      </button>
    </div>
  );
}
