export function ChefImage({ name, image }) {
  return (
    <div className="flex flex-col items-center gap-y-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={`${name}'s profile`}
        className="h-16 w-16 rounded-full"
      />
      <p className="text-xs">{name}</p>
    </div>
  );
}
