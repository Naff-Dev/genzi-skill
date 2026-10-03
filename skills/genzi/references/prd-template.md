# PRD Template (Micro & Full): Purpose & Context First

Read this when entering Step 9 (Generate PRD). Choose Micro PRD or Full PRD per the "Scaling the Workflow" table in SKILL.md.

Writing rules for both PRD types:
- No em dash character anywhere. Use `-`, `:`, `.`, `,`, or plain sentences.
- Never present invented data (statistics, testimonials, customer names, pricing, awards) as the user's real facts. When a layout needs them, use realistic sample values in a typed data module, mark them as sample, and list them in the PRD under Assumptions.
- Realistic domain mock data: Real SKUs, actual product names, realistic prices/dates. No Lorem Ipsum, no "Amazing Product".
- Tag requirements with their category: Explicit / Inferred / Assumption.
- Clear, concrete language: Zero AI buzzword filler ("unleash", "elevate", "seamless", "modern").
- **Internal Context Deduction First**: Anchor design directly to the domain purpose, user, and usage context rather than generic AI templates.
- **MANDATORY APPROVAL GATE**: Never start coding immediately after writing a PRD. Stop, present the PRD to the user, and prompt them to review the implementation plan. Require explicit confirmation before implementation.
- **Responsive behavior on mobile AND desktop** must always be part of acceptance criteria.
- **Anti-AI Craft, Functional Motion, SEO, Security, and Code Safety** are hard requirements, not optional notes.

---

## Micro PRD (for small-to-medium tasks)

Use this concise format (10-25 lines):

```text
Goal              : [what this change/feature is meant to achieve]
Surface Mode      : [Persuade | Operate | Read | Experience]
Visual Language   : [Utilitarian | Dense Dashboard | Institutional | Commercial | Warm Artisanal | Editorial | etc.]
Layout Archetype  : [Product-first | Editorial-first | Data-first | Info-first | Utility-first | Scenic-immersive | etc.]
Reference Mapping : [only if the user gave references: region -> lead reference, deviations]
Asset Plan        : [image slots, source, aspect ratio, where text sits, treatment]
Requirements      : [bullet list, tag (Explicit)/(Inferred)/(Assumption)]
Clarifications    : [questions resolved with user regarding technical blockers or scope depth]
Scope             : [files/components/pages created or modified]
Out of Scope      : [what is intentionally omitted to avoid scope creep or fake sections]
Motion & Feedback : [Functional motion: button press scale 0.97, state transitions, skeleton loading, reduced-motion]
SEO & Semantics   : [single h1, descriptive alt, OpenGraph, title/meta-description, schema if public]
Security & Safety : [input validation schema, token storage, auth check, text-overflow wrap]
Acceptance        :
  - [Functional acceptance criteria]
  - [Mobile (~360-430px) AND Desktop (~1280px+) responsive verified, zero overflow, 44x44px touch targets]
  - [Bespoke craft verified: 20-point tells audit passed, reference comparison scored, domain palette, no emoji in UI, real typography]
  - [Functional micro-interactions implemented with prefers-reduced-motion fallback]
  - [Full-spectrum SEO verified: single h1, valid meta, zero CLS explicit dimensions]
  - [Inputs validated and sanitized, no raw HTML injection]
```

### Micro PRD Example (Search Feature in Warehouse Inventory):

```text
Goal              : User can search warehouse inventory items by SKU or name in real-time without page reload.
Surface Mode      : Operate
Visual Language   : Utilitarian / High-Density
Layout Archetype  : Utility-first & Data-first (dense table with real-time filter)
Requirements      :
  - Search input with clear button above inventory table (Explicit)
  - Real-time debounced filtering (200ms) to preserve UI responsiveness (Inferred)
  - Empty state with clear message when 0 items match (Inferred)
  - Display actual SKUs, bin locations, and stock numbers (Inferred)
Clarifications    :
  - Confirmed: Search applies client-side across loaded catalogue rather than pagination query.
Scope             : InventoryTable component, add SearchInput component, update filter hook.
Out of Scope      : Full-text server search index, search history persistence.
Motion & Feedback :
  - Search input focus ring transitions (150ms ease-out)
  - Result rows update smoothly via CSS opacity transition (100ms)
  - Active clear button press scale(0.97)
SEO & Semantics   :
  - Accessible search role: role="search" with aria-label="Search inventory items"
  - Clear button aria-label="Clear search input"
Security & Safety :
  - Sanitize search query input; strip dangerous HTML characters
  - Use min-width: 0 on table cells to prevent long query blowout
Acceptance        :
  - Typing a substring filters products within 200ms debounce
  - Clearing input restores complete product inventory smoothly
  - Tested on mobile (390px) and desktop (1440px): search bar full-width on mobile, right-aligned on desktop
  - Zero XSS vulnerabilities from search query reflection
  - Zero emojis used as icons; SVG search icon used
```

