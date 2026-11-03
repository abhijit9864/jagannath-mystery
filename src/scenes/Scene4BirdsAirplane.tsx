
import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  Easing,
} from "remotion";

import { AnimatedJagannathTemple } from "./AnimatedJagannathTemple";

// Individual flying bird
const Bird: React.FC<{
  x: number;
  y: number;
  scale?: number;
  frame: number;
  delay: number;
}> = ({ x, y, scale = 1, frame, delay }) => {
  const wing = Math.sin((frame + delay) * 0.45) * 13;

  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d={`M -30 0 Q -19 ${-19 - wing} 0 0 Q 19 ${-19 - wing} 30 0`}
        fill="none"
        stroke="#202020"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M -2 0 Q 0 5 3 8"
        fill="none"
        stroke="#202020"
        strokeWidth="3"
      />
    </g>
  );
};

// Red X symbol above the subject
const RedCross: React.FC<{
  x: number;
  y: number;
  opacity: number;
  size?: number;
}> = ({ x, y, opacity, size = 65 }) => (
  <g
    transform={`translate(${x} ${y})`}
    opacity={opacity}
    stroke="#e60000"
    strokeWidth="12"
    strokeLinecap="round"
    fill="none"
  >
    <path d={`M ${-size / 2} ${-size / 2} L ${size / 2} ${size / 2}`} />
    <path d={`M ${size / 2} ${-size / 2} L ${-size / 2} ${size / 2}`} />
  </g>
);

// Detailed passenger airplane, side view
const Airplane: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x} ${y}) scale(1.05)`}>
    {/* Main fuselage */}
    <path
      d="
        M -150 0
        Q -145 -12 -120 -13
        L 115 -13
        Q 155 -10 170 0
        Q 155 10 115 13
        L -120 13
        Q -145 12 -150 0
        Z
      "
      fill="#f8fafc"
      stroke="#263746"
      strokeWidth="2.5"
    />

    {/* Cockpit */}
    <path
      d="M 137 -7 L 157 -3 L 163 0 L 137 1 Z"
      fill="#263d52"
    />

    {/* Main wings */}
    <path
      d="
        M -25 -8
        L 25 -8
        L 88 -105
        L 105 -105
        L 72 -7
        L 88 8
        L 105 105
        L 88 105
        L 25 8
        L -25 8
        Z
      "
      fill="#dce5ed"
      stroke="#263746"
      strokeWidth="2.5"
    />

    {/* Tail wings */}
    <path
      d="M -115 -8 L -80 -8 L -105 -57 L -119 -57 L -119 -8 Z"
      fill="#dce5ed"
      stroke="#263746"
      strokeWidth="2.5"
    />

    <path
      d="M -115 8 L -80 8 L -105 57 L -119 57 L -119 8 Z"
      fill="#dce5ed"
      stroke="#263746"
      strokeWidth="2.5"
    />

    {/* Vertical tail fin */}
    <path
      d="M -118 -10 L -98 -10 L -116 -55 L -130 -55 Z"
      fill="#d71920"
      stroke="#263746"
      strokeWidth="2"
    />

    {/* Engines */}
    <g>
      <ellipse
        cx="35"
        cy="-43"
        rx="19"
        ry="9"
        fill="#9baab8"
        stroke="#263746"
        strokeWidth="2"
      />
      <ellipse
        cx="35"
        cy="43"
        rx="19"
        ry="9"
        fill="#9baab8"
        stroke="#263746"
        strokeWidth="2"
      />
      <ellipse cx="35" cy="-43" rx="11" ry="5" fill="#33495c" />
      <ellipse cx="35" cy="43" rx="11" ry="5" fill="#33495c" />
    </g>

    {/* Passenger windows */}
    {Array.from({ length: 12 }).map((_, i) => (
      <circle
        key={i}
        cx={-85 + i * 17}
        cy={-5}
        r="2.5"
        fill="#29445b"
      />
    ))}

    {/* Passenger door */}
    <path
      d="M -100 -10 L -100 10"
      stroke="#526779"
      strokeWidth="2"
    />

    {/* Red airline stripe */}
    <path
      d="M -130 5 L 130 5"
      stroke="#d71920"
      strokeWidth="2.5"
      opacity="0.9"
    />
  </g>
);

export const Scene4BirdsAirplane: React.FC = () => {
  const frame = useCurrentFrame();

  // Birds fly in and stop near the temple
  const flockX = interpolate(
    frame,
    [12, 65],
    [-120, 500],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }
  );

  const flockY = 460 + Math.sin(frame * 0.07) * 12;

  // Red cross appears above birds
  const birdCrossOpacity = interpolate(
    frame,
    [55, 65, 95, 105],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // Airplane flies in and stops
  const planeX = interpolate(
    frame,
    [115, 175],
    [-250, 550],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }
  );

  const planeY = 300 + Math.sin(frame * 0.035) * 7;

  // Red cross appears above airplane
  const planeCrossOpacity = interpolate(
    frame,
    [165, 175, 205, 215],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // First caption
  const firstCaptionOpacity = interpolate(
    frame,
    [0, 12, 105, 120],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // Final question
  const questionOpacity = interpolate(
    frame,
    [215, 230, 255, 270],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#8ecdf5" }}>
      {/* Same Jagannath Temple in daytime mode */}
      <AnimatedJagannathTemple variant="flag" />

      <svg
        viewBox="0 0 1080 1920"
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        {/* Four birds flying together */}
        {frame >= 12 && frame <= 110 && (
          <>
            <Bird
              x={flockX}
              y={flockY}
              frame={frame}
              delay={0}
              scale={1.1}
            />

            <Bird
              x={flockX - 65}
              y={flockY + 45}
              frame={frame}
              delay={8}
              scale={0.85}
            />

            <Bird
              x={flockX - 125}
              y={flockY - 35}
              frame={frame}
              delay={15}
              scale={0.95}
            />

            <Bird
              x={flockX - 185}
              y={flockY + 20}
              frame={frame}
              delay={22}
              scale={0.75}
            />
          </>
        )}

        {/* Cross above the birds */}
        {frame >= 55 && frame <= 105 && (
          <RedCross
            x={flockX - 75}
            y={flockY - 105}
            opacity={birdCrossOpacity}
            size={65}
          />
        )}

        {/* Airplane stays in frame after stopping */}
        {frame >= 115 && frame <= 220 && (
          <Airplane
            x={planeX}
            y={planeY}
          />
        )}

        {/* Cross above the airplane */}
        {frame >= 165 && frame <= 215 && (
          <RedCross
            x={planeX}
            y={planeY - 115}
            opacity={planeCrossOpacity}
            size={75}
          />
        )}
      </svg>

     
    </AbsoluteFill>
  );
};
