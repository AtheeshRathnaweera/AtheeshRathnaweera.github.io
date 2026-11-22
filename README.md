# Atheesh Rathnaweera - Portfolio

My personal portfolio website, live at **[atheeshr.com](https://atheeshr.com)**.

Built with React, TypeScript, and Vite, styled with Tailwind CSS and Flowbite, and animated with Framer Motion. Hosted on GitHub Pages behind Cloudflare.

Design inspired by [Brittany Chiang](https://brittanychiang.com).

## Tech stack

| Area      | Tools                                         |
| --------- | --------------------------------------------- |
| Framework | React 19, TypeScript, Vite                    |
| Styling   | Tailwind CSS 4, Flowbite React                |
| Animation | Framer Motion                                 |
| Routing   | React Router                                  |
| Quality   | ESLint, Prettier, Husky, lint-staged          |
| Hosting   | GitHub Pages (GitHub Actions), Cloudflare DNS |

## Getting started

Requires Node.js (LTS or newer) and npm.

```bash
npm install     # also installs git hooks and runs a vulnerability check
npm run dev     # start the dev server at http://localhost:5173
```

## Scripts

| Command                            | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| `npm run dev`                      | Start the Vite dev server                                |
| `npm run build`                    | Type-check and build for production into `dist/`         |
| `npm run preview`                  | Serve the production build locally                       |
| `npm run lint`                     | Lint the project with ESLint                             |
| `npm run format`                   | Format all files with Prettier                           |
| `npm run check-vulnerabilities`    | Show vulnerable packages that need action                |
| `npm run check-vulnerabilities:ci` | Fail on high/critical vulnerabilities in production deps |

## Project structure

```
public/            Static files served as-is (images, robots.txt, sitemap.xml, og-image)
scripts/           Project tooling (vulnerability check)
src/
  animations/      Framer Motion variants
  assets/          SVG icons
  components/      Shared UI components (navbar, sidebars, section layout, footer)
  contexts/        React context (app-wide state)
  layouts/         Page layouts
  pages/Home/      The home page and its sections (About, Experience, Work, Contact)
  utils/           Helpers (e.g. experience duration formatting)
index.html         HTML shell with SEO, Open Graph, and structured data
```

## Code quality and security

Checks run automatically at each stage:

| When                                  | What runs                                                                       |
| ------------------------------------- | ------------------------------------------------------------------------------- |
| `npm install`                         | Vulnerability summary (warning only)                                            |
| `git commit`                          | Prettier + ESLint on staged files (lint-staged)                                 |
| `git push`                            | Vulnerability summary (warning only)                                            |
| PRs, pushes to `dev`/`master`, weekly | **Security Audit** workflow - fails on high/critical production vulnerabilities |
| Weekly                                | Dependabot opens dependency update PRs against **`dev`** only (never `master`)  |
| New advisory published                | Dependabot alert email                                                          |

## Branching and releases

```
feature/*  ──PR──▶  dev  ──PR──▶  master  ──▶  deploy + tag vX.Y.Z
```

1. Create a feature branch from `dev`, then open a PR into `dev`.
2. When ready to release, bump the version on `dev`:
   `npm version patch --no-git-tag-version` (or `minor` / `major`), and commit it.
3. Open a PR from `dev` into `master`. The **Version Check** workflow fails the PR if the version was already released.
4. Merge the PR. The **Build & Deploy** workflow publishes the site to GitHub Pages, then automatically
   tags the commit `vX.Y.Z` and creates a GitHub release with generated notes.
5. Merge `master` back into `dev` so both branches share the merge commit.

Dependabot update PRs target `dev`, so dependency updates are reviewed and merged there and only reach `master` with the next release.

## Deployment

The site deploys from `master` via [`.github/workflows/build-deploy-master.yml`](.github/workflows/build-deploy-master.yml). The custom domain is configured under **Settings → Pages**, with DNS managed in Cloudflare.
