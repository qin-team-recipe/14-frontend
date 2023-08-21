import { IconShoppingCartPlus } from "@tabler/icons-react";

export function AddButton() {
  return (
    <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200">
      <IconShoppingCartPlus color="gray" stroke={1.5} width={20} />
    </button>
  );
}
