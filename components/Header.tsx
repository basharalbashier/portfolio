"use client";

import { useEffect, useRef, useState } from "react";
import { links, navigation, owner } from "@/data/portfolio";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          {owner.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.resume}
            download
            className="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
          >
            Résumé
          </a>
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-line md:hidden"
        >
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-full bg-ink transition-transform ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-full bg-ink transition-transform ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-paper md:hidden"
      >
        <nav
          aria-label="Mobile"
          className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8"
        >
          {[...navigation, { label: "Résumé", href: links.resume }].map(
            (item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.label === "Résumé" ? { download: true } : {})}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-paper-deep hover:text-accent"
              >
                {item.label}
              </a>
            ),
          )}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
