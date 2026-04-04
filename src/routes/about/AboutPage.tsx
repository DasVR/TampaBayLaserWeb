import { motion } from "framer-motion";
import { brand, paths } from "@/config/brand";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

export function AboutPage() {
  return (
    <main id="main" className="bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-neutral-500">
              About
            </p>
            <h1 className="mt-6 font-display text-[2.75rem] font-medium leading-[1.06] tracking-[-0.02em] text-ink md:text-[3.25rem]">
              Led by <em className="italic text-accent">Hannah</em>—built for trust.
            </h1>
            <p className="mt-8 text-lg font-light leading-relaxed text-neutral-600">
              {brand.name} is a woman-owned studio in {brand.locality}. Over
              200,000 treatments later, our north star is unchanged: honest
              consults, steady hands, and the same specialist at your side.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <motion.div
            className="aspect-[4/5] overflow-hidden rounded-sm bg-gradient-to-br from-section via-cream to-accent/20"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          />
          <Reveal delay={0.08}>
            <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">
              Small team. Big standards.
            </h2>
            <div className="mt-6 space-y-4 text-base font-light leading-relaxed text-neutral-600">
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
            <SmartLink
              to={paths.contact}
              className="mt-10 inline-flex rounded-md bg-accent px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-lift hover:bg-accent-dark"
            >
              Book a consultation
            </SmartLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
