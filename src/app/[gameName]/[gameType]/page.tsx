"use client";
import React from "react";
import { useRouter } from "next/navigation";
import KnowledgeHubHome from "@/app/_components/games/knowledgeHub/KnowledgeHubHome";
import KnowledgeWheelHome from "@/app/_components/games/knowledgeWheel/KnowledgeWheelHome";
import TreasureHuntHome from "@/app/_components/games/treasureHunt/TreasureHuntHome";
import {
  KNOWLEDGE_HUB,
  KNOWLEDGE_WHEEL,
  TREASURE_HUNT,
} from "@/app/_constants/gameTypes";

export default function GameHome({
  params,
}: {
  params: { gameType?: string };
}) {
  const { gameType } = params;
  const router = useRouter();

  if (gameType === KNOWLEDGE_HUB) {
    return <KnowledgeHubHome />;
  }
  if (gameType === KNOWLEDGE_WHEEL) {
    return <KnowledgeWheelHome />;
  }
  if (gameType === TREASURE_HUNT) {
    return <TreasureHuntHome />;
  }
}
