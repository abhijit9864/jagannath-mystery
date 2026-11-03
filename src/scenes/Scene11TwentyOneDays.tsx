
import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  Easing,
} from "remotion";

import Jagannath from "../Components/Jaganath";
import Balabhadra from "../Components/Balabhdra";
import Subhadra from "../Components/Subhdra";

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

// --------------------------------------------------
// STONE WALL BACKGROUND
// --------------------------------------------------

const StoneWall: React.FC = () => (
  <>
    <rect width="1080" height="1920" fill="#30251e" />

    {/* Stone wall */}
    <rect
      x="0"
      y="0"
      width="1080"
      height="1600"
      fill="#74604b"
    />

    {/* Stone texture blocks */}
    {Array.from({ length: 10 }).map((_, row) =>
      Array.from({ length: 4 }).map((_, col) => {
        const x = col * 280 + (row % 2) * 40 - 80;
        const y = row * 165;

        return (
          <g key={`${row}-${col}`}>
            <rect
              x={x}
              y={y}
              width="270"
              height="158"
              fill={row % 2 === 0 ? "#806b54" : "#6b5745"}
              stroke="#49382b"
              strokeWidth="7"
            />

            <path
              d={`M${x + 25} ${y + 30}
                  L${x + 110} ${y + 20}
                  M${x + 140} ${y + 125}
                  L${x + 245} ${y + 115}`}
              stroke="#b29a78"
              strokeWidth="5"
              opacity=".2"
            />
          </g>
        );
      })
    )}

    {/* Lower floor */}
    <rect
      x="0"
      y="1550"
      width="1080"
      height="370"
      fill="#493629"
    />

    <path
      d="M0 1580 H1080"
      stroke="#b99b72"
      strokeWidth="10"
      opacity=".35"
    />

    {/* Floor lines */}
    {Array.from({ length: 7 }).map((_, i) => (
      <path
        key={i}
        d={`M${i * 180} 1580 L${i * 180 - 100} 1920`}
        stroke="#b99b72"
        strokeWidth="4"
        opacity=".16"
      />
    ))}

    {/* Wall side torches */}
    {[100, 980].map((x) => (
      <g key={x}>
        <path
          d={`M${x - 25} 720 L${x + 25} 720 L${x + 18} 820
              L${x - 18} 820Z`}
          fill="#4c2919"
          stroke="#25160e"
          strokeWidth="7"
        />

        <path
          d={`M${x} 710 Q${x - 45} 650 ${x} 595
              Q${x + 45} 650 ${x} 710Z`}
          fill="#ffb53d"
        />

        <path
          d={`M${x} 700 Q${x - 20} 660 ${x} 630
              Q${x + 20} 660 ${x} 700Z`}
          fill="#fff0a3"
        />

        <circle
          cx={x}
          cy="665"
          r="65"
          fill="#ffad3d"
          opacity=".16"
        />
      </g>
    ))}
  </>
);

// --------------------------------------------------
// SINGLE WOODEN DOOR
// --------------------------------------------------

