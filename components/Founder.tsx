'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const highlights = [
  { value: 14, prefix: '', suffix: ' yrs', label: 'ASPCA' },
  { value: 17, prefix: '$', suffix: 'M+', label: 'revenue driven' },
  { value: 3, prefix: '', suffix: '', label: 'ventures built' },
];

function CountUp({
  target,
  prefix = '',
  suffix = '',
  isVisible,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  isVisible: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let raf: number;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, target]);

  return <>{prefix}{value}{suffix}</>;
}

export default function Founder() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="founder" className="py-14 lg:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-light/50 to-transparent pointer-events-none" />

      <div
        ref={sectionRef as React.Ref<HTMLDivElement>}
        className={`relative z-10 max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-av-cyan text-xs font-bold tracking-widest uppercase mb-3">Founder</p>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-8">
          The person behind it.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Photo + stats */}
          <div className="lg:col-span-2 flex flex-col items-start gap-6">
            {/* Photo */}
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl overflow-hidden ring-2 ring-white/10 transition-all duration-300 hover:ring-av-cyan/30 hover:shadow-lg hover:shadow-av-cyan/10">
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
              <p className="text-av-slate/75 text-xs mt-1">Ascendant Ventures Ltd · London</p>
            </div>

            {/* Highlights with counter animation */}
            <div className="grid grid-cols-3 gap-3 w-full">
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`bg-space-mid border border-white/5 rounded-xl p-4 text-center transition-all duration-700 ease-out hover:border-av-cyan/20 hover:-translate-y-0.5 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : '0ms' }}
                >
                  <p className="text-xl font-extrabold gradient-text">
                    <CountUp
                      target={h.value}
                      prefix={h.prefix}
                      suffix={h.suffix}
                      isVisible={isVisible}
                    />
                  </p>
                  <p className="text-av-slate/80 text-xs mt-1 leading-tight">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div
            className={`lg:col-span-3 space-y-5 text-av-slate leading-relaxed transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}
          >
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
                href="mailto:contact@ascendantventures.co.uk"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-all duration-200 border border-white/20 hover:border-av-cyan/40 hover:shadow-md hover:shadow-av-cyan/10 px-5 py-2.5 rounded-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@ascendantventures.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
