# PRD Template (Micro & Full)

Read this when entering Step 9 (Generate PRD). Choose Micro PRD or Full PRD per the "Scaling the Workflow" table in SKILL.md.

Writing rules for both PRD types:
- No em dash character anywhere. Use `-`, `:`, `.`, `,`, or plain sentences.
- Never include invented data (statistics, testimonials, customer names, etc).
- Tag requirements with their category when it needs clarifying: Explicit / Inferred / Assumption.
- Clear, concrete language, zero AI buzzword filler.
- **Clarification first**: When intent, architecture, or security constraints are ambiguous, record the user's answers or explicit assumptions.
- **Responsive behavior on mobile AND desktop** must always be part of acceptance criteria.
- **Anti-AI Craft, Motion, SEO, Security, and Code Safety** are hard requirements, not optional notes.

---

## Micro PRD (for small-to-medium tasks)

Use this concise format (10-25 lines):

```text
Goal            : [what this change/feature is meant to achieve]
Surface Mode    : [Persuade | Operate | Read | Experience]
Domain Archetype: [Editorial | Engineering | Artisanal | Kinetic SaaS | Enterprise | Culture]
Requirements    : [bullet list, tag (Explicit)/(Inferred)/(Assumption)]
Clarifications  : [questions asked or ambiguities resolved with user]
Scope           : [files/components/pages created or modified]
Out of Scope    : [what is intentionally omitted to avoid scope creep]
Motion & Feedback: [Layer 1 focal moment, Layer 2 entrance, Layer 3 button press scale 0.97, reduced-motion]
SEO & Semantics : [single h1, descriptive alt, OpenGraph, title/meta-description, schema if public]
Security & Safety: [input validation schema, token storage, auth check, text-overflow wrap]
Acceptance      :
  - [Functional acceptance criteria]
  - [Mobile (~360-430px) AND Desktop (~1280px+) responsive verified, zero overflow, 44x44px touch targets]
  - [Bespoke anti-AI craft verified: domain palette, real typography, zero banned AI buzzwords]
  - [Hover & micro-interactions implemented with prefers-reduced-motion fallback]
  - [Full-spectrum SEO verified: single h1, valid meta, zero CLS explicit dimensions]
  - [Inputs validated and sanitized, no raw HTML injection]
```

### Micro PRD Example (Search Feature):

```text
Goal            : User can search products by name in real-time without page reload.
Surface Mode    : Operate
Domain Archetype: High-Velocity Kinetic SaaS
Requirements    :
  - Search input with clear button above product list (Explicit)
  - Real-time debounced filtering (300ms) to preserve UI responsiveness (Inferred)
  - Empty state with clear message when 0 items match (Inferred)
Clarifications  :
  - Confirmed: Search applies client-side across loaded catalogue rather than pagination query.
Scope           : ProductList component, add SearchInput component, update filter hook.
Out of Scope    : Full-text server search index, search history persistence.
Motion & Feedback:
  - Search input focus ring transitions (150ms ease-out)
  - Result list layout animation via CSS transform or Framer Motion layoutId
  - Active clear button press scale(0.97)
SEO & Semantics :
  - Accessible search role: role="search" with aria-label="Product Search"
  - Clear button aria-label="Clear search input"
Security & Safety:
  - Sanitize search query input; strip dangerous HTML characters
  - Use min-width: 0 on result cards to prevent long query blowout
Acceptance      :
  - Typing a substring filters products within 300ms debounce
  - Clearing input restores complete product catalogue smoothly
  - Tested on mobile (390px) and desktop (1440px): search bar full-width on mobile, right-aligned on desktop
  - Zero XSS vulnerabilities from search query reflection
```

---

## Full PRD (for large tasks, new surfaces, major features)

Use the following 24 structured sections. Keep each section concrete and actionable. Sections not applicable to the specific product must state "Not applicable" followed by a 1-sentence technical reason.

