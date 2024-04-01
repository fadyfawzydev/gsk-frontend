import Image from "next/image";
import React from "react";
import { useMyContext } from "../providers/ContextProvider";
import clsx from "clsx";

interface QuestionHeaderProps {
  question: string;
  gameType?: string;
}
const QuestionHeader = ({ question, gameType }: QuestionHeaderProps) => {
  const { gameInfo } = useMyContext();
  // const questionBlobStyle = clsx({
  //   "text-orange-950": gameType === ,
  //   "text-white": gameType !== KNOWLEDGE_HUB,
  //   "text-[2.50vw] font-bold font-Metropolis": true,
  // });

  const bgColor = gameInfo?.event_color
    ? ""
    : "bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600";

  return (
    <div className="relative min-w-[46.35vw] max-w-[75vw] h-auto min-h-[40vh] max-h-[50vh]">
      <div className="absolute -top-[15vh] left-1/2 transform -translate-x-1/2  z-10 ">
        <div className="w-[21.45vw]">
          <Image
            src={`/logos/${gameType}.webp`}
            height={324}
            width={600}
            className="h-auto w-full object-contain"
            alt={gameType || "game logo"}
          />
        </div>
      </div>
      <div
        style={{ backgroundColor: `${gameInfo?.event_color}` }}
        className={`absolute -top-[5vh] left-[51%]  transform -translate-x-[51%] z-[1] h-[17.87vh] w-[10.05vw] rounded-full`}
      ></div>
      <div
        style={{ backgroundColor: `${gameInfo?.event_color}` }}
        className={`z-[2] ${bgColor} shadow-lg backdrop-blur-[30px] rounded-[6vw] relative flex justify-center items-center min-h-[40vh] max-h-[50vh]`}
      >
        <h5 className="text-white text-[2.71vw] font-bold text-center flex flex-col items-center gap-y-[0.75vh] px-[3vw] py-[2.5vh] text-ellipsis">
          {question}
        </h5>
      </div>
    </div>
  );
};

export default QuestionHeader;
