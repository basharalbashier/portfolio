"use client";

import { links, navigation, owner } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line bg-paper transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-xs font-semibold text-paper">
              {owner.initials}
            </span>
            <p className="font-display text-lg font-semibold tracking-tight text-ink">
              {owner.name}
            </p>
          </div>
          <p className="mt-1.5 text-xs text-ink-soft">
            © {year} · Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-ink-soft transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-ink-soft transition-colors hover:text-accent"
            >
              GitHub ↗
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-ink-soft transition-colors hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-card px-3 py-1 text-xs font-medium text-ink-soft transition-all hover:border-accent hover:text-accent"
          >
            <span>Back to top</span>
            <span
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5"
            >
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
