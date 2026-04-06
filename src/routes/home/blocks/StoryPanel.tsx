import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { brand, paths } from "@/config/brand";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

export function StoryPanel() {
  return (
    <section className="bg-section py-section" aria-labelledby="story-heading">
      <div className="mx-auto grid min-w-0 max-w-6xl gap-12 px-page lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="relative order-2 min-w-0 lg:order-1">
          <div className="relative min-h-[min(22rem,58vh)] overflow-hidden rounded-sm lg:min-h-[32rem]">
            <img
              src="/images/hero-portrait.jpg"
              alt="Hannah, owner and CEO of Tampa Bay Laser"
              width={960}
              height={1200}
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-4 left-4 right-4 z-10 rounded-md border border-white/70 bg-white/95 p-4 shadow-card sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[19rem] sm:p-5">
              <p className="text-fluid-stat-label font-bold uppercase tracking-[0.26em] text-neutral-500">
                Meet your specialist
              </p>
              <p className="font-display mt-1.5 text-fluid-section font-medium text-ink sm:text-2xl">Hannah</p>
              <p className="mt-1 text-fluid-caps font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Owner &amp; CEO
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="order-1 min-w-0 lg:order-2">
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
          <div className="mt-8 max-w-lg space-y-5 text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
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
              Meet the team
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden strokeWidth={2.25} />
            </SmartLink>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
