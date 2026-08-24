"use client";

import { useState } from "react";
import { links } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.emailDisplay);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = links.email;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");
    // Compose mailto link with prefilled subject & body for friction-free sending
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Bashar,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
    );

    setTimeout(() => {
      setStatus("success");
      window.location.href = `mailto:${links.emailDisplay}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex items-baseline gap-4">
          <span
            aria-hidden="true"
            className="font-display text-sm font-semibold text-accent"
          >
            03
          </span>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Get In Touch
          </h2>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-display text-2xl leading-snug font-medium tracking-tight text-balance sm:text-3xl text-ink">
              If you&apos;re building something real-time, media-heavy, or
              mobile-first — let&apos;s connect.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
              Available for full-time senior engineering opportunities, architecture consulting, and high-impact mobile projects.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={links.email}
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition-all hover:bg-accent-deep hover:shadow-md"
              >
                Send Email ✉
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-card px-5 py-3 text-sm font-medium text-ink transition-all hover:border-accent hover:text-accent"
              >
                {copied ? (
                  <>
                    <span className="text-emerald-600 font-semibold">✓ Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <span>Copy email</span>
                    <span className="text-xs text-ink-soft">({links.emailDisplay})</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink transition-all hover:border-accent hover:text-accent"
              >
                <span>LinkedIn Profile</span>
                <span>↗</span>
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink transition-all hover:border-accent hover:text-accent"
              >
                <span>GitHub Profile</span>
                <span>↗</span>
              </a>
            </div>

            {/* Resume Downloads */}
            <div className="mt-10 border-t border-line pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                Download Résumé
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={links.resumePdf}
                  download
                  className="card-shine inline-flex items-center gap-3 rounded-xl border border-line bg-paper-card px-4 py-3 text-sm font-medium text-ink transition-all"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-xs">
                    PDF
                  </span>
                  <span>
                    <span className="block font-medium">Bashar-Albashier.pdf</span>
                    <span className="block text-xs text-ink-soft">Standard print format</span>
                  </span>
                  <span className="text-accent ml-1 font-bold">↓</span>
                </a>

                <a
                  href={links.resumeDocx}
                  download
                  className="card-shine inline-flex items-center gap-3 rounded-xl border border-line bg-paper-card px-4 py-3 text-sm font-medium text-ink transition-all"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 font-bold text-xs">
                    DOCX
                  </span>
                  <span>
                    <span className="block font-medium">Bashar-Albashier-CV.docx</span>
                    <span className="block text-xs text-ink-soft">Editable Word format</span>
                  </span>
                  <span className="text-accent ml-1 font-bold">↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Direct Interactive Message Box */}
          <div className="rounded-2xl border border-line bg-paper-card p-6 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-ink">
              Send a Direct Message
            </h3>
            <p className="mt-1 text-xs text-ink-soft">
              Fill in your details below to open a formatted draft directly.
            </p>

            {status === "success" ? (
              <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center">
                <p className="font-semibold text-emerald-600">Message Draft Prepared!</p>
                <p className="mt-1 text-xs text-ink-soft">
                  Your mail client has been opened to send your inquiry.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFormState({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 text-xs font-medium text-accent underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-ink uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-ink uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-ink uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or opportunity..."
                    className="mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-lg bg-ink py-3 text-sm font-medium text-paper transition-all hover:bg-accent hover:shadow-md disabled:opacity-50"
                >
                  {status === "sending" ? "Opening Mail Client..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
