# Genzi

**Genzi adalah koentji.** Plugin and Skill package for Antigravity and Gemini coding agents.

## Activation Trigger

Activate the `genzi` skill whenever the user asks to build, design, architect, or add a feature to any web app, mobile app, dashboard, landing page, or software product.

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
3. Ikuti 18-step workflow yang ada di dalamnya secara lengkap: clarification gate (tanya user saat belum jelas, termasuk preferensi icon SVG vs library), requirements classification, PRD dengan security, motion thesis, dan full-spectrum SEO, design direction dengan Domain Personality Matrix, HSL spesifik, dan named fonts, 4-layer interaction & motion plan, safe maintainable architecture, implementation, responsive verification, dan self-review (The Six Mandatory Hard Blockers).
4. Jangan skip langkah apapun.

Task: [tulis task kamu di sini]
```

## Key Directives

- Read `skills/genzi/SKILL.md` before coding. This is mandatory.
- Read reference guides in `skills/genzi/references/` for each phase.
- **Clarify before coding**: When ambiguous or underspecified, ask the user high-leverage clarifying questions (including architecture, feature scope, and icon preference) instead of guessing.
- **The Six Mandatory Hard Blockers**:
  1. Responsive & Mobile Ergonomics: Desktop (~1280-1440px+) AND Mobile (~360-430px) verified, zero overflow, 44x44px touch targets, thumb zone reach.
  2. Bespoke Anti-AI Craft & Personality: Domain Personality Matrix archetype, saturated primary color, real named fonts, zero AI visual tropes, zero banned AI buzzwords.
  3. Authored 4-Layer Motion: Focal hero moment, scrollytelling choreography, active micro-interactions (press scale 0.97), reduced-motion path.
  4. Full-Spectrum SEO & Web Vitals: Semantic HTML5, single <h1> rule, complete OpenGraph/Twitter cards, domain JSON-LD Schema.org, zero CLS explicit dimensions.
  5. Security & Data Privacy: Input schema validation (Zod/Valibot), XSS/injection defense, zero leaked secrets, HttpOnly tokens.
  6. Code Safety & Hardening: Strict types, 4-state UI handling, error boundaries, resilient text wrapping.
- **Icon Anti-Slop Policy**: Use tailored inline SVGs directly. Do not plaster arbitrary icon circles on every card. Ask user at Clarification Gate before importing external icon libraries.
- **Bold and colorful by default**: Do not default to dark/black themes unless explicitly required by the product type or user.
- **Use Unsplash CDN URLs for real images**: Never use solid-color placeholder boxes in visual products.
- Avoid generic AI slop in UI, copy, and code architecture.
- Do not use em-dash characters anywhere.
