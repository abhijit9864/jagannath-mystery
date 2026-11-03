
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

const fade = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, start + 10, end - 10, end], [0, 1, 1, 0], clamp);

type IdolProps = {
  opacity: number;
  old?: boolean;
  glow?: number;
  position?: "left" | "right";
};

const JagannathFigure: React.FC<IdolProps> = ({
  opacity,
  old = false,
  glow = 1,
  position,
}) => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.max(0, Math.sin(frame / 5)) * 0.12;

  const goldId = old ? "oldGold10" : "newGold10";
  const clothId = old ? "oldCloth10" : "newCloth10";
  const blueId = old ? "oldBlue10" : "newBlue10";
  const glowId = old ? "oldGlow10" : "newGlow10";

  const positionTransform =
    position === "left"
      ? "translateX(-245px) scale(0.62)"
      : position === "right"
        ? "translateX(245px) scale(0.62)"
        : "none";

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        filter: old ? "brightness(0.65) saturate(0.65)" : "none",
        transform: positionTransform,
        transformOrigin: "center center",
        pointerEvents: "none",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1080 1920"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={goldId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff3a3" />
            <stop offset="35%" stopColor="#ffc52d" />
            <stop offset="75%" stopColor="#e98a12" />
            <stop offset="100%" stopColor="#9d4214" />
          </linearGradient>

          <linearGradient id={clothId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffdc48" />
            <stop offset="100%" stopColor="#ed8508" />
          </linearGradient>

          <radialGradient id={blueId}>
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#e5faff" />
            <stop offset="55%" stopColor="#65caff" />
            <stop offset="100%" stopColor="#0875ff" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={glowId}>
            <stop offset="0%" stopColor="#ffffff" stopOpacity=".9" />
            <stop offset="45%" stopColor="#75d9ff" stopOpacity=".5" />
            <stop offset="100%" stopColor="#0875ff" stopOpacity="0" />
          </radialGradient>

          <filter id={`idolShadow${old ? "Old" : "New"}`}>
            <feGaussianBlur in="SourceAlpha" stdDeviation="15" />
            <feOffset dy="16" />
            <feComponentTransfer>
              <feFuncA type="linear" slope=".5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id={`heartBlur${old ? "Old" : "New"}`}>
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>

        <g filter={`url(#idolShadow${old ? "Old" : "New"})`}>
          {/* Peacock feathers */}
          {[0, 1, 2, 3, 4].map((i) => {
            const x = 335 + i * 102;
            const top = i === 2 ? 430 : i % 2 === 0 ? 465 : 490;

            return (
              <g key={`feather-${i}`}>
                <path
                  d={`M${x} 700 Q${x - 45} ${top + 40} ${x} ${top}
                      Q${x + 45} ${top + 40} ${x} 700`}
                  fill="#168b49"
                  stroke="#10251b"
                  strokeWidth="7"
                />
                <ellipse
                  cx={x}
                  cy={top + 45}
                  rx="23"
                  ry="31"
                  fill="#0878d0"
                  stroke="#123c58"
                  strokeWidth="4"
                />
                <ellipse
                  cx={x}
                  cy={top + 45}
                  rx="13"
                  ry="19"
                  fill="#ffcf35"
                />
                <circle cx={x} cy={top + 45} r="8" fill="#1684c6" />
              </g>
            );
          })}

          {/* Crown */}
          <path
            d="
              M315 745
              Q320 655 385 620
              Q420 565 475 605
              Q540 520 605 605
              Q660 565 695 620
              Q760 655 765 745
              Q540 700 315 745Z
            "
            fill={`url(#${goldId})`}
            stroke="#29180d"
            strokeWidth="12"
          />

          <path
            d="M330 720 Q540 645 750 720 L760 785 Q540 710 320 785Z"
            fill="#e84c38"
            stroke="#2a170d"
            strokeWidth="9"
          />

          <path
            d="M340 730 Q540 665 740 730"
            fill="none"
            stroke="#ffe98a"
            strokeWidth="9"
          />

          {Array.from({ length: 11 }).map((_, i) => (
            <circle
              key={`gem-${i}`}
              cx={355 + i * 37}
              cy={735 - Math.sin((i / 10) * Math.PI) * 25}
              r="12"
              fill={["#24c4c7", "#ffe65b", "#f4f1dc", "#e94c68"][i % 4]}
              stroke="#592a13"
              strokeWidth="4"
            />
          ))}

          <path
            d="M540 585 Q505 635 540 670 Q575 635 540 585Z"
            fill="#19a9c9"
            stroke="#8d3e16"
            strokeWidth="7"
          />

          {/* Body */}
          <path
            d="M355 1080 Q540 1035 725 1080
               L785 1490 Q540 1570 295 1490Z"
            fill={`url(#${clothId})`}
            stroke="#28170d"
            strokeWidth="13"
          />

          {/* Arms */}
          <path
            d="M375 1100 L255 1170 L235 1410
               Q265 1440 305 1405 L410 1250Z"
            fill="#ffb51e"
            stroke="#26170e"
            strokeWidth="12"
          />

          <path
            d="M705 1100 L825 1170 L845 1410
               Q815 1440 775 1405 L670 1250Z"
            fill="#ffb51e"
            stroke="#26170e"
            strokeWidth="12"
          />

          <path
            d="M263 1210 L350 1185 M730 1185 L817 1210"
            stroke="#17121b"
            strokeWidth="26"
          />

          <path
            d="M285 1198 L285 1230 M795 1198 L795 1230"
            stroke="#ffdb44"
            strokeWidth="10"
          />

          {/* Lower garment border */}
          <path
            d="M315 1470 Q540 1530 765 1470"
            fill="none"
            stroke="#e53c40"
            strokeWidth="20"
          />

          {/* Jewellery */}
          <path
            d="M375 1140 Q540 1310 705 1140"
            fill="none"
            stroke="#e64b35"
            strokeWidth="23"
          />

          <path
            d="M390 1160 Q540 1320 690 1160"
            fill="none"
            stroke="#ffe34b"
            strokeWidth="17"
          />

          <path
            d="M410 1175 Q540 1295 670 1175"
            fill="none"
            stroke="#26b9c7"
            strokeWidth="13"
          />

          {Array.from({ length: 17 }).map((_, i) => (
            <circle
              key={`necklace-${i}`}
              cx={390 + i * 19}
              cy={1160 + Math.sin((i / 16) * Math.PI) * 105}
              r="10"
              fill={["#f34b45", "#ffe34d", "#39c8d0", "#fff1c2"][i % 4]}
              stroke="#623316"
              strokeWidth="3"
            />
          ))}

          {/* Divine heart */}
          <g transform={`translate(540 1340) scale(${pulse})`}>
            <circle
              r="175"
              fill={`url(#${glowId})`}
              filter={`url(#heartBlur${old ? "Old" : "New"})`}
              opacity={glow * 0.8}
            />
            <circle r="90" fill={`url(#${blueId})`} />

            <path
              d="M0 68 C-30 35 -85 -5 -72 -48
                 C-60 -88 -15 -88 0 -52
                 C15 -88 60 -88 72 -48
                 C85 -5 30 35 0 68Z"
              fill="#f4fdff"
              stroke="#43c1ff"
              strokeWidth="9"
            />
          </g>

          {/* Face */}
          <rect
            x="300"
            y="735"
            width="480"
            height="440"
            rx="175"
            fill="#090b1a"
            stroke="#3b304d"
            strokeWidth="16"
          />

          <path
            d="M335 850 Q540 750 745 850"
            fill="none"
            stroke="#29283b"
            strokeWidth="12"
          />

          {/* Eyes */}
          <ellipse
            cx="425"
            cy="915"
            rx="88"
            ry="98"
            fill="#fffdf5"
            stroke="#e74445"
            strokeWidth="11"
          />
          <circle cx="435" cy="920" r="43" fill="#09090c" />
          <circle cx="419" cy="900" r="13" fill="white" />

          <ellipse
            cx="655"
            cy="915"
            rx="88"
            ry="98"
            fill="#fffdf5"
            stroke="#e74445"
            strokeWidth="11"
          />
          <circle cx="645" cy="920" r="43" fill="#09090c" />
          <circle cx="629" cy="900" r="13" fill="white" />

          {/* Tilak */}
          <path
            d="M510 790 V920 Q540 955 570 920 V790"
            fill="none"
            stroke="#ffd22f"
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path
            d="M540 790 V915"
            stroke="#ec5232"
            strokeWidth="7"
          />

          {/* Smile */}
          <path
            d="M405 1030 Q540 1140 675 1030
               Q640 1120 540 1120 Q440 1120 405 1030Z"
            fill="#f42e32"
            stroke="#160b0b"
            strokeWidth="8"
          />

          <path
            d="M440 1047 Q540 1090 640 1047"
            fill="none"
            stroke="#ffaaaa"
            strokeWidth="6"
          />

          {/* Earrings */}
          {[330, 750].map((x, i) => (
            <g key={`earring-${i}`}>
              <circle
                cx={x}
                cy="955"
                r="25"
                fill="#ffc52d"
                stroke="#873d18"
                strokeWidth="6"
              />
              <circle cx={x} cy="955" r="10" fill="#e34c40" />
              <circle cx={x - 5} cy="950" r="4" fill="#fff2a0" />
            </g>
          ))}

          {/* Feet */}
          <ellipse cx="465" cy="1530" rx="52" ry="19" fill="#14101b" />
          <ellipse cx="615" cy="1530" rx="52" ry="19" fill="#14101b" />
        </g>
      </svg>
    </div>
  );
};

