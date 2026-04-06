import { motion } from "framer-motion";
import { pillars } from "@/config/brand";
import { pillarIcons } from "@/lib/icons";
import { Reveal } from "@/motion/Reveal";

export function PillarsGrid() {
  return (
    <section className="bg-section py-section" aria-labelledby="pillars-heading">
      <div className="mx-auto min-w-0 max-w-6xl px-page text-center">
        <Reveal>
          <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">The Tampa Bay Laser difference</p>
          <h2
            id="pillars-heading"
            className="mx-auto mt-6 max-w-[min(100%,48rem)] font-display text-fluid-section font-medium tracking-[-0.02em] text-ink [text-wrap:balance]"
          >
            Why we are <em className="text-[1.02em] italic text-accent">different</em>
          </h2>
        </Reveal>

        <ul className="mt-14 grid min-w-0 gap-6 text-left sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {pillars.map((card, idx) => {
            const Icon = pillarIcons[card.icon];
            return (
              <motion.li key={card.title} className="min-w-0" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ delay: idx * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                <article className="flex h-full min-w-0 flex-col rounded-xl border border-neutral-200/90 bg-white p-6 shadow-card transition-shadow duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-lift sm:p-7 md:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/12">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-fluid-card-title font-medium text-ink [text-wrap:balance] sm:mt-6">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">{card.body}</p>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
