
import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

import { AnimatedJagannathTemple } from "./AnimatedJagannathTemple";

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

// ANIMATED VISITORS
const Person: React.FC<{
  x: number;
  y: number;
  delay: number;
  scale?: number;
}> = ({ x, y, delay, scale = 1 }) => {
  const frame = useCurrentFrame();

  const walk = Math.sin((frame + delay) * 0.16) * 5;
  const leg = Math.sin((frame + delay) * 0.2) * 13;

  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Head */}
      <circle cx="0" cy="-52" r="13" fill="#251A20" />

      {/* Neck */}
      <rect
        x="-5"
        y="-40"
        width="10"
        height="9"
        fill="#9C6245"
      />

      {/* Body */}
      <path
        d="M-15 -32 Q0 -39 15 -32 L18 20 L-18 20 Z"
        fill="#9A442D"
        stroke="#50271F"
        strokeWidth="2"
      />

      {/* Clothing */}
      <path
        d="M-14 -20 L14 -20"
        stroke="#F0B85B"
        strokeWidth="3"
      />

      {/* Arms */}
      <path
        d={`M-13 -27 L-25 ${-5 + walk}`}
        stroke="#9C6245"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d={`M13 -27 L25 ${-5 - walk}`}
        stroke="#9C6245"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Legs */}
      <path
        d={`M-8 20 L-11 ${48 + leg}`}
        stroke="#34232B"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d={`M8 20 L11 ${48 - leg}`}
        stroke="#34232B"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />

      {/* Feet */}
      <path
        d={`M-11 ${48 + leg} l-10 4 M11 ${48 - leg} l10 4`}
        stroke="#21151A"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </g>
  );
};

export const Scene3Nilachakra: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene fade in
  const sceneOpacity = interpolate(
    frame,
    [0, 25],
    [0, 1],
    clamp
  );

  // MODERATE NILACHAKRA ZOOM
  const cameraScale = interpolate(
    frame,
    [150, 300],
    [1, 3.2],
    clamp
  );

  // Keep Nilachakra near the centre of the screen
  const translateX = interpolate(
    frame,
    [150, 300],
    [0, 540 - 550 * 3.2],
    clamp
  );

  const translateY = interpolate(
    frame,
    [150, 300],
    [0, 960 - 505 * 3.2],
    clamp
  );

  // VISITORS DISAPPEAR WHEN ZOOM STARTS
  const peopleOpacity = interpolate(
    frame,
    [145, 190],
    [1, 0],
    clamp
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#69B4EC",
        overflow: "hidden",
        opacity: sceneOpacity,
      }}
    >
      {/* TEMPLE AND CAMERA ZOOM */}
      <AbsoluteFill
        style={{
          transform: `
            translate(${translateX}px, ${translateY}px)
            scale(${cameraScale})
          `,
          transformOrigin: "top left",
        }}
      >
        <AnimatedJagannathTemple
          variant="flag"
          showNilachakraEyes={true}
        />
      </AbsoluteFill>

      {/* VISITORS */}
      <svg
        viewBox="0 0 1080 1920"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: peopleOpacity,
          pointerEvents: "none",
        }}
      >
        {/* LEFT SIDE */}
        <Person x={75} y={1575} delay={0} scale={1.65} />
        <Person x={175} y={1595} delay={15} scale={1.45} />
        <Person x={285} y={1570} delay={30} scale={1.6} />
        <Person x={390} y={1610} delay={45} scale={1.35} />

        {/* RIGHT SIDE */}
        <Person x={690} y={1590} delay={10} scale={1.45} />
        <Person x={800} y={1570} delay={25} scale={1.65} />
        <Person x={910} y={1600} delay={40} scale={1.45} />
        <Person x={1010} y={1575} delay={55} scale={1.5} />

        {/* FOREGROUND */}
        <Person x={450} y={1660} delay={20} scale={1.7} />
        <Person x={560} y={1680} delay={35} scale={1.85} />
        <Person x={670} y={1660} delay={50} scale={1.6} />
      </svg>
    </AbsoluteFill>
  );
};
