# Token Kits (Drop-in CSS)

Read this at Step 8. Kits A to F are flat, functional palettes for Operate, Read and simple brand sites. Kits G to I are for photographic Experience / Persuade pages and match the common reference families. When the user supplied references, replace kit values with the sampled values from the Design DNA sheet.

Every kit declares: surfaces, text, one accent, fonts, a radius scale, one elevation, and themed browser surfaces. Use exactly one kit's radius scale per site.

Contents: A Utilitarian, B Dense Dashboard, C Warm Artisanal, D Institutional, E Commercial Retail, F Editorial, G Scenic Light (atmospheric), H Dark Cinematic, I Commercial Travel.

---

### Kit A: Utilitarian / Industrial (Warehouse, Auto Shop, Logistics, POS)
```css
/* Google Fonts: Inter (400, 500, 600) + JetBrains Mono (500) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');

:root {
  /* Surfaces & Neutral Scale (Rugged, high-contrast, dust-resistant light) */
  --bg: hsl(210, 15%, 96%);
  --surface: hsl(0, 0%, 100%);
  --surface-raised: hsl(210, 15%, 93%);
  --surface-active: hsl(210, 15%, 88%);
  --border: hsl(215, 14%, 82%);
  --border-strong: hsl(215, 16%, 65%);

  /* Text & Contrast */
  --text: hsl(215, 28%, 12%);
  --text-muted: hsl(215, 14%, 42%);
  --text-inverse: hsl(0, 0%, 100%);

  /* Functional Industrial Accents */
  --primary: hsl(28, 90%, 46%); /* Industrial Amber/Safety Orange */
  --primary-hover: hsl(28, 92%, 40%);
  --primary-contrast: hsl(0, 0%, 100%);
  --accent: hsl(215, 30%, 25%); /* Heavy Slate */
  
  /* Status Colors */
  --status-success: hsl(152, 68%, 34%);
  --status-warning: hsl(38, 92%, 46%);
  --status-error: hsl(354, 75%, 46%);

  /* Typography Stacks */
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;

  /* Disciplined Corner Radii (Compact & Functional) */
  --radius-sm: 3px;
  --radius-md: 5px;
  --radius-lg: 8px;

  /* Shadows Reserved Strictly for Elevation */
  --shadow-elevation: 0 4px 12px hsla(215, 28%, 12%, 0.12);
}

::selection { background-color: hsla(28, 90%, 46%, 0.25); color: var(--text); }
input, textarea { caret-color: var(--primary); }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
table, [data-numeric] { font-variant-numeric: tabular-nums; }
```

### Kit B: Dense Dashboard (Accounting, CRM, Analytics, Trading)
```css
/* Google Fonts: Plus Jakarta Sans (400, 500, 600, 700) */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

:root {
  /* Crisp, analytical backdrop with maximum table scanability */
  --bg: hsl(210, 20%, 98%);
  --surface: hsl(0, 0%, 100%);
  --surface-raised: hsl(210, 20%, 95%);
  --surface-subtle: hsl(210, 25%, 97%);
  --border: hsl(214, 20%, 88%);
  --border-subtle: hsl(214, 20%, 93%);

  /* Precision Text */
  --text: hsl(222, 47%, 11%);
  --text-muted: hsl(215, 16%, 47%);
  --text-subtle: hsl(215, 14%, 60%);

  /* Focused Analytical Accent */
  --primary: hsl(221, 83%, 53%); /* Focused Cobalt */
  --primary-hover: hsl(221, 83%, 45%);
  --primary-light: hsl(221, 83%, 96%);

  /* Semantic Financial Accents */
  --status-surplus: hsl(158, 64%, 40%);
  --status-deficit: hsl(0, 72%, 51%);
  --status-neutral: hsl(215, 16%, 47%);

  /* Typography & Measure */
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;

  /* Systematic Sharp Radii */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 10px;

  /* Minimal Elevation for Popovers Only */
  --shadow-elevation: 0 4px 16px hsla(222, 47%, 11%, 0.08), 0 1px 3px hsla(222, 47%, 11%, 0.05);
}

::selection { background-color: hsla(221, 83%, 53%, 0.2); color: var(--text); }
input, textarea { caret-color: var(--primary); }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 1px; }
table { font-variant-numeric: tabular-nums; border-collapse: collapse; }
```

