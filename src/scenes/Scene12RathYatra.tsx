
import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

import Jagannath from "../Components/Jaganath";
import Balabhadra from "../Components/Balabhdra";
import Subhadra from "../Components/Subhdra";

// ---------------- CROWD ----------------

const Crowd: React.FC = () => {
  const frame = useCurrentFrame();

  const people = Array.from({ length: 110 }, (_, i) => ({
    x: (i * 97) % 1080,
    y: 1130 + ((i * 37) % 480),
    color: [
      "#c62828",
      "#f9a825",
      "#1565c0",
      "#2e7d32",
      "#6a1b9a",
      "#ef6c00",
      "#e91e63",
    ][i % 7],
    scale: 0.9 + ((i * 7) % 5) * 0.12,
  }));

  return (
    <g>
      {people.map((p, i) => (
        <g
          key={i}
          transform={`translate(${p.x} ${
            p.y + Math.sin(frame * 0.1 + i) * 3
          }) scale(${p.scale})`}
        >
          {/* Head */}
          <circle cx="0" cy="-25" r="11" fill="#b9784d" />

          {/* Body */}
          <path
            d="M-13 -10 Q0 -23 13 -10 L17 24 L-17 24 Z"
            fill={p.color}
          />

          {/* Arms */}
          <path
            d="M-10 -8 L-23 -34 M10 -8 L23 -34"
            stroke="#b9784d"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Hands */}
          <path
            d="M-23 -34 L-29 -45 M23 -34 L29 -45"
            stroke="#b9784d"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>
      ))}
    </g>
  );
};

// ---------------- RATH ----------------

type RathProps = {
  x: number;
  y: number;
  color: string;
  secondary: string;
  deity: React.ReactNode;
  movement: number;
};

