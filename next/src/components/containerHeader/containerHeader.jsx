import React from "react";
import BackButton from "../backButton/backButton";

const ContainerHeader = ({ title }) => {
  return (
    <div className="mb-[20px] w-full flex items-center gap-[10px]">
      <BackButton />
      <div>{title}</div>
    </div>
  );
};

export default ContainerHeader;
