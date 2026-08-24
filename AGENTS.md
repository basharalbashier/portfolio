# Portfolio Website Build Brief

## Mission

Build a polished, memorable personal portfolio website that presents the owner as a thoughtful, capable professional. The result should feel intentionally designed, fast, accessible, and ready to show to recruiters, clients, and collaborators.

Do not produce a generic template or a collection of disconnected sections. Create a coherent visual story with strong typography, clear hierarchy, purposeful spacing, and a confident point of view.

## Owner Source Of Truth

Use `bashar_albashier_portfolio_agent.md` as the authoritative source for owner-specific content. Do not contradict, embellish, or silently reinterpret the information in that file.

- Name: Bashar Albashier
- Primary title: Senior Software Engineer
- Experience: 5+ years
- Focus: Flutter/Dart, full-stack development, mobile applications, UI/UX-focused engineering, WebRTC, real-time communication, cloud technologies, and scalable application architecture
- LinkedIn: `https://linkedin.com/in/basharalbashier`
- GitHub (primary): `https://github.com/basharalbashier`
- GitHub (secondary): `https://github.com/basharTezda`

The source file includes employment history, technical skills, education, and portfolio direction. Use those details as supplied and keep them easy to update through typed portfolio data.

The source file does not provide an email address, specific featured project names, project descriptions, live-demo URLs, testimonials, metrics, or blog posts. Do not fabricate these. Use clear TODO placeholders or omit those elements until the owner supplies them.

## Public GitHub Evidence

The primary public profile at `https://github.com/basharalbashier` is the preferred source for project links and technical themes; the secondary profile `https://github.com/basharTezda` may supplement it. Notable repositories at the time this brief was last updated include:

- `bash_ios_image_and_video_editor`: native iOS image and video editor Flutter plugin (primary account).
- `Omdorman-Maternity-hospital-medical-record`: medical record web application for Omdurman Maternity Hospital (primary account).
- `webRTC-server`: WebRTC signaling server written in Dart (primary account).
- `dart-realtime-api`: Dart WebSocket implementation for chat/streaming APIs (primary account).
- `pro_image_editor`: Dart repository associated with image editing (secondary account).

Use these repositories as evidence only after reviewing their current README, source, ownership, and fork status. Link directly to the relevant repository when there is no verified live demo. Do not claim metrics, authorship of inherited code, production usage, or business outcomes that are not documented by Bashar or the repository itself.

The public `https://github.com/tezda` organization currently has no public repositories. Do not invent Tezda projects from that organization. Employment contributions at Tezda Ltd may be described only from the supplied CV, and confidential company work must remain high-level.

If a GitHub projects section is implemented, prefer a curated, static list in `data/portfolio.ts` over a runtime GitHub API integration. Do not add a GitHub token or expose credentials in client-side code. A profile link and selected repository links are sufficient for the first version.

## Product Goals

- Make the owner immediately understandable within the first screen.
- Turn selected projects into compelling evidence of skill and judgment.
- Make contact and social links easy to find on every device.
- Communicate quality through interaction details, responsive behavior, accessibility, and performance.
- Make future content updates simple without requiring UI rewrites.

## Recommended Technical Stack

- Next.js with TypeScript
- App Router
- Tailwind CSS, unless the initialized project already has an established styling system
- ESLint and the repository's existing formatter
- Local, typed project data for the first version
- Docker and Docker Compose for local development and production testing

If the repository already contains an application, preserve its working stack and conventions unless they directly prevent the requirements in this brief.

## Visual Direction

Use a refined editorial/technical art direction:

- A warm off-white or near-black foundation rather than plain white by default.
- One strong accent color used sparingly for links, highlights, and calls to action.
- A display typeface for major headings paired with a highly readable sans-serif for body text.
- Large, confident typography with occasional oversized numerals or labels.
- Generous whitespace balanced with dense project details.
- Thin borders, subtle texture, or restrained grid elements to create depth.
- Motion should be quiet and purposeful: entrance transitions, hover feedback, and gentle image movement only where useful.

The page should look excellent without depending on gradients, excessive glassmorphism, decorative blobs, stock illustrations, or unnecessary animation. Prefer real project imagery and strong composition over decoration.

## Required Experience

### Header

- Persistent site identity or name.
- Clear navigation to About, Work, and Contact.
- A prominent contact action.
- A usable mobile menu with keyboard support.

### Hero

- A concise professional statement explaining who the owner is and what they do.
- A secondary sentence giving context, specialty, or working approach.
- Primary action leading to selected work.
- Secondary action leading to contact or resume.
- A visual detail that makes the opening memorable without competing with the message.

### About

- Short biography written for a professional audience.
- Skills grouped by meaningful categories rather than one long unordered list.
- Experience, education, or working principles when supplied by the owner.

### Selected Work

- Three to six featured projects.
- Each project must show title, role, concise outcome-focused description, technology tags, and relevant links.
- Use a varied but consistent project layout so the section has rhythm.
- Project data must be separated from presentation components.
- Do not invent achievements, clients, metrics, testimonials, or project links. Use clear placeholders where information is missing.

### Contact

- Direct email and relevant social links.
- A clear invitation to start a conversation.
- If a real form is implemented, include validation, loading state, success state, failure state, and accessible error messages.
- Never expose private credentials in client-side code.

### Footer

- Name or personal mark.
- Current year generated programmatically.
- Social/contact links.
- A brief, understated closing line.

