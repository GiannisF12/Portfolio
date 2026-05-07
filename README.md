# Portfolio — Giannis Foras

Personal portfolio site. Single page, dark, projects-first.

**Live:** [giannisf12.dev](https://giannisf12.dev)

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Geist Mono** + **Syne** (via `next/font/google`)
- **Docker** for production deploys (multi-stage, standalone output)
- Static-rendered. No DB, no API routes, no CMS — projects live in a typed array.

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Fonts, metadata, OG/Twitter tags
│   ├── page.tsx                # Composes Nav + Hero + two Work sections + footer
│   ├── globals.css             # CSS vars, scrollbar, keyframes
│   ├── icon.svg                # Favicon (auto-detected by Next.js)
│   └── opengraph-image.tsx     # 1200×630 social-card PNG, rendered from JSX
├── components/
│   ├── Nav.tsx                 # Sticky-style nav with email/GitHub/LinkedIn icons
│   ├── Hero.tsx                # Headline + subtitle
│   ├── Work.tsx                # Section wrapper: heading + grid + empty state
│   └── ProjectCard.tsx         # 3D mouse-tilt card with shimmer sweep on hover
├── data/
│   └── projects.ts             # Single source of truth for all projects
└── lib/
    ├── types.ts                # Project type
    └── tech-icons.ts           # Tag → brand-SVG mapping
public/
├── projects/                   # Project screenshots (.jpg, max 1600px wide)
├── svg/                        # Brand icons (GitHub, LinkedIn, language logos)
└── cv.pdf                      # Resume
```

## Local development

```bash
npm install
npm run dev
```

Visit [localhost:3000](http://localhost:3000). Hot-reloads on save.

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
```

## Adding a project

Two steps.

1. **Drop the screenshot** into `public/projects/`. Use kebab-case JPG, ≤ 1600px wide.

   ```bash
   sips -s format jpeg -s formatOptions 82 -Z 1600 source.png \
     --out public/projects/my-project.jpg
   ```

2. **Add an entry** to `src/data/projects.ts`:

   ```ts
   {
     slug: "my-project",
     title: "My Project",
     description: "One-line summary.",
     image: "/projects/my-project.jpg",
     tech: ["Next.js", "PostgreSQL", "Docker"],
     year: 2026,
     type: "personal",                  // or "client"
     github: "https://github.com/GiannisF12/my-project",
     live: "https://my-project.example.com",
   }
   ```

   - Each item in `tech` that matches a key in `src/lib/tech-icons.ts` gets a colored brand icon next to its label.
   - For multiple screenshots side-by-side (collage), add `images: ["/projects/a.jpg", "/projects/b.jpg"]` — overrides `image` when 2+ items.
   - For client projects, add a `role` field (e.g. `"Freelance · Full-stack"`) to display a cyan role pill.

That's it — the page picks up the new entry automatically.

## Production deploy (Coolify + Docker)

The repo includes:

- `Dockerfile` — multi-stage, runs as non-root, uses Next.js standalone output (~150 MB final image)
- `.dockerignore` — keeps the build context lean
- `docker-compose.yml` — for local container testing
- `next.config.ts` — `output: "standalone"` enabled

### Test the container locally

```bash
docker compose up --build
```

The site comes up on [localhost:3000](http://localhost:3000) inside a production container.

### Deploy to Coolify

1. New Resource → Application → Public Repository
2. Paste the repo URL
3. Build Pack: **Dockerfile**
4. Port: **3000**
5. Add domain in the *Domains* tab → Coolify provisions Let's Encrypt automatically
6. Deploy

`git push` triggers a rebuild + redeploy when the GitHub webhook is enabled.

## License

Code: MIT. Content (text, CV, project screenshots) © Giannis Foras.
