import { IconShoppingCartPlus } from "@tabler/icons-react";

export function AddToCartButton() {
  return (
    <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 active:bg-gray-200">
      <IconShoppingCartPlus width={20} />
    </button>
  );
}
