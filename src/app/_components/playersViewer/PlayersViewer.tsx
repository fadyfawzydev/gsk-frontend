import React, { useState, useEffect } from "react";
import PlayerRow from "../playerRow/PlayerRow";
import Pusher from "pusher-js";
import Image from "next/image";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { cluster, key } from "@/app/_constants/pusherVars";

interface PlayerData {
  player_name: string;
  game_slug: string;
}
interface PlayersViewerProps {
  className?: string;
  diaglogRight?: boolean;
}

const PlayersViewer: React.FC<PlayersViewerProps> = ({
  className = "absolute bottom-[0.6vh]",
  diaglogRight = false,
}) => {
  const { gameName } = useParams<{
    gameName: string;
  }>();
  const [players, setPlayers] = useState<string[]>([]);
  const [animateNewPlayer, setAnimateNewPlayer] = useState<boolean>(false);
  // Added By Marwan to handle the case of the player counter
  const [playerCounter, setPlayerCounter] = useState(0);

  useEffect(() => {
    const pusher = new Pusher(key, {
      cluster: cluster,
    });

    const channel = pusher.subscribe(gameName);

    channel.bind("gsk-playerjoined", function (data: PlayerData) {
      const playerName = data.player_name;
      setAnimateNewPlayer(true); // Trigger animation
      setTimeout(() => {
        setAnimateNewPlayer(false); // Turn off animation after a delay
      }, 1000); // Adjust delay as needed
      setPlayers((prevPlayers) => {
        const updatedPlayers = [playerName, ...prevPlayers];
        return updatedPlayers.slice(0, 3);
      });
      // Added By Marwan to handle the case of the player counter
      setPlayerCounter((prevCounter) => prevCounter + 1);
    });

    return () => {
      channel.unbind_all();
      pusher.unsubscribe(gameName);
    };
  }, [gameName]);

  return (
    <div className={className}>
      <div className="relative w-[33.85vw]">
        <Image
          src={"/shapes/playersDialog.svg"}
          height={324}
          width={600}
          className={clsx("h-auto w-full object-contain", {
            "img-hor": diaglogRight,
          })}
          alt="blob"
        />
        <div className="absolute top-0 w-full h-full px-[1.67vw] py-[1.75vh]">
          <div
            className={clsx("flex flex-col h-full gap-y-[1.26vh]", {
              "justify-center": !!!players.length,
            })}
          >
            {!!players.length ? (
              players.map((playerName, index) => (
                <PlayerRow
                  key={index}
                  playerName={playerName}
                  animate={animateNewPlayer && index === 0} // Apply animation only to the first player
                />
              ))
            ) : (
              <PlayerRow
                playerName={"No players have joined yet."}
                animate={false}
                isEmpty={true}
              />
            )}
          </div>
          <div className="min-w-[10.4vw] absolute left-[8vw] bottom-[1.5vh] flex gap-[1vw] items-center">
            <p className="text-[2.5vw] font-bold text-left text-[#f7ea24]">
              {/* {!!players.length ? players.length : ""}{" "} */}
              {/* Added By Marwan to handle the case of the player counter */}
              {!!playerCounter ? playerCounter : ""}{" "}
              <span className="text-[1.56vw] font-normal text-left text-white">
                {!!players.length ? "Player Online !!" : ""}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersViewer;
