# Tampa Bay Laser

React + Vite marketing site for [tampabaylaser.com](https://tampabaylaser.com).

## Develop

```bash
npm ci
npm run dev
```

## Content edits

- Clinic NAP, hours, reviews, FAQs: `src/config/brand.ts`
- Deep service copy + pre/post care: `src/content/services.ts`
- Blog posts (add one per month): `src/content/blog.ts`
- Before/after photos: drop files in `public/images/before-after/{slug}/` and register in `beforeAfterGallery` inside `brand.ts`. Also generate a same-name `.webp` next to each `.jpg`/`.png` (see "Images" below) — `<BeforeAfter>` and the About page photos serve WebP automatically via `src/lib/image.ts`'s `webpSrc()`.

## Images

Photos render as `<picture>` with a WebP `<source>` and the original JPG as fallback (`src/lib/image.ts`). To add or update a photo:

```bash
npx sharp-cli -i public/images/path/photo.jpg -o public/images/path/photo.webp -f webp -q 85
```

(or any tool — GIMP, Squoosh, `cwebp -q 85`). Quality 85 is visually lossless for photos and typically cuts file size 25–50% versus the source JPG. Keep the original JPG/PNG alongside it — it's the fallback and the Open Graph/Twitter image source.

## SEO & analytics

Structured data (LocalBusiness, Service, BlogPosting, BreadcrumbList, FAQPage), per-route meta tags, `sitemap.xml`, and `robots.txt` are already wired up — see `src/hooks/usePageMeta.ts` / `usePageSchema.ts` and the JSON-LD in `index.html`.

To finish connecting the site to Google/Bing and start measuring traffic:

1. **Google Search Console** ([search.google.com/search-console](https://search.google.com/search-console)) — add the property, verify via the `google-site-verification` meta tag commented in `index.html`, then submit `https://tampabaylaser.com/sitemap.xml`.
2. **Bing Webmaster Tools** ([bing.com/webmasters](https://www.bing.com/webmasters)) — same idea via the `msvalidate.01` meta tag; Bing also powers Yahoo and some AI assistants.
3. **Google Business Profile** — keep name/address/phone identical to `src/config/brand.ts` (NAP consistency is a major local-ranking signal), and add posts/photos regularly.
4. **GA4** — create a property, set `VITE_GA_MEASUREMENT_ID` (see `.env.example`); pageviews on route changes are tracked automatically once set.
5. **Google Ads conversion tracking** — set `VITE_GOOGLE_ADS_ID`; call `trackConversion("label")` from `src/lib/analytics.ts` on your booking/contact success paths to measure ad ROI.
6. **Bump `<lastmod>` in `public/sitemap.xml`** whenever a page's content meaningfully changes, and add new blog/service URLs there and in `src/config/brand.ts` / `src/content/*` as you publish them.

Other things worth doing outside this repo: collect more Google reviews (rankings + `aggregateRating` accuracy), and build local citations/backlinks (Yelp, RealSelf, local directories) linking back to `tampabaylaser.com`.

## Deploy (Namecheap)

Pushing to `main` runs `.github/workflows/deploy.yml` (build + FTPS upload).

Add these **GitHub Actions secrets** (never commit passwords):

| Secret | Example |
| --- | --- |
| `FTP_SERVER` | Namecheap FTP host or server IP |
| `FTP_USERNAME` | Dedicated FTP deploy user |
| `FTP_PASSWORD` | FTP password (rotate if shared in chat) |
| `FTP_SERVER_DIR` | `/public_html/` |
| `FTP_PORT` | `21` (optional) |

`public/.htaccess` ships in `dist/` so React Router paths work on Apache.
