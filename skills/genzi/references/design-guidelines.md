# Design Guidelines: Surface-Aware, Reference-First, Recipe-Driven

Read this at Step 1 (context), Step 8 (design direction) and Step 10 (implementation).

Contents: 0 Philosophy, 1 Surface mode, 2 Context deduction, 3 Layout archetypes, 4 Component recipes, 5 Imagery and asset strategy, 6 Typography, 7 Color and shape, 8 Motion, 9 Responsive, 10 Copywriting, 11 Tells audit, 12 Light or dark.

---

## 0. Philosophy

Two failure modes exist.

1. **Template slop:** dark gradient background, purple-cyan glow, centered hero, pill badge, three equal cards, empty puffery.
2. **Overcorrected sterility:** flat white canvas, black text, tables, no imagery, no atmosphere.

Both are generic. Human-made design has five levers. Use all five on every public page:

1. **Imagery with depth.** A cinematic photo or render carries the page.
2. **Scale contrast.** A very large headline with very few words next to small, quiet text.
3. **Layering.** Glass capsule over photo, floating tile over photo, raised center card, hairline over image.
4. **Restraint.** One accent color, one radius family, one elevation style.
5. **Detail.** Index numbers, hairlines, tabular figures, real units, real place names, precise microcopy.

Operate and Read surfaces apply the same levers with less atmosphere and more density.

## 1. Surface mode and priority

See SKILL.md for the priority orders. In short: Operate favors density and speed, Read favors reading comfort, Persuade/Experience favors visual impact once functionality, hierarchy and usability are secured. Never trade away readability or contrast for atmosphere.

## 2. Context deduction (10 dimensions, internal)

Website type, primary goal, target user, industry, usage context (device, light, connection), available data and features, first thing the visitor must see, usability demands, brand character, cultural and language context. Output of this step is a one-line decision per dimension inside the PRD, not an essay.

Indonesian context: Bahasa Indonesia by default when the user writes Indonesian, `Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })`, dates `DD MMM YYYY` with `id-ID` locale, WhatsApp click-to-chat (`https://wa.me/62...`) as primary contact for service businesses, mobile-first (most traffic is phone on mid-range devices, so compress images and avoid heavy scripts).

## 3. Layout archetypes

Pick by purpose. If the user gave references, the reference family decides; this list fills in details.

### 3.1 Scenic Immersive (travel, hospitality, nature, lifestyle brand) - Experience
- **Header:** floating island capsule (frosted glass or solid white), centered, fixed, with a high-contrast pill action. Or transparent minimal links over the photo.
- **Hero:** full-bleed photo or render, `min-height: 100svh` (or 85svh with the next section peeking). Headline 2 lines or fewer, left-aligned or centered per reference. Text sits in the image's calm area, otherwise a scrim.
- **Interactive anchor (optional):** glass booking or inquiry widget with segmented tabs and 4-6 fields.
- **Below hero:** slim horizontal value ribbon with hairline dividers (not a 3-card stack), then destination or tour rail, then story split, then proof, then inquiry.
- **Cards:** portrait photo cards with bottom scrim, price in IDR, duration, one action.

### 3.2 Dark Cinematic (youthful destination, campaign, nightlife, photography)
- Black or near-black background, full-bleed photos, uppercase heavy display, 1px hairlines, one hot accent (red-orange), vertical index rail, square or tiny radius.
- Photos always carry a scrim under text. Body text at least 0.875rem and 7:1 contrast on black.

### 3.3 Editorial Scenic (premium operator, boutique)
- Sans + italic serif headline mixing, fan carousel of portrait cards, bento "about" block, large stat row, mostly white sections between photographic ones.

### 3.4 Commercial Booking (packages, many products, inquiry-driven)
- Hero + booking widget, dark feature strip, destination rail with prices, story split with collage, tour types, social proof, newsletter, rich footer. Green or other single brand color.

### 3.5 Storefront and retail - Persuade
- High-utility header: brand, search, location/delivery selector, cart with live counter, optional announcement strip.
- Hero with one studio-lit product visual, headline under 2 lines, one CTA with arrow.
- Value ribbon with hairlines, promo strip with copy-able coupon, product grid with unified aspect ratio (category, title, rating, price with strike-through, add-to-cart), visual category rail, split social proof.

