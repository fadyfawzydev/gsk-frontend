import Image from "next/image";
import QRCode from "react-qr-code";
import { PuzzleIcon } from "./_components/svgs/PuzzleIcon";
import { ArrowLine } from "./_components/svgs/ArrowLine";

export default function Home() {
  const code: string = "485-439";
  return (
    <div className="mainBg w-full h-screen overflow-hidden">
      <div className="h-full px-[30px] relative">
        <div className="absolute right-[30px] top-4 hidden">
          <div className="flex gap-4">
            <Image src={"/logos/gsk.webp"} height={43} width={143} alt="Gsk" />
            <Image
              src={"/logos/kepra.webp"}
              height={64}
              width={143}
              alt="kepra"
            />
          </div>
        </div>
        <div className="flex h-full w-full">
          <div className="w-4/12 h-full">
            <div className="flex flex-col h-full w-full relative justify-between">
              <div className="w-full h-[75%] 2xl:h-[75%] rounded-bl-[32px] rounded-br-[32px] shadow-inner backdrop-blur-[47px] flex flex-col justify-center items-center gap-10 relative !m-0">
                <Image
                  src={"/logos/scan_to_play.webp"}
                  height={37}
                  width={238}
                  alt="Scan to Play"
                />
                <div className="min-w-[75%] 2xl:min-w-[85%]  mx-auto h-auto mb-5">
                  <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={code}
                    bgColor={"transparent"}
                    viewBox={`0 0 256 256`}
                  />
                </div>
                <button className="absolute -bottom-[50px] w-[90%] h-[102px] px-[18px] py-8 bg-white bg-opacity-60 rounded-[32px] shadow-inner backdrop-blur-[47px] justify-center items-center gap-3.5 inline-flex">
                  <span className="text-center text-orange-950 lg:text-2xl 2xl:text-3xl font-semibold font-['Metropolis'] flex items-center gap-4">
                    <PuzzleIcon /> Start Playing Now
                  </span>
                </button>
              </div>
              <div className="relative w-full h-[25%] flex flex-col items-center justify-end ">
                <ArrowLine
                  className="absolute right-[21px] bottom-[70px] 3xl:bottom-[102px] z-10 w-[40px] 2xl:w-[45px] "
                />
                <div className="bg-white bg-opacity-50 rounded-[32px] shadow-inner backdrop-blur-[47px] flex items-center justify-center w-full gap-4 mb-4 min-h-[110px]">
                  <span className="text-orange-950 lg:text-3xl 2xl:text-4xl font-bold font-['Metropolis']">
                    Pin Code :
                  </span>
                  <span className="text-orange-600 lg:text-3xl 2xl:text-4xl font-black font-['Metropolis']">
                    {code}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-8/12 h-full flex flex-col justify-around">
            <div className="flex gap-4 justify-end items-center ">
              <Image
                src={"/logos/gsk.webp"}
                height={43}
                width={143}
                alt="Gsk"
              />
              <Image
                src={"/logos/kepra.webp"}
                height={64}
                width={143}
                alt="kepra"
              />
            </div>
            <div className="flex justify-end items-center ">
              <Image
                src={"/logos/knowledge_hub.webp"}
                height={324}
                width={600}
                className="w-[40%] h-auto"
                alt="knowledge_hub"
              />
            </div>
            <div className="flex justify-end items-center ">
              <Image
                src={"/logos/waiting_for_players.webp"}
                height={279}
                width={478}
                className="w-[40%] h-auto object-contain"
                alt="waiting_for_players"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
