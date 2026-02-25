const reasons = [
  { icon: '🤝', label: 'Partnership opportunities' },
  { icon: '💼', label: 'Investment enquiries' },
  { icon: '🧠', label: 'Advisory or collaboration' },
  { icon: '📰', label: 'Press and media' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-14 lg:py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-av-cyan/3 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-av-purple/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-av-cyan text-xs font-bold tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
          Let&apos;s talk.
        </h2>
        <p className="text-av-slate text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Whether you&apos;re an investor, potential partner, or just curious about what we&apos;re building —
          we&apos;re always open to a conversation.
        </p>

        {/* Reason chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {reasons.map((r) => (
            <span
              key={r.label}
              className="flex items-center gap-2 text-sm text-av-slate/80 bg-white/5 border border-white/8 px-4 py-2 rounded-full"
            >
              <span>{r.icon}</span>
              {r.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:contact@ascendantventures.co.uk"
          className="inline-flex items-center gap-3 bg-av-gradient text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-av-purple/20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          contact@ascendantventures.co.uk
        </a>

        <p className="text-av-slate/40 text-sm mt-6">
          Registered in England and Wales · Ascendant Ventures Ltd
        </p>
      </div>
    </section>
  );
}
