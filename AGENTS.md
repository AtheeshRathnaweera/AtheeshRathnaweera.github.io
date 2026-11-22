# Agent instructions

Portfolio site for Atheesh Rathnaweera (https://atheeshr.com): React 19, TypeScript, Vite, Tailwind CSS 4, Flowbite React, Framer Motion. See README.md for setup and scripts.

## Before proposing changes

Run `npm run lint`, `npx prettier --check .` and `npm run build`. CI runs the same checks.

## Code

- Import from `src` with the `@/` alias.
- Home sections: `src/pages/Home/_components/<Name>/index.tsx`. Shared components: `src/components/<Name>/index.tsx`.
- Experience durations: use `getDuration()` from `@/utils/common` (format `02 yrs 01 mos`), not hard-coded strings.
- Support light and dark mode with Tailwind `dark:` classes.
- Absolute URLs use `https://atheeshr.com/`, never the old `github.io` address.
- Don't edit generated files: `.flowbite-react/class-list.json`, `dist/`.

## Git

- Branch from `dev`: `feature/*` → `dev` → `master`. Never commit to `master` directly; merging into `master` deploys and releases.
- Commits use Conventional Commits: `<type>: <summary>`, lower case, imperative, no trailing period. Types: `feat`, `fix`, `docs`, `style`, `refactor`, `build`, `ci`, `chore`.

## Pull requests

Use `.github/pull_request_template.md` and keep it short.

- Feature PR title: a Conventional Commit line, e.g. `feat: add Azure to About section`.
- Release PR title (`dev` → `master`): `Release vX.Y.Z – <short summary>`, matching `version` in `package.json`. Bump it first with `npm version patch --no-git-tag-version`.
- "Changes": a few bullets grouped by area (Content, SEO, CI/CD, Tooling, Dependencies). Outcomes, not a commit list.
- Plain language, no emoji, and don't claim testing that wasn't done.