### Kit C: Warm Artisanal (Specialty Coffee, Bakery, Florist, Craft)
```css
/* Google Fonts: Fraunces (600, 700) + DM Sans (400, 500) */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap');

:root {
  /* Warm tactile parchment and stone foundations */
  --bg: hsl(40, 25%, 97%); /* Warm ivory cream #FDFCF7 */
  --surface: hsl(40, 30%, 99%);
  --surface-raised: hsl(36, 20%, 92%);
  --surface-accent: hsl(28, 40%, 90%);
  --border: hsl(35, 16%, 84%);
  --border-strong: hsl(30, 18%, 68%);

  /* Organic Ink Tones */
  --text: hsl(24, 25%, 15%); /* Deep roasted espresso */
  --text-muted: hsl(24, 12%, 44%);
  --text-inverse: hsl(40, 25%, 97%);

  /* Sensory Artisanal Chemistry */
  --primary: hsl(18, 64%, 44%); /* Terracotta Clay */
  --primary-hover: hsl(18, 68%, 38%);
  --accent: hsl(135, 18%, 38%); /* Dried Olive Green */

  /* Typography Stacks */
  --font-heading: 'Fraunces', Georgia, serif;
  --font-body: 'DM Sans', -apple-system, sans-serif;

  /* Natural, Softer Radii */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  /* Subtle Warm Shadow */
  --shadow-elevation: 0 8px 24px hsla(24, 25%, 15%, 0.08);
}

::selection { background-color: hsla(18, 64%, 44%, 0.22); color: var(--text); }
input, textarea { caret-color: var(--primary); }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
```

### Kit D: Institutional / Official (Healthcare, Hospital, University, Law)
```css
/* Google Fonts: Source Serif 4 (600) + Public Sans (400, 500, 600) */
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap');

:root {
  /* High-trust, hygienic, clear foundation */
  --bg: hsl(210, 24%, 98%);
  --surface: hsl(0, 0%, 100%);
  --surface-raised: hsl(210, 20%, 94%);
  --border: hsl(215, 20%, 85%);
  --border-strong: hsl(215, 25%, 65%);

  /* Authoritative Typography Tones */
  --text: hsl(218, 45%, 12%); /* Deep institutional navy */
  --text-muted: hsl(215, 16%, 42%);

  /* Trust Anchors */
  --primary: hsl(214, 82%, 35%); /* Dignified Royal Navy */
  --primary-hover: hsl(214, 82%, 28%);
  --accent: hsl(164, 76%, 32%); /* Clinical Spruce Green */

  /* Typography Stacks */
  --font-heading: 'Source Serif 4', Georgia, serif;
  --font-body: 'Public Sans', -apple-system, sans-serif;

  /* Formal Radii */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;

  --shadow-elevation: 0 4px 14px hsla(218, 45%, 12%, 0.08);
}

::selection { background-color: hsla(214, 82%, 35%, 0.2); color: var(--text); }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
```

### Kit E: Commercial Retail (Supermarket, Electronics, SME Storefront)
```css
/* Google Fonts: Outfit (500, 600, 700) + Inter (400, 500) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700;800&display=swap');

:root {
  /* Bright, energetic, purchase-oriented backdrop */
  --bg: hsl(0, 0%, 100%);
  --surface: hsl(0, 0%, 100%);
  --surface-raised: hsl(210, 16%, 96%);
  --surface-accent: hsl(12, 100%, 97%);
  --border: hsl(210, 14%, 88%);

  /* Immediate Action Contrast */
  --text: hsl(220, 25%, 10%);
  --text-muted: hsl(220, 12%, 46%);
  --text-price: hsl(10, 88%, 46%);

  /* High-Conversion Brand Colors */
  --primary: hsl(12, 90%, 52%); /* Warm energetic vermilion */
  --primary-hover: hsl(12, 94%, 45%);
  --accent: hsl(215, 90%, 48%); /* Trust Blue */

  /* Typography Stacks */
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 9999px;

  --shadow-card: 0 2px 8px hsla(220, 25%, 10%, 0.06);
  --shadow-elevation: 0 8px 24px hsla(220, 25%, 10%, 0.14);
}

::selection { background-color: hsla(12, 90%, 52%, 0.2); color: var(--text); }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
```

### Kit F: Editorial / Cultural (Architecture, Magazine, Design Studio)
```css
/* Google Fonts: DM Serif Display + General Sans / Inter */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600&display=swap');

:root {
  /* Minimalist gallery canvas */
  --bg: hsl(30, 10%, 97%); /* #FAF9F6 Warm Gallery White */
  --surface: hsl(0, 0%, 100%);
  --surface-raised: hsl(30, 8%, 93%);
  --border: hsl(0, 0%, 82%);
  --border-hairline: hsl(0, 0%, 88%);

  /* Charcoal Editorial Ink */
  --text: hsl(0, 0%, 9%); /* #171717 Ink Charcoal */
  --text-muted: hsl(0, 0%, 42%);

  /* Monochromatic with Single Signature Touch */
  --primary: hsl(0, 0%, 10%);
  --primary-hover: hsl(0, 0%, 25%);
  --accent: hsl(345, 60%, 48%); /* Single muted crimson accent */

  /* Typography Stacks */
  --font-heading: 'DM Serif Display', Georgia, serif;
  --font-body: 'Inter', sans-serif;

  /* Architectural Sharpness (Minimal to Zero Radius) */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;

  /* Flat Surface Priority: Hairlines over Heavy Shadows */
  --shadow-elevation: 0 10px 30px hsla(0, 0%, 0%, 0.07);
}

::selection { background-color: hsla(0, 0%, 10%, 0.85); color: #FAF9F6; }
:focus-visible { outline: 1px solid var(--text); outline-offset: 3px; }
```

