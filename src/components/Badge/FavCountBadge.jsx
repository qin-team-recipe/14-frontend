import { IconHeart } from "@tabler/icons-react";
import clsx from "clsx";

export function FavCountBadge({ children, isPublished }) {
  return (
    <span
      className={clsx(
        "absolute right-2 top-2",
        "flex items-center gap-x-1 p-1.5",
        "rounded-2xl bg-black bg-opacity-40 text-white",
      )}
    >
      {isPublished ? (
        <>
          <IconHeart size={16} stroke={1.5} />
          <div className="text-sm">{children}</div>
        </>
      ) : (
        <div className="text-sm">非公開</div>
      )}
    </span>
  );
}
