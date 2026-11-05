import Link from "next/link";

const plans = [
  {
    name: "Hobby",
    price: "Free",
    period: "",
    description: "Perfect for side projects and personal AI agents.",
    highlight: false,
    cta: "Start for free",
    ctaHref: "#contact",
    features: [
      "1 namespace",
      "3 agents",
      "10,000 memories",
      "Semantic search",
      "REST API + API key auth",
      "Community support",
    ],
    missing: ["Team sharing", "Audit log", "SLA", "Priority support"],
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For small teams shipping production AI agents.",
    highlight: true,
    cta: "Request early access",
    ctaHref: "#contact",
    badge: "Most popular",
    features: [
      "5 namespaces",
      "Unlimited agents",
      "500,000 memories",
      "Semantic search",
      "REST API + API key auth",
      "Cross-namespace read permissions",
      "Audit log",
      "Email support",
    ],
    missing: ["Custom SLA", "On-prem option"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams with custom data residency, SLAs, and compliance needs.",
    highlight: false,
    cta: "Talk to us",
    ctaHref: "#contact",
    features: [
      "Unlimited namespaces",
      "Unlimited agents",
      "Unlimited memories",
      "Semantic search",
      "REST API + API key auth",
      "Cross-namespace read permissions",
      "Full audit log",
      "Custom SLA",
      "On-prem / VPC deployment",
      "Dedicated Slack channel",
      "SSO / SAML",
    ],
    missing: [],
  },
];

function Check() {
  return (
    <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function X() {
  return (
    <svg className="w-4 h-4 text-slate-300 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="max-w-xl mx-auto text-lg text-slate-500">
            Start free. Scale as your agents do. No surprise bills.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-600/30 scale-[1.02]"
                  : "bg-white border border-slate-200"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-semibold bg-white text-indigo-600 rounded-full shadow-sm border border-indigo-100">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${plan.highlight ? "text-indigo-200" : "text-slate-500"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-5xl font-black ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm mb-2 ${plan.highlight ? "text-indigo-200" : "text-slate-400"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm ${plan.highlight ? "text-indigo-200" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    {plan.highlight ? (
                      <svg className="w-4 h-4 text-indigo-200 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <Check />
                    )}
                    <span className={plan.highlight ? "text-indigo-100" : "text-slate-700"}>{f}</span>
                  </li>
                ))}
                {plan.missing.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <X />
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          All plans include 99.9% uptime SLA, daily backups, and zero cold-start latency.
        </p>
      </div>
    </section>
  );
}
