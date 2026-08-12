import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { Calendar, ChevronDown, MapPin, Sparkles } from "lucide-react";
import { experiences, type ExperienceEntry } from "../data/content";
import { SectionHeading } from "../components/SectionHeading";
import { Timeline } from "../components/ui/timeline";
import { MovingBorderCard } from "../components/MovingBorderCard";
import { TextReveal } from "../components/ui/text-reveal";

function ExperienceTitle({ exp, index }: { exp: ExperienceEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-start gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.06, rotate: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white shadow-md md:h-20 md:w-20"
      >
        <img src={exp.companyLogo} alt={exp.company} className="h-full w-full object-contain" />
      </motion.div>
      <div>
        <span className="font-display text-xs tracking-[0.3em] text-muted">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="font-display text-2xl uppercase leading-tight tracking-wide text-foreground md:text-3xl">
          {exp.company}
        </h3>
        <div className="mt-2 inline-block rounded-full border border-accent/30 bg-card/90 px-3 py-1 shadow-sm backdrop-blur-sm">
          <TextReveal
            as="p"
            per="word"
            preset="fade-in-blur"
            speedReveal={2}
            trigger={inView}
            className="font-serif text-sm italic text-accent md:text-base"
          >
            {exp.role}
          </TextReveal>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceContent({ exp, defaultOpen }: { exp: ExperienceEntry; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);

  // Fills as this specific card transits the viewport — a per-entry scroll
  // indicator, distinct from the shared vertical timeline line.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.35"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <MovingBorderCard radius="1.25rem" duration={5500} className="shadow-sm" contentClassName="overflow-hidden p-5 sm:p-6">
        <div className="-mx-5 -mt-5 mb-4 h-[3px] overflow-hidden bg-border/50 sm:-mx-6 sm:-mt-6">
          <motion.div style={{ width: progressWidth }} className="h-full bg-gradient-to-r from-accent to-accent-2" />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-muted">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="text-accent-2" /> {exp.period}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-accent-2" /> {exp.location}
          </span>
        </div>

        <p className="mt-3 text-sm text-muted">{exp.summary}</p>

        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.97 }}
          className="mt-4 flex w-full items-center justify-between gap-3 rounded-xl border border-accent/25 bg-accent/[0.06] px-4 py-2.5 text-left transition-colors hover:bg-accent/[0.1]"
          aria-expanded={open}
        >
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
            <Sparkles size={14} />
            Key Contributions
          </span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-accent">
            <ChevronDown size={16} />
          </motion.span>
        </motion.button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2.5 border-t border-border pt-4">
                {exp.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="flex gap-2.5 text-sm text-foreground/85"
                  >
                    <span className="mt-1.5 text-accent">›</span>
                    {bullet}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/30 px-2.5 py-1 text-[11px] font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </MovingBorderCard>
    </motion.div>
  );
}

const timelineData = experiences.map((exp, i) => ({
  title: <ExperienceTitle exp={exp} index={i} />,
  content: <ExperienceContent exp={exp} defaultOpen={i === 0} />,
}));

export function Experience() {
  return (
    <section id="experience" className="relative bg-muted-bg/40 px-6 py-28 md:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          description="3+ years building production software and ML systems across autonomous vehicles, enterprise SaaS, and automotive QA."
        />
      </div>

      <Timeline data={timelineData} />
    </section>
  );
}
