import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

const BackButton = () => {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/" && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => router.back()}
          aria-label="back"
        >
          <Image
            src="/images/left-arrow.png"
            alt="gallery"
            width={50}
            height={50}
            className="text-white"
          />
        </button>
      )}
    </>
  );
};

export default BackButton;
