// components/ChefImage.jsx
import React from "react";

const ChefImage = ({ name, image }) => (
  <div className="flex flex-col items-center">
    <img
      src={image}
      alt={`${name}'s Profile`}
      className="mb-2 h-[68px] w-[68px] rounded-full"
    />
    <p className="text-center text-[12px]">{name}</p>
  </div>
);

export default ChefImage;
