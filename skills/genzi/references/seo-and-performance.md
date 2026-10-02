# SEO & Web Performance Standard

Read this when entering Step 9 (PRD Generation), Step 10 (Design & Scaffolding), Step 12 (Architecture), and Step 15 (Verification).

---

## 0. SEO Philosophy: Why "AI SEO" Fails

Generic AI outputs usually emit an empty `<title>Home</title>` and a placeholder meta description like `"Welcome to our website"`. That is lazy, invisible to search engines, and fails to engage visitors on social platforms.

**The Genzi Standard is Full-Spectrum SEO:**
Every public web application or site built with Genzi must be immediately crawlable, indexable, shareable with rich social cards, semantically structured for accessibility and search engines, and marked up with domain-accurate JSON-LD Schema.org structured data.

```text
Full-Spectrum SEO Hierarchy:
[1] Semantic HTML5 Skeleton (h1-h6 hierarchy, landmarks, accessible alt text, canonical)
[2] Social & Platform Graph (Open Graph, Twitter Cards, theme-color, multi-resolution icons)
[3] Domain JSON-LD Structured Data (Schema.org Organization, SoftwareApplication, Product, etc.)
[4] Core Web Vitals Protection (Zero CLS with explicit dimensions, LCP priority, INP snappy responses)
[5] Indexing & Crawl Controls (robots meta, sitemap.xml, robots.txt, clean URLs)
```

---

## 1. Semantic HTML5 Architecture

Search engine crawlers rely on semantic markup to understand content hierarchy and authority.

### 1.1 Landmark Structure (Mandatory)
Every page must use standard HTML5 landmarks instead of arbitrary `div` soup:

```html
<header role="banner">
  <nav aria-label="Main Navigation">...</nav>
</header>

<main id="main-content">
  <article> or <section aria-labelledby="section-heading-id">
    ...
  </section>
</main>

<aside aria-label="Supplementary Information">...</aside>

<footer role="contentinfo">...</footer>
```

### 1.2 Strict Heading Hierarchy Rules
1. **Exactly one `<h1>` per page**: The `<h1>` must contain the primary keyword and convey the core value proposition.
2. **Never skip levels**: `<h1>` -> `<h2>` -> `<h3>`. Never jump from `<h2>` directly to `<h4>`.
3. **No visual-only headings**: Use CSS classes for sizing (`text-sm font-semibold`), never use an `<h3>` just because you want small text.
4. **Text wrapping & balance**: Apply `text-wrap: balance` on headings to avoid single-word orphan lines.

### 1.3 Media Semantics & Accessibility
- Every `<img>` must have an informative, descriptive `alt` attribute describing the content and context (e.g., `alt="Modern ergonomic chair in walnut finish with white linen upholstery"`).
- Never use generic alt text like `alt="image"`, `alt="photo"`, `alt="hero"`, or empty strings on meaningful images.
- Purely decorative images must use `alt=""` and `aria-hidden="true"`.

---

## 2. Meta Tags & Social Sharing Graph

### 2.1 Essential Meta Tags
Every page must have this baseline in `<head>`:

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
<title>Bespoke Brand Name - Action-Driven Unique Value Proposition</title>
<meta name="description" content="Compelling 140-160 character description with high-intent keywords, zero buzzwords, and a clear call to action." />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<link rel="canonical" href="https://example.com/current-canonical-path" />
<meta name="theme-color" content="#1a1a2e" />
```

### 2.2 Open Graph Protocol (Facebook, LinkedIn, Discord, WhatsApp)
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com/current-path" />
<meta property="og:title" content="Bespoke Brand Name - Action-Driven Value Proposition" />
<meta property="og:description" content="Compelling 140-160 character summary that triggers curiosity and clicks." />
<meta property="og:image" content="https://example.com/og-image-1200x630.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Preview of Brand Name interface showcasing key product workflows" />
<meta property="og:site_name" content="Brand Name" />
<meta property="og:locale" content="en_US" />
```

### 2.3 Twitter / X Cards
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@BrandHandle" />
<meta name="twitter:creator" content="@FounderOrBrandHandle" />
<meta name="twitter:title" content="Bespoke Brand Name - Action-Driven Value Proposition" />
<meta name="twitter:description" content="Compelling 140-160 character summary." />
<meta name="twitter:image" content="https://example.com/og-image-1200x630.png" />
```

### 2.4 Next.js App Router Metadata Implementation Example
When building in Next.js App Router, implement metadata through the native `Metadata` API:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'HyperLog - Real-time Edge Observability for High-Volume Systems',
    template: '%s | HyperLog'
  },
  description: 'Ingest 50M events per second with sub-millisecond query latency. Native ClickHouse streaming engine with zero cold starts.',
  metadataBase: new URL('https://hyperlog.io'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'HyperLog - Real-time Edge Observability',
    description: 'Sub-millisecond query latency for high-throughput distributed systems.',
    url: 'https://hyperlog.io',
    siteName: 'HyperLog',
    images: [
      {
        url: '/og-card.png',
        width: 1200,
        height: 630,
        alt: 'HyperLog edge analytics dashboard displaying live latency metrics'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HyperLog - Real-time Edge Observability',
    description: 'Sub-millisecond query latency for distributed systems.',
    images: ['/og-card.png'],
    creator: '@hyperlog'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};
```

---