### 3.6 Architecture, industrial, high-ticket
- Hairline header over dark scenic photo, monumental left-aligned headline, glass process cards (01 to 06), asymmetric story section, specification grid, dark metric bar, inline quote form.

### 3.7 Editorial and content (Read)
- Lead story + numbered latest list, asymmetric multi-column with hairline dividers, 65-75ch measure.

### 3.8 Dashboard and operations (Operate)
- Compact sidebar or top bar, metric summary strip with tabular numbers, sortable and filterable tables, inline row actions, dense spacing.

### 3.9 POS and high-velocity utility (Operate)
- Keyboard shortcuts, auto-focused scan input, high contrast, zero decoration.

## 4. Component recipes

Copy and adapt these. Token names come from `token-kits.md`.

### 4.1 Floating island nav (capsule)

```css
.nav-island {
  position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
  width: calc(100% - 32px); max-width: 1080px; z-index: 1000;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 8px 8px 8px 24px; border-radius: 9999px;
  background: hsla(0, 0%, 100%, 0.82);
  -webkit-backdrop-filter: blur(16px); backdrop-filter: blur(16px);
  border: 1px solid hsla(0, 0%, 100%, 0.5);
  box-shadow: 0 8px 32px hsla(0, 0%, 0%, 0.10);
}
.nav-island a { min-height: 44px; display: inline-flex; align-items: center; padding-inline: 12px; }
```

Dark glass variant (over photo): `background: hsla(220, 40%, 10%, 0.35); border-color: hsla(0,0%,100%,0.22); color: #fff;`. On mobile collapse to logo + menu button inside the capsule and open a full-height sheet (focus trap, Escape closes).

### 4.2 Hero with image and text scrim

```css
.hero { position: relative; min-height: 100svh; display: grid; align-items: end; isolation: isolate; overflow: clip; }
.hero__media { position: absolute; inset: 0; z-index: -2; width: 100%; height: 100%; object-fit: cover; object-position: 50% 40%; }
.hero::after { /* scrim: only where text sits */
  content: ""; position: absolute; inset: 0; z-index: -1;
  background:
    linear-gradient(to top, hsla(220, 40%, 6%, 0.70) 0%, hsla(220, 40%, 6%, 0) 55%),
    linear-gradient(to right, hsla(220, 40%, 6%, 0.45) 0%, hsla(220, 40%, 6%, 0) 60%);
}
.hero__title { font-size: clamp(2.75rem, 7vw, 6.5rem); line-height: 0.98; letter-spacing: -0.03em; text-wrap: balance; max-width: 14ch; }
```

For atmospheric-light heroes where the headline sits in a calm sky, drop the scrim and set `object-position` so the calm area stays behind the text on both desktop and mobile.

### 4.3 Primary pill CTA with arrow disc

```css
.btn-pill { display: inline-flex; align-items: center; gap: 10px; min-height: 48px; padding: 6px 6px 6px 22px;
  border-radius: 9999px; background: #fff; color: var(--text); font-weight: 600;
  box-shadow: 0 6px 20px hsla(0,0%,0%,0.14); transition: transform 120ms ease-out; }
.btn-pill:active { transform: scale(0.97); }
.btn-pill__disc { width: 36px; height: 36px; border-radius: 50%; background: var(--text); color: #fff; display: grid; place-items: center; }
```

### 4.4 Glass booking widget

- Container: `background: hsla(0,0%,100%,0.92); border-radius: 16px; padding: 20px; max-width: 420px;` (one elevation: shadow only, no border).
- Segmented tabs (`role="tablist"`), 2-column field grid with icon + label + value, swap button between origin and destination, full-width primary button.
- Real behavior: validate with a schema, show inline errors, on submit build a WhatsApp or email inquiry (or call the mock service), disable the button while pending, show success and error states.
- Mobile: turn into a bottom sheet opened from a sticky "Cari paket" bar in the lower 40% of the screen.

### 4.5 Fan carousel (editorial scenic)

