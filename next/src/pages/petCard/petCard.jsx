import React from "react";

const PetCard = ({ dog }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-10 bg-blue-300">
      <img
        src={dog.image}
        alt={dog.name}
        className="w-20 h-20 object-cover mb-2 rounded-md"
      />
      <h2 className="text-xl font-semibold">{dog.name}</h2>
    </div>
  );
};

export default PetCard;
