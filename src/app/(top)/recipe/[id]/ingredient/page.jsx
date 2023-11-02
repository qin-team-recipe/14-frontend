import { AddAllToCartButton, AddToCartButton } from "./_components";

export default function Ingredient() {
  const ingredients = [
    { id: 1, text: "キャベツ" },
    { id: 2, text: "ニンジン" },
    { id: 3, text: "レタス" },
  ];

  return (
    <div className="space-y-2 pt-5">
      <div className="flex justify-between px-4">
        {/* ○人前の仕様は将来的に変わるかもしれないです */}
        <p className="text-xl font-bold">2人前</p>
        <AddAllToCartButton />
      </div>

      <ul className="divide-y border-y">
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.id}
            className="flex items-center justify-between gap-x-4 px-4 py-2"
          >
            <p className="text-sm">{ingredient.text}</p>
            <AddToCartButton />
          </li>
        ))}
      </ul>
    </div>
  );
}
