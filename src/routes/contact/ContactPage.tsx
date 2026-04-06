import { type FormEvent, type PointerEventHandler, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { brand, integrations, paths } from "@/config/brand";
import { hapticImpact } from "@/lib/haptic";
import { Reveal } from "@/motion/Reveal";
import { BookLink } from "@/shell/BookLink";
import { SmartLink } from "@/shell/SmartLink";

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "";

export function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formspreeEndpoint) {
      toast.error("Contact form isn’t configured for this environment.", {
        description: "Set VITE_FORMSPREE_ENDPOINT or call us directly.",
        duration: 5000,
      });
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = (await res.json().catch(() => null)) as { error?: string } | null;

      if (!res.ok) {
        throw new Error(data?.error ?? "Something went wrong. Please call or try again.");
      }
      form.reset();
      toast.success("Thanks — we’ll reply soon.", {
        description: "Need an appointment?",
        duration: 5000,
        action: {
          label: "Book on Fresha",
          onClick: () => window.open(integrations.bookingUrl, "_blank", "noopener,noreferrer"),
        },
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Submission failed.", { duration: 5000 });
    } finally {
      setSubmitting(false);
    }
  }

  const onSubmitPointerDown: PointerEventHandler<HTMLButtonElement> = (e) => {
    if (e.pointerType === "touch") hapticImpact("medium");
  };

  return (
    <main id="main" className="min-w-0 bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-section">
        <div className="mx-auto min-w-0 max-w-4xl px-page">
          <Reveal>
            <p className="text-fluid-eyebrow font-bold uppercase text-neutral-500">Contact</p>
            <h1 className="mt-6 font-display text-fluid-page-title font-medium tracking-[-0.02em] text-ink [text-wrap:balance]">
              Let’s plan your <em className="italic text-accent">first visit</em>.
            </h1>
            <p className="mt-6 text-fluid-body-lg font-light text-neutral-600 [text-wrap:pretty]">
              Complimentary consultation—bring your questions; we’ll map honest
              next steps. Prefer to book now?{" "}
              <BookLink className="font-medium text-accent underline-offset-4 hover:underline">
                Open the schedule
              </BookLink>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-10 px-page lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="min-w-0 rounded-xl border border-[#e4e4e4] bg-white p-6 shadow-sm sm:p-8 md:p-10">
              <h2 className="font-display text-fluid-card-title font-medium text-ink sm:text-xl">Visit</h2>
              <ul className="mt-6 space-y-5 text-fluid-body font-light text-neutral-600">
                <li className="flex min-w-0 gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="min-w-0 break-words">
                    {brand.address.line1}
                    <br />
                    {brand.address.line2}
                  </span>
                </li>
                <li className="flex min-w-0 items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-accent" />
                  <a href={`tel:${brand.phoneTel}`} className="break-all hover:text-ink sm:break-normal">
                    {brand.phoneDisplay}
                  </a>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <a href={`mailto:${brand.email}`} className="min-w-0 break-all hover:text-ink">
                    {brand.email}
                  </a>
                </li>
              </ul>
              <div className="mt-8 border-t border-[#e4e4e4] pt-8">
                <p className="text-fluid-caps font-bold uppercase text-neutral-500">Hours</p>
                <ul className="mt-3 space-y-2 text-fluid-body text-neutral-600">
                  {brand.hours.map((h) => (
                    <li key={h} className="[text-wrap:balance]">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 text-fluid-body text-neutral-600 [text-wrap:pretty]">
                <BookLink className="font-semibold text-accent underline-offset-4 hover:underline">
                  Book online via Fresha
                </BookLink>{" "}
                — or send a message here for questions.
              </p>
            </div>
          </Reveal>

          <motion.form
            className="min-w-0 rounded-xl border border-[#e4e4e4] bg-section/50 p-6 sm:p-8 md:p-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            action={formspreeEndpoint || undefined}
            method="POST"
          >
            <h2 className="font-display text-fluid-card-title font-medium text-ink sm:text-xl">Send a note</h2>
            <p className="mt-2 text-fluid-body text-neutral-600 [text-wrap:pretty]">
              Messages go to our inbox via Formspree. In WordPress, point this form action to WPForms,
              Gravity Forms, or the same endpoint.
            </p>

            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden />

            <label className="mt-8 block text-fluid-caps font-bold uppercase text-neutral-500">
              Name
              <input
                name="name"
                type="text"
                required
                disabled={submitting}
                className="mt-2 w-full min-w-0 border-0 border-b-2 border-[#e4e4e4] bg-transparent py-2 text-fluid-body text-ink outline-none transition-colors focus:border-accent disabled:opacity-50"
                autoComplete="name"
              />
            </label>
            <label className="mt-6 block text-fluid-caps font-bold uppercase text-neutral-500">
              Email
              <input
                name="email"
                type="email"
                required
                disabled={submitting}
                className="mt-2 w-full min-w-0 border-0 border-b-2 border-[#e4e4e4] bg-transparent py-2 text-fluid-body text-ink outline-none transition-colors focus:border-accent disabled:opacity-50"
                autoComplete="email"
              />
            </label>
            <label className="mt-6 block text-fluid-caps font-bold uppercase text-neutral-500">
              Message
              <textarea
                name="message"
                rows={4}
                required
                disabled={submitting}
                className="mt-2 w-full min-w-0 resize-y border-0 border-b-2 border-[#e4e4e4] bg-transparent py-2 text-fluid-body text-ink outline-none transition-colors focus:border-accent disabled:opacity-50"
              />
            </label>

            <motion.button
              type="submit"
              disabled={submitting}
              onPointerDown={onSubmitPointerDown}
              className="mt-10 w-full rounded-md bg-accent py-3.5 text-fluid-caps font-bold uppercase tracking-[0.2em] text-white shadow-lift hover:bg-accent-dark disabled:opacity-60 sm:py-4 md:w-auto md:px-10"
              whileHover={submitting ? undefined : { y: -2 }}
              whileTap={submitting ? undefined : { scale: 0.99 }}
            >
              {submitting ? "Sending…" : "Submit inquiry"}
            </motion.button>
            <p className="mt-6 text-center text-fluid-body text-neutral-500 md:text-left">
              Prefer speed?{" "}
              <SmartLink to={paths.services} className="text-accent underline-offset-2 hover:underline">
                Browse services
              </SmartLink>
            </p>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
