import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { offerings } from "@/config/brand";
import { offeringIcons } from "@/lib/icons";
import { Reveal } from "@/motion/Reveal";
import { BookLink } from "@/shell/BookLink";

export function ServicesPage() {
  return (
    <main id="main" className="min-w-0 bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-section">
        <div className="mx-auto min-w-0 max-w-4xl px-page text-center">
          <Reveal>
            <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">Services / pricing</p>
            <h1 className="mt-6 font-display text-fluid-page-title font-medium tracking-[-0.02em] text-ink [text-wrap:balance]">
              Everything we <em className="italic text-accent">do</em>, under one roof.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-fluid-body-lg font-light text-neutral-600 [text-wrap:pretty]">
              Explore each modality—then book a free consult so we can map a
              plan to your skin, schedule, and comfort level.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto min-w-0 max-w-6xl space-y-6 px-page">
          {offerings.map((s, idx) => {
            const Icon = offeringIcons[s.icon];
            return (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ delay: idx * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group flex min-w-0 flex-row items-start gap-4 rounded-xl border border-[#e4e4e4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card sm:gap-6 sm:p-8 md:gap-10 md:p-10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/12 sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 text-accent sm:h-6 sm:w-6" strokeWidth={1.65} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-[clamp(1.25rem,1.05rem+0.65vw,1.75rem)] font-medium leading-snug text-ink [text-wrap:balance]">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-fluid-body font-medium tracking-wide text-accent [text-wrap:pretty]">
                    {s.pricing}
                  </p>
                  <p className="mt-3 text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
                    {s.description}
                  </p>
                  <p className="mt-4 text-[clamp(0.75rem,0.7rem+0.2vw,0.875rem)] font-light leading-snug text-neutral-500 [text-wrap:pretty]">
                    Final pricing confirmed at your complimentary consultation—no surprises.
                  </p>
                  <BookLink className="mt-6 inline-flex min-w-0 items-center gap-2 text-fluid-caps font-bold uppercase tracking-[0.2em] text-accent [text-wrap:balance]">
                    Book this treatment
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </BookLink>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
