# AGENTS.md

## Purpose

This repo is the static landing page for the LycoHana 彼岸花 Discord community.

The job of an agent here is usually small: update copy, adjust one section, refresh community data, fix a UI issue, or keep the page deployable. Do not turn this into a platform, CMS, dashboard, bot, or full community management system unless the user explicitly asks for that direction.

## Instruction Priority

Follow instructions in this order:

1. The user's latest explicit request.
2. This `AGENTS.md` and `CLAUDE.md`.
3. Skill instructions explicitly requested by the user.
4. Existing project conventions.
5. General best practices.

If instructions conflict, use the most specific and most recent one. If the safe path is unclear, state the assumption before changing files.

## Project Shape

- Framework: Astro.
- Client interactivity: React, only where interaction is actually needed.
- Styling: Tailwind CSS v4 plus CSS variables in `src/styles/global.css`.
- Deployment output: static build in `dist/`.
- Cloudflare config: `wrangler.jsonc`.
- Main page entry: `src/pages/index.astro`.

Important content files:

- `src/config/site.ts` for site metadata, Discord invite URL, canonical URL, and community creation date.
- `src/data/features.ts` for community feature copy.
- `src/data/picks.ts` for pick/recommendation categories.
- `src/data/faq.ts` for FAQ content.
- `src/data/timeline.ts` for community history.
- `src/components/sections/` for page sections.
- `src/components/interactive/` for React islands.

## Local Workflow

Before changing files:

1. Read `README.md`, this file, and `CLAUDE.md`.
2. Inspect the nearby source or data file you plan to edit.
3. Check `package.json` scripts.
4. Prefer the smallest edit that solves the request.
5. Check `git status --short` before broad edits or formatting.

Useful commands:

```sh
npm run dev
npm run check
npm run build
npm run preview
npm run format
```

Validation priority:

1. `npm run check`
2. `npm run build`
3. Manual responsive/visual check when UI or copy length changed
4. `npm run format` only when formatting is useful and the working tree scope is understood

Do not claim a command passed unless it actually ran and passed.

## Editing Rules

- Keep changes focused and reviewable.
- Preserve the existing folder structure.
- Do not add dependencies unless the current stack cannot reasonably solve the task.
- Do not add routes, CMS, backend logic, auth, analytics, or Discord API integration for a copy/layout task.
- Do not rewrite large sections just to make the prose more polished.
- Avoid deleting content history from `src/data/timeline.ts` unless the user asks.
- Avoid changing deployment config, canonical URL, or Discord invite URL without calling it out.

## Voice And Content

Default writing language is Traditional Chinese unless the user asks otherwise.

The site voice should feel like a small Discord community being introduced by someone who actually runs it:

- casual but clear
- a little personal
- not corporate
- not over-explained
- not too clean in a fake AI way

Good copy can be short. It can stop after making the point. Do not make every paragraph end in a moral, a slogan, or a perfect summary.

For Traditional Chinese prose, use `tinyyana-speaking-style` when the user asks for voice matching, content rewrite, README prose, community copy, or anything that should sound like TinyYana.

## UI Direction

The current visual direction is warm, soft, and community-oriented:

- light/dark theme support
- warm background
- red accent inspired by LycoHana / 彼岸花
- serif display headings
- simple panels and timeline lines

When touching UI:

- Keep the first screen obviously about LycoHana 彼岸花社群.
- Preserve readable Traditional Chinese line lengths.
- Make sure long copy still fits on mobile.
- Use Astro for static sections.
- Use React only for interactive islands.
- Do not make the page look like a generic SaaS landing page.

For larger public-facing UI work, consider these skills when available:

- `ui-art-direction` before choosing a new visual direction.
- `ui-refactoring` when improving layout, hierarchy, spacing, accessibility, or responsiveness.
- `taste-frontend` after direction and hierarchy are decided, especially before final polish.

## Repo-Backed Skill

This repo includes a small maintenance skill:

```txt
skills/lycohana-site-maintenance/SKILL.md
```

Use it for recurring site maintenance tasks: copy updates, section updates, data refreshes, and small UI fixes. The skill is intentionally small. It should help agents remember the local shape of the project, not replace reading the current files.

## Safety Boundaries

Stop and ask for confirmation before:

- deleting or rewriting large parts of the page
- changing Discord invite URLs
- changing Cloudflare deployment config
- adding a backend, CMS, database, auth, or Discord API integration
- adding tracking/analytics
- modifying secrets or environment files
- running destructive shell or git commands
- force pushing or rewriting git history

Never print, commit, or hardcode secrets.

## Final Response Expectations

For coding or documentation tasks, report:

1. Summary.
2. Files changed.
3. Validation run.
4. Remaining risks or a concrete next step, if relevant.

Keep the response practical. If something was not tested, say so.
