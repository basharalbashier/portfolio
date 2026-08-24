import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export default function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-b border-line bg-paper-deep/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
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

          <a
            href="https://github.com/basharalbashier?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-deep"
          >
            <span>All Repositories on GitHub</span>
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              {"\u2192"}
            </span>
          </a>
          </div>
        </Reveal>

        <Reveal delay="100">
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Public repositories spanning real-time video calling, native iOS
            tooling, media editing, and cross-platform Flutter engineering.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i % 2 === 0 ? "0" : "200"}>
              <article
                className="card-shine group flex h-full flex-col justify-between rounded-2xl border border-line bg-paper-card p-7 shadow-sm transition-all"
              >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-accent/80 select-none">
                    {project.index}
                  </span>
                  <span className="rounded-full bg-paper px-3 py-1 text-xs font-semibold tracking-wider text-accent uppercase ring-1 ring-line">
                    {project.kind}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
                  {project.title}
                  {project.isFork && (
                    <span className="ml-2 inline-flex items-center rounded-full border border-line px-2 py-0.5 text-xs font-normal text-ink-soft">
                      Fork
                    </span>
                  )}
                </h3>

                <p className="mt-3 leading-relaxed text-ink-soft text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 border-t border-line-subtle pt-5">
                <ul
                  aria-label="Technologies"
                  className="flex flex-wrap gap-1.5"
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-paper px-2.5 py-1 text-xs font-medium text-ink-soft ring-1 ring-line-subtle"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all group-hover:text-accent-deep"
                  >
                    <span>{project.linkLabel}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>

                  <span className="text-xs text-ink-muted">github.com</span>
                </div>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
