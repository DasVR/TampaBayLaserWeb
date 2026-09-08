import { Navigate, useParams } from "react-router-dom";
import { blogPath, paths } from "@/config/brand";
import { getBlogPost } from "@/content/blog";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Reveal } from "@/motion/Reveal";
import { SmartLink } from "@/shell/SmartLink";

export function BlogPostPage() {
  const { slug = "" } = useParams();
  const post = getBlogPost(slug);

  usePageMeta({
    title: post ? `${post.title} | Tampa Bay Laser` : "Blog | Tampa Bay Laser",
    description: post?.excerpt,
    path: post ? blogPath(post.slug) : paths.blog,
  });

  if (!post) {
    return <Navigate to={paths.blog} replace />;
  }

  return (
    <main id="main" className="min-w-0 bg-cream">
      <article>
        <header className="border-b border-[#e4e4e4] bg-section py-section">
          <div className="mx-auto min-w-0 max-w-3xl px-page">
            <Reveal>
              <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">
                <SmartLink to={paths.blog} className="hover:text-accent">
                  Blog
                </SmartLink>
                <span className="mx-2 text-neutral-300" aria-hidden>
                  /
                </span>
                {post.dateLabel}
              </p>
              <h1 className="mt-6 font-display text-fluid-page-title font-medium tracking-[-0.02em] text-ink [text-wrap:balance]">
                {post.title}
              </h1>
              <p className="mt-8 text-fluid-body-lg font-light text-neutral-700 [text-wrap:pretty]">
                {post.answerLead}
              </p>
            </Reveal>
          </div>
        </header>

        <div className="mx-auto min-w-0 max-w-3xl space-y-10 px-page py-section">
          {post.sections.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]?.slice(0, 24)}>
              {section.heading ? (
                <h2 className="font-display text-fluid-subhead font-medium text-ink [text-wrap:balance]">
                  {section.heading}
                </h2>
              ) : null}
              <div className={section.heading ? "mt-4" : undefined}>
                {section.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="mt-4 text-fluid-body font-light text-neutral-600 first:mt-0 [text-wrap:pretty]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <p className="border-t border-[#e4e4e4] pt-10 text-fluid-body text-neutral-500">
            <SmartLink to={paths.contact} className="font-semibold text-accent underline-offset-4 hover:underline">
              Questions about your plan? Ask us directly →
            </SmartLink>
          </p>
        </div>
      </article>
    </main>
  );
}
