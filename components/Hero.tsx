import Image from "next/image";
import { links, owner, profileImage } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-10 lg:gap-16">
        <div>
          <p className="rise-in flex items-center gap-3 text-sm font-medium tracking-wide text-accent uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {owner.title} · {owner.experienceYears} years
          </p>

          <h1
            id="hero-heading"
            className="rise-in mt-6 font-display text-5xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Building mobile products where real time matters.
          </h1>

          <p className="rise-in-delayed mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            I&apos;m {owner.firstName} — I engineer Flutter apps, WebRTC video
            calling, and the full-stack systems behind them. From short-video
            editing to instant messaging, I ship software that feels instant.
          </p>

          <div className="rise-in-delayed mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              View selected work
            </a>
            <a
              href={links.resume}
              download
              className="rounded-full border border-ink px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Download résumé ↓
            </a>
          </div>
        </div>

        <figure className="rise-in relative mx-auto w-full max-w-xs md:max-w-none">
          <div className="relative overflow-hidden rounded-t-full border border-line bg-paper-deep shadow-[0_24px_48px_-24px_rgba(28,25,23,0.35)]">
            <Image
              src={profileImage.src}
              alt={profileImage.alt}
              width={profileImage.width}
              height={profileImage.height}
              priority
              sizes="(min-width: 768px) 320px, 288px"
              className="h-auto w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 text-center text-xs tracking-wide text-ink-soft uppercase">
            {owner.name}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
