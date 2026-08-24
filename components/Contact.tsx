import { links, owner } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex items-baseline gap-4">
          <span
            aria-hidden="true"
            className="font-display text-sm font-semibold text-accent"
          >
            03
          </span>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Contact
          </h2>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="max-w-xl font-display text-2xl leading-snug font-medium tracking-tight text-balance sm:text-3xl">
              If you&apos;re building something real-time, media-heavy, or
              mobile-first — I&apos;d like to hear about it.
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
              Email is fastest, and {owner.firstName} answers every message.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={links.email}
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-deep"
              >
                Email me
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn ↗
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                GitHub ↗
              </a>
            </div>

            <a
              href={links.email}
              className="mt-5 inline-block text-sm font-medium text-accent-deep underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
            >
              {links.emailDisplay}
            </a>
          </div>

          <a
            href={links.resume}
            download
            className="group inline-flex items-center gap-4 rounded-lg border border-line bg-paper px-5 py-4 transition-colors hover:border-accent"
          >
            <span
              aria-hidden="true"
              className="font-display text-2xl font-semibold text-accent"
            >
              ↓
            </span>
            <span>
              <span className="block text-sm font-medium">
                Résumé — PDF
              </span>
              <span className="block text-xs text-ink-soft">
                Bashar-Albashier.pdf
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
