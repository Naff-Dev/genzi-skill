# Reference-Driven Design

Read this at Step 2 (Reference Intake) and Step 11 (Visual Verification) whenever the user supplies screenshots, inspiration links, or says "like this".

Contents: 1. Principle, 2. Intake procedure, 3. Design DNA template, 4. Multiple references, 5. Pre-filled DNA for the six current references, 6. Visual verification, 7. When the result still looks generic.

---

## 1. Principle

A reference is a brief written in pixels. The model's job is to recover the decisions behind it (what is big, what is quiet, where the image sits, how type behaves) and reproduce the **decisions**, not the brand.

- Match: section skeleton, hierarchy, scale contrast, type behavior, color relationships, shape language, imagery treatment, spacing rhythm, component behavior.
- Do not copy: brand names, logos, headline wording, body copy, photographs, illustrations, phone numbers, addresses, people's names. Write original copy for the user's real product.
- Where a reference has a known weakness (low contrast text on busy photos, tiny text), keep the look and fix the weakness.

## 2. Intake procedure

1. Look at every image at full resolution. Do not summarize six images into one sentence.
2. For each image, fill the Design DNA template (section 3). Keep each sheet under 25 lines.
3. Group the images into families (atmospheric light, commercial booking, editorial scenic, dark cinematic, and so on).
4. Choose a **lead reference** per page region (header, hero, listing, story, footer). Do not blend two heroes.
5. Write the **Reference Mapping** into the PRD:

```text
Reference Mapping
  Header    : lead = Ref 1 (floating white capsule nav), CTA pill from Ref 2
  Hero      : lead = Ref 4 (full-bleed photo, sans + italic serif headline), glass widget idea from Ref 3
  Listing   : lead = Ref 4 (fan carousel of portrait cards)
  Story     : lead = Ref 3 (split with photo collage + checklist)
  Footer    : own design, dark
  Deviations: [what we intentionally changed and why]
```

6. Decide light or dark from the lead reference, not from a default.
7. List the **asset plan**: for each photo slot, subject, aspect ratio, where the text sits (negative space), source (user-provided, generated, or searched), and treatment (scrim strength, blur, grade).

## 3. Design DNA template

```text
DNA: [Ref number / short name]
Family        : atmospheric-light | commercial-booking | editorial-scenic | dark-cinematic | other
Skeleton      : top-to-bottom sections with rough viewport proportions
Header        : type (floating capsule / hairline transparent / full bar), links, CTA style, glass or solid
Hero          : media type, where subject sits, where text sits, overlay, alignment, CTA count and style
Headline      : approx size vs viewport width, case, weight, font mood, line count, mixed styles (e.g. italic serif)
Body type     : size, color, measure, font mood
Color         : bg / text / accent / overlay (sampled hex or hsl by eye), accent count
Shape         : radius scale, borders, shadow, glass blur
Imagery       : photo vs render vs illustration, depth of field, color grade, aspect ratios
Components    : list (booking widget, fan carousel, index rail, stat row, polaroid collage, ...)
Rhythm        : section padding, density, alignment pattern
Motion hints  : what visibly implies motion (carousel, play buttons, scroll cue)
Weaknesses    : contrast, legibility, clutter to fix
Do not copy   : brand name, texts, photos, logos present in this image
```

## 4. Multiple references

- Prefer one family for the whole site. Mixing a light atmospheric hero with a dark cinematic body feels broken unless the reference does exactly that.
- If the user sent a full-page layout and a few hero shots, the full-page layout controls structure and the hero shots control atmosphere and header style.
- If two references conflict (light vs dark), pick the one that matches the primary audience context, state the choice in the PRD, and offer the other as a theme variant only if the user asks.
- Keep one display font family and one body family for the entire site, even when several references use different fonts.

## 5. Pre-filled DNA for the six current references

These were extracted from the images the user supplied. Reuse them directly when the same references appear; otherwise use them as worked examples.

### Ref 1: "Haven" (atmospheric light, 3D meadow)

```text
Family   : atmospheric-light
Skeleton : one full-viewport hero only, scroll cue at bottom
Header   : floating white capsule, centered, logo left, 5 text links, dark pill "Login" inside the capsule on the right
Hero     : 3D-rendered alpine meadow, cabin on the left, orange and purple wildflowers blurred in the foreground (strong depth of field),
           pale peach-lilac sky occupying the top 45%; headline sits in the sky (negative space), so no scrim is needed
Headline : geometric grotesk, semibold, near-black, about 7% of viewport width, single line, centered, tight tracking, period at the end
Body     : 2 centered lines, dark gray, 1.1rem, narrow measure (about 40ch)
CTAs     : white pill with soft shadow and tiny arrow + plain text link "Watch Demo"
Extras   : small translucent pill above headline (announcement), translucent "SCROLL" pill with arrow at bottom center
Color    : sky hsl(25,60%,88%) to hsl(260,25%,85%), text hsl(230,25%,12%), accent only inside the image (orange flowers)
Shape    : full pill everywhere in the header and buttons, no cards
Weakness : announcement pill is generic; use it only for a real announcement, otherwise leave it out
Do not copy: "Haven", "Design with ease.", "We just raised 20M", the render itself
Key trick: choose or generate an image with a calm, low-detail area where the headline sits
```

