import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const STRIPS = 11;
const lastIdx = STRIPS - 1;

const easeOut = [0.22, 1, 0.36, 1] as const;
const easeIn = [0.76, 0, 0.24, 1] as const;

type Phase = "boot" | "splash-reveal" | "idle" | "covering" | "revealing";

type CurtainContextValue = {
  requestGo: (to: string) => void;
};

const CurtainContext = createContext<CurtainContextValue | null>(null);

export function useCurtainNav() {
  const ctx = useContext(CurtainContext);
  if (!ctx)
    throw new Error("useCurtainNav must be used within CurtainProvider");
  return ctx;
}

const containerVariants = {
  boot: {},
  "splash-reveal": {
    transition: { staggerChildren: 0.048, delayChildren: 0.06 },
  },
  idle: { transition: {} },
  covering: {
    transition: { staggerChildren: 0.03, delayChildren: 0 },
  },
  revealing: {
    transition: {
      staggerChildren: 0.034,
      staggerDirection: -1,
      delayChildren: 0,
    },
  },
};

/** Vertical strips slide on Y when width ≥ height; stacked bands slide on X when width < height. */
function makeStripVariants(horizontal: boolean) {
  if (horizontal) {
    return {
      boot: { x: "0%", y: 0 },
      "splash-reveal": {
        x: "-100%",
        y: 0,
        transition: { duration: 0.58, ease: easeOut },
      },
      idle: { x: "-100%", y: 0, transition: { duration: 0 } },
      covering: {
        x: "0%",
        y: 0,
        transition: { duration: 0.4, ease: easeIn },
      },
      revealing: {
        x: "-100%",
        y: 0,
        transition: { duration: 0.5, ease: easeOut },
      },
    };
  }
  return {
    boot: { y: "0%", x: 0 },
    "splash-reveal": {
      y: "-100%",
      x: 0,
      transition: { duration: 0.58, ease: easeOut },
    },
    idle: { y: "-100%", x: 0, transition: { duration: 0 } },
    covering: {
      y: "0%",
      x: 0,
      transition: { duration: 0.4, ease: easeIn },
    },
    revealing: {
      y: "-100%",
      x: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };
}

/** True when width < height — use horizontal (X) strip motion; otherwise vertical (Y). */
function subscribeNarrowerThanTall(cb: () => void) {
  const run = () => cb();
  window.addEventListener("resize", run);
  window.addEventListener("orientationchange", run);
  return () => {
    window.removeEventListener("resize", run);
    window.removeEventListener("orientationchange", run);
  };
}

function getNarrowerThanTallSnapshot() {
  return window.innerWidth < window.innerHeight;
}

function getNarrowerThanTallServerSnapshot() {
  return false;
}

function useNarrowerThanTallViewport() {
  return useSyncExternalStore(
    subscribeNarrowerThanTall,
    getNarrowerThanTallSnapshot,
    getNarrowerThanTallServerSnapshot,
  );
}

export function CurtainProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const reduce = useReducedMotion();
  const horizontalStrips = useNarrowerThanTallViewport();
  const stripVariants = useMemo(() => makeStripVariants(horizontalStrips), [horizontalStrips]);
  const [phase, setPhase] = useState<Phase>(reduce ? "idle" : "boot");
  const pending = useRef<string | null>(null);
  const phaseRef = useRef(phase);

  useLayoutEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    if (reduce) return;
    const t = window.setTimeout(() => setPhase("splash-reveal"), 100);
    return () => window.clearTimeout(t);
  }, [reduce]);

  const requestGo = useCallback(
    (to: string) => {
      if (reduce) {
        navigate(to);
        window.scrollTo(0, 0);
        return;
      }
      const path = to.split("#")[0];
      if (path === location.pathname) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      pending.current = to;
      setPhase("covering");
    },
    [location.pathname, navigate, reduce],
  );

  const onStripComplete = useCallback(
    (stripIndex: number) => {
      const p = phaseRef.current;
      const isLastStrip =
        (p === "revealing" && stripIndex === 0) ||
        ((p === "splash-reveal" || p === "covering") && stripIndex === lastIdx);
      if (!isLastStrip) return;

      if (p === "splash-reveal") {
        setPhase("idle");
        return;
      }
      if (p === "covering") {
        const dest = pending.current;
        pending.current = null;
        if (dest) {
          navigate(dest);
          window.scrollTo(0, 0);
        }
        setPhase("revealing");
        return;
      }
      if (p === "revealing") {
        setPhase("idle");
      }
    },
    [navigate],
  );

  const ctx = useMemo(() => ({ requestGo }), [requestGo]);

  return (
    <CurtainContext.Provider value={ctx}>
      {children}
      <motion.div
        role="presentation"
        aria-hidden
        className={cn(
          "fixed inset-0 z-[400] flex",
          horizontalStrips ? "flex-col" : "flex-row",
          phase === "idle" ? "pointer-events-none" : "pointer-events-auto",
        )}
        variants={containerVariants}
        initial="boot"
        animate={phase}
      >
        {Array.from({ length: STRIPS }).map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={stripVariants}
            onAnimationComplete={() => onStripComplete(i)}
            className={cn(
              "relative flex-1 from-cream via-cream to-section",
              horizontalStrips
                ? "origin-left border-t border-ink/[0.04] bg-gradient-to-r first:border-t-0"
                : "origin-top border-l border-ink/[0.04] bg-gradient-to-b first:border-l-0",
            )}
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </motion.div>
    </CurtainContext.Provider>
  );
}
