import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { offerings, paths } from "@/config/brand";
import { usePageHydrated } from "@/hooks/usePageHydrated";
import { offeringIcons } from "@/lib/icons";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

function ServicesSkeleton() {
  return (
    <ul className="mt-14 grid min-w-0 grid-cols-2 gap-4 sm:gap-5" aria-hidden>
      {offerings.map((s) => (
        <li
          key={s.slug}
          className="flex h-full min-w-0 animate-pulse flex-col rounded-md border border-white/10 bg-white/[0.04] p-4 sm:p-7 md:p-8"
        >
          <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-white/10 sm:h-10 sm:w-10" />
            <div className="mt-0.5 h-6 min-w-0 flex-1 rounded bg-white/10" />
          </div>
          <div className="mt-3 flex-1 space-y-2 sm:mt-4">
            <div className="h-3 w-full rounded bg-white/10" />
            <div className="h-3 w-full rounded bg-white/10" />
            <div className="h-3 w-4/5 rounded bg-white/10" />
          </div>
          <div className="mt-7 h-3 w-24 rounded bg-white/15 sm:mt-8" />
        </li>
      ))}
    </ul>
  );
}

export function ServicesPreview() {
  const ready = usePageHydrated();

  return (
    <section
      className="relative min-w-0 bg-gradient-to-b from-charcoal via-[#252525] to-[#1a1a1a] py-section text-white"
      aria-labelledby="svc-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(220,193,108,0.12)_0%,transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto min-w-0 max-w-6xl px-page">
        <Reveal>
          <p className="text-fluid-eyebrow font-bold uppercase text-accent">Treatments</p>
          <h2
            id="svc-heading"
            className="mt-5 max-w-[min(100%,48rem)] font-display text-fluid-section-lg font-medium tracking-[-0.02em] text-white [text-wrap:balance]"
          >
            <span className="text-white/95">Curated </span>
            <em className="text-[1.02em] italic text-accent">services</em>
          </h2>
          <p className="mt-6 max-w-2xl text-fluid-body-lg font-light text-white/55 [text-wrap:pretty]">
            Real-life protocols—precision, patience, and respect for your comfort.
          </p>
        </Reveal>

        {!ready ? (
          <ServicesSkeleton />
        ) : (
          <ul className="mt-14 grid min-w-0 grid-cols-2 gap-4 sm:gap-5">
            {offerings.map((service, idx) => {
              const Icon = offeringIcons[service.icon];
              return (
                <motion.li key={service.slug} className="min-w-0" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ delay: idx * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                  <article className="group flex h-full min-w-0 flex-col rounded-md border border-white/12 bg-white/[0.035] p-4 transition-colors duration-300 hover:border-accent/45 hover:bg-white/[0.06] hover:shadow-[0_0_0_1px_rgba(220,193,108,0.2)] sm:p-7 md:p-8">
                    <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent/25 sm:h-10 sm:w-10">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
                      </div>
                      <h3 className="min-w-0 flex-1 font-display text-fluid-card-title font-medium leading-snug text-white [text-wrap:balance]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-3 flex-1 text-fluid-body font-light text-white/55 line-clamp-3 [text-wrap:pretty] md:line-clamp-none sm:mt-4">
                      {service.description}
                    </p>
                    <SmartLink
                      to={paths.services}
                      className="mt-6 inline-flex min-w-0 items-center gap-1.5 text-fluid-caps font-bold uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-85 sm:mt-8"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden strokeWidth={2.25} />
                    </SmartLink>
                  </article>
                </motion.li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
