
import React from "react";
import { AbsoluteFill } from "remotion";

import JagannathTrinity from "../Components/JagannathTrinity";

export const DeityPreview: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#e8c995",
        overflow: "hidden",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1080 1920"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect
          width="1080"
          height="1920"
          fill="#e8c995"
        />

        {/* Complete Jagannath Trinity */}
        <JagannathTrinity
          x={82}
          y={450}
          scale={0.5}
          opacity={1}
        />
      </svg>
    </AbsoluteFill>
  );
};
