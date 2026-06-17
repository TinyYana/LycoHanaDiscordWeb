---
name: lycohana-site-maintenance
description: Maintain the LycoHana Discord Web Astro landing page with small, voice-preserving updates to copy, data, sections, styling, and deployment checks.
---

# LycoHana Site Maintenance

Use this skill when updating the LycoHana Discord Web repo.

This page is a community entrance. The default move is to keep it small, readable, and easy to maintain.

## Read First

1. `README.md`
2. `AGENTS.md`
3. `CLAUDE.md`
4. The exact `src/config`, `src/data`, section, or interactive component file involved in the task

## Common Tasks

- Change Discord invite, site metadata, canonical URL, or created date: edit `src/config/site.ts`.
- Update FAQ: edit `src/data/faq.ts`.
- Update community features: edit `src/data/features.ts`.
- Update recommendation categories: edit `src/data/picks.ts`.
- Update history: edit `src/data/timeline.ts`.
- Reorder sections: edit `src/pages/index.astro`.
- Adjust visual tokens or shared classes: edit `src/styles/global.css`.
- Change a static section: edit `src/components/sections/*.astro`.
- Change a client-side interaction: edit `src/components/interactive/*.tsx`.

## Voice

Default to Traditional Chinese.

Keep copy casual and specific. It can sound like TinyYana actually running a small Discord community:

- "這裡大概是這樣" is better than corporate positioning.
- Short sentences are fine.
- Mild personality is fine.
- Do not over-polish every paragraph into a slogan.
- Do not erase the slightly personal, lived-in feeling of the existing copy.

If rewriting a lot of prose, use `tinyyana-speaking-style`.

## Scope Guardrails

Do not add these for ordinary maintenance:

- CMS
- backend service
- auth
- database
- Discord API integration
- analytics/tracking
- route expansion
- new dependency

If one of those seems useful, describe it as an optional next step and keep the current task small.

## UI Guardrails

- Preserve the warm background, red accent, serif headings, and light/dark theme.
- Keep the first viewport clearly about LycoHana 彼岸花社群.
- Check mobile text wrapping after long copy edits.
- Prefer Astro for static content.
- Prefer React only when browser state or interaction is needed.
- Avoid generic SaaS landing page patterns.

## Validation

Use the smallest meaningful check:

```sh
npm run check
npm run build
```

For UI changes, also do a manual preview when practical:

```sh
npm run dev
```

Do not claim visual verification if you only ran type/build checks.
