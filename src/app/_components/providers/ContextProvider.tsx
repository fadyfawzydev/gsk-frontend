"use client";
import { useRouter } from "next/navigation";
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define types for your context
type MyContextType = {
  gameInfo: GameInfo | null;
  updateGameInfo: (newGameInfo: GameInfo) => void;
  checkTokenAndRedirect: () => void;
};

type GameInfo = {
  gameUrl: string;
  gameTypeSlug: string;
  eventLogo: string;
  pinCode: string;
  eventColor: string;
  token: string;
  tokenType: string;
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

  const updateGameInfo = (newGameInfo: GameInfo) => {
    setGameInfo(newGameInfo);
  };

  const checkTokenAndRedirect = () => {
    if (!gameInfo || !gameInfo.token) {
      router.push("/nintendo");
      return null;
    }
  };

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
