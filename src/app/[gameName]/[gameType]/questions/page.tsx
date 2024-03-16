"use client";
import Questions from "@/app/_components/questions/Questions";
import {
  KNOWLEDGE_HUB,
  KNOWLEDGE_WHEEL,
  TREASURE_HUNT,
} from "@/app/_constants/gameTypes";
import clsx from "clsx";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { gameName, gameType } = useParams<{
    gameName: string;
    gameType: string;
  }>();

  const mainBgStyle = clsx({
    "secBg ": gameType === KNOWLEDGE_HUB,
    "wheelBg ": gameType === KNOWLEDGE_WHEEL,
    "treasureQuestionBg ": gameType === TREASURE_HUNT,
    "w-full h-screen overflow-hidden": true,
  });
  return (
    <div className={mainBgStyle}>
      <div className="h-screen px-[1.563vw] relative">
        <div className="flex flex-col w-full top-[2.96vh] gap-[1.5vh] justify-between items-end h-[5.93vh] absolute right-[1.54vw] ">
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
        <Questions gameType={gameType} />
      </div>
    </div>
  );
};

export default Page;
