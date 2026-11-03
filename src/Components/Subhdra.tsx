import React from "react";

export type SubhadraProps = {
  x?: number;
  y?: number;
  scale?: number;
  opacity?: number;
};

export const Subhadra: React.FC<SubhadraProps> = ({
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
        <linearGradient id="subhadraGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff3a3" />
          <stop offset="35%" stopColor="#ffc52d" />
          <stop offset="75%" stopColor="#e98a12" />
          <stop offset="100%" stopColor="#9d4214" />
        </linearGradient>

        <linearGradient id="subhadraCloth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff594b" />
          <stop offset="100%" stopColor="#b8172b" />
        </linearGradient>

        <filter id="subhadraShadow">
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

      <g filter="url(#subhadraShadow)">

        {/* GOLDEN CROWN */}
        <path
          d="
            M330 745
            Q340 650 405 620
            Q445 565 490 605
            Q540 535 590 605
            Q635 565 675 620
            Q740 650 750 745
            Q540 700 330 745Z
          "
          fill="url(#subhadraGold)"
          stroke="#29180d"
          strokeWidth="12"
        />

        {/* RED CROWN BORDER */}
        <path
          d="M345 720 Q540 650 735 720 L745 785 Q540 715 335 785Z"
          fill="#d92e35"
          stroke="#2a170d"
          strokeWidth="9"
        />

        <path
          d="M350 730 Q540 670 730 730"
          fill="none"
          stroke="#ffe98a"
          strokeWidth="9"
        />

        {/* CROWN JEWELS */}
        {Array.from({ length: 11 }).map((_, i) => (
          <circle
            key={`gem-${i}`}
            cx={365 + i * 35}
            cy={735 - Math.sin((i / 10) * Math.PI) * 24}
            r="12"
            fill={["#24c4c7", "#ffe65b", "#f4f1dc", "#e94c68"][i % 4]}
            stroke="#592a13"
            strokeWidth="4"
          />
        ))}

        <path
          d="M540 590 Q505 635 540 675 Q575 635 540 590Z"
          fill="#e94c68"
          stroke="#8d3e16"
          strokeWidth="7"
        />

        {/* BODY AND RED CLOTHING */}
        <path
          d="
            M355 1080 Q540 1035 725 1080
            L785 1490 Q540 1570 295 1490Z
          "
          fill="url(#subhadraCloth)"
          stroke="#28170d"
          strokeWidth="13"
        />

        {/* LEFT ARM */}
        <path
          d="
            M375 1100 L255 1170 L235 1410
            Q265 1440 305 1405 L410 1250Z
          "
          fill="#e83b38"
          stroke="#26170e"
          strokeWidth="12"
        />

        {/* RIGHT ARM */}
        <path
          d="
            M705 1100 L825 1170 L845 1410
            Q815 1440 775 1405 L670 1250Z
          "
          fill="#e83b38"
          stroke="#26170e"
          strokeWidth="12"
        />

        {/* GOLDEN ARM ORNAMENTS */}
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

        {/* LOWER CLOTHING BORDER */}
        <path
          d="M315 1470 Q540 1530 765 1470"
          fill="none"
          stroke="#ffc52d"
          strokeWidth="22"
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

        {/* YELLOW FACE */}
        <rect
          x="300"
          y="735"
          width="480"
          height="440"
          rx="175"
          fill="#e8b936"
          stroke="#9b681e"
          strokeWidth="16"
        />

        <path
          d="M335 850 Q540 750 745 850"
          fill="none"
          stroke="#f7d66a"
          strokeWidth="12"
        />

        {/* LEFT LARGE EYE */}
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

        {/* RIGHT LARGE EYE */}
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

        {/* RED FOREHEAD TILAK */}
        <path
          d="M540 790 V920"
          stroke="#b51f2d"
          strokeWidth="17"
          strokeLinecap="round"
        />

        <circle
          cx="540"
          cy="790"
          r="15"
          fill="#fff0c8"
          stroke="#b51f2d"
          strokeWidth="5"
        />

        {/* DIVINE SMILE */}
        <path
          d="
            M405 1030 Q540 1140 675 1030
            Q640 1120 540 1120 Q440 1120 405 1030Z
          "
          fill="#b51f2d"
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
        <ellipse cx="465" cy="1530" rx="52" ry="19" fill="#b51f2d" />
        <ellipse cx="615" cy="1530" rx="52" ry="19" fill="#b51f2d" />

      </g>
    </g>
  );
};

export default Subhadra;