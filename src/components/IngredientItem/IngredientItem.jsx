import { IconShoppingCartPlus } from "@tabler/icons-react";

export function IngredientItem(props) {
  const { person } = props;
  const items = ["キャベツ", "ニンジン", "レタス"];
  return (
    <div className="py-5">
      <div className="flex justify-between border-b px-4 pb-2">
        {/* ○人前の仕様は将来的に変わるかもしれないです */}
        <p className="text-xl font-bold">{person}人前</p>
        <button className="font-bold text-gray-500">
          まとめてお買い物追加
        </button>
      </div>

      {items.map((item, index) => (
        <div className="flex justify-between border-b px-4 py-3" key={index}>
          <p>{item}</p>
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200">
            <IconShoppingCartPlus color="gray" stroke={1.5} width={20} />
          </button>
        </div>
      ))}
    </div>
  );
}
