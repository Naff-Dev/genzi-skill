# Design Guidelines

Read this when entering Step 2 (Detect Product Context) and Steps 10-11 (Design Direction, Interaction).

---

## 0. Design Philosophy (READ THIS FIRST)

The default output of most AI systems is: dark background, purple-to-blue gradient, white text, card grid, glassmorphism. That is not a design. That is a fallback.

**The directive here is the opposite:**

- Start from the product's personality, audience, and goal - not from a color that "feels safe."
- Be bold by default. Restraint is earned, not the starting point.
- A great frontend should feel like it was designed by a human who cared deeply about this specific product.
- If the design could belong to any other product, it is wrong.

**Reference visual benchmarks (study these before designing):**

```text
GAZU (fashion e-commerce)
    - Oversized editorial typography as layout element
    - Real photography, no illustrations
    - Near-black and off-white only, zero gradients
    - Clean categories as visual blocks, not card grids
    - Typography IS the hero, not a button or badge

Okaso (furniture/interior)
    - Full-bleed real product photo as hero background
    - Minimal text overlay, one clear CTA
    - Color comes from the product itself (orange sofa = brand warmth)
    - Small floating UI card for detail/variant - intentional, not decorative

Trekcave (adventure booking)
    - Clean white base, vivid orange accent for CTA only
    - Bold, heavy sans for headings - large, confident
    - Hero is image + text + stat card - asymmetric composition
    - Real photography of the destination, no illustrations

Vespa (product page)
    - Asymmetric editorial layout - text left, full product image right
    - White base, zero gradients, typography drives hierarchy
    - Small tags/labels as product specs, not decorative badges
    - Real product photography, no 3D renders or illustrations
```

**Default Mode: Colorful, Opinionated, Alive.**

Unless the product type or user explicitly demands neutral/minimal/dark:
- Use color actively. Not as accent. As identity.
- Use typography as a design element, not just a delivery mechanism.
- Use animation to make the interface feel real and responsive.

---

## 1. Context-Aware Design & Visitor Surface Modes

Never use one design template for every product type. Determine the **Visitor Surface Mode** and product context first:

```text
VISITOR SURFACE MODES (from Impeccable):
1. Persuade (Visitor decides and acts):
   - Landing pages, marketing, campaigns, pricing, waitlists.
   - Design is the product. Earn attention, build conviction, drive action.
   - Motion carries the brand voice; one rehearsed focal sequence.

2. Operate (Visitor completes a task):
   - SaaS app shells, dashboards, editors, admin tools, settings, POS.
   - Scanability, muscle memory, consistency, and native affordances outrank decoration.
   - Brand lives in crisp micro-interactions, flawless state handling, and dense typography.

3. Read (Visitor understands something):
   - Docs, knowledge bases, articles, guides, changelogs.
   - Hierarchy and measure optimized for comprehension (65-75ch line length, high contrast).
   - Quiet, unobtrusive motion serving orientation and reading comfort.

4. Experience (Visitor is inside the work itself):
   - Portfolios, creative galleries, interactive showcases, brand experiences.
   - The artifact leads from the very first viewport; interface chrome recedes.
   - High visual expression, bespoke layouts, and authored motion.
```

### 1.1 Product Type Priorities

