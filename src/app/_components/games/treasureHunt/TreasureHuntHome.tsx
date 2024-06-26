import Image from "next/image";
import QrCodePart from "../../QrCodePart";
import { useParams } from "next/navigation";
import { useMyContext } from "../../providers/ContextProvider";
import PlayersViewer from "../../playersViewer/PlayersViewer";
import { motion } from "framer-motion";
import ApprovalCode from "../../approvalCode/ApprovalCode";

export default function TreasureHuntHome() {
  const { gameName, gameType } = useParams<{
    gameName: string;
    gameType: string;
  }>();
  const { gameInfo } = useMyContext();
  const eventImgSrc = gameInfo?.event_logo;

  return (
    <div className="treasureBg w-full h-screen overflow-hidden">
      {/* Main Part */}
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, duration: 1.5 }}
        className="h-screen px-[1.563vw] relative"
      >
        <div className="flex h-screen w-full justify-between items-center gap-y-[3.15vh] relative">
          <div className="flex w-full top-[2.96vh] gap-[1.5vh] items-start h-[5.93vh] absolute left-0 ">
            <Image
              src={"/logos/gsk_white.webp"}
              height={43}
              width={143}
              className="h-full w-auto object-contain"
              alt="Gsk"
            />
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
          </div>
          <div className="flex h-[50vh]">
            <Image
              src={"/logos/treasure-hunt.webp"}
              height={540}
              width={850}
              className="h-full w-auto object-contain"
              alt="Treasure"
            />
          </div>
          <QrCodePart
            gameType="treasure-hunt"
            fgColor="#fff"
            nextPage={`/${gameName}/${gameType}/map`}
          />
          <PlayersViewer />
        </div>
        <ApprovalCode isRight={false} className="text-white" />
      </motion.div>
    </div>
  );
}