const SingleDoor: React.FC<{
  open: number;
}> = ({ open }) => {
  const angle = -open * 105;

  return (
    <g>
      {/* Door frame */}
      <path
        d="
          M235 1430
          V490
          Q235 400 330 400
          H750
          Q845 400 845 490
          V1430
        "
        fill="#493020"
        stroke="#29180f"
        strokeWidth="28"
      />

      {/* Inner frame */}
      <path
        d="
          M275 1400
          V510
          Q275 450 340 450
          H740
          Q805 450 805 510
          V1400
        "
        fill="#24150e"
        stroke="#b48a55"
        strokeWidth="16"
      />

      {/* Darkness behind the door */}
      <rect
        x="295"
        y="475"
        width="490"
        height="925"
        fill="#080605"
      />

      {/* Interior glow */}
      <ellipse
        cx="540"
        cy="970"
        rx="220"
        ry="400"
        fill="#d78a3d"
        opacity=".09"
      />

      {/* Single door leaf */}
      <g transform={`rotate(${angle} 295 475)`}>
        <rect
          x="295"
          y="475"
          width="490"
          height="925"
          fill="#60331e"
          stroke="#28160e"
          strokeWidth="24"
        />

        <rect
          x="320"
          y="500"
          width="440"
          height="875"
          fill="#87502d"
          stroke="#c18b50"
          strokeWidth="12"
        />

        {/* Carved door panels */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              x={340 + i * 105}
              y="530"
              width="80"
              height="810"
              rx="10"
              fill="#754225"
              stroke="#4b2817"
              strokeWidth="8"
            />

            <rect
              x={350 + i * 105}
              y="545"
              width="60"
              height="780"
              rx="8"
              fill="none"
              stroke="#d2a46b"
              strokeWidth="5"
            />

            <path
              d={`M${380 + i * 105} 620
                  Q${340 + i * 105} 790 ${380 + i * 105} 930
                  Q${420 + i * 105} 790 ${380 + i * 105} 620`}
              fill="none"
              stroke="#d6a76c"
              strokeWidth="5"
              opacity=".65"
            />

            <circle
              cx={380 + i * 105}
              cy="1050"
              r="14"
              fill="#d9ac65"
            />
          </g>
        ))}

        {/* Golden door handle */}
        <circle
          cx="715"
          cy="950"
          r="27"
          fill="#e9bd65"
          stroke="#633719"
          strokeWidth="8"
        />

        <circle
          cx="715"
          cy="950"
          r="10"
          fill="#62351b"
        />

        {/* Visible left hinges */}
        {[650, 900, 1150].map((y) => (
          <g key={y}>
            <rect
              x="285"
              y={y}
              width="28"
              height="85"
              fill="#d6b16c"
              stroke="#4b2d18"
              strokeWidth="6"
            />
            <circle
              cx="299"
              cy={y + 42}
              r="10"
              fill="#fff0a1"
            />
          </g>
        ))}
      </g>

      {/* Stone threshold */}
      <path
        d="M220 1400 H860 L900 1470 H180Z"
        fill="#8d7255"
        stroke="#483324"
        strokeWidth="12"
      />
    </g>
  );
};

// --------------------------------------------------
// ELDERLY SCULPTOR
// --------------------------------------------------

const Sculptor: React.FC<{
  x: number;
  opacity: number;
  talking: number;
}> = ({ x, opacity, talking }) => {
  const mouthY = 1070 + Math.sin(talking * Math.PI * 8) * 5;

  return (
    <g
      opacity={opacity}
      transform={`translate(${x},0)`}
    >
      {/* Shadow */}
      <ellipse
        cx="230"
        cy="1570"
        rx="105"
        ry="26"
        fill="#090604"
        opacity=".45"
      />

      {/* Traditional dhoti */}
      <path
        d="M155 1190 Q225 1145 295 1190
           L325 1535 Q225 1580 125 1535Z"
        fill="#d6c29c"
        stroke="#5c4933"
        strokeWidth="12"
      />

      <path
        d="M165 1210 Q225 1280 285 1210
           L270 1515 Q225 1545 180 1515Z"
        fill="#ad8252"
      />

      {/* Shawl */}
      <path
        d="M155 1200 Q120 1300 150 1450
           L195 1470 L180 1230Z"
        fill="#81502e"
        stroke="#4a2c1b"
        strokeWidth="8"
      />

      {/* Neck */}
      <rect
        x="205"
        y="1070"
        width="42"
        height="100"
        rx="18"
        fill="#a66d49"
      />

      {/* Face */}
      <ellipse
        cx="226"
        cy="1005"
        rx="78"
        ry="105"
        fill="#b87c56"
        stroke="#70452d"
        strokeWidth="9"
      />

      {/* White hair */}
      <path
        d="M150 1000 Q130 900 220 890
           Q310 900 300 1000
           L285 950 Q250 975 225 940
           Q190 980 165 955Z"
        fill="#e5dfd1"
        stroke="#82796a"
        strokeWidth="8"
      />

      <circle
        cx="225"
        cy="895"
        r="28"
        fill="#e5dfd1"
        stroke="#82796a"
        strokeWidth="7"
      />

      {/* Eyes */}
      <path
        d="M180 990 Q195 980 207 990
           M245 990 Q260 980 273 990"
        stroke="#533827"
        strokeWidth="7"
        fill="none"
      />

      <ellipse cx="195" cy="1005" rx="7" ry="10" fill="#211a18" />
      <ellipse cx="257" cy="1005" rx="7" ry="10" fill="#211a18" />

      {/* Nose */}
      <path
        d="M225 1005 L215 1040 L232 1040"
        stroke="#75452e"
        strokeWidth="6"
        fill="none"
      />

      {/* White beard */}
      <path
        d="M170 1040 Q225 1070 280 1040
           Q275 1135 225 1160
           Q175 1135 170 1040Z"
        fill="#eee9dc"
        stroke="#9b927f"
        strokeWidth="7"
      />

      {/* Mouth */}
      <path
        d={`M205 ${mouthY} Q225 ${mouthY + 12} 245 ${mouthY}`}
        fill="none"
        stroke="#633d2c"
        strokeWidth="6"
      />

      {/* Wooden mallet */}
      <path
        d="M285 1240 Q330 1180 350 1120"
        stroke="#a66d49"
        strokeWidth="30"
        fill="none"
        strokeLinecap="round"
      />

      <path
        d="M350 1120 L375 1075"
        stroke="#a66d49"
        strokeWidth="24"
        strokeLinecap="round"
      />

      <path
        d="M340 1065 L405 1090"
        stroke="#80502d"
        strokeWidth="24"
        strokeLinecap="round"
      />

      {/* Other hand */}
      <path
        d="M160 1250 Q115 1320 125 1380"
        stroke="#a66d49"
        strokeWidth="28"
        fill="none"
        strokeLinecap="round"
      />

      {/* Waist cloth */}
      <path
        d="M140 1460 Q225 1495 310 1460
           L325 1535 Q225 1580 125 1535Z"
        fill="#ead9b6"
        stroke="#76502e"
        strokeWidth="8"
      />
    </g>
  );
};

