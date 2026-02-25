import Image from 'next/image';

interface Venture {
  name: string;
  tagline: string;
  description: string;
  url: string | null;
  label: string | null;
  status: string;
  statusColor: string;
  platforms: string[];
  logo: string;
  accent: string;
  accentLight: string;
}

const ventures: Venture[] = [
  {
    name: 'Focused Flow',
    tagline: 'Walk Smarter. Know Your ADHD Better.',
    description:
      'An AI coaching companion for people with ADHD — combining personalised task management, habit tracking, a Pomodoro focus timer, and a conversational AI coach into one seamless app. Built for the way ADHD brains actually work.',
    url: 'https://focusedflow.io',
    label: 'focusedflow.io',
    status: 'Pending Approval',
    statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    platforms: ['iOS', 'Android'],
    logo: '/fftransfinal.png',
    accent: '#0d9488',
    accentLight: 'rgba(13,148,136,0.12)',
  },
  {
    name: 'Aithera Labs',
    tagline: 'Real-time flood intelligence for the UK.',
    description:
      'A flood prediction and monitoring platform that turns open Environment Agency data into 24-hour risk assessments, interactive dashboards, and economic impact modelling — serving local authorities, councils, and emergency services.',
    url: 'https://aitheralabs.co.uk',
    label: 'aitheralabs.co.uk',
    status: 'Live · Testing',
    statusColor: 'text-av-cyan bg-av-cyan/10 border-av-cyan/20',
    platforms: ['Web'],
    logo: '/aitheratransfinal.png',
    accent: '#00D4FF',
    accentLight: 'rgba(0,212,255,0.10)',
  },
  {
    name: 'Paws & Pace',
    tagline: 'Walk Smarter. Know Your Dog Better.',
    description:
      'GPS walk tracking, AI-powered breed detection from a photo, live bathroom break markers on the map, and personalised wellness insights after every outing. Everything a dog owner needs from leash clip to front door.',
    url: null,
    label: null,
    status: 'Pending Approval',
    statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    platforms: ['iOS', 'Android'],
    logo: '/paptransfinal.png',
    accent: '#F97316',
    accentLight: 'rgba(249,115,22,0.12)',
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="py-14 lg:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-av-purple/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-av-cyan text-xs font-bold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Our ventures
          </h2>
          <p className="text-av-slate text-lg max-w-xl leading-relaxed">
            Three products. Three underserved problems. Built from scratch by the same founding team.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((v) => (
            <div
              key={v.name}
              className="group relative rounded-2xl p-px overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${v.accent}30, rgba(255,255,255,0.04))`,
              }}
            >
              <div className="relative bg-space-mid rounded-2xl p-7 h-full flex flex-col">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6 gap-3">
                  {/* Logo icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5"
                    style={{ background: v.accentLight }}
                  >
                    <Image
                      src={v.logo}
                      alt={v.name}
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Badges */}
                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    <span className={`flex items-center gap-1.5 text-xs font-semibold border px-2.5 py-1 rounded-full ${v.statusColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {v.status}
                    </span>
                  </div>
                </div>

                {/* Platform tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {v.platforms.map((p) => (
                    <span
                      key={p}
                      className="text-xs font-medium text-av-slate/60 bg-white/5 border border-white/8 px-2 py-0.5 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1.5">{v.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: v.accent }}>
                  {v.tagline}
                </p>
                <p className="text-av-slate text-sm leading-relaxed flex-1 mb-7">
                  {v.description}
                </p>

                {/* Link */}
                {v.url && v.label ? (
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-xs font-medium text-av-slate/40 uppercase tracking-widest">
                    Website coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
