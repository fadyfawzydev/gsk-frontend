import Image from "next/image";
import QrCodePart from "../../QrCodePart";
import { useParams } from "next/navigation";

export default function TreasureHuntHome() {
  const code: string = "485-439";
  const { gameName, gameType } = useParams<{
    gameName: string;
    gameType: string;
  }>();

  return (
    <div className="treasureBg w-full h-screen overflow-hidden">
      <div className="h-screen px-[1.563vw] relative">
        <div className="flex h-screen w-full justify-between items-center gap-y-[3.15vh] relative">
          <div className="flex w-full top-[2.96vh] gap-[1.5vh] items-start h-[5.93vh] absolute left-0 ">
            <Image
              src={"/logos/gsk_white.webp"}
              height={43}
              width={143}
              className="h-full w-auto object-contain"
              alt="Gsk"
            />
            <Image
              src={"/logos/kepra_white.webp"}
              height={64}
              width={143}
              className="h-full w-auto object-contain"
              alt="kepra"
            />
          </div>
          <div className="flex h-[50vh]">
            <Image
              src={"/logos/treasure_hunt.webp"}
              height={540}
              width={850}
              className="h-full w-auto object-contain"
              alt="Treasure"
            />
          </div>
          <QrCodePart
            gameType="treasure-hunt"
            code={code}
            fgColor="#fff"
            nextPage={`/${gameName}/${gameType}/map`}
          />
        </div>
      </div>
    </div>
  );
}
