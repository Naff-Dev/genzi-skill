# PRD Template (Micro & Full)

Read this when entering Step 9 (Generate PRD). Choose Micro PRD or Full PRD per the "Scaling the Workflow" table in SKILL.md.

Writing rules for both PRD types:
- No em dash character ("—"). Use `-`, `:`, `.`, `,`, or plain sentences.
- Never include invented data (statistics, testimonials, customer names, etc).
- Tag requirements with their category when it needs clarifying: Explicit / Inferred / Assumption.
- Clear, concrete language, no filler.
- **Clarification first**: When intent, architecture, or security constraints are ambiguous, record the user's answers or explicit assumptions.
- **Responsive behavior on mobile AND desktop** must always be part of acceptance criteria.
- **Design, Motion, Security, and Code Safety** are hard requirements, not optional notes.

---

## Micro PRD (for small-to-medium tasks)

Use this concise format (10-20 lines):

```text
Goal            : [what this change/feature is meant to achieve]
Surface Mode    : [Persuade | Operate | Read | Experience]
Requirements    : [bullet list, tag (Explicit)/(Inferred)/(Assumption)]
Clarifications  : [questions asked or ambiguities resolved with user]
Scope           : [files/components/pages created or modified]
Out of Scope    : [what is intentionally omitted to avoid scope creep]
Motion & Feedback: [hover, active click, async loading/error feedback, entrance motion]
Security & Safety: [input validation schema, token storage, auth check, text-overflow wrap]
Acceptance      :
  - [Functional acceptance criteria]
  - [Mobile (~360-430px) AND Desktop (~1280px+) responsive verified, zero overflow]
  - [Hover & micro-interactions implemented with prefers-reduced-motion fallback]
  - [Inputs validated and sanitized, no raw HTML injection]
```

### Micro PRD Example (Search Feature):

```text
Goal            : User can search products by name in real-time without page reload.
Surface Mode    : Operate
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
  - Result list cross-fade / layout animation via CSS or Framer Motion
  - Loading shimmer if async search is simulated
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

2.  Problem Statement
    - Concrete user or business problem being solved (based on user request).

3.  Product Goal & Target Outcomes
    - Tangible outcome marking success.

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
    - Sitemap or component hierarchy tree.

9.  User Flows
    - Step-by-step walkthroughs of primary interactions, happy path, and alternate paths.

10. Functional Requirements
    - Precise, testable specifications of system behavior.

11. Non-Functional & Reliability Requirements
    - Performance budget (LCP < 2.5s, bundle limits), uptime expectations, responsiveness.

12. Security & Data Privacy (MANDATORY)
    - Input Validation: Schema validation (Zod/Valibot) on all incoming data.
    - XSS & Injection: No unescaped HTML, DOMPurify for rich text, parameterized queries.
    - Auth & Permissions: HttpOnly cookie storage, server-side permission checks.
    - Secrets: Private keys restricted to server environment, never bundled into client.
    - Security Headers: CSP, X-Content-Type-Options, Referrer-Policy, CORS constraints.

13. Design Direction & Craft Floor (MANDATORY)
    - Visual Identity: Specific primary color (HSL), secondary, background, and text colors.
    - Typography: Specific named Display font and Body font pairing (Google Fonts / local).
    - Browser Surfaces Theming: Selection color, caret-color, custom scrollbar, focus rings.
    - Layout Composition: Asymmetrical grid, fluid clamp() scales, 65-75ch body measure.
    - Anti-Slop Check: Confirm zero forbidden AI defaults (no generic purple gradients).

14. Responsive Behavior (MANDATORY)
    - Mobile (~360-430px): 1-column layouts, sticky bottom/top bars, 44x44px touch targets.
    - Tablet (~768-1024px): Adaptive column split, adjusted drawer/sheet behaviors.
    - Desktop (~1280px+): Multi-column grids, fixed sidebars, max content constraint (1200-1440px).
    - Hard rule: Zero horizontal scrollbars, zero unhandled text truncation.

15. Interaction & Motion System (MANDATORY)
    - Motion Thesis:
        * Focal Moment: One authored signature entrance or interactive transformation.
        * Continuity: Shared-element / FLIP / View Transitions across states.
        * Feedback: Button press scale(0.97), card lift, toggle springs (80-150ms).
        * Reduced Motion: prefers-reduced-motion fallback preserving opacity & state.
    - Timing & Easing: Natural deceleration (cubic-bezier(0.16, 1, 0.3, 1)) on enter;
      exit faster than enter (exit ~60% of enter duration).

16. Technical Architecture & File Plan
    - Framework & Stack: Strictly adhere to workspace detection findings.
    - Clean Layering: UI Components -> Custom Hooks -> Service / API Layer -> Domain Schemas.
    - Concrete File Plan: List of exact files to create, modify, or delete.

17. Safe & Maintainable Code Architecture
    - Strict TypeScript typing (strict: true, zero loose 'any' casts).
    - State Modeling: Discriminated unions for asynchronous state machines.
    - Error Boundaries: Top-level and component-level error boundaries.
    - Immutability & Cleanups: Safe state updates, cleanup on unmount for timers/listeners.

18. Hardening & Boundary Resilience (From Impeccable)
    - Extreme Inputs: 100+ character strings, emoji, CJK, RTL logical CSS properties.
    - Text Overflow: Truncate / line-clamp rules, min-width: 0 on flex/grid children.
    - Four-State Async UI: Explicit handling of Idle/Loading, Success, Empty, and Error + Retry.
    - Gesture Safety: pointercancel handling, multi-touch defense, clean state resets.

19. Data Requirements & API Contracts
    - Data schemas, API request/response types, mock datasets if backend unready.

20. Asset & Photography Strategy
    - Real photography from Unsplash CDN with optimization query parameters (?w=800&q=75).
    - generate_image tool for custom branding assets.
    - Lucide/Phosphor/Heroicons for consistent stroke icons with aria-labels.

21. Accessibility (WCAG 2.1 AA)
    - Semantic HTML elements (<main>, <nav>, <section>, <article>, <button>).
    - Contrast ratio: ≥4.5:1 for body text, ≥3:1 for large display text.
    - Keyboard navigable: Tab order logical, skip links, visible focus rings.

22. SEO & Metadata
    - Title tags, meta descriptions, Open Graph cards, canonical tags (public pages only).

23. Verifiable Acceptance Criteria
    - Concrete criteria covering functional behavior.
    - HARD BLOCKER 1: Responsive verified on mobile (~390px) and desktop (~1440px).
    - HARD BLOCKER 2: Design craft floor & typography verified.
    - HARD BLOCKER 3: Motion thesis, micro-interactions, and reduced-motion verified.
    - HARD BLOCKER 4: Security baseline & input validation verified.
    - HARD BLOCKER 5: Error and empty states tested and operational.

24. Assumptions & Risks
    - Document every design and technical assumption for user verification.
```

---

After completing the PRD, present it clearly to the user before proceeding to implementation on medium-to-large tasks.