```css
.fan { display: flex; align-items: flex-end; justify-content: center; gap: 12px; overflow: clip; padding-block: 24px 48px; }
.fan__card { flex: 0 0 clamp(150px, 18vw, 240px); aspect-ratio: 3 / 4.4; border-radius: 24px; overflow: hidden;
  transform: translateY(var(--drop, 24px)) scale(var(--scale, 0.88)) rotate(var(--tilt, 0deg));
  transition: transform 240ms cubic-bezier(.2,.8,.2,1); position: relative; }
.fan__card[aria-current="true"] { --drop: 0px; --scale: 1; --tilt: 0deg; flex-basis: clamp(200px, 24vw, 320px); z-index: 2; }
```

Set `--scale`, `--drop`, `--tilt` per card from its distance to the active index in the component (distance 1: 0.9 / 12px / 2deg, distance 2: 0.8 / 28px / 4deg). Controls: prev/next round buttons, arrow keys, swipe with pointer events (handle `pointercancel`). Mobile: replace with `scroll-snap-type: x mandatory` rail showing 1.15 cards.

### 4.6 Portrait photo card with scrim

```css
.tour-card { position: relative; aspect-ratio: 3 / 4; border-radius: 16px; overflow: clip; color: #fff; isolation: isolate; }
.tour-card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -2; }
.tour-card::after { content: ""; position: absolute; inset: 0; z-index: -1;
  background: linear-gradient(to top, hsla(220,40%,6%,0.80) 0%, hsla(220,40%,6%,0.25) 45%, transparent 70%); }
.tour-card__meta { font-variant-numeric: tabular-nums; }
```

Content: place name, duration ("3 hari 2 malam"), "Mulai dari Rp 1.250.000", one action. For dark cinematic, set `border-radius: 0` and add `border: 1px solid hsla(0,0%,100%,0.6)`.

### 4.7 Vertical index rail (dark cinematic)

```css
.index-rail { position: absolute; inset-block: 25% auto; inset-inline-end: 24px; display: grid; gap: 14px; justify-items: end; font-variant-numeric: tabular-nums; }
.index-rail button { font-size: 1rem; opacity: .55; min-width: 44px; min-height: 44px; }
.index-rail button[aria-current="true"] { font-size: 2.25rem; opacity: 1; }
.index-rail button[aria-current="true"]::after { content: ""; display: inline-block; width: 56px; height: 1px; background: currentColor; margin-inline-start: 12px; vertical-align: middle; }
```

It controls hero slides (background crossfade, opacity only). Hide the rail below 640px and show dots at the bottom instead.

### 4.8 Value ribbon (replaces the 3-card stack)

A single strip, 3-4 items, line icon + title + one short line, separated by `border-inline-start: 1px solid var(--border-subtle)`. On mobile it becomes a 2x2 grid or horizontal scroll-snap.

### 4.9 Stat row

Large numerals (`font-variant-numeric: tabular-nums; font-size: clamp(2rem, 4vw, 3.5rem)`), tiny caption under each, hairline separators. Only real numbers or numbers flagged as sample.

### 4.10 Polaroid collage (story section)

Two photos with 3-6 degrees of opposite rotation, white 8px frame, soft shadow, `object-fit: cover`, explicit aspect ratio. Floating stat tile overlapping the main photo corner. Remove rotation under reduced motion only if it is animated; static rotation is fine.

### 4.11 Hairlines, kickers, labels

An understated uppercase text kicker (`font-size: .75rem; letter-spacing: .08em; text-transform: uppercase`) is allowed above section headings. A floating pill badge with a dot above the page `h1` is skipped by default; use it only when a reference shows it and the message is a real announcement.

## 5. Imagery and asset strategy

The photo is half the design. A page without strong imagery will look generic regardless of CSS.

**Source order**
1. Images supplied by the user (best, also solves licensing).
2. Generated images via the platform's image generation tool when available. Prompt for: subject, time of day and light, lens and depth of field, color palette matching the tokens, "calm negative space in the upper area for headline". Generate a hero at 16:9 and a portrait 3:4 set for cards.
3. Real photographs from a CDN the project already uses, or Unsplash URLs that were verified to exist (search first, never invent photo IDs). Add `?auto=format&fit=crop&w=1600&q=75` style parameters.
4. If no real image is available, build a layered SVG landscape (3-5 silhouette layers with atmospheric perspective gradients, grain via `feTurbulence`) so the page still has depth. State plainly in the final message that real photos should replace it. Never ship flat color boxes as photo placeholders, and never use hand-drawn doodle SVGs.

