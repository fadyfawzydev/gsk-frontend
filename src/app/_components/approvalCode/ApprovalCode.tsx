import React, { useEffect, useState } from "react";
import Toaster from "../toaster/Toaster";

interface ApprovalCodeProps {
  isRight?: boolean;
  className?: string;
}
const ApprovalCode = ({ isRight = true, className }: ApprovalCodeProps) => {
  const msg = `For more information, please refer to the prescribing information or contact GSK: P.O Box 55850, Jeddah, 21544, Kingdom of Saudi Arabia. Telephone: +966 12 653 6666 or via gcc.medinfo@gsk.com

    To report Adverse Event/s associated with the use of GSK product/s, please contact us via saudi.safety@gsk.com
    
    To report Quality related product complaint/s associated with the use of GSK product/s, please contact us via Gulf-KSA.Product-Complaints@gsk.com
    Trademarks are owned by or licensed to the GSK group of companies.
    ©2024 GSK group of companies or its licensor.
    `;
  const [toasterMessage, setToasterMessage] = useState(msg);
  const [isToasterVisible, setIsToasterVisible] = useState(false);
  const changeTosaterState = () => {
    setIsToasterVisible(!isToasterVisible);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isToasterVisible) {
      timeoutId = setTimeout(() => {
        setIsToasterVisible(false);
      }, 10000);
    }
    return () => clearTimeout(timeoutId);
  }, [isToasterVisible]);
  return (
    <div
      className={`approvalCode absolute bottom-1 ${
        isRight ? "right-[8.563vw]" : "left-[8.563vw]"
      }`}
    >
      <Toaster
        message={toasterMessage}
        visible={isToasterVisible}
        additionalCss={"w-[30vw]"}
      />

      <div className={`${className} text-[0.75vw]`}>
        <button onClick={changeTosaterState}>Disclaimer</button> <br />{" "}
        <span>A019-109-10</span>
      </div>
    </div>
  );
};

export default ApprovalCode;
