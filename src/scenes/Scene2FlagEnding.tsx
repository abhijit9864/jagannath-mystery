import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

import { AnimatedJagannathTemple } from "./AnimatedJagannathTemple";

const GOLD = "#FFD45A";
const WHITE = "#FFFFFF";

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

export const Scene2FlagEnding: React.FC = () => {
  const frame = useCurrentFrame();

  // Dark cinematic fade-in
  const dimOpacity = interpolate(
    frame,
    [0, 35],
    [0.15, 0.58],
    clamp
  );

  // Caption animation
  const captionOpacity = interpolate(
    frame,
    [25, 55],
    [0, 1],
    clamp
  );

  const captionY = interpolate(
    frame,
    [25, 55],
    [35, 0],
    clamp
  );

  // Slow cinematic camera movement
  const cameraScale = interpolate(
    frame,
    [0, 180],
    [1, 1.035],
    clamp
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#21143F",
        overflow: "hidden",
      }}
    >
      {/* Same temple design, sunset variant */}
      <AbsoluteFill
        style={{
          transform: `scale(${cameraScale})`,
          transformOrigin: "center center",
        }}
      >
        <AnimatedJagannathTemple variant="climber" />
      </AbsoluteFill>

      {/* Dark cinematic overlay */}
      <AbsoluteFill
        style={{
          backgroundColor: `rgba(10, 5, 24, ${dimOpacity})`,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};