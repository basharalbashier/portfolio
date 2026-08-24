import Image from "next/image";
import { links, owner, profileImage } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-14 lg:gap-20">
          <div>
            {/* Professional identity */}
            <div className="rise-in inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-ink-soft uppercase">
              <span className="h-px w-7 bg-accent" />
              <span>{owner.title}</span>
              <span className="text-ink-muted">·</span>
              <span className="text-ink-soft">{owner.location}</span>
            </div>

            <h1
              id="hero-heading"
              className="rise-in mt-7 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]"
            >
              Building mobile products where{" "}
              <span className="text-accent italic font-normal">real time</span>{" "}
              matters.
            </h1>

            <p className="rise-in-delayed mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              I&apos;m {owner.firstName}—a Senior Software Engineer who builds
              Flutter apps, WebRTC-powered video-calling experiences, and the
              full-stack systems behind them. From short-form video editing to
              live streaming, I engineer software that feels fast and responsive.
            </p>

            <div className="rise-in-delayed mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#work"
                className="rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
              >
                View selected work →
              </a>
              <a
                href={links.resumePdf}
                download
                className="rounded-md border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Download résumé (PDF) ↓
              </a>
            </div>
          </div>

          <figure className="rise-in relative mx-auto w-full max-w-xs md:max-w-none">
            <div className="relative overflow-hidden rounded-lg border border-line bg-paper-deep p-2">
              <div className="overflow-hidden rounded-md bg-paper">
                <Image
                  src={profileImage.src}
                  alt={profileImage.alt}
                  width={profileImage.width}
                  height={profileImage.height}
                  priority
                  placeholder="blur"
                  blurDataURL={profileImage.blurDataURL}
                  sizes="(min-width: 768px) 340px, 288px"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-3.5 text-center text-xs tracking-wider text-ink-soft uppercase font-medium">
              {owner.name} · {owner.title}
            </figcaption>
          </figure>
        </div>

        {/* Quick Highlights / Stats Strip */}
        <div className="rise-in-delayed-2 mt-16 grid grid-cols-2 border-y border-line sm:grid-cols-4">
          {owner.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r border-line px-3 py-6 last:border-r-0 sm:px-5"
            >
              <p className="font-display text-2xl font-bold tracking-tight text-accent sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-ink-soft">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
