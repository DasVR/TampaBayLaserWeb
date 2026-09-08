import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { brand, paths } from "@/config/brand";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

export function StoryPanel() {
  return (
    <section className="bg-section py-section" aria-labelledby="story-heading">
      <div className="mx-auto min-w-0 max-w-3xl px-page">
        <Reveal>
          <p className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-fluid-eyebrow font-bold uppercase text-neutral-500">
            <span className="h-px w-8 shrink-0 bg-accent sm:w-10" aria-hidden />
            <span>Our story</span>
          </p>
          <h2
            id="story-heading"
            className="max-w-xl font-display text-fluid-section-lg font-medium tracking-[-0.02em] text-ink [text-wrap:balance]"
          >
            A clinic built on <em className="text-[1.04em] italic text-accent">expertise</em>{" "}
            and care.
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
            <p>
              {brand.name} is a woman-owned practice rooted in {brand.locality}—a
              small team that has performed over 200,000 treatments without
              losing the human side of aesthetics.
            </p>
            <p>
              Trust shows up in honest consultations, thoughtful pacing, and
              specialists who remember your goals—not a revolving door.
            </p>
          </div>
          <motion.div className="mt-10 inline-block min-w-0 sm:mt-12" whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
            <SmartLink
              to={paths.about}
              className="inline-flex min-w-0 items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-fluid-caps font-bold uppercase leading-snug tracking-[0.18em] text-white shadow-lift hover:bg-charcoal sm:px-7 sm:py-4"
            >
              Meet Hannah
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden strokeWidth={2.25} />
            </SmartLink>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
