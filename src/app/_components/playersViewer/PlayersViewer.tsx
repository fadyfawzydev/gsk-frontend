import React, { useState, useEffect } from "react";
import Player from "../players/Player";
import Pusher from "pusher-js";
import Image from "next/image";
import clsx from "clsx";

const appId = "1775161";
const key = "eecd5438a7c0310079d6";
const secret = "6403194108070b5539a8";
const cluster = "us2";

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
  const [players, setPlayers] = useState<string[]>(["Fady", "Marwan"]);
  const [totalPlayers, setTotalPlayers] = useState<number>(0);
  const [animateNewPlayer, setAnimateNewPlayer] = useState<boolean>(false);

  useEffect(() => {
    const pusher = new Pusher(key, {
      cluster: cluster,
    });

    const channel = pusher.subscribe("nintendo");

    channel.bind("gsk-playerjoined", function (data: PlayerData) {
      const playerName = data.player_name;
      setTotalPlayers((prevTotal) => prevTotal + 1);
      setAnimateNewPlayer(true); // Trigger animation
      setTimeout(() => {
        setAnimateNewPlayer(false); // Turn off animation after a delay
      }, 1000); // Adjust delay as needed
      setPlayers((prevPlayers) => {
        const updatedPlayers = [playerName, ...prevPlayers];
        return updatedPlayers.slice(0, 3);
      });
    });

    return () => {
      channel.unbind_all();
      pusher.unsubscribe("nintendo");
    };
  }, []);

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
                <Player
                  key={index}
                  playerName={playerName}
                  animate={animateNewPlayer && index === 0} // Apply animation only to the first player
                />
              ))
            ) : (
              <Player
                playerName={"No players have joined yet."}
                animate={false}
                isEmpty={true}
              />
            )}
          </div>
          <div className="min-w-[10.4vw] absolute left-[8vw] bottom-[1.5vh] flex gap-[1vw] items-center">
            <p className="text-[2.5vw] font-bold text-left text-[#f7ea24]">
              {!!players.length ? players.length : ""}{" "}
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
