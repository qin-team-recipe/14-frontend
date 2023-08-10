// components/ChefImages.jsx
import React from "react";
import ChefImage from "./ChefImage";
import chefData from "./ChefData";

const ChefImages = () => (
  <div className="mx-2">
    <h1 className=" font-bold text-lg py-2">シェフ</h1>
    <div className="flex justify-between space-x-1">
      {chefData.map((chef) => (
        <ChefImage key={chef.id} name={chef.name} image={chef.image} />
      ))}
    </div>
  </div>
);

export default ChefImages;
