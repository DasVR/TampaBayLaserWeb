import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { brand, navItems, paths } from "@/config/brand";
import { cn } from "@/lib/cn";
import { SmartLink } from "@/shell/SmartLink";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        layout
        className={cn(
          "sticky top-0 z-[200] border-b bg-cream/90 backdrop-blur-xl transition-colors duration-300",
          scrolled ? "border-[#e4e4e4] shadow-[0_8px_30px_-12px_rgba(34,34,34,0.12)]" : "border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 md:px-6 lg:px-8">
          <SmartLink
            to={paths.home}
            className="group relative flex items-center gap-2.5"
          >
            <motion.span
              layoutId="brand-dot"
              className="inline-block h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_0_3px_rgba(220,193,108,0.35)]"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            />
            <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ink">
              {brand.name}
            </span>
          </SmartLink>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <SmartLink
                key={item.to}
                to={item.to}
                className="nav-chip relative py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500 transition-colors hover:text-ink"
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                />
              </SmartLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <a
              href={`tel:${brand.phoneTel}`}
              className="hidden text-sm font-medium tabular-nums text-ink/90 sm:inline"
            >
              {brand.phoneDisplay}
            </a>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <SmartLink
                to={paths.contact}
                className="inline-block rounded-md bg-accent px-4 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-lift md:px-5"
              >
                Book consultation
              </SmartLink>
            </motion.div>
            <button
              type="button"
              className="rounded-md border border-ink/10 p-2 lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[250] bg-ink/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col gap-1 border-l border-[#e4e4e4] bg-cream p-6 pt-16 shadow-lift"
              aria-label="Mobile primary"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.045 }}
                >
                  <SmartLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink hover:bg-section"
                  >
                    {item.label}
                  </SmartLink>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                href={`tel:${brand.phoneTel}`}
                className="mt-4 px-3 text-sm font-medium tabular-nums text-ink/80"
              >
                {brand.phoneDisplay}
              </motion.a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
