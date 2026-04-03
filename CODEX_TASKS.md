# RCA Website — Codex Task Specification

## Project
Rex Clarke Adventures static website.
Root: `rca-site/`

## Critical Problem

**Five pages are exact copies of `index.html`.** They all have:
1. The full 9-slide homepage hero carousel (wrong — this belongs only on `index.html`)
2. The same news/features body content (wrong — each page needs its own content)

**Affected files:**
- `rca-site/blog.html`
- `rca-site/news.html`
- `rca-site/tourism.html`
- `rca-site/culture.html`
- `rca-site/festivals.html`

**Reference pages (correct — use as structural model):**
- `rca-site/adventures.html` — proper article-style page (967 lines)
- `rca-site/aviation.html` — proper article-style page (967 lines)

---

## What Each Page Shares (DO NOT CHANGE)

Every page uses the same header block (lines 1–1167 in the broken pages):
- `<head>` with CSS variables, all shared styles
- Breaking news ticker
- Masthead (logo + tagline + utility buttons)
- Green navigation bar (desktop)
- Mobile nav drawer
- Same footer

**Only change: replace the hero carousel + update page body content.**

---

## Fix Pattern (apply to all 5 pages)

### Step 1 — Remove homepage hero carousel
Delete everything between (and including):
```
<!-- HERO CAROUSEL — 9 slides: 4 original + 5 new destinations -->
<div class="hero-carousel" id="heroCarousel">
  ...
</div>
```
This block runs from line ~1168 to ~1592 in each file.

### Step 2 — Insert page-specific hero banner in its place
See per-page specs below.

### Step 3 — Update page body content
Replace the body-wrap content with page-specific sections (see below).

### Step 4 — Fix the active nav link
In each page's `<ul class="nav">`, set `class="active"` on the correct `<li>`.

---

## Page-by-Page Specifications

---

### 1. `blog.html`

**Title tag:** `Blog | Rex Clarke Adventures`

**Active nav:** `<li class="active"><a href="blog.html">Blog</a></li>` (currently incorrectly set to news.html)

**Hero HTML** (replace the carousel with this):
```html
<!-- PAGE HERO — Blog -->
<div style="background:linear-gradient(135deg,var(--green-deep) 0%,var(--green-dk) 100%);padding:56px 24px 48px;border-bottom:3px solid var(--gold);">
  <div style="max-width:var(--max);margin:0 auto;text-align:center;">
    <div style="font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">RCA Editorial</div>
    <h1 style="font-family:var(--ff-serif);font-size:38px;font-weight:700;color:var(--white);letter-spacing:-.02em;line-height:1.2;margin-bottom:14px;">RCA Blog</h1>
    <p style="font-size:14px;font-weight:300;color:rgba(255,255,255,.65);max-width:560px;margin:0 auto;line-height:1.7;">In-depth features, editorial, and long-form storytelling from across Africa's 54 nations. Travel, culture, adventure, identity.</p>
  </div>
</div>
```

**Body content** — replace the body-wrap main sections with blog-appropriate labels:
- Section 1: "Featured Editorial" (featured article card, same structure as existing `featured` div)
- Section 2: "Latest Features" (3-column art-grid)
- Section 3: "Opinion & Analysis" (art-list format)
- Section 4: "Photography & Field Notes" (art-list format)

Content to use:
- Featured: "The Legacy of the Mali Empire: Cultural Capital That Still Shapes West Africa" — editorial feature
- Grid articles: African Fabrics, Ifa Divination, BBC Kingdom Zambia
- List articles: Eswatini tourism, Aquamania Sharm El Sheikh, Cape Town Airport

---

### 2. `news.html`

**Title tag:** `Latest News | Rex Clarke Adventures`

**Active nav:** `<li class="active"><a href="news.html">News</a></li>` ✓ (already correct)

