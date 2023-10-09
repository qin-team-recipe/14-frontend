import { IconHeart } from "@tabler/icons-react";
import clsx from "clsx";

export function RecipeBadge({ children }) {
  const isChildrenNumber = typeof children === "number";

  return (
    <span
      className={clsx(
        "absolute right-2 top-2",
        "flex items-center gap-x-1 p-1.5",
        "rounded-2xl bg-black bg-opacity-40 text-white",
      )}
    >
      {isChildrenNumber ? <IconHeart size={16} stroke={1.5} /> : null}
      <div className="text-sm">
        {isChildrenNumber ? children.toLocaleString() : children}
      </div>
    </span>
  );
}
