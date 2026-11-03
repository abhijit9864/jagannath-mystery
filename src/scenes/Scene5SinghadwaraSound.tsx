
import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  Easing,
} from "remotion";

// ==========================================
// ANIMATED OCEAN WAVES
// ==========================================

const Wave: React.FC<{
  frame: number;
  y: number;
  amplitude: number;
  speed: number;
  opacity: number;
}> = ({ frame, y, amplitude, speed, opacity }) => {
  const points = Array.from({ length: 28 }, (_, i) => {
    const x = i * 42;
    const waveY = y + Math.sin(i * 0.48 + frame * speed) * amplitude;
    return `${x},${waveY}`;
  }).join(" ");

  const lowerPoints = points
    .split(" ")
    .map((point) => {
      const [x, py] = point.split(",").map(Number);
      return `${x},${py + 17}`;
    })
    .join(" ");

  return (
    <g opacity={opacity}>
      <polyline
        points={points}
        fill="none"
        stroke="#a8edff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <polyline
        points={lowerPoints}
        fill="none"
        stroke="#d9f8ff"
        strokeWidth="2"
        opacity="0.55"
      />
    </g>
  );
};

// ==========================================
// PERSON / DEVOTEE
// ==========================================

const Devotee: React.FC<{
  x: number;
  y: number;
  frame: number;
  opacity: number;
}> = ({ x, y, frame, opacity }) => {
  const walk = Math.sin(frame * 0.48) * 10;

  return (
    <g transform={`translate(${x} ${y}) scale(2)`} opacity={opacity}>
      {/* Head */}
      <circle cx="0" cy="-88" r="17" fill="#b9784d" />

      {/* Hair */}
      <path
        d="M -16 -91 Q -14 -111 4 -107 Q 18 -103 17 -88"
        fill="#211b18"
      />

      {/* Neck */}
      <rect x="-6" y="-72" width="12" height="15" fill="#b9784d" />

      {/* Traditional clothing */}
      <path
        d="M -18 -62 Q 0 -72 18 -62 L 25 5 L -25 5 Z"
        fill="#eee1c8"
        stroke="#a58a67"
        strokeWidth="2"
      />

      {/* Red shoulder cloth */}
      <path
        d="M -15 -60 L 15 -43 L 6 -29 L -17 -49 Z"
        fill="#a82e2e"
      />

      {/* Arms */}
      <path
        d={`M -17 -53 L -28 ${-22 + walk * 0.3}`}
        stroke="#b9784d"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={`M 17 -53 L 28 ${-22 - walk * 0.3}`}
        stroke="#b9784d"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Legs */}
      <path
        d={`M -9 4 L ${-12 + walk * 0.45} 54`}
        stroke="#292b30"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d={`M 9 4 L ${12 - walk * 0.45} 54`}
        stroke="#292b30"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Feet */}
      <path
        d={`M ${-12 + walk * 0.45} 54 l -13 4`}
        stroke="#211b18"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d={`M ${12 - walk * 0.45} 54 l 13 4`}
        stroke="#211b18"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </g>
  );
};

// ==========================================
// STONE LION GUARDIAN
// ==========================================

