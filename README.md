<div align="center">

<img src="assets/logo.png" alt="Genzi Logo" width="180" />

# Genzi

**Genzi adalah koentji.**

Skill komprehensif untuk AI coding agent yang bekerja layaknya satu tim produk profesional: mengklarifikasi saat instruksi teknis ambigu, merancang desain berkarakter kuat sesuai ranah produk, menulis kode yang aman dan mudah dirawat, serta mengaudit hasilnya sendiri secara mandiri sebelum menyatakan selesai.

<br>

[![Stars](https://img.shields.io/github/stars/Naff-Dev/genzi-skill?style=for-the-badge&color=f59e0b&logo=github)](https://github.com/Naff-Dev/genzi-skill/stargazers)
[![Forks](https://img.shields.io/github/forks/Naff-Dev/genzi-skill?style=for-the-badge&color=3b82f6&logo=github)](https://github.com/Naff-Dev/genzi-skill/network/members)
[![Downloads](https://img.shields.io/github/downloads/Naff-Dev/genzi-skill/total?style=for-the-badge&color=10b981&logo=download&label=Downloads)](https://github.com/Naff-Dev/genzi-skill/releases)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=Naff-Dev%2Fgenzi-skill&label=Visitors&countColor=%23ef4444&style=for-the-badge)](https://github.com/Naff-Dev/genzi-skill)

[![License: MIT](https://img.shields.io/github/license/Naff-Dev/genzi-skill?color=blue)](LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/Naff-Dev/genzi-skill?color=orange)](https://github.com/Naff-Dev/genzi-skill/commits)
[![Issues](https://img.shields.io/github/issues/Naff-Dev/genzi-skill?color=purple)](https://github.com/Naff-Dev/genzi-skill/issues)
![Works with](https://img.shields.io/badge/works%20with-Antigravity%20%7C%20Gemini%20%7C%20Claude%20Code%20%7C%20Cursor%20%7C%20Codex%20%7C%20Copilot-black)

[**Try Now**](#-try-in-30-seconds) · [**Hasil Nyata**](#-hasil-nyata-dari-skill-genzi-concrete-deliverables) · [**How It Works**](#-how-it-works) · [**6 Hard Blockers**](#-the-six-mandatory-hard-blockers) · [**Permanent Setup**](#-permanent-installation) · [**FAQ**](#-faq) · [**Contributing**](CONTRIBUTING.md)

</div>

---

## Why Genzi Exists

Ask an AI model to build a web application, and the result is almost always the same predictable formula:
Centered hero, three equal-width cards with glowing borders, purple-to-blue radial gradients, sparkle emojis (`✨`), generic buzzwords like *"Unleash your workflow"*, and default browser fonts. It looks neat at first glance, but it feels hollow, cookie-cutter, and unmistakably AI-generated.

The problem does not stop at visuals. Agents often guess blindly on architectural decisions, store tokens insecurely, skip error handling, ignore SEO and Core Web Vitals, and produce layouts that break immediately when viewed on mobile screens.

Genzi eliminates this generic AI fallback. Before writing code, the agent identifies the operational context, runs an **Internal Context Deduction** across 10 dimensions, asks structured clarifying questions only for technical blockers, crafts purpose-driven layouts, and audits its final delivery against the **15-Point AI-Slop Check** and **Six Mandatory Hard Blockers**. If any blocker fails, the task is not complete.

---

## ⚡ Try in 30 Seconds

No installation required. Paste this one line into your coding agent:

```text
use Naff-Dev/genzi-skill [write your task here]
```

5 ready-to-use prompt examples across core archetypes:

1. **[Local Grocery Delivery (Hyperlocal / Consumer)](skills/genzi/examples/01-food-delivery-landing.md)**:
```text
use Naff-Dev/genzi-skill build a landing page for a local grocery delivery service targeting tier-2 city families
```

2. **[POS Cashier App (Retail & Inventory)](skills/genzi/examples/02-pos-cashier-app.md)**:
```text
use Naff-Dev/genzi-skill build a fast POS cashier app with daily sales report, barcode scan, and inventory tracking
```

3. **[B2B Deal Pipeline (Dashboard & Analytics)](skills/genzi/examples/03-saas-crm-pipeline.md)**:
```text
use Naff-Dev/genzi-skill redesign this deal pipeline dashboard to be more visual, bold, responsive, with revenue summary per stage
```

4. **[Coffee Roastery Storefront (Artisanal E-Commerce)](skills/genzi/examples/04-coffee-roastery-store.md)**:
```text
use Naff-Dev/genzi-skill create a local coffee roastery storefront with single-origin beans catalog, flavor filters, and monthly subscriptions
```

5. **[Architecture Studio (Showcase & Editorial Portfolio)](skills/genzi/examples/05-architecture-portfolio.md)**:
```text
use Naff-Dev/genzi-skill build an architecture studio portfolio with asymmetrical project grid, full-bleed imagery, and editorial typography
```

> 💡 *Each example file in [`skills/genzi/examples/`](skills/genzi/examples/) includes a complete prompt suite: primary activation prompt, short informal prompt, detailed constraint prompt, step-by-step iteration prompts, and English/Indonesian variations.*

<details>
<summary><b>Does your agent require a full prompt? Use this universal version</b></summary>

<br>

Replace the `Task:` line and paste into any agent (Antigravity, Cursor, Claude Code, Windsurf, Copilot, ChatGPT, etc.):

```text
Use the skill from this repository: https://github.com/Naff-Dev/genzi-skill

Instructions for Agent:
1. Load and read the Genzi skill from https://github.com/Naff-Dev/genzi-skill
2. Read the file skills/genzi/SKILL.md completely before writing any code.
3. Follow the 18-step workflow in its entirety: technical clarification gate (ask only for technical blockers; infer design context autonomously), requirements classification, PRD generation, bespoke anti-AI craft floor (Internal Context Deduction, 9-level priority hierarchy, purpose layouts, contextual HSL, named fonts, themed browser surfaces), functional motion system, full-spectrum SEO and Web Vitals, security baseline, safe maintainable technical architecture, defensive implementation with realistic domain mock data, responsive verification on desktop and mobile, and self-review using references/review-checklist.md (15-Point AI-Slop Check & 6 Mandatory Hard Blockers).
4. Read reference guides in skills/genzi/references/ according to the active phase.

Task: [Write your project, app, or feature requirements here]
```

</details>

<details>
<summary><b>Specialized Modes: Design Only or Review Only</b></summary>

<br>

**Design and Visual Architecture Only:**

```text
use Naff-Dev/genzi-skill design-only: [describe product, domain, and goals]
```

**Audit Code & Interface Quality** (audited against `review-checklist.md`):

```text
use Naff-Dev/genzi-skill review: audit this project against skills/genzi/references/review-checklist.md
```

</details>

---

## 🎯 Hasil Nyata dari Skill Genzi (Concrete Deliverables)

Saat Anda memberikan instruksi kepada AI coding agent menggunakan Genzi, Anda tidak hanya mendapatkan satu blok kode acak. Anda menerima paket output produk profesional yang siap pakai dan aman:

### 1. 📊 Perbandingan Hasil: AI Generik vs Skill Genzi

| Aspek | AI Coding Biasa (Generic AI Slop) | Hasil Skill Genzi (Human-Crafted Standard) |
|---|---|---|
| **Tata Letak (Layout)** | Cloned hero tengah + 3 kartu bento generik | Layout spesifik ranah (Katalog retail, high-density POS split-view, Kanban board, editorial asymmetric) |
| **Identitas Visual** | Gradien ungu-biru klise, floating badge melayang, `rounded-2xl` di semua elemen | Palet warna harmonis bertema (misal: Deep Harvest Green, Warm Espresso, Slate Charcoal), radius proporsional |
| **Tipografi** | Font bawaan browser (`sans-serif` default) | Kombinasi tipografi profesional Google Fonts (Playfair Display + Inter, Satoshi, Plus Jakarta Sans) |
| **Bahasa & Konten (Copy)** | Buzzword kosong (*"Elevate your workflow ✨"*, teks placeholder) | Copywriting manusiawi, relevan, bernilai nyata (*"Sayur segar pasar tradisional diantar sebelum 06.30 WIB"*) |
| **Interaksi & Motion** | Animasi melayang memusingkan tanpa tujuan | Micro-press tactile `scale(0.97)` <150ms, feedback status interaktif, aman `prefers-reduced-motion` |
| **Keamanan & Validasi** | Tanpa validasi input, token disimpan di localStorage, rawan XSS | Skema Zod/Valibot, sanitasi input, token HttpOnly, zero secrets di client |
| **Responsivitas & SEO** | Pecah di layar HP, teks terpotong, CLS buruk | Responsif teruji di 360-430px hingga 1440px+, touch target ≥ 44px, OpenGraph + JSON-LD Schema.org lengkap |

---

### 2. 📦 4 Output Konkret yang Diterima Pengguna

Setiap kali Genzi mengeksekusi instruksi, agen menghasilkan deliverable lengkap:

1. **📄 PRD & Keputusan Teknis Terstruktur**
   - Kebutuhan diklasifikasikan dengan jelas (Explicit, Inferred, Assumption) tanpa membuang waktu menanyakan preferensi visual.
   - Definisi arsitektur, boundary keamanan, dan skema data TypeScript sebelum menulis kode.

2. **🎨 Bespoke Token Kit & Design System**
   - Token CSS berbasis HSL yang kohesif (warna brand, surface, border, typography scale, spacing rhythm).
   - Menghasilkan antarmuka berkarakter kuat tanpa template bootstrap yang membosankan.

3. **💻 Kode Produksi Bersih, Hardened, & Siap Pakai**
   - Penanganan 4 status asinkron (`idle`, `loading`, `success`, `error`).
   - Mock data realistis sesuai domain bisnis nyata (bukan sekadar "User 1", "Produk A").
   - Proteksi overflow teks (`min-width: 0`, `truncate`), navigasi keyboard, dan error boundaries.

4. **📋 Laporan Audit Mandiri Lulus 6 Hard Blockers**
   - Laporan verifikasi 15-Point AI-Slop Check.
   - Verifikasi 6 pemblokir utama sebelum pekerjaan dinyatakan selesai:
   ```text
   [x] 1. RESPONSIVE: mobile (360-430px) & desktop (1440px), 44px targets, zero overflow
   [x] 2. CRAFT & PERSONALITY: no AI clichés, curated fonts, realistic imagery
   [x] 3. MOTION: snappy tactile feedback, active state, reduced-motion fallback
   [x] 4. SEO & PERFORMANCE: single h1, OpenGraph, JSON-LD Schema, zero CLS
   [x] 5. SECURITY: schema validation, no XSS, secure auth handling
   [x] 6. CODE SAFETY: strict types, 4-state machine, error boundary, 0 TODO
   ```

---

### 3. 🖼️ Contoh Hasil Output Nyata dari Contoh Prompt

Berikut ringkasan hasil nyata yang dirancang oleh Genzi berdasarkan file contoh di [`skills/genzi/examples/`](skills/genzi/examples/):

<details open>
<summary><b>Hasil Contoh 1: SegarPagi — Grocery & Dawn Delivery Landing Page</b></summary>

<br>

- **Ranah**: Retail & Storefront
- **Visual Identity**: Deep Harvest Green (`hsl(155, 33%, 17%)`), Warm Canvas (`hsl(40, 20%, 97%)`), Carrot Accent (`hsl(17, 76%, 52%)`).
- **Karakter Tipografi**: Editorial Serif (*Playfair Display*) untuk headline + Geometric Sans (*Inter*) untuk katalog.
- **Komponen Kunci yang Terwujud**:
  - Announcement ribbon jadwal pengantaran subuh sebelum 06.30 WIB dengan kalkulator ongkir kecamatan.
  - Slim value bar (garansi timbang pas dengan stiker tera, harga pasar asli, bisa bayar COD di tempat).
  - Katalog kartu sayur & lauk segar dengan dual price ticker (pasar vs supermarket).
  - Sticky mobile drawer keranjang belanja + generator pesan pemesanan langsung terformat rapi ke WhatsApp.
</details>

<details>
<summary><b>Hasil Contoh 2: POS Kasir Retail & Kafe — High-Density Terminal</b></summary>

<br>

- **Ranah**: High-Density Utilitarian
- **Visual Identity**: Dark Charcoal Palette (`hsl(240, 6%, 10%)`) dengan kontras tinggi Amber Accent (`hsl(38, 92%, 50%)`) untuk kenyamanan shift malam kasir.
- **Karakter Tipografi**: Monospace & Sans Teknis (*JetBrains Mono* + *Plus Jakarta Sans*).
- **Komponen Kunci yang Terwujud**:
  - Split layout: Katalog produk cepat di kiri, struk kasir live di kanan.
  - Shortcut keyboard kasir (F2 cari item, F4 bayar tunai, ESC reset).
  - Modal pembayaran kilat dengan nominal uang pas (Rp 20rb, Rp 50rb, Rp 100rb) dan kalkulasi uang kembalian instan.
  - Cetak struk printer thermal 58mm/80mm & laporan penutupan shift kasir (Z-Report).
</details>

<details>
<summary><b>Hasil Contoh 3: B2B CRM Deal Pipeline — High-Clarity Kanban</b></summary>

<br>

- **Ranah**: Dashboard & Data-First Pipeline
- **Visual Identity**: Cool Slate Minimalist (`hsl(215, 25%, 27%)`) dengan status badge spesifik probabilitas deal.
- **Karakter Tipografi**: Modern Corporate Sans (*Plus Jakarta Sans*).
- **Komponen Kunci yang Terwujud**:
  - Kanban board dengan kalkulasi forecast pendapatan otomatis per kolom.
  - Indikator deal velocity dan peringatan deal yang hampir expired.
  - Drawer riwayat aktivitas prospek (panggilan telepon, catatan meeting, status WhatsApp).
</details>

---

## 🧠 How It Works

Genzi combines six professional roles in one cohesive workflow:

| Role | Core Responsibility |
|---|---|
| **Product Manager** | Translates informal requests into structured requirements. Asks high-leverage architectural questions. |
| **UX & Motion Designer** | Plans visitor surface modes, purpose-driven layouts, and functional micro-interactions. |
| **Art Director** | Establishes domain-rooted visual identities, enforces Anti-AI craft rules, and eliminates template slop. |
| **Security Architect** | Enforces OWASP hygiene, input schema validation (Zod/Valibot), and secure token handling. |
| **Senior Engineer** | Writes defensive, strictly-typed, modular, accessible, and easily maintainable code. |
| **Code Reviewer** | Audits output against the 15-Point AI-Slop Check and Six Mandatory Hard Blockers before declaring done. |

```text
Raw Request -> Intent + Technical Clarification Gate -> Requirements Classification ->
PRD (Security & Motion) -> Anti-AI Craft Floor -> Functional Motion -> Safe Architecture ->
Defensive Implementation -> Verification (Mobile, Desktop, State) -> Self-Review -> Done
```

### What Sets Genzi Apart

<table>
<tr>
<td width="50%" valign="top">

**🙋 Technical Clarification Gate**
Stops and asks structured questions for architectural or scope blockers (mock vs database, auth limits). When no visual direction is given, does NOT ask aesthetic questions and does NOT default to AI slop.

**📋 Requirements Classification**
Every requirement is categorized: Explicit, Inferred, Assumption, or Unknown.

**📝 Scaled PRDs**
From Micro PRDs (10-20 lines) to Full PRDs (24 sections) with security specs, motion plan, and code architecture.

**🔐 OWASP Security Baseline**
Strict input schema validation, XSS and injection defense, HttpOnly token storage, and zero client secret leakage.

</td>
<td width="50%" valign="top">

**🧱 Safe Code Architecture**
Strict TypeScript, discriminated unions for asynchronous state machines, clean layering, and error boundaries.

**💥 Chaos Hardening & Mobile Ergonomics**
Resilient to extreme inputs (100+ chars, CJK, RTL), text overflow defense (`min-width: 0`), and min 44x44px touch targets.

**🎨 Anti-AI Craft Floor & Purpose Layouts**
Product-first (stores), editorial-first (news), data-first (dashboards), or utility-first (admin) layouts. Absolute ban on UI emojis. No card-soup. Systematic small/medium corner radii.

**🎬 Functional Motion System**
Snappy tactile micro-press scale(0.97) <150ms, async state feedback, and mandatory `prefers-reduced-motion` fallbacks. Zero forced hero animations on utilitarian tools.

**🌐 Full-Spectrum SEO & Web Vitals**
Landmark HTML5 outline, single `<h1>`, complete OpenGraph/Twitter metadata, JSON-LD Schema.org, and zero CLS.

</td>
</tr>
</table>

**Absolute rule on content integrity**: Never invent facts, fake user counts, fabricated testimonials, or fake partner logos.

<details>
<summary><b>View the complete 18-step workflow</b></summary>

<br>

```text
 1. Interpret user request and detect product context (Surface Mode and Visual Language)
 2. Clarification Gate (ask user only for technical blockers; infer design context autonomously)
 3. Inspect workspace and read project signals
 4. Detect existing project structure and dependencies
 5. Detect existing technology stack and architecture
 6. Detect existing design systems, tokens, and assets
 7. Decide: extend existing project vs create new project
 8. Normalize requirements (Explicit / Inferred / Assumption / Unknown)
 9. Generate PRD & User Review Gate (STOP: Present PRD to user, require approval before coding)
10. Define Bespoke Design Direction & Craft Floor (Internal Context Deduction, purpose layout, HSL palette, fonts)
11. Define Functional Motion System (micro-press scale 0.97, state transitions, reduced-motion)
12. Define Technical Architecture, Security & Full-Spectrum SEO (Zod, HttpOnly, Schema.org, zero CLS)
13. Define Verifiable Acceptance Criteria (The Six Mandatory Hard Blockers)
14. Implement (modular, safe, defensive, hardened against chaos, realistic domain mock data)
15. Verify (mobile ~360-430px AND desktop ~1440px, 4 async states, touch targets min 44px)
16. Self-Review against references/review-checklist.md (15-Point AI-Slop Check & 6 Hard Blockers)
17. Fix ALL detected issues
18. Finalize (zero TODOs, zero fake content, zero unhandled errors, production-ready)
```

</details>

### Workflow Scaling

Changing a button color does not require a lengthy PRD. Genzi scales dynamically:

| Task Size | Example | PRD | Required Steps |
|---|---|---|---|
| **Trivial** | Button color adjustment, typo fix, padding tweak | None | Check workspace, implement directly, verify responsive |
| **Small** | Single input field, bug fix, single endpoint | Micro PRD (10-20 lines) | Steps 1-2, 3-7, 9, 14-16 |
| **Medium** | Multi-state feature, filter system, modal flow | Compact Full PRD | All steps, focused scope |
| **Large** | New product, multi-page app, major redesign | Full PRD (24 sections) | All 18 steps in full |

---

## 🚧 The Six Mandatory Hard Blockers

A task is strictly incomplete if ANY of these six hard blockers fails.

| # | Blocker | Verification Requirement |
|:-:|---|---|
| **1** | 📱 **Responsive & Mobile Ergonomics** | Verified on mobile (~360-430px) **and** desktop (~1440px+). Zero horizontal scroll (`overflow-x: clip`), touch targets ≥ 44x44px, safe area insets respected, primary controls in thumb zone. |
| **2** | 🎨 **Bespoke Anti-AI Craft & Personality** | Passes the 15-Point AI-Slop Check. Zero emoji in UI, zero generic AI templates/clichés, zero banned buzzwords, purpose-driven layout, contextual palette, real typography, themed browser surfaces. |
| **3** | 🎬 **Functional Motion System** | Purposeful motion: active tactile micro-press (scale 0.97 <150ms), state feedback, no forced hero animations on utilitarian apps, and `prefers-reduced-motion` fallback. |
| **4** | 🌐 **Full-Spectrum SEO & Web Vitals** | Semantic HTML5 outline, single `<h1>`, complete OpenGraph/Twitter cards, domain JSON-LD Schema.org, zero CLS (explicit media dimensions), interactive responses <150ms. |
| **5** | 🔐 **Security & Data Privacy** | All inputs validated with schemas (Zod/Valibot), XSS/injection prevented, tokens stored in HttpOnly cookies, zero secrets leaked to client JS. |
| **6** | 🛡 **Code Safety & Resilient Hardening** | Strict TypeScript, discriminated unions for state machines, Error Boundaries active, all 4 async states handled, text overflow protected (`min-width: 0`). |

<table>
<tr>
<td width="50%" valign="top">

### ✅ Required Standards

- Real imported fonts suited to domain formality (Google Fonts / local, never bare browser default)
- Saturated primary color chosen with authentic brand rationale
- Tailored inline SVGs or standard project icon library (Lucide/Heroicons)
- Grounded, concrete human copywriting focusing on actual product utility
- Hover animation and tactile press (scale 0.97) on interactive controls
- Real photography from CDN for visual sections (never solid placeholder boxes)
- Complete SEO metadata (Title, Meta desc, OpenGraph, JSON-LD Schema.org)
- Realistic domain mock data (real SKUs, item names, realistic dates and prices)

</td>
<td width="50%" valign="top">

### ❌ Absolute Bans

- Dark mode as a default without domain justification or explicit user request
- Purple-to-blue radial gradients as brand identity (the AI slop signature)
- Cloned centered hero: Headline + subtitle + 2 pill buttons + 3 cards
- Emojis used as icons, badges, indicators, or decorations in UI
- Card-soup: Wrapping all content in cards instead of tables, lists, or dividers
- Plastering `rounded-2xl` or `rounded-full` onto every element
- Banned AI marketing puffery ("Unleash", "Elevate", "Seamless", "Supercharge", "Next-gen")
- Lorem Ipsum or placeholder names ("Amazing Product A", "Feature 1")

</td>
</tr>
</table>

Read complete guidelines in:
- [`design-guidelines.md`](skills/genzi/references/design-guidelines.md) — 20 Anti-AI rules, AI-Slop check, surface-aware design system
- [`token-kits.md`](skills/genzi/references/token-kits.md) — Drop-in CSS token kits A to I (Utilitarian, Dashboard, Artisanal, Retail, etc.)
- [`reference-driven-design.md`](skills/genzi/references/reference-driven-design.md) — Reference intake, Design DNA template, and visual verification scoring
- [`prd-template.md`](skills/genzi/references/prd-template.md) — Micro and Full PRD templates with security and motion plans
- [`security-and-hardening.md`](skills/genzi/references/security-and-hardening.md) — OWASP baseline, input validation, token safety, chaos testing
- [`seo-and-performance.md`](skills/genzi/references/seo-and-performance.md) — Semantic outline, JSON-LD Schema.org, Core Web Vitals
- [`review-checklist.md`](skills/genzi/references/review-checklist.md) — 15-Point AI-Slop self-audit and the Six Mandatory Hard Blockers
- [`workspace-detection.md`](skills/genzi/references/workspace-detection.md) — Workspace signals and extend-vs-new decision matrix

---

## 📦 Permanent Installation

Optional. Useful when you want Genzi available globally or locally without typing repository URLs.

<details>
<summary><b>Antigravity / Gemini IDE</b></summary>

<br>

**Option A — Global Skill** (Recommended, available across all projects):

```bash
# Windows PowerShell
git clone https://github.com/Naff-Dev/genzi-skill.git "$HOME\.gemini\config\skills\genzi"

# macOS / Linux
git clone https://github.com/Naff-Dev/genzi-skill.git ~/.gemini/config/skills/genzi
```

**Option B — Global Plugin**:

```bash
# Windows PowerShell
git clone https://github.com/Naff-Dev/genzi-skill.git "$HOME\.gemini\config\plugins\genzi"

# macOS / Linux
git clone https://github.com/Naff-Dev/genzi-skill.git ~/.gemini/config/plugins/genzi
```

**Option C — Workspace Skill** (within a single repository):

```bash
git clone https://github.com/Naff-Dev/genzi-skill.git .agents/skills/genzi
```

</details>

<details>
<summary><b>Claude Code / Claude Desktop</b></summary>

<br>

```bash
claude plugin add Naff-Dev/genzi-skill
```

Or clone directly into your project's `.claude/skills/genzi` folder.

</details>

<details>
<summary><b>Cursor / Windsurf / Codex</b></summary>

<br>

```bash
git clone https://github.com/Naff-Dev/genzi-skill.git .cursor/skills/genzi
```

Or reference `skills/genzi/SKILL.md` directly in your project prompt or `.cursorrules`.

</details>

---

## 🗂 Repository Structure

```text
genzi-skill/
├── .github/
│   └── workflows/
│       └── validate-skill.yml             <- CI workflow to validate skill integrity
├── assets/
│   └── logo.png                           <- Genzi banner and brand asset
├── scripts/
│   └── validate.js                        <- Local manifest, references, and examples validator
├── skills/
│   └── genzi/
│       ├── SKILL.md                       <- Core instructions & 18-step master workflow
│       ├── examples/                      <- 5 practical prompt collections across archetypes
│       │   ├── 01-food-delivery-landing.md   <- Grocery & food delivery landing page prompts
│       │   ├── 02-pos-cashier-app.md         <- High-density POS cashier app prompts
│       │   ├── 03-saas-crm-pipeline.md       <- B2B deal pipeline & CRM prompts
│       │   ├── 04-coffee-roastery-store.md   <- Artisanal coffee roastery storefront prompts
│       │   └── 05-architecture-portfolio.md  <- Minimalist architecture studio portfolio prompts
│       └── references/
│           ├── design-guidelines.md       <- Surface-aware design, recipes, and anti-slop rules
│           ├── prd-template.md            <- Micro and Full PRD templates
│           ├── reference-driven-design.md <- Reference Intake, Design DNA, visual verification
│           ├── review-checklist.md        <- 15-Point AI-Slop check & 6 Hard Blockers audit
│           ├── security-and-hardening.md  <- OWASP baseline, chaos hardening, safe types
│           ├── seo-and-performance.md     <- Full-spectrum SEO, JSON-LD, Core Web Vitals
│           ├── token-kits.md              <- Drop-in CSS token kits A to I
│           └── workspace-detection.md     <- Stack detection and architecture decision matrix
├── CONTRIBUTING.md                        <- Contribution guide (100% open contribution)
├── LICENSE                                <- MIT License
├── package.json                           <- NPM metadata and validation scripts
├── plugin.json                            <- Universal plugin manifest
└── README.md                              <- Project documentation and usage guide
```


---

## ❓ FAQ

<details>
<summary><b>Does Genzi overwrite an existing project stack?</b></summary>

<br>

No. Genzi inspects the workspace first and strictly honors the existing framework, package manager, and folder structure. A fresh stack is initialized only when starting a greenfield project.

</details>

<details>
<summary><b>Why does the agent ask questions before writing code?</b></summary>

<br>

That is the Clarification Gate. If critical architectural or data boundaries are unspecified (such as mock data vs a live database, or auth scope), guessing leads to rework. Genzi asks concise, structured questions once and proceeds. When no visual design is provided, Genzi does not ask styling questions; it uses Internal Context Deduction to make sound visual decisions autonomously.

</details>

<details>
<summary><b>Can Genzi use dark mode?</b></summary>

<br>

Yes. Genzi only bans dark mode as a lazy default fallback. When a product genuinely benefits from dark themes (code editors, video suites, radar consoles) or the user requests it, Genzi implements it cleanly.

</details>

<details>
<summary><b>Can I use animations like GSAP or Framer Motion?</b></summary>

<br>

Yes. CSS transitions are ideal for micro-press and hover states, while Framer Motion or GSAP can be used for sophisticated layout choreography. The `prefers-reduced-motion` fallback remains mandatory.

</details>

---

## 🤝 Contributing

Genzi is **100% Open Contribution!** We actively welcome contributions from developers, designers, prompt engineers, and product builders worldwide to help eradicate generic AI slop.

Want to contribute a new industry prompt collection, report an AI cliché pattern, craft a new Token Kit, or improve security guidelines?

👉 **Read our full guide in [CONTRIBUTING.md](CONTRIBUTING.md)** to get started in minutes!

Quick check before submitting any PR:

```bash
npm run validate
```

If Genzi helped you build better software, please consider giving it a ⭐ on GitHub!

---

<div align="center">

Licensed under [MIT](LICENSE) · © 2026 **naffdev**

</div>