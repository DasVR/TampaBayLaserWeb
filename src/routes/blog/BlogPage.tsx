import { motion } from "framer-motion";
import { blogPath } from "@/config/brand";
import { getRecentPosts } from "@/content/blog";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

export function BlogPage() {
  const posts = getRecentPosts(20);

  usePageMeta({
    title: "Skin Education Blog | Tampa Bay Laser | Clearwater",
    description:
      "Pre-care tips, laser vs electrolysis guidance, and clinic notes from Tampa Bay Laser—published monthly for Clearwater & Tampa Bay clients.",
    path: "/blog",
  });

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
              Articles, FAQs, and after-care notes from the Tampa Bay Laser team—updated about once a
              month.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-section">
        <ul className="mx-auto min-w-0 max-w-3xl space-y-4 px-page">
          {posts.map((post, i) => (
            <motion.li
              key={post.slug}
              className="min-w-0"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <SmartLink
                to={blogPath(post.slug)}
                className="block min-w-0 rounded-lg border border-[#e4e4e4] bg-white p-5 transition-shadow hover:shadow-card sm:p-6"
              >
                <p className="text-fluid-caps font-bold uppercase text-accent">{post.dateLabel}</p>
                <h2 className="mt-2 font-display text-fluid-card-title font-medium text-ink [text-wrap:pretty]">
                  {post.title}
                </h2>
                <p className="mt-3 text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-fluid-caps font-bold uppercase tracking-[0.18em] text-accent">
                  Read article →
                </p>
              </SmartLink>
            </motion.li>
          ))}
        </ul>
      </section>
    </main>
  );
}