const Rath: React.FC<RathProps> = ({
  x,
  y,
  color,
  secondary,
  deity,
  movement,
}) => {
  const wheelRotation = movement * 65;

  return (
    <g
      transform={`translate(${x + movement * 20} ${y}) scale(1.15)`}
    >
      {/* Top flag */}
      <path
        d="M0 0 L0 -160"
        stroke="#70401e"
        strokeWidth="5"
      />

      <path
        d="M0 -160 L65 -138 L0 -115 Z"
        fill={secondary}
      />

      {/* Traditional pyramid canopy */}
      <path
        d="
          M-140 125
          L-125 25
          L-80 -45
          L-40 -105
          L0 -150
          L40 -105
          L80 -45
          L125 25
          L140 125 Z
        "
        fill={color}
        stroke="#f5ce72"
        strokeWidth="9"
      />

      {/* Fabric panels */}
      <path
        d="M0 -150 L-40 -105 L-80 -45 L-125 25 L-140 125 L0 125 Z"
        fill={color}
      />

      <path
        d="M0 -150 L40 -105 L80 -45 L125 25 L140 125 L0 125 Z"
        fill={secondary}
        opacity="0.28"
      />

      {/* Golden canopy borders */}
      <path
        d="M-125 25 Q0 75 125 25"
        fill="none"
        stroke="#ffe5a0"
        strokeWidth="9"
      />

      <path
        d="M-140 125 Q0 175 140 125"
        fill="none"
        stroke="#ffe5a0"
        strokeWidth="9"
      />

      {/* Canopy ornaments */}
      {Array.from({ length: 13 }, (_, i) => (
        <circle
          key={i}
          cx={-120 + i * 20}
          cy={135}
          r="5"
          fill="#ffdf82"
        />
      ))}

      {/* Wooden chariot body */}
      <path
        d="M-125 145 L125 145 L110 370 L-110 370 Z"
        fill="#8a431e"
        stroke="#e9b75a"
        strokeWidth="9"
      />

      {/* Front cloth panel */}
      <path
        d="M-105 145 L105 145 L110 420 L-110 420 Z"
        fill={color}
        stroke={secondary}
        strokeWidth="7"
      />

      {/* Decorative arches */}
      <path
        d="M-90 205 Q0 125 90 205"
        fill="none"
        stroke="#ffe5a0"
        strokeWidth="8"
      />

      <path
        d="M-75 225 Q0 165 75 225"
        fill="none"
        stroke="#f7cf69"
        strokeWidth="5"
      />

      {/* Divine halo */}
      <circle
        cx="0"
        cy="285"
        r="115"
        fill="#ffd45c"
        opacity="0.32"
      />

      <circle
        cx="0"
        cy="285"
        r="100"
        fill="none"
        stroke="#ffe5a0"
        strokeWidth="6"
      />

      {/* FULL DEITY ARTWORK */}
      <g transform="translate(-124 55) scale(0.23)">
        {deity}
      </g>

      {/* Decorative front patterns */}
      {Array.from({ length: 5 }, (_, i) => (
        <g key={i} transform={`translate(${-64 + i * 32} 395)`}>
          <circle r="9" fill="#ffd76a" />
          <circle r="4" fill="#8d241b" />
        </g>
      ))}

      {/* Lower wooden platform */}
      <path
        d="M-145 420 L145 420 L130 475 L-130 475 Z"
        fill="#713719"
        stroke="#e9b75a"
        strokeWidth="9"
      />

      <path
        d="M-125 440 L125 440"
        stroke="#ffe5a0"
        strokeWidth="6"
      />

      {/* Hanging bells */}
      {[-105, -55, 0, 55, 105].map((bellX, i) => (
        <g key={i}>
          <path
            d={`M${bellX} 475 L${bellX} 490`}
            stroke="#f5d27a"
            strokeWidth="4"
          />

          <circle
            cx={bellX}
            cy="497"
            r="7"
            fill="#ffd45e"
          />
        </g>
      ))}

      {/* Large traditional wheels */}
      {[-85, 85].map((wheelX, i) => (
        <g
          key={i}
          transform={`translate(${wheelX} 535) rotate(${wheelRotation})`}
        >
          <circle
            r="55"
            fill="#713719"
            stroke="#e5a944"
            strokeWidth="10"
          />

          <circle
            r="42"
            fill="none"
            stroke="#f5ce73"
            strokeWidth="5"
          />

          {Array.from({ length: 12 }, (_, j) => (
            <path
              key={j}
              d="M0 -8 L0 -44"
              stroke="#f0c66a"
              strokeWidth="7"
              transform={`rotate(${j * 30})`}
            />
          ))}

          <circle r="13" fill="#e8b64e" />
        </g>
      ))}

      {/* Wheel axle */}
      <rect
        x="-130"
        y="525"
        width="260"
        height="18"
        rx="5"
        fill="#542713"
      />

      {/* Pulling ropes */}
      <path
        d="M-120 390 Q-180 420 -260 500"
        stroke="#d6b16d"
        strokeWidth="12"
        fill="none"
      />

      <path
        d="M120 390 Q180 420 260 500"
        stroke="#d6b16d"
        strokeWidth="12"
        fill="none"
      />
    </g>
  );
};

// ---------------- MAIN SCENE ----------------

