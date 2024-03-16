"use client";
import { useMyContext } from "@/app/_components/providers/ContextProvider";
import QuestionBody from "@/app/_components/questions/QuestionBody";
import QuestionHeader from "@/app/_components/questions/QuestionHeader";
import {
  KNOWLEDGE_HUB,
  KNOWLEDGE_WHEEL,
  TREASURE_HUNT,
} from "@/app/_constants/gameTypes";
import { adminNextQuestion } from "@/app/_services/api";
import { IQuestion } from "@/app/_types";
import clsx from "clsx";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const { gameName, gameType } = useParams<{
    gameName: string;
    gameType: string;
  }>();
  const { checkTokenAndRedirect, gameInfo } = useMyContext();
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [remainingNumber, setRemainingNumber] = useState(1);
  const [question, setQuestion] = useState<IQuestion>();

  const fetchNextQuestion = useCallback(async () => {
    if (remainingNumber === 0) return;

    try {
      const authToken = gameInfo?._token || "";
      const response = await adminNextQuestion(authToken);
      setQuestion(response.data);
      setRemainingNumber(response.data.remaining_questions);
    } catch (error) {
      console.error("Error fetching next question:", error);
    }
  }, [remainingNumber, gameInfo]);

  useEffect(() => {
    checkTokenAndRedirect();
  }, [checkTokenAndRedirect]);

  useEffect(() => {
    fetchNextQuestion();
  }, [fetchNextQuestion]);

  const mainBgStyle = clsx({
    "secBg ": gameType === KNOWLEDGE_HUB,
    "wheelBg ": gameType === KNOWLEDGE_WHEEL,
    "treasureQuestionBg ": gameType === TREASURE_HUNT,
    "w-full h-screen overflow-hidden": true,
  });

  const handleNextQuestion = () => {
    if (remainingNumber === 0) {
      router.push(`/${gameName}/${gameType}/leaderboard`);
    } else {
      setShowCorrectAnswer(false);
      fetchNextQuestion();
    }
  };

  const handleAnswerClick = () => {
    setShowCorrectAnswer(!showCorrectAnswer);
  };

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
        <div className="flex h-screen w-full flex-col justify-center items-center gap-y-[3.15vh] relative">
          <QuestionHeader
            question={question?.question_title || ""}
            gameType={gameType}
          />
          <QuestionBody
            answers={question?.answers || []}
            showAnswer={showCorrectAnswer}
            correctAnswerId={question?.correct_answer_id || 0}
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
                  ? remainingNumber === 0
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
};

export default Page;
