import { motion } from "framer-motion";
import { pillars } from "@/config/brand";
import { pillarIcons } from "@/lib/icons";
import { Reveal } from "@/motion/Reveal";

export function PillarsGrid() {
  return (
    <section className="bg-section py-24 md:py-32" aria-labelledby="pillars-heading">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-neutral-500">
            The Tampa Bay Laser difference
          </p>
          <h2
            id="pillars-heading"
            className="mx-auto mt-6 max-w-3xl font-display text-[2.125rem] font-medium leading-[1.08] tracking-[-0.02em] text-ink md:text-[2.85rem]"
          >
            Why we are <em className="text-[1.02em] italic text-accent">different</em>
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-7 text-left sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {pillars.map((card, idx) => {
            const Icon = pillarIcons[card.icon];
            return (
              <motion.li
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  delay: idx * 0.07,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <article className="flex h-full flex-col rounded-xl border border-neutral-200/90 bg-white p-7 shadow-card transition-shadow duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-lift md:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/12">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-medium text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-neutral-600">{card.body}</p>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
