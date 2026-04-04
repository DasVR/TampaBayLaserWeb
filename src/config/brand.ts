/**
 * Tampa Bay Laser — single source of truth for content.
 * WordPress migration: map this object to ACF options, CPT fields, or wp_localize_script.
 */
export const brand = {
  name: "Tampa Bay Laser",
  tagline:
    "Tampa Bay's premier laser hair removal and aesthetic clinic—woman-owned, expert-led, dedicated to your confidence since 2004.",
  /** Primary clinic line — matches public-facing listings */
  phoneDisplay: "(727) 452-5345",
  phoneTel: "+17274525345",
  email: "info@tampabaylaser.com",
  address: {
    line1: "3700 Ulmerton Road, Suite 205",
    line2: "Clearwater, FL 33762",
  },
  hours: [
    "Mon–Tue: 11AM – 3:30PM",
    "Wed–Fri: 11AM – 6PM",
    "Sat: 10AM – 6PM",
    "Sun: Closed",
  ],
  est: "2004",
  /** Primary market label for hero / copy */
  locality: "Tampa Bay, FL",
  reviewScore: "4.8",
  reviewCount: 68,
} as const;

/** External integrations — replace URLs in WP if the booking stack changes */
export const integrations = {
  bookingUrl:
    "https://www.fresha.com/a/tampa-bay-laser-pinellas-park-10707-66th-street-north-zz71bwmp/booking?menu=true&dppub=true",
} as const;

export const paths = {
  home: "/",
  about: "/about",
  services: "/services",
  blog: "/blog",
  events: "/events",
  contact: "/contact",
} as const;

export type AppPath = (typeof paths)[keyof typeof paths];

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
  },
  {
    title: "Electrolysis",
    slug: "electrolysis",
    description:
      "The only FDA-approved permanent hair removal method—for every skin type, hair color, and texture including blonde, red, and gray.",
    icon: "activity" as const,
  },
  {
    title: "Spray Tan",
    slug: "spray-tan",
    description:
      "A natural sun-kissed glow without UV exposure, customized to your skin tone and desired depth.",
    icon: "sun" as const,
  },
  {
    title: "Hyperpigmentation Resurfacing",
    slug: "hyperpigmentation-resurfacing",
    description:
      "LaseMD resurfacing targets uneven tone and dark spots for a smoother, more radiant complexion.",
    icon: "sparkles" as const,
  },
  {
    title: "Intimate Lightening",
    slug: "intimate-lightening",
    description:
      "Gentle, clinically mindful treatments in a private, judgment-free environment.",
    icon: "heart" as const,
  },
  {
    title: "KeraLase Hair Restoration",
    slug: "keralase",
    description:
      "Support for thinning hair—protocols that encourage fuller, healthier growth for men and women.",
    icon: "scissors" as const,
  },
] as const;

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

/**
 * Short praise lines — replace with approved verbatim quotes from Google Business Profile for production/WP.
 */
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
