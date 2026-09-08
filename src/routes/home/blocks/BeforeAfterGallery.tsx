import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { beforeAfterForService, offerings, paths } from "@/config/brand";
import { BeforeAfter } from "@/components/BeforeAfter";
import { cn } from "@/lib/cn";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

export function BeforeAfterGallery() {
  const [openSlugs, setOpenSlugs] = useState<Set<string>>(() => new Set());
  const servicesWithPairs = offerings.filter((o) => beforeAfterForService(o.slug).length > 0);
  const hasAny = servicesWithPairs.length > 0;

  function toggle(slug: string) {
    setOpenSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  return (
    <section className="border-y border-[#e8e6e1] bg-cream py-section" aria-labelledby="ba-heading">
      <div className="mx-auto min-w-0 max-w-6xl px-page">
        <Reveal>
          <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">Real results</p>
          <h2
            id="ba-heading"
            className="mt-6 max-w-[min(100%,48rem)] font-display text-fluid-section font-medium tracking-[-0.02em] text-ink [text-wrap:balance]"
          >
            Before &amp; <em className="text-[1.02em] italic text-accent">after</em>
          </h2>
          <p className="mt-6 max-w-2xl text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
            {hasAny
              ? "Drag each slider to compare real client results from our Clearwater studio."
              : "We’re updating our clinical before-and-after gallery. Explore each treatment for care instructions now—photos will appear here and on service pages as they’re approved."}
          </p>
          {!hasAny ? (
            <SmartLink
              to={paths.services}
              className="mt-6 inline-flex text-fluid-caps font-bold uppercase tracking-[0.2em] text-accent underline-offset-8 hover:underline"
            >
              Browse treatments →
            </SmartLink>
          ) : null}
        </Reveal>

        {hasAny ? (
          <div className="mt-14 space-y-6 sm:mt-16 md:space-y-8">
            {servicesWithPairs.map((o) => {
              const pairs = beforeAfterForService(o.slug);
              const isOpen = openSlugs.has(o.slug);
              const headingId = `ba-section-${o.slug}`;

              return (
                <div key={o.slug} className="min-w-0 border-b border-[#e4e4e4] pb-6 md:pb-8 last:border-b-0">
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={`${headingId}-panels`}
                    className="flex w-full min-w-0 items-center justify-between gap-3 rounded-md py-1 text-left transition-colors hover:bg-section/60 sm:gap-6"
                    onClick={() => toggle(o.slug)}
                  >
                    <h3 className="min-w-0 pr-2 font-display text-fluid-card-title font-medium text-ink [text-wrap:balance] sm:text-xl md:text-2xl">
                      {o.title}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-accent transition-transform duration-300",
                        isOpen ? "rotate-0" : "-rotate-90",
                      )}
                      strokeWidth={2}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`${headingId}-panels`}
                        role="region"
                        aria-labelledby={headingId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 grid min-w-0 grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
                          {pairs.map((p) => (
                            <BeforeAfter
                              key={p.id}
                              beforeSrc={p.beforeSrc}
                              afterSrc={p.afterSrc}
                              beforeAlt={`${o.title} results, before treatment at Tampa Bay Laser`}
                              afterAlt={`${o.title} results, after treatment at Tampa Bay Laser`}
                              caption={p.caption}
                            />
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
