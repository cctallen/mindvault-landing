import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-indigo-300 border border-indigo-500/40 bg-indigo-500/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Now in private beta · Join the waitlist
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
          Give your AI agents
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
            a brain they can keep.
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          MindVault is persistent, shared memory infrastructure for AI agents.
          Your agents remember context across sessions, tools, and teams — no
          more starting from scratch every conversation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="#contact"
            className="px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            Request early access
          </Link>
          <Link
            href="#how-it-works"
            className="px-8 py-3.5 text-base font-semibold text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 rounded-xl transition-all"
          >
            See how it works →
          </Link>
        </div>

        {/* Social proof bar */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-sm text-slate-500 mb-6">Trusted by teams building with</p>
          <div className="flex flex-wrap gap-8 justify-center items-center opacity-50">
            {["OpenClaw", "LangChain", "AutoGen", "CrewAI", "OpenAI Assistants"].map((name) => (
              <span key={name} className="text-slate-400 font-semibold text-sm tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
