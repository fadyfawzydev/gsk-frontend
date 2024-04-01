import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { IAnswer } from "@/app/_types";

interface QuestionBodyProps {
  answers: IAnswer[];
  className?: string;
  correctAnswerId: number;
  showAnswer: boolean;
}

const QuestionBody = ({
  className = "grid w-[46.35vw] grid-cols-2 gap-[1.563vw]",
  answers,
  correctAnswerId,
  showAnswer,
}: QuestionBodyProps) => {
  return (
    <div className={className}>
      {answers.map((answer, index) => (
        <motion.div
          key={index}
          className={clsx(
            "h-[10.37vh] p-[1.67vw] rounded-[10.42vw] shadow-inner backdrop-blur-[4.35vw] justify-start items-center gap-[1.30vw] flex",
            {
              "bg-[#e21b3c]": index === 0,
              "bg-[#1368ce]": index === 1,
              "bg-[#26890c]": index === 2,
              "bg-[#d89e00]": index === 3,
              "!bg-[#A2B000]":
                showAnswer && answer.answer_id === correctAnswerId,
              "!bg-[#F72900]":
                showAnswer && answer.answer_id !== correctAnswerId,
            }
          )}
          initial={{ opacity: 0, y: 10 }} // Initial opacity and y-offset
          animate={{
            opacity: 1,
            y: 0,
            x:
              showAnswer && answer.answer_id === correctAnswerId
                ? [-5, 5, -5, 5, 0]
                : 0,
            scale:
              showAnswer && answer.answer_id === correctAnswerId
                ? [1, 1.05, 1, 1.05, 1]
                : 1,
          }} // Animate to full opacity and original position
          transition={{
            duration: 0.5, // Adjust the duration to make the animation quicker
            delay: showAnswer ? 0 : 0.75 + index * 0.4, // Conditional delay based on showAnswer
          }}
        >
          <div className="w-[2.50vw] h-[4.44vh] shirnk-0 bg-white rounded-full grid place-items-center">
            <h6 className="text-center text-[1.25vw] font-bold text-slate-600">
              {String.fromCharCode(65 + index)}
            </h6>
          </div>
          <div className="text-center text-white text-[1.042vw] font-semibold">
            {answer.answer_title}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default QuestionBody;
