import Image from "next/image";
import React from "react";

interface QuestionHeaderProps {
  question: string;
}
const QuestionHeader = ({ question }: QuestionHeaderProps) => {
  return (
    <div className="relative w-[46.35vw] h-auto">
      <Image
        src={"/shapes/qustionBlob.svg"}
        width={890}
        height={579}
        className="h-auto w-full object-contain"
        alt=""
      />
      <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-[70%] w-full">
        <div className="text-center">
          <span className="text-white text-[2.71vw] font-normal">
            How question?
          </span>
          <br />
          <span className="text-white text-[2.71vw] font-bold ">
            {question}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionHeader;
