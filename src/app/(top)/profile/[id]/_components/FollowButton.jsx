"use client";
import clsx from "clsx";
import { useState } from "react";

export function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  const addFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <button
      className={clsx(
        isFollowing ? "bg-white text-[#E54D2E]" : "bg-[#E54D2E] text-white",
        "block w-full rounded border border-[#E54D2E] px-3 py-1 text-center text-sm",
      )}
      onClick={addFollow}
    >
      {isFollowing ? "フォロー中" : "フォローする"}
    </button>
  );
}
