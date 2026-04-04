import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";
import { paths } from "@/config/brand";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

export function EventsPage() {
  return (
    <main id="main" className="min-h-[60vh] bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-neutral-500">
              Events
            </p>
            <h1 className="mt-6 font-display text-[2.75rem] font-medium tracking-[-0.02em] text-ink md:text-[3.25rem]">
              On-site nights &amp; <em className="italic text-accent">open houses</em>.
            </h1>
            <p className="mt-6 text-lg font-light text-neutral-600">
              Seasonal specials and community Q&amp;As publish here—drop in The
              Events Calendar shortcode or block without redesigning this page.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <motion.div
          className="mx-auto flex max-w-lg flex-col items-center rounded-xl border border-dashed border-[#e4e4e4] bg-white px-8 py-16 text-center"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <CalendarClock className="h-10 w-10 text-accent" strokeWidth={1.25} />
          <p className="mt-6 font-display text-xl text-ink">Nothing scheduled just yet</p>
          <p className="mt-2 text-sm text-neutral-600">
            Join the newsletter or follow along on Instagram for the next date.
          </p>
          <SmartLink
            to={paths.contact}
            className="mt-8 rounded-md border-2 border-ink px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-white"
          >
            Get notified
          </SmartLink>
        </motion.div>
      </section>
    </main>
  );
}