const Scene12RathYatra: React.FC = () => {
  const frame = useCurrentFrame();

  const movement = interpolate(frame, [0, 450], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(
    frame,
    [0, 35, 90],
    [0, 1, 0],
    { extrapolateRight: "clamp" }
  );

  const sunlight = 0.3 + Math.sin(frame * 0.08) * 0.08;

  return (
    <AbsoluteFill>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1080 1920"
        style={{ background: "#43b8ed" }}
      >
        <defs>
          {/* Beautiful blue sky */}
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0878c9" />
            <stop offset="45%" stopColor="#43b8ed" />
            <stop offset="100%" stopColor="#f9d59a" />
          </linearGradient>

          {/* Road */}
          <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b77a43" />
            <stop offset="100%" stopColor="#613b28" />
          </linearGradient>

          {/* Sun glow */}
          <radialGradient id="sunGlow">
            <stop offset="0%" stopColor="#fffde0" stopOpacity="1" />
            <stop offset="45%" stopColor="#ffe7a0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#fffbd0" stopOpacity="0" />
          </radialGradient>

          {/* Clouds */}
          <linearGradient id="cloud" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d9eaf5" />
          </linearGradient>
        </defs>

        {/* SKY */}
        <rect
          width="1080"
          height="1920"
          fill="url(#sky)"
        />

        {/* SUN */}
        <circle
          cx="850"
          cy="230"
          r="120"
          fill="url(#sunGlow)"
        />

        <circle
          cx="850"
          cy="230"
          r="55"
          fill="#fff5c4"
          opacity="0.85"
        />

        {/* CLOUDS */}
        {[
          { x: 100, y: 280, s: 1.1 },
          { x: 700, y: 430, s: 0.9 },
          { x: 350, y: 170, s: 0.7 },
          { x: 970, y: 600, s: 1.1 },
        ].map((c, i) => (
          <g
            key={i}
            transform={`translate(${c.x} ${c.y}) scale(${c.s})`}
            fill="url(#cloud)"
            opacity="0.85"
          >
            <ellipse cx="0" cy="25" rx="75" ry="28" />
            <circle cx="-35" cy="5" r="35" />
            <circle cx="5" cy="-12" r="45" />
            <circle cx="45" cy="8" r="32" />
          </g>
        ))}

        {/* SUNLIGHT */}
        <circle
          cx="540"
          cy="370"
          r="300"
          fill="url(#sunGlow)"
          opacity={sunlight}
        />

        {/* TEMPLE BACKGROUND */}
        <g fill="#914b2b" opacity="0.55">
          <path d="M0 780 L0 530 L90 530 L90 470 L145 530 L145 780 Z" />

          <path d="M930 780 L930 530 L985 530 L985 470 L1040 530 L1040 780 Z" />

          <path d="M400 600 L400 420 L470 420 L540 270 L610 420 L680 420 L680 600 Z" />
        </g>

        {/* FESTIVAL FLAGS */}
        {Array.from({ length: 11 }, (_, i) => (
          <g key={i} transform={`translate(${i * 110 - 10} 230)`}>
            <path
              d="M0 0 L0 160"
              stroke="#8a4d27"
              strokeWidth="4"
            />

            <path
              d="M0 0 L55 18 L0 42 Z"
              fill={["#d32f2f", "#f9a825", "#1565c0"][i % 3]}
            />
          </g>
        ))}

        {/* ROAD */}
        <path
          d="M0 970 Q540 900 1080 970 L1080 1920 L0 1920 Z"
          fill="url(#road)"
        />

        {/* ROAD DECORATION */}
        <path
          d="M0 1080 Q540 1010 1080 1080"
          stroke="#f4c17c"
          strokeWidth="7"
          opacity="0.45"
          fill="none"
        />

        {/* FESTIVAL BUNTING */}
        {Array.from({ length: 18 }, (_, i) => (
          <path
            key={i}
            d={`M${i * 65} 760 l32 0 l-16 45 Z`}
            fill={["#e53935", "#ffca28", "#1976d2", "#43a047"][i % 4]}
          />
        ))}

        {/* DISTANT CROWD */}
        <g opacity="0.8">
          {Array.from({ length: 55 }, (_, i) => (
            <g key={i} transform={`translate(${i * 21 - 10} 1050)`}>
              <circle r="10" fill="#9d563a" />

              <path
                d="M-12 10 L12 10 L17 70 L-17 70 Z"
                fill={["#b62d26", "#e6a21c", "#1c5b94"][i % 3]}
              />
            </g>
          ))}
        </g>

        {/* BALABHADRA - TALADHWAJA */}
        <Rath
          x={180}
          y={440}
          color="#16834a"
          secondary="#c62828"
          movement={movement}
          deity={<Balabhadra x={0} y={0} scale={1} />}
        />

        {/* SUBHADRA - DARPADALANA */}
        <Rath
          x={540}
          y={410}
          color="#292929"
          secondary="#e52b2b"
          movement={movement}
          deity={<Subhadra x={0} y={0} scale={1} />}
        />

        {/* JAGANNATH - NANDIGHOSHA */}
        <Rath
          x={900}
          y={440}
          color="#e5b526"
          secondary="#c62828"
          movement={movement}
          deity={<Jagannath x={0} y={0} scale={1} />}
        />

        {/* DEVOTEES */}
        <Crowd />

        {/* FLOWER PETALS */}
        {Array.from({ length: 45 }, (_, i) => {
          const px = (i * 97 + frame * (1 + (i % 3))) % 1080;
          const py = (i * 83 + frame * 2) % 1700;

          return (
            <ellipse
              key={i}
              cx={px}
              cy={py}
              rx="5"
              ry="10"
              fill={["#fff1c4", "#ffdf72", "#e84c39"][i % 3]}
              opacity="0.8"
              transform={`rotate(${frame * 3 + i * 15} ${px} ${py})`}
            />
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};

export default Scene12RathYatra;
