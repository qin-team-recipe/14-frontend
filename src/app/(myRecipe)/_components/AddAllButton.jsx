import { IconShoppingCartPlus } from "@tabler/icons-react";

export function AddAllButton() {
  return (
    <button className="flex gap-x-1">
      <IconShoppingCartPlus color="gray" stroke={1.5} width={20} />
      <p className="font-bold text-gray-500">まとめてお買い物追加</p>
    </button>
  );
}
