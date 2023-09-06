import { IconSearch } from "@tabler/icons-react";

export function SearchBox() {
  return (
    <div className="flex w-full items-center gap-x-2 rounded-lg bg-gray-100 px-3">
      <IconSearch className="h-6 w-6 text-gray-500" />
      <input
        type="text"
        placeholder="シェフやレシピを検索"
        className="w-full bg-transparent py-2 font-bold outline-none placeholder:text-gray-500"
      />
    </div>
  );
}
