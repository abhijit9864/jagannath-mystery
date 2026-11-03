import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedJagannathTemple } from "./AnimatedJagannathTemple";

const GOLD = "#FFD45A";
const WHITE = "#FFFFFF";

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

// Smooth word-by-word narration highlighting
const WordHighlight: React.FC<{
  words: string[];
  startFrame: number;
  interval?: number;
  fontSize: number;
}> = ({ words, startFrame, interval = 6, fontSize }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        columnGap: 10,
        rowGap: 9,
        fontSize,
        fontWeight: 800,
        fontFamily: "Noto Sans Devanagari, Mangal, sans-serif",
        lineHeight: 1.65,
      }}
    >
      {words.map((word, i) => {
        const localFrame = frame - startFrame - i * interval;

        const opacity = interpolate(localFrame, [0, 5], [0, 1], clamp);
        const highlight = interpolate(localFrame, [0, 5, 11], [0, 1, 0], clamp);
        const scale = interpolate(localFrame, [0, 5, 11], [0.88, 1.09, 1], clamp);

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity,
              color: highlight > 0.15 ? GOLD : WHITE,
              transform: `scale(${scale})`,
              textShadow:
                highlight > 0.15
                  ? "0 0 18px rgba(255,190,40,0.9)"
                  : "0 3px 12px rgba(0,0,0,0.95)",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const headingOpacity = interpolate(frame, [10, 35], [0, 1], clamp);

  const bottomOpacity = interpolate(frame, [125, 150], [0, 1], clamp);


  // Moving atmospheric clouds
  const cloud1 = interpolate(frame, [0, 300], [-100, 180], clamp);
  const cloud2 = interpolate(frame, [0, 300], [100, -140], clamp);
  const cloud3 = interpolate(frame, [0, 300], [-50, 120], clamp);

  // Animated golden light
  const lightPulse = 0.20 + Math.sin(frame / 18) * 0.055;

  const bottomWords =
    "आखिर क्या हैं भगवान जगन्नाथ पुरी के वो आठ रहस्य? वीडियो को अंत तक जरूर देखना...".split(" ");

  const subtitleWords =
    "जहाँ विज्ञान भी कई सवालों पर सिर खुजलाने लगता है!".split(" ");

  // Floating question marks
  const questions = [
    { top: 500, right: 70, size: 96, delay: 0 },
    { top: 700, right: 125, size: 128, delay: 15 },
    { top: 910, right: 55, size: 88, delay: 30 },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#21133f",
        overflow: "hidden",
      }}
    >
      {/* FULLY CODE-GENERATED ANIMATED JAGANNATH TEMPLE — NO PHOTO */}
      <AnimatedJagannathTemple />

      {/* Cinematic dark grading */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(30,14,62,0.48) 0%, rgba(65,31,92,0.20) 30%, rgba(132,72,104,0.08) 52%, rgba(35,18,55,0.35) 76%, rgba(12,8,25,0.92) 100%)",
        }}
      />

      {/* Golden light behind temple */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 52%, rgba(255,190,85,${lightPulse}), transparent 66%), linear-gradient(180deg, rgba(91,53,145,0.24), rgba(255,177,91,0.10) 58%, rgba(25,12,45,0.28))`,
          mixBlendMode: "screen",
        }}
      />

      {/* Moving atmospheric cloud layer 1 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-35%",
          width: "170%",
          height: 380,
          background:
            "radial-gradient(ellipse, rgba(190,145,205,0.30), rgba(100,66,135,0.15) 45%, transparent 72%)",
          filter: "blur(55px)",
          transform: `translateX(${cloud1}px)`,
        }}
      />

      {/* Moving atmospheric cloud layer 2 */}
      <div
        style={{
          position: "absolute",
          top: "52%",
          left: "-30%",
          width: "170%",
          height: 330,
          background:
            "radial-gradient(ellipse, rgba(151,112,177,0.30), rgba(83,58,120,0.12), transparent 70%)",
          filter: "blur(50px)",
          transform: `translateX(${cloud2}px)`,
        }}
      />

      {/* Moving foreground mist */}
      <div
        style={{
          position: "absolute",
          bottom: "23%",
          left: "-30%",
          width: "170%",
          height: 240,
          background:
            "radial-gradient(ellipse, rgba(255,183,111,0.22), rgba(139,91,159,0.10), transparent 70%)",
          filter: "blur(40px)",
          transform: `translateX(${cloud3}px)`,
        }}
      />

      {/* Subtle cinematic light rays */}
      <AbsoluteFill
        style={{
          background:
            "repeating-conic-gradient(from 10deg at 52% 42%, transparent 0deg, rgba(255,196,90,0.055) 3deg, transparent 7deg)",
          opacity: interpolate(frame, [15, 65], [0, 0.7], clamp),
          mixBlendMode: "screen",
        }}
      />

      {/* Floating golden particles */}
      {Array.from({ length: 22 }).map((_, i) => {
        const x = (i * 137) % 100;
        const y = (i * 83) % 100;
        const movement = Math.sin((frame + i * 17) / 14) * 24;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: i % 3 === 0 ? 5 : 3,
              height: i % 3 === 0 ? 5 : 3,
              borderRadius: "50%",
              background: GOLD,
              opacity: 0.25 + Math.abs(Math.sin(frame / 15 + i)) * 0.5,
              boxShadow: "0 0 12px #FFD45A",
              transform: `translateY(${movement}px)`,
            }}
          />
        );
      })}

      {/* FLOATING QUESTION MARKS RIGHT */}
      {questions.map((q, i) => {
        const opacity = interpolate(
          frame,
          [25 + q.delay, 45 + q.delay],
          [0, 0.85],
          clamp
        );

        const movement = Math.sin((frame + q.delay) / 12) * 22;
        const rotation = Math.sin((frame + i * 20) / 20) * 10;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: q.top,
              right: q.right,
              fontSize: q.size,
              fontWeight: 900,
              color: i === 1 ? GOLD : WHITE,
              opacity,
              transform: `translateY(${movement}px) rotate(${rotation}deg)`,
              textShadow: "0 0 28px rgba(255,190,40,0.8)",
              fontFamily: "Arial, sans-serif",
            }}
          >
            ?
          </div>
        );
      })}

      {/* BOTTOM DARK PANEL */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 590,
          background:
            "linear-gradient(180deg, transparent, rgba(0,0,0,0.72) 30%, rgba(0,0,0,0.98) 100%)",
          opacity: bottomOpacity,
        }}
      />
    </AbsoluteFill>
  );
};
