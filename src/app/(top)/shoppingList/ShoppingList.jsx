import {
  IconCircle,
  IconDotsCircleHorizontal,
  IconDotsVertical,
  IconPlus,
} from "@tabler/icons-react";

const SHOPPING_LIST_DATA = [
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

export function ShoppingList() {
  const ingredients = SHOPPING_LIST_DATA;

  return (
    <div>
      <div className="bg-gray-100  flex font-bold justify-center text-lg py-3 border-b">
        買い物リスト
      </div>
      <div className="flex bg-gray-100 px-4 pb-3 pt-5">
        <div className="flex-1 font-bold">じぶんメモ</div>
        <button>
          <IconPlus />
        </button>
        <button>
          <IconDotsCircleHorizontal className="ml-4" />
        </button>
      </div>
      <div>
        {ingredients.map((ingredient) => (
          <div className="border px-4 py-2" key={ingredient.id}>
            <IngredientList key={ingredient.id} name={ingredient.name} />
          </div>
        ))}
      </div>
    </div>
  );

  function IngredientList({ name }) {
    return (
      <div className="flex items-center justify-between gap-4">
        <button>
          <IconCircle className=" flex-none text-red-400" />
        </button>
        <p className="flex-grow break-normal text-lg">{name}</p>
        <button>
          <IconDotsVertical className="flex-none text-gray-400" />
        </button>
      </div>
    );
  }
}