```text
Portfolio / Personal Brand (Mode: Experience)
    Personality-first. Pick a strong visual voice.
    Use editorial typography (display fonts, large type, tight tracking).
    Color: 1-2 vivid signature colors. Make them count.
    Layout: unconventional grid, asymmetric sections, strong whitespace rhythm.
    Motion: smooth scroll transitions, word clip reveal on enter, cursor interaction.
    DO NOT default to dark/minimal. That is overdone.

SaaS / Web App (Mode: Operate)
    Clarity over decoration, but clarity does not mean boring.
    Color: saturated primary + neutral system. Not gray-on-gray.
    Navigation: fast, clear, predictable. Never bury key actions.
    Data/forms: spacing discipline, strong input states, visible feedback.
    Motion: micro-interactions on every action (save, error, toggle), skeleton loaders.

E-commerce / Marketplace (Mode: Persuade)
    Product is hero. Typography and color serve the product.
    Color: neutral base + 1 vivid accent for CTA and trust signals.
    Trust: clear pricing, real reviews, real brand signals.
    Motion: image hover zoom, cart feedback animation, quantity update animation.
    Reference: GAZU, Vespa, Okaso examples above.

Internal Business Tool / Admin (Mode: Operate)
    Dense but not chaotic. Speed above all.
    Color: low-saturation base, color only for status (error, warning, success).
    Typography: readable at small sizes, monospace for codes/IDs when useful. Tabular numbers.
    Motion: instant feedback (100ms), minimal animation (skeleton loaders acceptable).

Creative / Campaign / Landing Page (Mode: Persuade / Experience)
    This is where full expression is allowed and expected.
    Art direction: unconventional layout, bold color fields, strong type scale.
    Motion: scroll-driven animations, entrance effects, parallax (controlled), focal reveal.
    Color: anything. Own it. Make it memorable.
    Typography: expressive. Display fonts. Oversized headings are expected.

Transactional App (POS, Booking, Cashier) (Mode: Operate)
    Speed and legibility over aesthetics, but still branded.
    Large tap targets (min 48px), high contrast, minimal cognitive load per step.
    Color: saturated for action/CTA, desaturated for UI chrome.
    Motion: instant confirm/deny feedback, zero blocking animation.
    Reference: Trekcave example above.
```

If a product doesn't fit any category above, decide the mode and priorities based on user intent and usage context. Never default to a generic landing-page template.

---

## 2. Color System (MANDATORY to follow)

### 2.1 Do NOT Default to Dark or Black

Dark mode is a valid choice ONLY when:
- The product type genuinely benefits from it (code editor, media player, night dashboard).
- The user explicitly requests it.
- The brand identity is defined by dark.

DO NOT pick dark because it "looks professional." That is the AI safety blanket. Reject it.

### 2.2 Color Selection Process

Before choosing colors, answer:
1. What emotion should this product evoke? (trust, energy, calm, boldness, playfulness)
2. Who uses this? (age, profession, context)
3. Is there an existing brand identity?

Then pick:

```text
Primary color: 1 vivid, saturated color that defines the brand.
    Do not default to blue unless the product is genuinely finance/health/trust.
    Consider: warm orange, electric green, vivid coral, deep violet, saturated
    teal, bold red, golden yellow, magenta - these are underused and distinctive.

Secondary color: complements or contrasts the primary.
    Analogous (nearby on wheel) for harmony.
    Complementary (opposite) for energy.

Neutral base:
    Light mode: white or off-white (e.g. #FAFAF8, #F5F4F0, warm cream).
    Dark mode (only if chosen): very dark, not pure black (#0D0D0D, #111118).
    Grays must be hue-shifted (tinted toward the primary), not pure RGB grays.

Accent: optional 3rd color for highlights, tags, badges only.
```

### 2.3 Palette Examples (starting points only, always adapt)

```text
High-energy (startup, creative, youth-facing):
    Primary:    hsl(22, 95%, 55%)    vivid orange
    Secondary:  hsl(340, 80%, 55%)   hot pink/magenta
    Background: hsl(30, 20%, 97%)    warm off-white
    Text:       hsl(20, 15%, 12%)    warm near-black

Trust-first (finance, legal, health):
    Primary:    hsl(214, 75%, 45%)   confident blue (not generic)
    Secondary:  hsl(160, 60%, 42%)   teal-green
    Background: hsl(210, 20%, 98%)   cool off-white
    Text:       hsl(215, 25%, 12%)   cool near-black

Creative / portfolio (artist, designer):
    Primary:    hsl(280, 85%, 55%)   vivid violet
    Secondary:  hsl(50, 90%, 55%)    golden yellow
    Background: hsl(0, 0%, 98%)      near-white
    Text:       hsl(0, 0%, 8%)       near-black

E-commerce / consumer:
    Primary:    hsl(15, 90%, 50%)    vivid red-orange
    Secondary:  hsl(35, 85%, 50%)    amber
    Background: hsl(0, 0%, 100%)     white
    Text:       hsl(0, 0%, 10%)      black

Editorial / fashion (GAZU style):
    Primary:    hsl(0, 0%, 8%)       near-black
    Accent:     hsl(0, 0%, 100%)     white
    Background: hsl(40, 10%, 96%)    warm off-white
    Note: color comes from the product photography, not from UI elements.
```