**Hero HTML** (replace the carousel with this):
```html
<!-- PAGE HERO — News -->
<div style="background:linear-gradient(135deg,#0c1a12 0%,var(--green-deep) 100%);padding:56px 24px 48px;border-bottom:3px solid var(--gold);">
  <div style="max-width:var(--max);margin:0 auto;">
    <div style="max-width:720px;">
      <div style="font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">Breaking &amp; Latest</div>
      <h1 style="font-family:var(--ff-serif);font-size:38px;font-weight:700;color:var(--white);letter-spacing:-.02em;line-height:1.2;margin-bottom:14px;">Africa Travel &amp; Tourism News</h1>
      <p style="font-size:14px;font-weight:300;color:rgba(255,255,255,.65);max-width:560px;line-height:1.7;">Real-time intelligence on tourism, aviation, culture, and destination developments across Africa's 54 nations.</p>
    </div>
  </div>
</div>
```

**Body content** — keep the existing content sections but relabel:
- "Top Story" → keep as "Top Story" ✓
- "News & Features" → keep ✓
- "Culture & Heritage" → keep ✓
- Sidebar: trending, newsletter, popular posts ✓

The news page body content is already news-appropriate. Only the hero carousel needs removing.

---

### 3. `tourism.html`

**Title tag:** `Tourism in Africa | Rex Clarke Adventures`

**Active nav:** Find `<li><a href="tourism.html">` and add `class="active"` to the `<li>`. (Note: tourism may be under a dropdown — check nav and fix accordingly.)

**Hero HTML** (replace the carousel with this):
```html
<!-- PAGE HERO — Tourism -->
<div style="background:linear-gradient(135deg,var(--terra-dk) 0%,var(--green-deep) 100%);padding:56px 24px 48px;border-bottom:3px solid var(--gold);">
  <div style="max-width:var(--max);margin:0 auto;text-align:center;">
    <div style="font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">Africa Tourism</div>
    <h1 style="font-family:var(--ff-serif);font-size:38px;font-weight:700;color:var(--white);letter-spacing:-.02em;line-height:1.2;margin-bottom:14px;">Tourism in Africa</h1>
    <p style="font-size:14px;font-weight:300;color:rgba(255,255,255,.65);max-width:560px;margin:0 auto;line-height:1.7;">Where to go, what to do, and who to know. Destination intelligence, travel guides, and tourism news from across the continent.</p>
  </div>
</div>
```

**Body content** — replace body-wrap sections with tourism-focused content:
- Section 1: "Tourism Spotlight" (featured destination article)
- Section 2: "Top Destinations Right Now" (3-column grid)
- Section 3: "Tourism Intelligence" (list format — stats, reports, developments)
- Section 4: "Eco-Tourism & Sustainable Travel" (list format)

Content to use:
- Featured: Eswatini tourism surge article
- Grid: Aquamania Sharm El Sheikh (Egypt family tourism), BBC Kingdom Zambia, Cape Town Airport
- Lists: Mali Empire heritage tourism, African Fabrics cultural tourism, Ifa Divination cultural tour

---

### 4. `culture.html`

**Title tag:** `Culture & Heritage | Rex Clarke Adventures`

**Active nav:** `<li class="active"><a href="culture.html">Culture</a></li>` ✓ (verify)

**Hero HTML** (replace the carousel with this):
```html
<!-- PAGE HERO — Culture -->
<div style="background:linear-gradient(135deg,#1a0a2e 0%,var(--green-deep) 100%);padding:56px 24px 48px;border-bottom:3px solid var(--gold);">
  <div style="max-width:var(--max);margin:0 auto;text-align:center;">
    <div style="font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">Culture &amp; Heritage</div>
    <h1 style="font-family:var(--ff-serif);font-size:38px;font-weight:700;color:var(--white);letter-spacing:-.02em;line-height:1.2;margin-bottom:14px;">The Pulse of Africa</h1>
    <p style="font-size:14px;font-weight:300;color:rgba(255,255,255,.65);max-width:560px;margin:0 auto;line-height:1.7;">Art, music, language, tradition, and identity. The cultural stories that define 54 nations and a billion people.</p>
  </div>
</div>
```

