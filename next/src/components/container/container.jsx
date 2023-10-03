import React from "react";

const Container = ({ children }) => {
  return (
    <main className="relative h-full w-full mt-[10px] p-[20px] overflow-hidden rounded-[20px] bg-white">
      {children}
    </main>
  );
};

export default Container;
