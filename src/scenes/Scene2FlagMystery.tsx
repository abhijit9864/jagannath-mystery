import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedJagannathTemple } from "./AnimatedJagannathTemple";

const GOLD = "#FFD45A";
const WHITE = "#FFFFFF";

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

/**
 * Scene 2 — tight close-up of only the upper Shikhara, Nilachakra and flag.
 * Reuses the exact temple geometry from Scene 1; it does not redraw the temple.
 */
export const Scene2FlagMystery: React.FC = () => {
  const frame = useCurrentFrame();

  // Stronger zoom and a higher focal point keep the lower temple/base outside the frame.
  const zoom = interpolate(frame, [0, 300], [2.35, 2.55], clamp);
  const cameraY = interpolate(frame, [0, 300], [18, -22], clamp);

  const captionOpacity = interpolate(frame, [95, 120], [0, 1], clamp);
  const captionY = interpolate(frame, [95, 120], [45, 0], clamp);
  const labelOpacity = interpolate(frame, [8, 28], [0, 1], clamp);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #368bd0 0%, #78b9e8 48%, #eaf5fb 100%)",
        overflow: "hidden",
      }}
    >
      {/* Same temple, in its blue-sky / sandstone flag-scene variant. */}
      <AbsoluteFill
        style={{
          transform: `translateY(${cameraY}px) scale(${zoom})`,
          transformOrigin: "50% 27%",
        }}
      >
        <AnimatedJagannathTemple variant="flag" />
      </AbsoluteFill>

      {/* Keep the sky bright; only add a subtle lower-edge shade for caption readability. */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(20,75,125,0.04) 0%, transparent 62%, rgba(15,48,75,0.22) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