**Treatment**
- Place text over calm regions. Use `object-position` to keep them aligned at desktop and mobile.
- Scrim only as strong as needed: 0.35-0.7 black-navy at the text edge, fading to transparent.
- Foreground blur layer (blurred flowers, grass, leaves) adds depth in atmospheric-light heroes: a second absolutely positioned image with `filter: blur(6px)` at the bottom with `mask-image: linear-gradient(to top, #000 40%, transparent)`.
- Subtle color grade through a tinted overlay (`mix-blend-mode: soft-light` with brand hue at 0.2) so photos feel cohesive.
- Performance: hero `fetchpriority="high"`, not lazy; others `loading="lazy"`; explicit `width`/`height` or `aspect-ratio`; serve WebP/AVIF; hero under 250 KB at mobile width. Provide `srcset` and `sizes`.
- Alt text describes the scene and context ("Pendaki duduk di dermaga kayu menghadap danau pegunungan"). Decorative layers use `alt=""` and `aria-hidden="true"`.

## 6. Typography

Load real fonts (Google Fonts or the project's). Name them in the PRD. Always set `font-display: swap`, a metric-compatible fallback stack, `text-wrap: balance` on headings, and 65-75ch measure for paragraphs.

| Family | Display | Body | Notes |
|---|---|---|---|
| Atmospheric light | Plus Jakarta Sans 600, or Manrope 700 | same | tight tracking `-0.03em`, single line headline |
| Atmospheric light, friendly | Caveat Brush or Gochi Hand (only if the brand is playful) | Inter | use at 2 lines max |
| Editorial scenic | Inter Tight 500 + Instrument Serif italic for emphasis words | Inter | mix inside one headline |
| Commercial booking | Plus Jakarta Sans 700-800 | Plus Jakarta Sans 400-500 | accent color on one keyword |
| Dark cinematic | Montserrat 800 or Anton, uppercase, `letter-spacing: -0.01em` | Open Sans 300-400 or Figtree | body at least 0.875rem |
| Institutional | Source Serif 4 | Public Sans | |
| Utilitarian | Inter | JetBrains Mono for codes and numbers | |

Scale: fluid with `clamp()`. Hero headline `clamp(2.75rem, 7vw, 6.5rem)`; section heading `clamp(1.75rem, 3.5vw, 3.25rem)`; body `1rem-1.125rem`; captions never below `0.8125rem`.

## 7. Color and shape

- One accent, sampled from the reference or domain. Photos carry the remaining color.
- Light or dark is decided by the lead reference and domain (section 12), not by habit.
- Contrast: 4.5:1 body, 3:1 large text, measured against the real image area behind the text (use the scrim to guarantee it).
- Radius scale is chosen once per site: sharp (0-4px, dark cinematic, editorial gallery), medium (8-16px, commercial), soft (20-28px + pills, atmospheric and editorial scenic). Do not mix scales.
- Elevation: declare once, shadow or border, never both on the same element. Shadows are for floating layers (nav, widget, dropdowns, lifted card).
- No gradient text, no thick colored side-stripes on cards, no purple-cyan radial glows without brand reason.
- Theme browser surfaces: `::selection`, `caret-color`, `:focus-visible`, scrollbar color, `font-variant-numeric: tabular-nums` for numbers.

## 8. Motion

Functional everywhere:
- Press feedback `scale(0.97)` under 150ms, focus ring transitions, sliding tab indicator, skeleton shimmer, error shake, toast entrance.
- Animate only `transform` and `opacity`.

Allowed on Persuade / Experience pages (and only there):
- One hero entrance: headline words fade-up with 40-60ms stagger, 4-6 items max, 400-600ms with ease-out; exits 50-70% faster.
- Hero background slow scale `1 -> 1.05` over 18-24s (transform only), or a crossfade between slides driven by the index rail.
- Carousel transitions 240-320ms with `cubic-bezier(.2,.8,.2,1)`.
- Parallax of at most 24px on one background layer.

Not allowed: infinite glowing borders, floating blobs, orbs with no information value, fade-in on every paragraph, any hero animation on Operate surfaces.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
}
```

## 9. Responsive recipes

Mobile is its own layout.

| Desktop element | Mobile transformation |
|---|---|
| Floating capsule nav | compact capsule, logo + menu button, full-height sheet with focus trap |
| Booking widget at hero side | sticky bottom bar "Cari paket" opening a bottom sheet |
| Fan carousel | scroll-snap rail, 1.15 cards visible |
| Vertical index rail | hidden, replaced by dots at the bottom |
| 4-column destination rail | scroll-snap rail or 2-column grid |
| Value ribbon | 2x2 grid or scroll-snap strip |
| Wide data table | stacked list or contained horizontal scroll |
| Hero text left-aligned over wide image | re-crop with `object-position`, move text to the lower half over a stronger scrim |

Rules: 44x44px targets with 8px separation, primary actions in the lower 40% of the screen, `padding-bottom: max(1rem, env(safe-area-inset-bottom))`, `overflow-x: clip` on the root wrapper, `min-width: 0` on flex/grid children, `viewport-fit=cover`. Test at 360, 390, 430, 768, 1024, 1440.

## 10. Copywriting

State what the product does. Short, concrete, with units.

Banned puffery (English): unleash, elevate, seamless, supercharge, next-gen, revolutionize, empower, game-changer, transform your workflow, harness the power of, ultimate solution, take it to the next level, discover a world of.

Banned puffery (Bahasa Indonesia): "solusi terbaik untuk Anda", "pengalaman tak terlupakan" tanpa detail, "revolusioner", "terdepan", "wujudkan impian Anda", "nikmati keajaiban", "jelajahi dunia tanpa batas" bila tidak ada makna konkret, "one stop solution".

| Slop | Human |
|---|---|
| "Jelajahi keindahan alam Indonesia bersama kami" | "Open trip Bromo 2 hari 1 malam, berangkat tiap Jumat dari Surabaya, maksimal 12 orang" |
| "Next-generation inventory platform" | "Catat barang masuk, hitung stok rak, ekspor laporan audit harian" |

Headlines are short because the image does the work. Button labels are verbs: "Lihat paket", "Tanya via WhatsApp", "Cek ketersediaan".

Sample content rule: the user's real business facts (prices, schedules, counts, testimonials, certifications) are never invented as truth. When a layout needs them, put realistic sample values in a typed data module, mark them as sample there, and list them in the final report. Domain realism still applies: real place names, plausible IDR prices, sensible durations. No Lorem Ipsum, no "Amazing Product".

## 11. Tells audit (20 points, run at Step 12)

The audit lists symptoms to detect, each with its fix. Any "yes" means fix and re-check.

```text
 1. Vercel/Linear clone styling without request                 -> use the reference family
 2. Dark mode chosen by habit                                    -> decide with section 12
 3. Purple/cyan radial glow, floating orbs, no brand reason      -> remove, use imagery
 4. Emoji used as icons, badges, decoration                      -> inline SVG / icon library
 5. Card soup (everything in a card)                             -> lists, hairlines, plain text; cards only for real entities
 6. Same big radius on everything                                -> one radius scale, pills only for buttons and chips
 7. Heavy shadow on flat elements, or border + shadow together   -> one elevation style
 8. Default startup sans only, timid headline                    -> named pair, clamp() scale, scale contrast
 9. Puffery copy (EN or ID)                                      -> concrete facts and verbs
10. Centered hero + subtitle + 2 pills, nothing else             -> reference skeleton, asymmetry, visual anchor
11. CTA oversized or repeated more than twice per screen         -> one primary per viewport
12. Layout ignores domain (tool styled as landing page)          -> surface mode archetype
13. Invented real-business claims presented as fact              -> sample-flagged data module
14. Lorem Ipsum or generic names                                 -> realistic domain data
15. Remove logo and it could be any template                     -> stronger imagery, type behavior, accent
16. Ghost cards (1px border under wide shadow)                   -> single elevation
17. Floating pill badge with dot above the h1 (unless real)      -> remove, or understated text kicker
18. Three equal feature boxes right under hero                   -> value ribbon or workflow track
19. Flat white canvas on a consumer / lifestyle / travel page    -> real photography, depth, layering
20. Stiff full-width navbar of plain links                       -> floating island or utility header
```

## 12. Light or dark

Choose dark only when at least one is true: the lead reference is dark, the user asked, the product is cinematic or night-related (nightlife, photography, film, observatory, code tools), or the photographs are dark and moody by nature (volcano at dusk, night city). Otherwise choose light. State the reason in the PRD in one line.
