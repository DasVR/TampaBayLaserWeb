/**
 * Deep service copy: overview, pre-care, post-care.
 * Edit this file when treatment protocols change.
 */
import { offerings } from "@/config/brand";

export type ServiceDetail = {
  slug: (typeof offerings)[number]["slug"];
  headline: string;
  overview: string[];
  whoItsFor: string[];
  whatToExpect: string[];
  preCare: string[];
  postCare: string[];
  faqs: { q: string; a: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "laser-hair-removal",
    headline: "Smooth, confident skin—without the daily razor routine.",
    overview: [
      "Laser hair removal at Tampa Bay Laser uses medical-grade energy to target pigment in the hair follicle, reducing growth over a series of sessions. We tailor settings to your skin tone, hair color, and treatment area so results stay effective and comfortable.",
      "You’ll see the same specialist throughout your plan. That consistency means we remember what works for you, adjust as your hair thins, and never rush you through a protocol that doesn’t fit your life.",
      "Most clients start with a complimentary consultation. We map realistic timelines, explain prep and aftercare, and quote transparent package pricing before you commit.",
    ],
    whoItsFor: [
      "Anyone tired of shaving, waxing, or ingrown hairs on face or body",
      "Clients with darker, pigmented hair (laser works best when hair has color)",
      "People who want fewer maintenance appointments long-term",
    ],
    whatToExpect: [
      "A quick consult and patch discussion on your first visit if needed",
      "Sessions that feel like a warm snap—settings adjusted for your comfort",
      "A series of treatments spaced for your hair cycle, not a one-and-done promise",
    ],
    preCare: [
      "Avoid sunburn and heavy tanning in the treatment area for at least 2 weeks before your appointment.",
      "Do not wax, pluck, or thread the area—laser needs the follicle intact. Shaving is usually preferred 24 hours before treatment unless we advise otherwise.",
      "Pause photosensitizing products (strong retinoids, certain acids) on the area if we ask you to—bring a list of what you use.",
      "Arrive with clean skin: no lotion, deodorant, makeup, or oils on the area being treated.",
      "Tell us about any new medications, recent sun exposure, or skin irritation before we start.",
    ],
    postCare: [
      "Expect mild redness or warmth for a few hours—cool compresses help.",
      "Skip hot tubs, saunas, and intense workouts the same day if the area is flushed.",
      "Use broad-spectrum SPF on exposed treated skin and avoid intentional tanning between sessions.",
      "Do not pick or exfoliate aggressively while follicles shed (you may notice hairs releasing over 1–3 weeks).",
      "Continue your series as scheduled—consistency is what locks in reduction.",
    ],
    faqs: [
      {
        q: "Does laser hair removal hurt?",
        a: "Most clients describe a quick, warm snap. We adjust settings and check in throughout so you stay comfortable.",
      },
      {
        q: "How many sessions will I need?",
        a: "It depends on the area, density, and hormones. At your free consult we map a realistic range—not a one-size-fits-all number.",
      },
    ],
  },
  {
    slug: "electrolysis",
    headline: "True permanence—for every hair color and skin type.",
    overview: [
      "Electrolysis is the only FDA-cleared method for permanent hair removal. A fine probe treats each follicle individually, so it works on blonde, red, gray, and fine hair that laser cannot reliably target.",
      "Our electrologists design a plan around your goals—whether that’s a lip line, chin, or larger body areas—and keep appointments focused, private, and paced to your comfort.",
      "Many clients combine laser for dense pigmented areas with electrolysis for residual or light-colored hairs. We’ll recommend what fits your skin and timeline.",
    ],
    whoItsFor: [
      "Anyone with blonde, red, gray, white, or very fine hair",
      "Clients seeking permanent removal after laser plateau",
      "Facial and precision areas where accuracy matters most",
    ],
    whatToExpect: [
      "Timed sessions (often billed in 15-minute increments)",
      "A sensation similar to a brief heat or pinch at each follicle",
      "Gradual clearing as treated follicles stop producing hair",
    ],
    preCare: [
      "Do not wax or pluck the area before electrolysis—the follicle must be present.",
      "Keep the area clean; avoid heavy creams or makeup on facial treatment zones the morning of your visit when possible.",
      "Share any history of cold sores (for facial work), keloids, or pacemakers/implants so we can plan safely.",
      "Arrive hydrated and eat a light snack if you’re prone to lightheadedness during longer sessions.",
    ],
    postCare: [
      "Mild redness is normal. Keep the area clean and avoid picking.",
      "Skip harsh exfoliants and retinoids on the treated zone for 24–48 hours unless we advise otherwise.",
      "For facial work, use a gentle cleanser and moisturizer; SPF if the area is sun-exposed.",
      "Follow your appointment cadence—permanent clearance builds follicle by follicle.",
    ],
    faqs: [
      {
        q: "How is electrolysis different from laser?",
        a: "Laser treats many pigmented hairs at once. Electrolysis treats each follicle and works on every hair color—the only FDA-cleared permanent method.",
      },
    ],
  },
  {
    slug: "spray-tan",
    headline: "A custom glow—without UV damage.",
    overview: [
      "Our spray tan is customized to your undertone and the depth you want, so the finish looks like you spent a weekend outdoors—not orange or streaky.",
      "Perfect before events, photos, or simply when you want luminous skin without the sun. We’ll guide prep and aftercare so your color develops evenly and lasts.",
    ],
    whoItsFor: [
      "Anyone wanting a sun-kissed look without UV exposure",
      "Clients prepping for events, holidays, or photoshoots",
      "People with fair or uneven tone who want a quick refresh",
    ],
    whatToExpect: [
      "A brief consult on desired depth and undertone",
      "Even application in a private space",
      "Color that develops over several hours—follow our rinse guidance",
    ],
    preCare: [
      "Exfoliate gently 24 hours before (no harsh scrubs the morning of).",
      "Shave or wax at least 24 hours prior so pores aren’t freshly open.",
      "Arrive with clean, lotion-free skin—no oils, deodorant, or makeup on areas being sprayed.",
      "Wear dark, loose clothing and loose shoes to your appointment.",
    ],
    postCare: [
      "Allow the solution to develop fully before your first rinse (we’ll give you a timing window).",
      "Pat dry after showering—don’t rub vigorously for the first day.",
      "Moisturize daily to extend your tan; avoid long hot baths and chlorine when possible.",
      "Skip heavy oils right after rinsing if they cause uneven fading.",
    ],
    faqs: [],
  },
  {
    slug: "facials",
    headline: "Customized skin care that fits your aesthetic plan.",
    overview: [
      "Facials at Tampa Bay Laser are customized—not a one-menu-fits-all spa treatment. We cleanse, treat, and hydrate with your skin goals in mind, whether that’s glow, congestion, or support around laser and resurfacing plans.",
      "Tell us what you’ve been using at home and what bothers you most. We’ll build a visit that respects your barrier and your schedule.",
    ],
    whoItsFor: [
      "Clients wanting clearer, calmer, or more hydrated skin",
      "Anyone pairing facials with laser or resurfacing for better outcomes",
      "First-time guests who want education, not pressure",
    ],
    whatToExpect: [
      "Skin analysis and a clear plan for the session",
      "Hands-on treatment tailored to your concerns",
      "Home-care guidance you can actually follow",
    ],
    preCare: [
      "Arrive with a clean face when possible, or we will cleanse thoroughly.",
      "Avoid new prescription topicals or aggressive peels for several days unless cleared with us.",
      "Tell us about allergies, recent injectables, or active breakouts.",
    ],
    postCare: [
      "Skip harsh exfoliants and retinoids for 24–48 hours if your skin feels sensitive.",
      "Use gentle moisturizer and SPF daily.",
      "Avoid intense heat and heavy sweating the same day if your skin is flushed.",
    ],
    faqs: [],
  },
  {
    slug: "hyperpigmentation-resurfacing",
    headline: "Brighter tone and smoother texture with LaseMD-style resurfacing.",
    overview: [
      "Hyperpigmentation resurfacing targets uneven tone, sun spots, and texture with low-downtime laser technology. Treatments can be customized for face, neck, or chest so you get a clearer, more even complexion without a long social downtime.",
      "We’ll review your sun habits, skin history, and goals so expectations stay honest—pigment work is a process, and consistency plus sun protection matter as much as the device.",
    ],
    whoItsFor: [
      "Clients with sun spots, freckling, or uneven tone",
      "Anyone seeking brighter texture with manageable downtime",
      "People ready to commit to SPF and aftercare between sessions",
    ],
    whatToExpect: [
      "Consultation on pigment type and realistic timelines",
      "A customized pass with settings matched to your skin",
      "Mild redness or sandpaper texture for a short recovery window",
    ],
    preCare: [
      "Minimize sun exposure and tanning for at least 2 weeks before treatment.",
      "Pause retinoids, strong acids, and other sensitizing products as directed (often 3–7 days prior).",
      "Arrive with clean skin—no makeup or self-tanner on the treatment area.",
      "Disclose history of cold sores, keloids, or isotretinoin use.",
    ],
    postCare: [
      "Expect redness and a dry or sandy feel as skin renews—do not pick flaking skin.",
      "Use only the gentle cleanser and moisturizer we recommend during recovery.",
      "Strict broad-spectrum SPF every day; avoid intentional sun and tanning beds.",
      "Hold retinoids and acids until we clear you to restart.",
      "Series treatments are often recommended for pigment—keep your follow-ups.",
    ],
    faqs: [],
  },
  {
    slug: "intimate-lightening",
    headline: "Private, respectful care for intimate skin tone concerns.",
    overview: [
      "Intimate lightening is handled with privacy, consent, and clinical mindfulness. We discuss your goals discreetly, explain what is realistic for your skin, and never pressure you into packages.",
      "Every plan starts with a confidential consultation so you understand options, prep, aftercare, and pricing before anything begins.",
    ],
    whoItsFor: [
      "Clients seeking a more even appearance in intimate areas",
      "Anyone who wants judgment-free education before committing",
    ],
    whatToExpect: [
      "A private consult with clear boundaries and consent",
      "A customized plan only if treatment is appropriate for you",
      "Transparent pricing discussed before you book a series",
    ],
    preCare: [
      "Follow any area-specific shaving or hygiene instructions we provide at consult.",
      "Avoid irritation, waxing, or new products on the area immediately before treatment unless advised.",
      "Share relevant medical history and medications in confidence.",
    ],
    postCare: [
      "Keep the area clean and follow product guidance exactly.",
      "Avoid friction, heat, and tight synthetics as directed during healing.",
      "Contact us with any unexpected irritation—we’re here for aftercare questions.",
    ],
    faqs: [],
  },
  {
    slug: "keralase",
    headline: "Support for thinning hair—protocols for fuller-looking growth.",
    overview: [
      "KeraLase combines laser pre-conditioning of the scalp with KeraFactor serum to support stronger, thicker-looking hair for men and women. Your skin’s barrier is designed to keep things out—so we prepare the scalp first for better absorption.",
      "Plans are built around your pattern of thinning, lifestyle, and goals. We’ll be honest about what a series can and cannot do, and how to maintain results.",
    ],
    whoItsFor: [
      "Men and women noticing thinning or reduced density",
      "Clients seeking a non-surgical supportive protocol",
      "Anyone ready to follow a multi-session plan",
    ],
    whatToExpect: [
      "Scalp assessment and a clear series recommendation",
      "Laser pre-conditioning followed by topical KeraFactor application",
      "A course of visits—results build with consistency",
    ],
    preCare: [
      "Arrive with a clean, product-light scalp when possible (we’ll confirm shampoo timing).",
      "Avoid heavy styling products the day of treatment.",
      "Share history of scalp conditions, surgeries, or current hair-loss medications.",
    ],
    postCare: [
      "Follow rinse and product timing instructions after your session.",
      "Be gentle with the scalp—avoid harsh scrubbing for the first day.",
      "Stay consistent with your series and any at-home guidance we provide.",
      "Sun protection and overall health habits support better outcomes.",
    ],
    faqs: [],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}

export function getOffering(slug: string) {
  return offerings.find((o) => o.slug === slug);
}
