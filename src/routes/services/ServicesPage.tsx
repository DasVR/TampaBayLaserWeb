import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { offerings } from "@/config/brand";
import { offeringIcons } from "@/lib/icons";
import { Reveal } from "@/motion/Reveal";
import { BookLink } from "@/shell/BookLink";

export function ServicesPage() {
  return (
    <main id="main" className="bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-neutral-500">
              Services / pricing
            </p>
            <h1 className="mt-6 font-display text-[2.75rem] font-medium leading-tight tracking-[-0.02em] text-ink md:text-[3.5rem]">
              Everything we <em className="italic text-accent">do</em>, under one roof.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-neutral-600">
              Explore each modality—then book a free consult so we can map a
              plan to your skin, schedule, and comfort level.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-6 px-6 lg:px-8">
          {offerings.map((s, idx) => {
            const Icon = offeringIcons[s.icon];
            return (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ delay: idx * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col gap-6 rounded-xl border border-[#e4e4e4] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card md:flex-row md:items-start md:gap-10 md:p-10"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/12">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.65} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-2xl font-medium text-ink">{s.title}</h2>
                  <p className="mt-3 text-base font-light leading-relaxed text-neutral-600">
                    {s.description}
                  </p>
                  <BookLink className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    Book this treatment
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
