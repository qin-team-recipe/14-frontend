import clsx from "clsx";
import Link from "next/link";

export function RecipeAddLink({ children }) {
  return (
    <Link
      href="/my-recipe/new"
      className={clsx(
        "flex items-center justify-center",
        "w-full rounded-full px-5 py-3",
        "bg-red-500 font-bold text-white shadow-md shadow-red-800 hover:bg-red-400",
      )}
    >
      {children}
    </Link>
  );
}
