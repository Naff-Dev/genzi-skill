# Design Guidelines: Purpose & Context First (Anti-AI Design System)

Read this when entering Step 1 (Detect Product Context), Step 2 (Clarification Gate vs Internal Context Deduction), and Steps 10-11 (Design Direction, Layout, Typography, Color, and Functional Motion).

---

## 0. Core Philosophy: Purpose & Context First

The default output of most AI code generators is depressingly predictable:
Dark background, purple-to-blue or cyan radial gradients, white text, floating bento cards, glassmorphism, huge centered hero with sparkle emoji badges (`✨ Powered by AI`), and empty marketing puffery like *"Transform your workflow with our next-generation platform"*.

**That is not design. That is a prompt-to-UI generator fallback.**

### THE MOST IMPORTANT RULE
If the user does **NOT** provide instructions regarding appearance, style, color, layout, typography, or design references:

> **DO NOT treat this as permission to use generic AI design (Vercel/Linear dark mode SaaS templates).**
> 
> **DO NOT choose an AI template style as default.**
> 
> **Understand product -> Understand user -> Determine hierarchy -> Determine visual language -> Select typography -> Select palette -> Structure layout -> Implement with discipline.**

The ultimate goal is not to produce a website that looks "AI-generated modern" or an impractical Dribbble/Behance visual showcase.

The ultimate goal is:
**To craft a website that feels deliberately designed for that specific product by a human product designer who deeply understands real-world operational context.**

---

## 1. The 9-Level Design Priority Hierarchy

In every design, layout, and interaction decision, strictly follow this priority order:

```text
1. Functionality        (Primary features and core workflows work reliably)
2. Information Hierarchy(Visitor's eye immediately grasps primary data and actions)
3. Usability            (Intuitive layout, clear affordances, ergonomic, efficient)
4. Accessibility        (WCAG AA contrast, keyboard navigation, min 44x44px touch targets)
5. Consistency          (Systematic spacing, typography scale, and unified components)
6. Performance          (Lightweight, sub-second load, Core Web Vitals protected, zero CLS)
7. Brand / Context      (Visual language authentic to industry, audience, and domain)
8. Visual Polish        (Clean borders, crisp elevation, subtle micro-interactions)
9. Decoration           (Aesthetic flair: strictly purposeful and non-distracting)
```

**HARD DIRECTIVE:** NEVER invert this hierarchy. Never sacrifice usability, readability, or data density for the sake of a "wow effect" or decorative animations.

---

## 2. Internal Context Deduction (Rule 12)

When a user provides a bare or informal prompt without visual direction, such as:
> *"Build me a website for warehouse stock tracking"*
> *"Build a website for a motorcycle repair workshop"*
> *"Build a website for a dental clinic"*

**DO NOT** ask the user about visual styling, color palettes, or font choices at the Clarification Gate. The agent **MUST** independently execute **Internal Context Deduction** across these 10 dimensions:

### The 10 Dimensions of Context Deduction:
1. **Website Type**: Is this an e-commerce catalog, school portal, internal ERP tool, operational dashboard, service booking site, or editorial publication?
2. **Primary Goal**: What is the visitor's core objective? (Look up emergency contact, rapid barcode input, purchase an item, or read an article?)
3. **Target User**: Who operates this? (Busy warehouse staff on a desktop monitor, parents on smartphones, doctors on tablets, or retail consumers?)
4. **Industry & Domain**: Healthcare, education, mechanical repair, legal, food & beverage, logistics, or creative arts?
5. **Usage Context**: Ambient lighting (outdoor sun vs office desk), connection speed, primary device (mobile vs desktop).
6. **Available Data & Features**: Tabular data, search forms, photo galleries, or metric summaries?
7. **Information Hierarchy**: What is the very first piece of information the user must see? What is secondary?
8. **Usability Demands**: High data throughput, rapid tactile input, or step-by-step guidance?
9. **Authentic Brand Character**: Institutional and authoritative, utilitarian and rugged, warm and artisanal, or technical and precise?
10. **Cultural & Language Context**: Currency conventions, localized date formats (DD/MM/YYYY), contact expectations (direct phone / WhatsApp vs formal tickets).