### 2.4 Gradient Rules

```text
ALLOWED:
- Gradient as a brand color field (hero background, section break).
- Gradient on a button when the brand is high-energy or creative.
- Subtle gradient overlay on images for text legibility only.
- Text gradient on one specific display heading only.

FORBIDDEN:
- Purple-to-blue gradient as the primary identity (generic AI look).
- Gradient on every card, button, section, and background simultaneously.
- Gradient as wallpaper with no other design intent.
- Multiple different gradients competing on the same page.
```

---

## 3. Typography System (MANDATORY to follow)

### 3.1 Always Load a Real Font

Never use the browser default (Times New Roman, Arial, or bare `sans-serif`). Always import from Google Fonts or use a defined system font stack.

### 3.2 Font Selection

```text
Display / Heading (pick one per project):
    Clash Display        geometric, bold, ultra-modern (editorial/fashion)
    Cabinet Grotesk      warm geometric, contemporary
    Satoshi              clean, confident sans
    Syne                 distinctive, editorial
    Space Grotesk        technical, sharp
    DM Serif Display     editorial serif, contrasts with sans
    Playfair Display     classic editorial serif
    Fraunces             expressive variable serif
    Outfit               clean, versatile
    Plus Jakarta Sans    geometric, professional

Body (readability priority):
    Inter                neutral, highly legible
    DM Sans              warm, modern
    Figtree              friendly, open
    General Sans         clean workhorse
    IBM Plex Sans        structured, technical

Pairing rule: CONTRAST the display and body fonts.
    Geometric sans display + humanist sans body.
    Serif display + geometric sans body.
    DO NOT pair two similar sans-serif fonts.
```

### 3.3 Type Scale (use clamp() for fluid scaling)

```text
Display / Hero:  clamp(3.5rem, 8vw, 9rem)   large, commanding (GAZU/Trekcave scale)
H1:              clamp(2rem, 4vw, 3.5rem)
H2:              clamp(1.5rem, 2.5vw, 2.25rem)
H3:              1.25rem to 1.5rem
Body:            1rem (16px base)
Small / Caption: 0.875rem
Label:           0.75rem, uppercase, tracked

Rules:
- Never use more than 3 font sizes within one section.
- Heading and body must have clearly different sizes.
- Display text: line-height 1.0-1.1, letter-spacing -0.03em (tight, editorial).
- Body text: line-height 1.55-1.70.
- Uppercase labels: letter-spacing +0.08em to +0.15em.
- Oversized display type used as LAYOUT element (like GAZU) is valid and encouraged.
```

### 3.4 Font Weight as Hierarchy

```text
900 / Black:    hero headings, display text only
700 / Bold:     H1, H2, CTA labels, key numbers
600 / SemiBold: H3, nav items, card titles
500 / Medium:   UI labels, subheadings
400 / Regular:  body text
300 / Light:    captions, metadata (use sparingly)
```

---

## 4. Animation and Motion System (MANDATORY to implement)

### 4.1 Motion Thesis: Authored, Intentional, Alive

Every interactive element must respond visually. A static interface feels broken, while scattered, uncoordinated animations feel like cheap decoration. Motion must have purpose, rhythm, and clear narrative.

**The Motion Thesis (define before implementing):**
1. **Focal Moment**: The one sequence or interaction that deserves distinct authorship and carries the product's soul (e.g. hero editorial clip reveal, interactive card flip/expand, dynamic state transition).
2. **Continuity**: Preserve spatial relationships and user mental models across route changes, modal openings, and layout shifts (shared elements, FLIP-style transforms, View Transitions).
3. **Feedback**: Immediate acknowledgment for every user input (button clicks, form submits, toggles, filter selections).
4. **Performance Budget**: Animate GPU-accelerated properties (`transform`, `opacity`, `filter`). Avoid animating layout properties (`width`, `height`, `top`, `left`, `margin`) unless using FLIP or container queries.

### 4.2 Material by Meaning (Choose Properties by What They Communicate)

