/**
 * Blog posts — add one entry per month to publish.
 * Workflow: copy an existing post object, set a new slug/date/title/excerpt/body,
 * then it appears on /blog, homepage Journal teasers, and the sitemap on next deploy.
 */
export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  dateLabel: string;
  excerpt: string;
  /** First 2–3 sentences should directly answer the H1 for AI/search citation */
  answerLead: string;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "pre-care-that-protects-your-barrier",
    title: "Pre-care that actually protects your barrier",
    date: "2026-06-12",
    dateLabel: "June 12, 2026",
    excerpt:
      "What to skip—and what to keep—before laser, electrolysis, or resurfacing so your skin stays calm and results stay on track.",
    answerLead:
      "Good pre-care means arriving with a calm barrier: limit sun, skip plucking or waxing before hair removal, pause strong actives when we ask, and bring a clean treatment area. Those steps reduce irritation and help every session work as planned.",
    sections: [
      {
        heading: "Why prep matters",
        paragraphs: [
          "Energy-based treatments and electrolysis work best on skin that isn’t already inflamed or photosensitized. A few days of intentional prep protects your comfort and your outcomes.",
        ],
      },
      {
        heading: "Hair removal visits",
        paragraphs: [
          "For laser and electrolysis, leave the follicle intact—no waxing or plucking. Shave when we tell you to. Avoid sunburn on the area and skip heavy lotions the morning of your appointment.",
        ],
      },
      {
        heading: "Resurfacing and facials",
        paragraphs: [
          "We’ll often ask you to pause retinoids and strong acids before resurfacing. If you’re unsure, message us with your product list—we’d rather adjust early than soothe an avoidable reaction later.",
        ],
      },
    ],
  },
  {
    slug: "laser-vs-electrolysis",
    title: "Laser vs. electrolysis: how we decide together",
    date: "2026-05-08",
    dateLabel: "May 8, 2026",
    excerpt:
      "Laser clears many pigmented hairs quickly; electrolysis permanently treats every hair color. Here’s how we choose—or combine—them.",
    answerLead:
      "Laser hair removal treats many pigmented hairs at once and suits darker hair on appropriate skin tones. Electrolysis treats each follicle and is the only FDA-cleared permanent method for every hair color—including blonde, red, and gray. We often use both in one long-term plan.",
    sections: [
      {
        heading: "When laser shines",
        paragraphs: [
          "If your hair has color and density, laser can reduce growth efficiently across larger areas. You’ll still need a series timed to your hair cycle, with honest check-ins as density drops.",
        ],
      },
      {
        heading: "When electrolysis is the answer",
        paragraphs: [
          "Light, fine, or gray hairs don’t absorb laser energy well. Electrolysis addresses those follicles one by one—ideal for facial precision and finishing work after laser.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          "At your free consult we look at skin, hair, hormones, and goals—then recommend laser, electrolysis, or a blend. You always know why we’re suggesting a path before you book.",
        ],
      },
    ],
  },
  {
    slug: "same-specialist-every-visit",
    title: "What “same specialist every visit” changes",
    date: "2026-04-10",
    dateLabel: "April 10, 2026",
    excerpt:
      "Consistency isn’t a slogan—it’s how we remember your settings, your comfort cues, and your goals.",
    answerLead:
      "Seeing the same specialist every visit means your settings, sensitivity, and goals are remembered—so treatments stay consistent, education compounds, and you never restart your story with a stranger.",
    sections: [
      {
        heading: "Why revolving doors hurt results",
        paragraphs: [
          "Hair and skin plans evolve. When a new provider starts from scratch each time, you lose nuance: which fluence felt right, which area flares, which questions you already asked.",
        ],
      },
      {
        heading: "What we protect here",
        paragraphs: [
          "Tampa Bay Laser is built as a small, woman-owned practice on purpose. Continuity lets us pace sessions honestly, celebrate progress, and adjust without pressure.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRecentPosts(limit = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}
