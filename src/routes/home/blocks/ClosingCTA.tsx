import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { paths } from "@/config/brand";
import { SmartLink } from "@/shell/SmartLink";

export function ClosingCTA() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-charcoal to-[#1a1a1a] py-28 text-center text-white md:py-36"
      aria-labelledby="cta-heading"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(220,193,108,0.22)_0%,transparent_55%)]"
        aria-hidden
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-[min(520px,70vw)] w-[min(520px,70vw)] -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
          Ready to get started
        </p>
        <h2
          id="cta-heading"
          className="mt-8 font-display text-[2.125rem] font-medium leading-[1.08] tracking-[-0.02em] md:text-[2.85rem] lg:text-[3.15rem]"
        >
          Your journey to <em className="text-[1.02em] italic text-accent">radiance</em> starts here
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-base font-light leading-relaxed text-white/72 md:text-lg">
          Complimentary consultation. Transparent plans. Specialists who remember your name.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
            <SmartLink
              to={paths.contact}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-9 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lift sm:w-auto hover:bg-accent-dark"
            >
              Book now
              <ArrowRight className="h-4 w-4" aria-hidden strokeWidth={2.25} />
            </SmartLink>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
            <SmartLink
              to={paths.contact}
              className="inline-flex w-full items-center justify-center rounded-md border-2 border-white/35 px-9 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:w-auto hover:border-white hover:bg-white/5"
            >
              Contact us
            </SmartLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
