import Image from "next/image";
import React from "react";

interface MapProps {}
const Map = () => {
  return (
    <div className="mapBg w-full h-screen overflow-hidden">
      <div className="h-screen px-[1.563vw] relative">
        <div className="flex h-screen w-full flex-col justify-center items-center gap-y-[3.15vh] relative">
          <div className="flex w-full top-[2.96vh] justify-between items-center h-[5.93vh] absolute ">
            <Image
              src={"/logos/kepra_white.webp"}
              height={64}
              width={143}
              className="h-full w-auto object-contain"
              alt="kepra"
            />
            <Image
              src={"/logos/gsk_white.webp"}
              height={43}
              width={143}
              className="h-full w-auto object-contain"
              alt="Gsk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
