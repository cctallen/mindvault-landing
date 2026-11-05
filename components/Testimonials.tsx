const testimonials = [
  {
    quote:
      "We plugged MindVault into our support pipeline and our agent's first-contact resolution jumped 40%. It finally remembered what customers told it last week.",
    name: "Sarah Chen",
    title: "Head of AI, Lumen AI",
    avatar: "SC",
    color: "bg-violet-600",
  },
  {
    quote:
      "I've tried three other 'memory' solutions. All of them were just wrappers around a Redis cache. MindVault actually understands context — the semantic search is a game changer.",
    name: "Marcus Webb",
    title: "Founder, AutoStack",
    avatar: "MW",
    color: "bg-indigo-600",
  },
  {
    quote:
      "Our agents share a namespace across three time zones. They hand off context seamlessly. It's like they're actually a team now.",
    name: "Priya Nair",
    title: "CTO, Orbit Labs",
    avatar: "PN",
    color: "bg-cyan-600",
  },
  {
    quote:
      "Setup took literally 10 minutes. I had our LangChain agent pushing and pulling memories before my coffee was cold. The docs are excellent.",
    name: "James Kowalski",
    title: "Senior ML Engineer, Peel",
    avatar: "JK",
    color: "bg-emerald-600",
  },
  {
    quote:
      "The access control model is exactly what we needed. Each client gets their own namespace, agents only see what they should, and the audit log keeps compliance happy.",
    name: "Amira Osei",
    title: "Platform Lead, Centify",
    avatar: "AO",
    color: "bg-rose-600",
  },
  {
    quote:
      "We went from 'our agent forgets everything overnight' to 'our agent knows our product better than our junior devs'. Not an exaggeration.",
    name: "Tobias Kraft",
    title: "AI Product Manager, Hive",
    avatar: "TK",
    color: "bg-amber-600",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Loved by agent builders
          </h2>
          <p className="max-w-xl mx-auto text-lg text-slate-500">
            From solo hackers to enterprise teams — everyone's tired of stateless agents.
          </p>
        </div>

        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="break-inside-avoid bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-sm leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
