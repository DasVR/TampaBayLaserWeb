import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useState } from "react";
import { brand, reviews } from "@/config/brand";
import { usePageHydrated } from "@/hooks/usePageHydrated";
import { Reveal } from "@/motion/Reveal";

function ReviewsGridSkeleton() {
  return (
    <ul className="mt-14 grid min-w-0 gap-6 sm:mt-16 md:grid-cols-2 md:gap-7 lg:grid-cols-3" aria-hidden>
      {reviews.map((r) => (
        <li
          key={r.attribution}
          className="flex min-h-[260px] min-w-0 animate-pulse flex-col rounded-lg border border-neutral-200/80 bg-white p-6 pt-8 sm:p-8 sm:pt-10 md:p-9"
        >
          <div className="flex flex-wrap gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 w-4 rounded-sm bg-neutral-200/80" />
            ))}
          </div>
          <div className="mt-5 flex-1 space-y-2">
            <div className="h-4 w-full rounded bg-neutral-200/80" />
            <div className="h-4 w-full rounded bg-neutral-200/80" />
            <div className="h-4 w-4/5 rounded bg-neutral-200/80" />
            <div className="h-4 w-3/5 rounded bg-neutral-200/80" />
          </div>
          <div className="mt-8 h-3 w-32 rounded bg-neutral-200/90" />
        </li>
      ))}
    </ul>
  );
}

export function ReviewsWall() {
  const ready = usePageHydrated();
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-cream py-section" aria-labelledby="reviews-heading">
      <div className="mx-auto min-w-0 max-w-6xl px-page">
        <div className="flex min-w-0 flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <Reveal className="min-w-0">
            <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">Client love</p>
            <h2
              id="reviews-heading"
              className="mt-6 max-w-xl font-display text-fluid-section font-medium tracking-[-0.02em] text-ink [text-wrap:balance]"
            >
              Trusted by <em className="text-[1.02em] italic text-accent">thousands</em>
            </h2>
          </Reveal>
          <motion.div
            className="shrink-0 text-center lg:text-right"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-[clamp(2.5rem,1.75rem+3vw,3.75rem)] font-medium tabular-nums leading-none text-ink">
              {brand.reviewScore}
            </p>
            <div
              className="mt-3 flex flex-wrap justify-center gap-0.5 lg:justify-end"
              aria-label={`${brand.reviewScore} of 5`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent sm:h-5 sm:w-5" aria-hidden />
              ))}
            </div>
            <p className="mt-3 text-fluid-body font-medium text-neutral-500 [text-wrap:balance]">
              Based on {brand.reviewCount} Google reviews
            </p>
          </motion.div>
        </div>

        {!ready ? (
          <ReviewsGridSkeleton />
        ) : (
          <ul className="mt-14 grid min-w-0 grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
            {reviews.map((t, idx) => (
              <motion.li
                key={t.attribution}
                layout
                className="min-w-0 outline-none"
                onMouseEnter={() => setOpen(idx)}
                onFocus={() => setOpen(idx)}
              >
                <figure
                  className="relative flex h-full min-w-0 cursor-default flex-col overflow-hidden rounded-lg border border-neutral-200/80 border-l-[3px] border-l-accent bg-white p-6 pt-8 shadow-card transition-shadow duration-300 hover:shadow-lift sm:p-8 sm:pt-10 md:p-9"
                  style={{
                    boxShadow:
                      open === idx ? "0 22px 50px -18px rgba(34, 34, 34, 0.18)" : undefined,
                  }}
                >
                  <Quote
                    className="absolute right-4 top-4 h-7 w-7 text-accent/30 sm:right-6 sm:top-6 sm:h-8 sm:w-8"
                    aria-hidden
                    strokeWidth={1.25}
                  />
                  <div className="flex flex-wrap gap-0.5" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent sm:h-4 sm:w-4" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 font-display text-[clamp(1.0625rem,0.95rem+0.45vw,1.25rem)] font-normal italic leading-[1.55] text-ink [text-wrap:pretty]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-fluid-caps font-bold uppercase tracking-[0.22em] text-neutral-500 [text-wrap:balance] sm:mt-8">
                    {t.attribution}
                  </figcaption>
                  <AnimatePresence>
                    {open === idx ? (
                      <motion.span
                        layoutId={`review-hover-${idx}`}
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    ) : null}
                  </AnimatePresence>
                </figure>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
