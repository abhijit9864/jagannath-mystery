import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

type AnimatedJagannathTempleProps = {
  variant?: "intro" | "flag" | "climber";
};

export const AnimatedJagannathTemple: React.FC<AnimatedJagannathTempleProps> = ({
  variant = "intro",
}) => {
  const frame = useCurrentFrame();
  const isFlagScene = variant === "flag";
  const isClimberScene = variant === "climber";
  const isFlagRelatedScene = isFlagScene || isClimberScene;
  const isWarmStoneScene = isFlagRelatedScene;

  // Keep the temple completely stationary in the flag-climber scene.
  // The intro scene retains its gentle cinematic zoom.
  const zoom = isFlagRelatedScene
    ? 1
    : interpolate(frame, [0, 300], [0.96, 1.045], {
        extrapolateRight: "clamp",
      });
  const flagWave = Math.sin(frame / 5) * 8;
  const cloudMove = (frame * 0.55) % 650;
  const glow = 0.62 + Math.sin(frame / 18) * 0.1;

  const skyId = isClimberScene
    ? "flagSunsetSky"
    : isFlagScene
      ? "daySky"
      : "eveningSky";
  const stoneId = isWarmStoneScene ? "skinStone" : "stoneFace";
  const domeId = isWarmStoneScene ? "skinDome" : "domeStone";

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        background: isFlagScene ? "#78b9e8" : isClimberScene ? "#21143F" : "#211936",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1080 1920"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="eveningSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#211632" />
            <stop offset="48%" stopColor="#59456e" />
            <stop offset="78%" stopColor="#b77b69" />
            <stop offset="100%" stopColor="#edb77f" />
          </linearGradient>

          <linearGradient id="daySky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2878C8" />
            <stop offset="48%" stopColor="#69B4EC" />
            <stop offset="100%" stopColor="#D4ECFF" />
          </linearGradient>

          <linearGradient id="flagSunsetSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#21143F" />
            <stop offset="28%" stopColor="#59406E" />
            <stop offset="52%" stopColor="#BD7892" />
            <stop offset="73%" stopColor="#E65F65" />
            <stop offset="100%" stopColor="#F59A45" />
          </linearGradient>

          <linearGradient id="stoneFace" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#45434b" />
            <stop offset="42%" stopColor="#aaa7a5" />
            <stop offset="68%" stopColor="#85828a" />
            <stop offset="100%" stopColor="#373640" />
          </linearGradient>

          <linearGradient id="skinStone" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#80523b" />
            <stop offset="28%" stopColor="#c58b68" />
            <stop offset="52%" stopColor="#edc09b" />
            <stop offset="76%" stopColor="#bd805c" />
            <stop offset="100%" stopColor="#704632" />
          </linearGradient>

          <linearGradient id="domeStone" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4a4850" />
            <stop offset="52%" stopColor="#b8b2ad" />
            <stop offset="100%" stopColor="#494650" />
          </linearGradient>

          <linearGradient id="skinDome" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#89583e" />
            <stop offset="50%" stopColor="#e8b58e" />
            <stop offset="100%" stopColor="#805039" />
          </linearGradient>

          <linearGradient id="flagRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff6457" />
            <stop offset="100%" stopColor="#a90027" />
          </linearGradient>

          <radialGradient id="sunsetGlow">
            <stop offset="0%" stopColor="#ffd69a" stopOpacity=".9" />
            <stop offset="100%" stopColor="#e99c82" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="dayGlow">
            <stop offset="0%" stopColor="#ffffff" stopOpacity=".85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <filter id="templeShadow" x="-30%" y="-30%" width="170%" height="190%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="15" />
            <feOffset dx="10" dy="22" />
            <feComponentTransfer>
              <feFuncA type="linear" slope=".65" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="cloudBlur">
            <feGaussianBlur stdDeviation="25" />
          </filter>

          <pattern id="stoneTexture" width="46" height="34" patternUnits="userSpaceOnUse">
            <path
              d="M2 8 H18 M25 25 H43 M12 31 L17 27"
              stroke={isWarmStoneScene ? "#704632" : "#292832"}
              strokeWidth="2"
              opacity=".42"
            />
            <circle cx="32" cy="8" r="1.8" fill={isWarmStoneScene ? "#fff0df" : "#e0d9d3"} opacity=".45" />
            <circle cx="8" cy="24" r="1.4" fill="#24232b" opacity=".5" />
          </pattern>
        </defs>

        {/* Background changes by scene: violet-gold evening for intro, blue daylight for flag mystery. */}
        <rect width="1080" height="1920" fill={`url(#${skyId})`} />

        {isClimberScene ? (
          <path
            d="M0 620 Q180 540 350 620 T700 600 T1080 610"
            fill="none"
            stroke="#F6C0C5"
            strokeWidth="90"
            opacity=".18"
            filter="url(#cloudBlur)"
          />
        ) : !isFlagScene ? (
          <circle cx="530" cy="850" r="470" fill="url(#sunsetGlow)" opacity={glow} />
        ) : null}

        {/* Clouds travel opposite the flag in the flag-mystery version. */}
        {[0, 1, 2, 3, 4].map((i) => {
          const x = isFlagRelatedScene
            ? 1250 - ((cloudMove + i * 330) % 1650)
            : ((cloudMove + i * 330) % 1500) - 250;
          return (
            <g
              key={i}
              opacity={isFlagRelatedScene ? 0.34 : 0.24}
              transform={`translate(${x}, ${390 + i * 150})`}
            >
              <ellipse
                cx="0"
                cy="0"
                rx="220"
                ry="65"
                fill={isClimberScene ? "#F4B7C1" : isFlagScene ? "#ffffff" : "#29233d"}
                filter="url(#cloudBlur)"
              />
              <ellipse
                cx="130"
                cy="-25"
                rx="165"
                ry="55"
                fill={isClimberScene ? "#F8D0C8" : isFlagScene ? "#e8f6ff" : "#40334e"}
                filter="url(#cloudBlur)"
              />
            </g>
          );
        })}

        {/* Wind streaks move left, while the flag cloth waves to the right. */}
        {isFlagRelatedScene &&
          [0, 1, 2, 3, 4, 5].map((i) => {
            const x = 1080 - ((frame * 8 + i * 230) % 1450);
            const y = 420 + i * 72;
            return (
              <path
                key={`wind-${i}`}
                d={`M${x} ${y} q-65 -12 -125 0`}
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
                opacity=".48"
              />
            );
          })}

        <g
          transform={`translate(540 0) scale(${zoom}) translate(-540 0)`}
          filter="url(#templeShadow)"
        >
          {/* Full-width rectangular boundary / foundation */}
          <rect
            x="0"
            y="1310"
            width="1080"
            height="112"
            fill={`url(#${stoneId})`}
            stroke={isWarmStoneScene ? "#f2c9a8" : "#d0c9c5"}
            strokeWidth="10"
          />
          <rect x="0" y="1310" width="1080" height="112" fill="url(#stoneTexture)" opacity=".8" />
          <path d="M0 1310 H1080" stroke={isWarmStoneScene ? "#ffe0c4" : "#eee7df"} strokeWidth="9" />
          <path d="M0 1422 H1080" stroke="#292832" strokeWidth="14" />
          <path d="M0 1340 H1080 M0 1395 H1080" stroke="#55525c" strokeWidth="4" opacity=".8" />

          {/* Repeating tooth-shaped battlements from left edge to right edge */}
          {Array.from({ length: 27 }).map((_, i) => {
            const x = i * 40;
            return (
              <g key={i}>
                <rect
                  x={x + 3}
                  y="1276"
                  width="30"
                  height="35"
                  fill={`url(#${stoneId})`}
                  stroke={isWarmStoneScene ? "#e9b995" : "#d6d0ca"}
                  strokeWidth="4"
                />
                <path
                  d={`M${x + 3} 1278 H${x + 33}`}
                  stroke={isWarmStoneScene ? "#ffe0c4" : "#f0e9e2"}
                  strokeWidth="3"
                />
                <path d={`M${x + 33} 1280 V1310`} stroke="#302e37" strokeWidth="4" />
              </g>
            );
          })}

          {/* Main tall, gently curved shrine — same geometry in both scenes */}
          <path
            d="M330 1310 C325 1190 330 1040 360 900 C385 790 430 730 475 700 C520 670 575 670 620 700 C665 730 710 790 735 900 C765 1040 770 1190 765 1310 Z"
            fill={`url(#${domeId})`}
            stroke={isWarmStoneScene ? "#f4cfb0" : "#ded8d2"}
            strokeWidth="10"
          />
          <path
            d="M365 1300 C360 1150 375 990 405 875 C425 800 455 750 490 725"
            fill="none"
            stroke={isWarmStoneScene ? "#704632" : "#45434b"}
            strokeWidth="9"
            opacity=".75"
          />
          <path
            d="M730 1300 C735 1150 720 990 690 875 C670 800 640 750 605 725"
            fill="none"
            stroke={isWarmStoneScene ? "#ffe0c4" : "#d1cbc5"}
            strokeWidth="7"
            opacity=".55"
          />

          {/* Fine masonry texture and central architectural groove */}
          <path
            d="M330 1310 C325 1190 330 1040 360 900 C385 790 430 730 475 700 C520 670 575 670 620 700 C665 730 710 790 735 900 C765 1040 770 1190 765 1310 Z"
            fill="url(#stoneTexture)"
            opacity=".72"
          />
          <path
            d="M550 710 C548 850 552 1000 550 1150 L550 1305"
            fill="none"
            stroke={isWarmStoneScene ? "#704632" : "#34323b"}
            strokeWidth="6"
            opacity=".75"
          />
          <path
            d="M558 735 C556 900 560 1080 558 1295"
            fill="none"
            stroke={isWarmStoneScene ? "#ffe0c4" : "#d4ceca"}
            strokeWidth="2.5"
            opacity=".65"
          />

          {/* Broad oval stone roof/cap */}
          <ellipse
            cx="550"
            cy="700"
            rx="178"
            ry="38"
            fill={isWarmStoneScene ? "#bd805c" : "#77747d"}
            stroke={isFlagScene ? "#f4cfb0" : "#d9d2cc"}
            strokeWidth="9"
          />
          <ellipse
            cx="550"
            cy="690"
            rx="165"
            ry="28"
            fill={isWarmStoneScene ? "#edc09b" : "#aaa5a2"}
            stroke={isWarmStoneScene ? "#80523b" : "#4a4850"}
            strokeWidth="5"
          />

          {/* Finial and blue Nilachakra */}
          <ellipse
            cx="550"
            cy="650"
            rx="49"
            ry="25"
            fill={`url(#${domeId})`}
            stroke={isWarmStoneScene ? "#f4cfb0" : "#d8d1cb"}
            strokeWidth="7"
          />
          <line x1="550" y1="625" x2="550" y2="520" stroke={isWarmStoneScene ? "#80523b" : "#c9c4c0"} strokeWidth="10" />
          <g transform="translate(550 505)">
            <circle r="34" fill="#1648a7" stroke="#9dc4ff" strokeWidth="8" />
            <circle r="23" fill="none" stroke="#e0edff" strokeWidth="4" />
            <circle r="7" fill="#f4f7ff" />
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1="0"
                y1="0"
                x2={Math.cos((i * Math.PI) / 4) * 31}
                y2={Math.sin((i * Math.PI) / 4) * 31}
                stroke="#e4efff"
                strokeWidth="4"
              />
            ))}
          </g>

          {/* Flag pole and waving red triangular flag */}
          <line x1="550" y1="470" x2="550" y2="330" stroke={isWarmStoneScene ? "#80523b" : "#d8d1cb"} strokeWidth="9" />
          <path
            d={`M553 340 Q${610 + flagWave} 355 ${690 + flagWave} 382 L553 415 Z`}
            fill="url(#flagRed)"
            stroke="#ffc0b4"
            strokeWidth="4"
          />

          {/* White half-moon emblem, visible only in the flag-mystery scene */}
          {isFlagRelatedScene && (
            <g transform={`translate(${605 + flagWave * 0.55} 376)`}>
              <circle r="13" fill="#fff8e9" />
              <circle cx="6" cy="-4" r="12" fill="#c51d36" />
            </g>
          )}

          {/* Attached smaller rectangular shrine on the right */}
          <rect
            x="735"
            y="1120"
            width="245"
            height="190"
            fill={`url(#${stoneId})`}
            stroke={isWarmStoneScene ? "#f4cfb0" : "#d8d1cb"}
            strokeWidth="9"
          />
          <path
            d="M735 1120 H980 V1085 H735 Z"
            fill={isWarmStoneScene ? "#bd805c" : "#77747d"}
            stroke={isWarmStoneScene ? "#f4cfb0" : "#d8d1cb"}
            strokeWidth="7"
          />
          <path
            d="M720 1085 H995 V1050 H720 Z"
            fill={isWarmStoneScene ? "#d59b75" : "#99949a"}
            stroke={isWarmStoneScene ? "#f4cfb0" : "#ded8d2"}
            strokeWidth="7"
          />
          <path
            d="M735 1050 H980 V1015 H735 Z"
            fill={isWarmStoneScene ? "#bd805c" : "#77747d"}
            stroke={isWarmStoneScene ? "#f4cfb0" : "#d8d1cb"}
            strokeWidth="7"
          />
          <path
            d="M750 1015 H965 V980 H750 Z"
            fill={isWarmStoneScene ? "#e1ad88" : "#aaa5a2"}
            stroke={isFlagScene ? "#f4cfb0" : "#e0d9d3"}
            strokeWidth="7"
          />
          <ellipse
            cx="858"
            cy="975"
            rx="78"
            ry="22"
            fill={isWarmStoneScene ? "#e1ad88" : "#aaa5a2"}
            stroke={isWarmStoneScene ? "#f4cfb0" : "#ded8d2"}
            strokeWidth="7"
          />
          <ellipse
            cx="858"
            cy="945"
            rx="48"
            ry="22"
            fill={`url(#${domeId})`}
            stroke={isWarmStoneScene ? "#f4cfb0" : "#d8d1cb"}
            strokeWidth="7"
          />

          {/* Stone block texture, doorway and masonry detail */}
          <rect x="735" y="1120" width="245" height="190" fill="url(#stoneTexture)" opacity=".85" />
          <path
            d="M810 1310 V1190 Q858 1130 906 1190 V1310 Z"
            fill="#25222c"
            stroke={isWarmStoneScene ? "#e9b995" : "#c9c2bd"}
            strokeWidth="7"
          />
          <path
            d="M830 1310 V1200 Q858 1165 886 1200 V1310"
            fill="none"
            stroke={isWarmStoneScene ? "#bd805c" : "#77737c"}
            strokeWidth="5"
          />
          {[0, 1, 2].map((i) => (
            <line
              key={i}
              x1="750"
              y1={1150 + i * 48}
              x2="965"
              y2={1150 + i * 48}
              stroke={isWarmStoneScene ? "#704632" : "#4b4851"}
              strokeWidth="4"
              opacity=".65"
            />
          ))}

          <rect
            x="165"
            y="1280"
            width="28"
            height="30"
            fill={isFlagScene ? "#bd805c" : "#8d8990"}
            stroke={isFlagScene ? "#f4cfb0" : "#d0c9c5"}
            strokeWidth="5"
          />
        </g>

        <ellipse cx="540" cy="1440" rx="480" ry="58" fill="#171326" opacity=".55" />
        <path
          d="M0 1490 Q250 1435 520 1495 Q800 1430 1080 1480 V1920 H0Z"
          fill={isWarmStoneScene ? "#C7655F" : "#211936"}
          opacity={isWarmStoneScene ? ".22" : ".76"}
        />
      </svg>

      {Array.from({ length: 22 }).map((_, i) => {
        const x = (i * 137) % 100;
        const y = (i * 83) % 100;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: isFlagScene ? "#ffffff" : "#ffd59a",
              opacity: 0.3 + Math.abs(Math.sin(frame / 13 + i)) * 0.4,
              boxShadow: isFlagScene ? "0 0 12px #ffffff" : "0 0 12px #ffd59a",
              transform: `translateY(${Math.sin((frame + i * 12) / 12) * 18}px)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
