/**
 * Tampa Bay Laser — single source of truth for content.
 */
export const brand = {
  name: "Tampa Bay Laser",
  tagline:
    "Tampa Bay's premier laser hair removal and aesthetic clinic—woman-owned, expert-led, dedicated to your confidence since 2004.",
  phoneDisplay: "(727) 452-5345",
  phoneTel: "+17274525345",
  email: "hello@tampabaylaser.com",
  address: {
    line1: "3700 Ulmerton Road, Suite 202",
    line2: "Clearwater, FL 33762",
  },
  hours: ["By appointment only"] as const,
  est: "2004",
  locality: "Tampa Bay, FL",
  reviewScore: "4.8",
  reviewCount: 68,
  owner: {
    name: "Hannah",
    role: "Owner & CEO",
    photos: {
      primary: "/images/about/hannah-portrait.jpg",
      gallery: [
        {
          src: "/images/about/hannah-portrait-2.jpg",
          alt: "Hannah smiling indoors at home",
        },
        {
          src: "/images/about/hannah-portrait-bw.jpg",
          alt: "Hannah studio portrait in black and white",
        },
        {
          src: "/images/about/hannah-lifestyle-1.jpg",
          alt: "Hannah in aerial fitness wearing Tampa Bay Laser gear",
        },
        {
          src: "/images/about/hannah-lifestyle-2.jpg",
          alt: "Hannah mid-aerial pose in the studio",
        },
      ],
    },
  },
} as const;

export const integrations = {
  bookingUrl:
    "https://www.fresha.com/a/tampa-bay-laser-pinellas-park-10707-66th-street-north-zz71bwmp/booking?menu=true&dppub=true",
  googleReviewsUrl:
    "https://www.google.com/search?q=Tampa+Bay+Laser+Clearwater+reviews",
} as const;

export const paths = {
  home: "/",
  about: "/about",
  services: "/services",
  blog: "/blog",
  events: "/events",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type AppPath = (typeof paths)[keyof typeof paths];

export function servicePath(slug: string) {
  return `${paths.services}/${slug}` as const;
}

export function blogPath(slug: string) {
  return `${paths.blog}/${slug}` as const;
}

export const navItems = [
  { label: "Services", to: paths.services },
  { label: "About", to: paths.about },
  { label: "Blog", to: paths.blog },
  { label: "Events", to: paths.events },
  { label: "Contact", to: paths.contact },
] as const;

export const tickerPhrases = [
  "5-star rated on Google",
  "200,000+ treatments performed",
  "20+ years of experience",
  "Woman owned business",
  "Free consultations available",
  "Same specialist every visit",
] as const;

export const offerings = [
  {
    title: "Laser Hair Removal",
    slug: "laser-hair-removal",
    description:
      "Designed to make ingrown hairs and razor bumps a thing of the past—with the same specialist every session so you feel educated, safe, and confident.",
    icon: "zap" as const,
    pricing: "Consultation free · small areas from $85 · packages by treatment area",
  },
  {
    title: "Electrolysis",
    slug: "electrolysis",
    description:
      "The only FDA-approved permanent hair removal method—for every skin type, hair color, and texture including blonde, red, and gray.",
    icon: "activity" as const,
    pricing: "From $70 per 15 min · full plan priced after consultation",
  },
  {
    title: "Spray Tan",
    slug: "spray-tan",
    description:
      "A natural sun-kissed glow without UV exposure, customized to your skin tone and desired depth.",
    icon: "sun" as const,
    pricing: "Full body from $55 · express touch-ups from $35",
  },
  {
    title: "Facials",
    slug: "facials",
    description:
      "Customized facial treatments designed to cleanse, hydrate, and restore your skin's natural glow — paired seamlessly with your existing aesthetic plan.",
    icon: "wandSparkles" as const,
    pricing: "From $95 · series & add-ons quoted at consult",
  },
  {
    title: "Hyperpigmentation Resurfacing",
    slug: "hyperpigmentation-resurfacing",
    description:
      "LaseMD resurfacing targets uneven tone and dark spots for a smoother, more radiant complexion.",
    icon: "sparkles" as const,
    pricing: "Single session from $350 · series pricing available",
  },
  {
    title: "Intimate Lightening",
    slug: "intimate-lightening",
    description:
      "Gentle, clinically mindful treatments in a private, judgment-free environment.",
    icon: "heart" as const,
    pricing: "Priced discreetly at consultation · package rates for series",
  },
  {
    title: "KeraLase Hair Restoration",
    slug: "keralase",
    description:
      "Support for thinning hair—protocols that encourage fuller, healthier growth for men and women.",
    icon: "scissors" as const,
    pricing: "From $450 per session · protocol bundles at consult",
  },
] as const;

/**
 * Clinical before/after pairs.
 * Add files under public/images/before-after/{slug}/ and register them here.
 * Empty until real photos are provided — UI shows an honest empty state (no stock).
 */
export type BeforeAfterPair = {
  id: string;
  serviceSlug: string;
  serviceTitle: string;
  beforeSrc: string;
  afterSrc: string;
  caption: string;
};

export const beforeAfterGallery: BeforeAfterPair[] = [];

export function beforeAfterForService(slug: string): BeforeAfterPair[] {
  return beforeAfterGallery.filter((p) => p.serviceSlug === slug);
}

export const pillars = [
  {
    title: "Medical expertise",
    body: "Safety-first protocols and candid education on what to expect at every visit.",
    icon: "award" as const,
  },
  {
    title: "Consistency",
    body: "The same specialist sees you through your plan—no revolving door.",
    icon: "heart" as const,
  },
  {
    title: "Privacy & respect",
    body: "Calm rooms, clear communication, and zero pressure.",
    icon: "shield" as const,
  },
  {
    title: "Results that last",
    body: "Treatments chosen for outcomes that still look like you—only more confident.",
    icon: "sun" as const,
  },
] as const;

export const reviews = [
  {
    quote:
      "They explain every step and never rush you. Results have stayed consistent across visits.",
    attribution: "Maria · Google review",
  },
  {
    quote:
      "Warm, immaculate space and a team that listens. Booking was simple from start to finish.",
    attribution: "J.D. · Google review",
  },
  {
    quote:
      "I've sent friends here—trustworthy care and familiar faces every appointment.",
    attribution: "Aimee · Google review",
  },
] as const;

export const faqs = [
  {
    q: "Does laser hair removal hurt?",
    a: "Most clients describe it as a quick, warm snap. We adjust settings for your comfort and check in throughout—we’d rather slow down than rush you.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on the area, your hair color and density, and your goals. At your free consult we map a realistic range—not a one-size-fits-all number.",
  },
  {
    q: "What’s the difference between laser and electrolysis?",
    a: "Laser treats many hairs at once and works best on pigmented hair. Electrolysis treats each follicle individually and is effective on every hair color—the only FDA-cleared method for permanent removal. We’ll recommend what matches your skin and goals.",
  },
  {
    q: "Do you offer financing or packages?",
    a: "We’re happy to discuss series pricing and how to phase treatments. Transparent pricing is reviewed before you commit to a plan.",
  },
  {
    q: "How do I prepare for my first visit?",
    a: "Avoid sunburn and plucking in the area we’re treating; shave the day before unless we tell you otherwise. Bring questions—we’ll walk through everything.",
  },
] as const;
