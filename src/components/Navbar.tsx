import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      {/* Soft scrim behind the floating bar so page content never reads as
          flush with the very top edge of the viewport. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-36 bg-gradient-to-b from-background/85 to-transparent" />

      <nav
        className={cn(
          "relative flex w-full max-w-4xl items-center justify-between gap-3 rounded-full border px-3 py-2 backdrop-blur-2xl transition-all duration-300 sm:px-4",
          scrolled
            ? "border-border/80 bg-[var(--nav-bg)] shadow-[0_8px_30px_-8px_rgba(0,0,0,0.25)]"
            : "border-border/50 bg-[var(--nav-bg)]/95 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.15)]"
        )}
      >
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="shrink-0 rounded-full px-2 font-display text-lg font-bold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="text-gradient">{personal.initials}</span>
        </motion.a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  whileHover={{ scale: isActive ? 1 : 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive ? "text-accent-foreground" : "text-muted hover:bg-muted-bg hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent shadow-md shadow-accent/40"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {link.label}
                </motion.a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted-bg md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-[calc(100%+0.5rem)] rounded-2xl border border-border bg-card p-3 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    isActive ? "bg-accent text-accent-foreground shadow-md shadow-accent/30" : "text-foreground/90 hover:bg-muted-bg"
                  )}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
