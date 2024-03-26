import React from "react";

interface PlayerProps {
  playerName: string;
  animate: boolean;
  isEmpty?: boolean;
}

const Player: React.FC<PlayerProps> = ({
  playerName,
  animate,
  isEmpty = false,
}) => {
  return (
    <div
      className={`player ${
        animate ? "animate-fade-in" : ""
      } bg-amber-600 w-full bg-opacity-30 rounded-[1.04vw] px-[1.45vw] py-[1.11vh]`}
    >
      <p className="text-black text-[1.25vw] capitalize">
        <span className="font-bold">{playerName} </span>
        {isEmpty ? null : <span className="">has Joined</span>}
      </p>
    </div>
  );
};

export default Player;
