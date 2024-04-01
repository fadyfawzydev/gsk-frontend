"use client";

import { useMyContext } from "@/app/_components/providers/ContextProvider";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface MapProps {}
const Map = () => {
  const { gameInfo, checkTokenAndRedirect } = useMyContext();
  const eventImgSrc = gameInfo?.event_logo;

  useEffect(() => {
    checkTokenAndRedirect();
  }, [checkTokenAndRedirect]);

  const router = useRouter();
  const { gameName, gameType } = useParams<{
    gameName: string;
    gameType: string;
  }>();

  const goToQuestions = () => {
    router.push(`/${gameName}/${gameType}/questions?getNextQuestion=true`);
  };
  return (
    <div className="mapBg w-full h-screen overflow-hidden">
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, duration: 1.5 }}
        className="h-screen px-[1.563vw] relative"
      >
        <div
          className="flex h-screen w-full flex-col justify-center items-center gap-y-[3.15vh] relative cursor-pointer"
          onClick={goToQuestions}
        >
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
              src={"/logos/gsk_white.webp"}
              height={43}
              width={143}
              className="h-full w-auto object-contain"
              alt="Gsk"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Map;
