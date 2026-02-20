# [jspc.dev](https://jspc.dev)

Personal website built with [Astro](https://astro.build), showcasing projects, experience and my personal background.

## Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Styling
- **Markdown** - Content management via Astro Content Collections

## Project Structure

```
src/
├── content/          # Markdown content (about, projects)
│   └── about/        # About section pages
├── pages/            # Route pages (index, about, projects, experience)
├── components/       # Reusable UI components
├── layouts/          # Page layouts
└── styles/           # Global CSS
```

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Development

Content is managed through Markdown files in `src/content/about/`:
- `intro.md` - Homepage introduction
- `about.md` - About page content
- `projects.md` - Projects showcase

## Notes

~30% vibecoded. Built as a lightweight, fast-loading personal site without heavy frameworks.
