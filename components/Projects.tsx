import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-b border-line bg-paper-deep/50"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
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
            Selected work
          </h2>
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Public repositories that reflect what I build — real-time calling,
          media editing, and cross-platform rendering. Each links directly to
          its source on GitHub.
        </p>

        <ol className="mt-16 space-y-0 border-t border-ink">
          {projects.map((project) => (
            <li
              key={project.id}
              className="grid items-start gap-6 border-b border-line py-10 sm:py-12 md:grid-cols-[7rem_1fr] md:gap-10"
            >
              <span
                aria-hidden="true"
                className="font-display text-5xl font-semibold text-line select-none sm:text-6xl"
              >
                {project.index}
              </span>

              <article>
                <p className="text-xs font-semibold tracking-wider text-accent uppercase">
                  {project.kind}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.title}
                  {project.isFork ? (
                    <span className="ml-3 inline-flex items-center rounded-full border border-line px-2 py-0.5 align-middle text-xs font-normal text-ink-soft">
                      Fork
                    </span>
                  ) : null}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
                  {project.description}
                </p>

                <ul
                  aria-label="Technologies"
                  className="mt-5 flex flex-wrap gap-1.5"
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-paper px-2.5 py-1 text-xs text-ink-soft ring-1 ring-line"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-deep underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
                >
                  {project.linkLabel}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </article>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-ink-soft">
          More on GitHub —{" "}
          <a
            href="https://github.com/basharalbashier?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent-deep underline decoration-accent/40 underline-offset-4 hover:text-accent"
          >
            github.com/basharalbashier ↗
          </a>
        </p>
      </div>
    </section>
  );
}