```text
Continuity & Relationship:
    Shared-element motion, FLIP transitions, directional slide, layout morphing.
    Use when an element moves between positions or expands from a card to a modal.

Focus & Depth:
    Backdrop-blur (4px to 12px), subtle scale shift, soft directional shadow elevation.
    Use when bringing an element into focus or dimming background context.

Reveal & Composition:
    Masks, clip-paths (e.g., inset(100% 0 0 0) -> inset(0 0 0 0)), controlled image cropping.
    Use for editorial hero entrances, typography reveals, and card disclosures.

State & Feedback:
    Smallest visible change that makes action and result unmistakable.
    Scale-down press (0.97), color pulse, icon tick, shimmer state.
```

### 4.3 Required Animations (Always Implement These)

```text
HOVER STATES (every interactive element must have an intentional response):
    Buttons:         scale(1.02 to 1.04) + color shift + shadow lift, 150-200ms ease-out
    Cards:           translateY(-4px to -8px) + shadow elevation + subtle border brightness, 200-250ms
    Links:           underline slide-in (clip-path or scaleX) or smooth color transition, 150ms
    Nav items:       active indicator slide / background pill fill, 150ms
    Icons:           small scale or rotational tilt (±8deg), 200ms
    Product images:  zoom scale(1.05 to 1.08) with overflow hidden, 400-500ms ease-out

CLICK / ACTIVE FEEDBACK:
    Buttons:         scale(0.96-0.97) quick press, 80-100ms, then spring release
    Toggles/Switches: smooth spring slide (stiffness: 400, damping: 30), 200ms
    Checkboxes:      check icon draw / scale bounce, 150ms

ENTRANCE ANIMATIONS:
    Pattern:         opacity 0 -> 1 with translateY(20-32px) -> 0
    Duration:        400-600ms with natural deceleration
    Stagger chain:   40-80ms delay per child item. Cap chain at maximum 5-6 items.
    Implementation:  IntersectionObserver + class toggle, or Framer Motion whileInView / variants.

EXIT ANIMATIONS (Always Exit Faster than Entrance):
    Duration:        150-250ms (roughly 50-70% of enter duration)
    Pattern:         opacity 1 -> 0 with scale(0.98) or translateY(-10px)

FOUR-STATE ASYNC FEEDBACK:
    Loading:         Shimmer skeleton with moving gradient highlight or crisp spinner.
    Success:         Green pulse or checkmark morph, auto-dismiss toast.
    Error:           Subtle horizontal shake (translateX: -4px, 4px, -2px, 0), 250ms + visible alert.
    Empty:           Fade-in with illustrated icon and actionable CTA.

TEXT & HERO REVEAL (for Portfolios, Creative, Landing Pages):
    Word / line clip-path reveal: inset(100% 0 0 0) -> inset(0 0 0 0)
    Duration:        600-800ms per line, cubic-bezier(0.16, 1, 0.3, 1).
    Stagger:         50-80ms per line/word.
```

### 4.4 Timing, Curves and Physics Tokens

```text
TIMING SCALES:
    Immediate Feedback:   100-150ms (button press, active ripple)
    Routine State Change: 150-250ms (hover, dropdown toggle, tab switch)
    View / Modal / Drawer:300-450ms (dialog open, sheet slide-in)
    Authored Focal Entrance: 500-750ms (hero reveal, page banner)

PHYSICS & EASING CURVES:
    Natural Deceleration (Default enter):
        cubic-bezier(0.16, 1, 0.3, 1)  /* Ultra-smooth exponential ease-out */
    Snappy UI (Dropdowns, popovers):
        cubic-bezier(0.25, 0.46, 0.45, 0.94)
    Spring Physics (Micro-interactions, bouncy buttons):
        cubic-bezier(0.34, 1.56, 0.64, 1.0)
    Framer Motion Spring Spec:
        { type: "spring", stiffness: 350, damping: 25, mass: 1 }
```

### 4.5 Technology Stack Priority