**Body content** — replace body-wrap sections with culture-focused content:
- Section 1: "Culture Feature" (featured article — lead cultural piece)
- Section 2: "Arts & Traditions" (3-column grid)
- Section 3: "Heritage & History" (list format)
- Section 4: "Living Traditions Today" (list format)

Content to use:
- Featured: "The Legacy of the Mali Empire" (culture lead)
- Grid: African Fabrics (Adire/Kente/Kitenge), Ifa Divination, Ndebele beadwork
- Lists: other culture/history pieces from the existing article pool

---

### 5. `festivals.html`

**Title tag:** `Festivals in Africa | Rex Clarke Adventures`

**Active nav:** `<li class="active"><a href="festivals.html">Festivals</a></li>` ✓ (verify)

**Hero HTML** (replace the carousel with this):
```html
<!-- PAGE HERO — Festivals -->
<div style="background:linear-gradient(135deg,var(--terra-dk) 0%,#1a0a2e 100%);padding:56px 24px 48px;border-bottom:3px solid var(--gold);">
  <div style="max-width:var(--max);margin:0 auto;text-align:center;">
    <div style="font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">Festivals &amp; Events</div>
    <h1 style="font-family:var(--ff-serif);font-size:38px;font-weight:700;color:var(--white);letter-spacing:-.02em;line-height:1.2;margin-bottom:14px;">Africa's Calendar of Celebration</h1>
    <p style="font-size:14px;font-weight:300;color:rgba(255,255,255,.65);max-width:560px;margin:0 auto;line-height:1.7;">From Carnival to Timkat, Ouidah to FESTAC — the festivals, events and cultural moments that define Africa's year across all 54 nations.</p>
  </div>
</div>
```

**Body content** — replace body-wrap sections with festivals-focused content:
- Section 1: "Festival Spotlight" (featured festival article)
- Section 2: "Upcoming Festivals 2026" (3-column grid with festival cards showing: name, country, date, brief description)
- Section 3: "Festival Features & Reports" (list format — editorial coverage)
- Section 4: "Regional Celebrations" (list format — smaller/local events)

Festivals to include:
- FESTAC Lagos — Nigeria — ongoing
- Timkat Festival — Ethiopia — January
- Ouidah Voodoo Festival — Benin — January
- Cape Town Jazz — South Africa — March
- Sauti za Busara — Zanzibar, Tanzania — February
- Chale Wote Street Art Festival — Ghana — August
- Essaouira Gnaoua Festival — Morocco — June
- Lamu Cultural Festival — Kenya — November

---

## Navigation Consistency Check

In the `<ul class="nav">` of each page, verify the `class="active"` is set to the correct page:

| Page | Active nav item |
|------|----------------|
| blog.html | `<li class="active"><a href="blog.html">Blog</a></li>` |
| news.html | `<li class="active"><a href="news.html">News</a></li>` |
| tourism.html | Tourism link (may be in Discover dropdown) |
| culture.html | `<li class="active"><a href="culture.html">Culture</a></li>` |
| festivals.html | `<li class="active"><a href="festivals.html">Festivals</a></li>` |

Also check the mobile nav `<ul class="mob-links">` for the same active state.

---

## CSS to Add

No new CSS classes are needed. All page heroes use inline styles with existing CSS variables (`var(--green-deep)`, `var(--gold)`, `var(--ff-serif)`, etc.). This ensures they work without touching the shared `<style>` block.

---

## What NOT to Change

- The `<head>` section (meta, CSS)
- The ticker bar
- The masthead (logo, tagline, translate, search, work-with-us button)
- The green nav bar structure (only change which item has `class="active"`)
- The mobile nav drawer
- The footer
- The Work With Us strip above the footer
- The sidebar (trending widget, newsletter widget, popular posts widget)

---

## Verification Checklist

After implementing each page, confirm:
- [ ] Page opens without the destinations hero carousel
- [ ] Page has its own hero banner with correct title
- [ ] Page body sections have appropriate section headings (not "News & Features" on the culture page, etc.)
- [ ] Active nav item highlights the correct page
- [ ] Footer is intact
- [ ] No broken CSS (no missing variables, no orphaned HTML)
