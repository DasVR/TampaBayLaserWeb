import { useEffect, useState } from "react";
import { CalendarDays, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { brand, navItems, paths } from "@/config/brand";
import { cn } from "@/lib/cn";
import { BookLink } from "@/shell/BookLink";
import { CurtainNavLink } from "@/shell/CurtainNavLink";
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
        <div className="mx-auto flex min-h-[3.25rem] min-w-0 max-w-6xl items-center justify-between gap-3 px-page py-3 sm:gap-4 sm:py-3.5">
          <SmartLink
            to={paths.home}
            className="group relative flex min-w-0 max-w-[min(18rem,calc(100vw-10.25rem))] shrink items-center sm:max-w-[min(22rem,calc(100vw-11.5rem))] lg:max-w-[24rem]"
          >
            <span className="inline-flex rounded-md bg-white/95 px-2 py-1 shadow-[0_1px_3px_rgba(34,34,34,0.1)] ring-1 ring-ink/[0.08]">
              <motion.img
                layoutId="brand-logo"
                src="/brand-logo.png"
                alt={brand.name}
                width={359}
                height={203}
                decoding="async"
                className="h-9 w-auto max-w-full object-contain object-left drop-shadow-[0_1px_1px_rgba(34,34,34,0.12)] sm:h-10 lg:h-11"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 450, damping: 24 }}
              />
            </span>
          </SmartLink>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <CurtainNavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "nav-chip relative py-1 text-fluid-caps font-semibold uppercase transition-colors",
                    isActive ? "text-ink" : "text-neutral-500 hover:text-ink",
                  )
                }
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                />
              </CurtainNavLink>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-5">
            <a
              href={`tel:${brand.phoneTel}`}
              className="hidden text-fluid-body font-medium tabular-nums text-ink/90 sm:inline"
            >
              {brand.phoneDisplay}
            </a>
            <motion.div className="hidden shrink-0 lg:block" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <BookLink className="inline-block max-w-[10.5rem] rounded-md bg-accent px-3 py-2.5 text-center text-fluid-caps font-bold uppercase leading-tight text-white shadow-lift sm:max-w-none sm:px-5 sm:py-2.5">
                Book consultation
              </BookLink>
            </motion.div>
            <motion.div className="shrink-0 lg:hidden" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <BookLink
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-white shadow-lift"
                aria-label="Book consultation"
              >
                <CalendarDays className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </BookLink>
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
                  <CurtainNavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-md px-3 py-3 text-fluid-body font-semibold uppercase tracking-[0.18em] [text-wrap:balance] hover:bg-section",
                        isActive ? "bg-section text-ink" : "text-ink",
                      )
                    }
                  >
                    {item.label}
                  </CurtainNavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="mt-4"
              >
                <BookLink
                  className="flex w-full items-center justify-center rounded-md bg-accent px-4 py-3.5 text-center text-fluid-caps font-bold uppercase tracking-[0.18em] text-white shadow-lift"
                  onClick={() => setOpen(false)}
                >
                  Book consultation
                </BookLink>
              </motion.div>
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
