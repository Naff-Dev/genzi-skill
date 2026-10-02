# Genzi

**Genzi is the key.** Plugin and Skill package for Antigravity and Gemini coding agents.

## Activation Trigger

Activate the `genzi` skill whenever the user asks to build, design, architect, or add a feature to any web app, mobile app, dashboard, landing page, or software product.

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
3. Follow the 18-step workflow in its entirety: technical clarification gate (ask user only for technical blockers; infer design context autonomously), requirements classification, PRD generation, bespoke anti-AI craft floor (Internal Context Deduction, 9-level priority hierarchy, purpose layouts, contextual HSL, named fonts, themed browser surfaces), functional motion system, full-spectrum SEO and Web Vitals, security baseline, safe maintainable technical architecture, defensive implementation with realistic domain mock data, responsive verification on desktop and mobile, and self-review using references/review-checklist.md (15-Point AI-Slop Check & 6 Mandatory Hard Blockers).
4. Do not skip any steps.

Task: [write your task here]
```

## Key Directives

- Read `skills/genzi/SKILL.md` before coding. This is mandatory.
- Read reference guides in `skills/genzi/references/` for each phase.
- **Clarify technical unknowns, infer design context**: When ambiguous, ask the user high-leverage technical questions (database, auth, scope) instead of guessing. When no design instructions are provided, **DO NOT ASK VISUAL QUESTIONS** and **DO NOT DEFAULT TO AI SLOP**. Autonomously deduce the domain visual language using the 10-Dimension Context Deduction.
- **The 9-Level Design Priority Hierarchy**:
  `Functionality > Information Hierarchy > Usability > Accessibility > Consistency > Performance > Brand/Context > Visual Polish > Decoration`.
  Never invert this hierarchy to create superficial "wow effects".
- **The Six Mandatory Hard Blockers**:
  1. Responsive & Mobile Ergonomics: Desktop (~1280-1440px+) AND Mobile (~360-430px) verified, zero overflow, 44x44px touch targets, thumb zone reach.
  2. Bespoke Anti-AI Craft & Personality: Passes the 15-Point AI-Slop Check without exception. Zero emoji as UI elements, zero generic AI templates/clichés, zero banned marketing puffery, contextual palette, real typography pairing, themed browser surfaces.
  3. Functional Motion System: Purposeful motion, active tactile micro-interactions (press scale 0.97), no forced hero animations on utilitarian apps, prefers-reduced-motion fallback implemented.
  4. Full-Spectrum SEO & Web Vitals: Semantic HTML5, single <h1> rule, complete OpenGraph/Twitter cards, domain JSON-LD Schema.org, zero CLS explicit dimensions.
  5. Security & Data Privacy: Input schema validation (Zod/Valibot), XSS/injection defense, zero leaked secrets, HttpOnly tokens.
  6. Code Safety & Hardening: Strict types, 4-state UI handling, error boundaries, resilient text wrapping.
- **Absolute Ban on Emojis in UI**: Never use emojis (🚀 ✨ 🔥 💡 ⚡ ❤️ 🎯 📈 🛡️) as icons, badges, indicators, or decorations. Use inline SVGs or standard project icon libraries (Lucide, Heroicons).
- **Component Discipline**: Do not wrap everything in cards. Use tables, lists, hairline dividers, inline key-values, and fieldsets. Enforce systematic small/medium corner radii and reserved shadows.
- **Purpose-Driven Layouts**: Never repeat the generic cloned SaaS layout. Tailor layout to domain purpose: Product-first (retail), Editorial-first (news), Data-first (dashboards), Info-first (schools), Utility-first (internal admin).
- **Realistic Domain Data & Human Copy**: Concrete domain entities (real SKUs, item names, realistic dates and prices), zero Lorem Ipsum, zero "Amazing Product", zero banned buzzwords ("unleash", "elevate", "seamless", "supercharge", "next-gen").
- **No Reflex Dark Mode**: Do not default to dark/black themes unless explicitly required by the product type or user.
- **Mandatory PRD Approval Gate (STOP Before Coding)**: Never begin code implementation immediately after generating a PRD. STOP, present the PRD to the user (via interactive artifact and question gate), and prompt them to review the scope, architecture, visual direction, and implementation plan. Wait for explicit user confirmation before writing any code.
- **Zero Half-Baked Code**: Prohibit placeholder comments ("// TODO", "// implement later"). Wire all buttons, tabs, search inputs, filters, and modal toggles to working state handlers.
- **Active Multi-Viewport Browser Verification**: When dev server is running, actively inspect at Mobile (~390px) and Desktop (~1440px) to verify zero overflow (`scrollWidth === innerWidth`) and touch target compliance.
- Do not use em-dash characters anywhere.
