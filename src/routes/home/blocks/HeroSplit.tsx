import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { brand, paths } from "@/config/brand";
import { cn } from "@/lib/cn";
import { BookLink } from "@/shell/BookLink";
import { SmartLink } from "@/shell/SmartLink";

export function HeroSplit() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grid overflow-hidden lg:min-h-[min(92vh,56rem)] lg:grid-cols-2"
    >
      <div className="relative flex flex-col justify-between bg-gradient-to-br from-[#2f2f2f] via-charcoal to-[#1a1a1a] px-6 py-14 text-white md:px-10 md:py-20 lg:px-14 lg:py-24">
        <motion.div
          className="pointer-events-none absolute left-0 top-0 h-[min(420px,55%)] w-[min(420px,85%)] bg-[radial-gradient(ellipse_at_30%_20%,rgba(220,193,108,0.2)_0%,transparent_62%)]"
          aria-hidden
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="relative">
          <p className="mb-8 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.38em] text-accent">
            <motion.span
              className="h-px w-10 bg-accent"
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
            />
            {brand.locality} — Est. {brand.est}
          </p>
          <h1
            id="hero-heading"
            className="font-display max-w-[17ch] text-balance text-display-sm font-medium text-white md:max-w-xl md:text-display lg:text-display-lg"
          >
            Confidence begins with{" "}
            <em className="text-[1.02em] font-medium italic text-accent">flawless</em>{" "}
            skin.
          </h1>
          <p className="mt-8 max-w-md text-base font-light leading-relaxed text-white/75 md:text-lg md:leading-relaxed">
            For over two decades, {brand.name} has paired medical-grade
            treatments with unhurried, one-on-one care—so every visit feels
            clear, calm, and completely yours.
          </p>
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
              <BookLink className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lift hover:bg-accent-dark">
                Book a free consultation
                <ArrowRight className="h-4 w-4" aria-hidden strokeWidth={2.25} />
              </BookLink>
            </motion.div>
            <SmartLink
              to={paths.services}
              className="inline-flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.24em] text-white/95 underline decoration-accent decoration-2 underline-offset-[10px] transition-opacity hover:opacity-85"
            >
              Explore our services
              <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden strokeWidth={2.25} />
            </SmartLink>
          </div>
        </div>

        <dl className="relative mt-20 grid grid-cols-3 gap-4 border-t border-white/12 pt-12 text-center sm:text-left">
          {[
            { k: "Treatments performed", v: "200K+" },
            { k: "Google rating", v: brand.reviewScore, star: true },
            { k: "Experience", v: "20 yrs" },
          ].map((row, i) => (
            <div
              key={row.k}
              className={cn("relative sm:px-4", i === 1 && "border-x border-white/12")}
            >
              <dt className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/45">
                {row.k}
              </dt>
              <dd className="mt-2 font-display text-3xl font-medium tabular-nums md:text-4xl">
                {row.star ? (
                  <>
                    {row.v}
                    <span className="text-accent">★</span>
                  </>
                ) : (
                  row.v
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative min-h-[22rem] bg-neutral-950 lg:min-h-0">
        <motion.img
          src="/images/hero-portrait.png"
          alt="Hannah, owner and CEO of Tampa Bay Laser"
          className="h-full w-full object-cover object-center"
          width={960}
          height={1200}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          initial={{ scale: 1.06, filter: "brightness(0.92)" }}
          animate={{ scale: 1, filter: "brightness(1)" }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="pointer-events-none absolute right-6 top-6 hidden flex-col gap-2 md:flex">
          {["Google reviews", "200K+ treatments done"].map((label) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.45 }}
              className="rounded-md border border-white/15 bg-white/[0.97] px-4 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-ink shadow-card backdrop-blur-sm"
            >
              {label}
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-transparent px-6 pb-8 pt-24 md:px-8 md:pb-10">
          <p className="font-display text-3xl font-medium text-white md:text-4xl">Hannah</p>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/70">
            Owner &amp; CEO · {brand.name}
          </p>
        </div>
      </div>
    </section>
  );
}
