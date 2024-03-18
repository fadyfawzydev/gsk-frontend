"use client";
import { useMyContext } from "@/app/_components/providers/ContextProvider";
import { Avatar } from "@/app/_components/svgs/Avatar";
import {
  KNOWLEDGE_HUB,
  KNOWLEDGE_WHEEL,
  TREASURE_HUNT,
} from "@/app/_constants/gameTypes";
import clsx from "clsx";
import Image from "next/image";
import { useParams } from "next/navigation";
import CountUp from "react-countup";
import { useCallback, useEffect, useState } from "react";
import { adminWinnersList } from "@/app/_services/api";
export interface Winner {
  winner_name: string;
  winner_score: number;
}
interface LeaderboardProps {}
const Leaderboard = () => {
  const [winners, setWinners] = useState<Winner[]>();
  const { gameType } = useParams<{ gameType: string }>();
  const { checkTokenAndRedirect, gameInfo } = useMyContext();

  const fetchNextQuestion = useCallback(async () => {
    try {
      const authToken = gameInfo?._token || "";
      const response = await adminWinnersList(authToken);
      console.log("response", response);
      setWinners(response.data);
    } catch (error) {
      console.error("Error fetching next question:", error);
    }
  }, [gameInfo?._token]);

  useEffect(() => {
    checkTokenAndRedirect();
  }, [checkTokenAndRedirect]);

  useEffect(() => {
    fetchNextQuestion();
  }, [fetchNextQuestion]);

  useEffect(() => {
    checkTokenAndRedirect();
  }, [checkTokenAndRedirect]);
  const mainBgStyle = clsx({
    "knowledgeHubWinnersBg ": gameType === KNOWLEDGE_HUB,
    "knowledgeWheelWinnersBg ": gameType === KNOWLEDGE_WHEEL,
    "treasureHuntWinnersBg ": gameType === TREASURE_HUNT,
    "w-full h-screen overflow-hidden": true,
  });

  // Ensure winners array always contains at least three elements
  const filledWinners = winners
    ? winners.concat(
        Array(Math.max(0, 3 - winners.length)).fill({
          winner_name: "",
          winner_score: 0,
        })
      )
    : [];

  // Rearrange the top three winners based on the number of actual winners
  if (filledWinners.length >= 2) {
    const tempWinner = filledWinners[0];
    filledWinners[0] = filledWinners[1];
    filledWinners[1] = tempWinner;
  }

  // Check if filledWinners is undefined or null and provide a default value if necessary
  const topThreeWinners = filledWinners?.slice(0, 3) || [];
  const remainingWinners = filledWinners?.slice(3) || [];

  // // Rearrange the top three winners to replace the first with the second
  // if (topThreeWinners && topThreeWinners.length >= 2) {
  //   const tempWinner = topThreeWinners[0];
  //   topThreeWinners[0] = topThreeWinners[1];
  //   topThreeWinners[1] = tempWinner;
  // }
  const eventImgSrc = gameInfo?.event_logo;

  return (
    <div className={mainBgStyle}>
      <div className="h-screen px-[1.563vw] relative">
        <div className="flex h-screen w-full flex-col justify-center items-center gap-y-[3.15vh] relative">
          <div className="flex w-full top-[2.96vh] justify-between gap-[1.5vh] items-start h-[5.93vh] absolute left-0 px-[1.563vw]  ">
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
              src={`${
                gameType === KNOWLEDGE_HUB
                  ? "/logos/gsk.webp"
                  : "/logos/gsk_white.webp"
              }`}
              height={43}
              width={143}
              className="h-full w-auto object-contain"
              alt="Gsk"
            />
          </div>
          <div className="relative w-[46.35vw] h-auto">
            <div className="flex flex-col w-full gap-y-[3.15vh]">
              <div className="flex w-full">
                {topThreeWinners &&
                  topThreeWinners.map((winner, index) => (
                    <div
                      key={index}
                      className={`${
                        index === 1
                          ? "-ms-[0.4vw] z-[20]"
                          : index === 0
                          ? "secondPlace z-[10]"
                          : "-ms-[0.46vw] z-[5]"
                      } relative w-full flex items-end`}
                    >
                      <Image
                        src={`/shapes/leaderboard/${
                          index === 1
                            ? "firstPlace"
                            : index === 0
                            ? "secondPlace"
                            : "thirdPlace"
                        }.svg`}
                        width={890}
                        height={579}
                        className="h-auto w-full object-contain"
                        alt=""
                      />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                        <div className="text-center px-[0.78vw]">
                          <span className="text-[#00345D] text-[1.25vw] font-normal">
                            {winner.winner_name}
                          </span>
                          <br />
                          <span className="text-[#FFA400] text-[2.4vw] font-bold ">
                            <CountUp end={winner.winner_score} />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="relative w-[62.4vw] h-auto">
            <div className="grid grid-cols-2 w-full gap-y-[3.15vh] gap-x-[1.67vw]">
              {remainingWinners &&
                remainingWinners.map((winner, index) => (
                  <div
                    key={index}
                    className="h-[8.68vh] relative bg-white shadow-custom rounded-[0.75vw]"
                  >
                    <div className="flex justify-between items-center gap-[1.25vw] h-full px-[1.25vw]">
                      <div className="flex gap-[1.25vw] justify-between items-center">
                        <div className="text-sky-950 text-[1.7vw] font-normal">
                          {index + 4}
                        </div>
                        <div className="w-[3.33vw]">
                          <Avatar className="w-full" />
                        </div>
                        <div className="text-sky-950 text-[1.25vw] font-normal">
                          {winner.winner_name}
                        </div>
                      </div>
                      <div className="text-amber-500 text-[1.35vw] font-bold">
                        {winner.winner_score}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
