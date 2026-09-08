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

| Secret | Example |
| --- | --- |
| `FTP_SERVER` | Namecheap FTP host or server IP |
| `FTP_USERNAME` | Dedicated FTP deploy user |
| `FTP_PASSWORD` | FTP password (rotate if shared in chat) |
| `FTP_SERVER_DIR` | `/public_html/` |
| `FTP_PORT` | `21` (optional) |

`public/.htaccess` ships in `dist/` so React Router paths work on Apache.
