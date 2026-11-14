# Mayfair Atlas — Next.js migration handoff

Read this file first, then read the source files before writing any code.

## Objective

Migrate the approved static Mayfair Atlas homepage to **Next.js (App Router) + TypeScript**, preserving visual fidelity, and add restrained, editorial-quality motion plus deliberate tablet responsiveness (the original only defines a mobile breakpoint).

The project directory (`dg-mayfair/`) is empty. Build the new app in place. Do not modify the handoff source.

## Source of truth

Handoff package: `C:/Users/Hillary Odinchefu WS.DESKTOP-CF4QLGF/Downloads/mayfair-atlas-hosting-handoff`

- `site/index.html` — all page copy, section order, contact details, metadata. Copy verbatim.
- `site/styles.css` — approved layout, type scale, colour tokens, responsive rules. Port, do not redesign.
- `site/site.js` — reference for mobile-menu behaviour only.
- `site/assets/` — `ridgeline.jpg` (1536×1024), `colonnade.jpg` (1122×1402), `contours.svg` (viewBox 780×620), `mayfair-atlas-logo.svg` (538×117), `mayfair-atlas-icon.svg` (64×64).
- `brand/` — reference only; do not publish.
- `README.md` — hosting notes.

## Persistence review (completed — do not add persistence)

The application is a single static marketing page. There are no forms, no authentication, no user-generated content, no server calls, no cookies/localStorage, and no database. Contact is outbound `mailto:`/`tel:` only. The only state is the transient mobile-menu toggle and URL hash.

**Do not add:** database, ORM, CMS, API routes, route handlers, server actions, contact form, analytics, auth, env vars, or client storage. If functionality appears to need any of these, stop and ask.

## Tech decisions (use these unless the user overrides)

- Next.js App Router, TypeScript `strict: true`, no `any`.
- **Static export**: `output: 'export'` and `images.unoptimized: true` in `next.config.ts` — matches the current static-hosting handoff. Publish directory becomes `out/`.
- Styling: port the existing `styles.css` into global CSS (or CSS Modules if you split cleanly). Preserve the custom properties, type scale, spacing clamps, and breakpoints. Do not switch to Tailwind and re-derive the design.
- Fonts: keep the system stacks (`--serif`, `--sans`). Do not add webfonts or font CDNs.
- No animation libraries. Use CSS transitions/keyframes plus a small `IntersectionObserver` client component.
- Only the mobile menu and the scroll-reveal wrapper should be client components. All sections stay server components.
- Use plain `<a href="#...">` for in-page anchors. Do not use `next/link` for hash-only navigation.

## Suggested structure

```
app/
  layout.tsx          metadata + viewport.themeColor, skip link wrapper
  page.tsx            composes the five sections
  globals.css         ported styles
  icon.svg            copied favicon
components/
  SiteHeader.tsx      server; logo + desktop nav + MobileNav
  MobileNav.tsx       "use client"; toggle, Escape, resize close, focus target
  Hero.tsx
  Firm.tsx
  Approach.tsx
  InvestmentLens.tsx
  Contact.tsx
  SiteFooter.tsx
  Reveal.tsx          "use client"; IntersectionObserver, progressive enhancement
  ArrowIcon.tsx       shared inline SVG symbol/component
content/
  site.ts             typed content: nav, hero, firm, principles, lens, contact
public/
  assets/             copied from site/assets (same filenames)
```

Assets must keep their original filenames. In global CSS, reference them with **absolute paths** (`/assets/contours.svg`) because the CSS file no longer sits beside the assets folder.

## Content rules

- Migrate every string in `index.html` exactly: headings, em-dashes, punctuation, section numbering (`01`–`04`), figure caption, footer year (`© 2026`).
- Contact strings exactly: `contact@mayfairatlas.com`, display `+01(346)-7175177` → `tel:+13467175177`, display `+234-9034737642` → `tel:+2349034737642`.
- Preserve semantics: `header`/`main`/`footer`, one `h1`, `h2` per section, `h3` per item, `address`, ordered lists for principles and lens items.
- Preserve SEO: title, description, OG title/description/type; `themeColor` `#121b25`; favicon from the handoff icon.
- Do not add sections, pages, taglines, social links, or a contact form. Private Office / Atlas Method pages are intentionally excluded.

## Responsive requirements

Preserve the existing mobile rules at `max-width: 760px`. Then make tablet intentional rather than inherited:

- **Mobile ≤ 760px**: match the approved layout — collapsed menu, stacked firm section with copy first, single-column principles, single-column lens, stacked contact details, wrapped footer.
- **Tablet 761–1024px**: verify against a real viewport, don't assume. Keep the 3-up principles but reduce cell padding; keep the two-column lens; keep the firm grid two-column until it feels cramped (stack around 820–900px if needed); tighten section padding via the existing clamps. If the desktop nav collides with the logo at 768–900px, raise the menu breakpoint to 900px rather than letting it wrap.
- **Desktop ≥ 1025px**: unchanged from the source.
- Test at 320, 375, 768, 820, 1024, 1440px. No horizontal scroll at any width. Use `clamp()` as the source does; avoid new fixed widths.
- Ensure tap targets ≥ 44×44px on mobile and visible `:focus-visible` states (gold outline, offset 6px as in source).

## Motion requirements ("clean", restrained)

Editorial luxury tone: slow, subtle, purposeful. Motion must never delay reading or cause layout shift.

- Hero on load: stagger label → h1 → deck → link, 60–80ms apart, 500–700ms `ease-out`, opacity + 12–24px translate only. Optional very slow hero image scale (1.04 → 1 over ~1.4s).
- Scroll reveals: section headings and content fade/translate in once at ~15% visibility, 500–650ms, `ease-out`, 16–20px. Stagger list items 60–90ms.
- Mobile menu: 200–240ms opacity/translate transition; no height animation jank.
- Keep existing hover polish: nav colour, arrow translate-x on `.text-link`, underline colour.
- Animate only `transform` and `opacity`. No parallax, scroll-jacking, bouncing, spring overshoot, or looping ambient motion.
- `prefers-reduced-motion: reduce`: disable all transitions/animations and smooth scroll; content must render immediately.
- Progressive enhancement: if JS fails or `IntersectionObserver` is unavailable, all content must be visible by default (no permanently hidden content). The mobile nav must remain usable.
- Do not add a motion library.

## Accessibility

Carry over and preserve: skip link, `aria-controls`/`aria-expanded` on the menu button, `aria-label` on brand links, Escape closes menu and returns focus to the button, anchor activation closes the menu and focuses the target section (`tabindex="-1"`, `focus({ preventScroll: true })`), decorative images `alt=""`, colonnade alt text verbatim, SVG arrows `aria-hidden`.

## Definition of done

- `npm run dev` renders the page pixel-faithful to the handoff at desktop widths; `npm run build` succeeds and produces `out/`.
- Content, order, contact links, and metadata match `index.html` exactly.
- Mobile and tablet verified in a browser at the widths above; menu, keyboard, focus, and reduced-motion modes all work.
- No persistence, no extra dependencies, no new sections, no redesign.
- Report any intentional deviation (e.g., raised nav breakpoint) in one line.
