'use client';

import { useState } from 'react';
import Link from 'next/link';

const REQUEST_TYPES = [
  { value: 'access', label: 'Right of Access — receive a copy of the personal data we hold about you' },
  { value: 'erasure', label: 'Right to Erasure — request deletion of your personal data' },
  { value: 'rectification', label: 'Right to Rectification — correct inaccurate or incomplete data' },
  { value: 'restriction', label: 'Right to Restriction — restrict how we process your data' },
  { value: 'portability', label: 'Right to Data Portability — receive your data in a machine-readable format' },
  { value: 'objection', label: 'Right to Object — object to processing based on legitimate interests' },
];

export default function DSARPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [requestType, setRequestType] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/dsar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, requestType, details }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch {
      setErrorMsg('Could not submit your request. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-av-slate/50 hover:text-av-slate text-sm transition-colors mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>
        <p className="text-av-cyan text-xs font-bold tracking-widest uppercase mb-3">Legal</p>
        <h1 className="text-4xl font-extrabold text-white mb-3">Data Subject Access Request</h1>
        <p className="text-av-slate/50 text-sm">
          Use this form to exercise your rights under UK GDPR. We will respond within 30 days.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="border-t border-white/5 mb-10" />

        {status === 'success' ? (
          <div className="rounded-2xl border border-av-cyan/20 bg-av-cyan/5 p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-av-cyan/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-av-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-xl mb-2">Request received</h2>
            <p className="text-av-slate text-sm leading-relaxed max-w-md mx-auto">
              We have received your request and will respond to{' '}
              <strong className="text-white/80">{email}</strong> within 30 days.
              If you have any questions in the meantime, email{' '}
              <a href="mailto:contact@ascendantventures.co.uk" className="text-av-cyan hover:underline">
                contact@ascendantventures.co.uk
              </a>.
            </p>
            <Link
              href="/"
              className="inline-block mt-6 text-sm font-semibold text-white bg-av-gradient px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Back to home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-av-slate text-sm leading-relaxed">
              This form applies to personal data processed by{' '}
              <strong className="text-white/80">Ascendant Ventures Ltd</strong> through this
              website (ascendantventures.co.uk). For requests relating to our portfolio products
              (Focused Flow, Aithera Labs), please contact those products directly via their own
              privacy contacts.
            </p>

            {/* Name */}
            <div>
              <label htmlFor="dsar-name" className="block text-av-slate/80 text-xs font-semibold uppercase tracking-wider mb-2">
                Full name <span className="text-av-cyan">*</span>
              </label>
              <input
                id="dsar-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-av-slate/40 focus:outline-none focus:border-av-cyan/50 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="dsar-email" className="block text-av-slate/80 text-xs font-semibold uppercase tracking-wider mb-2">
                Email address <span className="text-av-cyan">*</span>
              </label>
              <input
                id="dsar-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-av-slate/40 focus:outline-none focus:border-av-cyan/50 transition-colors"
              />
              <p className="mt-1.5 text-av-slate/50 text-xs">
                We will send our response to this address.
              </p>
            </div>

            {/* Request type */}
            <div>
              <label htmlFor="dsar-type" className="block text-av-slate/80 text-xs font-semibold uppercase tracking-wider mb-2">
                Type of request <span className="text-av-cyan">*</span>
              </label>
              <select
                id="dsar-type"
                required
                value={requestType}
                onChange={(e) => setRequestType(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-av-cyan/50 transition-colors appearance-none"
                style={{ color: requestType ? 'white' : 'rgba(160, 160, 192, 0.4)' }}
              >
                <option value="" disabled style={{ background: '#0F0F23', color: '#A0A0C0' }}>
                  Select a request type
                </option>
                {REQUEST_TYPES.map((rt) => (
                  <option key={rt.value} value={rt.value} style={{ background: '#0F0F23', color: 'white' }}>
                    {rt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Additional details */}
            <div>
              <label htmlFor="dsar-details" className="block text-av-slate/80 text-xs font-semibold uppercase tracking-wider mb-2">
                Additional details <span className="text-av-slate/40 font-normal normal-case">(optional)</span>
              </label>
              <textarea
                id="dsar-details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Any additional context that will help us locate and process your request..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-av-slate/40 focus:outline-none focus:border-av-cyan/50 transition-colors resize-none"
              />
            </div>

            {/* Error message */}
            {status === 'error' && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                {errorMsg}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto text-sm font-semibold text-white bg-av-gradient px-8 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Submitting…' : 'Submit request'}
            </button>

            <p className="text-av-slate/40 text-xs">
              By submitting this form, you confirm that the information provided is accurate.
              See our{' '}
              <Link href="/privacy" className="text-av-cyan/70 hover:text-av-cyan transition-colors underline underline-offset-2">
                Privacy Policy
              </Link>{' '}
              for details of your rights under UK GDPR.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
