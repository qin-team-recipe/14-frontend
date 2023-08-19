import { ChefImage } from "./ChefImage";
import { CHEF_DATA } from "./ChefData";

export function ChefImages() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-bold">シェフ</h1>
      <div className="flex gap-x-4">
        {CHEF_DATA.map((chef) => (
          <ChefImage key={chef.id} name={chef.name} image={chef.image} />
        ))}
      </div>
    </div>
  );
}