"use client";
import Image from "next/image";
import React from "react";
import { mockStudents } from "../_mocks/mockData";
import { Avatar } from "../_components/svgs/Avatar";
import CountUp from "react-countup";

export interface Student {
  id: string;
  name: string;
  avatar: string;
  score: number;
}
interface LeaderboardProps {}
const Leaderboard = () => {
  const topThree = mockStudents.slice(0, 3);
  const others = mockStudents.slice(3);

  return (
    <div className="knowledgeWinnersBg w-full h-screen overflow-hidden">
      <div className="h-screen px-[1.563vw] relative">
        <div className="flex h-screen w-full flex-col justify-center items-center gap-y-[3.15vh] relative">
          <div className="relative w-[46.35vw] h-auto">
            <div className="flex flex-col w-full gap-y-[3.15vh]">
              <div className="flex w-full">
                {topThree.map((student, index) => (
                  <div
                    key={student.id}
                    className={`${
                      index === 1
                        ? "-ms-[0.52vw]"
                        : index === 0
                        ? "secondPlace"
                        : "-ms-[0.56vw]"
                    } relative w-full`}
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
                          {student.name}
                        </span>
                        <br />
                        <span className="text-[#FFA400] text-[2.4vw] font-bold ">
                          <CountUp end={student.score} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 w-full gap-y-[3.15vh] gap-x-[1.67vw]">
                {others.map((student, index) => (
                  <div
                    key={student.id}
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
                          {student.name}
                        </div>
                      </div>
                      <div className="text-amber-500 text-[1.35vw] font-bold">
                        {student.score}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