### Kit G: Scenic Light / Atmospheric (travel, hospitality, lifestyle brand, calm product launch)
```css
/* Google Fonts: Plus Jakarta Sans (500, 600, 700) */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

:root {
  /* Sky and paper */
  --bg: hsl(30, 40%, 98%);
  --surface: hsl(0, 0%, 100%);
  --surface-glass: hsla(0, 0%, 100%, 0.82);
  --sky-top: hsl(215, 70%, 78%);
  --sky-bottom: hsl(25, 70%, 90%);
  --border-subtle: hsla(230, 25%, 12%, 0.10);

  --text: hsl(230, 25%, 12%);
  --text-muted: hsl(230, 12%, 38%);
  --text-on-photo: hsl(0, 0%, 100%);

  /* One accent, used sparingly, mostly inside imagery */
  --primary: hsl(230, 25%, 12%);          /* dark pill CTA */
  --accent: hsl(18, 85%, 55%);            /* warm flower orange, tiny touches only */

  --font-heading: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;

  /* Soft family */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --radius-pill: 9999px;

  --shadow-elevation: 0 8px 32px hsla(230, 30%, 12%, 0.12);
  --blur-glass: 16px;
}
::selection { background: hsla(18, 85%, 55%, 0.25); color: var(--text); }
input, textarea { caret-color: var(--accent); }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 3px; }
h1, h2 { text-wrap: balance; letter-spacing: -0.03em; }
```

### Kit H: Dark Cinematic (youthful destination, campaign, photography)
```css
/* Google Fonts: Montserrat (700, 800) + Open Sans (300, 400, 600) */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@300;400;600&display=swap');

:root {
  --bg: hsl(0, 0%, 3%);
  --surface: hsl(0, 0%, 7%);
  --surface-raised: hsl(0, 0%, 11%);
  --border: hsla(0, 0%, 100%, 0.18);
  --border-strong: hsla(0, 0%, 100%, 0.6);

  --text: hsl(0, 0%, 98%);
  --text-muted: hsl(0, 0%, 72%);       /* keeps 7:1 on near-black */

  --primary: hsl(0, 0%, 100%);
  --accent: hsl(8, 82%, 54%);          /* single hot red-orange, lines, pins, active index */

  --font-heading: 'Montserrat', system-ui, sans-serif;  /* uppercase, 800 */
  --font-body: 'Open Sans', system-ui, sans-serif;

  /* Sharp family */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;

  --scrim-bottom: linear-gradient(to top, hsla(0, 0%, 0%, 0.85) 0%, hsla(0, 0%, 0%, 0.3) 45%, transparent 75%);
  --shadow-elevation: none;            /* depth comes from photos and hairlines */
}
body { background: var(--bg); color: var(--text); font-size: 1rem; }
h1, h2 { font-family: var(--font-heading); font-weight: 800; text-transform: uppercase; letter-spacing: -0.01em; line-height: 0.98; text-wrap: balance; }
::selection { background: var(--accent); color: #fff; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
```

### Kit I: Commercial Travel (packages, booking, inquiry-driven)
```css
/* Google Fonts: Plus Jakarta Sans (400, 500, 600, 700, 800) */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

:root {
  --bg: hsl(210, 30%, 97%);
  --surface: hsl(0, 0%, 100%);
  --surface-dark: hsl(160, 45%, 11%);       /* feature strip, testimonials, footer */
  --border: hsl(210, 20%, 90%);
  --border-on-dark: hsla(0, 0%, 100%, 0.14);

  --text: hsl(165, 30%, 10%);
  --text-muted: hsl(165, 10%, 40%);
  --text-on-dark: hsl(0, 0%, 100%);

  --primary: hsl(150, 55%, 38%);           /* travel green, check 4.5:1 for white text */
  --primary-hover: hsl(150, 58%, 32%);
  --primary-soft: hsl(150, 45%, 94%);

  --font-heading: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;

  /* Medium family */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-pill: 9999px;

  --shadow-elevation: 0 12px 32px hsla(165, 40%, 8%, 0.14);   /* widget and floating tiles only */
  --overlay-hero: linear-gradient(90deg, hsla(160, 50%, 8%, 0.78) 0%, hsla(160, 50%, 8%, 0.35) 55%, transparent 100%);
}
::selection { background: hsla(150, 55%, 38%, 0.25); color: var(--text); }
input, select { caret-color: var(--primary); }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
.price, .stat { font-variant-numeric: tabular-nums; }
```

Contrast reminder for Kit I: white text on `--primary` at 400-500 weight must be verified; if below 4.5:1 use weight 600+ at 18px+ or darken to `hsl(150, 58%, 32%)`.
