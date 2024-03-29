"use client";
import React, { useEffect, useState } from "react";
import { useMyContext } from "../_components/providers/ContextProvider";
import { useRouter } from "next/navigation";
import { adminStartPlay } from "../_services/api";
import Image from "next/image";

interface ToasterProps {
  message: string;
  visible: boolean;
}
const Toaster: React.FC<ToasterProps> = ({ message, visible }) => {
  return (
    <div
      className={`${
        visible ? "block" : "hidden"
      } fixed bottom-[10vh] w-[20vw] text-white left-1/2 transform -translate-x-1/2 bg-red-500/80 text-center text-[1vw] p-4 rounded shadow-lg z-50`}
    >
      <p>{message}</p>
    </div>
  );
};

export default function LoginPage({
  params,
}: {
  params: { gameName?: string };
}) {
  const { gameName } = params;
  const { updateGameInfo } = useMyContext();
  const router = useRouter();


  const [toasterMessage, setToasterMessage] = useState("");
  const [isToasterVisible, setIsToasterVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isToasterVisible) {
      timeoutId = setTimeout(() => {
        setIsToasterVisible(false);
      }, 4000);
    }
    return () => clearTimeout(timeoutId);
  }, [ isToasterVisible]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsToasterVisible(false);

    try {
      const usernameInput = document.getElementById(
        "username"
      ) as HTMLInputElement;
      const passwordInput = document.getElementById(
        "password"
      ) as HTMLInputElement;
      if (!usernameInput || !passwordInput) return;

      const username = usernameInput.value;
      const password = passwordInput.value;

      const startPlayResponse = await adminStartPlay(
        username,
        password,
        gameName || "",
        ""
      );
      const { data } = startPlayResponse;
      const errorMessage = startPlayResponse.status
        ? ""
        : startPlayResponse.msg;

      setToasterMessage(errorMessage);

      updateGameInfo(data);
      router.push(`/${gameName}/${data.game_type_slug}`);
    } catch (error) {
      console.error("Error logging in:", error);
      setIsToasterVisible(true);
    }
  };

  return (
    <div className="loginBg w-full h-screen overflow-hidden">
      <div className="h-screen relative">
        <Toaster message={toasterMessage} visible={isToasterVisible} />
        <div className="flex h-screen w-full flex-col justify-center items-center relative">
          <div className="flex w-full h-full justify-center items-center gap-x-[6.25vw] ">
            <div className="flex gap-y-[6vh] flex-col justify-center items-center">
              <div className="w-[15.6vw]">
                <Image
                  src={`/logos/gsk.webp`}
                  height={324}
                  width={600}
                  className="h-auto w-full object-contain"
                  alt={"game logo"}
                />
              </div>
              <div className="text-[1.14vw] w-[90%]  font-semibold text-center">
                We have policies in place across GSK to ensure we meet the high
                standards we set ourselves as a company, and those that are
                expected of us externally.
              </div>
            </div>
            <div className="relative w-[31.25vw] h-[92vh] bg-white flex justify-center flex-col items-center rounded-[1.25vw]">
              <form
                className="text-center flex flex-col items-center gap-y-[2.5vh] mx-[5.20vw]"
                onSubmit={handleLogin}
              >
                <h6 className="font-bold text-[1.14vw]">Login</h6>
                <div className="flex flex-col w-full justify-center gap-[2vh]">
                  <label htmlFor="username" className="w-full text-left">
                    Username <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    required
                    className="h-[4vh] relative bg-white rounded-[0.32vw] outline-none text-[1vw] placeholder:text-[1vw] px-[1.67vw] border border-[#DBDFE9]"
                    placeholder="Please enter your username"
                  />
                </div>
                <div className="flex flex-col w-full justify-center gap-[2vh]">
                  <label htmlFor="password" className="w-full text-left">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    required
                    className="h-[4vh] relative bg-white rounded-[0.32vw] outline-none text-[1vw] placeholder:text-[1vw] px-[1.67vw] border border-[#DBDFE9]"
                    placeholder="Please enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-[4.2vh] text-[1vw] relative rounded-[6.18px] bg-[#e86824] text-white mt-[4vh]"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
