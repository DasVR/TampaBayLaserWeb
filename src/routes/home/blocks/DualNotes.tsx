import { blogPath, paths } from "@/config/brand";
import { getRecentPosts } from "@/content/blog";
import { SmartLink } from "@/shell/SmartLink";

export function DualNotes() {
  const posts = getRecentPosts(3);

  return (
    <section
      className="border-t border-[#e4e4e4] bg-section py-section"
      aria-label="Blog and events"
    >
      <div className="mx-auto grid min-w-0 max-w-6xl gap-12 px-page md:grid-cols-2 md:gap-16 lg:gap-20">
        <div className="min-w-0">
          <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">Journal</p>
          <h2 className="mt-5 font-display text-fluid-subhead font-medium tracking-[-0.02em] text-ink [text-wrap:balance]">
            Skin education, on your terms
          </h2>
          <ul className="mt-6 space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <SmartLink
                  to={blogPath(post.slug)}
                  className="group block min-w-0 rounded-md border border-transparent py-1 transition-colors hover:border-[#e4e4e4] hover:bg-cream/80"
                >
                  <p className="text-fluid-caps font-bold uppercase text-accent">{post.dateLabel}</p>
                  <p className="mt-1 font-display text-fluid-body font-medium text-ink group-hover:text-accent [text-wrap:pretty]">
                    {post.title}
                  </p>
                </SmartLink>
              </li>
            ))}
          </ul>
          <SmartLink
            to={paths.blog}
            className="mt-6 inline-flex text-fluid-caps font-bold uppercase tracking-[0.2em] text-accent underline-offset-8 hover:underline"
          >
            Visit the blog →
          </SmartLink>
        </div>
        <div className="min-w-0">
          <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">Events</p>
          <h2 className="mt-5 font-display text-fluid-subhead font-medium tracking-[-0.02em] text-ink [text-wrap:balance]">
            Open houses &amp; specials
          </h2>
          <p className="mt-5 text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
            We host seasonal specials and community Q&amp;As by appointment. Follow us on Instagram
            or get in touch to hear about the next date.
          </p>
          <SmartLink
            to={paths.events}
            className="mt-6 inline-flex text-fluid-caps font-bold uppercase tracking-[0.2em] text-accent underline-offset-8 hover:underline"
          >
            See upcoming events →
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
