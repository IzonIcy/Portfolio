# Portfolio

Personal site. Astro 7, React only where interactivity is needed, Tailwind 4. Deployed on Vercel.

## Commands

```sh
pnpm install
pnpm dev        # localhost:4321
pnpm build      # static build to dist/, then Pagefind indexes it
pnpm check      # astro check (types)
pnpm lint:format
```

Do not run the dev server as part of verification. `pnpm build` and `pnpm check` are the checks.

## Layout

```
src/pages/       routes: index, work, projects, resources, search, 404
src/components/  shared components
src/layouts/     page shells
src/data/        structured content: work history, resources, command palette
src/lib/github.ts  fetches projects from the GitHub API at build time
public/          static assets
```

## Content rules

- Projects on `/projects` come from GitHub at build time. `EXCLUDED_REPOS` in `src/lib/github.ts` hides repos that are not portfolio projects, and forks are filtered. Add a repo there rather than deleting the project card.
- If the GitHub API is unavailable at build time, the page falls back to a curated list. Keep that fallback current.
- Work history and resources are plain data in `src/data/`. Edit the data, not the page markup.
- The build runs `pagefind --site dist`, so search only works after a full `pnpm build`.

## Verification

`pnpm build` must finish without errors, and `pnpm check` must pass. If you changed layout, open the built page and look at it rather than trusting the diff.
