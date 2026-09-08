import { ArrowRight, Check } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { beforeAfterForService, paths, servicePath } from "@/config/brand";
import { getOffering, getServiceDetail } from "@/content/services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { offeringIcons } from "@/lib/icons";
import { Reveal } from "@/motion/Reveal";
import { BookLink } from "@/shell/BookLink";
import { SmartLink } from "@/shell/SmartLink";

export function ServiceDetailPage() {
  const { slug = "" } = useParams();
  const offering = getOffering(slug);
  const detail = getServiceDetail(slug);

  usePageMeta({
    title: offering
      ? `${offering.title} in Clearwater | Tampa Bay Laser`
      : "Services | Tampa Bay Laser",
    description: offering
      ? `${offering.description} ${offering.pricing}. Serving Clearwater & Tampa Bay.`
      : undefined,
    path: offering ? servicePath(offering.slug) : paths.services,
  });

  if (!offering || !detail) {
    return <Navigate to={paths.services} replace />;
  }

  const Icon = offeringIcons[offering.icon];
  const pairs = beforeAfterForService(offering.slug);

  return (
    <main id="main" className="min-w-0 bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-section">
        <div className="mx-auto min-w-0 max-w-4xl px-page">
          <Reveal>
            <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">
              <SmartLink to={paths.services} className="hover:text-accent">
                Services
              </SmartLink>
              <span className="mx-2 text-neutral-300" aria-hidden>
                /
              </span>
              {offering.title}
            </p>
            <div className="mt-6 flex min-w-0 items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.65} />
              </div>
              <div className="min-w-0">
                <h1 className="font-display text-fluid-page-title font-medium tracking-[-0.02em] text-ink [text-wrap:balance]">
                  {offering.title}
                </h1>
                <p className="mt-4 text-fluid-body-lg font-light text-neutral-600 [text-wrap:pretty]">
                  {detail.headline}
                </p>
                <p className="mt-4 text-fluid-body font-medium text-accent [text-wrap:pretty]">
                  {offering.pricing}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto min-w-0 max-w-3xl space-y-6 px-page text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
          {detail.overview.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e4e4e4] bg-section py-section">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-12 px-page md:grid-cols-2">
          <div>
            <h2 className="font-display text-fluid-subhead font-medium text-ink">Who it’s for</h2>
            <ul className="mt-6 space-y-3">
              {detail.whoItsFor.map((item) => (
                <li key={item} className="flex gap-3 text-fluid-body font-light text-neutral-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  <span className="[text-wrap:pretty]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-fluid-subhead font-medium text-ink">What to expect</h2>
            <ul className="mt-6 space-y-3">
              {detail.whatToExpect.map((item) => (
                <li key={item} className="flex gap-3 text-fluid-body font-light text-neutral-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  <span className="[text-wrap:pretty]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-section" aria-labelledby="precare-heading">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-10 px-page md:grid-cols-2 md:gap-12">
          <div className="rounded-xl border border-[#e4e4e4] bg-white p-6 sm:p-8">
            <h2 id="precare-heading" className="font-display text-fluid-card-title font-medium text-ink">
              Pre-treatment instructions
            </h2>
            <ol className="mt-6 list-decimal space-y-3 pl-5 text-fluid-body font-light text-neutral-600">
              {detail.preCare.map((item) => (
                <li key={item} className="[text-wrap:pretty] pl-1">
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-xl border border-[#e4e4e4] bg-white p-6 sm:p-8">
            <h2 className="font-display text-fluid-card-title font-medium text-ink">
              Post-treatment instructions
            </h2>
            <ol className="mt-6 list-decimal space-y-3 pl-5 text-fluid-body font-light text-neutral-600">
              {detail.postCare.map((item) => (
                <li key={item} className="[text-wrap:pretty] pl-1">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e4e4e4] bg-section py-section" aria-labelledby="ba-detail-heading">
        <div className="mx-auto min-w-0 max-w-6xl px-page">
          <h2
            id="ba-detail-heading"
            className="font-display text-fluid-subhead font-medium text-ink [text-wrap:balance]"
          >
            Before &amp; after
          </h2>
          {pairs.length === 0 ? (
            <p className="mt-6 max-w-2xl text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
              Clinical before-and-after photos for {offering.title.toLowerCase()} are being prepared.
              Ask to see examples at your complimentary consultation, or{" "}
              <SmartLink to={paths.contact} className="font-medium text-accent underline-offset-4 hover:underline">
                contact us
              </SmartLink>
              .
            </p>
          ) : (
            <div className="mt-10 grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pairs.map((p) => (
                <BeforeAfter
                  key={p.id}
                  beforeSrc={p.beforeSrc}
                  afterSrc={p.afterSrc}
                  caption={p.caption}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {detail.faqs.length > 0 ? (
        <section className="py-section">
          <div className="mx-auto min-w-0 max-w-3xl px-page">
            <h2 className="font-display text-fluid-subhead font-medium text-ink">Common questions</h2>
            <dl className="mt-8 space-y-6">
              {detail.faqs.map((f) => (
                <div key={f.q}>
                  <dt className="font-display text-fluid-body font-medium text-ink">{f.q}</dt>
                  <dd className="mt-2 text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      <section className="border-t border-[#e4e4e4] bg-charcoal py-section text-white">
        <div className="mx-auto flex min-w-0 max-w-4xl flex-col items-start gap-6 px-page sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h2 className="font-display text-fluid-subhead font-medium [text-wrap:balance]">
              Ready when you are
            </h2>
            <p className="mt-3 max-w-lg text-fluid-body font-light text-white/65 [text-wrap:pretty]">
              Read about{" "}
              <Link to={paths.about} className="text-accent underline-offset-4 hover:underline">
                Hannah and our approach
              </Link>
              , then book a free consult—pricing confirmed before you commit.
            </p>
          </div>
          <BookLink className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-fluid-caps font-bold uppercase tracking-[0.18em] text-white hover:bg-accent-dark sm:px-7 sm:py-4">
            Book on Fresha
            <ArrowRight className="h-4 w-4" />
          </BookLink>
        </div>
      </section>
    </main>
  );
}
