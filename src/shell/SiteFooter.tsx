import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { brand, navItems, offerings, paths } from "@/config/brand";
import { SmartLink } from "@/shell/SmartLink";

const legal = [
  { label: "Privacy", to: "#privacy" },
  { label: "Terms", to: "#terms" },
  { label: "Sitemap", to: "#sitemap" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-charcoal py-20 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <motion.span
              className="h-2 w-2 rounded-full bg-accent"
              whileHover={{ scale: 1.2 }}
            />
            <span className="font-display text-lg font-semibold uppercase tracking-[0.18em]">
              {brand.name}
            </span>
          </div>
          <p className="mt-5 text-sm font-light leading-relaxed text-white/65">
            {brand.tagline}
          </p>
          <div className="mt-7 flex gap-3">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/tampabaylaserfl/", label: "Instagram" },
              { Icon: Facebook, href: "https://www.facebook.com/TampaBayLaserFL", label: "Facebook" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/75"
                whileHover={{ y: -3, borderColor: "rgba(220,193,108,0.65)", color: "#dcc16c" }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {offerings.map((s) => (
              <li key={s.slug}>
                <SmartLink
                  to={paths.services}
                  className="text-sm font-light text-white/65 transition-colors hover:text-white"
                >
                  {s.title}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {navItems.map((l) => (
              <li key={l.to}>
                <SmartLink
                  to={l.to}
                  className="text-sm font-light text-white/65 transition-colors hover:text-white"
                >
                  {l.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">
            Contact
          </h3>
          <ul className="mt-5 space-y-5 text-sm font-light text-white/65">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
              <span>
                {brand.address.line1}
                <br />
                {brand.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
              <a href={`tel:${brand.phoneAltTel}`} className="tabular-nums hover:text-white">
                {brand.phoneAlt}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
              <a href={`mailto:${brand.email}`} className="hover:text-white">
                {brand.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/35">
              Hours
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-white/55">
              {brand.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 pt-10 text-xs text-white/40 md:flex-row lg:px-8">
        <p>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <nav aria-label="Legal" className="flex flex-wrap justify-center gap-8">
          {legal.map((x) => (
            <a key={x.label} href={x.to} className="transition-colors hover:text-white">
              {x.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
