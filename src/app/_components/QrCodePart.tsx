import React from "react";
import { PuzzleIcon } from "./svgs/PuzzleIcon";
import { ArrowLine } from "./svgs/ArrowLine";
import Image from "next/image";
import QRCode from "react-qr-code";
interface QrCodePartProps {
  code: string;
  fgColor?: string;
}
const QrCodePart = ({ code, fgColor = "#000" }: QrCodePartProps) => {
  return (
    <div className="w-[34.38vw] shrink-0 h-screen">
      <div className="flex flex-col h-full w-full relative justify-between">
        <div className="w-full rounded-bl-[1.67vw] rounded-br-[1.67vw] shadow-inner backdrop-blur-[26px] bg-white/60 flex flex-col justify-center items-center gap-10 relative !mx-0 h-[74%] ">
          <Image
            src={"/logos/scan_to_play.webp"}
            height={37}
            width={238}
            className="w-[36%] h-auto"
            alt="Scan to Play"
          />
          <div className="w-[26.8vw] mx-auto h-auto mb-5">
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={code}
              bgColor={"transparent"}
              fgColor={fgColor}
              viewBox={`0 0 256 256`}
            />
          </div>
          <button className="absolute -bottom-[5.55vh] w-[90%] h-[9.4vh] px-[18px] py-[2.96vh] bg-[#FBE7D1] rounded-[1.67vw] justify-center items-center gap-3.5 inline-flex">
            <span className="text-center text-orange-950 text-[1.97vw] font-semibold font-['Metropolis'] flex items-center gap-4">
              <PuzzleIcon className="w-[1.97vw] h-auto" /> Start Playing Now
            </span>
          </button>
        </div>
        <div className="relative w-full h-[25%] flex flex-col items-center justify-end ">
          <div className="absolute right-[1.04vw] top-0 z-10 h-[9.45vh]">
            <ArrowLine className="w-full h-full" />
          </div>

          <div className="bg-white bg-opacity-50 rounded-[1.67vw] shadow-inner backdrop-blur-[30px] flex items-center justify-center w-full gap-4 mb-[1.48vh] h-[13.98vh] ">
            <span className="text-orange-950 text-[2.50vw] font-bold font-['Metropolis']">
              Pin Code :
            </span>
            <span className="text-orange-600 text-[2.50vw] font-black font-['Metropolis']">
              {code}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCodePart;
