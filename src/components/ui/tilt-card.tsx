"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

export interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees on each axis. */
  maxTilt?: number;
  /** Scale applied while hovered. */
  hoverScale?: number;
  glare?: boolean;
}

/**
 * A mouse-reactive 3D tilt wrapper — the card leans away from the cursor in
 * real perspective space and carries a soft light-following glare, the
 * classic "premium interactive card" treatment.
 */
export function TiltCard({ children, className, maxTilt = 10, hoverScale = 1.03, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 220, damping: 20, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), springConfig);
  const scale = useSpring(1, springConfig);

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${useTransform(x, (v) => `${v * 100}%`)} ${useTransform(
    y,
    (v) => `${v * 100}%`
  )}, rgba(255,255,255,0.22), transparent 55%)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleEnter = () => scale.set(hoverScale);

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
    scale.set(1);
  };

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden="true"
            style={{ background: glareBackground }}
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
          />
        )}
      </motion.div>
    </div>
  );
}