## 3. Domain-Specific JSON-LD Schema.org Structured Data

Embed JSON-LD in the `<head>` or before `</body>` to unlock rich search snippets, product cards, FAQ dropdowns, and business knowledge panels.

### 3.1 SaaS / Software Application Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "HyperLog",
  "operatingSystem": "All",
  "applicationCategory": "DeveloperApplication",
  "description": "High-throughput edge observability and stream processing engine.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "category": "Free Tier Available"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "128"
  }
}
</script>
```

### 3.2 E-Commerce / Physical Product Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Artisanal Ceramic Pour-Over Dripper",
  "image": [
    "https://example.com/photos/dripper-1x1.jpg",
    "https://example.com/photos/dripper-4x3.jpg"
  ],
  "description": "Handcrafted matte stoneware dripper with spiral interior ribs for controlled extraction flow.",
  "sku": "CER-DRIP-01",
  "brand": {
    "@type": "Brand",
    "name": "Kobo Clay Studio"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/products/ceramic-pour-over",
    "priceCurrency": "USD",
    "price": "48.00",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Kobo Clay Studio"
    }
  }
}
</script>
```

### 3.3 FAQ Page Schema (For high-visibility search accordion snippets)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does edge stream ingestion prevent data loss during network partitions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HyperLog uses an encrypted local write-ahead log (WAL) on edge nodes that buffers records for up to 72 hours before safely draining to the primary cluster."
      }
    },
    {
      "@type": "Question",
      "name": "Can I deploy HyperLog on my own air-gapped infrastructure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our enterprise tier provides self-contained Docker and Helm charts that run entirely within isolated Kubernetes environments with zero external phone-home dependencies."
      }
    }
  ]
}
</script>
```

### 3.4 Local Business Schema (Coffee shops, clinics, agencies, retail)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Soreang Specialty Roasters",
  "image": "https://example.com/storefront.jpg",
  "telephone": "+62-22-589-1234",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Raya Soreang No. 42",
    "addressLocality": "Bandung",
    "postalCode": "40911",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.0264,
    "longitude": 107.5186
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:30",
      "closes": "21:00"
    }
  ],
  "priceRange": "$$"
}
</script>
```

---

## 4. Core Web Vitals & Performance Engineering

Google ranks pages based on real user Core Web Vitals metrics. Build them into the code structure from day one.

### 4.1 Largest Contentful Paint (LCP) < 2.5s
1. **Preload the Hero Media**: If the hero features a prominent image or font, preload it in `<head>`:
   ```html
   <link rel="preload" as="image" href="/hero-poster.webp" fetchpriority="high" />
   ```
2. **Never lazy-load the hero image**: Do NOT put `loading="lazy"` on above-the-fold media. Use `priority` or `fetchpriority="high"`.
3. **Use modern image formats**: Serve AVIF or WebP with responsive `srcset` or Next.js `<Image />` with appropriate `sizes`.

### 4.2 Cumulative Layout Shift (CLS) < 0.1
1. **Explicit Dimensions**: ALWAYS set explicit `width` and `height` (or CSS `aspect-ratio`) on all images, videos, and canvas elements:
   ```html
   <img src="/product.webp" width="800" height="600" style="aspect-ratio: 4/3; width: 100%; height: auto;" alt="..." />
   ```
2. **Reserve Space for Dynamic Elements**: Banners, ads, and interactive modals must have min-height or placeholder skeletons so content does not violently shift down when data loads.
3. **Font Swapping without Flash of Layout Shift**: Use `font-display: swap` paired with matching fallback metric overrides (`size-adjust`, `ascent-override`) or `@next/font`.

### 4.3 Interaction to Next Paint (INP) < 200ms
1. **Never block the main thread** on user interactions (button clicks, filter toggles).
2. **Break long tasks**: Use `requestAnimationFrame` or `setTimeout(..., 0)` or web workers for heavy data filtering.
3. **Optimistic UI Updates**: Immediately update button states, cart counts, and toggle switches within 50ms before background async promises finish.

---

## 5. Technical Crawlability & Indexing Assets

### 5.1 robots.txt standard
Create a clean `/robots.txt` file at the root:

```text
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

Sitemap: https://example.com/sitemap.xml
```

### 5.2 sitemap.xml pattern
Create a dynamic or static `/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/pricing</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 6. SEO & Web Vitals Verification Checklist (Hard Gate)

Before finalizing any public page, verify:

```text
[ ] Title tag is unique, action-driven, brand-specific (50-60 characters).
[ ] Meta description is informative and compelling (140-160 characters).
[ ] Canonical URL is explicitly specified.
[ ] OpenGraph tags (title, description, image, url, site_name) are present and valid.
[ ] Twitter card tags (summary_large_image, title, description, image) are present.
[ ] Exactly one <h1> exists and captures the primary topic and keyword.
[ ] Heading levels (h1 -> h2 -> h3) never skip steps.
[ ] All images have descriptive, non-empty, non-generic alt text.
[ ] All images and containers have explicit dimensions or aspect ratios (Zero CLS).
[ ] Domain-specific JSON-LD Schema.org structured data is embedded and valid.
[ ] Above-the-fold hero image is prioritized (fetchpriority="high" or Next.js priority); below-the-fold media lazy-loaded.
[ ] Fast interactive response (<150ms) on all interactive buttons and filters.
```
