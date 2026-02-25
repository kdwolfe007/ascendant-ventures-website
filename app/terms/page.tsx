import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for the Ascendant Ventures website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
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
        <h1 className="text-4xl font-extrabold text-white mb-3">Terms of Use</h1>
        <p className="text-av-slate/50 text-sm">Last updated: February 2026</p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="border-t border-white/5 mb-10" />

        <div className="space-y-10 text-av-slate leading-relaxed text-sm">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">1. Acceptance</h2>
            <p>
              By accessing this website at <strong className="text-white/80">ascendantventures.co.uk</strong>,
              you agree to these Terms of Use. The Site is operated by{' '}
              <strong className="text-white/80">Ascendant Ventures Ltd</strong>, a company
              registered in England and Wales (66 Paul Street, London EC2A 4NA).
            </p>
            <p className="mt-3">
              If you do not agree to these terms, please do not use this Site.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">2. Nature of this Site</h2>
            <p>
              This Site is a marketing and informational website for Ascendant Ventures Ltd and
              its portfolio companies. It does not provide any products, services, or user accounts
              directly. Portfolio products — Focused Flow, Aithera Labs, and Paws &amp; Pace —
              are separate products with their own terms and conditions, which apply when you use
              those products.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">3. Intellectual property</h2>
            <p>
              All content on this Site — including text, design, logos, and graphics — is the
              property of Ascendant Ventures Ltd or its portfolio companies and is protected by
              copyright and other intellectual property laws. You may not reproduce, distribute,
              or create derivative works from any content on this Site without our prior written
              consent.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">4. No warranties</h2>
            <p>
              This Site is provided &ldquo;as is&rdquo; without any warranties, express or
              implied. We make no representations about the accuracy, completeness, or suitability
              of any information on the Site. Content may be updated without notice.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">5. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Ascendant Ventures Ltd shall not be liable
              for any direct, indirect, or consequential loss arising from your use of, or
              inability to use, this Site or any content on it.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">6. External links</h2>
            <p>
              This Site contains links to our portfolio products and external websites. We are not
              responsible for the content or practices of any third-party sites. Links do not
              constitute endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">7. Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes shall be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">8. Contact</h2>
            <p>
              Questions about these terms:{' '}
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
