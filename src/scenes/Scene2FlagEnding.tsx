import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Scene2FlagClimber } from "./Scene2FlagClimber";

const GOLD = "#FFD45A";
const WHITE = "#FFFFFF";

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

/**
 * Scene 2C — closing beat for the flag-climbing sequence.
 * Reuses the exact Scene2FlagClimber animation, then dims it and places
 * the traditional-belief caption over the previous caption area.
 */
export const Scene2FlagEnding: React.FC = () => {
  const frame = useCurrentFrame();

  const dimOpacity = interpolate(frame, [0, 20], [0, 0.48], clamp);
  const captionOpacity = interpolate(frame, [10, 35], [0, 1], clamp);
  const captionY = interpolate(frame, [10, 35], [34, 0], clamp);

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: "#21143F" }}>
      {/* Exact same sunset temple, climbing sevak, flag and scale animation. */}
      <Scene2FlagClimber />

      {/* Lower the visual intensity for the suspenseful closing line. */}
      <AbsoluteFill
        style={{
          backgroundColor: `rgba(12, 7, 25, ${dimOpacity})`,
          pointerEvents: "none",
        }}
      />

      {/* Opaque caption panel covers the previous scene's caption completely. */}
      <div
        style={{
          position: "absolute",
          left: 42,
          right: 42,
          bottom: 92,
          minHeight: 210,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "25px 28px",
          borderRadius: 22,
          background: "rgba(15, 8, 22, 0.94)",
          border: "2px solid rgba(255, 212, 90, 0.82)",
          boxShadow: "0 12px 38px rgba(0,0,0,0.58), 0 0 22px rgba(255,190,55,0.14)",
          opacity: captionOpacity,
          transform: `translateY(${captionY}px)`,
        }}
      >
        <div
          style={{
            color: WHITE,
            fontSize: 35,
            lineHeight: 1.55,
            fontWeight: 850,
            textAlign: "center",
            fontFamily: "Noto Sans Devanagari, Mangal, sans-serif",
            textShadow: "0 3px 12px rgba(0,0,0,0.9)",
          }}
        >
          मान्यता है कि अगर एक दिन भी यह परंपरा छूट जाए...
          <span
            style={{
              color: GOLD,
              textShadow: "0 0 16px rgba(255,212,90,0.45)",
            }}
          >
            {" "}तो मंदिर अठारह साल तक बंद रखना पड़ेगा!
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
