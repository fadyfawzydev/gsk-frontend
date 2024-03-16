import Image from "next/image";
import QrCodePart from "../../QrCodePart";
import { KNOWLEDGE_HUB } from "@/app/_constants/gameTypes";
import { usePathname } from "next/navigation";

export default function KnowledgeHubHome() {
  const code: string = "485-439";
  const pathname = usePathname()
  return (
    <div className="mainBg w-full h-screen overflow-hidden">
      <div className="h-screen px-[1.563vw] relative">
        <div className="flex h-screen w-full">
          <QrCodePart
            code={code}
            gameType={KNOWLEDGE_HUB}
            nextPage={`${pathname}/questions`}
          />
          <div className="w-full h-full flex flex-col justify-around">
            <div className="flex gap-[1.563vw] justify-end items-center h-[5.93vh] ">
              <Image
                src={"/logos/gsk.webp"}
                height={43}
                width={143}
                className="h-full w-auto object-contain"
                alt="Gsk"
              />
              <Image
                src={"/logos/kepra.webp"}
                height={64}
                width={143}
                className="h-full w-auto object-contain"
                alt="kepra"
              />
            </div>
            <div className="flex justify-end items-center w-full">
              <div className="w-[32.76vw]">
                <Image
                  src={"/logos/knowledge-hub.webp"}
                  height={324}
                  width={600}
                  className="h-auto w-full object-contain"
                  alt="knowledge_hub"
                />
              </div>
            </div>
            <div className="flex justify-end items-center ">
              <div className="w-[25vw]">
                <Image
                  src={"/logos/waiting_for_players.webp"}
                  height={279}
                  width={478}
                  className="h-auto w-full object-contain"
                  alt="waiting_for_players"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
