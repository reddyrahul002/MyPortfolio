import type { ReactNode } from "react";
import { MovingBorder } from "./ui/moving-border";
import { cn } from "../lib/utils";

export function MovingBorderCard({
  children,
  className,
  contentClassName,
  duration = 4500,
  radius = "1rem",
}: {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  duration?: number;
  radius?: string;
}) {
  return (
    <div
      className={cn("relative overflow-hidden p-[1.5px]", className)}
      style={{ borderRadius: radius }}
    >
      {/* Constant accent-tinted ring so every card reads as "framed" even
          between passes of the animated glow below — the moving light alone
          was only visible for a fraction of its travel at any given moment. */}
      <div
        className="pointer-events-none absolute inset-0 border-[1.5px] border-[color:var(--border-glow-2)]/35"
        style={{ borderRadius: radius }}
      />
      <div className="pointer-events-none absolute inset-0" style={{ borderRadius: radius }}>
        <MovingBorder duration={duration} rx="8%" ry="12%">
          <div className="h-20 w-20 opacity-100 bg-[radial-gradient(var(--border-glow-1)_0%,var(--border-glow-2)_50%,transparent_75%)]" />
        </MovingBorder>
      </div>
      <div
        className={cn("relative h-full w-full border border-border/60 bg-card", contentClassName)}
        style={{ borderRadius: `calc(${radius} - 1.5px)` }}
      >
        {children}
      </div>
    </div>
  );
}
