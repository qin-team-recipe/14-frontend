import clsx from "clsx";

// TODO: 今のところ、どこにも使われていないため、将来的に再度チェックする
export function RecipeStatusBadge({ status }) {
  return (
    <span
      className={clsx("rounded border px-1.5 py-0.5 text-center text-xs", {
        "border-red-600/50 bg-red-50 text-red-700": status === "public",
        "border-gray-600/40 bg-gray-50 text-gray-600": status === "private",
      })}
    >
      {status === "public" ? "公開中" : "非公開"}
    </span>
  );
}
