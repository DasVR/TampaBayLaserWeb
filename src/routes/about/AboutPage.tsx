import { motion } from "framer-motion";
import { brand } from "@/config/brand";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Reveal } from "@/motion/Reveal";
import { BookLink } from "@/shell/BookLink";

export function AboutPage() {
  usePageMeta({
    title: `About Hannah | ${brand.name} | Clearwater, FL`,
    description: `Meet Hannah, owner and CEO of ${brand.name}—a woman-owned laser and aesthetics clinic serving Tampa Bay since ${brand.est}.`,
    path: "/about",
  });

  return (
    <main id="main" className="min-w-0 bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-section">
        <div className="mx-auto min-w-0 max-w-3xl px-page">
          <Reveal>
            <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">About</p>
            <h1 className="mt-6 font-display text-fluid-page-title font-medium leading-[1.06] tracking-[-0.02em] text-ink [text-wrap:balance]">
              Led by <em className="italic text-accent">{brand.owner.name}</em>—built for trust.
            </h1>
            <p className="mt-8 text-fluid-body-lg font-light text-neutral-600 [text-wrap:pretty]">
              {brand.name} is a woman-owned studio in {brand.locality}. Over
              200,000 treatments later, our north star is unchanged: honest
              consults, steady hands, and the same specialist at your side.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-12 px-page lg:grid-cols-2 lg:items-start lg:gap-14">
          <motion.div
            className="aspect-[3/4] min-h-0 min-w-0 overflow-hidden rounded-sm bg-neutral-200"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={brand.owner.photos.primary}
              alt={`${brand.owner.name}, ${brand.owner.role} of ${brand.name}`}
              width={933}
              height={1337}
              className="h-full w-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
          </motion.div>
          <Reveal delay={0.08} className="min-w-0">
            <p className="text-fluid-caps font-bold uppercase tracking-[0.22em] text-accent">
              {brand.owner.role}
            </p>
            <h2 className="mt-3 font-display text-fluid-subhead font-medium text-ink [text-wrap:balance]">
              A personal practice, not a revolving door.
            </h2>
            <div className="mt-6 space-y-4 text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
              <p>
                Hannah founded {brand.name} to give Tampa Bay a calm, expert-led
                place for laser hair removal, electrolysis, and aesthetics—where
                you are never rushed through a script and never handed off to a
                stranger mid-plan.
              </p>
              <p>
                Since {brand.est}, the clinic has stayed intentionally small:
                woman-owned, education-first, and built around the same
                specialist seeing you through your goals. That continuity is how
                we remember your settings, your comfort cues, and what “done”
                means for you.
              </p>
              <p>
                We keep the floor calm on purpose—no crowded waiting drama, no
                mystery pricing. From laser and electrolysis to resurfacing and
                KeraLase, every modality is chosen for predictable outcomes and
                respectful aftercare. You should always know what you’re booking
                and why it fits.
              </p>
              <p>
                Whether you’re here for a free consultation or a long-term
                series, you’ll leave with clear next steps—and a team that
                treats your confidence as the point of the work.
              </p>
            </div>
            <BookLink className="mt-8 inline-flex min-w-0 rounded-md bg-accent px-6 py-3.5 text-fluid-caps font-bold uppercase leading-snug tracking-[0.18em] text-white shadow-lift hover:bg-accent-dark sm:mt-10 sm:px-7 sm:py-4">
              Book a consultation
            </BookLink>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#e4e4e4] bg-section py-section" aria-labelledby="more-hannah">
        <div className="mx-auto min-w-0 max-w-6xl px-page">
          <Reveal>
            <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">More from Hannah</p>
            <h2
              id="more-hannah"
              className="mt-4 font-display text-fluid-subhead font-medium text-ink [text-wrap:balance]"
            >
              Life outside the treatment room
            </h2>
          </Reveal>
          <ul className="mt-10 grid min-w-0 grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {brand.owner.photos.gallery.map((photo, i) => (
              <motion.li
                key={photo.src}
                className="min-w-0 overflow-hidden rounded-sm bg-neutral-200"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[4/5] h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
