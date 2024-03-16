import React from "react";
import clsx from "clsx";
import { IAnswer } from "@/app/_types";
import { useMyContext } from "../providers/ContextProvider";

interface QuestionBodyProps {
  answers: IAnswer[];
  className?: string;
  correctAnswerId: number;
  showAnswer: boolean;
  onAnswerClick: () => void;
}

const QuestionBody = ({
  className = "grid w-[46.35vw] grid-cols-2 gap-[1.563vw]",
  answers,
  correctAnswerId,
  showAnswer,
  onAnswerClick,
}: QuestionBodyProps) => {
  const { gameInfo } = useMyContext();

  return (
    <div className={className}>
      {answers.map((answer, index) => (
        <div
          key={index}
          style={{ backgroundColor: `${gameInfo?.event_color}` }}
          className={clsx(
            "h-[10.37vh] p-[1.67vw] bg-amber-500 bg-opacity-60 rounded-[10.42vw] shadow-inner backdrop-blur-[4.35vw] justify-start items-center gap-[1.30vw] flex",
            {
              "bg-amber-500": !gameInfo?.event_color,
              "!bg-[#A2B000]":
                showAnswer && answer.answer_id === correctAnswerId,
              "!bg-[#F72900]":
                showAnswer && answer.answer_id !== correctAnswerId,
            }
          )}
          onClick={() => onAnswerClick()}
        >
          <div className="w-[2.50vw] h-[4.44vh] shirnk-0 bg-white rounded-full grid place-items-center">
            <h6 className="text-center text-[1.25vw] font-bold text-slate-600">
              {String.fromCharCode(65 + index)}
            </h6>
          </div>
          <div className="text-center text-white text-[1.25vw] font-semibold">
            {answer.answer_title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionBody;
