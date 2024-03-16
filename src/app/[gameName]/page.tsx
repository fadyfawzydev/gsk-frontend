"use client";
import Image from "next/image";
import React from "react";
import { useMyContext } from "../_components/providers/ContextProvider";
import { useRouter } from "next/navigation";

export default function LoginPage({
  params,
}: {
  params: { gameName?: string };
}) {
  const { gameName } = params;
  const { gameType, updateGameType } = useMyContext();
  const router = useRouter();

  const handleLogin = () => {
    updateGameType("knowledge-hub");
    router.push(`/${gameName}/${gameType}`);
  };
  return (
    <div className="loginBg w-full h-screen overflow-hidden">
      <div className="h-screen px-[1.563vw] relative">
        <div className="flex h-screen w-full flex-col justify-center items-start gap-y-[3.15vh] relative">
          <div className="relative min-w-[46.35vw]  h-auto min-h-[40vh]">
            <div className="absolute -top-[15vh] left-1/2 transform -translate-x-1/2  z-10 ">
              <div className="w-[21.45vw]">
                <Image
                  src={`/logos/gsk_white.webp`}
                  height={324}
                  width={600}
                  className="h-auto w-full object-contain"
                  alt={"game logo"}
                />
              </div>
            </div>
            <div className="absolute -top-[5vh] left-[51%] bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600 transform -translate-x-[51%] z-[1] h-[17.87vh] w-[10.05vw] rounded-full"></div>
            <div className="z-[2] bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600 shadow-lg backdrop-blur-[30px] rounded-[6vw] relative flex justify-center items-center h-full">
              <div className="text-center flex flex-col items-center gap-y-[2.5vh] w-full">
                {gameName}
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
                <button
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  <Image
                    src={"/shapes/login.webp"}
                    width={433}
                    height={579}
                    className="h-[8vh] w-full object-contain"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
