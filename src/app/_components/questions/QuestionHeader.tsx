import Image from "next/image";
import React from "react";

interface QuestionHeaderProps {
  question: string;
  gameType?: string;
}
const QuestionHeader = ({ question, gameType }: QuestionHeaderProps) => {
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
      <div className="absolute -top-[5vh] left-[51%] bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600 transform -translate-x-[51%] z-[1] h-[17.87vh] w-[10.05vw] rounded-full"></div>
      <div className="z-[2] bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600 shadow-lg backdrop-blur-[30px] rounded-[6vw] relative flex justify-center items-center h-full">
        <h5 className="text-white text-[2.71vw] font-bold flex flex-col items-center gap-y-[0.75vh] px-[3vw] py-[2.5vh] text-ellipsis">
          <span className="text-white text-[2.71vw] font-normal">
            How question?
          </span>
          <span className="font-bold">{question}</span>
        </h5>
      </div>
    </div>
  );
};

export default QuestionHeader;
