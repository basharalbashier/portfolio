import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="font-display text-sm font-semibold text-accent"
                >
                  02
                </span>
                <h2
                  id="work-heading"
                  className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Selected Work &amp; Open Source
                </h2>
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
                Public work across real-time communication, native iOS tooling,
                media editing, healthcare, and Flutter engineering.
              </p>
            </div>

            <a
              href="https://github.com/basharalbashier?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deep"
            >
              All GitHub repositories
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>

        <div className="mt-14 border-b border-line">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index % 2 === 0 ? "0" : "100"}>
              <article className="group grid gap-6 border-t border-line py-10 lg:grid-cols-[11rem_1fr] lg:gap-12 lg:py-12">
                <div>
                  <span className="font-display text-3xl font-semibold text-accent">
                    {project.index}
                  </span>
                  <p className="mt-3 text-xs font-semibold tracking-[0.14em] text-ink-muted uppercase">
                    {project.kind}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-3xl">
                      {project.title}
                    </h3>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deep"
                    >
                      {project.linkLabel}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">
                    {project.description}
                  </p>

                  <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-ink-soft md:grid-cols-3 md:gap-6">
                    {project.details.map((detail) => (
                      <li key={detail} className="border-l border-line pl-4">
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <ul aria-label="Technologies" className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs font-semibold tracking-wide text-ink-muted uppercase"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
