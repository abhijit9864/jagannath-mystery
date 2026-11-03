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
 * Scene 2B — Sevak climbing to change the temple flag.
 * Full temple stays fixed in the frame. Only the sevak, clouds and flag animate.
 */
export const Scene2FlagClimber: React.FC = () => {
  const frame = useCurrentFrame();

  // Sevak climbs upward; no camera animation.
  const climbY = interpolate(frame, [0, 300], [1210, 610], clamp);
  const bodySwing = Math.sin(frame / 7) * 3;
  const legSwing = Math.sin(frame / 5) * 9;
  const armReach = Math.sin(frame / 6) * 7;

  const captionOpacity = interpolate(frame, [90, 115], [0, 1], clamp);
  const captionY = interpolate(frame, [90, 115], [35, 0], clamp);
  const scaleOpacity = interpolate(frame, [20, 45], [0, 1], clamp);

  // Slow evening cloud drift.
  const cloudA = (frame * 0.65) % 1450 - 220;
  const cloudB = (frame * 0.48 + 510) % 1450 - 220;
  const cloudC = (frame * 0.36 + 940) % 1450 - 220;

  return (
    <AbsoluteFill style={{ backgroundColor: "#21143f", overflow: "hidden" }}>
      {/* Full temple. Scale and vertical placement enlarge the temple artwork
          to use the frame better while keeping the flag/chakra visible. */}
      <AbsoluteFill
        style={{
          transform: "translateY(78px) scale(1.18)",
          transformOrigin: "50% 50%",
        }}
      >
        <AnimatedJagannathTemple variant="climber" />
      </AbsoluteFill>

      {/* Evening sky grade: violet -> blush -> red-pink -> orange.
          Soft-light keeps the sandstone temple readable. */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(33,20,63,0.68) 0%, rgba(89,64,110,0.48) 27%, rgba(189,120,146,0.42) 52%, rgba(230,95,101,0.38) 73%, rgba(245,154,69,0.48) 100%)",
          mixBlendMode: "soft-light",
          pointerEvents: "none",
        }}
      />

      {/* Sunset sun: a clean yellow-orange disc, no glow, blur or shadow. */}
      <div
        style={{
          position: "absolute",
          width: 210,
          height: 210,
          right: 85,
          top: 790,
          borderRadius: "50%",
          background: "#FFC94A",
          border: "5px solid #FFE27A",
          pointerEvents: "none",
        }}
      />

      {/* Clouds are layered over the sky, not over the temple. */}
      <svg
        viewBox="0 0 1080 1920"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <defs>
          <filter id="eveningCloudSoft">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <g fill="#f4c4d0" opacity=".34" filter="url(#eveningCloudSoft)">
          <path d={`M${cloudA} 590 q115 -58 225 0 q95 -40 185 12 q-95 54 -205 26 q-112 42 -205 -38 Z`} />
          <path d={`M${cloudB} 760 q125 -52 230 0 q95 -38 180 14 q-100 48 -210 22 q-112 40 -200 -36 Z`} />
          <path d={`M${cloudC} 970 q115 -48 220 0 q90 -34 175 12 q-92 45 -198 22 q-105 34 -197 -34 Z`} />
        </g>
        <g fill="none" stroke="#ffe0d8" strokeWidth="4" opacity=".22">
          <path d={`M${cloudA + 40} 620 q110 -24 205 0`} />
          <path d={`M${cloudB + 55} 790 q105 -22 200 0`} />
          <path d={`M${cloudC + 40} 1000 q100 -20 190 0`} />
        </g>
      </svg>

      {/* Climber and height scale use the SAME transform as the temple,
          so the sevak stays attached to the tower as the scene is framed. */}
      <AbsoluteFill
        style={{
          transform: "translateY(78px) scale(1.18)",
          transformOrigin: "50% 50%",
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 1080 1920"
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          <defs>
            <filter id="sevakShadow">
              <feGaussianBlur stdDeviation="4" />
            </filter>
            <linearGradient id="sevakCloth" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f4d4a1" />
              <stop offset="100%" stopColor="#a95c35" />
            </linearGradient>
          </defs>

          {/* Rope follows the climb path. */}
          <path
            d={`M550 365 Q500 510 455 ${climbY + 55}`}
            fill="none"
            stroke="#f0d7b3"
            strokeWidth="4"
            strokeDasharray="8 7"
            opacity=".9"
          />

          {/* Animated sevak */}
          <g transform={`translate(0 ${climbY})`}>
            <ellipse
              cx="445"
              cy="58"
              rx="37"
              ry="13"
              fill="#160d1b"
              opacity=".42"
              filter="url(#sevakShadow)"
            />
            <g transform={`rotate(${bodySwing} 445 45)`}>
              <circle cx="445" cy="0" r="13" fill="#9b6044" stroke="#321d20" strokeWidth="3" />
              <path d="M432 -8 Q445 -23 458 -8 L457 -2 L433 -2 Z" fill="#f0d5a7" />

              <path
                d="M433 14 Q445 7 457 14 L465 58 Q446 69 426 58 Z"
                fill="url(#sevakCloth)"
                stroke="#40242a"
                strokeWidth="4"
              />
              <path d="M433 25 L456 51 L449 61 L428 39 Z" fill="#8d3c36" opacity=".9" />

              <path
                d={`M433 24 Q414 ${12 + armReach} 405 ${-3 + armReach}`}
                fill="none"
                stroke="#9b6044"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M457 24 Q474 35 480 48"
                fill="none"
                stroke="#9b6044"
                strokeWidth="10"
                strokeLinecap="round"
              />

              <path
                d={`M435 57 Q421 75 ${420 + legSwing} 91`}
                fill="none"
                stroke="#34212a"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d={`M454 58 Q468 73 ${465 - legSwing} 87`}
                fill="none"
                stroke="#34212a"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path d="M414 92 L429 94" stroke="#e4c59b" strokeWidth="8" strokeLinecap="round" />
              <path d="M459 88 L475 91" stroke="#e4c59b" strokeWidth="8" strokeLinecap="round" />
            </g>
          </g>


        </svg>
      </AbsoluteFill>

      {/* Fixed screen-space height scale: outside the artwork transform so it cannot be cropped. */}
      {/* <svg
        viewBox="0 0 1080 1920"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <g opacity={scaleOpacity}>
          <path d="M72 1290 V505" stroke="#fff4df" strokeWidth="5" />
          <path d="M52 1290 H92 M52 505 H92" stroke="#fff4df" strokeWidth="6" />
          {Array.from({ length: 11 }).map((_, i) => {
            const y = 1290 - i * 78.5;
            return (
              <line
                key={i}
                x1="60"
                y1={y}
                x2={i % 2 === 0 ? 92 : 82}
                y2={y}
                stroke="#fff4df"
                strokeWidth="4"
              />
            );
          })}
          <rect
            x="102"
            y="748"
            width="150"
            height="68"
            rx="12"
            fill="rgba(42,20,38,0.88)"
            stroke={GOLD}
            strokeWidth="3"
          />
          <text
            x="177"
            y="792"
            textAnchor="middle"
            fill={WHITE}
            fontSize="29"
            fontWeight="800"
            fontFamily="Arial, sans-serif"
          >
            ≈200 ft
          </text>
        </g>
      </svg> */}

      {/* Caption stays outside the artwork transform and remains fixed in place. */}
      <div
        style={{
          position: "absolute",
          left: 42,
          right: 42,
          bottom: 92,
          padding: "25px 28px",
          borderRadius: 22,
          background: "rgba(15, 8, 22, 0.76)",
          border: "2px solid rgba(255, 212, 90, 0.78)",
          boxShadow: "0 12px 38px rgba(0,0,0,0.5), 0 0 22px rgba(255,190,55,0.2)",
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
          हर शाम एक सेवक...
          <span style={{ color: GOLD }}> बिना किसी आधुनिक सुरक्षा उपकरण के...</span>
          लगभग दो सौ फीट ऊँचे शिखर पर चढ़कर ध्वज बदलता है!
        </div>
      </div>
    </AbsoluteFill>
  );
};
