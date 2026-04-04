import { tickerPhrases } from "@/config/brand";

export function MarqueeStrip() {
  const phrase = tickerPhrases.map((i) => i.toUpperCase()).join("     ·     ");
  const doubled = `${phrase}     ·     ${phrase}`;

  return (
    <div className="border-y border-ink/10 bg-accent py-3 text-white">
      <p className="sr-only">{tickerPhrases.join(". ")}.</p>
      <div className="overflow-hidden">
        <p
          className="animate-marquee motion-reduce:animate-none inline-block whitespace-nowrap pl-4 font-sans text-[10px] font-bold uppercase tracking-[0.32em]"
          aria-hidden
        >
          {doubled}
        </p>
      </div>
    </div>
  );
}