const Scene10SecretRitual: React.FC = () => {
  const frame = useCurrentFrame();

  // CITY AND TEMPLE
  const templeOpacity = interpolate(
    frame,
    [0, 10, 75, 100],
    [0, 1, 1, 0],
    clamp
  );

  const cityOpacity = interpolate(
    frame,
    [0, 10, 75, 100],
    [0, 1, 1, 0],
    clamp
  );

  // POWER CUT
  const cityDarkness = interpolate(
    frame,
    [72, 88, 105],
    [0, 0.85, 1],
    clamp
  );

  // SANCTUM
  const interiorOpacity = interpolate(
    frame,
    [95, 115, 125],
    [0, 1, 1],
    clamp
  );

  // SEVAYAT
  const sevayatOpacity = interpolate(
    frame,
    [120, 140, 300],
    [0, 1, 1],
    clamp
  );

  const blindfoldOpacity = interpolate(
    frame,
    [145, 165, 180],
    [0, 1, 1],
    clamp
  );

  // OLD IDOL AND NEW IDOL
  const oldOpacity = interpolate(
    frame,
    [195, 235, 265],
    [1, 0.85, 0],
    clamp
  );

  const newOpacity = interpolate(
    frame,
    [215, 245, 275],
    [0, 0.7, 1],
    clamp
  );

  // DIVINE TRANSFER
  const transfer = interpolate(
    frame,
    [215, 235, 265],
    [0, 1, 0],
    clamp
  );

  const glow = 0.65 + Math.sin(frame / 6) * 0.2;

  // RABBIT SYMBOL
  const rabbitOpacity = interpolate(
    frame,
    [255, 273, 294, 300],
    [0, 1, 1, 0],
    clamp
  );

  const captionStyle: React.CSSProperties = {
    position: "absolute",
    left: 35,
    right: 35,
    textAlign: "center",
    color: "#fff0d6",
    fontSize: 42,
    fontWeight: 900,
    lineHeight: 1.55,
    textShadow: "0 4px 18px #000",
    fontFamily: "Noto Sans Devanagari, sans-serif",
  };

  return (
    <AbsoluteFill
      style={{
        background: "#030303",
        overflow: "hidden",
        fontFamily: "Noto Sans Devanagari, sans-serif",
      }}
    >
      {/* =========================================
          PART 1: ORIGINAL JAGANNATH TEMPLE
      ========================================= */}

      <AbsoluteFill style={{ opacity: templeOpacity }}>
        <AnimatedJagannathTemple variant="intro" />

        {/* CITY BUILDINGS */}
        <AbsoluteFill
          style={{
            opacity: cityOpacity,
            pointerEvents: "none",
          }}
        >
          {/* Apartment buildings */}
          {Array.from({ length: 13 }).map((_, i) => {
            const x = i * 88 - 20;
            const height = 180 + ((i * 47) % 170);
            const width = 75 + (i % 3) * 8;

            return (
              <div
                key={`building-${i}`}
                style={{
                  position: "absolute",
                  left: x,
                  bottom: 0,
                  width,
                  height,
                  background:
                    "linear-gradient(90deg,#171b27,#30394a,#111722)",
                  border: "2px solid #4b4c55",
                  boxShadow: "0 0 18px rgba(0,0,0,.8)",
                }}
              >
                {Array.from({ length: 12 }).map((_, j) => {
                  const lightLevel = interpolate(
                    frame,
                    [72, 88],
                    [1, 0],
                    clamp
                  );

                  return (
                    <div
                      key={j}
                      style={{
                        position: "absolute",
                        left: 10 + (j % 3) * 20,
                        top: 12 + Math.floor(j / 3) * 38,
                        width: 10,
                        height: 17,
                        background: "#ffd889",
                        opacity:
                          lightLevel * ((i + j) % 4 === 0 ? 0.65 : 1),
                        boxShadow:
                          lightLevel > 0.1
                            ? `0 0 ${12 * lightLevel}px #ffbd57`
                            : "none",
                      }}
                    />
                  );
                })}
              </div>
            );
          })}

          {/* Foreground houses */}
          {[30, 780, 900].map((x, i) => {
            const lightLevel = interpolate(
              frame,
              [72, 88],
              [1, 0],
              clamp
            );

            return (
              <div
                key={`house-${i}`}
                style={{
                  position: "absolute",
                  left: x,
                  bottom: 0,
                  width: 170,
                  height: 125 + i * 18,
                  background: "#292b35",
                  border: "3px solid #55505a",
                }}
              >
                {Array.from({ length: 6 }).map((_, j) => (
                  <div
                    key={j}
                    style={{
                      position: "absolute",
                      left: 20 + (j % 2) * 75,
                      top: 18 + Math.floor(j / 2) * 35,
                      width: 24,
                      height: 20,
                      background: "#ffd47b",
                      opacity: lightLevel,
                      boxShadow:
                        lightLevel > 0.1
                          ? `0 0 ${15 * lightLevel}px #ffc15c`
                          : "none",
                    }}
                  />
                ))}
              </div>
            );
          })}

          {/* Street lights */}
          {[110, 520, 970].map((x, i) => {
            const lightLevel = interpolate(
              frame,
              [72, 88],
              [1, 0],
              clamp
            );

            return (
              <div
                key={`streetlight-${i}`}
                style={{
                  position: "absolute",
                  left: x,
                  bottom: 110,
                  width: 8,
                  height: 180,
                  background: "#25252b",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: -12,
                    width: 32,
                    height: 15,
                    borderRadius: 10,
                    background: "#ffe2a0",
                    opacity: lightLevel,
                    boxShadow:
                      lightLevel > 0.1
                        ? `0 0 ${35 * lightLevel}px #ffb94f`
                        : "none",
                  }}
                />
              </div>
            );
          })}
        </AbsoluteFill>
      </AbsoluteFill>

      {/* POWER CUT DARKNESS */}
      <AbsoluteFill
        style={{
          background: "#000",
          opacity: cityDarkness,
          pointerEvents: "none",
        }}
      />

      {/* =========================================
          PART 2: TEMPLE SANCTUM
      ========================================= */}

      <AbsoluteFill style={{ opacity: interiorOpacity }}>
        {/* Dark sanctum background */}
        <AbsoluteFill
          style={{
            background:
              "radial-gradient(ellipse at 50% 48%,#332218 0%,#140d09 48%,#020202 100%)",
          }}
        />

        {/* Temple walls */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg,#070504 0%,#3c291d 13%,transparent 32%,transparent 68%,#3c291d 87%,#070504 100%)",
          }}
        />

        {/* Side pillars */}
        {[90, 880].map((x, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: 200,
              width: 125,
              height: 1250,
              background:
                "linear-gradient(90deg,#120c08,#684832,#21140d)",
              borderLeft: "7px solid #805a3c",
              borderRight: "7px solid #0c0806",
              boxShadow: "0 0 40px #000",
            }}
          />
        ))}

        {/* Floor */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: 380,
            background: "linear-gradient(180deg,#26180f,#080605)",
            borderTop: "5px solid #67462f",
          }}
        />

        {/* Oil lamps */}
        {[235, 825].map((x, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: 580,
              width: 45,
              height: 55,
              borderRadius: "50% 50% 10% 10%",
              background: "#b87832",
              boxShadow: "0 0 40px #ff9e38",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 15,
                top: -35,
                width: 15,
                height: 35,
                borderRadius: "50%",
                background: "#ffd071",
                filter: "blur(5px)",
              }}
            />
          </div>
        ))}

        {/* Ritual platform */}
        <div
          style={{
            position: "absolute",
            left: 250,
            top: 1450,
            width: 580,
            height: 100,
            borderRadius: "50%",
            background: "linear-gradient(180deg,#98633c,#24150d)",
            border: "5px solid #bd8b51",
            boxShadow: "0 0 30px #000",
          }}
        />

        {/* OLD JAGANNATH - LEFT */}
        <JagannathFigure
          opacity={oldOpacity}
          old
          glow={0.55}
          position="left"
        />

        {/* NEW JAGANNATH - RIGHT */}
        <JagannathFigure
          opacity={newOpacity}
          glow={glow}
          position="right"
        />

        {/* =========================================
            HEART TO HEART DIVINE LIGHT TRANSFER
        ========================================= */}

        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            opacity: transfer,
          }}
          viewBox="0 0 1080 1920"
        >
          <defs>
            <linearGradient id="divineTransfer10">
              <stop offset="0%" stopColor="#fff4b0" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#ffe18a" stopOpacity="0.1" />
            </linearGradient>

            <filter id="transferGlow10">
              <feGaussianBlur stdDeviation="13" />
            </filter>
          </defs>

          {/* Glowing connection */}
          <path
            d="M300 1195 Q540 1080 780 1195"
            fill="none"
            stroke="#fff1a6"
            strokeWidth="24"
            opacity=".65"
            filter="url(#transferGlow10)"
          />

          <path
            d="M300 1195 Q540 1080 780 1195"
            fill="none"
            stroke="url(#divineTransfer10)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray="20 15"
            strokeDashoffset={-frame * 5}
          />

          {/* Moving divine particles */}
          {Array.from({ length: 15 }).map((_, i) => {
            const progress = (frame * 0.035 + i / 15) % 1;
            const x = 300 + progress * 480;
            const y = 1195 - Math.sin(progress * Math.PI) * 115;

            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={5 + (i % 3) * 2}
                fill="#ffffff"
                filter="url(#transferGlow10)"
              />
            );
          })}
        </svg>

        {/* Bright receiving-heart glow */}
        <div
          style={{
            position: "absolute",
            left: "72.7%",
            top: "62.2%",
            width: 280,
            height: 280,
            transform: "translate(-50%,-50%)",
            borderRadius: "50%",
            opacity: transfer,
            background:
              "radial-gradient(circle,#fff 0%,#ffe7a0 18%,rgba(255,174,50,.4) 45%,transparent 75%)",
            filter: "blur(15px)",
          }}
        />

        {/* Golden energy particles */}
        {Array.from({ length: 45 }).map((_, i) => {
          const x = 230 + ((i * 79 + frame * 5) % 630);
          const y = 750 + ((i * 53 + frame * 3) % 700);

          return (
            <div
              key={`energy-${i}`}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: 5 + (i % 3) * 2,
                height: 5 + (i % 3) * 2,
                borderRadius: "50%",
                background: "#fff0b2",
                opacity: transfer * (0.5 + glow * 0.5),
                boxShadow: "0 0 15px #ffc45b",
                pointerEvents: "none",
              }}
            />
          );
        })}

        {/* =========================================
            SEVAYAT WITH RED BLINDFOLD
        ========================================= */}

        
{/* =========================================
    REALISTIC HUMAN JAGANNATH SEVAYAT
========================================= */}

