"use client";

import { useState } from "react";
import Image from "next/image";
import {
  education,
  experience,
  owner,
  profileImage,
  skillGroups,
} from "@/data/portfolio";
import { Reveal } from "./Reveal";

export default function About() {
  const [selectedGroup, setSelectedGroup] = useState<string>("All");

  const allCategories = ["All", ...skillGroups.map((g) => g.label)];

  const displayedSkillGroups =
    selectedGroup === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.label === selectedGroup);

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
            About & Background
          </h2>
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <div>
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              {owner.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            {/* Experience Section */}
            <div className="mt-16">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  Experience
                </h3>
                <span className="text-xs font-medium text-ink-soft uppercase tracking-wider">
                  5+ Years Production
                </span>
              </div>

              <ol className="relative mt-8 space-y-8 border-l-2 border-line pl-6 sm:pl-8">
                {experience.map((item) => (
                  <li key={`${item.company}-${item.period}`} className="relative group">
                    {/* Timeline bullet */}
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-paper transition-transform group-hover:scale-125 ${
                        item.current ? "bg-accent" : "bg-ink-soft"
                      }`}
                    />

                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="text-base font-semibold text-ink">
                        {item.role}
                        <span className="text-accent-deep font-medium"> · {item.company}</span>
                      </h4>
                      <span className="text-xs font-medium text-ink-soft">
                        {item.period} · {item.location}
                      </span>
                    </div>

                    {item.current && (
                      <span className="mt-1 inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-deep">
                        Current Role
                      </span>
                    )}

                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            {/* Education Section */}
            <div className="mt-16">
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                Education
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {education.map((item) => (
                  <div
                    key={item.degree}
                    className="rounded-xl border border-line bg-paper-card p-5 transition-all hover:border-accent/50 hover:shadow-sm"
                  >
                    <dt className="font-semibold text-ink">{item.degree}</dt>
                    <dd className="mt-2 text-sm text-ink-soft">
                      {item.school}
                    </dd>
                    <dd className="mt-1 text-xs font-medium text-accent">
                      Class of {item.year}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </Reveal>

          {/* Right Column: Sticky Portrait preview & Categorized Skills */}
          <Reveal delay="200">
            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <figure className="relative hidden overflow-hidden rounded-2xl border border-line bg-paper-deep lg:block shadow-md">
              <Image
                src={profileImage.src}
                alt=""
                placeholder="blur"
                blurDataURL={profileImage.blurDataURL}
                width={profileImage.width}
                height={profileImage.height}
                sizes="360px"
                className="h-auto w-full object-cover opacity-90 transition-opacity hover:opacity-100"
              />
            </figure>

            <div className="rounded-2xl border border-line bg-paper-card p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <h3 className="font-display text-xl font-semibold">
                  Technical Skills
                </h3>
                <span className="text-xs text-ink-soft font-mono">
                  {skillGroups.reduce((acc, g) => acc + g.items.length, 0)} tools
                </span>
              </div>

              {/* Category Filter Pills */}
              <div className="mt-4 flex flex-wrap gap-1.5 pb-2">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedGroup(cat)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      selectedGroup === cat
                        ? "bg-accent text-paper shadow-sm"
                        : "border border-line bg-paper text-ink-soft hover:border-ink hover:text-ink"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Skills List */}
              <div className="mt-6 space-y-6">
                {displayedSkillGroups.map((group) => (
                  <div key={group.label}>
                    <h4 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-accent uppercase">
                      <span aria-hidden="true" className="h-px w-4 bg-accent" />
                      {group.label}
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-lg border border-line bg-paper px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
