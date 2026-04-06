import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/config/brand";
import { cn } from "@/lib/cn";
import { Reveal } from "@/motion/Reveal";

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-section py-section" aria-labelledby="faq-heading">
      <div className="mx-auto min-w-0 max-w-3xl px-page">
        <Reveal>
          <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">FAQ</p>
          <h2
            id="faq-heading"
            className="mt-6 font-display text-fluid-section font-medium tracking-[-0.02em] text-ink [text-wrap:balance]"
          >
            Questions we <em className="italic text-accent">love</em> to answer
          </h2>
          <p className="mt-6 text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
            Straight answers—no filler. One section open at a time.
          </p>
        </Reveal>

        <ul className="mt-12 space-y-3 sm:mt-14">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="min-w-0 rounded-lg border border-[#e4e4e4] bg-cream shadow-sm">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex w-full min-w-0 items-start justify-between gap-3 px-4 py-3.5 text-left sm:px-6 sm:py-5"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="min-w-0 font-display text-fluid-body font-medium text-ink [text-wrap:pretty] sm:text-[clamp(1.0625rem,1rem+0.35vw,1.125rem)]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "mt-0.5 h-5 w-5 shrink-0 text-accent transition-transform duration-300",
                      isOpen ? "rotate-180" : "rotate-0",
                    )}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-[#e4e4e4] px-4 pb-4 pt-3 text-fluid-body font-light text-neutral-600 [text-wrap:pretty] sm:px-6 sm:pb-6 sm:pt-4">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
