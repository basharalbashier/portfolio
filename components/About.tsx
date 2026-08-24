import Image from "next/image";
import {
  education,
  experience,
  owner,
  profileImage,
  skillGroups,
} from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex items-baseline gap-4">
          <span
            aria-hidden="true"
            className="font-display text-sm font-semibold text-accent"
          >
            01
          </span>
          <h2
            id="about-heading"
            className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            About
          </h2>
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              {owner.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-14 font-display text-xl font-semibold">
              Experience
            </h3>
            <ol className="mt-6 space-y-0 border-t border-line">
              {experience.map((item) => (
                <li
                  key={`${item.company}-${item.period}`}
                  className="grid gap-2 border-b border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
                >
                  <div className="text-sm text-ink-soft">
                    <p className="font-medium text-ink">{item.period}</p>
                    <p>{item.location}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {item.role}
                      <span className="text-ink-soft"> · {item.company}</span>
                      {item.current ? (
                        <span className="ml-2 inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 align-middle text-xs font-medium text-accent-deep">
                          Current
                        </span>
                      ) : null}
                    </h4>
                    <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink-soft">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-px w-3 shrink-0 bg-line"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <h3 className="mt-14 font-display text-xl font-semibold">
              Education
            </h3>
            <dl className="mt-6 space-y-4">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-4"
                >
                  <dt className="font-medium">{item.degree}</dt>
                  <dd className="text-sm text-ink-soft">
                    {item.school}, {item.year}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <figure className="relative hidden overflow-hidden rounded-t-full border border-line bg-paper-deep lg:block">
              <Image
                src={profileImage.src}
                alt=""
                width={profileImage.width}
                height={profileImage.height}
                sizes="320px"
                className="h-auto w-full object-cover opacity-95"
              />
            </figure>

            <h3 className="mt-10 font-display text-xl font-semibold">
              Skills
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-accent uppercase">
                    <span aria-hidden="true" className="h-px w-4 bg-accent" />
                    {group.label}
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-soft"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
