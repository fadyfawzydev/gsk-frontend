"use client";
import { useMyContext } from "@/app/_components/providers/ContextProvider";
import { ArrowRight } from "@/app/_components/svgs/ArrowRight";
import { KNOWLEDGE_HUB } from "@/app/_constants/gameTypes";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface WheelProps {}
const Wheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const { checkTokenAndRedirect } = useMyContext();

  useEffect(() => {
    checkTokenAndRedirect();
  }, [checkTokenAndRedirect]);
  const handleSpinClick = () => {
    if (!isSpinning) {
      // Start spinning
      setIsSpinning(true);

      // Calculate a random stopping point between 3 to 5 full rotations (1080 to 1800 degrees)
      const stopRotation = Math.floor(Math.random() * 721) + 1080;

      // Stop spinning after the calculated stopping point
      setTimeout(() => {}, 5000); // Stop spinning after 5 seconds

      // Set the stopping point as a CSS variable to be used in the animation
      document.documentElement.style.setProperty(
        "--stop-rotation",
        `${stopRotation}deg`
      );
    }
    // Note: We do not stop spinning here, we let it stop naturally when the timeout occurs
  };
  const { gameInfo } = useMyContext();
  const eventImgSrc = gameInfo?.event_logo;

  const router = useRouter();
  const { gameName, gameType } = useParams<{
    gameName: string;
    gameType: string;
  }>();

  const goToQuestions = () => {
    router.push(`/${gameName}/${gameType}/questions?getNextQuestion=true`);
  };

  return (
    <div className="wheelBg w-full h-screen overflow-hidden">
      <div className="h-screen px-[1.563vw] relative">
        <div className="flex h-screen w-full justify-between items-center gap-y-[3.15vh] relative">
          <div className="flex w-full top-[2.96vh] justify-between gap-[1.5vh] items-start h-[5.93vh] absolute left-0 ">
            {eventImgSrc ? (
              <Image
                src={eventImgSrc}
                height={400}
                width={400}
                className="h-full w-auto object-contain"
                alt={"event logo"}
              />
            ) : (
              <Image
                src={`${
                  gameType === KNOWLEDGE_HUB
                    ? "/logos/kepra.webp"
                    : "/logos/kepra_white.webp"
                }`}
                height={400}
                width={400}
                className="h-full w-auto object-contain"
                alt={"event logo"}
              />
            )}
            <Image
              src={"/logos/gsk_white.webp"}
              height={43}
              width={143}
              className="h-full w-auto object-contain"
              alt="Gsk"
            />
          </div>
          <div className="absolute bottom-0 w-[17.14vw]">
            <Image
              src={"/logos/wheel-of-knowledge.webp"}
              height={540}
              width={850}
              className="h-auto w-full object-contain"
              alt="Wheel"
            />
          </div>
          <div className="w-full h-full relative">
            <div className="absolute top-[20vh] right-0">
              <button
                onClick={() => {
                  !isSpinning ? handleSpinClick() : goToQuestions();
                }}
                className="flex justify-center items-center w-[22.55vw] relative gap-6 p-8 rounded-[200px]"
                style={{
                  background:
                    "linear-gradient(201.84deg, #d7ba85 -72.79%, #fdc49c -16.14%, #bd8e37 49%, #ffffd1 119.81%, #fc9c57 210.44%)",
                  boxShadow: "0px 4px 10px 0 rgba(0,0,0,0.24)",
                }}
              >
                <p className="flex flex-grow-0 shrink-0 text-[2vw] gap-[1.25vw] items-center text-center text-white">
                  {isSpinning ? `Show Question` : "Spin"}{" "}
                  {isSpinning && <ArrowRight className="w-[2.60vw]" />}
                </p>
              </button>
            </div>
            <div className="w-[56.47vw] absolute -bottom-[6vh] left-[15.8vw] z-[2]">
              <Image
                src={"/logos/wheel_presents.webp"}
                height={540}
                width={850}
                className="h-auto w-full object-contain"
                alt="Wheel"
              />
            </div>
            <div className="w-[16.35vw] absolute bottom-[9vh] left-[51%] transform -translate-x-[51%] z-1 ">
              <Image
                src={"/logos/wheel_bottom.svg"}
                height={540}
                width={850}
                className="h-auto w-full object-contain"
                alt="Wheel"
              />
            </div>
            <div
              className={`w-[38.17vw] absolute bottom-[20vh] left-[52%] transform -translate-x-[52%] z-[3] `}
            >
              <div className={`relative w-full h-full `}>
                <Image
                  src={"/logos/wheelRollute.svg"}
                  height={540}
                  width={850}
                  className={`h-auto w-full object-contain ${
                    isSpinning ? "wheel-spinning" : ""
                  }`}
                  alt="Wheel"
                />

                <div className="absolute w-[5.46vw] top-0 left-[25%] transform -translate-x-[25%]">
                  <Image
                    src={"/logos/wheel_arrow.svg"}
                    height={138}
                    width={105}
                    className="h-auto w-full object-contain"
                    alt="Wheel"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wheel;