### Ref 2: "Singroup" (atmospheric light, sky and flowers)

```text
Family   : atmospheric-light
Skeleton : one full-viewport hero
Header   : logo far left, center glass capsule with 4 links (translucent, 1px light border, blur), right side "Login" text + glass pill "Get started"
Hero     : deep blue sky gradient to bright blue, soft white clouds, macro daisies in the bottom 35% with strong bokeh; headline sits in the sky
Headline : handwritten marker-style display font, white, 2 centered lines, about 5.5% of viewport width, loose and friendly
Body     : 2 small centered lines, white at 85% opacity, small sans
CTA      : single white pill, label + dark circular arrow icon on the right
Color    : blue hsl(215,80%,35%) to hsl(205,90%,65%), white text, accent only from the image
Shape    : glass capsule + pills, no cards
Weakness : subtitle is very small; raise to at least 1rem and keep contrast 4.5:1
Do not copy: "Singroup", the copy, the render
Note     : handwriting font is a deliberate mood choice. Use it only if the product tone is friendly or playful; pair it with a clean sans for everything else.
```

### Ref 3: "Waleed Travel" (commercial booking, long landing page)

```text
Family   : commercial-booking
Skeleton : hero with booking widget (about 85vh) > dark feature strip > popular destinations rail > about split with photo collage >
           tour types row > testimonials on dark photo > newsletter band > footer
Header   : transparent over the hero, logo left, links, no capsule
Hero     : lake + forest + mountain photo with a person sitting on a dock, dark green overlay on the left half for text; left column: small uppercase kicker
           with icon, 2-line headline with the second line in the accent color and an underline stroke, short paragraph, green pill button + circular play button, small avatar stack with count
Widget   : white card on the right, rounded 16px, tabs (One Way / Round Trip / Multi City), 2-column fields with icons, swap button between From and To,
           full-width green CTA with arrow, help line below
Strip    : dark green band under hero, 4 items with line icon + title + one-line description, hairline separators
Listing  : section title left with green keyword, short text, "View All" pill; 4 portrait photo cards with name, tour count, "From $999", circular arrows below
About    : left photo with floating stat tiles (10+ years, 5000+ travelers) and a 24/7 support tile, right text with green keyword, 5-item checklist, button; tilted polaroid-style photo pair
Types    : 5 small white cards with green line icons
Social   : dark photo background, 3 glass quote cards with avatar, name, country
Color    : green hsl(150,55%,40%), deep green hsl(160,45%,12%), white, light gray-blue section bg hsl(210,30%,96%)
Shape    : radius 12-16px cards, pill buttons, soft shadows on floating tiles only
Weakness : many sections look templated; keep widget + destinations + story, and make testimonials and stats real or flagged as sample
Do not copy: "Waleed", Pakistan contact data, names, testimonial text, photos, prices
Note     : this is the right lead when the site must sell packages and take inquiries
```

### Ref 4: "Nepalora" (editorial scenic)

```text
Family   : editorial-scenic
Skeleton : hero (about 80vh) > popular tours fan carousel > about bento > stats row
Header   : minimal centered links over the photo, small "NEW" tag on one link, outline "Login" with icon on the right, no capsule
Hero     : Himalaya peak at dusk, full-bleed, pink-orange light on snow, deep blue sky; text centered at the top third
Headline : two styles in one headline: clean sans for most words, italic serif for the emphasized phrase ("Without Limits."), white, 2 lines
Body     : one centered paragraph, small, white 85%
CTA      : single white pill "Build my trip"
Section 2: tiny pill label "YOUR JOURNEY", H2 about 4rem black on white, sans + italic serif mix, centered
Carousel : 5 tall portrait cards in a fan: center card largest and raised, neighbors scaled down and slightly lower, outer cards partly cropped;
           each card: photo, title, price chip top right, 2 small tags, white full-width "Explore" bar at the bottom; round prev/next buttons and "View More Tours" below
About    : intro sentence right-aligned in a wide column; bento of 3: dark navy card with toggle and "Tailor-Made" pill button, photo card with glass label,
           light card with big "50+" and 3 dotted rating bars
Stats    : 4 large numbers in a row (8,000+ m, 100+, 50+, 4 Seasons) with tiny captions
Color    : black / white / photo color, no brand accent; navy card hsl(225,60%,8%)
Shape    : radius 20-28px cards, pills, no shadows except carousel lift
Weakness : card text over photo is small; add a bottom scrim and raise to 0.875rem minimum
Do not copy: "Nepalora", Nepal content, tour names and prices, photos
Note     : best lead for a premium tour operator with a few hero products
```

