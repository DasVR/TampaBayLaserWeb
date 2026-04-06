import { paths } from "@/config/brand";
import { SmartLink } from "@/shell/SmartLink";

export function DualNotes() {
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
          <p className="mt-5 text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
            Honest FAQs, pre-care checklists, and treatment explainers—swap this
            block for a WordPress posts loop when you publish.
          </p>
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
            Seasonal events and Q&amp;A nights post here first—embed your
            calendar plugin without changing this layout grid.
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
