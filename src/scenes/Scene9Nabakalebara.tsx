
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const Scene9Nabakalebara: React.FC = () => {
  const frame = useCurrentFrame();

  const treeOpacity = interpolate(frame, [0, 20, 300], [0, 1, 1], {
    extrapolateRight: "clamp",
  });

  const oldOpacity = interpolate(frame, [0, 20, 145, 195], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const newOpacity = interpolate(frame, [155, 205, 240, 300], [0, 0, 1, 1], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});

  const oldScale = interpolate(frame, [140, 195], [1, 0.65], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const newScale = interpolate(frame, [185, 245], [0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const firstCaption = interpolate(frame, [0, 15, 95, 110], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const secondCaption = interpolate(frame, [105, 125, 300], [0, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#f8e9c9",
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
          <linearGradient id="nabSky9" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a8d9f2" />
            <stop offset="38%" stopColor="#f9e5b8" />
            <stop offset="72%" stopColor="#f7c982" />
            <stop offset="100%" stopColor="#e8a96b" />
          </linearGradient>

          <linearGradient id="neemBark9" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60402a" />
            <stop offset="35%" stopColor="#a97849" />
            <stop offset="65%" stopColor="#805331" />
            <stop offset="100%" stopColor="#49301f" />
          </linearGradient>

          <linearGradient id="oldWood9" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#89542d" />
            <stop offset="50%" stopColor="#d29a5c" />
            <stop offset="100%" stopColor="#79502f" />
          </linearGradient>

          <linearGradient id="gold9" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff5b9" />
            <stop offset="50%" stopColor="#ffd34b" />
            <stop offset="100%" stopColor="#e88b22" />
          </linearGradient>

          <linearGradient id="yellowCloth9" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffdf4b" />
            <stop offset="100%" stopColor="#e98b0b" />
          </linearGradient>

          <linearGradient id="ground9" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d5a36b" />
            <stop offset="100%" stopColor="#a96f45" />
          </linearGradient>

          <radialGradient id="divineLight9">
            <stop offset="0%" stopColor="#fffef0" stopOpacity="1" />
            <stop offset="40%" stopColor="#ffe58a" stopOpacity=".75" />
            <stop offset="75%" stopColor="#ffc34b" stopOpacity=".3" />
            <stop offset="100%" stopColor="#ff9e27" stopOpacity="0" />
          </radialGradient>

          <filter id="treeGlow9">
            <feGaussianBlur stdDeviation="25" />
          </filter>

          <filter id="divineGlow9">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        {/* LIGHT SUNRISE BACKGROUND */}
        <rect width="1080" height="1920" fill="url(#nabSky9)" />

        <circle
          cx="790"
          cy="390"
          r="230"
          fill="#fff6d0"
          opacity=".55"
          filter="url(#treeGlow9)"
        />

        <circle
          cx="790"
          cy="390"
          r="105"
          fill="#fff5c5"
          opacity=".8"
        />

        <circle
          cx="520"
          cy="900"
          r="500"
          fill="url(#divineLight9)"
          opacity=".35"
        />

        {/* GROUND */}
        <path
          d="M0 1450 Q400 1390 1080 1460 V1920 H0Z"
          fill="url(#ground9)"
        />

        <path
          d="M0 1480 Q400 1420 1080 1490"
          fill="none"
          stroke="#f3d19c"
          strokeWidth="7"
          opacity=".7"
        />

        {/* LEFT: SACRED NEEM TREE */}
        <g opacity={treeOpacity}>
          <ellipse
            cx="260"
            cy="830"
            rx="280"
            ry="450"
            fill="#9bcf69"
            opacity=".25"
            filter="url(#treeGlow9)"
          />

          {/* Tree trunk */}
          <path
            d="
              M225 1460
              Q205 1250 240 1050
              Q210 850 150 720
              L190 690
              Q270 850 275 1030
              Q310 850 380 710
              L420 735
              Q330 920 320 1080
              Q350 1260 315 1460Z
            "
            fill="url(#neemBark9)"
            stroke="#50331e"
            strokeWidth="12"
          />

          {/* Branches */}
          <path
            d="M260 1050 Q150 900 90 790"
            fill="none"
            stroke="#805331"
            strokeWidth="42"
            strokeLinecap="round"
          />

          <path
            d="M290 1000 Q400 860 450 770"
            fill="none"
            stroke="#805331"
            strokeWidth="35"
            strokeLinecap="round"
          />

          <path
            d="M250 880 Q170 750 190 640"
            fill="none"
            stroke="#93633c"
            strokeWidth="30"
            strokeLinecap="round"
          />

          {/* Green canopy */}
          {[
            [100, 700, 125],
            [220, 570, 145],
            [350, 680, 135],
            [440, 800, 110],
            [95, 900, 105],
            [275, 800, 140],
            [180, 950, 110],
            [385, 550, 95],
          ].map(([x, y, r], i) => (
            <g key={`leaf-${i}`}>
              <circle
                cx={x}
                cy={y}
                r={r}
                fill={["#4c963c", "#67a947", "#80b94e"][i % 3]}
                stroke="#386b30"
                strokeWidth="8"
              />

              {Array.from({ length: 5 }).map((_, j) => (
                <ellipse
                  key={j}
                  cx={x + Math.cos(j * 1.25) * r * 0.5}
                  cy={y + Math.sin(j * 1.25) * r * 0.5}
                  rx="26"
                  ry="13"
                  transform={`rotate(${j * 40} ${x} ${y})`}
                  fill="#b2d875"
                  opacity=".8"
                />
              ))}
            </g>
          ))}

          {/* Small leaves */}
          {Array.from({ length: 35 }).map((_, i) => (
            <ellipse
              key={`small-leaf-${i}`}
              cx={75 + ((i * 83) % 390)}
              cy={520 + ((i * 61) % 480)}
              rx="18"
              ry="8"
              transform={`rotate(${i * 37} ${75 + ((i * 83) % 390)} ${520 + ((i * 61) % 480)})`}
              fill="#b5d978"
              opacity=".9"
            />
          ))}

          {/* Roots */}
          <path
            d="M240 1400 Q150 1440 95 1480 M280 1400 Q350 1450 430 1470"
            fill="none"
            stroke="#805331"
            strokeWidth="28"
            strokeLinecap="round"
          />
        </g>

        {/* OLD WOODEN JAGANNATH IDOL */}
        <g
          opacity={oldOpacity}
          transform={`translate(550 0) scale(${oldScale}) translate(-550 0)`}
        >
          {/* Old crown */}
          <path
            d="M600 690 Q700 560 800 690 L810 760 L590 760Z"
            fill="url(#oldWood9)"
            stroke="#654025"
            strokeWidth="10"
          />

          {/* Old wooden face */}
          <rect
            x="590"
            y="735"
            width="220"
            height="270"
            rx="95"
            fill="#58351f"
            stroke="#76502e"
            strokeWidth="12"
          />

          <circle cx="650" cy="850" r="38" fill="#f5e8cf" />
          <circle cx="750" cy="850" r="38" fill="#f5e8cf" />
          <circle cx="650" cy="850" r="16" fill="#24160f" />
          <circle cx="750" cy="850" r="16" fill="#24160f" />

          {/* Old wooden body - no human arms */}
          <path
            d="M610 985 Q700 950 790 985 L810 1270 Q700 1320 590 1270Z"
            fill="url(#oldWood9)"
            stroke="#654025"
            strokeWidth="10"
          />

          {Array.from({ length: 7 }).map((_, i) => (
            <path
              key={i}
              d={`M${620 + i * 25} 1020 Q${590 + i * 30} 1120 ${620 + i * 25} 1250`}
              fill="none"
              stroke="#f0c18b"
              strokeWidth="5"
              opacity=".5"
            />
          ))}

          <path
            d="M620 1020 Q700 1080 780 1020"
            fill="none"
            stroke="#e0b36e"
            strokeWidth="10"
          />

          <circle cx="700" cy="1090" r="18" fill="#d7a35a" />
        </g>

        {/* TRANSFORMATION PARTICLES */}
        {Array.from({ length: 65 }).map((_, i) => {
          const progress = interpolate(frame, [135, 210], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          const x = 600 + ((i * 71) % 330);
          const y = 650 + ((i * 97) % 650);
          const drift = progress * ((i % 2 === 0 ? 1 : -1) * 150);

          return (
            <circle
              key={`transform-${i}`}
              cx={x + drift}
              cy={y - progress * ((i * 13) % 150)}
              r={2 + (i % 5)}
              fill="#fff3b0"
              opacity={progress * (1 - progress) * 4}
            />
          );
        })}

        {/* DIVINE TRANSFORMATION LIGHT */}
        <circle
          cx="700"
          cy="950"
          r={interpolate(frame, [140, 195, 235], [20, 230, 120], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}
          fill="url(#divineLight9)"
          opacity={interpolate(frame, [140, 190, 230], [0, 1, 0.5], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}
        />

        {/* NEW JAGANNATH - SAME CARTOON STYLE AS SCENE 8 */}
        <g
          opacity={newOpacity}
          transform={`translate(700 1100) scale(${newScale}) translate(-700 -1100)`}
        >
          {/* Peacock feathers */}
          {[0, 1, 2, 3, 4].map((i) => {
            const x = 590 + i * 55;
            const top = i === 2 ? 475 : i % 2 === 0 ? 510 : 530;

            return (
              <g key={`new-feather-${i}`}>
                <path
                  d={`M${x} 700 Q${x - 30} ${top + 55} ${x} ${top} Q${x + 30} ${top + 55} ${x} 700`}
                  fill="#168b49"
                  stroke="#10251b"
                  strokeWidth="6"
                />

                <ellipse
                  cx={x}
                  cy={top + 48}
                  rx="17"
                  ry="25"
                  fill="#0878d0"
                  stroke="#124b5b"
                  strokeWidth="4"
                />

                <ellipse
                  cx={x}
                  cy={top + 48}
                  rx="9"
                  ry="14"
                  fill="#ffcf35"
                />

                <circle cx={x} cy={top + 48} r="5" fill="#1684c6" />
              </g>
            );
          })}

          {/* Broad rounded golden crown */}
          <path
            d="
              M535 790
              Q540 680 610 650
              Q650 610 700 640
              Q750 610 790 650
              Q860 680 865 790
              Q700 745 535 790Z
            "
            fill="url(#gold9)"
            stroke="#29180d"
            strokeWidth="11"
          />

          <path
            d="M545 765 Q700 705 855 765 L860 820 Q700 760 540 820Z"
            fill="#e84c38"
            stroke="#2a170d"
            strokeWidth="8"
          />

          <path
            d="M550 770 Q700 720 850 770"
            fill="none"
            stroke="#ffe98a"
            strokeWidth="8"
          />

          {/* Crown jewels */}
          {Array.from({ length: 9 }).map((_, i) => (
            <circle
              key={`new-gem-${i}`}
              cx={570 + i * 32}
              cy={770 - Math.sin((i / 8) * Math.PI) * 22}
              r="10"
              fill={["#24c4c7", "#ffe65b", "#f4f1dc", "#e94c68"][i % 4]}
              stroke="#592a13"
              strokeWidth="3"
            />
          ))}

          {/* Compact, round black face */}
          <rect
            x="530"
            y="785"
            width="340"
            height="350"
            rx="140"
            fill="#090b1a"
            stroke="#3b304d"
            strokeWidth="13"
          />

          {/* Left large eye */}
          <ellipse
            cx="630"
            cy="915"
            rx="65"
            ry="75"
            fill="#fffdf5"
            stroke="#e74445"
            strokeWidth="9"
          />

          <circle cx="635" cy="920" r="32" fill="#09090c" />
          <circle cx="623" cy="905" r="10" fill="white" />

          {/* Right large eye */}
          <ellipse
            cx="770"
            cy="915"
            rx="65"
            ry="75"
            fill="#fffdf5"
            stroke="#e74445"
            strokeWidth="9"
          />

          <circle cx="765" cy="920" r="32" fill="#09090c" />
          <circle cx="753" cy="905" r="10" fill="white" />

          {/* Yellow and red tilak */}
          <path
            d="M675 825 V920 Q700 950 725 920 V825"
            fill="none"
            stroke="#ffd22f"
            strokeWidth="12"
            strokeLinecap="round"
          />

          <path
            d="M700 825 V915"
            stroke="#ec5232"
            strokeWidth="6"
          />

          {/* Cute red smile */}
          <path
            d="M620 1015 Q700 1090 780 1015 Q750 1070 700 1070 Q650 1070 620 1015Z"
            fill="#f42e32"
            stroke="#160b0b"
            strokeWidth="7"
          />

          {/* Small earrings */}
          {[540, 860].map((x, i) => (
            <g key={`earring-${i}`}>
              <circle
                cx={x}
                cy="950"
                r="20"
                fill="#ffc52d"
                stroke="#873d18"
                strokeWidth="5"
              />
              <circle cx={x} cy="950" r="8" fill="#e34c40" />
            </g>
          ))}

          {/* Compact traditional body - NO HANDS OR ARMS */}
          <path
            d="
              M565 1110
              Q700 1070 835 1110
              L850 1370
              Q700 1435 550 1370
              Z
            "
            fill="url(#yellowCloth9)"
            stroke="#7b4b19"
            strokeWidth="11"
          />

          {/* Body decoration */}
          <path
            d="M575 1140 Q700 1260 825 1140"
            fill="none"
            stroke="#e84b39"
            strokeWidth="18"
          />

          <path
            d="M590 1165 Q700 1275 810 1165"
            fill="none"
            stroke="#ffe24a"
            strokeWidth="13"
          />

          <path
            d="M610 1185 Q700 1270 790 1185"
            fill="none"
            stroke="#27bcca"
            strokeWidth="11"
          />

          {/* Colourful jewellery */}
          {Array.from({ length: 11 }).map((_, i) => (
            <circle
              key={`body-gem-${i}`}
              cx={600 + i * 20}
              cy={1180 + Math.sin((i / 10) * Math.PI) * 75}
              r="9"
              fill={["#f34b45", "#ffe34d", "#39c8d0", "#fff1c2"][i % 4]}
              stroke="#623316"
              strokeWidth="3"
            />
          ))}

          {/* Lower garment border */}
          <path
            d="M565 1350 Q700 1405 835 1350"
            fill="none"
            stroke="#e53c40"
            strokeWidth="18"
          />

          <path
            d="M580 1370 Q700 1420 820 1370"
            fill="none"
            stroke="#fff0a5"
            strokeWidth="8"
          />

          {/* Base - no separate human legs or hands */}
          <path
            d="M610 1390 Q700 1425 790 1390 L775 1440 Q700 1460 625 1440Z"
            fill="#e98b19"
            stroke="#7b4b19"
            strokeWidth="7"
          />
        </g>

        {/* Floating golden dust */}
        {Array.from({ length: 30 }).map((_, i) => (
          <circle
            key={`dust-${i}`}
            cx={(i * 137) % 1080}
            cy={300 + ((i * 173) % 1300) + Math.sin(frame / 12 + i) * 15}
            r={2 + (i % 3)}
            fill="#fff4c7"
            opacity={0.35 + Math.abs(Math.sin(frame / 12 + i)) * 0.5}
          />
        ))}
      </svg>
    </AbsoluteFill>
  );
};
