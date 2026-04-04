import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { brand, paths } from "@/config/brand";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

export function ContactPage() {
  return (
    <main id="main" className="bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-neutral-500">
              Contact
            </p>
            <h1 className="mt-6 font-display text-[2.75rem] font-medium tracking-[-0.02em] text-ink md:text-[3.25rem]">
              Let’s plan your <em className="italic text-accent">first visit</em>.
            </h1>
            <p className="mt-6 text-lg font-light text-neutral-600">
              Complimentary consultation—bring your questions; we’ll map honest
              next steps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="rounded-xl border border-[#e4e4e4] bg-white p-8 shadow-sm md:p-10">
              <h2 className="font-display text-xl font-medium text-ink">Visit</h2>
              <ul className="mt-6 space-y-5 text-sm font-light text-neutral-600">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    {brand.address.line1}
                    <br />
                    {brand.address.line2}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-accent" />
                  <a href={`tel:${brand.phoneAltTel}`} className="hover:text-ink">
                    {brand.phoneAlt}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-accent" />
                  <a href={`mailto:${brand.email}`} className="hover:text-ink">
                    {brand.email}
                  </a>
                </li>
              </ul>
              <div className="mt-8 border-t border-[#e4e4e4] pt-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Hours
                </p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                  {brand.hours.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <motion.form
            className="rounded-xl border border-[#e4e4e4] bg-section/50 p-8 md:p-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="font-display text-xl font-medium text-ink">Send a note</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Hook this form to WPForms, Gravity, or your inbox endpoint.
            </p>
            <label className="mt-8 block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
              Name
              <input
                name="name"
                type="text"
                className="mt-2 w-full border-0 border-b-2 border-[#e4e4e4] bg-transparent py-2 text-base text-ink outline-none transition-colors focus:border-accent"
                autoComplete="name"
              />
            </label>
            <label className="mt-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
              Email
              <input
                name="email"
                type="email"
                className="mt-2 w-full border-0 border-b-2 border-[#e4e4e4] bg-transparent py-2 text-base text-ink outline-none transition-colors focus:border-accent"
                autoComplete="email"
              />
            </label>
            <label className="mt-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
              Message
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full resize-y border-0 border-b-2 border-[#e4e4e4] bg-transparent py-2 text-base text-ink outline-none transition-colors focus:border-accent"
              />
            </label>
            <motion.button
              type="submit"
              className="mt-10 w-full rounded-md bg-accent py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lift hover:bg-accent-dark md:w-auto md:px-10"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              Submit inquiry
            </motion.button>
            <p className="mt-6 text-center text-xs text-neutral-500 md:text-left">
              Prefer speed?{" "}
              <SmartLink to={paths.services} className="text-accent underline-offset-2 hover:underline">
                Browse services
              </SmartLink>
            </p>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
