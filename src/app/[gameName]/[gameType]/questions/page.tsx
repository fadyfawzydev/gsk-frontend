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
import { useSearchParams } from "next/navigation";
import CountdownTimer from "@/app/_components/countdownTimer/CountdownTimer";
import { motion } from "framer-motion";
import { showAnswerEventTrigger } from "@/app/_services/apiFetch";

const Page = () => {
  const router = useRouter();

  const { gameName, gameType } = useParams<{
    gameName: string;
    gameType: string;
  }>();
  const searchParams = useSearchParams();
  const getNext = searchParams.get("getNextQuestion");
  const { checkTokenAndRedirect, gameInfo } = useMyContext();
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [questionTime, setQuestionTime] = useState<number>(0);
  const [getNextQuestion, setGetNextQuestion] = useState(false);
  const [remainingNumber, setRemainingNumber] = useState(1);
  const [question, setQuestion] = useState<IQuestion>();
  const [loading, setLoading] = useState(true);
  const eventImgSrc = gameInfo?.event_logo;

  useEffect(() => {
    const getNextParam = searchParams.get("getNextQuestion");
    if (getNextParam) {
      setGetNextQuestion(true);
    }
  }, [searchParams]);

  const fetchNextQuestion = useCallback(async () => {
    if (remainingNumber === 0) return;

    try {
      const authToken = gameInfo?._token || "";
      const response = await adminNextQuestion(authToken, getNextQuestion);
      setQuestion(response.data);
      setRemainingNumber(response.data.remaining_questions);
      setQuestionTime(response.data.question_time);
      setGetNextQuestion(false);
    } catch (error) {
      console.error("Error fetching next question:", error);
    } finally {
      setLoading(false); // Set loading state to false when done fetching
    }
  }, [gameInfo, getNextQuestion, remainingNumber]);

  useEffect(() => {
    checkTokenAndRedirect();
  }, [checkTokenAndRedirect]);

  // In the useEffect where you're fetching the next question
  useEffect(() => {
    if (getNextQuestion) {
      // Only fetch if getNextQuestion is true
      fetchNextQuestion();
    }
  }, [getNextQuestion]);

  const mainBgStyle = clsx({
    "secBg ": gameType === KNOWLEDGE_HUB,
    "wheelBg ": gameType === KNOWLEDGE_WHEEL,
    "treasureQuestionBg ": gameType === TREASURE_HUNT,
    "w-full h-screen overflow-hidden": true,
  });

  const handleNextQuestion = () => {
    setQuestionTime(0);
    setQuestion({} as IQuestion);
    setLoading(true);
    if (remainingNumber === 0) {
      router.push(`/${gameName}/${gameType}/leaderboard`);
    } else {
      setShowCorrectAnswer(false);
      setGetNextQuestion(true);
      fetchNextQuestion();
    }
  };

  useEffect(() => {
    const handleShowAnswerEventTrigger = async () => {
      try {
        const response = await showAnswerEventTrigger(
          gameName,
          gameInfo?._token || ""
        );
      } catch (error) {
        console.error("Error triggering show answer event:", error);
      }
    };

    if (showCorrectAnswer) {
      handleShowAnswerEventTrigger();
    }
  }, [gameInfo, gameName, showCorrectAnswer]);

  return (
    <div className={mainBgStyle}>
      <div className="h-screen px-[1.563vw] relative">
        <div className="flex w-full top-[2.96vh] justify-between gap-[1.5vh] items-start h-[5.93vh] absolute left-0 px-[1.563vw]">
          {eventImgSrc ? (
            <Image
              src={eventImgSrc}
              height={400}
              width={400}
              className="h-full w-auto object-contain"
              alt={"event logo"}
            />
          ) : (
            <div></div>
          )}
          <Image
            src={"/logos/gsk_white.webp"}
            height={43}
            width={143}
            className="h-full w-auto object-contain"
            alt="Gsk"
          />
        </div>
        {!loading ? (
          <div className="flex h-screen w-full flex-col justify-center items-center gap-y-[3.15vh] relative">
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Initial position of QuestionHeader
              animate={{ opacity: 1, x: 0 }} // Animate QuestionHeader to move from left
              transition={{ type: "spring", stiffness: 120, duration: 1.5 }}
            >
              <QuestionHeader
                question={question?.question_title || ""}
                gameType={gameType}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }} // Initial position of QuestionBody
              animate={{ opacity: 1, x: 0 }} // Animate QuestionBody to move from right
              transition={{
                delay: 0.65,
              }}
            >
              <QuestionBody
                answers={question?.answers || []}
                showAnswer={showCorrectAnswer}
                correctAnswerId={question?.correct_answer_id || 0}
              />
            </motion.div>
            <div className="absolute bottom-10 w-full flex justify-between">
              <CountdownTimer timer={questionTime} />
              <button
                className="w-[22.55vw] h-[12.04vh]"
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
                      : "showAnswer.svg"
                  }`}
                  width={890}
                  height={579}
                  className="h-auto w-full object-contain"
                  alt=""
                />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Page;
