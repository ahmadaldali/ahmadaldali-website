"use client";

import Confetti from "react-confetti";
import { IsMobile } from "@/components/responsive/IsMobile";

export const ConfettiComponent = () => {
 const isMobile = IsMobile();

  return (
    <div>
      <Confetti
        width={isMobile ? 200 : 600}
        height={isMobile ? 100: 200}
        opacity={0.8}
        numberOfPieces={100}
        recycle={false}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
    </div>
  );
};