---

## Full PRD (for large tasks, new surfaces, major features)

Use the following 24 structured sections. Keep each section concrete and actionable. Sections not applicable to the specific product must state "Not applicable" followed by a 1-sentence technical reason.

```text
1.  Product Overview & Purpose
    - Summary of the product, purpose, and audience.
    - Surface Mode: Persuade | Operate | Read | Experience.
    - Visual Language: Utilitarian | Institutional | Dense Dashboard | Commercial | Warm Artisanal | Editorial | etc.
    - Layout Archetype: Product-first | Editorial-first | Data-first | Info-first | Utility-first | Scenic-immersive.
    - Reference Mapping (when references exist): per region lead reference, Design DNA summary, intentional deviations.

2.  Problem Statement
    - Concrete user or business problem being solved (based on user request).

3.  Product Goal & Target Outcomes
    - Tangible outcome marking success with measurable completion criteria.

4.  Target Users & Usage Context
    - Who uses this, under what conditions (warehouse floor, mobile on-the-go, office desktop).

5.  Clarification & Ambiguity Resolution Log
    - Questions asked to the user and their confirmed decisions (technical blockers / scope depth).
    - Explicit list of assumptions made for non-blocking choices.

6.  User Needs & Scenarios
    - Primary and secondary user scenarios start to finish.

7.  Core Features & Prioritization
    - Ranked list of features, tagged (Explicit) or (Inferred).
    - Strictly aligned with 9-Level Priority Hierarchy: Functionality & Usability > Visual Polish > Decoration.

8.  Page & Screen Structure
    - Sitemap or component hierarchy tree with semantic HTML landmarks.
    - Avoids generic centered-hero template; layout driven directly by domain purpose.

9.  User Flows
    - Step-by-step walkthroughs of primary interactions, happy path, and alternate paths.

10. Functional Requirements
    - Precise, testable specifications of system behavior.

11. Non-Functional & Reliability Requirements
    - Performance budget (LCP < 2.5s, CLS < 0.1, INP < 150ms), uptime expectations, responsiveness.

12. Security & Data Privacy (MANDATORY)
    - Input Validation: Schema validation (Zod/Valibot) on all incoming data.
    - XSS & Injection: No unescaped HTML, DOMPurify for rich text, parameterized queries.
    - Auth & Permissions: HttpOnly cookie storage, server-side permission checks.
    - Secrets: Private keys restricted to server environment, never bundled into client.
    - Security Headers: CSP, X-Content-Type-Options, Referrer-Policy, CORS constraints.

13. Bespoke Anti-AI Design Direction & Craft Floor (MANDATORY)
    - Visual Language & Archetype selected from domain context.
    - Visual Identity: Specific primary color (HSL), secondary, background, and text colors (no generic black+neon). Light or dark with a one-line reason.
    - Asset Plan: each image slot with subject, source (user / generated / verified CDN), aspect ratio, text placement, scrim and treatment.
    - Typography: Specific named Display font and Body font pairing suited to domain formality.
    - Copywriting Craft: Zero banned AI buzzwords (no "Unleash", "Elevate", "Seamless", "Supercharge").
    - Zero Emoji in UI: Pure SVGs or standard icon library for functional icons only.
    - Card & Radius Discipline: Tables, lists, dividers utilized; systematic small/medium border-radii.
    - Browser Surfaces Theming: Selection color, caret-color, custom scrollbar, focus rings.
    - Tells audit: Passes the 20-point tells audit (design-guidelines.md section 11) before delivery.

14. Responsive Behavior & Mobile Ergonomics (MANDATORY)
    - Mobile Small (~360-390px): 1-column layouts, 44x44px touch targets, 8px separation.
    - Mobile Standard (~390-430px): Thumb-zone controls, safe area insets (env(safe-area-inset-*)).
    - Tablet (~768-1024px): Adaptive column split, adjusted drawer/sheet behaviors.
    - Desktop (~1280px+): Multi-column grids, fixed sidebars, max content constraint (1200-1440px).
    - Hard rule: Zero horizontal scrollbars (overflow-x: clip), zero unhandled text truncation.

15. Functional Motion System (MANDATORY)
    - Motion by Function: Animations strictly serve interaction feedback, state change, or loading.
    - Micro-interactions: Button active press scale(0.97), toggle springs (<150ms).
    - No gratuitous motion: No infinite gradient animations, glowing orbs, or forced hero animations on utilitarian apps.
    - GPU & A11y: Transform/opacity animations only; prefers-reduced-motion fallback implemented.

16. Technical Architecture & File Plan
    - Framework & Stack: Strictly adhere to workspace detection findings.
    - Clean Layering: UI Components -> Custom Hooks -> Service / API Layer -> Domain Schemas.
    - Concrete File Plan: List of exact files to create, modify, or delete.

17. Safe & Maintainable Code Architecture
    - Strict TypeScript typing (strict: true, zero loose 'any' casts).
    - State Modeling: Discriminated unions for asynchronous state machines.
    - Error Boundaries: Top-level and component-level error boundaries.
    - Immutability & Cleanups: Safe state updates, cleanup on unmount for timers/listeners.

18. Hardening & Boundary Resilience
    - Extreme Inputs: 100+ character strings, emoji input support, CJK, RTL logical CSS properties.
    - Text Overflow: Truncate / line-clamp rules, min-width: 0 on flex/grid children.
    - Four-State Async UI: Explicit handling of Idle/Loading, Success, Empty, and Error + Retry.
    - Gesture Safety: pointercancel handling, multi-touch defense, clean state resets.

19. Data Requirements & Realistic Domain Mock Data
    - Data schemas, API request/response types.
    - Concrete domain data: Real item names, realistic SKUs, actual prices, dates (no Lorem Ipsum).

20. Asset & Photography Strategy
    - Real photography from Unsplash CDN with optimization query parameters (?w=800&q=75).
    - generate_image tool for custom branding assets when needed.
    - Inline SVGs or Lucide/Heroicons for consistent stroke icons with aria-labels.

21. Accessibility (WCAG 2.1 AA)
    - Semantic HTML elements (<main>, <nav>, <section>, <article>, <button>).
    - Contrast ratio: ≥4.5:1 for body text, ≥3:1 for large display text.
    - Keyboard navigable: Tab order logical, skip links, visible focus rings.

22. Full-Spectrum SEO, Semantics & Web Vitals (MANDATORY)
    - Title tags (50-60 chars) and meta descriptions (140-160 chars) with high-intent keywords.
    - Exactly one <h1> per page conveying core value; proper heading hierarchy (h1 -> h2 -> h3).
    - Descriptive alt text on all media (zero empty or generic alt text).
    - Open Graph cards (og:title, og:description, og:image, og:url) and Twitter cards.
    - Domain-specific JSON-LD Schema.org structured data embedded and valid.
    - Core Web Vitals: Hero media prioritized (fetchpriority="high"); explicit width/height for zero CLS.

23. Verifiable Acceptance Criteria (The Six Mandatory Hard Blockers)
    - Concrete criteria covering functional behavior.
    - HARD BLOCKER 1: Responsive & Mobile Ergonomics verified on mobile (~360-430px) and desktop (~1440px).
    - HARD BLOCKER 2: Bespoke Anti-AI Craft & Personality verified (Passes 20-Point Tells Audit).
    - HARD BLOCKER 3: Functional Motion System, micro-interactions, and reduced-motion verified.
    - HARD BLOCKER 4: Full-Spectrum SEO, Semantics & Web Vitals verified (single h1, Schema, zero CLS).
    - HARD BLOCKER 5: Security & Data Privacy baseline verified (Zod schemas, XSS defense, token hygiene).
    - HARD BLOCKER 6: Code Safety & Resilient Hardening verified (strict types, 4-state UI, error boundaries).

24. Assumptions & Risks
    - Document every design and technical assumption for user verification.
```

---

## Mandatory User Approval Gate (STOP Before Coding)

After generating a Micro PRD or Full PRD (Trivial tasks skip this):
1. **Stop.** Do not write components, modify code, install dependencies or run implementation scripts.
2. **Present** the PRD (with the Reference Mapping and Asset Plan when they exist). For Full PRDs, put it in a readable document or artifact so the user can review it comfortably.
3. **Ask once** using the platform's question/choice tool when available, otherwise plain text:
   - (Recommended) Approve and proceed to implementation
   - Change visual direction or reference mapping
   - Adjust scope or feature depth
4. **Wait for explicit confirmation.** One gate only: do not add a second design approval afterwards.
