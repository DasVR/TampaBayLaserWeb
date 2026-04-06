import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BookLink } from "@/shell/BookLink";

/** Fixed bottom CTA on small screens after scroll — does not replace header actions; adds persistent booking access while scrolling. */
export function MobileBookingBar() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => {
      setIsDesktop(mq.matches);
      if (mq.matches) setShow(false);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (isDesktop) return;
    const onScroll = () => setShow(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  if (isDesktop) return null;

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          role="complementary"
          aria-label="Book a consultation"
          className="fixed inset-x-0 bottom-0 z-[190] border-t border-white/25 bg-accent shadow-[0_-8px_32px_-12px_rgba(34,34,34,0.22)] lg:hidden"
          style={{
            paddingBottom: "max(0.65rem, env(safe-area-inset-bottom, 0px))",
          }}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        >
          <div className="mx-auto max-w-6xl px-page py-2.5">
            <BookLink className="flex w-full items-center justify-center gap-2 py-3 text-center text-fluid-caps font-bold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90">
              Book a free consultation
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden strokeWidth={2.25} />
            </BookLink>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