```text
1.  Product Overview & Visitor Surface Mode
    - Summary of the product, purpose, and audience.
    - Surface Mode: Persuade | Operate | Read | Experience (guides motion & layout).
    - Domain Personality Archetype: Editorial | Engineering | Artisanal | Kinetic SaaS | Enterprise | Culture.

2.  Problem Statement
    - Concrete user or business problem being solved (based on user request).

3.  Product Goal & Target Outcomes
    - Tangible outcome marking success with measurable completion criteria.

4.  Target Users & Usage Context
    - Who uses this, under what conditions (desk, mobile on-the-go, low bandwidth).

5.  Clarification & Ambiguity Resolution Log
    - Questions asked to the user and their confirmed decisions.
    - Explicit list of assumptions made for non-blocking choices.

6.  User Needs & Scenarios
    - Primary and secondary user scenarios start to finish.

7.  Core Features & Prioritization
    - Ranked list of features, tagged (Explicit) or (Inferred).

8.  Page & Screen Structure
    - Sitemap or component hierarchy tree with semantic HTML landmarks.

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
    - Domain Personality Matrix alignment: Exact visual archetype selected.
    - Visual Identity: Specific primary color (HSL), secondary, background, and text colors.
    - Typography: Specific named Display font and Body font pairing (Google Fonts / local).
    - Copywriting Craft: Zero banned AI buzzwords (no "Unleash", "Elevate", "Seamless", "Supercharge").
    - Browser Surfaces Theming: Selection color, caret-color, custom scrollbar, focus rings.
    - Layout Composition: Asymmetrical grid, fluid clamp() scales, 65-75ch body measure.
    - Anti-Slop Check: Confirm zero forbidden AI defaults (no generic purple gradients, no 3-card march).

14. Responsive Behavior & Mobile Ergonomics (MANDATORY)
    - Mobile Small (~360-390px): 1-column layouts, 44x44px touch targets, 8px separation.
    - Mobile Standard (~390-430px): Thumb-zone controls, safe area insets (env(safe-area-inset-*)).
    - Tablet (~768-1024px): Adaptive column split, adjusted drawer/sheet behaviors.
    - Desktop (~1280px+): Multi-column grids, fixed sidebars, max content constraint (1200-1440px).
    - Hard rule: Zero horizontal scrollbars (overflow-x: clip), zero unhandled text truncation.

15. Authored 4-Layer Motion System (MANDATORY)
    - Layer 1 (Ambient/Focal): One authored signature entrance or interactive transformation.
    - Layer 2 (Scrollytelling): Staggered entrances (max 5-6 items, 40-80ms delay), exit faster than enter.
    - Layer 3 (Micro-interactions): Button active press scale(0.97), card lift, toggle springs (80-150ms).
    - Layer 4 (GPU & A11y): Transform/opacity animations only; prefers-reduced-motion fallback implemented.
    - Timing & Easing: Natural deceleration (cubic-bezier(0.16, 1, 0.3, 1)) on enter.

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
    - Extreme Inputs: 100+ character strings, emoji, CJK, RTL logical CSS properties.
    - Text Overflow: Truncate / line-clamp rules, min-width: 0 on flex/grid children.
    - Four-State Async UI: Explicit handling of Idle/Loading, Success, Empty, and Error + Retry.
    - Gesture Safety: pointercancel handling, multi-touch defense, clean state resets.

19. Data Requirements & API Contracts
    - Data schemas, API request/response types, mock datasets if backend unready.

20. Asset & Photography Strategy
    - Real photography from Unsplash CDN with optimization query parameters (?w=800&q=75).
    - generate_image tool for custom branding assets when needed.
    - Lucide/Phosphor/Heroicons for consistent stroke icons with aria-labels.

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
    - HARD BLOCKER 2: Bespoke Anti-AI Craft & Personality verified (Domain Archetype, no AI buzzwords).
    - HARD BLOCKER 3: Authored 4-Layer Motion System, micro-interactions, and reduced-motion verified.
    - HARD BLOCKER 4: Full-Spectrum SEO, Semantics & Web Vitals verified (single h1, Schema, zero CLS).
    - HARD BLOCKER 5: Security & Data Privacy baseline verified (Zod schemas, XSS defense, token hygiene).
    - HARD BLOCKER 6: Code Safety & Resilient Hardening verified (strict types, 4-state UI, error boundaries).

24. Assumptions & Risks
    - Document every design and technical assumption for user verification.
```

---

After completing the PRD, present it clearly to the user before proceeding to implementation on medium-to-large tasks.
