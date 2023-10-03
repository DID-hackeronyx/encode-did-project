import Image from "next/image";
import dynamic from "next/dynamic";
import img from "../../public/images/bg.png";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const DynamicAside = dynamic(() => import("../components/aside"));

export default function Home() {
  const xl = useMediaQuery("(max-width: 1201px)");

  return (
    <>
      {xl && <DynamicAside />}
      {/* <DynamicAside /> */}
      <div className="h-full w-full bg-primary-soft rounded-[20px] dark:bg-black-soft overflow-hidden xl:hidden">
        <div className="h-full absolute   overflow-hidden xl:w-2/4">
          <Image src={img} width={775} height={900} alt="home page img" />
        </div>
      </div>
    </>
  );
}
