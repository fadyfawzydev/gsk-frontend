"use client";
import {
  KNOWLEDGE_HUB,
  KNOWLEDGE_WHEEL,
  TREASURE_HUNT,
} from "@/app/_constants/gameTypes";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

// Define types for your context
type MyContextType = {
  gameInfo: GameInfo | null;
  updateGameInfo: (newGameInfo: GameInfo) => void;
  checkTokenAndRedirect: () => void;
};

type GameInfo = {
  game_url: string;
  game_type_slug: string;
  event_logo: string;
  pin_code: string;
  event_color: string;
  _token: string;
  token_type: string;
};

// Initialize the context
const MyContext = createContext<MyContextType | undefined>(undefined);

// Define a custom hook to use the context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a ContextProvider");
  }
  return context;
};

// Define a provider component for your context
type ContextProviderProps = {
  children: ReactNode;
};
export const ContextProvider = ({ children }: ContextProviderProps) => {
  const router = useRouter();
  const [gameInfo, setGameInfo] = useState<GameInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedGameInfo = sessionStorage.getItem("gameInfo");
    if (storedGameInfo !== null) {
      try {
        const parsedGameInfo = JSON.parse(storedGameInfo);
        setGameInfo(parsedGameInfo);
      } catch (error) {
        console.error("Error parsing stored gameInfo:", error);
      }
    }
    setLoading(false);
  }, []);

  const updateGameInfo = (newGameInfo: GameInfo) => {
    setGameInfo(newGameInfo);
    sessionStorage.setItem("gameInfo", JSON.stringify(newGameInfo));
  };

  const checkTokenAndRedirect = () => {
    if (!gameInfo || gameInfo._token === undefined) {
      router.push("/nintendo");
      return null;
    }
  };

  useEffect(() => {
    if (!loading && gameInfo && gameInfo.game_type_slug) {
      const audio = new Audio();
      if (gameInfo.game_type_slug === KNOWLEDGE_HUB) {
        audio.src = "/sounds/game_sound1.mp3";
      } else if (gameInfo.game_type_slug === KNOWLEDGE_WHEEL) {
        audio.src = "/sounds/game_sound2.mp3";
      } else if (gameInfo.game_type_slug === TREASURE_HUNT) {
        audio.src = "/sounds/game_sound3.mp3";
      }
      audio.loop = true;
      audio.play();
      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [loading, gameInfo]);

  if (loading) {
    return null;
  }

  return (
    <MyContext.Provider
      value={{
        gameInfo,
        updateGameInfo,
        checkTokenAndRedirect,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
