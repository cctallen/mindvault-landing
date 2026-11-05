const steps = [
  {
    step: "01",
    title: "Create a namespace",
    description:
      "Sign up and create a namespace for your project. Think of it as your agent's workspace — isolated, secure, and shareable with your team.",
    code: `POST /namespaces
{
  "name": "my-project",
  "description": "Customer support agents"
}`,
  },
  {
    step: "02",
    title: "Register your agents",
    description:
      "Add agents to your namespace and get API keys. Each agent gets its own identity, with the ability to share context across the namespace.",
    code: `POST /namespaces/{id}/agents
{
  "name": "support-bot",
  "description": "Tier-1 support agent"
}
→ { "apiKey": "ams_xxxx" }`,
  },
  {
    step: "03",
    title: "Push and pull memories",
    description:
      "Your agent pushes memories after each session and retrieves relevant context at the start of the next. Simple REST API or our one-line SDK.",
    code: `// Push
PUT /memories { "content": "...", "type": "summary" }

// Retrieve (semantic search)
GET /memories/search?q=user+preferences&limit=5`,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Up and running in minutes
          </h2>
          <p className="max-w-xl mx-auto text-lg text-slate-400">
            No infrastructure to manage. No vector database to set up.
            Just a clean API your agents love.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row gap-8 items-start ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text side */}
              <div className="flex-1 lg:pt-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-black text-indigo-600/30">{s.step}</span>
                  <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed max-w-lg">{s.description}</p>
              </div>

              {/* Code side */}
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/80">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <pre className="p-5 text-sm text-slate-300 font-mono overflow-x-auto leading-relaxed">
                    <code>{s.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
