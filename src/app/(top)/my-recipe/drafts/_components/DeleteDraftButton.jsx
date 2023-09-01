"use client";

import { IconTrash } from "@tabler/icons-react";

export function DeleteDraftButton({ recipeId }) {
  return (
    <button
      // TODO: 削除処理を実装
      onClick={(e) => {
        e.preventDefault();
        alert(`レシピID: ${recipeId} を削除する`);
      }}
    >
      <IconTrash size={24} stroke={1.5} className="text-gray-500" />
    </button>
  );
}
