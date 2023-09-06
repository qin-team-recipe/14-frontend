import Image from "next/image";

export function VerticalChefImage({ chefs }) {
  return (
    <div className="flex flex-col gap-5 gap-y-5">
      {chefs.map((chef) => (
        <Image
          key={chef.id}
          src={chef.image}
          alt={chef.name}
          width={88}
          height={116}
          className="rounded-2xl"
        />
      ))}
    </div>
  );
}