*Note: This reasoning occurs internally. The final output must clearly show that design choices were guided by genuine rationale without forcing the user to read verbose deliberation.*

---

## 3. Purpose-Driven Layouts: Never Repeat the Same Template

### THE BANNED DEFAULT TEMPLATE:
Strictly avoid using this generic SaaS layout for every project:
```text
[ Navbar ]
    ↓
[ Centered Huge Hero + Sparkle Emoji Badge ]
    ↓
[ Abstract Subtitle ]
    ↓
[ 2 Pill Buttons CTA ]
    ↓
[ 3 Equal-Width Feature Cards ]
    ↓
[ Big Gradient CTA Section ]
    ↓
[ Footer ]
```

### Purpose-Driven Layout Archetypes:
Tailor page scaffolding directly to the domain:

1. **Retail / Store Website (Product-First Layout)**:
   - Hero directly highlights featured products or primary shopping categories.
   - Product catalog grid featuring clear prices, real-time stock availability, and quick add-to-cart actions.
   - Cart access and search are always within immediate reach.

2. **News / Publication Website (Editorial / Content-First Layout)**:
   - Lead story with commanding headline and dense excerpt, flanked by numbered latest news lists and editorial columns.
   - Multi-column asymmetrical layouts with hairline dividers rather than stacked cards.

3. **Dashboard & Operations (Data-First Layout)**:
   - Compact sidebar or utilitarian top navigation bar.
   - Key metric summary bar (tabular numbers, concise labels).
   - Interactive data tables with sorting, filtering, pagination, and inline row actions.
   - Disciplined whitespace (dense layout) ensuring critical data is visible without unnecessary scrolling.

4. **School / Education Website (Info & Navigation-First Layout)**:
   - Urgent notices upfront: Enrollment announcements, academic calendar, emergency contacts.
   - Multi-tier clear navigation (About, Academic Programs, Facilities, Admissions).
   - Informative sections with schedule tables and official document download links.

5. **Portfolio Website (Project-First Layout)**:
   - Creative work takes center stage from the very first viewport.
   - High-fidelity imagery, project role breakdown, and live preview links.
   - Interface chrome recedes to let the artifacts shine.

6. **Restaurant / Cafe Website (Menu, Location & Contact-First Layout)**:
   - Operating hours, full physical address, map directions, and direct booking contacts immediately visible.
   - Menu presented in organized categorical price lists (food, drinks, sets) that are fast to scan on mobile, not generic SaaS cards.

7. **Internal Tool / POS / Admin (Utility-First Layout)**:
   - Cashier screens, inventory tracking, or transaction logs: speed and muscle memory rule.
   - Keyboard shortcuts, barcode scan inputs, auto-focused fields, and high contrast. Zero blocking decorative fluff.

---

## 4. Visual Language Spectrum (15+ Archetypes)

The agent must master diverse visual languages rather than always falling back to "modern SaaS":