```text
1. CSS Transitions & Transforms:
   Best for hover, focus, active press, simple visibility toggles. Zero JS overhead.

2. Framer Motion (React / Next.js):
   FIRST CHOICE for React projects when building complex layout animations, AnimatePresence
   for exit transitions, scroll-driven whileInView, and gesture physics. Use freely.

3. GSAP + ScrollTrigger:
   Best for vanilla JS, timeline-driven sequences, or pinned horizontal scroll sections.

4. View Transitions API:
   Native browser shared-element navigation between pages or large views.
```

### 4.6 Gesture Safety & Interruption Handling

- If pointer capture is lost (`lostpointercapture`, `pointercancel`, or window `blur`), reset animation and drag state immediately.
- Prevent gestures from getting stuck in mid-state when a second finger touches the screen.

### 4.7 Accessible prefers-reduced-motion (MANDATORY)

Reduced motion does NOT mean eliminating visual feedback. It means removing disorienting spatial movement while keeping essential opacity, color, and state changes:

```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    
    /* Retain essential opacity and color feedback */
    .fade-transition, [data-motion="fade"] {
        transition: opacity 150ms ease-in-out !important;
    }
}
```

---

## 5. Asset Rule - Images from Browser CDN (PREFERRED)

For web projects that need real photography, always use browser-accessible CDN sources directly in `src` attributes. Do NOT skip images or use colored placeholders when real images improve the product.

### 5.1 Preferred Image Sources (use directly via URL, no download needed)

```text
UNSPLASH (high-quality, free, no attribution required for web):
    Base URL: https://images.unsplash.com/photo-{ID}?w=1200&q=80&auto=format&fit=crop
    Example:  https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80

PEXELS (free, high-quality):
    Images.pexels.com CDN - use the direct photo URL from their API/website

PICSUM (placeholder with real photos, good for prototyping):
    https://picsum.photos/seed/{keyword}/{width}/{height}
    Example: https://picsum.photos/seed/fashion/800/600

SPECIFIC CATEGORY SEARCHES on Unsplash:
    Fashion:     search "fashion editorial minimal"
    Interior:    search "interior minimal furniture"
    Food:        search "food photography minimal"
    Tech:        search "technology workspace"
    Nature:      search "landscape mountain trail"
    People:      search "portrait professional"
```

### 5.2 Image Usage Rules

```text
1. Always use a real photo when the section has a visual role (hero, product, feature).
2. Never use a solid-color rectangle as a "placeholder" in a final product.
3. Use object-fit: cover for full-bleed images. Always set width/height.
4. Add alt text that describes the image content, not "image" or "photo".
5. Use loading="lazy" on images below the fold.
6. Unsplash CDN supports query params: ?w=800&q=75&auto=format for optimization.
7. For product images the user hasn't provided: use generate_image tool to
   create a matching visual, or use a clearly marked placeholder.
```

### 5.3 When to Use generate_image Tool

```text
- Custom illustrations or graphics specific to the brand
- Product mockups not available via stock photography
- Unique hero visuals that don't exist on stock sites
- Brand-specific icons or decorative elements
```

---

## 6. Layout, Spacing & Browser Surfaces Craft Floor

### 6.1 Spacing System (use these units, not arbitrary px)

```text
4px   - micro gap (icon to label)
8px   - small internal padding
12px  - small component padding
16px  - standard component padding, small gap
24px  - gap between related elements
32px  - gap between components
48px  - section internal spacing
64px  - between major sections
96px  - between page-level sections on desktop
128px - hero vertical padding
```

### 6.2 Layout Composition & Measure

```text
- Max content width: 1200-1440px, centered with margin: auto.
- CSS Grid for page-level layout. Flexbox for component-level.
- Never use fixed pixel heights on content containers (use min-height).
- Section backgrounds: use intentional contrast and rhythm. Alternate:
  off-white > tinted light brand > white > image-full > white.
- Grid asymmetry: 7:5 or 3:5 column split is more dynamic than 50:50.
- Body measure: 65-75ch line length for comfortable reading. Never full-width unconstrained text.
- Heading balance: use `text-wrap: balance` on all headings to eliminate orphan single words.
- Full-bleed sections (no container width cap) for hero and feature images.
- Oversized typography used as layout element (not just text) is encouraged.
```

### 6.3 Browser Surfaces Theming (The Impeccable Craft Floor)

The parts you didn't draw still carry the design. Un-themed browser defaults make an interface feel assembled rather than authored:

