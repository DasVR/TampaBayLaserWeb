import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { offerings, paths } from "@/config/brand";
import { offeringIcons } from "@/lib/icons";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

export function ServicesPreview() {
  return (
    <section
      className="relative bg-gradient-to-b from-charcoal via-[#252525] to-[#1a1a1a] py-24 text-white md:py-32"
      aria-labelledby="svc-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(220,193,108,0.12)_0%,transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-accent">
            Treatments
          </p>
          <h2
            id="svc-heading"
            className="mt-5 max-w-3xl font-display text-[2.125rem] font-medium leading-[1.08] tracking-[-0.02em] text-white md:text-[2.85rem] lg:text-[3.15rem]"
          >
            <span className="text-white/95">Curated </span>
            <em className="text-[1.02em] italic text-accent">services</em>
          </h2>
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/55 md:text-lg">
            Real-life protocols—precision, patience, and respect for your comfort.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((service, idx) => {
            const Icon = offeringIcons[service.icon];
            return (
              <motion.li
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ delay: idx * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <article className="group flex h-full flex-col rounded-md border border-white/12 bg-white/[0.035] p-7 transition-colors duration-300 hover:border-accent/45 hover:bg-white/[0.06] hover:shadow-[0_0_0_1px_rgba(220,193,108,0.2)] md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent/25">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-white">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-white/55">
                    {service.description}
                  </p>
                  <SmartLink
                    to={paths.services}
                    className="mt-8 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-85"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden strokeWidth={2.25} />
                  </SmartLink>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