<div
  style={{
    position: "absolute",
    left: 35,
    top: 790,
    width: 430,
    height: 850,
    opacity: sevayatOpacity,
    transform: `translateY(${interpolate(
      frame,
      [120, 160],
      [100, 0],
      clamp
    )}px)`,
    zIndex: 15,
  }}
>
  {/* HUMAN BODY AND DHOTI */}
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 430 850"
    style={{ overflow: "visible" }}
  >
    <defs>
      <linearGradient id="sevayatSkin10" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#70412f" />
        <stop offset="35%" stopColor="#b87955" />
        <stop offset="70%" stopColor="#d49a70" />
        <stop offset="100%" stopColor="#75432f" />
      </linearGradient>

      <linearGradient id="sevayatCloth10" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#bca77e" />
        <stop offset="50%" stopColor="#fff1d1" />
        <stop offset="100%" stopColor="#c6b18b" />
      </linearGradient>

      <linearGradient id="sevayatDhoti10" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#b9a47d" />
        <stop offset="50%" stopColor="#fff4dc" />
        <stop offset="100%" stopColor="#c3ae87" />
      </linearGradient>

      <linearGradient id="sevayatBlindfold10" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ff5550" />
        <stop offset="50%" stopColor="#c30d1b" />
        <stop offset="100%" stopColor="#70030d" />
      </linearGradient>
    </defs>

    {/* Back shadow */}
    <ellipse
      cx="210"
      cy="810"
      rx="145"
      ry="20"
      fill="#000"
      opacity=".6"
    />

    {/* Legs */}
    <path
      d="M130 565 Q115 650 105 755 L155 755 L195 610Z"
      fill="url(#sevayatSkin10)"
      stroke="#593524"
      strokeWidth="5"
    />

    <path
      d="M235 600 Q260 665 275 755 L325 755 L290 570Z"
      fill="url(#sevayatSkin10)"
      stroke="#593524"
      strokeWidth="5"
    />

    {/* Feet */}
    <path
      d="M105 745 Q75 750 68 775 Q100 790 158 775 L155 755Z"
      fill="#a96d4d"
    />

    <path
      d="M275 755 Q270 780 290 790 Q340 795 350 775 L325 750Z"
      fill="#a96d4d"
    />

    {/* Traditional white dhoti */}
    <path
      d="M95 430 Q205 460 310 430
         L330 675 Q290 710 220 670
         L205 545 L180 680
         Q120 710 75 675Z"
      fill="url(#sevayatDhoti10)"
      stroke="#806b4b"
      strokeWidth="5"
    />

    {/* Dhoti folds */}
    <path
      d="M190 470 Q155 560 125 670
         M210 475 Q220 565 220 665
         M235 470 Q275 570 290 670"
      fill="none"
      stroke="#b6a17b"
      strokeWidth="5"
      opacity=".7"
    />

    {/* Upper body */}
    <path
      d="M125 210
         Q205 180 285 215
         L320 455
         Q210 505 90 455Z"
      fill="url(#sevayatSkin10)"
      stroke="#69402e"
      strokeWidth="6"
    />

    {/* Cream traditional shoulder cloth */}
    <path
      d="M115 220
         Q65 250 90 370
         L130 480
         Q175 440 205 395
         L175 250Z"
      fill="url(#sevayatCloth10)"
      stroke="#8f7855"
      strokeWidth="5"
    />

    <path
      d="M245 215
         Q315 245 305 350
         L270 450
         L230 405
         L260 270Z"
      fill="url(#sevayatCloth10)"
      stroke="#8f7855"
      strokeWidth="5"
    />

    {/* Neck */}
    <path
      d="M165 155 L165 240 Q205 275 245 240 L240 155Z"
      fill="url(#sevayatSkin10)"
      stroke="#71452f"
      strokeWidth="5"
    />

    {/* Ears */}
    <ellipse cx="125" cy="105" rx="22" ry="32" fill="#a86d4e" />
    <ellipse cx="275" cy="105" rx="22" ry="32" fill="#a86d4e" />

    {/* Human face */}
    <path
      d="M135 55
         Q145 5 205 10
         Q265 5 275 55
         L270 145
         Q260 195 205 205
         Q150 195 140 145Z"
      fill="url(#sevayatSkin10)"
      stroke="#573626"
      strokeWidth="5"
    />

    {/* Hair */}
    <path
      d="M133 85
         Q110 20 170 8
         Q230 -10 275 35
         Q290 55 277 90
         Q255 55 240 45
         Q185 65 140 90Z"
      fill="#17120f"
      stroke="#080706"
      strokeWidth="5"
    />

    {/* Nose */}
    <path
      d="M205 95 L190 137 Q205 150 222 137"
      fill="none"
      stroke="#71432f"
      strokeWidth="7"
      strokeLinecap="round"
    />

    {/* Mouth */}
    <path
      d="M185 168 Q205 180 225 168"
      fill="none"
      stroke="#713c32"
      strokeWidth="5"
      strokeLinecap="round"
    />

    {/* Forehead tilak */}
    <path
      d="M197 38 L197 68 Q205 78 213 68 L213 38"
      fill="none"
      stroke="#fff0cf"
      strokeWidth="7"
      strokeLinecap="round"
    />

    <path
      d="M205 40 L205 67"
      stroke="#bd2923"
      strokeWidth="4"
    />

    {/* RED BLINDFOLD - DRAWN IN SVG COORDINATES OVER THE EYES */}
    <g opacity={blindfoldOpacity}>
      {/* Main red cloth covering both eyes */}
      <path
        d="M116 91 Q145 78 175 88 Q205 95 235 88 Q265 78 292 91 L289 128 Q260 137 235 128 Q205 135 175 128 Q145 137 119 128 Z"
        fill="url(#sevayatBlindfold10)"
        stroke="#5e0710"
        strokeWidth="5"
      />
      {/* Fabric highlight and folds */}
      <path
        d="M123 97 Q205 108 285 97 M125 119 Q205 127 283 119"
        fill="none"
        stroke="#ff8177"
        strokeWidth="4"
        opacity=".8"
      />
      {/* Cloth wrapped around the sides of the head */}
      <path
        d="M119 96 Q95 82 84 94 Q78 108 119 120 L125 111 Z"
        fill="#c51a28"
        stroke="#650711"
        strokeWidth="4"
      />
      <path
        d="M289 96 Q313 82 324 94 Q330 108 289 120 L283 111 Z"
        fill="#c51a28"
        stroke="#650711"
        strokeWidth="4"
      />
      {/* Tied cloth ends behind the ears */}
      <path
        d="M91 105 Q72 127 88 158 Q108 143 112 117 Z"
        fill="#a80717"
        stroke="#650711"
        strokeWidth="4"
      />
      <path
        d="M317 105 Q336 127 320 158 Q300 143 296 117 Z"
        fill="#a80717"
        stroke="#650711"
        strokeWidth="4"
      />
      {/* Small visible knot on the side */}
      <path
        d="M318 91 Q342 77 349 98 Q340 119 318 111 Q306 102 318 91 Z"
        fill="#d51b2a"
        stroke="#650711"
        strokeWidth="4"
      />
    </g>

    {/* Arms */}
    <path
      d="M115 255
         Q70 280 55 365
         L110 405
         Q145 335 170 300Z"
      fill="url(#sevayatSkin10)"
      stroke="#603a29"
      strokeWidth="6"
    />

    {/* Reaching arm */}
    <path
      d="M275 260
         Q330 280 355 345
         L390 405
         Q405 430 385 445
         Q365 455 350 430
         L310 370
         L245 325Z"
      fill="url(#sevayatSkin10)"
      stroke="#603a29"
      strokeWidth="6"
      transform={`rotate(${interpolate(
        frame,
        [145, 195],
        [8, -15],
        clamp
      )} 275 260)`}
    />

    {/* Hand and fingers */}
    <g
      transform={`translate(${interpolate(
        frame,
        [145, 195],
        [0, 35],
        clamp
      )} 0)`}
    >
      <path
        d="M370 420 Q390 400 405 420
           L410 440 Q400 455 380 450Z"
        fill="#bd805c"
        stroke="#603a29"
        strokeWidth="4"
      />
      <path
        d="M387 420 L415 410 M390 430 L420 425 M385 440 L410 440"
        stroke="#603a29"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  </svg>

