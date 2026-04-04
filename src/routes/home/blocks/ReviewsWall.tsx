import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useState } from "react";
import { brand, reviews } from "@/config/brand";
import { Reveal } from "@/motion/Reveal";

export function ReviewsWall() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-cream py-24 md:py-32" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-neutral-500">
              Client love
            </p>
            <h2
              id="reviews-heading"
              className="mt-6 max-w-xl font-display text-[2.125rem] font-medium leading-[1.08] tracking-[-0.02em] text-ink md:text-[2.85rem]"
            >
              Trusted by <em className="text-[1.02em] italic text-accent">thousands</em>
            </h2>
          </Reveal>
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-5xl font-medium tabular-nums text-ink md:text-6xl md:leading-none">
              {brand.reviewScore}
            </p>
            <div className="mt-3 flex justify-center gap-0.5 lg:justify-end" aria-label={`${brand.reviewScore} of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" aria-hidden />
              ))}
            </div>
            <p className="mt-3 text-sm font-medium text-neutral-500">
              Based on {brand.reviewCount} Google reviews
            </p>
          </motion.div>
        </div>

        <ul className="mt-16 grid gap-7 md:grid-cols-3">
          {reviews.map((t, idx) => (
            <motion.li
              key={t.attribution}
              layout
              onMouseEnter={() => setOpen(idx)}
              onFocus={() => setOpen(idx)}
              className="outline-none"
            >
              <figure
                className="relative flex h-full cursor-default flex-col overflow-hidden rounded-lg border border-neutral-200/80 border-l-[3px] border-l-accent bg-white p-8 pt-10 shadow-card transition-shadow duration-300 hover:shadow-lift md:p-9"
                style={{
                  boxShadow:
                    open === idx
                      ? "0 22px 50px -18px rgba(34, 34, 34, 0.18)"
                      : undefined,
                }}
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-accent/30" aria-hidden strokeWidth={1.25} />
                <div className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-lg font-normal italic leading-[1.55] text-ink md:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
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
      </div>
    </section>
  );
}
