"use client";
import clsx from "clsx";
import { useParams } from "next/navigation";
import {
  KNOWLEDGE_HUB,
  KNOWLEDGE_WHEEL,
  TREASURE_HUNT,
} from "@/app/_constants/gameTypes";
import Image from "next/image";

const Disclaimer = () => {

  const { gameName, gameType } = useParams<{
    gameName: string;
    gameType: string;
  }>();
  const mainBgStyle = clsx({
    "knowledgeHubWinnersBg ": gameType === KNOWLEDGE_HUB,
    "knowledgeWheelWinnersBg ": gameType === KNOWLEDGE_WHEEL,
    "treasureHuntWinnersBg ": gameType === TREASURE_HUNT,
    "w-full h-screen overflow-hidden": true,
  });

  return (
    <div className={mainBgStyle} style={{overflowY:"scroll"}}>
      <div className="max-w-4xl mx-auto my-9 p-5 text-center" style={{backgroundColor:"#eedba6",borderRadius:5,}}>
      <p className="my-4">
        <strong>Event is organized by GSK and intended for Saudi Arabia HCPs only.</strong>
      </p>
      <p className="mt-3">For more information, please contact GSK via gcc.medinfo@gsk.com</p>
      <p className="mt-3">To report an adverse event/s associated with the use of GSK product/s, please contact us via saudi.safety@gsk.com</p>
      <p className="mt-3">To report a quality related product complaint/s associated with the use of GSK product/s, please contact us via ksa.productqualitycomplaint@gsk.com</p>

      <p className="mt-3">About your privacy: GSK may monitor our technology tools and services 
        (including email, phone, and other communications sent to and from GSK) 
        in order to maintain the security of systems, and to protect our staff, 
        customers and business partners from cyber threats and loss of information. <br/>
        Examples of these monitoring activities include checks for offensive materials, 
        viruses and other malignant code, and unauthorized or unlawful activity. <br/>
        GSK monitoring is conducted with appropriate confidentiality 
        controls and in accordance with local laws. <br/>
        You can learn about the information that we may process about you, 
        and how we use your information, <a className="underline" href="https://privacy.gsk.com/en-sa/privacy-notice/healthcare-professional/" target="_blank">https://privacy.gsk.com/en-sa/privacy-notice/healthcare-professional/</a></p>

      <p className="mt-3">For GSK terms of use, <a className="underline" href="https://terms.gsk.com/en-sa/pharmaceuticals/default/" target="_blank">https://terms.gsk.com/en-sa/pharmaceuticals/default/</a></p>

      <p className="mt-3">Trademarks are owned by or licensed to the GSK group of companies. Copyright © GlaxoSmithKline 2024. All rights reserved.</p> 

      <p className="mt-3">CL code: PM-SA-AAP-WCNT-240001, Date of preparation: Sep 2024.</p>

      <Image src="/gaming_app_qr_code.png" alt="GSK Logo" width={200} height={100} className="mx-auto mt-5" />
      
      <button className="mt-5 bg-red-400 text-white font-bold py-2 px-12 rounded-full" onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
}

export default Disclaimer