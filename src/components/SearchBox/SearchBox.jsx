import { IconSearch } from "@tabler/icons-react";

export function SearchBox() {
  return (
    <div className="px-4 py-2">
      <div className="flex w-full items-center justify-center rounded-md bg-gray-200 px-2">
        <IconSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="シェフやレシピを検索"
          className="w-full rounded-md bg-gray-200 py-2 pl-2 font-bold outline-none placeholder:text-gray-500 hover:outline-none"
        />
      </div>
    </div>
  );
}
