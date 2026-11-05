"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly is a 'memory' in MindVault?",
    answer:
      "A memory is any piece of text your agent wants to persist — a user preference, a decision, a summary of a past conversation, a learned fact. You categorize them by type (summary, context, fact) and visibility (public, private, shared). MindVault stores them, indexes them with vector embeddings, and makes them retrievable via semantic search.",
  },
  {
    question: "How is this different from just using a database?",
    answer:
      "You could roll your own — but you'd need to set up Postgres + pgvector, write embedding pipelines, manage API keys per agent, build a namespace/org model, handle memory expiry, and maintain it all. MindVault is that infrastructure, done right, as a managed service. Most teams go from idea to production in under an hour.",
  },
  {
    question: "Which AI frameworks and platforms does MindVault work with?",
    answer:
      "Anything that can make an HTTP request. We have first-class support for OpenClaw (one-command install), LangChain, AutoGen, and CrewAI. We're shipping official SDKs for Python and Node.js in Phase 2. If you use raw OpenAI Assistants or a custom stack, the REST API works perfectly.",
  },
  {
    question: "Is my data shared between customers?",
    answer:
      "No. Namespaces are fully isolated at the data layer. Your agents only ever access memories within namespaces they're authorized for. Cross-namespace read permissions are explicit and opt-in. Enterprise plans support dedicated VPC or on-premises deployments for complete isolation.",
  },
  {
    question: "What happens if I exceed my plan's memory limit?",
    answer:
      "We'll notify you before you hit the limit. Once you exceed it, new writes will be soft-blocked and we'll ask you to upgrade or prune old memories. We won't silently delete your data. You can also set automatic expiry policies per memory type to manage limits proactively.",
  },
  {
    question: "Can multiple agents share the same namespace?",
    answer:
      "Yes — that's one of MindVault's core features. Agents in the same namespace can read public and shared memories from each other. This enables powerful patterns like a team of specialized agents that all share product knowledge, or an agent that hands off context to another mid-workflow.",
  },
  {
    question: "Is there a self-hosted option?",
    answer:
      "On Enterprise plans, yes. We can provide Docker Compose and Kubernetes manifests for on-prem or VPC deployments. The core API is built on .NET 8 + Postgres + Redis, so it runs anywhere. Reach out via the contact form for details.",
  },
  {
    question: "When is the public launch?",
    answer:
      "We're currently in private beta. Early access is available by request — sign up via the contact form and we'll get you onboarded personally. General availability is planned for Q1 2025.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Common questions
          </h2>
          <p className="text-lg text-slate-500">
            Anything else?{" "}
            <a href="#contact" className="text-indigo-600 hover:underline">
              Ask us directly →
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-slate-900 text-sm md:text-base">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
