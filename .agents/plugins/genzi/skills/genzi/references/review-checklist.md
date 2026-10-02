# Self-Review Checklist

Read this when entering Step 16 (Self-review), after implementation is done and before declaring the task complete to the user.

Run through every category below. If any item fails, fix it, then re-run that category (and any other category the fix might affect) before continuing.

```text
PRODUCT & FUNCTIONALITY
[ ] The PRD's Problem Statement is genuinely solved by the implementation
[ ] Every main User Flow can be completed start to finish without breaking
[ ] Every Core Feature (Explicit + Inferred) actually works in practice
[ ] Clarifications and resolved user questions are reflected in the final output

BESPOKE ANTI-AI CRAFT & PERSONALITY (HARD BLOCKER)
[ ] Aligns with the Domain Personality Matrix (editorial, engineering, artisanal, SaaS, fintech, or culture)
[ ] Zero generic AI visual clichés (no purple-to-blue glow traps, no cloned centered heroes, no 3-card marches)
[ ] Zero banned AI marketing buzzwords in UI copy or headings (no "Unleash", "Elevate", "Seamless", "Supercharge", etc.)
[ ] Copy uses grounded, domain-authentic human language with concrete verbs and specific outcomes
[ ] Real saturated primary color defines brand identity (never gray-on-gray)
[ ] Dark mode was ONLY chosen if genuinely warranted by product context; otherwise light mode is mandatory
[ ] Real named display and body fonts loaded (Google Fonts or local, never browser default)
[ ] Typography measure respected: 65-75ch body measure, text-wrap: balance on headings
[ ] Browser surfaces themed: ::selection, caret-color, custom scrollbars, :focus-visible rings, tabular nums
[ ] Real photography used from CDN, never solid-color placeholder boxes

AUTHORED 4-LAYER MOTION SYSTEM (HARD BLOCKER)
[ ] Layer 1 (Ambient/Focal): One authored signature focal sequence carries the product soul
[ ] Layer 2 (Scrollytelling): Stagger chains capped at 5-6 items, 40-80ms offset, natural deceleration
[ ] Layer 2 (Exits): Exit transitions animate 50-70% faster than entrance (150-250ms)
[ ] Layer 3 (Micro-interactions): Every button has active press (scale 0.97) and hover lift
[ ] Layer 3 (States): Shimmer loading, success checkmark morph, shake on error alert
[ ] Layer 4 (GPU & A11y): Animate transforms and opacity only (zero layout thrashing)
[ ] Layer 4 (Reduced Motion): prefers-reduced-motion media query implemented and retains essential state feedback
[ ] Gestures handle pointercancel, lostpointercapture, and blur safely without getting stuck

FULL-SPECTRUM SEO, SEMANTICS & WEB VITALS (HARD BLOCKER)
[ ] Landmark semantic HTML5 outline used (<header>, <nav>, <main>, <article>, <footer>)
[ ] Exactly one <h1> per page capturing the primary keyword and value proposition
[ ] Heading levels never skip steps (h1 -> h2 -> h3)
[ ] All media elements have descriptive, informative alt text (never empty or generic "image")
[ ] OpenGraph metadata complete (og:title, og:description, og:image, og:url, og:site_name)
[ ] Twitter Cards metadata complete (summary_large_image, twitter:title, twitter:description, twitter:image)
[ ] Domain-specific JSON-LD Schema.org structured data embedded and valid
[ ] Canonical URL and theme-color meta tags specified
[ ] Core Web Vitals: Hero image preloaded with high priority; below-fold media lazy loaded
[ ] Core Web Vitals: Explicit dimensions or aspect-ratio on all images and containers (Zero CLS)
[ ] Core Web Vitals: Interactive responses under 150ms (INP safe)

SECURITY & DATA PRIVACY (HARD BLOCKER)
[ ] All user inputs validated with strict schemas (Zod/Valibot) or type guards
[ ] Zero dangerouslySetInnerHTML or innerHTML injection without sanitized allowlists
[ ] External links use rel="noopener noreferrer" and safe protocols (http/https/mailto)
[ ] Auth tokens stored securely (HttpOnly cookies preferred, never sensitive tokens in localStorage)
[ ] Authorization & resource ownership verified on the server for all mutations
[ ] Zero secrets, private environment variables, or database credentials leaked to client JS
[ ] Safe logging: no passwords, PII, or full server stack traces exposed to end-users

CODE SAFETY, HARDENING & ARCHITECTURE (HARD BLOCKER)
[ ] Strict TypeScript types used (strict: true, zero loose 'any' casts)
[ ] Asynchronous UI states modeled with discriminated unions (eliminating impossible states)
[ ] All 4 async states handled: Loading (shimmer/skeleton), Success, Empty state, and Error with Retry button
[ ] Component-level Error Boundaries in place so one failure does not crash the entire app
[ ] Text overflow handled: truncate, line-clamp, overflow-wrap: break-word, min-width: 0 on flex/grid children
[ ] Tested with extreme inputs (100+ chars, emoji, long words) without breaking layouts
[ ] Clean architecture: UI presentation separated from business logic hooks and API services
[ ] Zero magic numbers or hardcoded hex colors without a design token or named constant
[ ] Resources cleaned up: event listeners, intervals, and AbortControllers aborted on unmount
[ ] No unused imports, dead code, or commented-out blocks left in final delivery

RESPONSIVE MASTERY & MOBILE ERGONOMICS (HARD BLOCKER)
[ ] Verified on Mobile Small (~360px): layout, touch targets, and typography intact
[ ] Verified on Mobile Standard (~390-430px): no horizontal overflow, comfortable reading
[ ] Verified on Tablet (~768-834px): adaptive column layouts flow naturally
[ ] Verified on Desktop (~1024-1440px+): max container width constrained (1440px max)
[ ] Zero horizontal scrollbars from unhandled container overflow at any viewport (overflow-x: clip)
[ ] Touch targets are at least 44x44px minimum with 8px tap separation
[ ] Ergonomic thumb zone: Primary mobile actions and CTAs positioned in lower 40% of viewport
[ ] Safe area insets respected for notched screens (env(safe-area-inset-top/bottom))
[ ] Adaptive mobile navigation (drawer/sheet with backdrop blur, focus trap, and escape key handler)

REQUIREMENTS & INTEGRITY
[ ] Every Acceptance Criterion in the PRD is met and verified
[ ] Assumptions made are consistent with the final implementation
[ ] No em dash character anywhere in code, comments, or copy
[ ] No fake content, statistics, client logos, or fabricated testimonials
[ ] No lorem ipsum anywhere in the user interface
```

