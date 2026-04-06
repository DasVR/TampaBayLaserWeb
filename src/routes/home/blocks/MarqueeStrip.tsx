import { tickerPhrases } from "@/config/brand";

export function MarqueeStrip() {
  const phrase = tickerPhrases.map((i) => i.toUpperCase()).join("     ·     ");
  const doubled = `${phrase}     ·     ${phrase}`;
  const label = tickerPhrases.join(". ") + ".";

  return (
    <section className="border-y border-ink/10 bg-accent py-2.5 text-white sm:py-3" aria-label={label}>
      <div className="max-w-[100vw] overflow-hidden">
        <p
          className="animate-marquee motion-reduce:animate-none inline-block whitespace-nowrap pl-page font-sans text-fluid-caps font-bold uppercase tracking-[0.22em] sm:tracking-[0.32em]"
          aria-hidden
        >
          {doubled}
        </p>
      </div>
    </section>
  );
}
