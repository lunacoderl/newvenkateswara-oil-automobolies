# Project Technical SEO & GSC Changelog

## Project: New Venkateswara Oil & Automobiles
- **Repository Path**: `c:\Users\user\Desktop\Projects\new-venkateswara-oil-automobiles`
- **Approved Primary Domain**: `https://www.newvenkateswara-oil-automobolies.online`
- **Date**: October 15, 2026
- **Status**: Batch A - Certified Technical SEO & 404/Sitemap Fixes Implemented

---

### Files Created
1. `src/siteSeo.js`
   - Unified SEO route manifest declaring the approved primary domain, phone NAP metadata, and indexable routes (`/`, 5 service categories, and legal pages).
2. `PROJECT_CHANGELOG.md`
   - Continuous repository record of technical SEO modifications.

---

### Files Modified
1. `public/sitemap.xml`
   - Replaced all relative `<loc>/</loc>` URLs with absolute canonical HTTPS URLs on `https://www.newvenkateswara-oil-automobolies.online`.
2. `public/robots.txt`
   - Replaced relative sitemap reference with the full production endpoint `https://www.newvenkateswara-oil-automobolies.online/sitemap.xml`.
3. `src/components/SEO.jsx`
   - Eliminated staging-domain leakage by binding canonical URLs to `siteSeo.baseUrl` rather than `window.location.origin`. Added robots meta tag management (`noindex, follow` when `noIndex=true`).
4. `src/pages/NotFound.jsx`
   - Injected `noIndex={true}` to prevent soft-404 indexation of nonexistent URLs.
5. `index.html`
   - Added initial canonical `<link rel="canonical" href="https://www.newvenkateswara-oil-automobolies.online/" />` and Open Graph URL.
6. `vercel.json`
   - Replaced open catch-all rewrite with an explicit route whitelist (`/`, `/services/:slug`, `/privacy-policy`, `/terms-conditions`, `/terms-and-conditions`), enabling native HTTP 404 responses for arbitrary invalid URLs.
