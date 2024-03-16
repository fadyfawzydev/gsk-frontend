"use client";
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
  const [loading, setLoading] = useState(true); // Add loading state

  // Check if gameInfo exists in session storage on component mount
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
    setLoading(false); // Mark loading as false after mounting
  }, []);

  const updateGameInfo = (newGameInfo: GameInfo) => {
    setGameInfo(newGameInfo);
    sessionStorage.setItem("gameInfo", JSON?.stringify(newGameInfo));
  };

  const checkTokenAndRedirect = () => {
    console.log("Checking token and redirecting...");
    console.log("Current gameInfo:", gameInfo);

    if (!gameInfo || gameInfo._token === undefined) {
      console.log("Redirecting...");
      router.push("/nintendo");
      return null;
    }
  };

  if (loading) {
    return null; // Render a loading indicator
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
