import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, MapPin, Send } from "lucide-react";
import { personal } from "../data/content";
import { SectionHeading } from "../components/SectionHeading";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import { MovingBorderCard } from "../components/MovingBorderCard";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleCopy = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-28 md:px-10">
      <SectionHeading
        eyebrow="Let's Connect"
        title="Get in Touch"
        description="Open to Software Engineer and Data Scientist roles across Australia — always excited to talk about interesting problems."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-4"
        >
          <MovingBorderCard radius="1.25rem" duration={5000} contentClassName="flex items-center justify-between p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-muted">Email</p>
                <p className="text-sm font-medium">{personal.email}</p>
              </div>
            </div>
            <button
              onClick={handleCopy}
              aria-label="Copy email"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:text-accent"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </MovingBorderCard>

          <MovingBorderCard radius="1.25rem" duration={5000} contentClassName="flex items-center gap-3 p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-2/10 text-accent-2">
              <MapPin size={18} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-muted">Location</p>
              <p className="text-sm font-medium">{personal.location}</p>
            </div>
          </MovingBorderCard>

          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="block">
            <MovingBorderCard
              radius="1.25rem"
              duration={5000}
              contentClassName="flex items-center gap-3 p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <LinkedinIcon size={18} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-muted">LinkedIn</p>
                <p className="text-sm font-medium">Rahul Reddy Yerram</p>
              </div>
            </MovingBorderCard>
          </a>

          <a href={personal.github} target="_blank" rel="noreferrer" className="block">
            <MovingBorderCard
              radius="1.25rem"
              duration={5000}
              contentClassName="flex items-center gap-3 p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-2/10 text-accent-2">
                <GithubIcon size={18} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-muted">GitHub</p>
                <p className="text-sm font-medium">View my repositories</p>
              </div>
            </MovingBorderCard>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <MovingBorderCard radius="1.25rem" duration={6000} contentClassName="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-95"
              >
                <Send size={15} /> Send Message
              </button>
            </form>
          </MovingBorderCard>
        </motion.div>
      </div>
    </section>
  );
}
