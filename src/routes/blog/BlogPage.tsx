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
    <main id="main" className="min-h-[60vh] bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-neutral-500">
              Blog
            </p>
            <h1 className="mt-6 font-display text-[2.75rem] font-medium tracking-[-0.02em] text-ink md:text-[3.25rem]">
              Straight talk on <em className="italic text-accent">skin</em>.
            </h1>
            <p className="mt-6 text-lg font-light text-neutral-600">
              Articles, FAQs, and after-care notes from the {brand.name} team—wire
              your WordPress loop here when posts go live.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <ul className="mx-auto max-w-3xl space-y-4 px-6 lg:px-8">
          {placeholders.map((post, i) => (
            <motion.li
              key={post.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <div className="rounded-lg border border-[#e4e4e4] bg-white p-6 transition-shadow hover:shadow-card">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  {post.date}
                </p>
                <h2 className="mt-2 font-display text-xl font-medium text-ink">{post.title}</h2>
              </div>
            </motion.li>
          ))}
        </ul>
        <p className="mx-auto mt-14 max-w-3xl px-6 text-center text-sm text-neutral-500 lg:px-8">
          <SmartLink to={paths.contact} className="font-semibold text-accent underline-offset-4 hover:underline">
            Ask us anything directly →
          </SmartLink>
        </p>
      </section>
    </main>
  );
}
