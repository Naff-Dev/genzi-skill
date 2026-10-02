# Genzi

**Genzi is the key.**

This repository contains the `genzi` skill and plugin for Antigravity, Gemini, Claude, Cursor, and other AI coding agents.

## Quick Reference

- **Skill Name**: `genzi`
- **Location**: `skills/genzi/SKILL.md`
- **Purpose**: Full professional AI partner: Product Manager + UX/Motion Designer + Art Director + Security Architect + Senior Engineer + SEO Specialist + Code Reviewer in one workflow. Turns informal requests into PRDs, bespoke purpose-driven design, functional motion, full-spectrum SEO, robust OWASP security, safe maintainable code, and responsive implementation.

## Skill Activation Prompts

### Quick Command
```
use Naff-Dev/genzi-skill [your task here]
```

**5 Ready-to-Use Prompt Examples:**
```text
use Naff-Dev/genzi-skill build a landing page for a local grocery delivery service targeting tier-2 city families
```
```text
use Naff-Dev/genzi-skill build a fast POS cashier app with daily sales report, barcode scan, and inventory tracking
```
```text
use Naff-Dev/genzi-skill redesign this deal pipeline dashboard to be more visual, bold, responsive, with revenue summary per stage
```
```text
use Naff-Dev/genzi-skill create a local coffee roastery storefront with single-origin beans catalog, flavor filters, and monthly subscriptions
```
```text
use Naff-Dev/genzi-skill build an architecture studio portfolio with asymmetrical project grid, full-bleed imagery, and editorial typography
```

### Universal Copy-Paste Prompt
```
Use the skill from this repository: https://github.com/Naff-Dev/genzi-skill

Instructions for Agent:
1. Load and read the Genzi skill from https://github.com/Naff-Dev/genzi-skill
2. Read the file skills/genzi/SKILL.md completely before doing anything.
3. Follow the 18-step workflow in its entirety: intent understanding, technical clarification gate (ask user only for technical blockers; infer design context autonomously), requirements classification, PRD generation, bespoke anti-AI craft floor (Internal Context Deduction, 9-level priority hierarchy, purpose layouts, contextual HSL, named fonts, themed browser surfaces), functional motion system, full-spectrum SEO and Web Vitals, security baseline, safe maintainable technical architecture, defensive implementation with realistic domain mock data, responsive verification on desktop and mobile, and self-review using references/review-checklist.md (15-Point AI-Slop Check & 6 Mandatory Hard Blockers).
4. Do not skip any steps.

Task: [write your task here]
```

## Core Rules for Agents (Anti-AI Design System)

1. **Clarification Gate vs. Internal Context Deduction**:
   - Ask clarifying questions ONLY for critical technical or architectural blockers (mock vs database, auth boundaries, scope depth).
   - When the user gives no visual direction, **DO NOT ASK VISUAL QUESTIONS** and **DO NOT DEFAULT TO AI SLOP**. Autonomously deduce the domain visual language using the 10-Dimension Context Deduction (Rule 12).
2. **The 9-Level Design Priority Hierarchy**:
   `Functionality > Information Hierarchy > Usability > Accessibility > Consistency > Performance > Brand/Context > Visual Polish > Decoration`.
   Never invert this hierarchy to chase superficial "wow effects".
3. **Purpose-Driven Layouts (No Cloned SaaS Templates)**:
   Never default to the generic formula: `Navbar -> Centered Hero -> Subtitle -> CTA -> 3 Cards -> Big CTA -> Footer`.
   Tailor layout to domain purpose: Product-first (retail), Editorial-first (news), Data-first (dashboards), Info-first (schools), Utility-first (internal admin).
4. **Absolute Ban on Emojis in UI**:
   Never use emojis (🚀 ✨ 🔥 💡 ⚡ ❤️ 🎯 📈 🛡️) as icons, badges, indicators, or decorations. Use tailored inline SVGs or standard project icon libraries (Lucide, Heroicons).
