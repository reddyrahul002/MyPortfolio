import { motion } from "framer-motion";
import { personal, stats } from "../data/content";
import { Counter } from "../components/Counter";
import { MovingBorderCard } from "../components/MovingBorderCard";

export function About() {
  return (
    <section id="about" className="relative bg-muted-bg/40 px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-accent"
          >
            About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-3 font-display text-5xl uppercase leading-[0.95] tracking-wide sm:text-6xl"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 h-px w-24 origin-left bg-accent"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 font-serif text-xl italic leading-relaxed text-foreground/90 sm:text-2xl"
          >
            "{personal.summary.split(". ")[0]}."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 leading-relaxed text-muted"
          >
            {personal.summary.split(". ").slice(1).join(". ")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-5"
        >
          {stats.map((stat) => (
            <MovingBorderCard
              key={stat.label}
              radius="1.25rem"
              duration={5000}
              className="shadow-sm transition-transform hover:-translate-y-1"
              contentClassName="p-6 text-center"
            >
              <div className="font-display text-4xl text-accent sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-muted">{stat.label}</p>
            </MovingBorderCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
