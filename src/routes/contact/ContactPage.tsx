import { type FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { brand, integrations, paths } from "@/config/brand";
import { Reveal } from "@/motion/Reveal";
import { BookLink } from "@/shell/BookLink";
import { SmartLink } from "@/shell/SmartLink";

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formspreeEndpoint) {
      setErrorMessage("Contact form is not configured. Set VITE_FORMSPREE_ENDPOINT for this build.");
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage(null);

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
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  return (
    <main id="main" className="bg-cream">
      <section className="border-b border-[#e4e4e4] bg-section py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-neutral-500">
              Contact
            </p>
            <h1 className="mt-6 font-display text-[2.75rem] font-medium tracking-[-0.02em] text-ink md:text-[3.25rem]">
              Let’s plan your <em className="italic text-accent">first visit</em>.
            </h1>
            <p className="mt-6 text-lg font-light text-neutral-600">
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

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="rounded-xl border border-[#e4e4e4] bg-white p-8 shadow-sm md:p-10">
              <h2 className="font-display text-xl font-medium text-ink">Visit</h2>
              <ul className="mt-6 space-y-5 text-sm font-light text-neutral-600">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    {brand.address.line1}
                    <br />
                    {brand.address.line2}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-accent" />
                  <a href={`tel:${brand.phoneTel}`} className="hover:text-ink">
                    {brand.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-accent" />
                  <a href={`mailto:${brand.email}`} className="hover:text-ink">
                    {brand.email}
                  </a>
                </li>
              </ul>
              <div className="mt-8 border-t border-[#e4e4e4] pt-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Hours
                </p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                  {brand.hours.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 text-sm text-neutral-600">
                <BookLink className="font-semibold text-accent underline-offset-4 hover:underline">
                  Book online via Fresha
                </BookLink>{" "}
                — or send a message here for questions.
              </p>
            </div>
          </Reveal>

          <motion.form
            className="rounded-xl border border-[#e4e4e4] bg-section/50 p-8 md:p-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            action={formspreeEndpoint || undefined}
            method="POST"
          >
            <h2 className="font-display text-xl font-medium text-ink">Send a note</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Messages go to our inbox via Formspree. In WordPress, point this form action to WPForms,
              Gravity Forms, or the same endpoint.
            </p>

            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden />

            <label className="mt-8 block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
              Name
              <input
                name="name"
                type="text"
                required
                disabled={status === "submitting"}
                className="mt-2 w-full border-0 border-b-2 border-[#e4e4e4] bg-transparent py-2 text-base text-ink outline-none transition-colors focus:border-accent disabled:opacity-50"
                autoComplete="name"
              />
            </label>
            <label className="mt-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
              Email
              <input
                name="email"
                type="email"
                required
                disabled={status === "submitting"}
                className="mt-2 w-full border-0 border-b-2 border-[#e4e4e4] bg-transparent py-2 text-base text-ink outline-none transition-colors focus:border-accent disabled:opacity-50"
                autoComplete="email"
              />
            </label>
            <label className="mt-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
              Message
              <textarea
                name="message"
                rows={4}
                required
                disabled={status === "submitting"}
                className="mt-2 w-full resize-y border-0 border-b-2 border-[#e4e4e4] bg-transparent py-2 text-base text-ink outline-none transition-colors focus:border-accent disabled:opacity-50"
              />
            </label>

            {status === "success" ? (
              <p className="mt-8 rounded-md border border-accent/30 bg-cream px-4 py-3 text-sm text-ink" role="status">
                Thanks — we&apos;ll reply soon. Need an appointment?{" "}
                <a
                  href={integrations.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  Book on Fresha
                </a>
                .
              </p>
            ) : null}
            {status === "error" && errorMessage ? (
              <p className="mt-8 text-sm text-red-700" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              className="mt-10 w-full rounded-md bg-accent py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lift hover:bg-accent-dark disabled:opacity-60 md:w-auto md:px-10"
              whileHover={status === "submitting" ? undefined : { y: -2 }}
              whileTap={status === "submitting" ? undefined : { scale: 0.99 }}
            >
              {status === "submitting" ? "Sending…" : "Submit inquiry"}
            </motion.button>
            <p className="mt-6 text-center text-xs text-neutral-500 md:text-left">
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