const TempleLion: React.FC<{
  x: number;
  y: number;
  mirror?: boolean;
}> = ({ x, y, mirror = false }) => {
  return (
    <g
      transform={`translate(${x} ${y}) ${mirror ? "scale(-1 1)" : ""}`}
    >
      {/* Stone pedestal */}
      <path
        d="M -65 55 L 65 55 L 72 95 L -72 95 Z"
        fill="#a87543"
        stroke="#704626"
        strokeWidth="5"
      />
      <path
        d="M -72 65 L 72 65"
        stroke="#e5c18d"
        strokeWidth="5"
      />

      {/* Lion body */}
      <path
        d="M -42 35 Q -55 5 -35 -12 Q -15 -30 20 -18
           Q 50 -5 48 35 L 42 62 L -42 62 Z"
        fill="#c18a50"
        stroke="#704626"
        strokeWidth="5"
      />

      {/* Tail */}
      <path
        d="M 35 18 Q 75 0 62 -25 Q 55 -37 42 -27"
        fill="none"
        stroke="#9a6537"
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* Mane */}
      <path
        d="M -48 -30
           Q -65 -50 -48 -65
           Q -55 -88 -30 -91
           Q -20 -115 0 -105
           Q 22 -116 35 -94
           Q 62 -88 52 -65
           Q 70 -43 48 -25
           Q 60 0 35 12
           L -35 12
           Q -62 -2 -48 -30 Z"
        fill="#a96e3b"
        stroke="#704626"
        strokeWidth="6"
      />

      {/* Face */}
      <path
        d="M -35 -70 Q 0 -95 35 -70
           L 30 -25 Q 0 5 -30 -25 Z"
        fill="#e0b77d"
        stroke="#704626"
        strokeWidth="4"
      />

      {/* Ears */}
      <path
        d="M -35 -75 L -55 -96 L -48 -60 Z"
        fill="#c18a50"
        stroke="#704626"
        strokeWidth="4"
      />
      <path
        d="M 35 -75 L 55 -96 L 48 -60 Z"
        fill="#c18a50"
        stroke="#704626"
        strokeWidth="4"
      />

      {/* Eyes */}
      <ellipse cx="-14" cy="-58" rx="6" ry="8" fill="#2b1b12" />
      <ellipse cx="14" cy="-58" rx="6" ry="8" fill="#2b1b12" />

      {/* Eyebrows */}
      <path
        d="M -26 -70 Q -14 -79 -5 -69 M 5 -69 Q 17 -79 26 -70"
        fill="none"
        stroke="#704626"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Muzzle */}
      <ellipse
        cx="0"
        cy="-35"
        rx="20"
        ry="15"
        fill="#e8c99a"
        stroke="#704626"
        strokeWidth="3"
      />

      {/* Nose */}
      <path
        d="M -8 -43 Q 0 -50 8 -43 L 0 -34 Z"
        fill="#513322"
      />

      {/* Mouth */}
      <path
        d="M 0 -34 L 0 -22 M -14 -23 Q 0 -12 14 -23"
        fill="none"
        stroke="#513322"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Front paws */}
      <path
        d="M -38 25 L -42 58 L -12 58 L -12 35 Z"
        fill="#d4a36a"
        stroke="#704626"
        strokeWidth="4"
      />
      <path
        d="M 38 25 L 42 58 L 12 58 L 12 35 Z"
        fill="#d4a36a"
        stroke="#704626"
        strokeWidth="4"
      />

      {/* Paw details */}
      <path
        d="M -34 48 L -34 57 M -23 48 L -23 57
           M 23 48 L 23 57 M 34 48 L 34 57"
        stroke="#704626"
        strokeWidth="3"
      />

      {/* Mane texture */}
      <path
        d="M -45 -40 Q -32 -35 -38 -20
           M 45 -40 Q 32 -35 38 -20
           M -28 -92 Q -25 -78 -36 -70
           M 28 -92 Q 25 -78 36 -70"
        fill="none"
        stroke="#e0b77d"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  );
};

// ==========================================
// MAIN SCENE 5
// ==========================================

