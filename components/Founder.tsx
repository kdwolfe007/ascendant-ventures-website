import Image from 'next/image';

const highlights = [
  { metric: '14 yrs', label: 'ASPCA' },
  { metric: '$17M+', label: 'revenue driven' },
  { metric: '3', label: 'ventures built' },
];

export default function Founder() {
  return (
    <section id="founder" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-light/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-av-cyan text-xs font-bold tracking-widest uppercase mb-3">Founder</p>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-12">
          The person behind it.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Photo + stats */}
          <div className="lg:col-span-2 flex flex-col items-start gap-8">
            {/* Photo */}
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl overflow-hidden ring-2 ring-white/10">
                <Image
                  src="/myphoto.webp"
                  alt="Kishia Wolfe"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-green-400 border-2 border-deep-space" />
            </div>

            {/* Name + title */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Kishia Wolfe</h3>
              <p className="text-av-cyan font-semibold text-sm">Founder &amp; CEO</p>
              <p className="text-av-slate/60 text-xs mt-1">Ascendant Ventures Ltd · London</p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-3 w-full">
              {highlights.map((h) => (
                <div key={h.label} className="bg-space-mid border border-white/5 rounded-xl p-4 text-center">
                  <p className="text-xl font-extrabold gradient-text">{h.metric}</p>
                  <p className="text-av-slate/70 text-xs mt-1 leading-tight">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3 space-y-5 text-av-slate leading-relaxed">
            <p>
              Kishia spent 14 years at the ASPCA building and scaling revenue operations — driving
              more than $17M in incremental revenue through technology, process design, and
              cross-functional leadership. She later served as COO at Targeted Technology Solutions
              and held operational roles at the International Rescue Committee.
            </p>
            <p>
              She founded Ascendant Ventures to build the kind of companies she wished existed:
              products that take complex problems seriously and make them accessible to the people
              most affected by them.
            </p>
            <p>
              In under a year, she built three live products from scratch —{' '}
              <a href="https://focusedflow.io" target="_blank" rel="noopener noreferrer" className="text-av-purple hover:text-av-cyan transition-colors font-semibold">Focused Flow</a>,{' '}
              <a href="https://aitheralabs.co.uk" target="_blank" rel="noopener noreferrer" className="text-av-cyan hover:text-white transition-colors font-semibold">Aithera Labs</a>,{' '}
              and <span className="text-orange-400 font-semibold">Paws &amp; Pace</span> — each with working infrastructure, real users, and a clear path to revenue.
            </p>
            <div className="pt-2">
              <a
                href="mailto:hello@ascendantventures.co.uk"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors border border-white/10 hover:border-white/25 px-5 py-2.5 rounded-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@ascendantventures.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
