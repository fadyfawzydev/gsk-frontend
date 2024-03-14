"use client";
import React, { useState } from "react";
import QuestionHeader from "../_components/questions/QuestionHeader";
import QuestionBody from "../_components/questions/QuestionBody";
import { questionBank } from "../_mocks/mockData";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function QuestionsPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const router = useRouter();
  const isLastQuestion = currentQuestionIndex === questionBank.length - 1;

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Here you can handle showing the results
      router.push("/leaderboard");
    } else {
      // Move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowCorrectAnswer(false);
    }
  };

  const handleAnswerClick = (correct: boolean) => {
    setShowCorrectAnswer(true);
  };

  return (
    <div className="secBg w-full h-screen overflow-hidden">
      <div className="h-screen px-[1.563vw] relative">
        <div className="flex h-screen w-full flex-col justify-center items-center gap-y-[3.15vh] relative">
          <QuestionHeader
            question={questionBank[currentQuestionIndex].question}
          />
          <QuestionBody
            answers={questionBank[currentQuestionIndex].answers}
            showCorrectAnswer={showCorrectAnswer}
            onAnswerClick={handleAnswerClick}
          />
          <button
            className="w-[22.55vw] h-[12.04vh] absolute bottom-10 right-10"
            onClick={
              showCorrectAnswer
                ? handleNextQuestion
                : () => setShowCorrectAnswer(true)
            }
          >
            <Image
              src={`/shapes/${
                showCorrectAnswer
                  ? isLastQuestion
                    ? "leaderboard.svg"
                    : "nextQuestion.svg"
                  : "answerNow.svg"
              }`}
              width={890}
              height={579}
              className="h-auto w-full object-contain"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}
