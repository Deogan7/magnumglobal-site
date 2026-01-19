"use client";

import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const animationClass = {
    "fade-up": "scroll-fade-up",
    "fade-left": "scroll-fade-left",
    "fade-right": "scroll-fade-right",
    scale: "scroll-scale",
  }[animation];

  const delayClass = delay > 0 ? `stagger-${Math.min(delay, 6)}` : "";

  return (
    <div
      ref={ref}
      className={`${animationClass} ${delayClass} ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
