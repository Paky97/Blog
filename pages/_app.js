import "../styles/globals.css";
import React from "react";
import { useRouter } from "next/router";
import NavBar from "../src/components/NavBar";
import { SkeletonTheme } from "react-loading-skeleton";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="w-full overflow-hidden bg-white  sm:px-16 px-6">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <div className=" flex justify-center items-center flex-col sm:pt-8 ">
          {/* componente per NavBar */}
          <NavBar router={router} />
          <div className="sm:border-b-[3px] sm:border-gray-500 h-full w-full rounded-b-xl"></div>
        </div>
        <div className="my-8 w-full flex">
          <Component router={router} {...pageProps} />
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default MyApp;
