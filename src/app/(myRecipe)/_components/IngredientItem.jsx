import { AddAllButton } from "./AddAllButton";
import { AddButton } from "./AddButton";

export function IngredientItem({ person }) {
  const items = ["キャベツ", "ニンジン", "レタス"];
  return (
    <div className="pt-5">
      <div className="flex justify-between border-b px-4 pb-2">
        {/* ○人前の仕様は将来的に変わるかもしれないです */}
        <p className="text-xl font-bold">{person}人前</p>
        <AddAllButton />
      </div>

      {items.map((item, index) => (
        <div className="flex justify-between border-b px-4 py-3" key={index}>
          <p>{item}</p>
          <AddButton />
        </div>
      ))}
    </div>
  );
}
