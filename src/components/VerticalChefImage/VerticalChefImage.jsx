import Image from "next/image";

export function VerticalChefImage({ DUMMY_DATE }) {
  const chefs = DUMMY_DATE;
  return (
    <>
      <div className="flex flex-col gap-5 gap-y-5">
        {chefs.map((chef) => (
          <Image
            className="rounded-2xl"
            key={chef.id}
            src={chef.image}
            width={88}
            height={116}
            alt={chef.name}
          ></Image>
        ))}
      </div>
    </>
  );
}