export const Scene5SinghadwaraSound: React.FC = () => {
  const frame = useCurrentFrame();

  // PERSON ENTERS THE TEMPLE
  const entryX = interpolate(frame, [15, 85], [80, 540], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const enterOpacity = interpolate(frame, [65, 105], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // PERSON COMES OUT
  const exitOpacity = interpolate(frame, [185, 220], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const exitX = interpolate(frame, [215, 285], [540, 990], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // OCEAN VISIBILITY
  const oceanOpacity = interpolate(
    frame,
    [0, 15, 85, 115, 185, 225, 250],
    [1, 1, 0.85, 0.08, 0.08, 0.85, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // CAPTIONS
  const firstCaption = interpolate(frame, [0, 12, 125, 140], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const secondCaption = interpolate(
    frame,
    [190, 205, 285, 300],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#55b9e9" }}>
      <svg
        viewBox="0 0 1080 1920"
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        <defs>
          <linearGradient id="scene5Sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#45afe5" />
            <stop offset="100%" stopColor="#b8eaff" />
          </linearGradient>

          <linearGradient id="scene5Ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0787b5" />
            <stop offset="50%" stopColor="#05658f" />
            <stop offset="100%" stopColor="#073f6a" />
          </linearGradient>

          <linearGradient id="scene5Stone" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f3d7a9" />
            <stop offset="45%" stopColor="#d0a16a" />
            <stop offset="100%" stopColor="#a87543" />
          </linearGradient>

          <linearGradient id="scene5Interior" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#102b3b" />
            <stop offset="100%" stopColor="#02090f" />
          </linearGradient>

          <linearGradient id="scene5Soil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#805a3d" />
            <stop offset="100%" stopColor="#35251b" />
          </linearGradient>
        </defs>

        {/* ==================================
            1. SKY
        ================================== */}

        <rect
          x="0"
          y="0"
          width="1080"
          height="1920"
          fill="url(#scene5Sky)"
        />

        {/* Sun */}
        <circle cx="880" cy="170" r="75" fill="#fff1b5" opacity="0.9" />
        <circle cx="880" cy="170" r="105" fill="#fff1b5" opacity="0.18" />

        {/* Clouds */}
        <g fill="#ffffff" opacity="0.42">
          <ellipse cx="170" cy="240" rx="105" ry="25" />
          <ellipse cx="225" cy="220" rx="65" ry="30" />
          <ellipse cx="285" cy="245" rx="80" ry="20" />

          <ellipse cx="700" cy="350" rx="100" ry="24" />
          <ellipse cx="760" cy="330" rx="65" ry="30" />
          <ellipse cx="820" cy="350" rx="75" ry="20" />
        </g>

        {/* ==================================
            2. OCEAN - BEHIND TEMPLE
        ================================== */}

        <rect
          x="0"
          y="650"
          width="1080"
          height="830"
          fill="url(#scene5Ocean)"
        />

        <path
          d="M 0 650 Q 270 625 540 650 T 1080 650"
          stroke="#d5f7ff"
          strokeWidth="5"
          fill="none"
          opacity="0.65"
        />

        {/* Animated ocean waves */}
        <g opacity={oceanOpacity}>
          <Wave frame={frame} y={720} amplitude={18} speed={0.07} opacity={0.9} />
          <Wave frame={frame} y={810} amplitude={22} speed={-0.055} opacity={0.8} />
          <Wave frame={frame} y={900} amplitude={17} speed={0.08} opacity={0.75} />
          <Wave frame={frame} y={990} amplitude={20} speed={-0.06} opacity={0.7} />
          <Wave frame={frame} y={1080} amplitude={15} speed={0.07} opacity={0.7} />
          <Wave frame={frame} y={1170} amplitude={18} speed={-0.05} opacity={0.65} />
          <Wave frame={frame} y={1260} amplitude={15} speed={0.08} opacity={0.6} />
          <Wave frame={frame} y={1370} amplitude={17} speed={-0.06} opacity={0.6} />
        </g>

        {/* ==================================
            3. SOIL - FOREGROUND
        ================================== */}

        <path
          d="
            M 0 1480
            Q 270 1450 540 1480
            T 1080 1480
            L 1080 1920
            L 0 1920
            Z
          "
          fill="url(#scene5Soil)"
        />

        <path
          d="M 0 1480 Q 270 1450 540 1480 T 1080 1480"
          stroke="#c19a6b"
          strokeWidth="8"
          fill="none"
        />

        {/* Soil texture */}
        <g fill="#c29b70" opacity="0.3">
          {Array.from({ length: 40 }).map((_, i) => (
            <circle
              key={i}
              cx={(i * 137) % 1080}
              cy={1530 + ((i * 53) % 340)}
              r={2 + (i % 4)}
            />
          ))}
        </g>

        {/* ==================================
            4. SINGHADWARA
            Reduced to 85% size
        ================================== */}

        <g transform="translate(540 900) scale(0.85) translate(-540 -900)">
          {/* Main solid temple facade */}
          <path
            d="
              M 175 1450
              L 175 760
              Q 175 570 330 500
              L 330 455
              Q 330 420 370 420
              L 710 420
              Q 750 420 750 455
              L 750 500
              Q 905 570 905 760
              L 905 1450
              Z
            "
            fill="url(#scene5Stone)"
            stroke="#76502f"
            strokeWidth="13"
          />

          {/* Sandstone connector - fills the gap below the top ornament */}
          <path
            d="
              M 435 365
              Q 540 398 645 365
              L 680 430
              Q 540 420 400 430
              Z
            "
            fill="url(#scene5Stone)"
            stroke="#76502f"
            strokeWidth="9"
          />

          {/* Connector decorative band */}
          <path
            d="M 415 407 Q 540 422 665 407"
            fill="none"
            stroke="#f3d7a9"
            strokeWidth="7"
          />

          {/* Top rounded ornament */}
          <ellipse
            cx="540"
            cy="340"
            rx="145"
            ry="48"
            fill="#d7b17e"
            stroke="#76502f"
            strokeWidth="12"
          />

          <ellipse
            cx="540"
            cy="270"
            rx="88"
            ry="48"
            fill="#d7b17e"
            stroke="#76502f"
            strokeWidth="12"
          />

          {/* First horizontal band */}
          <path
            d="M 135 460 L 945 460 L 945 525 L 135 525 Z"
            fill="#e2c08f"
            stroke="#76502f"
            strokeWidth="10"
          />

          {/* Second horizontal band */}
          <path
            d="M 105 555 L 975 555 L 975 620 L 105 620 Z"
            fill="#d7b17e"
            stroke="#76502f"
            strokeWidth="10"
          />

          {/* Third horizontal band */}
          <path
            d="M 85 650 L 995 650 L 995 715 L 85 715 Z"
            fill="#c99b66"
            stroke="#76502f"
            strokeWidth="10"
          />

          {/* Band highlights */}
          <path
            d="
              M 145 485 L 935 485
              M 115 580 L 965 580
              M 95 675 L 985 675
            "
            stroke="#fff0cf"
            strokeWidth="5"
            opacity="0.8"
          />

          {/* Side wall details */}
          <path
            d="M 205 790 L 205 1420"
            stroke="#96643b"
            strokeWidth="8"
            opacity="0.55"
          />

          <path
            d="M 875 790 L 875 1420"
            stroke="#96643b"
            strokeWidth="8"
            opacity="0.55"
          />

          {/* Decorative pillar lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <path
                d={`M 185 ${820 + i * 110} L 310 ${820 + i * 110}`}
                stroke="#a87543"
                strokeWidth="5"
                opacity="0.5"
              />
              <path
                d={`M 770 ${820 + i * 110} L 895 ${820 + i * 110}`}
                stroke="#a87543"
                strokeWidth="5"
                opacity="0.5"
              />
            </g>
          ))}

          {/* Entrance outer stone frame */}
          <path
            d="
              M 350 1450
              L 350 900
              Q 350 760 540 760
              Q 730 760 730 900
              L 730 1450
              Z
            "
            fill="#80532f"
            stroke="#704626"
            strokeWidth="12"
          />

          {/* Actual dark open doorway */}
          <path
            d="
              M 375 1450
              L 375 900
              Q 375 790 540 790
              Q 705 790 705 900
              L 705 1450
              Z
            "
            fill="url(#scene5Interior)"
          />

          {/* Inner doorway highlights */}
          <path
            d="
              M 395 1440
              L 395 900
              Q 395 815 540 815
              Q 685 815 685 900
              L 685 1440
            "
            fill="none"
            stroke="#b9854e"
            strokeWidth="7"
          />

          {/* Dark interior floor */}
          <path
            d="M 395 1390 L 685 1390 L 685 1440 L 395 1440 Z"
            fill="#030b12"
          />

          {/* Entrance threshold */}
          <path
            d="M 340 1450 L 740 1450"
            stroke="#f0d1a0"
            strokeWidth="13"
          />
        </g>

        {/* ==================================
            5. TWO LION GUARDIANS
            One on each side of entrance
        ================================== */}

        <TempleLion x={330} y={1360} />
        <TempleLion x={750} y={1360} mirror />

        {/* ==================================
            6. PERSON ENTERING
        ================================== */}

        {frame >= 15 && frame <= 110 && (
          <Devotee
            x={entryX}
            y={1390}
            frame={frame}
            opacity={enterOpacity}
          />
        )}

        {/* ==================================
            7. PERSON REAPPEARS AND EXITS
        ================================== */}

        {frame >= 185 && (
          <Devotee
            x={exitX}
            y={1390}
            frame={frame}
            opacity={exitOpacity}
          />
        )}
      </svg>

      {/* ==================================
          8. CINEMATIC CAPTIONS
      ================================== */}

    </AbsoluteFill>
  );
};
