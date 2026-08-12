import { Mail } from "lucide-react";
import { personal } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {personal.name}. Built with React, Three.js & Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={15} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="GitHub"
          >
            <GithubIcon size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
