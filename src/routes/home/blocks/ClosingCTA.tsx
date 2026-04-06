import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { paths } from "@/config/brand";
import { BookLink } from "@/shell/BookLink";
import { SmartLink } from "@/shell/SmartLink";

export function ClosingCTA() {
  return (
    <section
      className="relative min-w-0 overflow-hidden bg-gradient-to-b from-charcoal to-[#1a1a1a] py-section text-center text-white"
      aria-labelledby="cta-heading"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(220,193,108,0.22)_0%,transparent_55%)]"
        aria-hidden
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-[min(520px,70vw)] w-[min(520px,70vw)] -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative mx-auto min-w-0 max-w-3xl px-page">
        <p className="text-fluid-caps-wide font-bold uppercase text-accent">Ready to get started</p>
        <h2
          id="cta-heading"
          className="mt-6 font-display text-fluid-section-lg font-medium tracking-[-0.02em] [text-wrap:balance] sm:mt-8"
        >
          Your journey to <em className="text-[1.02em] italic text-accent">radiance</em> starts here
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-fluid-body-lg font-light text-white/72 [text-wrap:pretty] sm:mt-8">
          Complimentary consultation. Transparent plans. Specialists who remember your name.
        </p>
        <div className="mt-10 flex min-w-0 flex-col items-stretch justify-center gap-4 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-5">
          <motion.div className="min-w-0 w-full sm:w-auto" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
            <BookLink className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-fluid-caps font-bold uppercase leading-snug tracking-[0.2em] text-white shadow-lift hover:bg-accent-dark sm:w-auto sm:px-9 sm:py-4">
              Book now
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden strokeWidth={2.25} />
            </BookLink>
          </motion.div>
          <motion.div className="min-w-0 w-full sm:w-auto" whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
            <SmartLink
              to={paths.contact}
              className="inline-flex w-full min-w-0 items-center justify-center rounded-md border-2 border-white/35 px-6 py-3.5 text-fluid-caps font-bold uppercase leading-snug tracking-[0.2em] text-white hover:border-white hover:bg-white/5 sm:w-auto sm:px-9 sm:py-4"
            >
              Contact us
            </SmartLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
