import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { brand, navItems, offerings, paths } from "@/config/brand";
import { SmartLink } from "@/shell/SmartLink";

const legal = [
  { label: "Privacy", to: "#privacy" },
  { label: "Terms", to: "#terms" },
  { label: "Sitemap", to: "/sitemap.xml" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-charcoal py-section text-white">
      <div className="mx-auto grid min-w-0 max-w-6xl gap-12 px-page md:grid-cols-2 md:gap-14 lg:grid-cols-4 lg:gap-12">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-2.5">
            <motion.span
              className="h-2 w-2 shrink-0 rounded-full bg-accent"
              whileHover={{ scale: 1.2 }}
            />
            <span className="font-display text-fluid-subhead font-semibold uppercase tracking-[0.18em] text-white [text-wrap:balance]">
              {brand.name}
            </span>
          </div>
          <p className="mt-5 text-fluid-body font-light text-white/65 [text-wrap:pretty]">
            {brand.tagline}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
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
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 text-white/75"
                whileHover={{ y: -3, borderColor: "rgba(220,193,108,0.65)", color: "#dcc16c" }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="text-fluid-caps-wide font-bold uppercase text-accent">Services</h3>
          <ul className="mt-5 space-y-3">
            {offerings.map((s) => (
              <li key={s.slug} className="min-w-0 break-words">
                <SmartLink
                  to={paths.services}
                  className="text-fluid-body font-light text-white/65 transition-colors hover:text-white"
                >
                  {s.title}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h3 className="text-fluid-caps-wide font-bold uppercase text-accent">Explore</h3>
          <ul className="mt-5 space-y-3">
            {navItems.map((l) => (
              <li key={l.to} className="min-w-0">
                <SmartLink
                  to={l.to}
                  className="text-fluid-body font-light text-white/65 transition-colors hover:text-white"
                >
                  {l.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h3 className="text-fluid-caps-wide font-bold uppercase text-accent">Contact</h3>
          <ul className="mt-5 space-y-5 text-fluid-body font-light text-white/65">
            <li className="flex min-w-0 gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
              <span className="min-w-0 break-words">
                {brand.address.line1}
                <br />
                {brand.address.line2}
              </span>
            </li>
            <li className="flex min-w-0 items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
              <a href={`tel:${brand.phoneTel}`} className="break-all tabular-nums hover:text-white sm:break-normal">
                {brand.phoneDisplay}
              </a>
            </li>
            <li className="flex min-w-0 items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
              <a href={`mailto:${brand.email}`} className="min-w-0 break-all hover:text-white">
                {brand.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="text-fluid-stat-label font-bold uppercase tracking-[0.24em] text-white/35">
              Hours
            </p>
            <ul className="mt-3 space-y-1.5 text-fluid-body text-white/55">
              {brand.hours.map((h) => (
                <li key={h} className="[text-wrap:balance]">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex min-w-0 max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 px-page pt-10 text-fluid-body text-white/40 md:mt-16 md:flex-row">
        <p className="text-center [text-wrap:balance] md:text-left">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <nav aria-label="Legal" className="flex flex-wrap justify-center gap-6 md:gap-8">
          {legal.map((x) => (
            <a key={x.label} href={x.to} className="shrink-0 transition-colors hover:text-white">
              {x.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
