import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

// Scene 7 — Jagannath Temple Rasoi: the traditional seven-pot cooking mystery.
// This scene intentionally shows ONLY the kitchen, pots, cooks and fire.
// No temple exterior or temple shikhara appears.
export const Scene7SevenPots: React.FC = () => {
  const frame = useCurrentFrame();

  const fireFlicker = Math.sin(frame * 0.42) * 8 + Math.sin(frame * 0.19) * 5;
  const flameScale = 1 + Math.sin(frame * 0.35) * 0.08;
  const steamOpacity = interpolate(frame, [0, 25, 300], [0.15, 0.8, 0.8], {
    extrapolateRight: "clamp",
  });
  const topGlow = interpolate(frame, [100, 150, 190], [0, 0.85, 0.85], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const firstLine = interpolate(frame, [0, 15, 82, 100], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const thoughtfulLine = interpolate(frame, [85, 105, 158, 175], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const revealLine = interpolate(frame, [165, 190, 300], [0, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const potYs = [690, 830, 970, 1110, 1250, 1390, 1530];
  const potWidths = [310, 335, 360, 385, 410, 435, 460];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#211712",
        overflow: "hidden",
        fontFamily: "Noto Sans Devanagari, sans-serif",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1080 1920"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="kitchenWall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#30241f" />
            <stop offset="60%" stopColor="#594033" />
            <stop offset="100%" stopColor="#241914" />
          </linearGradient>
          <linearGradient id="earthenPot" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#713b28" />
            <stop offset="24%" stopColor="#b86d45" />
            <stop offset="50%" stopColor="#df9a67" />
            <stop offset="76%" stopColor="#a85e3b" />
            <stop offset="100%" stopColor="#623322" />
          </linearGradient>
          <linearGradient id="potRim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0b27c" />
            <stop offset="100%" stopColor="#8a482d" />
          </linearGradient>
          <radialGradient id="fireGlow">
            <stop offset="0%" stopColor="#ffd77c" stopOpacity=".95" />
            <stop offset="55%" stopColor="#f07832" stopOpacity=".48" />
            <stop offset="100%" stopColor="#f07832" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6b4936" />
            <stop offset="100%" stopColor="#241712" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="28" />
          </filter>
          <filter id="potShadow" x="-30%" y="-30%" width="160%" height="170%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="9" />
            <feOffset dx="4" dy="10" />
            <feComponentTransfer>
              <feFuncA type="linear" slope=".55" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Enclosed traditional kitchen interior */}
        <rect width="1080" height="1920" fill="url(#kitchenWall)" />
        <path d="M0 0 H1080 V360 Q820 420 540 370 Q260 420 0 360Z" fill="#160f0d" opacity=".45" />
        <path d="M0 420 Q250 370 520 420 T1080 410" stroke="#8c6246" strokeWidth="7" opacity=".35" fill="none" />
        <path d="M0 500 H1080 M0 530 H1080" stroke="#a47a58" strokeWidth="3" opacity=".14" />
        <rect x="0" y="1640" width="1080" height="280" fill="url(#floor)" />
        <path d="M0 1650 Q540 1590 1080 1650" fill="none" stroke="#bd8b61" strokeWidth="8" opacity=".35" />

        {/* Warm firelight behind the stack */}
        <ellipse cx="540" cy="1490" rx="390" ry="340" fill="url(#fireGlow)" opacity=".8" filter="url(#softGlow)" />

        {/* Kitchen shelves and stored earthenware */}
        <path d="M70 760 H310 V785 H70Z M770 760 H1010 V785 H770Z" fill="#3c271d" stroke="#9a6948" strokeWidth="8" />
        {[0, 1, 2].map((i) => (
          <g key={`shelf-left-${i}`} transform={`translate(${105 + i * 72} 710)`}>
            <path d="M0 38 Q-4 8 22 0 Q48 8 44 38 L40 58 H4Z" fill="#8b4d32" stroke="#c58a5d" strokeWidth="4" />
            <ellipse cx="22" cy="5" rx="22" ry="7" fill="#d49a6a" />
          </g>
        ))}
        {[0, 1, 2].map((i) => (
          <g key={`shelf-right-${i}`} transform={`translate(${800 + i * 65} 710)`}>
            <path d="M0 38 Q-4 8 22 0 Q48 8 44 38 L40 58 H4Z" fill="#8b4d32" stroke="#c58a5d" strokeWidth="4" />
            <ellipse cx="22" cy="5" rx="22" ry="7" fill="#d49a6a" />
          </g>
        ))}

        {/* Seven pots stacked vertically, each with a visible rounded belly and rim */}
        <g filter="url(#potShadow)">
          {potYs.map((y, i) => {
            const w = potWidths[i];
            const h = 145;
            const x = 540 - w / 2;
            return (
              <g key={`pot-${i}`} transform={`translate(${x} ${y})`}>
                <path
                  d={`M 18 18 Q 10 4 38 0 L ${w - 38} 0 Q ${w - 10} 4 ${w - 18} 18
                      Q ${w - 2} 48 ${w - 15} 91
                      Q ${w - 28} 137 ${w / 2} ${h}
                      Q 28 137 15 91 Q 2 48 18 18 Z`}
                  fill="url(#earthenPot)"
                  stroke="#4b291d"
                  strokeWidth="9"
                />
                <ellipse cx={w / 2} cy="13" rx={w / 2 - 16} ry="17" fill="url(#potRim)" stroke="#6c3826" strokeWidth="7" />
                <ellipse cx={w / 2} cy="13" rx={w / 2 - 29} ry="8" fill="#382017" opacity=".9" />
                <path d={`M 35 42 Q ${w / 2} 58 ${w - 35} 42`} fill="none" stroke="#f4bd8a" strokeWidth="5" opacity=".36" />
                <path d={`M 28 96 Q ${w / 2} 119 ${w - 28} 96`} fill="none" stroke="#542d20" strokeWidth="7" opacity=".38" />
                {/* Small clay handles */}
                <path d={`M 12 55 Q -24 42 -22 68 Q -18 91 15 82`} fill="none" stroke="#9b5939" strokeWidth="13" />
                <path d={`M ${w - 12} 55 Q ${w + 24} 42 ${w + 22} 68 Q ${w + 18} 91 ${w - 15} 82`} fill="none" stroke="#9b5939" strokeWidth="13" />
                {/* Top pot gets a warm highlight when the mystery is revealed */}
                {i === 0 && (
                  <ellipse cx={w / 2} cy="70" rx={w / 2 - 20} ry="65" fill="#ffd77c" opacity={topGlow * 0.23} />
                )}
              </g>
            );
          })}
        </g>

        {/* Steam rising from the uppermost pot */}
        {[0, 1, 2].map((i) => {
          const drift = Math.sin(frame / 13 + i * 1.8) * 24;
          const rise = (frame * 1.8 + i * 90) % 180;
          return (
            <path
              key={`steam-${i}`}
              d={`M ${440 + i * 95 + drift} ${680 - rise} C ${390 + i * 100 + drift} ${625 - rise} ${500 + i * 80 + drift} ${590 - rise} ${450 + i * 95 + drift} ${535 - rise}`}
              fill="none"
              stroke="#f7e6d1"
              strokeWidth="13"
              strokeLinecap="round"
              opacity={steamOpacity * (0.45 + (i % 2) * 0.2)}
            />
          );
        })}

        {/* Low wood-fired chulha beneath the lowest pot */}
        <path d="M300 1640 L350 1535 Q540 1490 730 1535 L780 1640Z" fill="#38241c" stroke="#a16a43" strokeWidth="12" />
        <path d="M360 1630 Q540 1560 720 1630" fill="none" stroke="#d18a4f" strokeWidth="10" />
        <path d="M420 1630 Q540 1590 660 1630 L625 1690 H455Z" fill="#120d0b" />
        <ellipse cx="540" cy="1600" rx="175" ry="100" fill="url(#fireGlow)" opacity=".8" />
        <g transform={`translate(540 1588) scale(${flameScale})`}>
          <path d={`M-95 65 Q-140 5 -70 -55 Q-75 -5 -25 -20 Q-45 -90 15 -145 Q8 -65 65 -45 Q130 10 82 65Z`} fill="#e64b1d" />
          <path d={`M-52 65 Q-78 22 -28 -25 Q-30 15 8 -2 Q12 -55 42 -80 Q38 -22 65 10 Q76 45 45 65Z`} fill="#ffad35" />
          <path d="M-18 65 Q-36 32 -5 5 Q-4 33 20 20 Q35 45 15 65Z" fill="#fff0a3" />
        </g>
        <path d="M280 1670 L420 1630 M800 1670 L660 1630" stroke="#5b3928" strokeWidth="24" strokeLinecap="round" />

        {/* A few cut logs in front of the stove */}
        <path d="M330 1740 L520 1680" stroke="#6e432c" strokeWidth="32" strokeLinecap="round" />
        <path d="M560 1690 L760 1750" stroke="#8b5534" strokeWidth="30" strokeLinecap="round" />
        <path d="M340 1734 L510 1682 M570 1694 L748 1744" stroke="#d0945d" strokeWidth="5" opacity=".5" />

        {/* Warm floating sparks */}
        {Array.from({ length: 18 }).map((_, i) => {
          const x = 390 + ((i * 73) % 300);
          const y = 1490 - ((frame * (1.2 + (i % 3) * 0.3) + i * 61) % 390);
          return <circle key={`spark-${i}`} cx={x} cy={y} r={2 + (i % 3)} fill="#ffd27a" opacity={0.25 + Math.abs(Math.sin(frame / 8 + i)) * 0.65} />;
        })}
      </svg>

    </AbsoluteFill>
  );
};