```css
/* 1. Brand selection colors */
::selection {
    background-color: hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.25);
    color: hsl(var(--text-color));
}

/* 2. Brand caret color */
input, textarea {
    caret-color: hsl(var(--primary-color));
}

/* 3. Accessible, deliberate focus rings */
:focus-visible {
    outline: 2px solid hsl(var(--primary-color));
    outline-offset: 2px;
}

/* 4. Tabular numbers for clean numeric alignment */
.tabular, table, [data-numeric] {
    font-variant-numeric: tabular-nums;
}

/* 5. Custom themed scrollbars */
* {
    scrollbar-width: thin;
    scrollbar-color: hsla(var(--text-h), 10%, 60%, 0.4) transparent;
}
```

---

## 7. Anti-Slop & Craft Floor Checklist (HARD RULE)

Never produce a UI that matches any of the following. Each item is a hard failure state:

```text
PALETTE FAILURES:
[ ] Purple-to-blue gradient as primary identity
[ ] Pure black (#000000) background with zero warmth or brand color
[ ] Gray-on-gray: no primary color present anywhere in the UI
[ ] Dark background when product type does not require it
[ ] Failing contrast: body & placeholder text < 4.5:1, large text < 3:1
[ ] Neutral gray secondary text on colored backgrounds (must tint from surface hue)

TYPOGRAPHY & MEASURE FAILURES:
[ ] Default browser font (Times New Roman, Arial, bare sans-serif)
[ ] Every element approximately the same font size
[ ] Heading and body in the same weight
[ ] No display/heading font loaded
[ ] Full-width unconstrained paragraphs exceeding 85ch line length
[ ] Orphan single-word lines in headings (missing text-wrap: balance)

LAYOUT & SCAFFOLDING FAILURES:
[ ] Hero: centered heading + subtext + two buttons + logo strip = generic SaaS
[ ] Three equal-width feature cards always in a row
[ ] Nested cards (cards placed inside other cards)
[ ] Kicker / eyebrow tags slapped above headings by reflex (let the heading speak)
[ ] Zero-blur block shadows (box-shadow: 4px 4px 0) outside an intentional neobrutalist world
[ ] Every section is full-width text/image alternating, forever
[ ] Padding is framework/browser default, never intentionally set
[ ] All images are colored placeholder boxes

DECORATION & ASSET FAILURES:
[ ] Glassmorphism on every card
[ ] Glowing buttons with multiple competing box-shadow layers
[ ] Floating decorative blobs with no informational purpose
[ ] Sketch-style SVG doodles imitating pictures (amateur aesthetic)
[ ] Gradient overlay on every image for no reason

ANIMATION FAILURES:
[ ] Zero animations anywhere (static, dead interface)
[ ] Only one animation: a simple opacity fade on the hero
[ ] Hover states are identical for buttons, cards, links, and icons
[ ] Exit animations taking longer than entrance animations
[ ] No loading/success/error feedback on form submit
[ ] Missing prefers-reduced-motion fallback

CONTENT & SECURITY FAILURES:
[ ] Colored rectangles instead of real images in a visual product
[ ] Lorem ipsum as placeholder text
[ ] Fake statistics, testimonials, or awards the user never provided
[ ] Insecure dangerous HTML injection without sanitization
[ ] Client-side state without handling all 4 async states (loading, empty, error, success)
```

---

## 8. Icon Rule

Icons are not primary decoration. Use an icon when it:

```text
- Clarifies an action (search, edit, delete, download, filter, external link)
- Aids navigation
- Aids fast scanning of a list or table
- Represents a widely-recognized function
```

Avoid:
```text
- An icon on every heading
- Icon grids with no real function
- Icons only to make the UI look busier
```

Icon-only interactive elements must have an `aria-label`.

Recommended libraries: Lucide Icons, Phosphor Icons, Heroicons, Tabler Icons.

---

## 9. Content Rule

Never fabricate facts to fill the UI:

```text
- No fake testimonials
- No fake statistics or user counts
- No fake company logos
- No fake awards
- No business claims the user never gave
```

Use obvious placeholders: `"[Client Name]"`, `"Add testimonial here"`. Never disguise a placeholder as real data.

