import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { brand, paths } from "@/config/brand";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

export function StoryPanel() {
  return (
    <section className="bg-section py-24 md:py-32" aria-labelledby="story-heading">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative min-h-[22rem] overflow-hidden rounded-sm lg:min-h-[32rem]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ebefe6] via-section to-accent/15" />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(220,193,108,0.28)_0%,transparent_50%)] opacity-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          />
          <div className="absolute left-6 top-6 z-10 max-w-[19rem] rounded-md border border-accent/25 bg-cream/95 p-4 shadow-lift backdrop-blur-[2px]">
            <p className="flex items-start gap-2 text-xs leading-relaxed text-ink/85">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} aria-hidden />
              <span>
                <span className="font-semibold text-ink">Photo brief:</span> Hannah,
                warm editorial portrait, ¾ view, soft natural light—aspirational
                and approachable.
              </span>
            </p>
          </div>
          <div className="absolute bottom-6 left-6 z-10 rounded-md border border-white/70 bg-white/95 px-5 py-4 shadow-card">
            <p className="text-[9px] font-bold uppercase tracking-[0.26em] text-neutral-500">
              Meet your specialist
            </p>
            <p className="font-display mt-1.5 text-2xl font-medium text-ink">Hannah</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Owner &amp; CEO
            </p>
          </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="order-1 px-6 lg:order-2 lg:px-0">
          <p className="mb-6 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.38em] text-neutral-500">
            <span className="h-px w-10 bg-accent" aria-hidden />
            Our story
          </p>
          <h2
            id="story-heading"
            className="max-w-xl font-display text-[2.125rem] font-medium leading-[1.08] tracking-[-0.02em] text-ink md:text-[2.75rem]"
          >
            A clinic built on <em className="text-[1.04em] italic text-accent">expertise</em>{" "}
            and care.
          </h2>
          <div className="mt-8 max-w-lg space-y-5 text-base font-light leading-relaxed text-neutral-600 md:text-[1.05rem] md:leading-[1.7]">
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
          <motion.div className="mt-12 inline-block" whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
            <SmartLink
              to={paths.about}
              className="inline-flex items-center gap-2 rounded-md bg-ink px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-lift hover:bg-charcoal"
            >
              Meet the team
              <ArrowRight className="h-4 w-4" aria-hidden strokeWidth={2.25} />
            </SmartLink>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
