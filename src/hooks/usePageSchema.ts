import { useEffect } from "react";

/**
 * Injects a page-scoped JSON-LD <script> into <head>, keyed by id so it can be
 * replaced/cleaned up on route change. Sitewide schema (MedicalBusiness, FAQPage)
 * stays in index.html; this is for schema specific to one route (Service, Breadcrumbs).
 */
export function usePageSchema(id: string, data: object | null) {
  useEffect(() => {
    if (!data) return;

    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);

    return () => {
      el?.remove();
    };
  }, [id, data]);
}
