import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";
import { paths } from "@/config/brand";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

export function EventsPage() {
  return (
    <main id="main" className="min-h-[60vh] min-w-0 bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-section">
        <div className="mx-auto min-w-0 max-w-4xl px-page">
          <Reveal>
            <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">Events</p>
            <h1 className="mt-6 font-display text-fluid-page-title font-medium tracking-[-0.02em] text-ink [text-wrap:balance]">
              On-site nights &amp; <em className="italic text-accent">open houses</em>.
            </h1>
            <p className="mt-6 text-fluid-body-lg font-light text-neutral-600 [text-wrap:pretty]">
              Seasonal specials and community Q&amp;As publish here—drop in The
              Events Calendar shortcode or block without redesigning this page.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-section">
        <motion.div
          className="mx-auto flex min-w-0 max-w-lg flex-col items-center rounded-xl border border-dashed border-[#e4e4e4] bg-white px-page py-12 text-center sm:px-8 sm:py-16"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <CalendarClock className="h-10 w-10 shrink-0 text-accent" strokeWidth={1.25} />
          <p className="mt-6 font-display text-fluid-subhead text-ink [text-wrap:balance]">Nothing scheduled just yet</p>
          <p className="mt-2 text-fluid-body text-neutral-600 [text-wrap:pretty]">
            Join the newsletter or follow along on Instagram for the next date.
          </p>
          <SmartLink
            to={paths.contact}
            className="mt-8 rounded-md border-2 border-ink px-5 py-3 text-fluid-caps font-bold uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-white sm:px-6"
          >
            Get notified
          </SmartLink>
        </motion.div>
      </section>
    </main>
  );
}
