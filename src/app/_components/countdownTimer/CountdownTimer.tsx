import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  timer: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    // Reset remaining time when a new timer value is received
    setRemainingTime(timer);
  }, [timer]);

  useEffect(() => {
    // Start the countdown timer if remaining time is greater than 0
    if (remainingTime > 0) {
      const timerId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      // Clear the interval when component unmounts or remaining time becomes 0
      return () => clearInterval(timerId);
    }
  }, [remainingTime]);

  return (
    <div className="counter flex flex-col text-[1.3vw] items-center justify-center w-[22.55vw] bg-white bg-opacity-50 shadow-inner backdrop-blur-[30px] rounded-[10.42vw]">
      <div className="">{remainingTime} seconds</div>
    </div>
  );
};

export default CountdownTimer;
