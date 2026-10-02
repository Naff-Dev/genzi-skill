# Self-Review Checklist: The Six Mandatory Hard Blockers & Anti-AI Audit

Read this when entering Step 16 (Self-review), after implementation is done and before declaring the task complete to the user.

Run through every category below. If any item fails, fix it, then re-run that category (and any other category the fix might affect) before continuing.

```text
PRODUCT, CONTEXT & FUNCTIONALITY
[ ] The PRD's Problem Statement is genuinely solved by the implementation
[ ] PRD was presented to and explicitly approved by the user before code implementation began
[ ] Every main User Flow can be completed start to finish without breaking
[ ] Every Core Feature (Explicit + Inferred) actually works in practice
[ ] Clarifications and resolved user questions are reflected in the final output
[ ] 9-Level Priority Hierarchy strictly obeyed: Functionality & Usability > Visual Polish > Decoration

BESPOKE ANTI-AI CRAFT & PERSONALITY (HARD BLOCKER #2)
[ ] PASSES ALL 15 POINTS OF THE AI-SLOP CHECK:
    1. Zero Vercel/Linear clone template styling unless explicitly requested
    2. Dark mode was ONLY chosen if genuinely warranted by product context; otherwise clean light mode is mandatory
    3. Zero purposeless gradients, glowing orbs, or radial background fades
    4. ABSOLUTE BAN ON EMOJIS in UI: Zero emoji (🚀 ✨ 🔥 💡 ⚡ ❤️ 🎯 📈 🛡️) used as icons, badges, or decoration
    5. Card discipline enforced: Content structured via tables, lists, dividers, inline pairs, or tabs where appropriate (no card-soup)
    6. Radius discipline enforced: Systematic corner radius (small/medium, no rounded-2xl/full on everything)
    7. Shadow discipline enforced: Shadow only for elevation/modals; flat borders/whitespace preferred for content separation
    8. Contextual typography: Real named font loaded matching domain formality, measure 65-75ch, text-wrap: balance
    9. Human copywriting: Grounded domain verbs, zero banned AI buzzwords ("unleash", "elevate", "seamless", "supercharge", "modern", "next-gen")
    10. Purpose-driven layout: Product-first (store), editorial-first (news), data-first (dashboard), info-first (school), utility-first (admin)
    11. CTA discipline: Sized and placed appropriately, not oversized or repeated excessively
    12. Contextual color palette: Rooted in real domain psychology (not generic black/white + neon purple/cyan)
    13. Zero invented sections: No fake testimonials, pricing tiers, FAQs, or newsletters on utilitarian/internal tools
    14. Realistic mock data: Concrete domain entities (real SKUs, item names, realistic dates/prices), zero Lorem Ipsum, zero "Amazing Product"
    15. Authentic identity: If name and logo are removed, the site feels deliberately crafted for this specific product, not an AI template
    16. Single elevation declared: Crisp border OR soft shadow, zero ghost cards (1px border under wide shadow)
    17. Zero kickers or eyebrow badges above headings: Let the heading speak and carry its own weight
    18. Zero gradient text: Visual contrast achieved purely through typography weight, size, and measure
    19. Overlays escape clipping: Dropdowns, tooltips, and modal dialogs escape ancestor overflow: hidden via portals/popovers
[ ] Real photography used from CDN when visual context calls for it, never solid-color placeholder boxes
[ ] Browser surfaces themed: ::selection, caret-color, custom scrollbars, :focus-visible rings, tabular nums on numbers

FUNCTIONAL MOTION SYSTEM & ACCESSIBILITY (HARD BLOCKER #3)
[ ] Motion by Function: Every animation has a functional purpose (feedback, state transition, loading skeleton, error shake)
[ ] Zero gratuitous motion: No infinite gradient animations, glowing pulses, floating blobs, or excessive parallax
[ ] Utilitarian & dashboard interfaces are snappy and lightweight: No forced hero signature animations where speed is needed
[ ] Micro-interactions: Active button press scale(0.97) with responsive spring feedback (<150ms)
[ ] Scrollytelling (when present on public/editorial pages): Max 5-6 items, 40-80ms offset, natural deceleration; exits 50-70% faster (150-250ms)
[ ] GPU acceleration: Animate transforms and opacity only (zero layout thrashing, never animate top/left/width/height)
[ ] Accessible prefers-reduced-motion fallback implemented and tested
[ ] Gestures handle pointercancel, lostpointercapture, and blur safely without getting stuck

FULL-SPECTRUM SEO, SEMANTICS & WEB VITALS (HARD BLOCKER #4)
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

SECURITY & DATA PRIVACY (HARD BLOCKER #5)
[ ] All user inputs validated with strict schemas (Zod/Valibot) or type guards
[ ] Zero dangerouslySetInnerHTML or innerHTML injection without sanitized allowlists
[ ] External links use rel="noopener noreferrer" and safe protocols (http/https/mailto)
[ ] Auth tokens stored securely (HttpOnly cookies preferred, never sensitive tokens in localStorage)
[ ] Authorization & resource ownership verified on the server for all mutations
[ ] Zero secrets, private environment variables, or database credentials leaked to client JS
[ ] Safe logging: no passwords, PII, or full server stack traces exposed to end-users

CODE SAFETY, HARDENING & ARCHITECTURE (HARD BLOCKER #6)
[ ] Zero half-baked code: No "// TODO" comments, no lazy truncation, working click handlers for all interactive controls
[ ] Strict TypeScript types used (strict: true, zero loose 'any' casts)
[ ] Asynchronous UI states modeled with discriminated unions (eliminating impossible states)
[ ] All 4 async states handled: Loading (skeleton), Success, Empty (with action CTA), and Error with Retry button
[ ] Component-level Error Boundaries in place so one failure does not crash the entire app
[ ] Text overflow handled: truncate, line-clamp, overflow-wrap: break-word, min-width: 0 on flex/grid children
[ ] Tested with extreme inputs (100+ chars, emoji, long words) without breaking layouts
[ ] Clean architecture: UI presentation separated from business logic hooks and API services
[ ] Zero magic numbers or hardcoded hex colors without a design token or named constant
[ ] Resources cleaned up: event listeners, intervals, and AbortControllers aborted on unmount
[ ] No unused imports, dead code, or commented-out blocks left in final delivery

RESPONSIVE MASTERY & MOBILE ERGONOMICS (HARD BLOCKER #1)
[ ] Active multi-viewport browser verification: Verified live on Mobile (390px) and Desktop (1440px) when local server runs; zero horizontal overflow (document.documentElement.scrollWidth === window.innerWidth)
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
2. **BESPOKE ANTI-AI CRAFT & PERSONALITY**: Passes the 15-Point AI-Slop Check without exception. Zero emoji as UI elements, zero generic AI templates/clichés, zero banned marketing puffery, contextual palette, real typography pairing, themed browser surfaces.
3. **FUNCTIONAL MOTION SYSTEM**: Fast, lightweight, purposeful. Micro-interactions (<150ms press scale 0.97), async state feedback, no forced hero animations on utilitarian apps, prefers-reduced-motion fallback implemented.
4. **FULL-SPECTRUM SEO, SEMANTICS & WEB VITALS**: Semantic HTML5 landmark structure, single <h1> rule, complete OpenGraph/Twitter cards, domain JSON-LD Schema.org, Core Web Vitals protected (zero CLS, LCP priority).
5. **SECURITY & DATA PRIVACY**: Strict input validation schemas (Zod/Valibot), XSS/injection prevented, tokens secured in HttpOnly cookies, zero leaked secrets.
6. **CODE SAFETY & RESILIENT HARDENING**: Strict types, 4-state UI handled, error boundaries, text overflow protected with min-width: 0 and wrapping.

Skipping any of these six means the task is strictly incomplete. Fix all failing blockers before delivering to the user.
