import { IconShoppingCartPlus } from "@tabler/icons-react";

export function AddAllToCartButton() {
  return (
    <button className="flex items-center gap-x-0.5 text-gray-500">
      <IconShoppingCartPlus width={20} />
      <p className="font-bold">まとめてお買い物追加</p>
    </button>
  );
}
