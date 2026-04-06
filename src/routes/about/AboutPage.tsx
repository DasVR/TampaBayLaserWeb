import { motion } from "framer-motion";
import { brand } from "@/config/brand";
import { Reveal } from "@/motion/Reveal";
import { BookLink } from "@/shell/BookLink";

export function AboutPage() {
  return (
    <main id="main" className="min-w-0 bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-section">
        <div className="mx-auto min-w-0 max-w-3xl px-page">
          <Reveal>
            <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">About</p>
            <h1 className="mt-6 font-display text-fluid-page-title font-medium leading-[1.06] tracking-[-0.02em] text-ink [text-wrap:balance]">
              Led by <em className="italic text-accent">Hannah</em>—built for trust.
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
        <div className="mx-auto grid min-w-0 max-w-6xl gap-12 px-page lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div
            className="aspect-[4/5] min-h-0 min-w-0 overflow-hidden rounded-sm"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/images/hero-portrait.png"
              alt="Hannah, owner and CEO of Tampa Bay Laser"
              width={960}
              height={1200}
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          <Reveal delay={0.08} className="min-w-0">
            <h2 className="font-display text-fluid-subhead font-medium text-ink [text-wrap:balance]">
              Small team. Big standards.
            </h2>
            <div className="mt-6 space-y-4 text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
              <p>
                We keep the floor calm on purpose—no crowded waiting drama, no
                mystery pricing. You should always know what you’re booking and
                why it fits your goals.
              </p>
              <p>
                From laser and electrolysis to resurfacing and KeraLase, every
                modality is chosen for predictable outcomes and respectful
                aftercare.
              </p>
            </div>
            <BookLink className="mt-8 inline-flex min-w-0 rounded-md bg-accent px-6 py-3.5 text-fluid-caps font-bold uppercase leading-snug tracking-[0.18em] text-white shadow-lift hover:bg-accent-dark sm:mt-10 sm:px-7 sm:py-4">
              Book a consultation
            </BookLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
