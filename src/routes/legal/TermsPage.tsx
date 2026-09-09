import { brand } from "@/config/brand";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Reveal } from "@/motion/Reveal";

export function TermsPage() {
  usePageMeta({
    title: `Terms of Service | ${brand.name}`,
    description: `The terms that govern appointments, payments, and use of ${brand.name}'s website.`,
    path: "/terms",
  });

  return (
    <main id="main" className="min-w-0 bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-section">
        <div className="mx-auto min-w-0 max-w-3xl px-page">
          <Reveal>
            <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">Legal</p>
            <h1 className="mt-6 font-display text-fluid-page-title font-medium tracking-[-0.02em] text-ink [text-wrap:balance]">
              Terms of Service
            </h1>
            <p className="mt-6 text-fluid-body font-light text-neutral-600">
              Last updated: {new Date().getFullYear()}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto min-w-0 max-w-3xl space-y-8 px-page text-fluid-body font-light text-neutral-600 [text-wrap:pretty]">
          <div>
            <h2 className="font-display text-fluid-card-title font-medium text-ink">Appointments</h2>
            <p className="mt-3">
              Consultations and treatments at {brand.name} are by appointment only.
              Please arrive on time so we can give you our full attention—late
              arrivals may need to reschedule to protect the next guest's appointment.
            </p>
          </div>
          <div>
            <h2 className="font-display text-fluid-card-title font-medium text-ink">Cancellations</h2>
            <p className="mt-3">
              We ask for at least 24 hours' notice to cancel or reschedule. This lets
              us offer the slot to another client. Repeated no-shows or late
              cancellations may require a deposit for future bookings.
            </p>
          </div>
          <div>
            <h2 className="font-display text-fluid-card-title font-medium text-ink">Pricing &amp; payment</h2>
            <p className="mt-3">
              Pricing for series and packages is confirmed in writing before you
              commit to a plan. Prices displayed on this website are estimates and
              may vary based on treatment area and your consultation.
            </p>
          </div>
          <div>
            <h2 className="font-display text-fluid-card-title font-medium text-ink">Results</h2>
            <p className="mt-3">
              Outcomes vary by individual and treatment type. We share realistic
              expectations at your consultation and throughout your plan, and no
              specific result is guaranteed.
            </p>
          </div>
          <div>
            <h2 className="font-display text-fluid-card-title font-medium text-ink">Website use</h2>
            <p className="mt-3">
              This website is provided for informational purposes. Content on it does
              not constitute medical advice—please discuss your health history and
              goals with us directly before starting any treatment.
            </p>
          </div>
          <div>
            <h2 className="font-display text-fluid-card-title font-medium text-ink">Contact</h2>
            <p className="mt-3">
              Questions about these terms? Reach us at {brand.address.line1},{" "}
              {brand.address.line2}, by phone at {brand.phoneDisplay}, or by email at{" "}
              <a href={`mailto:${brand.email}`} className="text-accent underline-offset-4 hover:underline">
                {brand.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
