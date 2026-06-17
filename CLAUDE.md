# CLAUDE.md

Claude should follow `AGENTS.md` first. This file adds a shorter project-specific reminder for Claude-style coding sessions.

## Project Summary

LycoHana Discord Web is a small Astro landing page for the LycoHana 彼岸花 Discord community. The site is meant to feel like an actual community entrance, not a polished corporate homepage.

Keep the project small. Most useful changes should happen in:

- `src/config/site.ts`
- `src/data/*.ts`
- `src/components/sections/*.astro`
- `src/components/interactive/*.tsx`
- `src/styles/global.css`

## How To Work Here

1. Read `README.md` and `AGENTS.md`.
2. Inspect the exact source/data files involved in the task.
3. Make the smallest useful change.
4. Run the lightest meaningful validation, usually `npm run check` and `npm run build`.
5. Report what changed and what was actually verified.

## Voice

Default to Traditional Chinese for site copy and project docs unless the user asks otherwise.

The voice should stay casual, specific, and a little lived-in. Avoid turning copy into formal brand language. If a sentence already sounds like someone who runs the community wrote it, do not sand it down just to make it neater.

Use `tinyyana-speaking-style` for README prose, community copy, FAQ rewrites, and other Traditional Chinese text that should match TinyYana's voice.

## Frontend Boundaries

- Use Astro for static layout and sections.
- Use React only for interactive islands.
- Keep Tailwind class usage consistent with nearby files.
- Preserve light/dark theme behavior.
- Do not add dependencies for simple layout or copy work.
- Do not create new pages, routing, CMS, backend services, or Discord integrations unless explicitly requested.

## Validation

Preferred checks:

```sh
npm run check
npm run build
```

Use `npm run format` only when formatting is part of the intended change, because it may rewrite unrelated files.

## Extra Skill

For recurring site maintenance, read:

```txt
skills/lycohana-site-maintenance/SKILL.md
```

It captures the repo-specific maintenance flow: where content lives, how to avoid scope creep, and how to keep the page's current voice intact.