5. **Component Discipline (Card, Radius & Shadow)**:
   - Card discipline: Do not wrap everything in cards. Use tables, lists, hairline dividers, inline key-values, and fieldsets.
   - Radius discipline: Systematic small/medium corner radii (4px - 12px), never `rounded-2xl` or `rounded-full` everywhere.
   - Shadow discipline: Reserve drop shadows for floating elevation (modals, dropdowns); use borders or whitespace for flat surfaces.
6. **Contextual Color Palettes (No Reflex Dark Mode)**:
   Dark mode is strictly forbidden unless explicitly requested or genuinely required by domain (night code editors, video suites). Use crisp, accessible light mode rooted in domain psychology. No generic black+neon schemes.
7. **Human Copywriting & Realistic Domain Mock Data**:
   Zero banned AI marketing buzzwords ("unleash", "elevate", "seamless", "supercharge", "next-gen"). Use grounded action verbs. Populate UI with realistic domain entities (real SKUs, item names, realistic dates and prices), never "Lorem Ipsum" or "Amazing Product".
8. **Functional Motion System**:
   Motion must serve an interaction purpose: Tactile micro-press scale(0.97) <150ms, state transitions, skeleton loaders, and mandatory `prefers-reduced-motion` fallbacks. Zero gratuitous floating blobs or infinite glowing borders. Utilitarian apps stay snappy with zero forced hero animations.
9. **Full-Spectrum SEO & Web Vitals**:
   Landmark HTML5 outline, single `<h1>` hierarchy, descriptive media alt text, complete OpenGraph/Twitter cards, domain JSON-LD Schema.org, and Core Web Vitals optimization (zero CLS with explicit dimensions, LCP hero preloading).
10. **Responsive Mastery & Mobile Ergonomics**:
    Verified on mobile (~360-430px) AND desktop (~1280-1440px+). Zero horizontal scrollbars (`overflow-x: clip`). Touch targets min 44x44px with 8px tap separation. Primary mobile controls in thumb zone; safe-area-insets respected.
11. **Security Baseline by Default**:
    Input schema validation (Zod/Valibot), XSS/injection prevention, HttpOnly session tokens, zero secrets in client bundles.
12. **Safe & Maintainable Code**:
    Strict TypeScript types, discriminated unions for state machines, error boundaries, 4-state async UI handling (loading, success, empty, error with retry).
13. **Never Invent Facts or Decorative Sections**:
    No fake metrics, fake reviews, fake client logos, or fabricated pricing tiers.
14. **Preserve Existing Stacks**:
    Existing codebase framework and conventions outrank default stacks.
15. **No Em Dash Character**:
    Do not use the em-dash character anywhere in PRDs, copy, comments, or code. Use "-", ":", or commas.
16. **The Six Mandatory Hard Blockers & 15-Point AI-Slop Check**:
    All 6 blockers in `references/review-checklist.md`, including the 15-Point AI-Slop Check, must pass before declaring any task complete.
17. **Mandatory PRD Approval Gate (STOP Before Coding)**:
    Never begin code implementation immediately after generating a PRD. STOP, present the PRD to the user (via interactive artifact and question gate), and prompt them to review the scope, architecture, visual direction, and implementation plan. Wait for explicit user confirmation before writing any code.
18. **Zero Half-Baked Code Policy**:
    Prohibit all placeholder comments ("// TODO", "// implement later", "/* ... */"). Every button, tab, search bar, filter, and modal toggle MUST be wired to working state handlers (backed by realistic local storage or mock stores). Deliver complete files without lazy truncation.
19. **Active Multi-Viewport Browser Verification**:
    When a local dev server or static server is running, actively inspect the rendered interface at Mobile (~390px) AND Desktop (~1440px) to verify zero horizontal overflow (`scrollWidth === innerWidth`), 44x44px touch targets, and visual fidelity before marking done.