| Visual Language | Core Characteristics | Typography | Color Palette | Ideal Domain |
|---|---|---|---|---|
| **Utilitarian / Industrial** | Maximum efficiency, crisp borders, minimal decoration, dense data tables | Clean Sans (Inter, Roboto) + Monospace (JetBrains, Plex Mono) | Slate, measured grays, functional accents (amber, emerald) | Warehouses, auto repair, logistics, POS, monitoring |
| **Institutional / Official** | Formal, credible, stable, disciplined hierarchy | Classic/Modern Serif (Merriweather, Source Serif) + Workhorse Sans | Deep navy, rich burgundy, warm gray, ivory white | Hospitals, government agencies, law firms, universities |
| **Warm Artisanal** | Organic, tactile, grounded, celebrating craftsmanship | Warm Serif / Humanist (Fraunces, Recoleta) + Warm Sans (DM Sans) | Terracotta, olive green, cream (#FDFCF7), roasted coffee tones | Roasteries, bakeries, florists, craft workshops |
| **Dense Dashboard** | High information density per square inch, tabular numerals, functional status chips | Compact Sans (Plus Jakarta Sans, Inter) 12-14px | Balanced neutrals, clean backgrounds, pure semantic status colors | Accounting, CRM pipelines, trading, logistics analytics |
| **Editorial & Cultural** | Expressive typography as layout element, rhythmic whitespace, asymmetric columns | Display Serif (DM Serif, Playfair) + Editorial Sans | Warm off-white (#FAF9F6), charcoal (#18181B), single muted accent | Magazines, architecture studios, cultural galleries |
| **Commercial Retail** | High contrast, bold pricing, clear action buttons, crisp product imagery | Bold Sans (Plus Jakarta Sans, Outfit, General Sans) | Pure white base, vibrant brand accent (warm orange, brick red, royal blue) | Supermarkets, electronics stores, SME storefronts |
| **Documentation / Technical** | Strict heading hierarchy, clear code blocks, breadcrumbs, tree navigation | Structured Sans + Code Mono | Balanced neutrals, eye-friendly syntax highlighting | API documentation, user manuals, operating procedures |
| **Playful & Friendly** | Softly rounded corners, cheerful and warm palette, inviting copy | Warm Sans (Figtree, Nunito, Fredoka) | Warm pastels, honey mustard, mint, soft sky blue | Child education, pet services, hobby communities |
| **Minimalist Contemporary** | Essentialism, elimination of non-essential chrome, meticulous type | Geometric Neo-Grotesk (Satoshi, General Sans) | Disciplined monochrome with one decisive accent tone | Photography studios, brand consultancies |

---

## 5. Absolute Ban on Emojis in UI (Rule 2)

**BY DEFAULT: DO NOT USE EMOJIS IN THE USER INTERFACE.**

Never use emojis such as:
`🚀` `✨` `🔥` `💡` `⚡` `❤️` `🎯` `📈` `🛡️` `👉` `🎉` `🌟`
as:
- Button icons or CTA adornments (`🚀 Get Started` ❌)
- Feature badges or section kickers (`✨ AI Powered` ❌)
- Card header icons (`🛡️ Enterprise Security` ❌)
- Decorative layout indicators

### Proper Icon Solutions:
1. **Bespoke Inline SVG (Default, Zero-Dependency, Lightweight)**:
   Use clean, crisp inline SVGs with `width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"`.
2. **Standard Project Icon Library**:
   When building in modern frameworks (React, Next.js, Vue), standard icon libraries like `lucide-react`, `heroicons`, or `@phosphor-icons/react` are fully acceptable and encourage consistency.
3. **Emoji Exceptions**:
   Emojis are ONLY permitted when:
   - They represent actual user-generated data (chat message content, user reactions).
   - The user explicitly requested emojis in their prompt.

---

## 6. Component Discipline: Anti-Slop Rules

### 6.1 Card Discipline: Do Not Wrap Everything in Cards (Rule 7)
Cards are not a universal container. Wrapping every paragraph into a card is the hallmark of lazy AI generation.

**Use these structural alternatives:**
- **Tables**: For data comparisons, inventory lists, transaction histories, and technical specifications.
- **Lists & Dividers**: Menus, task queues, schedules, or audit logs separated cleanly by hairline borders or negative space.
- **Grouped Sections / Fieldsets**: For structured forms and multi-criteria filters.
- **Inline Key-Value Rows**: Label-value pairs (e.g., "Stock: 42 units", "Bin Location: B-03").
- **Accordions / Tabs**: For layered details or FAQs to prevent vertical clutter.
- **Plain Text + Images**: Editorial layouts where photography and prose sit side-by-side naturally.

*Use cards ONLY when an item represents a discrete, self-contained interactive entity (e.g., a physical product in a store, an independent discount voucher).*

### 6.2 Radius Discipline: Systematic Corner Radii (Rule 8)
Do not plaster `rounded-2xl`, `rounded-3xl`, or `rounded-full` onto every element. Establish a deliberate scale:
- **Buttons**: Small or medium radius (`rounded-md`, 4px - 8px). Pill shape (`rounded-full`) is reserved for standalone filter chips or floating action badges.
- **Form Inputs**: Small radius (`rounded`, 4px - 6px) for crisp precision.
- **Cards / Panels**: Medium radius (`rounded-lg` or `rounded-xl`, 8px - 12px).
- **Modals / Popovers**: Medium radius (`rounded-xl`, 12px).
- **Page Containers / Layout Wrappers**: Often need zero radius (`rounded-none`).

### 6.3 Shadow Discipline & Single Elevation Rule (Rule 9)
Do not give every card and section an identical heavy drop shadow.
- **Declare elevation once: Border OR Shadow.** A 1px border under a wide soft drop shadow is the classic AI "ghost card." Choose either a crisp hairline border on flat surfaces, or a soft offset shadow for elevated layers, never both competing.
- **Shadows reserved for interactive depth**: Use shadows only for floating dialogs, dropdowns, and elevated active layers.
- **No hard offset block shadows**: Do not use `box-shadow: 4px 4px 0` outside a dedicated neobrutalist world.

### 6.4 Surface & Component Anti-Patterns (The Impeccable Craft Floor)
- **No Kickers / Eyebrows above Headings**: Delete the generic tag or pill badge slapped above headings. Let the heading speak and carry its own weight.
- **No Gradient Text**: Gradients on text are an AI costume. Create visual contrast through size, line-height, and font weight.
- **No Colored Side-Stripes**: Avoid thick colored `border-left` or `border-right` on cards, alerts, or list items.
- **Overlays Must Escape Containers**: Dropdowns, tooltips, and modal sheets inside `overflow: hidden` or `overflow: auto` containers get clipped. Use `<dialog>`, the HTML Popover API, `position: fixed`, or React portals to ensure menus float cleanly.
- **Modals as Last Resort**: Modals interrupt user flow. Exhaust inline expanders, accordions, sliding drawers, and progressive disclosure before reaching for a blocking modal dialog.
- **No Sketch SVG Doodles**: Hand-drawn wavy arrows or amateur SVG doodle illustrations are forbidden. Use real photos or clean geometric vector diagrams.

### 6.5 Spacing Discipline: Match Information Density (Rule 10)
Do not enforce massive padding (96px - 128px) on every website:
- **Internal Tools / POS / Warehouses**: Tight spacing (4px - 16px) so complete operational toolsets stay visible without scrolling.
- **Data Dashboards**: Measured spacing (12px - 24px) for efficient eye scanning.
- **Public Landing Pages**: Generous breathing room (48px - 80px) for editorial hierarchy.

---

## 7. Contextual Color Palettes: Reject the Dark-Mode Reflex (Rule 6)

### 7.1 Do Not Default to Dark Mode
Dark mode is ONLY appropriate when:
1. The user explicitly requests dark mode.
2. The domain naturally requires it (night code editors, radar monitors, video editing suites, cinema players).
3. All other domains (schools, auto shops, florists, accounting, dental clinics, restaurants) **MUST USE A CRISP, ACCESSIBLE LIGHT MODE ROOTED IN BRAND REALITY**.

### 7.2 Contextual Domain Colors
Avoid generic black-and-white schemes with electric neon accents:
- **Dental Clinic / Health**: Hygienic sky blue, soft sage green, crisp cool-white background.
- **Auto Workshop**: Steel gray, industrial warning amber or energetic red, oil-charcoal trim.
- **Florist / Bakery**: Botanical deep green, flour cream, terracotta accents, blush rose.
- **Accounting / Finance**: Confident navy, balanced slate, functional emerald for positive balances, crimson for negative.
- **Schools / Education**: Academic royal navy, warm golden yellow, warm ivory background.

---

## 8. Human Copywriting: Ban AI Robot Jargon (Rules 4, 17, 18)

### 8.1 Banned AI Marketing Buzzwords:
```text
STRICTLY FORBIDDEN WORDS AND PHRASES:
- "Unleash / Unleashing"
- "Elevate / Elevating"
- "Seamless / Seamlessly"
- "Supercharge / Supercharging"
- "Next-gen / Next-generation"
- "Revolutionize / Revolutionizing"
- "Empower / Empowering"
- "Game-changer"
- "Transform your workflow"
- "Harness the power of..."
- "The ultimate solution for..."
- "Modern, powerful, and easy to use"
- "Discover a world of..."
- "Take your X to the next level"
```

### 8.2 Write Concrete, Action-Oriented Copy:
State **WHAT THE PRODUCT ACTUALLY DOES**, not how grand it claims to be:

- **AI Slop**: *"A modern, cutting-edge platform designed to seamlessly transform your inventory workflow."*
- **Human Copy**: *"Record incoming goods, track shelf inventory counts, and export daily audit reports in one view."*

- **AI Slop**: *"Next-generation culinary experiences engineered to elevate your daily breakfast."*
- **Human Copy**: *"Order freshly cooked breakfast bowls, prepared and delivered to your office before 8:30 AM."*

### 8.3 Never Fabricate Unnecessary Sections (Rules 17 & 18)
If a user asks for: *"Build an inventory tracking web app"*, **DO NOT** tack on:
- Fake customer testimonials
- Generic SaaS pricing tiers
- Cliché AI FAQ accordions
- Newsletter subscription boxes
- Fabricated partner logos ("Trusted by 500+ enterprises")
- Made-up statistics ("10M+ Happy Users")

Use **REALISTIC DOMAIN DATA**:
- For inventory: Real item names ("Shell Helix HX7 10W-40 1L", SKU: "OIL-SH-001", Stock: 18 units, Supplier: "PT Sumber Pelumas").
- NEVER use generic placeholders like "Amazing Product A", "Lorem Ipsum", or "Super Feature 1".

---

## 9. Functional Motion System: Motion by Function (Rule 15)

Animations must serve functional interaction, state visibility, and cognitive clarity:

### VALID ANIMATION PURPOSES:
1. **Tactile Feedback**: Button active press `transform: scale(0.97)`, duration <150ms with snappy spring response.
2. **State Changes**: Smooth input focus ring expansion, sliding tab active indicator.
3. **Validation & Alerts**: Subtle horizontal error shake (translateX: -4px, 4px, -2px, 0), smooth alert toast entrance.
4. **Loading States**: Shimmer skeleton loader when asynchronous data is resolving.
5. **Reading Comfort**: Gentle entrance scrollytelling on public editorial pages (capped at 4-6 items, 40-60ms stagger, natural deceleration, exits 50-70% faster).

### FORBIDDEN ANIMATIONS:
- Infinite glowing radial borders around cards
- Continuous floating blobs or gradient orbs serving zero informational purpose
- Disorienting excessive parallax causing vestibular discomfort
- Random fade-ins on every paragraph that delay reading
- Forcing a "Hero signature focal animation" onto fast utilitarian dashboards or admin tools

### Mandatory Reduced-Motion Fallback (`prefers-reduced-motion`):
```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
```

---

## 10. Responsive Ergonomics: Mobile as a Distinct Layout (Rule 11)

Responsive design is not simply scaling down desktop viewports or stacking columns:

```text
MOBILE ERGONOMIC PRINCIPLES:
1. Touch Targets: Minimum 44x44px for every clickable button, navigation link, checkbox, and tab bar. Minimum 8px tap separation.
2. Thumb Zone Reach: Primary actions (cashier submit, checkout CTA, filter sheet trigger) must sit in the lower 40% of the screen for comfortable one-handed reach.
3. Table Transformation: Wide desktop data tables must transform into vertical stacked lists or live inside clear horizontal scroll containers.
4. Safe Area Insets: padding-top: env(safe-area-inset-top); padding-bottom: max(1rem, env(safe-area-inset-bottom));
5. Zero Horizontal Overflow: Apply overflow-x: clip on root wrappers. Never allow accidental horizontal scrolling.
```

---

## 11. Self-Check: The 15-Point AI-Slop Audit

Before outputting code or markup, evaluate against this checklist:

```text
[ ] 1. Does this design look like a Vercel/Linear clone template?
[ ] 2. Did I automatically default to dark mode without genuine domain need?
[ ] 3. Did I use generic purple/blue or cyan radial gradients without brand rationale?
[ ] 4. Did I use emojis anywhere in the UI as icons, badges, or decorations?
[ ] 5. Did I wrap nearly all content into cards instead of using tables, lists, or dividers?
[ ] 6. Are all corners overly rounded (rounded-2xl or rounded-full everywhere)?
[ ] 7. Did I plaster heavy drop shadows onto flat elements?
[ ] 8. Is typography generic startup sans with giant oversized headings?
[ ] 9. Does copywriting sound like AI puffery ("unleash", "seamless", "modern")?
[ ] 10. Does the hero follow the cloned formula: Centered text + subtitle + 2 pill buttons?
[ ] 11. Are CTAs oversized and repeated excessively across the page?
[ ] 12. Does the layout disregard domain context (e.g., inventory tool styled like SaaS landing)?
[ ] 13. Did I invent unrequested sections (testimonials, pricing, fake stats, FAQs)?
[ ] 14. Is mock data generic filler (Lorem Ipsum, Amazing Product) rather than real domain data?
[ ] 15. If the brand name and logo are removed, does it still look like an AI template?
```

**IF THE ANSWER IS "YES" TO ANY OF THESE QUESTIONS: SCRAP THAT PATTERN AND FIX IT BEFORE DELIVERING TO THE USER.**

---

## 12. Production-Grade CSS Design Token Kits (Drop-in Archetypes)

Use these battle-tested CSS token boilerplates directly in generated projects to ensure instant domain authenticity, crisp contrast, and zero AI-slop fallback:

### 12.1 Archetype A: Utilitarian / Industrial (Warehouse, Auto Shop, Logistics, POS)
```css
/* Google Fonts: Inter (400, 500, 600) + JetBrains Mono (500) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');

:root {
  /* Surfaces & Neutral Scale (Rugged, high-contrast, dust-resistant light) */
  --bg: hsl(210, 15%, 96%);
  --surface: hsl(0, 0%, 100%);
  --surface-raised: hsl(210, 15%, 93%);
  --surface-active: hsl(210, 15%, 88%);
  --border: hsl(215, 14%, 82%);
  --border-strong: hsl(215, 16%, 65%);

  /* Text & Contrast */
  --text: hsl(215, 28%, 12%);
  --text-muted: hsl(215, 14%, 42%);
  --text-inverse: hsl(0, 0%, 100%);

  /* Functional Industrial Accents */
  --primary: hsl(28, 90%, 46%); /* Industrial Amber/Safety Orange */
  --primary-hover: hsl(28, 92%, 40%);
  --primary-contrast: hsl(0, 0%, 100%);
  --accent: hsl(215, 30%, 25%); /* Heavy Slate */
  
  /* Status Colors */
  --status-success: hsl(152, 68%, 34%);
  --status-warning: hsl(38, 92%, 46%);
  --status-error: hsl(354, 75%, 46%);

  /* Typography Stacks */
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;

  /* Disciplined Corner Radii (Compact & Functional) */
  --radius-sm: 3px;
  --radius-md: 5px;
  --radius-lg: 8px;

  /* Shadows Reserved Strictly for Elevation */
  --shadow-elevation: 0 4px 12px hsla(215, 28%, 12%, 0.12);
}

::selection { background-color: hsla(28, 90%, 46%, 0.25); color: var(--text); }
input, textarea { caret-color: var(--primary); }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
table, [data-numeric] { font-variant-numeric: tabular-nums; }
```

### 12.2 Archetype B: Dense Dashboard (Accounting, CRM, Analytics, Trading)
```css
/* Google Fonts: Plus Jakarta Sans (400, 500, 600, 700) */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

:root {
  /* Crisp, analytical backdrop with maximum table scanability */
  --bg: hsl(210, 20%, 98%);
  --surface: hsl(0, 0%, 100%);
  --surface-raised: hsl(210, 20%, 95%);
  --surface-subtle: hsl(210, 25%, 97%);
  --border: hsl(214, 20%, 88%);
  --border-subtle: hsl(214, 20%, 93%);

  /* Precision Text */
  --text: hsl(222, 47%, 11%);
  --text-muted: hsl(215, 16%, 47%);
  --text-subtle: hsl(215, 14%, 60%);

  /* Focused Analytical Accent */
  --primary: hsl(221, 83%, 53%); /* Focused Cobalt */
  --primary-hover: hsl(221, 83%, 45%);
  --primary-light: hsl(221, 83%, 96%);

  /* Semantic Financial Accents */
  --status-surplus: hsl(158, 64%, 40%);
  --status-deficit: hsl(0, 72%, 51%);
  --status-neutral: hsl(215, 16%, 47%);

  /* Typography & Measure */
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;

  /* Systematic Sharp Radii */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 10px;

  /* Minimal Elevation for Popovers Only */
  --shadow-elevation: 0 4px 16px hsla(222, 47%, 11%, 0.08), 0 1px 3px hsla(222, 47%, 11%, 0.05);
}

::selection { background-color: hsla(221, 83%, 53%, 0.2); color: var(--text); }
input, textarea { caret-color: var(--primary); }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 1px; }
table { font-variant-numeric: tabular-nums; border-collapse: collapse; }
```

### 12.3 Archetype C: Warm Artisanal (Specialty Coffee, Bakery, Florist, Craft)
```css
/* Google Fonts: Fraunces (600, 700) + DM Sans (400, 500) */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap');

:root {
  /* Warm tactile parchment and stone foundations */
  --bg: hsl(40, 25%, 97%); /* Warm ivory cream #FDFCF7 */
  --surface: hsl(40, 30%, 99%);
  --surface-raised: hsl(36, 20%, 92%);
  --surface-accent: hsl(28, 40%, 90%);
  --border: hsl(35, 16%, 84%);
  --border-strong: hsl(30, 18%, 68%);

  /* Organic Ink Tones */
  --text: hsl(24, 25%, 15%); /* Deep roasted espresso */
  --text-muted: hsl(24, 12%, 44%);
  --text-inverse: hsl(40, 25%, 97%);

  /* Sensory Artisanal Chemistry */
  --primary: hsl(18, 64%, 44%); /* Terracotta Clay */
  --primary-hover: hsl(18, 68%, 38%);
  --accent: hsl(135, 18%, 38%); /* Dried Olive Green */

  /* Typography Stacks */
  --font-heading: 'Fraunces', Georgia, serif;
  --font-body: 'DM Sans', -apple-system, sans-serif;

  /* Natural, Softer Radii */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  /* Subtle Warm Shadow */
  --shadow-elevation: 0 8px 24px hsla(24, 25%, 15%, 0.08);
}

::selection { background-color: hsla(18, 64%, 44%, 0.22); color: var(--text); }
input, textarea { caret-color: var(--primary); }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
```

### 12.4 Archetype D: Institutional / Official (Healthcare, Hospital, University, Law)
```css
/* Google Fonts: Source Serif 4 (600) + Public Sans (400, 500, 600) */
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap');

:root {
  /* High-trust, hygienic, clear foundation */
  --bg: hsl(210, 24%, 98%);
  --surface: hsl(0, 0%, 100%);
  --surface-raised: hsl(210, 20%, 94%);
  --border: hsl(215, 20%, 85%);
  --border-strong: hsl(215, 25%, 65%);

  /* Authoritative Typography Tones */
  --text: hsl(218, 45%, 12%); /* Deep institutional navy */
  --text-muted: hsl(215, 16%, 42%);

  /* Trust Anchors */
  --primary: hsl(214, 82%, 35%); /* Dignified Royal Navy */
  --primary-hover: hsl(214, 82%, 28%);
  --accent: hsl(164, 76%, 32%); /* Clinical Spruce Green */

  /* Typography Stacks */
  --font-heading: 'Source Serif 4', Georgia, serif;
  --font-body: 'Public Sans', -apple-system, sans-serif;

  /* Formal Radii */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;

  --shadow-elevation: 0 4px 14px hsla(218, 45%, 12%, 0.08);
}

::selection { background-color: hsla(214, 82%, 35%, 0.2); color: var(--text); }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
```

### 12.5 Archetype E: Commercial Retail (Supermarket, Electronics, SME Storefront)
```css
/* Google Fonts: Outfit (500, 600, 700) + Inter (400, 500) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700;800&display=swap');

:root {
  /* Bright, energetic, purchase-oriented backdrop */
  --bg: hsl(0, 0%, 100%);
  --surface: hsl(0, 0%, 100%);
  --surface-raised: hsl(210, 16%, 96%);
  --surface-accent: hsl(12, 100%, 97%);
  --border: hsl(210, 14%, 88%);

  /* Immediate Action Contrast */
  --text: hsl(220, 25%, 10%);
  --text-muted: hsl(220, 12%, 46%);
  --text-price: hsl(10, 88%, 46%);

  /* High-Conversion Brand Colors */
  --primary: hsl(12, 90%, 52%); /* Warm energetic vermilion */
  --primary-hover: hsl(12, 94%, 45%);
  --accent: hsl(215, 90%, 48%); /* Trust Blue */

  /* Typography Stacks */
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 9999px;

  --shadow-card: 0 2px 8px hsla(220, 25%, 10%, 0.06);
  --shadow-elevation: 0 8px 24px hsla(220, 25%, 10%, 0.14);
}

::selection { background-color: hsla(12, 90%, 52%, 0.2); color: var(--text); }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
```

### 12.6 Archetype F: Editorial / Cultural (Architecture, Magazine, Design Studio)
```css
/* Google Fonts: DM Serif Display + General Sans / Inter */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600&display=swap');

:root {
  /* Minimalist gallery canvas */
  --bg: hsl(30, 10%, 97%); /* #FAF9F6 Warm Gallery White */
  --surface: hsl(0, 0%, 100%);
  --surface-raised: hsl(30, 8%, 93%);
  --border: hsl(0, 0%, 82%);
  --border-hairline: hsl(0, 0%, 88%);

  /* Charcoal Editorial Ink */
  --text: hsl(0, 0%, 9%); /* #171717 Ink Charcoal */
  --text-muted: hsl(0, 0%, 42%);

  /* Monochromatic with Single Signature Touch */
  --primary: hsl(0, 0%, 10%);
  --primary-hover: hsl(0, 0%, 25%);
  --accent: hsl(345, 60%, 48%); /* Single muted crimson accent */

  /* Typography Stacks */
  --font-heading: 'DM Serif Display', Georgia, serif;
  --font-body: 'Inter', sans-serif;

  /* Architectural Sharpness (Minimal to Zero Radius) */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;

  /* Flat Surface Priority: Hairlines over Heavy Shadows */
  --shadow-elevation: 0 10px 30px hsla(0, 0%, 0%, 0.07);
}

::selection { background-color: hsla(0, 0%, 10%, 0.85); color: #FAF9F6; }
:focus-visible { outline: 1px solid var(--text); outline-offset: 3px; }
```

