import Link from "next/link";

export function RecipeAddLink() {
  return (
    <Link
      href="/my-recipe/new"
      className="flex items-center justify-center rounded-full bg-red-500 px-5 py-3 text-white shadow-md hover:bg-red-400"
    >
      <span className="font-bold">マイレシピ</span>を追加する
    </Link>
  );
}
