"use client";
import { useState } from "react";
import { Dropdown } from ".";
import { MyRecipeMenu } from "@/components/Menu";

export function EditRecipe({ isPublished, handleClick }) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const handleToggle = () => {
    setToggleDropdown((prevState) => !prevState);
  };
  const closeToggle = () => {
    setToggleDropdown(false);
  };

  return (
    <>
      <div className="relative w-full">
        <button
          onClick={handleToggle}
          className={
            "block w-full rounded border border-black px-3 py-1 text-center text-sm"
          }
        >
          レシピを編集
        </button>
        <div className="absolute -top-10 right-0">
          {toggleDropdown && (
            <Dropdown
              closeToggle={closeToggle}
              components={
                <MyRecipeMenu
                  status={isPublished && "public"}
                  handleClick={handleClick}
                />
              }
            />
          )}
        </div>
      </div>
    </>
  );
}