// --------------------------------------------------
// KING
// --------------------------------------------------

const King: React.FC<{
  x: number;
  opacity: number;
  tension: number;
}> = ({ x, opacity, tension }) => {
  const movement = Math.sin(tension * 30) * tension * 5;

  return (
    <g
      opacity={opacity}
      transform={`translate(${x + movement},0)`}
    >
      <ellipse
        cx="875"
        cy="1570"
        rx="145"
        ry="35"
        fill="#080504"
        opacity=".45"
      />

      {/* Royal clothing */}
      <path
        d="M760 1190 Q875 1115 990 1190
           L1035 1535 Q875 1610 715 1535Z"
        fill="#831522"
        stroke="#3d0e14"
        strokeWidth="16"
      />

      <path
        d="M775 1210 Q875 1280 975 1210
           L955 1510 Q875 1565 795 1510Z"
        fill="#dba23d"
        stroke="#70401c"
        strokeWidth="10"
      />

      <path
        d="M875 1240 L820 1515 M875 1240 L930 1515"
        stroke="#fff0ad"
        strokeWidth="9"
      />

      {/* Neck */}
      <rect
        x="835"
        y="1060"
        width="80"
        height="115"
        rx="28"
        fill="#9b5d39"
      />

      {/* Face */}
      <ellipse
        cx="875"
        cy="1010"
        rx="105"
        ry="135"
        fill="#b9784e"
        stroke="#633a27"
        strokeWidth="10"
      />

      {/* Crown */}
      <path
        d="M760 940 L775 825 L815 865
           L840 760 L875 820 L910 760
           L935 865 L975 825 L990 940
           Q875 900 760 940Z"
        fill="#d99d24"
        stroke="#623719"
        strokeWidth="14"
      />

      <path
        d="M790 915 Q875 875 960 915"
        stroke="#fff0a0"
        strokeWidth="13"
        fill="none"
      />

      <circle
        cx="875"
        cy="855"
        r="22"
        fill="#b51f35"
        stroke="#fff0a0"
        strokeWidth="7"
      />

      {/* Eyes and eyebrows */}
      <path
        d="M820 1000 Q840 980 855 1000
           M895 1000 Q915 980 930 1000"
        stroke="#38231d"
        strokeWidth="10"
        fill="none"
      />

      <ellipse cx="840" cy="1020" rx="10" ry="14" fill="#211a18" />
      <ellipse cx="910" cy="1020" rx="10" ry="14" fill="#211a18" />

      <path
        d="M875 965 V1005"
        stroke="#b51f35"
        strokeWidth="9"
      />

      {/* Moustache */}
      <path
        d="M875 1080 Q840 1050 825 1085
           Q850 1120 875 1095
           Q900 1120 925 1085
           Q910 1050 875 1080Z"
        fill="#30201b"
      />

      {/* Royal jewellery */}
      <path
        d="M790 1185 Q875 1300 960 1185"
        stroke="#f4d36e"
        strokeWidth="18"
        fill="none"
      />

      <circle
        cx="875"
        cy="1260"
        r="24"
        fill="#b51f35"
        stroke="#f5d16b"
        strokeWidth="8"
      />

      {/* Arm reaching toward door */}
      <path
        d="M790 1240 Q710 1170 660 1100"
        stroke="#b9784e"
        strokeWidth="48"
        fill="none"
        strokeLinecap="round"
      />

      <path
        d="M660 1100 L625 1070"
        stroke="#b9784e"
        strokeWidth="38"
        strokeLinecap="round"
      />
    </g>
  );
};

