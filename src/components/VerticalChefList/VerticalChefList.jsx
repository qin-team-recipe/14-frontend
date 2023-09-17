import Image from "next/image";
import { IconToolsKitchen2 } from "@tabler/icons-react";
import Link from "next/link";

export function VerticalChefList({ chefs }) {
  return (
    <div className="flex flex-col gap-5 gap-y-5">
      {chefs.map((chef) => (
        <>
          <Link href="#" className="flex items-center space-x-4">
            <Image
              className="shrink-0 rounded-2xl"
              key={chef.id}
              src={chef.image}
              alt={chef.name}
              width={88}
              height={116}
            />
            <div>
              <p className="text-lg font-bold">{`${chef.name}`}</p>
              <p className="line-clamp-3 text-sm text-gray-400">{`${chef.text}`}</p>
              <div className="flex items-center space-x-1 text-sm">
                <IconToolsKitchen2 size={16} />
                <p>
                  {chef.numberOf === undefined || chef.numberOf === ""
                    ? "0"
                    : `${chef.numberOf}`}
                </p>
                <p>レシピ</p>
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
}
