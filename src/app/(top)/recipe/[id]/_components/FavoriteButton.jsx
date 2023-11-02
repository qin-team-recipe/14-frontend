"use client";
import clsx from "clsx";
import { useState } from "react";

export function FavoriteButton() {
  const [isAddedFavorite, setIsAddedFavorite] = useState(false);

  const addFavorite = () => {
    setIsAddedFavorite((prev) => !prev);
  };

  return (
    <button
      className={clsx(
        isAddedFavorite ? "bg-white text-[#E54D2E]" : "bg-[#E54D2E] text-white",
        "block w-full rounded border border-[#E54D2E] px-3 py-1 text-center text-sm",
      )}
      onClick={addFavorite}
    >
      {isAddedFavorite ? "お気に入りに追加済" : "お気に入りに追加"}
    </button>
  );
}
