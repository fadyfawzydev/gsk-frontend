import React from "react";
import clsx from "clsx";

interface Answer {
  text: string;
  correct: boolean;
}

interface QuestionBodyProps {
  answers: Answer[];
  className?: string;
  showCorrectAnswer: boolean;
  onAnswerClick: (correct: boolean) => void;
}

const QuestionBody = ({
  className = "grid w-[46.35vw] grid-cols-2 gap-[1.563vw]",
  answers,
  showCorrectAnswer,
  onAnswerClick,
}: QuestionBodyProps) => {
  console.log(showCorrectAnswer);
  return (
    <div className={className}>
      {answers.map((answer, index) => (
        <div
          key={index}
          className={clsx(
            "h-[10.37vh] p-[1.67vw] bg-amber-500 bg-opacity-60 rounded-[10.42vw] shadow-inner backdrop-blur-[4.35vw] justify-start items-center gap-[1.30vw] flex",
            {
              "!bg-[#A2B000]": showCorrectAnswer && answer.correct,
              "!bg-[#F72900]": showCorrectAnswer && !answer.correct,
            }
          )}
          onClick={() => onAnswerClick(answer.correct)}
        >
          <div className="w-[2.50vw] h-[4.44vh] shirnk-0 bg-white rounded-full grid place-items-center">
            <h6 className="text-center text-[1.25vw] font-bold text-slate-600">
              {String.fromCharCode(65 + index)}
            </h6>
          </div>
          <div className="text-center text-white text-[1.25vw] font-semibold">
            {answer.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionBody;
