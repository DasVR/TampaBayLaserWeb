import { type KeyboardEvent, useLayoutEffect, useRef, useState } from "react";
import { GripVertical } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/cn";

/** Hit strip width (px); line is visually centered in this strip. */
const HIT_W = 40;
const HALF_HIT = HIT_W / 2;

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  className?: string;
};

/**
 * Before / after reveal slider. Replace image URLs with WP media in production.
 * `x` motion value = translateX of the left edge of the hit strip, clamped so the
 * divider center spans [0, trackW] (left: -HALF_HIT .. right: trackW - HALF_HIT).
 */
export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
  className,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackW, setTrackW] = useState(0);
  /** TranslateX (px) of hit strip’s left edge; centerline = x + HALF_HIT */
  const x = useMotionValue(0);
  const [pct, setPct] = useState(50);
  const [hintDismissed, setHintDismissed] = useState(false);

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.offsetWidth;
      setTrackW(w);
      if (w > 0) x.set(w / 2 - HALF_HIT);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [x]);

  const clipPath = useTransform(x, (xv) => {
    if (trackW <= 0) return "inset(0 50% 0 0)";
    const center = xv + HALF_HIT;
    const p = (center / trackW) * 100;
    const clamped = Math.min(100, Math.max(0, p));
    return `inset(0 ${100 - clamped}% 0 0)`;
  });

  useMotionValueEvent(x, "change", (xv) => {
    if (trackW <= 0) return;
    const center = xv + HALF_HIT;
    setPct(Math.round((center / trackW) * 100));
  });

  const clampX = (next: number) =>
    Math.max(-HALF_HIT, Math.min(trackW - HALF_HIT, next));

  const onKey = (e: KeyboardEvent) => {
    if (trackW <= 0) return;
    const step = trackW * 0.05;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      x.set(clampX(x.get() - step));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      x.set(clampX(x.get() + step));
    }
  };

  const dragMin = -HALF_HIT;
  const dragMax = Math.max(dragMin, trackW - HALF_HIT);

  return (
    <figure className={cn("min-w-0 space-y-2 sm:space-y-3", className)}>
      <div
        ref={trackRef}
        className="relative aspect-[4/5] w-full min-w-0 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100 select-none"
      >
        <img
          src={afterSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <motion.div
          className="absolute inset-0 overflow-hidden will-change-[clip-path]"
          style={{ clipPath }}
        >
          <img
            src={beforeSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <div
          className="pointer-events-none absolute left-2 top-2 z-10 max-w-[42%] rounded bg-charcoal/75 px-1.5 py-1 text-fluid-caps-tight font-bold uppercase text-white backdrop-blur-sm sm:left-3 sm:top-3 sm:max-w-[40%] sm:px-2"
          aria-hidden
        >
          <span className="block [text-wrap:balance]">{beforeLabel}</span>
        </div>
        <div
          className="pointer-events-none absolute right-2 top-2 z-10 max-w-[42%] rounded bg-charcoal/75 px-1.5 py-1 text-fluid-caps-tight font-bold uppercase text-white backdrop-blur-sm sm:right-3 sm:top-3 sm:max-w-[40%] sm:px-2"
          aria-hidden
        >
          <span className="block [text-wrap:balance]">{afterLabel}</span>
        </div>

        <motion.div
          role="slider"
          aria-label="Compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
          tabIndex={0}
          className="absolute left-0 top-0 z-20 flex h-full cursor-ew-resize touch-none outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          style={{
            width: HIT_W,
            x,
          }}
          drag={trackW > 0 ? "x" : false}
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={{ left: dragMin, right: dragMax }}
          onDragStart={() => setHintDismissed(true)}
          onKeyDown={onKey}
        >
          {/* Full-height divider: sharp 1px bar, centered in hit strip */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
            aria-hidden
          />
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-cream/95 text-ink shadow-card">
            <GripVertical className="h-5 w-5 text-neutral-500" strokeWidth={1.75} aria-hidden />
          </div>
        </motion.div>

        <AnimatePresence>
          {!hintDismissed ? (
            <motion.p
              key="drag-hint"
              initial={{ opacity: 0.85 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="pointer-events-none absolute bottom-3 left-1/2 z-[15] max-w-[90%] -translate-x-1/2 rounded bg-charcoal/80 px-3 py-1.5 text-center text-fluid-caps-tight font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm"
            >
              Drag to compare
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
      {caption ? (
        <figcaption className="text-center text-fluid-caption font-medium uppercase text-neutral-500 [text-wrap:pretty]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
