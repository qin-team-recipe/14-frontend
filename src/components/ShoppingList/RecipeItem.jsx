import { IngredientList } from "./IngredientList";
import { ListHeader } from "./ListHeader";

const INGREDIENTS_DATA = [
  {
    id: 1,
    name: "砂糖",
  },
  {
    id: 2,
    name: "塩",
  },
  {
    id: 3,
    name: "酢",
  },
  {
    id: 4,
    name: "醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油醤油",
  },
  {
    id: 5,
    name: "味噌",
  },
];

export function RecipeItem() {
  const ingredients = INGREDIENTS_DATA;

  return (
    <div className="space-y-3">
      <ListHeader label="じぶんメモ" />
      <ul>
        {ingredients.map((ingredient) => (
          <li className="border px-4 py-2" key={ingredient.id}>
            <IngredientList key={ingredient.id} name={ingredient.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
