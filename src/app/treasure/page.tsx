"use client";
import Image from "next/image";
import React from "react";
import { mockStudents } from "../_mocks/mockData";
import { Avatar } from "../_components/svgs/Avatar";
import CountUp from "react-countup";
import QrCodePart from "../_components/QrCodePart";

export interface Student {
  id: string;
  name: string;
  avatar: string;
  score: number;
}
interface TreasureProps {}
const Treasure = () => {
  const code = "123-678";
  return (
    <div className="treasureBg w-full h-screen overflow-hidden">
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
          <div className="flex h-[50vh] ">
            <Image
              src={"/logos/treasure_hunt.webp"}
              height={540}
              width={850}
              className="h-full w-auto object-contain"
              alt="Treasure"
            />
          </div>
          <QrCodePart code={code} fgColor="#fff" />
        </div>
      </div>
    </div>
  );
};

export default Treasure;
