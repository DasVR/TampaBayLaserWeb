/** Tampa Bay Laser — content & route map */

export const brand = {
  name: "Tampa Bay Laser",
  tagline:
    "Tampa Bay's premier laser hair removal and aesthetic clinic—woman-owned, expert-led, dedicated to your confidence since 2004.",
  phoneDisplay: "(813) 555-1234",
  phoneTel: "+18135551234",
  phoneAlt: "(813) 555-0198",
  phoneAltTel: "+18135550198",
  email: "hello@tampabaylaser.com",
  address: {
    line1: "10707 66th Street North",
    line2: "Pinellas Park, FL 33782",
  },
  bookingPath: "/contact",
  hours: [
    "Mon–Tue: 11AM – 3:30PM",
    "Wed–Fri: 11AM – 6PM",
    "Sat: 10AM – 6PM",
    "Sun: Closed",
  ],
  est: "2004",
  locality: "Pinellas Park, FL",
  reviewScore: "4.8",
  reviewCount: 68,
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

export const reviews = [
  {
    quote:
      "I've been a client for years. The team explains every step, and my skin has never looked smoother.",
    name: "Sarah M.",
  },
  {
    quote:
      "Finally a place that listens. Booking is easy and I always leave feeling heard.",
    name: "Jessica L.",
  },
  {
    quote:
      "Professional, warm, obsessively clean. I recommend them to anyone on the fence.",
    name: "Amanda R.",
  },
] as const;
