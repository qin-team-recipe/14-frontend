import Image from "next/image";
import { IconToolsKitchen2 } from "@tabler/icons-react";
import Link from "next/link";

export function VerticalChefList({ chefs }) {
  return (
    <div className="flex flex-col gap-5 gap-y-5">
      {chefs.map((chef) => (
        <Link key={chef.id} href="#" className="flex space-x-4">
          <Image
            className="shrink-0 rounded-2xl"
            key={chef.id}
            src={chef.image}
            alt={chef.name}
            width={88}
            height={116}
          />
          <div className="flex flex-col gap-y-1">
            <div className="line-clamp-1 font-bold">{chef.name}</div>
            <p className="line-clamp-3 text-sm text-gray-500">{chef.text}</p>
            <div className="flex items-center space-x-1.5 text-sm">
              <IconToolsKitchen2 size={16} stroke={1.5} />
              <p>{chef.recipeLength ?? 0}レシピ</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
