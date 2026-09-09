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
- Before/after photos: drop files in `public/images/before-after/{slug}/` and register in `beforeAfterGallery` inside `brand.ts`

## Deploy (Namecheap)

Pushing to `main` runs `.github/workflows/deploy.yml` (build + FTPS upload).

Add these **GitHub Actions secrets** (never commit passwords):

| Secret | Value |
| --- | --- |
| `FTP_SERVER` | `server309-4.web-hosting.com` (preferred) or `66.29.141.5` — **not** `ftp.tampabaylaser.com` until that DNS record exists |
| `FTP_USERNAME` | `github@tampabaylaser.com` |
| `FTP_PASSWORD` | FTP password for that account |

Do **not** create `FTP_SERVER_DIR` as `/` — GitHub masks every `/` in logs. The workflow uploads to `/` (the FTP account home folder) automatically.

`public/.htaccess` ships in `dist/` so React Router paths work on Apache.
