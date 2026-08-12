import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl uppercase tracking-wide sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-px w-16 bg-accent" />
      {description && <p className="mt-5 text-muted">{description}</p>}
    </motion.div>
  );
}
