import { links, navigation, owner } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">
            {owner.name}
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            © {year} · Engineered with care, shipped with intent.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.email}
            className="text-sm text-ink-soft transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-soft transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-soft transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={links.resume}
            download
            className="text-sm text-ink-soft transition-colors hover:text-accent"
          >
            Résumé
          </a>
        </nav>
      </div>
    </footer>
  );
}
