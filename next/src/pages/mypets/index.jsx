import Container from "@/components/container/container";
import ContainerHeader from "@/components/containerHeader/containerHeader";
import React from "react";
import PetCard from "../petCard/petCard";

// ex) json
const dogData = [
  { id: 1, name: "Maltese", image: "/images/Maltese.png" },
  { id: 2, name: "Poodle", image: "/images/Poodle.png" },
  { id: 3, name: "Pomeranian", image: "/images/Pomeranian.png" },
  { id: 4, name: "Chihuahua", image: "/images/Chihuahua.png" },
  { id: 5, name: "Cat", image: "/images/cat.png" },
];

const Mypets = () => {
  return (
    <Container>
      <ContainerHeader title="My Pets" />
      <div className="grid lg:grid-cols-2 gap-4">
        {dogData.map((dog) => (
          <PetCard key={dog.id} dog={dog} />
        ))}
      </div>
    </Container>
  );
};

export default Mypets;
