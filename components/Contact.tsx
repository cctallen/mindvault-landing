"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", use_case: "" });
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    // Simulate submission — replace with real endpoint (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="lg:pt-4">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">
              Get early access
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to give your
              <br />
              agents a memory?
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              We're onboarding early teams personally. Drop us a note and we'll
              get you set up — usually within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "⚡",
                  title: "Fast onboarding",
                  desc: "Personal setup call + full docs. Go live the same day.",
                },
                {
                  icon: "🔒",
                  title: "Your data stays yours",
                  desc: "Fully isolated namespaces. GDPR-friendly. No training on your data.",
                },
                {
                  icon: "💬",
                  title: "Direct access to founders",
                  desc: "Early customers get a dedicated Slack channel with the team.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            {state === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                <p className="text-slate-400">
                  We'll reach out within 24 hours to get you set up. Keep an eye on your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Email <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Company / Project
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme AI"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    What are you building? <span className="text-indigo-400">*</span>
                  </label>
                  <select
                    name="use_case"
                    required
                    value={form.use_case}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition appearance-none"
                  >
                    <option value="" disabled>Select a use case...</option>
                    <option value="customer-support">Customer support agent</option>
                    <option value="coding-assistant">Coding assistant</option>
                    <option value="personal-assistant">Personal AI assistant</option>
                    <option value="multi-agent">Multi-agent system</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Anything else you'd like us to know?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your agent stack, team size, or specific needs..."
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-600/30"
                >
                  {state === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Request early access →"
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  No spam. We'll only reach out about your MindVault access.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