### Ref 5: Indonesia story page (dark cinematic, vertical)

```text
Family   : dark-cinematic
Skeleton : hero (volcano aerial) > black section with 4 portrait recommendation cards > full-bleed photo section with play button and 2 video thumbs
Header   : tiny red dot + "TRAVEL" at left, 3 lowercase links with thin underlines, hairline across the top
Hero     : aerial volcano and crater lake, dark vignette; giant uppercase bold sans "VISIT INDONESIA" left-aligned (about 8% of viewport width, 2 lines),
           vertical index on the right (03 04 05 06 07, active number larger with a line), 3 tiny description columns at the bottom, "SWIPE >>" with a thin red progress line
Section  : pure black, centered small heading "destination recommendations", 4 equal portrait photo cards, rank labels ("1st place") bold white over the bottom of the photo, place name below
Story    : full-bleed island photo with person holding a flag, heading uppercase left, outlined play button, two video thumbnails bottom right
Color    : black hsl(0,0%,3%), white, single red accent hsl(358,70%,45%)
Shape    : square corners, 1px hairlines, no shadows
Weakness : labels over bright photo areas are hard to read; add a gradient scrim. Tiny body text must be at least 0.875rem
Do not copy: "TRAVEL", location text, social handle, photos
Note     : good for a campaign or destination-story page; for a booking site use it only for hero + gallery sections
```

### Ref 6: Indonesia tour landing (dark cinematic, nav + index)

```text
Family   : dark-cinematic
Skeleton : hero > 3 quick category links > "popular tours" row of 4 portrait cards > editorial heading with 2 video thumbnails
Header   : logo left, bold uppercase small links centered, search icon right, hairline under the whole bar
Hero     : Bromo-like volcanic landscape at dusk (purple, magenta, deep blue), left-aligned heavy uppercase headline "TRAVEL TIME" with a short paragraph,
           vertical index 01-05 on the right (active "03" larger, thin line)
Quick row: 3 items with pin icon (one red, two white), label + "MORE DETAILED" with arrow, thin red-to-white line above
Cards    : 4 tall portrait photos with 1px white border (no radius), "TOUR 1" label and place name over the photo
Editorial: giant uppercase heading "EXPLORE NATURAL WONDERS IN INDONESIA" left, play-button video thumbnails right, background photo fading to black
Color    : near-black, white, one red-orange accent hsl(8,80%,55%)
Type     : heavy geometric uppercase sans for display, light humanist sans for body
Shape    : square, hairline white borders, no shadow
Weakness : text on the photo cards has low contrast; use a bottom gradient scrim; give the cards real titles instead of "TOUR 1"
Do not copy: "Aesthetic Editing", text, photos
Note     : strongest lead for a bold, young Indonesian tour brand
```

## 6. Visual verification (Step 11)

Render at 1440x900 and 390x844. Put the lead reference next to the result (mentally or as a screenshot pair) and score each criterion 0 (missing), 1 (close), 2 (matches).

```text
1. Skeleton    : same section order and proportions as the Reference Mapping
2. Hero impact : imagery fills the hero, text sits in calm space or on a scrim, headline scale matches
3. Type        : same behavior (case, weight, mixing, scale contrast), real named fonts loaded
4. Color       : same dominant colors and accent count, same light/dark choice
5. Shape       : radius, borders, glass, shadows consistent with the reference
6. Components  : each key component exists and works (widget, carousel, index rail, ribbon)
7. Rhythm      : spacing density and alignment pattern similar, nothing cramped or empty
8. Craft       : no emoji, no filler copy, no stock-card sameness, imagery is high quality
```

Total below 12 of 16: list the five lowest-scoring deltas, fix them, re-render once. Below 12 after the second pass: tell the user plainly which criteria still fall short and why (usually asset quality).

Also verify: `document.documentElement.scrollWidth === window.innerWidth` at both sizes, headline readable over the image at both sizes, hero image has explicit dimensions and `fetchpriority="high"`.

## 7. When the result still looks generic

Check these in order. They account for most failures.

1. **The hero image is weak or missing.** Gradients and blobs read as AI. Fix the asset before touching CSS.
2. **Headline is timid.** References use headlines at 6-9% of viewport width with very few words. Use `clamp(2.75rem, 7vw, 6.5rem)` and cut the copy.
3. **Everything is centered and equal.** Add asymmetry: left-aligned headline with a right index rail, a raised center card, an offset stat tile.
4. **One font, one weight.** Pair a display style with a quiet body style; mix italic serif or uppercase heavy where the reference does.
5. **Too many colors.** One accent. Let the photo carry the rest.
6. **Flat sections.** Add layering: glass capsule over photo, floating tile over photo, hairline dividers, a photo that bleeds to the edge.
7. **Cards everywhere.** Keep cards for entities that are real objects (tours, products). Use hairlines, lists and plain text for everything else.
8. **Copy is puffery.** Rewrite with concrete facts: place, duration, what is included, price in IDR.
