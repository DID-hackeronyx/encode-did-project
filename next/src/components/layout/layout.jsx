import React from "react";
import Aside from "../aside";
import useMediaQuery from "@/hooks/useMediaQuery";
import dynamic from "next/dynamic";

const DynamicAside = dynamic(() => import("../aside"));

const Layout = ({ children }) => {
  const xl = useMediaQuery("(min-width: 1200px)");
  return (
    <div className="h-full flex w-full">
      {xl && <DynamicAside />}

      <div className="h-full w-2/4 ml-auto flex  xl:w-full">
        {/* {router.pathname !== "/" && <Header />} */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
