"use client";

import { useEffect, useState } from "react";

export function GraffitiTag({
  text,
  className = "",
  color = "text-pink-500",
  rotation = -5
}: {
  text: string;
  className?: string;
  color?: string;
  rotation?: number;
}) {
  return (
    <div
      className={`inline-block ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <span className={`tag-text text-4xl ${color} drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)]`}>
        {text}
      </span>
    </div>
  );
}

export function SprayPaintSplash({
  className = "",
  position = { top: "10%", left: "10%" },
  size = 200,
  color = "rgba(236, 72, 153, 0.4)"
}: {
  className?: string;
  position?: { top?: string; left?: string; right?: string; bottom?: string };
  size?: number;
  color?: string;
}) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        ...position,
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(40px)",
        transform: "rotate(45deg)",
      }}
    />
  );
}

export function DripText({
  children,
  className = "",
  color = "text-yellow-400"
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className={`graffiti-text text-6xl font-bold ${color} relative z-10`}>
        {children}
      </span>
      <div
        className="absolute -bottom-3 left-0 w-full h-8"
        style={{
          background: `linear-gradient(to bottom, currentColor, transparent)`,
          clipPath: `polygon(
            0% 0%, 8% 60%, 15% 0%, 23% 40%, 30% 0%,
            38% 70%, 45% 0%, 53% 50%, 60% 0%, 68% 40%,
            75% 0%, 83% 60%, 90% 0%, 95% 30%, 100% 0%
          )`,
          color: color.replace("text-", ""),
        }}
      />
    </div>
  );
}

export function GraffitiBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const tags = [
    { text: "FRESH", top: "5%", left: "3%", color: "text-cyan-400", rotation: -15 },
    { text: "DOPE", top: "15%", right: "5%", color: "text-purple-500", rotation: 8 },
    { text: "STREET", bottom: "20%", left: "2%", color: "text-orange-500", rotation: -8 },
    { text: "URBAN", top: "40%", right: "3%", color: "text-green-500", rotation: 12 },
    { text: "STYLE", bottom: "10%", right: "4%", color: "text-pink-500", rotation: -10 },
    { text: "WILD", top: "60%", left: "1%", color: "text-yellow-500", rotation: 5 },
  ];

  const splashes = [
    { top: "10%", left: "15%", size: 300, color: "rgba(59, 130, 246, 0.2)" },
    { top: "30%", right: "10%", size: 250, color: "rgba(236, 72, 153, 0.2)" },
    { bottom: "25%", left: "20%", size: 280, color: "rgba(251, 191, 36, 0.2)" },
    { top: "50%", right: "25%", size: 200, color: "rgba(34, 197, 94, 0.2)" },
    { bottom: "15%", right: "15%", size: 320, color: "rgba(147, 51, 234, 0.2)" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Paint splashes */}
      {splashes.map((splash, i) => (
        <SprayPaintSplash key={i} {...splash} />
      ))}

      {/* Graffiti tags */}
      {tags.map((tag, i) => (
        <div
          key={i}
          className="absolute opacity-20"
          style={{
            top: tag.top,
            bottom: tag.bottom,
            left: tag.left,
            right: tag.right
          }}
        >
          <GraffitiTag
            text={tag.text}
            color={tag.color}
            rotation={tag.rotation}
          />
        </div>
      ))}
    </div>
  );
}

export function StencilText({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`street-text ${className}`}>
      {children}
    </span>
  );
}

export function NeonText({
  children,
  className = "",
  color = "text-cyan-400"
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={`urban-text ${color} ${className}`}
      style={{
        textShadow: `
          0 0 10px currentColor,
          0 0 20px currentColor,
          0 0 30px currentColor,
          0 0 40px currentColor
        `
      }}
    >
      {children}
    </span>
  );
}

export function GraffitiArrow({
  direction = "right",
  className = ""
}: {
  direction?: "right" | "left" | "up" | "down";
  className?: string;
}) {
  const rotations = {
    right: 0,
    down: 90,
    left: 180,
    up: 270
  };

  return (
    <div
      className={`inline-block ${className}`}
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 20 L40 20 L30 10 M40 20 L30 30"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]"
        />
      </svg>
    </div>
  );
}

export function TapeSticker({
  children,
  className = "",
  rotation = -5
}: {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
}) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="bg-yellow-100 px-4 py-2 shadow-md">
        {children}
      </div>
      <div className="absolute -top-1 -left-1 w-full h-full bg-yellow-200 opacity-30 -z-10" />
    </div>
  );
}

export function PaintDrip({
  width = 30,
  height = 60,
  color = "#dc2675",
  className = ""
}: {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <svg width={width} height={height} viewBox="0 0 30 60" fill="none">
        <path
          d="M15 0 Q15 40 15 45 Q15 55 10 58 Q5 60 3 55 Q1 50 5 48 Q10 46 15 50 Q20 54 25 52 Q29 50 27 45 Q25 40 15 45 L15 0"
          fill={color}
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