// --------------------------------------------------
// SMOKE EFFECT
// --------------------------------------------------

const Smoke: React.FC<{
  opacity: number;
  frame: number;
}> = ({ opacity, frame }) => (
  <g opacity={opacity}>
    {Array.from({ length: 15 }).map((_, i) => {
      const x = 340 + (i % 5) * 100;
      const rise = (frame * (0.7 + (i % 3) * 0.25)) % 330;
      const drift = Math.sin(frame / 13 + i) * 35;
      const y = 1270 - rise;

      return (
        <g key={i}>
          <ellipse
            cx={x + drift}
            cy={y}
            rx={35 + (i % 3) * 14}
            ry={45 + (i % 4) * 12}
            fill="#e8dfd0"
            opacity={0.09 + (i % 3) * 0.025}
          />
        </g>
      );
    })}

    <ellipse
      cx="540"
      cy="1080"
      rx="260"
      ry="300"
      fill="#f2d7ad"
      opacity=".10"
    />
  </g>
);

// --------------------------------------------------
// MAIN SCENE
// --------------------------------------------------

const Scene11TwentyOneDays: React.FC = () => {
  const frame = useCurrentFrame();

  // Sculptor appears and speaks
  const sculptorOpacity = interpolate(
    frame,
    [0, 12, 65, 85],
    [0, 1, 1, 0],
    clamp
  );

  const sculptorTalk = interpolate(
    frame,
    [10, 60],
    [0, 1],
    clamp
  );

  // Sculptor enters through the door
  const sculptorX = interpolate(
    frame,
    [65, 110],
    [0, 300],
    {
      ...clamp,
      easing: Easing.inOut(Easing.cubic),
    }
  );

  // Door closes behind sculptor
  const doorClose = interpolate(
    frame,
    [100, 130],
    [0, 1],
    {
      ...clamp,
      easing: Easing.inOut(Easing.cubic),
    }
  );

  // King enters from the right
  const kingX = interpolate(
    frame,
    [125, 170],
    [400, 0],
    {
      ...clamp,
      easing: Easing.out(Easing.cubic),
    }
  );

  const kingOpacity = interpolate(
    frame,
    [125, 140],
    [0, 1],
    clamp
  );

  // King becomes anxious
  const tension = interpolate(
    frame,
    [170, 205, 250],
    [0, 0.5, 1],
    clamp
  );

  // King opens door
  const doorOpen = interpolate(
    frame,
    [255, 295, 330],
    [0, 0.1, 1],
    {
      ...clamp,
      easing: Easing.out(Easing.cubic),
    }
  );

  // Camera zooms toward the entrance
  const cameraZoom = interpolate(
    frame,
    [315, 365, 450],
    [1, 1.25, 1.35],
    {
      ...clamp,
      easing: Easing.inOut(Easing.cubic),
    }
  );

  // Smoke appears after zoom
  const smokeOpacity = interpolate(
    frame,
    [345, 370, 410],
    [0, 0.8, 0.4],
    clamp
  );

  // Gods appear gradually through smoke
  const godOpacity = interpolate(
    frame,
    [380, 425, 450],
    [0, 1, 1],
    clamp
  );

  const divineGlow = interpolate(
    frame,
    [375, 420],
    [0, 1],
    clamp
  );

  // Captions
  const caption1 = interpolate(frame, [5, 15, 65, 80], [0, 1, 1, 0], clamp);
  const caption2 = interpolate(frame, [90, 105, 135, 150], [0, 1, 1, 0], clamp);
  const caption3 = interpolate(frame, [175, 190, 250, 265], [0, 1, 1, 0], clamp);
  const caption4 = interpolate(frame, [265, 280, 315, 330], [0, 1, 1, 0], clamp);
  const caption5 = interpolate(frame, [410, 430, 450], [0, 1, 1], clamp);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#21150e",
        overflow: "hidden",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1080 1920"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="divineLight11">
            <stop offset="0%" stopColor="#fffbe2" stopOpacity="1" />
            <stop offset="30%" stopColor="#ffda83" stopOpacity=".8" />
            <stop offset="70%" stopColor="#e69a43" stopOpacity=".25" />
            <stop offset="100%" stopColor="#e69a43" stopOpacity="0" />
          </radialGradient>

          <filter id="smokeBlur11">
            <feGaussianBlur stdDeviation="18" />
          </filter>

          <filter id="divineBlur11">
            <feGaussianBlur stdDeviation="35" />
          </filter>
        </defs>

        {/* CAMERA ZOOM GROUP */}
        <g
          transform={`
            translate(540 950)
            scale(${cameraZoom})
            translate(-540 -950)
          `}
        >
          <StoneWall />

          {/* Door */}
          <SingleDoor open={doorOpen} />

          {/* Sculptor enters and disappears */}
          <Sculptor
            x={sculptorX}
            opacity={sculptorOpacity}
            talking={sculptorTalk}
          />

          {/* King arrives after sculptor disappears */}
          <King
            x={kingX}
            opacity={kingOpacity}
            tension={tension}
          />

          {/* Divine golden glow */}
          <ellipse
            cx="540"
            cy="930"
            rx="300"
            ry="440"
            fill="url(#divineLight11)"
            opacity={divineGlow}
            filter="url(#divineBlur11)"
          />

          {/* Smoke effect */}
          <g filter="url(#smokeBlur11)">
            <Smoke
              opacity={smokeOpacity}
              frame={frame}
            />
          </g>

          {/* THREE DEITIES - centered inside doorway */}
          <g
            transform="translate(260 500) scale(0.27)"
            opacity={godOpacity}
          >
            <Balabhadra
              x={0}
              y={0}
              scale={1}
              opacity={1}
            />

            <Subhadra
              x={610}
              y={0}
              scale={1}
              opacity={1}
            />

            <Jagannath
              x={1220}
              y={0}
              scale={1}
              opacity={1}
            />
          </g>

          {/* Divine rays */}
          <g
            opacity={divineGlow * 0.65}
            stroke="#ffe5a0"
            strokeWidth="9"
          >
            {Array.from({ length: 20 }).map((_, i) => {
              const angle = (i * Math.PI * 2) / 20;

              return (
                <path
                  key={i}
                  d={`
                    M540 930
                    L${540 + Math.cos(angle) * 420}
                     ${930 + Math.sin(angle) * 520}
                  `}
                  opacity=".35"
                />
              );
            })}
          </g>

          {/* Divine floating particles */}
          {Array.from({ length: 35 }).map((_, i) => (
            <circle
              key={`light-${i}`}
              cx={(i * 137 + 100) % 1080}
              cy={
                550 +
                ((i * 173 + frame * 1.5) % 900)
              }
              r={2 + (i % 4)}
              fill="#fff0b9"
              opacity={
                godOpacity *
                (0.2 + Math.abs(Math.sin(frame / 12 + i)) * 0.6)
              }
            />
          ))}
        </g>

        {/* Dark cinematic vignette */}
        <rect
          width="1080"
          height="1920"
          fill="url(#divineLight11)"
          opacity="0"
        />
      </svg>

      {/* Cinematic dark edges */}
      <AbsoluteFill
        style={{
          boxShadow: "inset 0 0 150px rgba(0,0,0,.65)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

export default Scene11TwentyOneDays;
