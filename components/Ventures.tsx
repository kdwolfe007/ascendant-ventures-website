const ventures = [
  {
    name: 'Focused Flow',
    tagline: 'ADHD coaching powered by AI.',
    description:
      'An AI coaching companion for people with ADHD — combining personalised task management, habit tracking, a Pomodoro focus timer, and a conversational AI coach into one seamless app. Built for the way ADHD brains actually work.',
    url: 'https://focusedflow.io',
    label: 'focusedflow.io',
    status: 'Live',
    platforms: ['iOS', 'Android'],
    accent: '#7B2FF7',
    accentLight: 'rgba(123,47,247,0.12)',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="#7B2FF7" strokeWidth="2" />
        <circle cx="16" cy="16" r="7" fill="rgba(123,47,247,0.2)" />
        <circle cx="16" cy="16" r="3" fill="#7B2FF7" />
      </svg>
    ),
  },
  {
    name: 'Aithera Labs',
    tagline: 'Real-time flood intelligence for the UK.',
    description:
      'A flood prediction and monitoring platform that turns open Environment Agency data into 24-hour risk assessments, interactive dashboards, and economic impact modelling. Serving local authorities, councils, and emergency services.',
    url: 'https://aitheralabs.co.uk',
    label: 'aitheralabs.co.uk',
    status: 'Live',
    platforms: ['Web'],
    accent: '#00D4FF',
    accentLight: 'rgba(0,212,255,0.10)',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 20 Q8 12 16 16 Q24 20 28 12"
          stroke="#00D4FF"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M4 24 Q8 16 16 20 Q24 24 28 16"
          stroke="rgba(0,212,255,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="16" cy="16" r="2.5" fill="#00D4FF" />
      </svg>
    ),
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="py-24 lg:py-32 relative">
      {/* Section glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-av-purple/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-av-cyan text-xs font-bold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Our ventures
          </h2>
          <p className="text-av-slate text-lg max-w-xl leading-relaxed">
            Two live products. Two underserved problems. Built from scratch by the same founding team.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ventures.map((v) => (
            <div
              key={v.name}
              className="group relative rounded-2xl p-px overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${v.accent}30, rgba(255,255,255,0.04))`,
              }}
            >
              <div className="relative bg-space-mid rounded-2xl p-8 h-full flex flex-col">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: v.accentLight }}
                  >
                    {v.icon}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap justify-end">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {v.status}
                    </span>
                    {v.platforms.map((p) => (
                      <span
                        key={p}
                        className="text-xs font-medium text-av-slate/70 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2">{v.name}</h3>
                <p className="font-semibold mb-3" style={{ color: v.accent }}>
                  {v.tagline}
                </p>
                <p className="text-av-slate text-sm leading-relaxed flex-1 mb-8">
                  {v.description}
                </p>

                {/* Link */}
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                  style={{ color: v.accent }}
                >
                  {v.label}
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
