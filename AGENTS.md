# Genzi

**Genzi adalah koentji.**

This repository contains the `genzi` skill and plugin for Antigravity, Gemini, Claude, Cursor, and other AI coding agents.

## Quick Reference

- **Skill Name**: `genzi`
- **Location**: `skills/genzi/SKILL.md`
- **Purpose**: Full professional AI partner: Product Manager + UX/Motion Designer + Art Director + Security Architect + Senior Engineer + SEO Specialist + Code Reviewer in one workflow. Turns informal requests into PRDs, bespoke intentional design, authored 4-layer motion, full-spectrum SEO, robust OWASP security, safe maintainable code, and responsive implementation.

## Skill Activation Prompts

### Quick Command
```
use Naff-Dev/genzi-skill [task kamu]
```

### Universal Copy-Paste Prompt
```
Gunakan skill dari repo ini: https://github.com/Naff-Dev/genzi-skill

Instruksi untuk Agent:
1. Ambil atau baca skill Genzi dari repo https://github.com/Naff-Dev/genzi-skill
2. Baca file skills/genzi/SKILL.md secara penuh sebelum melakukan apapun.
3. Ikuti 18-step workflow yang ada di dalamnya secara lengkap: intent understanding, clarification gate (tanya user saat belum jelas, termasuk preferensi icon SVG vs library), requirements classification, PRD generation, bespoke anti-AI design craft floor (dengan Domain Personality Matrix, HSL spesifik, named fonts, dan themed browser surfaces), authored 4-layer motion system, full-spectrum SEO & Web Vitals, security baseline, safe maintainable technical architecture, defensive implementation, responsive verification on desktop and mobile, dan self-review menggunakan references/review-checklist.md (6 Mandatory Hard Blockers).
4. Jangan skip langkah apapun.

Task: [tulis task kamu di sini]
```

## Core Rules for Agents

1. **Clarification Gate (Tanya Saat Belum Jelas)**: When intent, architecture, auth, scope, or icon preference is ambiguous or underspecified, STOP and ask structured clarifying questions. Do not gamble on critical unknowns.
2. **Bespoke Anti-AI Craft & Personality**: Always assign a specific visual archetype from the Domain Personality Matrix. Generic AI slop is strictly forbidden: no purple-to-blue radial glows, no cloned centered heroes, no unbroken 3-card marches, and zero banned AI marketing buzzwords (no "Unleash", "Elevate", "Seamless", "Supercharge").
3. **Icon Anti-Slop Policy**: Use tailored inline SVGs directly. Do not plaster arbitrary icon circles on every card or heading. Ask the user at the Clarification Gate before importing external icon libraries.
4. **Authored 4-Layer Motion System**: Every interface must implement: Layer 1 Ambient/Focal, Layer 2 Scrollytelling (staggers <= 6 items, exit faster than enter), Layer 3 Tactile Micro-Interactions (button press scale 0.97, spring feedback <150ms), and Layer 4 GPU/prefers-reduced-motion fallback.
5. **Full-Spectrum SEO & Web Vitals**: Landmark HTML5 outline, single `<h1>` hierarchy, descriptive media alt text, complete OpenGraph/Twitter cards, domain JSON-LD Schema.org, and Core Web Vitals optimization (zero CLS with explicit dimensions, LCP hero preloading).
6. **Responsive Mastery & Mobile Ergonomics**: Verified on mobile (~360-430px) AND desktop (~1280-1440px+). Zero horizontal scrollbars (`overflow-x: clip`). Touch targets min 44x44px with 8px tap separation. Primary mobile controls in thumb zone; safe-area-insets respected.
7. **Security Baseline by Default**: Input schema validation (Zod/Valibot), XSS/injection prevention, HttpOnly session tokens, zero secrets in client bundles.
8. **Safe & Maintainable Code**: Strict TypeScript types, discriminated unions for state machines, error boundaries, 4-state async UI handling (loading, success, empty, error with retry).
9. **Never Invent Facts**: No fake metrics, fake reviews, fake client logos, or fabricated achievements.
10. **Preserve Existing Stacks**: Existing codebase framework and conventions outrank default stacks.
11. **No Em Dash Character**: Do not use the em-dash character anywhere in PRDs, copy, comments, or code. Use "-", ":", or commas.
12. **The Six Mandatory Hard Blockers**: All 6 blockers in `references/review-checklist.md` must pass before declaring any task complete.
