import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { AnimatedJagannathTemple } from "./AnimatedJagannathTemple";

// Scene 6: reuse the user's existing Jagannath temple artwork exactly.
// The only added visual is the red cross over the ground-shadow area.
export const Scene6NoShadow: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(
    frame,
    [0, 18, 105, 125],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const revealOpacity = interpolate(
    frame,
    [85, 115, 285, 300],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const crossOpacity = interpolate(
    frame,
    [105, 145, 300],
    [0, 1, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#211936", overflow: "hidden" }}>
      {/* Exact temple illustration from src/scenes/AnimatedJagannathTemple.tsx */}
      <AbsoluteFill>
        <AnimatedJagannathTemple variant="flag" />
      </AbsoluteFill>

      {/* Dark lower gradient for readable narration */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          background:
            "linear-gradient(transparent 58%, rgba(20, 12, 22, 0.84) 100%)",
          pointerEvents: "none",
        }}
      >
        {/* Opening line */}
        <div
          style={{
            position: "absolute",
            bottom: 245,
            width: "100%",
            padding: "0 55px",
            textAlign: "center",
            opacity: titleOpacity,
          }}
        >
          <div
            style={{
              color: "#fff5df",
              fontSize: 58,
              fontWeight: 900,
              lineHeight: 1.5,
              fontFamily: "Noto Sans Devanagari, sans-serif",
              textShadow: "0 5px 18px #160d07",
            }}
          >
            इतना विशाल मंदिर...
          </div>
        </div>

        {/* Mystery reveal */}
        <div
          style={{
            position: "absolute",
            bottom: 205,
            width: "100%",
            padding: "0 48px",
            textAlign: "center",
            opacity: revealOpacity,
          }}
        >
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
