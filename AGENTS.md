# Genzi

**Genzi adalah koentji.**

This repository contains the `genzi` skill and plugin for Antigravity, Gemini, Claude, Cursor, and other AI coding agents.

## Quick Reference

- **Skill Name**: `genzi`
- **Location**: `skills/genzi/SKILL.md`
- **Purpose**: Full professional AI partner - Product Manager + UX/Motion Designer + Art Director + Security Architect + Senior Engineer + Code Reviewer in one workflow. Turns informal requests into PRDs, bold intentional design, authored motion, robust OWASP security, safe maintainable code, and responsive implementation.

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
3. Ikuti 18-step workflow yang ada di dalamnya secara lengkap: intent understanding, clarification gate (tanya user saat belum jelas), requirements classification, PRD generation, bold design craft floor (dengan HSL spesifik, named fonts, dan themed browser surfaces), authored interaction and motion plan, security baseline, safe maintainable technical architecture, defensive implementation, responsive verification on desktop and mobile, dan self-review menggunakan references/review-checklist.md.
4. Jangan skip langkah apapun.

Task: [tulis task kamu di sini]
```

## Core Rules for Agents

1. **Clarification Gate (Tanya Saat Belum Jelas)**: When intent, architecture, auth, or scope is ambiguous or underspecified, STOP and ask structured clarifying questions. Do not gamble on critical unknowns. Make assumptions only for non-blocking aesthetic or tactical choices.
2. **User intent > literal words**: Understand the real outcome without inventing unstated facts.
3. **Never invent facts**: No fake metrics, fake reviews, fake client logos, or fabricated achievements.
4. **Classify information**: Always separate into Explicit Requirements, Inferred Requirements, Assumptions, and Unknowns.
5. **Preserve existing stacks**: Existing codebase framework and conventions outrank default stacks.
6. **Mandatory responsive design**: Desktop AND mobile viewports must be verified. This is a hard blocker.
7. **No em dash character**: Do not use the em-dash character in PRDs, copy, or code. Use "-", ":", or commas.
8. **Design Craft Floor is a hard blocker**: Real font (not browser default), real primary color (not gray-on-gray), themed browser surfaces (::selection, caret, focus rings), hover & active animations on all interactive elements.
9. **Motion is alive and purposeful**: Every interface must have a motion thesis (authored focal moment, continuity, 100-150ms feedback, spring curves, and mandatory prefers-reduced-motion fallback).
10. **Security baseline by default**: Input schema validation (Zod/Valibot), XSS/injection prevention, HttpOnly session tokens, zero secrets in client bundles.
11. **Safe & maintainable code**: Strict TypeScript types, discriminated unions for state, error boundaries, 4-state async UI (loading, success, empty, error with retry).
12. **Bold and colorful by default**: Light mode is the default unless the product type or user explicitly requires dark. Purple-to-blue AI gradient is forbidden as a primary identity.
