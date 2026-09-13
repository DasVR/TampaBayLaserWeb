/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree form endpoint, e.g. https://formspree.io/f/xxxxx */
  readonly VITE_FORMSPREE_ENDPOINT?: string;
  /** GA4 Measurement ID, e.g. G-XXXXXXXXXX */
  readonly VITE_GA_MEASUREMENT_ID?: string;
  /** Google Ads conversion ID, e.g. AW-XXXXXXXXX */
  readonly VITE_GOOGLE_ADS_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
