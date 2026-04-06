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
      className="grid min-w-0 overflow-hidden lg:min-h-[min(92vh,56rem)] lg:grid-cols-2"
    >
      {/* Copy: second on mobile, left column on lg */}
      <div className="relative order-2 flex min-w-0 flex-col justify-between bg-gradient-to-br from-[#2f2f2f] via-charcoal to-[#1a1a1a] px-page py-hero text-white lg:order-1 md:px-page lg:px-[clamp(1.25rem,0.75rem+2vw,3.5rem)] lg:py-[clamp(3.5rem,2.5rem+3vw,6rem)]">
        <motion.div
          className="pointer-events-none absolute left-0 top-0 h-[min(420px,55%)] w-[min(420px,85%)] bg-[radial-gradient(ellipse_at_30%_20%,rgba(220,193,108,0.2)_0%,transparent_62%)]"
          aria-hidden
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="relative min-w-0">
          <p className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-fluid-caps font-bold uppercase text-accent sm:mb-8">
            <motion.span
              className="h-px w-8 shrink-0 bg-accent sm:w-10"
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
            />
            <span className="min-w-0 break-words">
              {brand.locality} — Est. {brand.est}
            </span>
          </p>
          <h1
            id="hero-heading"
            className="font-display max-w-[min(100%,36rem)] text-balance text-fluid-hero font-medium text-white break-words"
          >
            Confidence begins with{" "}
            <em className="text-[1.02em] font-medium italic text-accent">flawless</em>{" "}
            skin.
          </h1>
          <p className="mt-6 max-w-lg text-fluid-body-lg font-light text-white/75 sm:mt-8 md:max-w-xl">
            For over two decades, {brand.name} has paired medical-grade treatments with
            unhurried, one-on-one care—so every visit feels clear, calm, and completely
            yours.
          </p>
          <div className="mt-10 flex min-w-0 flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
            <motion.div className="min-w-0 sm:shrink-0" whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
              <BookLink className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 text-center text-fluid-caps font-bold uppercase leading-snug tracking-[0.2em] text-white shadow-lift hover:bg-accent-dark sm:inline-flex sm:w-auto sm:px-7 sm:py-4">
                Book a free consultation
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden strokeWidth={2.25} />
              </BookLink>
            </motion.div>
            <SmartLink
              to={paths.services}
              className="inline-flex min-w-0 items-center justify-center gap-1 text-center text-fluid-caps font-bold uppercase leading-snug tracking-[0.2em] text-white/95 underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-85 sm:justify-center sm:text-left sm:underline-offset-[10px]"
            >
              <span className="break-words">Explore our services</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden strokeWidth={2.25} />
            </SmartLink>
          </div>
        </div>

        <dl className="relative mt-12 grid min-w-0 grid-cols-3 gap-0 border-t border-white/12 pt-8 text-center sm:mt-16 sm:pt-10">
          {(
            [
              { k: "Treatments performed", kMobile: "Treatments" as const, v: "200K+" },
              { k: "Google rating", v: brand.reviewScore, star: true as const },
              { k: "Experience", v: "20 yrs" },
            ] as const
          ).map((row, i) => (
            <div
              key={row.k}
              className={cn(
                "relative min-w-0 border-white/12 px-1 py-px sm:px-2",
                i < 2 && "border-r",
              )}
            >
              <dt className="line-clamp-1 text-fluid-stat-label font-bold uppercase text-white/45">
                {"kMobile" in row ? (
                  <>
                    <span className="sm:hidden">{row.kMobile}</span>
                    <span className="hidden sm:inline">{row.k}</span>
                  </>
                ) : (
                  row.k
                )}
              </dt>
              <dd className="mt-1.5 font-display text-[clamp(1.125rem,0.85rem+1vw,2.25rem)] font-medium tabular-nums leading-tight sm:mt-2">
                {"star" in row && row.star ? (
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

      {/* Portrait: first on mobile, right column on lg */}
      <div className="relative order-1 min-h-[min(22rem,65vh)] min-w-0 bg-neutral-950 sm:min-h-[22rem] lg:order-2 lg:min-h-0">
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
        <div className="pointer-events-none absolute right-4 top-4 hidden flex-col gap-2 md:right-6 md:top-6 md:flex">
          {["Google reviews", "200K+ treatments done"].map((label) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.45 }}
              className="max-w-[12rem] rounded-md border border-white/15 bg-white/[0.97] px-3 py-2.5 text-fluid-caps-tight font-bold uppercase text-ink shadow-card backdrop-blur-sm md:max-w-none md:px-4 md:py-3"
            >
              <span className="text-pretty">{label}</span>
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-transparent px-page pb-6 pt-20 sm:pb-8 sm:pt-24 md:px-8 md:pb-10">
          <p className="font-display text-fluid-stat font-medium text-white md:text-[clamp(1.75rem,1.2rem+1.5vw,2.25rem)]">
            Hannah
          </p>
          <p className="mt-2 text-fluid-caps font-bold uppercase tracking-[0.28em] text-white/70 [text-wrap:balance]">
            Owner &amp; CEO · {brand.name}
          </p>
        </div>
      </div>
    </section>
  );
}
