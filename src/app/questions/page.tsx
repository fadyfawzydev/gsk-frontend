import React from "react";

import Image from "next/image";
import Questions from "../_components/clientComponents/Questions";
interface QuestionsPageProps {
  gameSlug?: string;
}
export default function QuestionsPage({
  gameSlug = "treasure_hunt",
}: QuestionsPageProps) {
  return (
    <div className="secBg w-full h-screen overflow-hidden">
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
        <Questions gameSlug={gameSlug} />
      </div>
    </div>
  );
}
