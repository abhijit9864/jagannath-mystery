import React from "react";

export type BalabhadraProps = {
  x?: number;
  y?: number;
  scale?: number;
  opacity?: number;
};

export const Balabhadra: React.FC<BalabhadraProps> = ({
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
        <linearGradient id="balabhadraGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff3d0" />
          <stop offset="35%" stopColor="#e8e3d7" />
          <stop offset="75%" stopColor="#c9c2b5" />
          <stop offset="100%" stopColor="#817767" />
        </linearGradient>

        <linearGradient id="balabhadraCloth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffdf5" />
          <stop offset="100%" stopColor="#dedbd1" />
        </linearGradient>

        <filter id="balabhadraShadow">
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

      <g filter="url(#balabhadraShadow)">

        {/* SILVER-WHITE CROWN */}
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
          fill="url(#balabhadraGold)"
          stroke="#554c40"
          strokeWidth="12"
        />

        {/* BLUE AND GOLD CROWN BORDER */}
        <path
          d="M330 720 Q540 645 750 720 L760 785 Q540 710 320 785Z"
          fill="#287b9a"
          stroke="#30251d"
          strokeWidth="9"
        />

        <path
          d="M340 730 Q540 665 740 730"
          fill="none"
          stroke="#fff8e9"
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
            stroke="#554c40"
            strokeWidth="4"
          />
        ))}

        <path
          d="M540 585 Q505 635 540 670 Q575 635 540 585Z"
          fill="#287b9a"
          stroke="#554c40"
          strokeWidth="7"
        />

        {/* BODY AND WHITE CLOTHING */}
        <path
          d="
            M355 1080 Q540 1035 725 1080
            L785 1490 Q540 1570 295 1490Z
          "
          fill="url(#balabhadraCloth)"
          stroke="#30251d"
          strokeWidth="13"
        />

        {/* LEFT ARM */}
        <path
          d="
            M375 1100 L255 1170 L235 1410
            Q265 1440 305 1405 L410 1250Z
          "
          fill="#f2eee5"
          stroke="#30251d"
          strokeWidth="12"
        />

        {/* RIGHT ARM */}
        <path
          d="
            M705 1100 L825 1170 L845 1410
            Q815 1440 775 1405 L670 1250Z
          "
          fill="#f2eee5"
          stroke="#30251d"
          strokeWidth="12"
        />

        {/* ARM ORNAMENTS */}
        <path
          d="M263 1210 L350 1185 M730 1185 L817 1210"
          stroke="#287b9a"
          strokeWidth="26"
        />

        <path
          d="M285 1198 L285 1230 M795 1198 L795 1230"
          stroke="#fff8e9"
          strokeWidth="10"
        />

        {/* LOWER CLOTHING BORDER */}
        <path
          d="M315 1470 Q540 1530 765 1470"
          fill="none"
          stroke="#287b9a"
          strokeWidth="20"
        />

        {/* NECKLACES */}
        <path
          d="M375 1140 Q540 1310 705 1140"
          fill="none"
          stroke="#287b9a"
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
            stroke="#554c40"
            strokeWidth="3"
          />
        ))}

        {/* WHITE FACE */}
        <rect
          x="300"
          y="735"
          width="480"
          height="440"
          rx="175"
          fill="#f1eee5"
          stroke="#9d9587"
          strokeWidth="16"
        />

        <path
          d="M335 850 Q540 750 745 850"
          fill="none"
          stroke="#d2cabc"
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

        {/* BLUE BALABHADRA FOREHEAD MARK */}
        <path
          d="M510 790 V920"
          stroke="#287b9a"
          strokeWidth="15"
          strokeLinecap="round"
        />

        <path
          d="M540 790 V920"
          stroke="#287b9a"
          strokeWidth="7"
        />

        <path
          d="M475 825 Q540 875 605 825"
          fill="none"
          stroke="#287b9a"
          strokeWidth="9"
        />

        {/* DIVINE SMILE */}
        <path
          d="
            M405 1030 Q540 1140 675 1030
            Q640 1120 540 1120 Q440 1120 405 1030Z
          "
          fill="#b43b35"
          stroke="#30251d"
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
              fill="#e8e3d7"
              stroke="#d5a83c"
              strokeWidth="6"
            />

            <circle cx={earX} cy="955" r="10" fill="#287b9a" />
            <circle cx={earX - 5} cy="950" r="4" fill="#fff2a0" />
          </g>
        ))}

        {/* PLOUGH SYMBOL ON CHEST */}
        <g
          transform="translate(540 1335)"
          fill="none"
          stroke="#287b9a"
          strokeWidth="12"
          strokeLinecap="round"
        >
          <path d="M0 -35 V40" />
          <path d="M0 0 Q65 0 85 -65" />
          <path d="M0 0 Q-65 0 -85 -65" />
        </g>

        {/* FEET */}
        <ellipse cx="465" cy="1530" rx="52" ry="19" fill="#dedbd1" />
        <ellipse cx="615" cy="1530" rx="52" ry="19" fill="#dedbd1" />

      </g>
    </g>
  );
};

export default Balabhadra;