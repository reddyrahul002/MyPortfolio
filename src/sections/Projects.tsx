import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { projects, type ProjectEntry } from "../data/content";
import { SectionHeading } from "../components/SectionHeading";
import { MovingBorderCard } from "../components/MovingBorderCard";
import { TiltCard } from "../components/ui/tilt-card";

// Bento spans, indexed to `projects` — the first project leads as a big
// feature tile, the rest fill in around it in a varied, magazine-style grid.
const bentoSpans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-2",
];

function ProjectModal({ project, onClose }: { project: ProjectEntry; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="fixed inset-x-0 bottom-0 top-auto max-h-[90vh] w-full overflow-y-auto rounded-t-3xl border-t border-border bg-card p-6 pb-8 shadow-2xl md:static md:max-h-[85vh] md:w-full md:max-w-2xl md:rounded-3xl md:border md:p-8"
      >
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-border md:hidden" aria-hidden="true" />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted shadow-sm transition-colors hover:border-accent hover:text-accent"
        >
          <X size={16} />
        </button>

        <div className="mb-5 aspect-[2/1] w-full overflow-hidden rounded-2xl border border-border">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        </div>

        <span
          className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            project.category === "Full-Stack / Systems"
              ? "bg-accent-2/10 text-accent-2"
              : "bg-accent/10 text-accent"
          }`}
        >
          {project.category}
        </span>

        <h3 className="mt-4 font-display text-3xl uppercase leading-tight tracking-wide sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">Overview</p>
        <p className="mt-2 font-serif text-lg italic leading-relaxed text-foreground/90">{project.description}</p>

        <div className="mt-6 h-px w-full bg-border" />

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted">What I Did</p>
        <ul className="mt-3 space-y-3">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
              <span className="mt-0.5 text-accent">›</span>
              {highlight}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted">Stack</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent/30 px-3 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectTile({ project, index, onOpen }: { project: ProjectEntry; index: number; onOpen: () => void }) {
  const isFeature = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className={`h-64 md:h-auto ${bentoSpans[index] ?? ""}`}
    >
      <button
        onClick={onOpen}
        aria-label={`View ${project.title}`}
        className="group block h-full w-full text-left"
      >
        <TiltCard className="h-full w-full" maxTilt={7} hoverScale={1.02}>
          <MovingBorderCard
            radius="1.25rem"
            duration={4200}
            className="h-full shadow-lg"
            contentClassName="h-full w-full overflow-hidden bg-transparent p-0"
          >
            <div className="relative h-full w-full" style={{ transform: "translateZ(0)" }}>
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />

              <span className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRight size={16} />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span
                  className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                    project.category === "Full-Stack / Systems"
                      ? "bg-accent-2/20 text-accent-2"
                      : "bg-accent/20 text-accent"
                  }`}
                >
                  {project.category}
                </span>
                <h3
                  className={`mt-2 font-display uppercase leading-tight tracking-wide text-white ${
                    isFeature ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"
                  }`}
                >
                  {project.title}
                </h3>
                {isFeature && (
                  <p className="mt-2 hidden max-w-md font-serif text-sm italic text-white/75 sm:block">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          </MovingBorderCard>
        </TiltCard>
      </button>
    </motion.div>
  );
}

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="projects" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="Full-stack systems and data science work — from real-time streaming pipelines to production microservices. Tilt to explore, click any card for the full story."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[210px] md:gap-5">
          {projects.map((project, index) => (
            <ProjectTile key={project.id} project={project} index={index} onOpen={() => setActiveId(project.id)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveId(null)} />}
      </AnimatePresence>
    </section>
  );
}
