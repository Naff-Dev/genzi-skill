# Genzi

**Genzi adalah koentji.** Plugin and Skill package for Antigravity and Gemini coding agents.

## Activation Trigger

Activate the `genzi` skill whenever the user asks to build, design, architect, or add a feature to any web app, mobile app, dashboard, landing page, or software product.

## Skill Activation Prompts

### Quick Command
```
use Naff-Dev/genzi [task kamu]
```

### Universal Copy-Paste Prompt
```
Gunakan skill dari repo ini: https://github.com/Naff-Dev/genzi

Instruksi untuk Agent:
1. Ambil atau baca skill Genzi dari repo https://github.com/Naff-Dev/genzi
2. Baca file skills/genzi/SKILL.md secara penuh sebelum melakukan apapun.
3. Ikuti 18-step workflow yang ada di dalamnya secara lengkap: clarification gate (tanya user saat belum jelas), requirements classification, PRD dengan security dan motion thesis, design direction dengan HSL spesifik dan named fonts, interaction & animation plan, safe maintainable architecture, implementation, responsive verification, dan self-review (5 Hard Blockers).
4. Jangan skip langkah apapun.

Task: [tulis task kamu di sini]
```

## Key Directives

- Read `skills/genzi/SKILL.md` before coding. This is mandatory.
- Read reference guides in `skills/genzi/references/` for each phase.
- **Clarify before coding**: When ambiguous or underspecified, ask the user high-leverage clarifying questions instead of guessing.
- **The Five Mandatory Hard Blockers**:
  1. Responsive: Desktop (~1280px+) AND Mobile (~360-430px) verified.
  2. Design & Craft Floor: Real named font, real primary color, themed browser surfaces, contrast verified, no AI slop.
  3. Interaction & Motion: Authored focal moment, active/hover micro-interactions, reduced-motion path.
  4. Security: Input schema validation (Zod/Valibot), XSS/injection defense, zero leaked secrets.
  5. Code Safety & Hardening: Strict types, 4-state UI handling, error boundaries, resilient text wrapping.
- **Bold and colorful by default**: Do not default to dark/black themes unless explicitly required by the product type or user.
- **Framer Motion and GSAP are valid tools**: Use them freely when animation complexity justifies it.
- **Use Unsplash CDN URLs for real images**: Never use solid-color placeholder boxes in visual products.
- Avoid generic AI slop in UI, copy, and code architecture.
- Do not use em-dash characters anywhere.
