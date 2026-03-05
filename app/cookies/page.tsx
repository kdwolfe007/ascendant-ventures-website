import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for the Ascendant Ventures website.',
  alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
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
        <h1 className="text-4xl font-extrabold text-white mb-3">Cookie Policy</h1>
        <p className="text-av-slate/50 text-sm">Last updated: March 2026</p>
      </div>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="border-t border-white/5 mb-10" />

        <div className="space-y-10 text-av-slate leading-relaxed text-sm">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">1. What are cookies</h2>
            <p>
              Cookies are small text files that a website places on your device when you visit.
              They are widely used to make websites function, improve performance, and provide
              information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">2. Cookies we use</h2>
            <p className="mb-4">
              This site uses analytics cookies <strong className="text-white/80">only if you
              accept via the cookie banner</strong>. No cookies are set before you give consent,
              and no cookies are set at all if you decline.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-white/5">
                    <th className="text-left text-white/80 font-semibold px-4 py-3 border-b border-white/10">Cookie</th>
                    <th className="text-left text-white/80 font-semibold px-4 py-3 border-b border-white/10">Provider</th>
                    <th className="text-left text-white/80 font-semibold px-4 py-3 border-b border-white/10">Purpose</th>
                    <th className="text-left text-white/80 font-semibold px-4 py-3 border-b border-white/10">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 font-mono text-av-cyan text-xs">_ga</td>
                    <td className="px-4 py-3">Google Analytics</td>
                    <td className="px-4 py-3">Distinguishes unique visitors</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-av-cyan text-xs">_ga_*</td>
                    <td className="px-4 py-3">Google Analytics</td>
                    <td className="px-4 py-3">Persists session state</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              We use Google Analytics (GA4) to understand how visitors find and use this site —
              for example, which pages are visited most and how users navigate. This data is
              aggregated and anonymous; we cannot identify individual users from it.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">3. Essential cookies</h2>
            <p>
              This site does not use any essential or strictly necessary cookies. There are no
              user accounts, login sessions, or shopping baskets on this site.
            </p>
            <p className="mt-3">
              Your cookie preference (accept or decline) is stored in your browser&apos;s{' '}
              <code className="text-av-cyan text-xs bg-white/5 px-1.5 py-0.5 rounded">localStorage</code>{' '}
              — not as a cookie — so that we can remember your choice without setting any cookie
              before you consent.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">4. Managing your preferences</h2>
            <p>You can change your cookie preferences at any time:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong className="text-white/80">On this site:</strong> Use the{' '}
                <Link href="/#" id="reopen-consent-link" className="text-av-cyan hover:underline">
                  Consent Preferences
                </Link>{' '}
                link in the footer to reopen the cookie banner and update your choice.
              </li>
              <li>
                <strong className="text-white/80">In your browser:</strong> Most browsers allow
                you to view, block, or delete cookies through their settings. Refer to your
                browser&apos;s help documentation for instructions.
              </li>
              <li>
                <strong className="text-white/80">Google Analytics opt-out:</strong> You can
                install the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-av-cyan hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>{' '}
                to prevent your data from being used across all sites that use GA4.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">5. More information</h2>
            <p>
              For more information about how we handle your personal data, see our{' '}
              <Link href="/privacy" className="text-av-cyan hover:underline">Privacy Policy</Link>.
            </p>
            <p className="mt-3">
              For general information about cookies, visit the ICO website:{' '}
              <a
                href="https://ico.org.uk/for-the-public/online/cookies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-av-cyan hover:underline"
              >
                ico.org.uk/for-the-public/online/cookies
              </a>
            </p>
            <p className="mt-3">
              Questions about this policy:{' '}
              <a href="mailto:contact@ascendantventures.co.uk" className="text-av-cyan hover:underline">
                contact@ascendantventures.co.uk
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
