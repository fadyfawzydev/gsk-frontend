"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { questionBank } from "@/app/_mocks/mockData";
import QuestionBody from "./QuestionBody";
import QuestionHeader from "./QuestionHeader";
import { IQuestion } from "@/app/_types";
interface QuestionsProps {
  gameType: string;
  question: IQuestion | undefined;
}
export default function Questions({ gameType, question }: QuestionsProps) {
  console.log(question);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const router = useRouter();
  const isLastQuestion = currentQuestionIndex === questionBank.length - 1;
  const { gameName } = useParams<{ gameName: string }>();
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Here you can handle showing the results
      router.push(`/${gameName}/${gameType}/leaderboard`);
    } else {
      // Move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowCorrectAnswer(false);
    }
  };

  const handleAnswerClick = () => {
    setShowCorrectAnswer(!showCorrectAnswer);
  };

  return (
    <div className="flex h-screen w-full flex-col justify-center items-center gap-y-[3.15vh] relative">
      <QuestionHeader
        question={question?.question_title || ""}
        gameType={gameType}
      />
      <QuestionBody
        answers={question?.answers || []}
        showAnswer={showCorrectAnswer}
        correctAnswerId={question?.correct_answer_id || 0}
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
  );
}
