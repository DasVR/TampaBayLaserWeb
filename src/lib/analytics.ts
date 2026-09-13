/**
 * Optional GA4 + Google Ads loader, gated on env vars so the site works
 * (and stays fast/GDPR-quiet) with nothing configured. Set VITE_GA_MEASUREMENT_ID
 * and/or VITE_GOOGLE_ADS_ID in .env to enable.
 */
const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const adsId = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

export function initAnalytics() {
  if (initialized || (!gaId && !adsId)) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId ?? adsId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  window.gtag = gtag;
  gtag("js", new Date());

  if (gaId) gtag("config", gaId, { send_page_view: false });
  if (adsId) gtag("config", adsId);
}

/** Call on every route change to log an SPA pageview. */
export function trackPageview(path: string, title: string) {
  if (!window.gtag) return;
  if (gaId) window.gtag("event", "page_view", { page_path: path, page_title: title, send_to: gaId });
}

/** Fire a Google Ads conversion, e.g. on a completed booking click or form submit. */
export function trackConversion(conversionLabel: string) {
  if (!window.gtag || !adsId) return;
  window.gtag("event", "conversion", { send_to: `${adsId}/${conversionLabel}` });
}