---

## The Six Mandatory Hard Blockers

"The build succeeded" or "no errors" alone is NEVER enough to declare a task complete.
There are **SIX MANDATORY HARD BLOCKERS** that must all pass before the task is finished:

1. **RESPONSIVE & MOBILE ERGONOMICS**: Verified on mobile (~360-430px) AND desktop (~1440px), zero horizontal overflow, 44x44px touch targets, safe area insets respected, thumb zone optimized.
2. **BESPOKE ANTI-AI CRAFT & PERSONALITY**: Matches Domain Personality Matrix, zero generic AI visual clichés, zero banned marketing buzzwords, saturated brand color, real typography pairing, themed browser surfaces.
3. **AUTHORED 4-LAYER MOTION SYSTEM**: Focal hero moment present, staggered scrollytelling choreography, active tactile micro-interactions on all controls (press scale 0.97), prefers-reduced-motion fallback implemented.
4. **FULL-SPECTRUM SEO, SEMANTICS & WEB VITALS**: Semantic HTML5 landmark structure, single <h1> rule, complete OpenGraph/Twitter cards, domain JSON-LD Schema.org, Core Web Vitals protected (zero CLS, LCP priority).
5. **SECURITY & DATA PRIVACY**: Strict input validation schemas (Zod/Valibot), XSS/injection prevented, tokens secured in HttpOnly cookies, zero leaked secrets.
6. **CODE SAFETY & RESILIENT HARDENING**: Strict types, 4-state UI handled, error boundaries, text overflow protected with min-width: 0 and wrapping.

Skipping any of these six means the task is strictly incomplete. Fix all failing blockers before delivering to the user.
