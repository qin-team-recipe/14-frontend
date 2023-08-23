import { IngredientList } from "./_components";

export default function Ingredient() {
  const ingredients = [
    { id: 1, text: "キャベツ" },
    { id: 2, text: "ニンジン" },
    { id: 3, text: "レタス" },
  ];

  return (
    <div className="pt-5">
      <IngredientList servingsCount={2} ingredients={ingredients} />
    </div>
  );
}
