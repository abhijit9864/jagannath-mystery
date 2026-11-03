
import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

import Jagannath from "../Components/Jaganath";

export const Scene8BrahmaPadartha: React.FC = () => {
  const frame = useCurrentFrame();

  const intro = interpolate(
    frame,
    [0, 15, 86, 105],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const heartbeatText = interpolate(
    frame,
    [105, 122, 166, 184],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const reveal = interpolate(
    frame,
    [180, 205, 300],
    [0, 1, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const idolOpacity = interpolate(
    frame,
    [0, 20, 300],
    [0, 1, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const beatPhase = frame % 48;

  const beat = Math.max(
    0,
    1 -
      Math.min(
        Math.abs(beatPhase - 8),
        Math.abs(beatPhase - 19)
      ) / 7
  );

  const pulse = 1 + beat * 0.18;

  const heartOpacity = interpolate(
    frame,
    [90, 120, 165, 190],
    [0, 0.25, 1, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: "#090711",
        overflow: "hidden",
        fontFamily: "Noto Sans Devanagari, sans-serif",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1080 1920"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Background gradient */}
          <radialGradient id="bg">
            <stop offset="0%" stopColor="#614329" />
            <stop offset="50%" stopColor="#241820" />
            <stop offset="100%" stopColor="#080711" />
          </radialGradient>

          {/* Gold gradient */}
          <linearGradient
            id="gold"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#fff3a3" />
            <stop offset="35%" stopColor="#ffc52d" />
            <stop offset="75%" stopColor="#e98a12" />
            <stop offset="100%" stopColor="#9d4214" />
          </linearGradient>

          {/* Cloth gradient */}
          <linearGradient
            id="cloth"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#ffdc48" />
            <stop offset="100%" stopColor="#ed8508" />
          </linearGradient>

          {/* Blue divine core */}
          <radialGradient id="blueCore">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#e5faff" />
            <stop offset="55%" stopColor="#65caff" />
            <stop
              offset="100%"
              stopColor="#0875ff"
              stopOpacity="0"
            />
          </radialGradient>

          {/* Glow effects */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="28" />
          </filter>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="12" />
          </filter>

          {/* Shadow */}
          <filter id="shadow">
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="15"
            />
            <feOffset dy="16" />

            <feComponentTransfer>
              <feFuncA
                type="linear"
                slope=".5"
              />
            </feComponentTransfer>

            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* BACKGROUND */}
        <rect
          width="1080"
          height="1920"
          fill="url(#bg)"
        />

        {/* DIVINE AURA */}
        <circle
          cx="540"
          cy="900"
          r="460"
          fill="#e9a943"
          opacity=".12"
          filter="url(#softGlow)"
        />

        <circle
          cx="540"
          cy="900"
          r="390"
          fill="none"
          stroke="#e9bc5c"
          strokeWidth="5"
          opacity=".25"
        />

        {/* DIVINE RAYS */}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 24;

          return (
            <path
              key={`ray-${i}`}
              d={`
                M${540 + Math.cos(a) * 390}
                 ${900 + Math.sin(a) * 390}
                L${540 + Math.cos(a) * 455}
                 ${900 + Math.sin(a) * 455}
              `}
              stroke="#f8d77a"
              strokeWidth="11"
              opacity=".3"
            />
          );
        })}

        {/* JAGANNATH COMPONENT */}
        <g
          opacity={idolOpacity}
          filter="url(#shadow)"
        >
          <Jagannath
            x={0}
            y={0}
            scale={1}
            opacity={1}
          />
        </g>

        {/* BRAHMA PADARTHA - PULSING HEART */}
        <g
          transform={`translate(540 1340) scale(${pulse})`}
          opacity={heartOpacity}
        >
          {/* Blue outer aura */}
          <circle
            r="175"
            fill="url(#blueCore)"
            filter="url(#glow)"
          />

          {/* Inner divine light */}
          <circle
            r="90"
            fill="url(#blueCore)"
          />

          {/* Heart shape */}
          <path
            d="
              M0 68
              C-30 35 -85 -5 -72 -48
              C-60 -88 -15 -88 0 -52
              C15 -88 60 -88 72 -48
              C85 -5 30 35 0 68Z
            "
            fill="#f4fdff"
            stroke="#43c1ff"
            strokeWidth="9"
          />
        </g>

        {/* FLOATING DIVINE PARTICLES */}
        {Array.from({ length: 30 }).map((_, i) => (
          <circle
            key={`particle-${i}`}
            cx={(i * 137) % 1080}
            cy={
              350 +
              ((i * 173) % 1200) +
              Math.sin(frame / 15 + i) * 15
            }
            r={2 + (i % 3)}
            fill="#ffe4a1"
            opacity={
              0.2 +
              Math.abs(Math.sin(frame / 12 + i)) * 0.5
            }
          />
        ))}
      </svg>


    </AbsoluteFill>
  );
};
