"use client";
import clsx from "clsx";
import { useState } from "react";

export function AddToggle({ add, addEd }) {
  const [AddFavSwitch, setAddFavSwitch] = useState(false);
  const AddFavButton = () => {
    setAddFavSwitch(!AddFavSwitch);
  };
  return (
    <button
      className={clsx(
        `${
          AddFavSwitch ? "bg-white text-[#E54D2E]" : "bg-[#E54D2E] text-white"
        }`,
        "block w-full rounded border border-[#E54D2E] px-3 py-1 text-center text-sm",
      )}
      onClick={AddFavButton}
    >
      {AddFavSwitch ? addEd : add}
    </button>
  );
}
