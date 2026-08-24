# Bashar Albashier — Portfolio

A personal portfolio website for Bashar Albashier, Senior Software Engineer. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Content lives in one typed data file; Docker is set up for both development and production.

## Tech Stack

- Next.js 16 with App Router and TypeScript
- Tailwind CSS v4
- next/font (Fraunces + Inter), next/image
- Docker + Docker Compose

## Local Development (npm)

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Local Development (Docker)

```bash
docker compose up --build
```

Open http://localhost:3000. Source code is mounted for hot reload; dependencies live in a named volume so container installs are not overwritten by the host.

## Production Image Test

```bash
docker build -t portfolio .
docker run --rm -p 3000:3000 portfolio
```

Open http://localhost:3000. The image is a multi-stage build running the standalone output as a non-root user on port 3000.

## Editing Content

All owner-specific content — bio, skills, experience, education, projects, links, profile image path — lives in:

```text
data/portfolio.ts
```

Edit that file to update the site; no component changes are required for content updates.

### Adding or updating projects

Append an entry to the `projects` array in `data/portfolio.ts`:

```ts
{
  id: "my-project",
  index: "05",
  title: "My Project",
  kind: "Category label",
  description: "Problem → contribution → result.",
  tags: ["Flutter", "Dart"],
  href: "https://github.com/basharTezda/my-project",
  linkLabel: "View repository",
}
```

### Assets

| Asset | Path |
| --- | --- |
| Profile photo | `public/images/profile-v2.jpg` (source PNG kept at project root) |
| Résumé | `public/Bashar-Albashier-CV.docx` |

The résumé link (`Download résumé`) points to `/Bashar-Albashier-CV.docx`. Replace that file to update the download. To switch to a PDF version, export one from the source DOCX and update `links.resume` in `data/portfolio.ts`.

### Known TODOs

- Project descriptions are intentionally factual to each public repository. Add case studies, screenshots, or live-demo URLs only when verified.

Contact actions use the owner-confirmed WhatsApp number, LinkedIn, and GitHub. The source profile does not include a verified email address; add one to `data/portfolio.ts` before introducing a direct email action or contact form.

## Quality Checks

```bash
npm run lint   # ESLint
npm run build  # production build
```

## Project Structure

```text
app/
  layout.tsx      # fonts, metadata, shell
  page.tsx        # section composition
  globals.css     # design tokens + base styles
components/
  Header.tsx      # sticky nav + mobile menu
  Hero.tsx        # intro statement + portrait
  About.tsx       # bio, experience, education, skills
  Projects.tsx    # selected work
  Contact.tsx     # contact CTAs + résumé card
  Footer.tsx
data/
  portfolio.ts    # all editable content
public/
  images/         # optimized assets
```
