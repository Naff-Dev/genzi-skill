# Self-Review Checklist

Read this when entering Step 16 (Self-review), after implementation is done and before declaring the task complete to the user.

Run through every category below. If any item fails, fix it, then re-run that category (and any other category the fix might affect) before continuing.

```text
PRODUCT & FUNCTIONALITY
[ ] The PRD's Problem Statement is genuinely solved by the implementation
[ ] Every main User Flow can be completed start to finish without breaking
[ ] Every Core Feature (Explicit + Inferred) actually works in practice
[ ] Clarifications and resolved user questions are reflected in the final output

DESIGN & CRAFT FLOOR (HARD BLOCKER)
[ ] Design matches the product type and Visitor Surface Mode (Persuade/Operate/Read/Experience)
[ ] Visual hierarchy is clear: distinct weight, scale, and spatial grouping
[ ] No pattern from the Anti-Slop checklist appears (no generic purple AI gradient)
[ ] Real saturated primary color is present and defines brand identity (NOT gray-on-gray)
[ ] Dark mode was ONLY chosen if genuinely warranted by product type or user request;
    otherwise light mode is mandatory
[ ] Real named display and body fonts are loaded (Google Fonts or local, never browser default)
[ ] Typography measure respected: 65-75ch body measure, text-wrap: balance on headings
[ ] Browser surfaces themed: ::selection, caret-color, custom scrollbars, :focus-visible rings
[ ] Contrast ratios verified: body/placeholder ≥ 4.5:1, large headings ≥ 3:1
[ ] Real photography used (Unsplash CDN or generated), never solid-color placeholder boxes

INTERACTION & MOTION SYSTEM (HARD BLOCKER)
[ ] Motion Thesis defined and respected: Focal moment + Continuity + Feedback + Budget
[ ] One authored focal moment or sequence that gives the surface personality
[ ] Every button has hover animation (scale + shadow/color, 150-200ms ease-out)
[ ] Every button has active press micro-interaction (scale 0.96-0.97, 80-100ms)
[ ] Every card has hover animation (translateY lift + shadow elevation, 200-250ms)
[ ] Every link has visible hover response (underline slide or color fade)
[ ] Entrance animations present for key sections with natural deceleration (cubic-bezier(0.16, 1, 0.3, 1))
[ ] Exit transitions animate faster than entrance (~50-70% of enter duration)
[ ] Stagger chains capped at 5-6 items, 40-80ms delay per item
[ ] prefers-reduced-motion media query is implemented and preserves semantic feedback
[ ] Gestures handle pointercancel, lostpointercapture, and blur safely without getting stuck

SECURITY & DATA PRIVACY (HARD BLOCKER)
[ ] All user inputs validated with strict schemas (Zod/Valibot) or type guards
[ ] Zero dangerouslySetInnerHTML or innerHTML injection without sanitized allowlists
[ ] External links use rel="noopener noreferrer" and safe protocols (http/https/mailto)
[ ] Auth tokens stored securely (HttpOnly cookies preferred, never sensitive tokens in localStorage)
[ ] Authorization & resource ownership verified on the server for all mutations
[ ] Zero secrets, private environment variables, or database credentials leaked to client JS
[ ] Safe logging: no passwords, PII, or full server stack traces exposed to end-users

CODE SAFETY, HARDENING & MAINTAINABILITY (HARD BLOCKER)
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

ACCESSIBILITY (WCAG 2.1 AA)
[ ] All interactive elements reachable and operable via keyboard
[ ] Visible focus rings on all interactive elements (:focus-visible)
[ ] Form fields have explicitly associated <label> elements
[ ] Semantic HTML used (<main>, <nav>, <section>, <button>, <header>, <footer>)
[ ] Icon-only buttons have an aria-label or accessible text
[ ] Color is never the sole indicator of state or meaning
[ ] All images have descriptive alt text (not "photo" or "image")

RESPONSIVE (HARD BLOCKER, verified on BOTH mobile and desktop)
[ ] Verified on mobile viewport (~360-430px): layout, navigation, typography, forms all correct
[ ] Verified on desktop viewport (~1280px+): layout, sidebars, typography all correct
[ ] Verified on tablet viewport (~768-1024px) when layout complexity warrants
[ ] Zero horizontal scrollbars from unhandled container overflow at any viewport
[ ] Touch targets are at least 44x44px minimum for reliable mobile tapping

REQUIREMENTS & INTEGRITY
[ ] Every Acceptance Criterion in the PRD is met and verified
[ ] Assumptions made are consistent with the final implementation
[ ] No em dash character ("—") anywhere in code, comments, or copy
[ ] No fake content, statistics, client logos, or fabricated testimonials
[ ] No lorem ipsum anywhere in the user interface
```

---

## The Five Mandatory Hard Blockers

"The build succeeded" or "no errors" alone is NEVER enough to declare a task complete.
There are **FIVE HARD BLOCKERS** that must all pass before the task is finished:

1. **RESPONSIVE**: Verified on mobile (~390px) AND desktop (~1440px), zero overflow.
2. **DESIGN & CRAFT FLOOR**: Real font, real primary color, themed browser surfaces, contrast passed, no AI slop.
3. **INTERACTION & MOTION**: Authored motion thesis, hover/active states on all controls, reduced-motion path.
4. **SECURITY & DATA PRIVACY**: Strict input validation, XSS prevention, secure token hygiene, zero leaked secrets.
5. **CODE SAFETY & HARDENING**: Strict types, 4-state UI handling, error boundaries, resilient text wrapping.

Skipping any of these five means the task is incomplete.
