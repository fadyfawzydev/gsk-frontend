import React from "react";
import { PuzzleIcon } from "./svgs/PuzzleIcon";
import { ArrowLine } from "./svgs/ArrowLine";
import QRCode from "react-qr-code";
import { ScanToPlay } from "./svgs/ScanToPlay";
import clsx from "clsx";
import { KNOWLEDGE_HUB } from "../_constants/gameTypes";
import { useRouter } from "next/navigation";
import { useMyContext } from "./providers/ContextProvider";
interface QrCodePartProps {
  fgColor?: string;
  gameType: string;
  nextPage: string;
}
const QrCodePart = ({
  fgColor = "#000",
  gameType = "treasure-hunt",
  nextPage = "/",
}: QrCodePartProps) => {
  const router = useRouter();
  const goToNextPage = () => {
    router.push(nextPage);
  };
  const gameStyle = {
    "treasure-hunt": {
      title: "Treasure Hunt",
      icon: "/logos/treasure-hunt.webp",
      color: "#FFFF08",
    },
    "knowledge-hub": {
      title: "Knowledge Hub",
      icon: "/logos/knowledge-hub.webp",
      color: "#D74C1D",
    },
    "knowledge-wheel": {
      title: "Knowledge Wheel",
      icon: "/logos/wheel-of-knowledge.webp",
      color: "#FFFF08",
    },
  };

  const { gameInfo } = useMyContext();

  const { color } = gameStyle[gameType as keyof typeof gameStyle] || {};

  const pinCodeClass = clsx({
    "text-orange-950": gameType === KNOWLEDGE_HUB,
    "text-white": gameType !== KNOWLEDGE_HUB,
    "text-[2.50vw] font-bold font-Metropolis": true,
  });

  const qrHolderClass = clsx({
    "bg-white/50": gameType === KNOWLEDGE_HUB,
    "bg-white/10": gameType !== KNOWLEDGE_HUB,
    "w-full rounded-bl-[1.67vw] rounded-br-[1.67vw] shadow-inner backdrop-blur-[26px] flex flex-col justify-center items-center gap-10 relative !mx-0 h-[74%] ":
      true,
  });
  const scanToPlayClass = clsx({
    "text-[#D74C1D]": gameType === KNOWLEDGE_HUB,
    "text-[#FFFF08]": gameType !== KNOWLEDGE_HUB,
    "w-full h-auto text-[${color}]": true,
  });

  const startPlayingClass = clsx({
    "bg-[#FBE7D1] text-orange-950": gameType === KNOWLEDGE_HUB,
    "bg-white/40 text-white": gameType !== KNOWLEDGE_HUB,
    "absolute -bottom-[5.55vh] w-[90%] h-[9.4vh] px-[18px] py-[2.96vh] rounded-[1.67vw] justify-center items-center gap-3.5 inline-flex backdrop-blur-[30px] ":
      true,
  });

  return (
    <div className="w-[34.38vw] shrink-0 h-screen">
      <div className="flex flex-col h-full w-full relative justify-between">
        <div className={qrHolderClass}>
          <div className="w-[36%] h-auto">
            <ScanToPlay className={scanToPlayClass} fill={color} />
          </div>
          <div className="w-[23vw] mx-auto h-auto mb-5">
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={gameInfo?.game_url || ""}
              bgColor={"transparent"}
              fgColor={fgColor}
              viewBox={`0 0 256 256`}
            />
          </div>
          <button
            onClick={() => {
              goToNextPage();
            }}
            className={startPlayingClass}
          >
            <span className="text-center text-[1.97vw] font-semibold  flex items-center gap-4">
              <PuzzleIcon className="w-[1.97vw] h-auto" /> Start Playing Now
            </span>
          </button>
        </div>
        <div className="relative w-full flex flex-col items-center justify-end ">
          <div className="absolute right-[1.04vw] -top-[8vh] z-10 h-[9.45vh]">
            <ArrowLine
              className={`w-full h-full ${
                gameType === KNOWLEDGE_HUB ? "text-[#7D20A8]" : "text-[#FFFF08]"
              }`}
            />
          </div>

          <div className="bg-white bg-opacity-50 rounded-[1.67vw] shadow-inner backdrop-blur-[30px] flex items-center justify-center w-full gap-4 mb-[1.48vh] h-[13.98vh] ">
            <span className={pinCodeClass}>Pin Code :</span>
            <span
              className={`text-[${color}] text-[2.50vw] font-black font-['Metropolis']`}
            >
              {gameInfo?.pin_code}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCodePart;
