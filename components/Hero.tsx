export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-av-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-av-cyan/8 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-24">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 border border-av-cyan/20 bg-av-cyan/5 text-av-cyan text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-av-cyan animate-pulse" />
          Venture Studio
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
          Building ventures{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text">that matter.</span>
        </h1>

        {/* Subhead */}
        <p className="text-av-slate text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          Ascendant Ventures is a founder-led studio creating technology companies at the
          intersection of AI, climate resilience, and inclusive design.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#ventures"
            className="bg-av-gradient text-white font-bold px-8 py-3.5 rounded-full text-base hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-av-purple/25"
          >
            View our ventures
          </a>
          <a
            href="#contact"
            className="border border-white/15 text-white/80 font-semibold px-8 py-3.5 rounded-full text-base hover:bg-white/5 hover:border-white/30 transition-all"
          >
            Get in touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-av-slate/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
