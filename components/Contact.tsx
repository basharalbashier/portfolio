import { links } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
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
              Get In Touch
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <Reveal delay="100">
            <div>
              <p className="font-display text-2xl leading-snug font-medium tracking-tight text-balance text-ink sm:text-3xl">
                Building something real-time, media-heavy, or mobile-first?
                Let&apos;s connect.
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
                Reach out through WhatsApp or LinkedIn, or explore the public
                repositories that show how I approach mobile, media, and
                real-time systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Message Bashar on WhatsApp at ${links.whatsappDisplay}`}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-all hover:bg-accent hover:shadow-md"
                >
                  Message on WhatsApp
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-card px-5 py-3 text-sm font-medium text-ink transition-all hover:border-accent hover:text-accent"
                >
                  Connect on LinkedIn
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-card px-5 py-3 text-sm font-medium text-ink transition-all hover:border-accent hover:text-accent"
                >
                  View GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* TODO: Add a direct email action when the owner supplies a verified address. */}
              <div className="mt-10 border-t border-line pt-6">
                <h3 className="text-xs font-semibold tracking-wider text-ink-soft uppercase">
                  Download Résumé
                </h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={links.resumePdf}
                    download
                    className="card-shine inline-flex items-center gap-3 rounded-xl border border-line bg-paper-card px-4 py-3 text-sm font-medium text-ink"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                      PDF
                    </span>
                    <span>
                      <span className="block font-medium">Bashar-Albashier.pdf</span>
                      <span className="block text-xs text-ink-soft">
                        Standard print format
                      </span>
                    </span>
                    <span aria-hidden="true" className="ml-1 font-bold text-accent">
                      ↓
                    </span>
                  </a>

                  <a
                    href={links.resumeDocx}
                    download
                    className="card-shine inline-flex items-center gap-3 rounded-xl border border-line bg-paper-card px-4 py-3 text-sm font-medium text-ink"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-xs font-bold text-blue-600">
                      DOCX
                    </span>
                    <span>
                      <span className="block font-medium">
                        Bashar-Albashier-CV.docx
                      </span>
                      <span className="block text-xs text-ink-soft">
                        Editable Word format
                      </span>
                    </span>
                    <span aria-hidden="true" className="ml-1 font-bold text-accent">
                      ↓
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay="200">
            <aside className="rounded-2xl border border-line bg-paper-card p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                Best way to connect
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                Start with WhatsApp
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Send a short message about the role, project, or engineering
                challenge you would like to discuss.
              </p>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Message Bashar on WhatsApp at ${links.whatsappDisplay}`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-deep"
              >
                WhatsApp · {links.whatsappDisplay}
                <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
