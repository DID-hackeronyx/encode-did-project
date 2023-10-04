import React from "react";

const PetCard = ({ dog }) => {
  return (
    <div className="bg-white p-2 rounded-md shadow-md">
      <img
        src={dog.image}
        alt={dog.name}
        className="w-20 h-20 object-cover mb-2 rounded-md"
      />
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-1">{dog.name}</h2>
        {/* You can add more details or components related to each dog here */}
      </div>
    </div>
  );
};

export default PetCard;
