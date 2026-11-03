import React from "react";

export type JagannathProps = {
  x?: number;
  y?: number;
  scale?: number;
  opacity?: number;
};

export const Jagannath: React.FC<JagannathProps> = ({
  x = 0,
  y = 0,
  scale = 1,
  opacity = 1,
}) => {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      opacity={opacity}
    >
      <defs>
        <linearGradient id="jagannathGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff3a3" />
          <stop offset="35%" stopColor="#ffc52d" />
          <stop offset="75%" stopColor="#e98a12" />
          <stop offset="100%" stopColor="#9d4214" />
        </linearGradient>

        <linearGradient id="jagannathCloth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffdc48" />
          <stop offset="100%" stopColor="#ed8508" />
        </linearGradient>

        <filter id="jagannathShadow">
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
      </defs>

      <g filter="url(#jagannathShadow)">

        {/* FIVE PEACOCK FEATHERS */}
        {[0, 1, 2, 3, 4].map((i) => {
          const featherX = 335 + i * 102;
          const top = i === 2 ? 430 : i % 2 === 0 ? 465 : 490;

          return (
            <g key={`feather-${i}`}>
              <path
                d={`M${featherX} 700 Q${featherX - 45} ${top + 40} ${featherX} ${top}
                Q${featherX + 45} ${top + 40} ${featherX} 700`}
                fill="#168b49"
                stroke="#10251b"
                strokeWidth="7"
              />

              <ellipse
                cx={featherX}
                cy={top + 45}
                rx="23"
                ry="31"
                fill="#0878d0"
                stroke="#123c58"
                strokeWidth="4"
              />

              <ellipse
                cx={featherX}
                cy={top + 45}
                rx="13"
                ry="19"
                fill="#ffcf35"
              />

              <circle
                cx={featherX}
                cy={top + 45}
                r="8"
                fill="#1684c6"
              />
            </g>
          );
        })}

        {/* GOLDEN CROWN */}
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
          fill="url(#jagannathGold)"
          stroke="#29180d"
          strokeWidth="12"
        />

        {/* RED CROWN BORDER */}
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

        {/* CROWN JEWELS */}
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

        {/* BODY AND YELLOW CLOTH */}
        <path
          d="
            M355 1080 Q540 1035 725 1080
            L785 1490 Q540 1570 295 1490Z
          "
          fill="url(#jagannathCloth)"
          stroke="#28170d"
          strokeWidth="13"
        />

        {/* LEFT ARM */}
        <path
          d="
            M375 1100 L255 1170 L235 1410
            Q265 1440 305 1405 L410 1250Z
          "
          fill="#ffb51e"
          stroke="#26170e"
          strokeWidth="12"
        />

        {/* RIGHT ARM */}
        <path
          d="
            M705 1100 L825 1170 L845 1410
            Q815 1440 775 1405 L670 1250Z
          "
          fill="#ffb51e"
          stroke="#26170e"
          strokeWidth="12"
        />

        {/* ARM BANDS */}
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

        {/* NECKLACES */}
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

        {/* LOWER CLOTH BORDER */}
        <path
          d="M315 1470 Q540 1530 765 1470"
          fill="none"
          stroke="#e53c40"
          strokeWidth="20"
        />

        {/* FACE - DRAWN IN FRONT OF BODY */}
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

        {/* LEFT LARGE WHITE EYE */}
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

        {/* RIGHT LARGE WHITE EYE */}
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

        {/* YELLOW AND RED TILAK */}
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

        {/* DIVINE SMILE */}
        <path
          d="
            M405 1030 Q540 1140 675 1030
            Q640 1120 540 1120 Q440 1120 405 1030Z
          "
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

        {/* GOLDEN EARRINGS */}
        {[330, 750].map((earX, i) => (
          <g key={`earring-${i}`}>
            <circle
              cx={earX}
              cy="955"
              r="25"
              fill="#ffc52d"
              stroke="#873d18"
              strokeWidth="6"
            />

            <circle cx={earX} cy="955" r="10" fill="#e34c40" />
            <circle cx={earX - 5} cy="950" r="4" fill="#fff2a0" />
          </g>
        ))}

        {/* FEET */}
        <ellipse cx="465" cy="1530" rx="52" ry="19" fill="#14101b" />
        <ellipse cx="615" cy="1530" rx="52" ry="19" fill="#14101b" />

      </g>
    </g>
  );
};

export default Jagannath;