</div>


        {/* =========================================
            RABBIT-LIKE SYMBOL
        ========================================= */}

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 850,
            width: 235,
            height: 215,
            transform: `translate(-50%,-50%) scale(${
              0.8 + rabbitOpacity * 0.2
            })`,
            opacity: rabbitOpacity,
            filter: "drop-shadow(0 0 35px #fff0b8)",
            zIndex: 12,
          }}
        >
          <svg viewBox="0 0 200 180" width="100%" height="100%">
            <ellipse cx="90" cy="120" rx="57" ry="38" fill="#fff0d5" />
            <circle cx="140" cy="80" r="32" fill="#fff0d5" />

            <ellipse
              cx="130"
              cy="31"
              rx="13"
              ry="43"
              fill="#fff0d5"
              transform="rotate(-12 130 31)"
            />

            <ellipse
              cx="160"
              cy="31"
              rx="12"
              ry="39"
              fill="#fff0d5"
              transform="rotate(12 160 31)"
            />

            <circle cx="151" cy="78" r="4" fill="#513526" />
            <circle cx="170" cy="91" r="5" fill="#dca58d" />
            <circle cx="40" cy="112" r="18" fill="#fff0d5" />
          </svg>
        </div>
      </AbsoluteFill>

      {/* CINEMATIC VIGNETTE */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center,transparent 35%,rgba(0,0,0,0.7) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

export default Scene10SecretRitual;
