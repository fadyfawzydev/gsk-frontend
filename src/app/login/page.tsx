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
    <div className="wheelBg w-full h-screen overflow-hidden">
      <div className="h-screen px-[1.563vw] relative">
        <div className="flex h-screen w-full flex-col justify-center items-center gap-y-[3.15vh] relative">
          <div className="relative w-[46.35vw] h-auto">
            <Image
              src={"/shapes/loginBlob.svg"}
              width={890}
              height={579}
              className="h-auto w-full object-contain"
              alt=""
            />
            <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-[85%] w-full">
              <div className="text-center flex flex-col items-center gap-y-[2.5vh]">
                <input
                  type="text"
                  className="h-[7.25vh] w-[75%] relative bg-white shadow-custom rounded-[0.75vw] outline-none text-[1.75vw] placeholder:text-[1.5vw] px-[1.67vw]"
                  placeholder="Please enter your username"
                />
                <input
                  type="password"
                  className="h-[7.25vh] w-[75%] relative bg-white shadow-custom rounded-[0.75vw] outline-none text-[1.75vw] placeholder:text-[1.5vw] px-[1.67vw]"
                  placeholder="Please enter your password"
                />
                <Image
                  src={"/shapes/login.webp"}
                  width={433}
                  height={579}
                  className="h-[8vh] w-full object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
