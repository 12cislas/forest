# Forest Design System (Manifesto Minimal v1)

This file is the canonical baseline for the public site visual language.

## 1) Purpose

Forest is primarily a manifesto. The design should feel calm, legible, and durable.

- Prioritize reading flow over decoration.
- Favor structure over stylistic flourish.
- Keep visual choices sparse and repeatable.

## 2) Tokens source of truth

Global tokens live in `src/app/globals.css`.

- Colors: `--forest-*` and semantic aliases (`--bg-canvas`, `--fg-1`, etc.)
- Type scale: `--fs-*`, `--lh-*`, `--ls-*`
- Rhythm: `--space-*`, `--radius-*`, `--shadow-*`, `--dur-*`

Do not introduce ad-hoc hex values or one-off spacing values without first adding a token.

## 3) Typographic rules

- Headings: serif (`--font-serif`)
- Body: sans (`--font-sans`) by default, serif in long-form manifesto sections is allowed
- Keep hierarchy tight:
  - H1: strong but not theatrical
  - H2: simple sectional labels
  - Body: consistent 1.6–1.75 line-height

## 4) Layout rules

- Default reading width: 68ch max for prose.
- Prefer single-column layouts for manifesto pages.
- Section spacing should use a consistent vertical rhythm.
- Avoid card-heavy compositions for manifesto content.

## 5) Component rules

Allowed primitives:
- `Nav`
- `Page header`
- `Section`
- `Simple list`
- `Single CTA`
- `Footer`

Avoid unless explicitly needed:
- ornamental dividers
- decorative counters
- multiple competing CTAs
- marketing-style grids on manifesto pages

## 6) Change control

When updating the design system:

1. Update this document.
2. Update matching tokens/components.
3. Keep changes scoped and intentional.
4. Note the version bump in PR description.

Current version: **v1.0 (Manifesto Minimal)**.
