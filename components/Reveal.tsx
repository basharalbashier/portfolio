"use client";

import { useScrollReveal } from "./useScrollReveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: "0" | "100" | "200" | "300" | "400";
}

const delayMap = {
  "0": "delay-[0ms]",
  "100": "delay-[100ms]",
  "200": "delay-[200ms]",
  "300": "delay-[300ms]",
  "400": "delay-[400ms]",
} as const;

export function Reveal({
  children,
  className = "",
  delay = "0",
}: RevealProps) {
  const { ref, ready, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${ready ? "reveal-ready" : ""} ${visible ? "reveal-visible" : ""} ${delayMap[delay]} ${className}`}
    >
      {children}
    </div>
  );
}
