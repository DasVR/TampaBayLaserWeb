import { motion } from "framer-motion";
import { brand, paths } from "@/config/brand";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

const placeholders = [
  { title: "Pre-care that actually protects your barrier", date: "Coming soon" },
  { title: "Laser vs. electrolysis: how we decide together", date: "Coming soon" },
  { title: "What “same specialist every visit” changes", date: "Coming soon" },
] as const;

export function BlogPage() {
  return (
    <main id="main" className="min-h-[60vh] min-w-0 bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-section">
        <div className="mx-auto min-w-0 max-w-4xl px-page">
          <Reveal>
            <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">Blog</p>
            <h1 className="mt-6 font-display text-fluid-page-title font-medium tracking-[-0.02em] text-ink [text-wrap:balance]">
              Straight talk on <em className="italic text-accent">skin</em>.
            </h1>
            <p className="mt-6 text-fluid-body-lg font-light text-neutral-600 [text-wrap:pretty]">
              Articles, FAQs, and after-care notes from the {brand.name} team—wire
              your WordPress loop here when posts go live.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-section">
        <ul className="mx-auto min-w-0 max-w-3xl space-y-4 px-page">
          {placeholders.map((post, i) => (
            <motion.li key={post.title} className="min-w-0" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }}>
              <div className="min-w-0 rounded-lg border border-[#e4e4e4] bg-white p-5 transition-shadow hover:shadow-card sm:p-6">
                <p className="text-fluid-caps font-bold uppercase text-accent">{post.date}</p>
                <h2 className="mt-2 font-display text-fluid-card-title font-medium text-ink [text-wrap:pretty]">{post.title}</h2>
              </div>
            </motion.li>
          ))}
        </ul>
        <p className="mx-auto mt-12 min-w-0 max-w-3xl px-page text-center text-fluid-body text-neutral-500 sm:mt-14 [text-wrap:pretty]">
          <SmartLink to={paths.contact} className="font-semibold text-accent underline-offset-4 hover:underline">
            Ask us anything directly →
          </SmartLink>
        </p>
      </section>
    </main>
  );
}
