"use client";
import Image from "next/image";
import React from "react";
import QrCodePart from "../_components/QrCodePart";

interface WheelProps {}
const Wheel = () => {
  const code = "123-678";

  return (
    <div className="wheelBg w-full h-screen overflow-hidden">
      <div className="h-screen px-[1.563vw] relative">
        <div className="flex h-screen w-full justify-between items-center gap-y-[3.15vh] relative">
          <div className="flex w-full top-[2.96vh] gap-[1.5vh] items-start h-[5.93vh] absolute left-0 ">
            <Image
              src={"/logos/gsk_white.webp"}
              height={43}
              width={143}
              className="h-full w-auto object-contain"
              alt="Gsk"
            />
            <Image
              src={"/logos/kepra_white.webp"}
              height={64}
              width={143}
              className="h-full w-auto object-contain"
              alt="kepra"
            />
          </div>
          <div className="flex w-[49.6vw] ">
            <Image
              src={"/logos/wheel_logo.svg"}
              height={540}
              width={850}
              className="h-aut w-full object-contain"
              alt="Wheel"
            />
          </div>
          <QrCodePart code={code} fgColor="#fff" />
        </div>
      </div>
    </div>
  );
};

export default Wheel;
