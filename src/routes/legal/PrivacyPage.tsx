import { brand } from "@/config/brand";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Reveal } from "@/motion/Reveal";

export function PrivacyPage() {
  usePageMeta({
    title: `Privacy Policy | ${brand.name}`,
    description: `How ${brand.name} collects, uses, and protects your information.`,
    path: "/privacy",
  });

  return (
    <main id="main" className="min-w-0 bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-section">
        <div className="mx-auto min-w-0 max-w-3xl px-page">
          <Reveal>
            <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">Legal</p>
            <h1 className="mt-6 font-display text-fluid-page-title font-medium tracking-[-0.02em] text-ink [text-wrap:balance]">
              Privacy Policy
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
            <h2 className="font-display text-fluid-card-title font-medium text-ink">Information we collect</h2>
            <p className="mt-3">
              When you contact us through our website, book a consultation, or visit our
              studio, we may collect your name, email address, phone number, and any
              details you share about your treatment interests. We do not sell or rent
              your information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-fluid-card-title font-medium text-ink">How we use it</h2>
            <p className="mt-3">
              We use your information to respond to inquiries, schedule and manage
              appointments, and provide the care you request. Booking requests made
              through our scheduling partner, Fresha, are governed by Fresha's own
              privacy policy in addition to this one.
            </p>
          </div>
          <div>
            <h2 className="font-display text-fluid-card-title font-medium text-ink">Cookies &amp; analytics</h2>
            <p className="mt-3">
              Our website may use basic analytics to understand how visitors use the
              site so we can improve it. This data is aggregated and not used to
              personally identify you.
            </p>
          </div>
          <div>
            <h2 className="font-display text-fluid-card-title font-medium text-ink">Your choices</h2>
            <p className="mt-3">
              You can ask us to update or delete the personal information we hold about
              you at any time by emailing{" "}
              <a href={`mailto:${brand.email}`} className="text-accent underline-offset-4 hover:underline">
                {brand.email}
              </a>{" "}
              or calling{" "}
              <a href={`tel:${brand.phoneTel}`} className="text-accent underline-offset-4 hover:underline">
                {brand.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="font-display text-fluid-card-title font-medium text-ink">Contact</h2>
            <p className="mt-3">
              Questions about this policy? Reach us at {brand.address.line1},{" "}
              {brand.address.line2}, or via the contact details above.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
