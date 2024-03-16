"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define types for your context
type MyContextType = {
  gameType: string;
  sessionToken: string;
  updateGameType: (newGameType: string) => void;
  updateSessionToken: (newSessionToken: string) => void;
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
  const [gameType, setGameType] = useState("");
  const [sessionToken, setSessionToken] = useState("");

  const updateGameType = (newGameType: string) => {
    setGameType(newGameType);
  };

  const updateSessionToken = (newSessionToken: string) => {
    setSessionToken(newSessionToken);
  };

  return (
    <MyContext.Provider
      value={{ gameType, sessionToken, updateGameType, updateSessionToken }}
    >
      {children}
    </MyContext.Provider>
  );
};
