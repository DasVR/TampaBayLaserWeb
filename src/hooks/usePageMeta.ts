import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://tampabaylaser.com";
const DEFAULT_TITLE =
  "Laser Hair Removal & Electrolysis | Tampa Bay Laser | Clearwater, FL";
const DEFAULT_DESC =
  "Tampa Bay Laser — laser hair removal, electrolysis, and aesthetics in Clearwater / Tampa Bay, FL. Woman-owned, complimentary consultations. Est. 2006.";

export type PageMeta = {
  title?: string;
  description?: string;
  path?: string;
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
}

/** Update document title, description, and canonical for the active route. */
export function usePageMeta({ title, description, path }: PageMeta) {
  const location = useLocation();
  const resolvedPath = path ?? location.pathname;

  useEffect(() => {
    const fullTitle = title ?? DEFAULT_TITLE;
    const desc = description ?? DEFAULT_DESC;
    const url = `${SITE}${resolvedPath === "/" ? "/" : resolvedPath}`;

    document.title = fullTitle;
    setMeta("description", desc);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", desc, "property");
    setMeta("og:url", url, "property");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);
    setCanonical(url);
  }, [title, description, resolvedPath]);
}

export const defaultPageMeta = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESC,
} as const;
