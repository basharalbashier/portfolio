import Image from "next/image";
import { links, owner, profileImage } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:items-center md:gap-10 lg:gap-16">
          <div>
            {/* Professional identity */}
            <div className="rise-in inline-flex items-center gap-2.5 rounded-full border border-line bg-paper-deep/80 px-3.5 py-1.5 text-xs font-medium text-ink backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>{owner.title}</span>
              <span className="text-ink-muted">·</span>
              <span className="text-ink-soft">{owner.location}</span>
            </div>

            <h1
              id="hero-heading"
              className="rise-in mt-6 font-display text-4xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              Building mobile products where{" "}
              <span className="text-accent italic font-normal">real time</span>{" "}
              matters.
            </h1>

            <p className="rise-in-delayed mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              I&apos;m {owner.firstName} — a Senior Software Engineer who builds
              Flutter apps, WebRTC video calling, and the full-stack systems
              behind them. From short-video editing to live streaming, I
              engineer software that feels instant.
            </p>

            <div className="rise-in-delayed mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#work"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-all hover:bg-accent hover:shadow-lg"
              >
                View selected work →
              </a>
              <a
                href={links.resumePdf}
                download
                className="rounded-full border border-line bg-paper-card px-5 py-3 text-sm font-medium text-ink transition-all hover:border-accent hover:text-accent hover:shadow-sm"
              >
                Download résumé (PDF) ↓
              </a>
            </div>
          </div>

          <figure className="rise-in relative mx-auto w-full max-w-xs md:max-w-none">
            <div className="relative overflow-hidden rounded-t-[140px] rounded-b-3xl border border-line bg-paper-deep p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <div className="overflow-hidden rounded-t-[132px] rounded-b-2xl bg-paper">
                <Image
                  src={profileImage.src}
                  alt={profileImage.alt}
                  width={profileImage.width}
                  height={profileImage.height}
                  priority
                  placeholder="blur"
                  blurDataURL={profileImage.blurDataURL}
                  sizes="(min-width: 768px) 340px, 288px"
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <figcaption className="mt-3.5 text-center text-xs tracking-wider text-ink-soft uppercase font-medium">
              {owner.name} · {owner.title}
            </figcaption>
          </figure>
        </div>

        {/* Quick Highlights / Stats Strip */}
        <div className="rise-in-delayed-2 mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-line pt-8">
          {owner.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-line-subtle bg-paper-card/70 p-4 transition-all hover:border-line hover:shadow-sm"
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

        {/* Scroll indicator */}
        <div className="rise-in-delayed-2 mt-12 hidden sm:flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="flex flex-col items-center gap-1.5 text-ink-muted transition-colors hover:text-accent group"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
            <span className="flex h-7 w-5 items-start justify-center rounded-full border border-current pt-1.5">
              <span className="h-2 w-0.5 animate-bounce rounded-full bg-current" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
