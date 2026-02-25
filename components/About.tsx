const principles = [
  {
    title: 'Build first.',
    body: 'Ideas without execution are opinions. We ship working products and learn from real users — not market research decks.',
  },
  {
    title: 'Open by default.',
    body: 'Transparency isn\'t a policy, it\'s infrastructure. Our performance data, methodology, and roadmaps are public where possible.',
  },
  {
    title: 'Long-term compounding.',
    body: 'We build for the decade, not the quarter. Patient capital, durable moats, and sustainable growth over short-term metrics.',
  },
  {
    title: 'Underserved by design.',
    body: 'We look for problems that are large, real, and ignored by incumbents — ADHD productivity tools, affordable flood intelligence.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-av-purple/30" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <p className="text-av-cyan text-xs font-bold tracking-widest uppercase mb-3">About</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Founder-led.{' '}
              <span className="gradient-text">Mission-driven.</span>
            </h2>
            <div className="space-y-5 text-av-slate leading-relaxed">
              <p>
                Ascendant Ventures is a studio founded on the belief that the most impactful
                technology companies are built by people who deeply understand the problem —
                not by teams optimising for fundraising optics.
              </p>
              <p>
                We identify gaps where existing solutions are too expensive, too slow, or
                too generic. Then we build targeted, working products and take them to
                market ourselves.
              </p>
              <p>
                Our current portfolio spans ADHD productivity technology and climate
                resilience infrastructure — two sectors where the status quo is failing
                the people who need it most.
              </p>
            </div>
          </div>

          {/* Right — principles */}
          <div className="space-y-4">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="bg-space-mid border border-white/5 rounded-xl p-5 hover:border-av-purple/25 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-av-purple/40 font-mono text-xs mt-1 flex-shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1">{p.title}</h3>
                    <p className="text-av-slate text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