## Content Rules

- Use confident, specific language and avoid filler such as “passionate developer” unless the owner provides it.
- Write project descriptions around the problem, contribution, and result.
- Keep paragraphs short and scannable.
- Use semantic headings in a logical order.
- Keep all owner-specific values easy to replace in one or two content files.
- Mark missing content with TODO comments or visible placeholders; do not silently fabricate content.

## Architecture Expectations

Prefer a small, understandable component system. A reasonable structure is:

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Header.tsx
  Hero.tsx
  About.tsx
  Projects.tsx
  Contact.tsx
  Footer.tsx
data/
  portfolio.ts
public/
  images/
```

Adapt names to the existing repository when necessary. Avoid creating abstractions that are used only once. Keep content, layout, and visual primitives separate enough that a future editor can update projects without touching layout logic.

## Supplied Assets

The project includes these owner-provided files:

- Profile image source: `ChatGPT Image Aug 21, 2026, 12_40_50 AM.png`
- Resume source: `Bashar_Albashier_Senior_Flutter_Mobile_Engineer_CV.docx` (served as `public/Bashar-Albashier-CV.docx`)

Before building the interface:

- Copy or move the profile image to `public/images/profile-v2.jpg` (or a versioned optimized file; bump the filename when the source image changes to bust caches).
- Preserve the supplied portrait; do not generate, replace, or materially alter the owner's appearance.
- Use `next/image` with explicit dimensions and the alt text `Portrait of Bashar Albashier`.
- Use priority loading only if the image appears in the initial viewport.
- Keep the square source composition suitable for a clean portrait crop on desktop and mobile.
- Place the resume at a stable public path such as `public/Bashar-Albashier.pdf` and link it from the hero, navigation, or contact area only after verifying the file exists.
- Do not claim that a resume download, image, or other asset works unless it has been checked in the production build.
- Reference the image through the typed data file (`data/portfolio.ts`) so the path stays easy to update.
- Feature the portrait in the Hero and/or About section as a strong visual anchor with a clean crop and subtle border or frame treatment.
- If the image is missing at build time, do not fabricate a replacement; render a tasteful monogram/initials placeholder and leave a TODO comment referencing the expected path.

## Responsive and Accessibility Requirements

- Design mobile-first and verify narrow screens around 320px wide.
- Verify desktop layouts at approximately 1280px and wider.
- Never rely on hover alone to communicate information.
- Ensure visible focus states for interactive elements.
- Use buttons for actions and links for navigation.
- Provide meaningful alt text for informative images and empty alt text for decorative images.
- Respect `prefers-reduced-motion`.
- Maintain readable contrast and do not use color as the only indicator.
- Ensure mobile navigation can be opened, closed, and operated with a keyboard.
- Keep touch targets comfortably usable on mobile.

## SEO and Performance

- Add a meaningful page title and description.
- Add Open Graph metadata with sensible defaults.
- Use one clear H1 and an intentional heading hierarchy.
- Optimize images and specify dimensions to reduce layout shift.
- Avoid unnecessary client components and third-party scripts.
- Test production output, not only the development server.

## Docker Requirements

Provide a production-ready multi-stage `Dockerfile` and a development workflow.

### Production

- Install dependencies deterministically.
- Build the application in a builder stage.
- Run only the minimum required production files and dependencies.
- Run as a non-root user where practical.
- Expose port `3000`.
- Start with a production command such as `npm run start`.

### Development

- Add `docker-compose.yml` for local development.
- Mount source code for hot reload while avoiding replacement of container dependencies.
- Document the local URL and port.
- Keep secrets in environment variables and provide `.env.example` when needed.

The README must include:

```bash
# Local development
docker compose up --build

# Production image test
docker build -t portfolio .
docker run --rm -p 3000:3000 portfolio
```

## Quality Gates

Before considering the implementation complete:

- Run the formatter if the project uses one.
- Run linting.
- Run the production build.
- Test the Docker development workflow.
- Test the production Docker image.
- Check all navigation, email, social, resume, GitHub, and live-demo links.
- Inspect the page at mobile and desktop widths.
- Verify there are no console errors, broken images, horizontal scrolling issues, or fabricated content.

If a check cannot be run, document the exact reason in the final report instead of claiming it passed.

## Agent Workflow

1. Inspect the repository before making assumptions or adding dependencies.
2. Identify the current framework, scripts, and existing conventions.
3. Implement the smallest coherent foundation before polishing details.
4. Build the page as a complete responsive experience, not as isolated desktop sections.
5. Add real content supplied by the owner; keep missing content explicit.
6. Add Docker files and verify both development and production modes.
7. Run all available quality checks.
8. Review the final result for visual hierarchy, accessibility, responsiveness, and maintainability.

## Expected Deliverables

- Complete responsive portfolio website.
- Reusable components with typed content data.
- Optimized local assets or clearly documented asset placeholders.
- SEO metadata and accessible interaction states.
- `Dockerfile` for production.
- `docker-compose.yml` for development.
- `.dockerignore` and `.env.example` when applicable.
- README with setup, content editing, testing, and Docker commands.
- Final implementation report listing changed files, checks run, and any remaining owner-provided content needed.

## Definition of Done

The portfolio is ready when a visitor can understand the owner, browse convincing work, and make contact without friction on both mobile and desktop; the project can be started with documented commands; and the production build runs successfully inside Docker.
