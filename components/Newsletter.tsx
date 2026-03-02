'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, gdprConsent }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong.');
        setStatus('error');
      } else {
        setStatus('success');
        setEmail('');
        setName('');
        setGdprConsent(false);
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-av-purple/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-av-cyan text-xs font-bold tracking-widest uppercase mb-3">Newsletter</p>

        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Portfolio updates.{' '}
          <span className="gradient-text">Once a month.</span>
        </h2>

        <p className="text-av-slate text-base leading-relaxed mb-8 max-w-lg mx-auto">
          Product launches, funding milestones, and what we&apos;re building next — delivered
          to your inbox on the first Tuesday of each month.
        </p>

        {status === 'success' ? (
          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-2xl px-6 py-4">
            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-400 font-semibold text-sm">Check your inbox to confirm your subscription.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
            <input
              type="text"
              placeholder="First name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-space-mid border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-av-slate/50 focus:outline-none focus:border-av-purple/50 transition-colors"
              disabled={status === 'loading'}
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-space-mid border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-av-slate/50 focus:outline-none focus:border-av-purple/50 transition-colors"
              disabled={status === 'loading'}
            />

            {/* UK GDPR consent checkbox */}
            <label className="flex items-start gap-3 cursor-pointer text-left mt-1">
              <input
                type="checkbox"
                checked={gdprConsent}
                onChange={(e) => {
                  setGdprConsent(e.target.checked);
                  if (status === 'error') { setStatus('idle'); setErrorMsg(''); }
                }}
                required
                className="mt-0.5 w-4 h-4 flex-shrink-0 accent-av-purple cursor-pointer"
                disabled={status === 'loading'}
              />
              <span className="text-xs text-av-slate/75 leading-relaxed">
                I would like to receive the Ascendant Ventures monthly newsletter with portfolio updates,
                product launches, and company news. I understand I can unsubscribe at any time. We process
                your personal data in accordance with our{' '}
                <a href="/privacy" className="text-av-cyan hover:text-white transition-colors underline">
                  Privacy Policy
                </a>. *
              </span>
            </label>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-av-gradient text-white font-bold px-7 py-3 rounded-full text-sm hover:opacity-90 transition-all hover:scale-105 disabled:opacity-50 disabled:scale-100 mt-1"
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-3 text-red-400 text-sm">{errorMsg}</p>
        )}

        <p className="mt-4 text-av-slate/60 text-xs">
          * Required. You will receive a confirmation email — please click the link to activate your subscription.
        </p>
      </div>
    </section>
  );
}
