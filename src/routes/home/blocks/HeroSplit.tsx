import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { brand, paths } from "@/config/brand";
import { cn } from "@/lib/cn";
import { BookLink } from "@/shell/BookLink";
import { SmartLink } from "@/shell/SmartLink";

function HeroMark() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] max-w-[38rem] overflow-hidden lg:block"
      aria-hidden
    >
      <span
        className="absolute -right-[0.12em] bottom-[-0.14em] select-none font-display text-[42rem] font-medium leading-none text-white/[0.045]"
        style={{ fontStyle: "normal" }}
      >
        T
      </span>
      <svg
        viewBox="0 0 560 560"
        className="absolute right-[6%] top-1/2 h-[62%] w-auto -translate-y-1/2 opacity-80"
      >
        {[64, 118, 172, 226].map((r) => (
          <circle
            key={r}
            cx="420"
            cy="220"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent/[0.22]"
          />
        ))}
        <line x1="420" y1="20" x2="420" y2="82" stroke="currentColor" strokeWidth="1" className="text-accent/30" />
        <line x1="420" y1="358" x2="420" y2="420" stroke="currentColor" strokeWidth="1" className="text-accent/30" />
        <line x1="192" y1="220" x2="254" y2="220" stroke="currentColor" strokeWidth="1" className="text-accent/30" />
        <line x1="530" y1="220" x2="592" y2="220" stroke="currentColor" strokeWidth="1" className="text-accent/30" />
        <circle cx="420" cy="220" r="4.5" fill="currentColor" className="text-accent" />
      </svg>
    </div>
  );
}

export function HeroSplit() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-w-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-charcoal to-[#121212]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(220,193,108,0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(220,193,108,0.12), transparent 50%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <HeroMark />

      <div className="relative mx-auto flex min-h-[min(92vh,52rem)] max-w-6xl flex-col justify-between px-page py-hero text-white md:py-[clamp(4rem,3rem+4vw,7rem)]">
        <div className="min-w-0 max-w-3xl pt-4 md:pt-8">
          <motion.p
            className="mb-6 font-display text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] font-semibold uppercase tracking-[0.14em] text-accent sm:mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {brand.name}
          </motion.p>
          <p className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-fluid-caps font-bold uppercase text-white/55 sm:mb-8">
            <motion.span
              className="h-px w-8 shrink-0 bg-accent sm:w-10"
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
            />
            <span className="min-w-0 break-words">
              {brand.locality} — Est. {brand.experienceSince}
            </span>
          </p>
          <h1
            id="hero-heading"
            className="font-display max-w-[min(100%,38rem)] text-balance text-fluid-hero font-medium text-white break-words"
          >
            Confidence begins with{" "}
            <em className="text-[1.02em] font-medium italic text-accent">flawless</em>{" "}
            skin.
          </h1>
          <p className="mt-6 max-w-xl text-fluid-body-lg font-light text-white/75 sm:mt-8">
            Medical-grade laser hair removal, electrolysis, and aesthetics—with
            unhurried, one-on-one care since {brand.experienceSince}.
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

        <dl className="relative mt-14 grid min-w-0 grid-cols-3 gap-0 border-t border-white/12 pt-8 text-center sm:mt-16 sm:max-w-2xl sm:pt-10 sm:text-left">
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
    </section>
  );
}
