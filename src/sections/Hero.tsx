import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { personal } from "../data/content";
import { HeroScene } from "../three/HeroScene";
import { TextReveal } from "../components/ui/text-reveal";
import { MovingBorder } from "../components/ui/moving-border";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.65 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6 md:px-10">
      <div className="absolute inset-0 bg-grid noise-mask opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] p-[1px] shadow-2xl"
      >
        {/* Animated glow tracing the card's border, matching the site accent */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
          <MovingBorder duration={8000} rx="4%" ry="6%">
            <div className="h-32 w-56 opacity-90 bg-[radial-gradient(#5eead4_0%,#fcd34d_35%,transparent_70%)]" />
          </MovingBorder>
        </div>

        <div className="relative overflow-hidden rounded-[1.92rem] border border-border/40 bg-[#0e0e0c]">
          <div className="absolute inset-0">
            <HeroScene />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0c] via-[#0e0e0c]/85 to-[#0e0e0c]/40 md:to-[#0e0e0c]/10" />

          <div className="relative grid grid-cols-1 items-center gap-10 px-6 py-16 sm:px-10 md:grid-cols-[1.2fr_0.8fr] md:px-14 md:py-24">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center gap-2 font-serif text-lg italic text-accent-2"
              >
                <span aria-hidden="true">✦</span> Full Stack Software Developer
              </motion.p>

              <div className="mt-4">
                <TextReveal
                  as="h1"
                  per="word"
                  preset="fade-in-blur"
                  delay={0.15}
                  speedReveal={1.4}
                  className="font-display text-6xl uppercase leading-[0.92] tracking-wide text-[#f3efe4] sm:text-7xl lg:text-8xl"
                >
                  {personal.name}
                </TextReveal>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 h-px w-28 origin-left bg-accent-2"
              />

              <div className="mt-6 max-w-xl">
                <TextReveal
                  as="p"
                  per="word"
                  preset="fade"
                  delay={0.6}
                  speedReveal={2.2}
                  className="text-base leading-relaxed text-[#f3efe4]/70 sm:text-lg"
                >
                  {personal.tagline}
                </TextReveal>
              </div>

              <motion.div variants={container} initial="hidden" animate="show" className="mt-9 flex flex-wrap items-center gap-4">
                <motion.a
                  variants={item}
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#08080a] shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03] active:scale-95"
                >
                  View my work <ArrowDown size={14} className="-rotate-90 transition-transform group-hover:translate-x-0.5" />
                </motion.a>
                <motion.a
                  variants={item}
                  href={personal.resumeUrl}
                  download
                  className="flex items-center gap-2 rounded-full border border-[#f3efe4]/25 px-6 py-3 text-sm font-semibold text-[#f3efe4] backdrop-blur transition-colors hover:border-accent-2"
                >
                  <Download size={16} /> Resume
                </motion.a>
                <motion.a
                  variants={item}
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-[#f3efe4]/70 transition-colors hover:text-[#f3efe4]"
                >
                  <Mail size={16} /> Get in touch
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              className="relative mx-auto hidden aspect-square w-full max-w-xs md:block"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/50 to-accent-2/50 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-[#f3efe4]/20 shadow-2xl">
                <img src={personal.photo} alt={personal.name} className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
