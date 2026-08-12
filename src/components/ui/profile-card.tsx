import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { MovingBorderCard } from "@/components/MovingBorderCard";

export interface ProfileCardProps {
  institution: string;
  degree: string;
  location: string;
  period: string;
  electives: string[];
  logoUrl: string;
  className?: string;
}

export function ProfileCard(props: ProfileCardProps) {
  const { institution, degree, location, period, electives, logoUrl, className } = props;

  const detailRow = (
    <>
      <h2 className="font-display text-2xl uppercase leading-tight tracking-wide text-foreground sm:text-3xl">
        {institution}
      </h2>
      <p className="mt-1 font-serif text-base italic text-accent">{degree}</p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-muted">
        <span className="flex items-center gap-1.5">
          <Calendar size={13} className="text-accent-2" /> {period}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={13} className="text-accent-2" /> {location}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 md:flex-nowrap">
        {electives.map((elective) => (
          <span
            key={elective}
            className="whitespace-nowrap rounded-full border border-accent/25 bg-accent/[0.07] px-2.5 py-1.5 text-[11px] font-semibold text-accent"
          >
            {elective}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <div className={cn("mx-auto w-full max-w-5xl px-4", className)}>
      {/* Desktop — logo leads, info panel sits alongside (no overlap) so the
          logo can read as the dominant element. */}
      <div className="hidden items-center gap-6 md:flex lg:gap-8">
        <div className="flex h-72 w-72 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-border bg-white shadow-lg lg:h-80 lg:w-80">
          <img src={logoUrl} alt={institution} className="h-full w-full object-contain p-6" draggable={false} />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1"
        >
          <MovingBorderCard radius="1.5rem" duration={5500} className="shadow-xl" contentClassName="p-6">
            {detailRow}
          </MovingBorderCard>
        </motion.div>
      </div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-sm md:hidden"
      >
        <div className="mb-5 flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
          <img src={logoUrl} alt={institution} className="h-full w-full object-contain p-10" draggable={false} />
        </div>

        <MovingBorderCard radius="1.5rem" duration={5500} className="shadow-xl" contentClassName="p-6">
          {detailRow}
        </MovingBorderCard>
      </motion.div>
    </div>
  );
}
