import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the Ascendant Ventures website.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-extrabold text-white mb-3">Privacy Policy</h1>
        <p className="text-av-slate/50 text-sm">Last updated: February 2026</p>
      </div>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="border-t border-white/5 mb-10" />

        <div className="space-y-10 text-av-slate leading-relaxed text-sm">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">1. Who we are</h2>
            <p>
              This privacy policy applies to the Ascendant Ventures website at{' '}
              <strong className="text-white/80">ascendantventures.co.uk</strong> (the
              &ldquo;Site&rdquo;), operated by <strong className="text-white/80">Ascendant Ventures Ltd</strong>,
              a company registered in England and Wales (registered address: 66 Paul Street,
              London EC2A 4NA).
            </p>
            <p className="mt-3">
              Contact:{' '}
              <a href="mailto:contact@ascendantventures.co.uk" className="text-av-cyan hover:underline">
                contact@ascendantventures.co.uk
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">2. What this policy covers</h2>
            <p>
              This policy covers only the Ascendant Ventures holding company website. Our portfolio
              products — Focused Flow, Aithera Labs, and Paws &amp; Pace — operate independently
              and are each governed by their own separate privacy policies, which you should review
              when using those products.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">3. Data we collect</h2>
            <p>
              This Site is a static informational website. We do not operate any sign-up forms,
              contact forms, newsletter subscriptions, or user accounts through this Site.
            </p>
            <p className="mt-3">
              The only way you provide us with personal data through this Site is if you choose
              to email us directly by clicking a <code className="text-av-cyan text-xs bg-white/5 px-1.5 py-0.5 rounded">mailto:</code> link.
              In that case, your email client handles the data — we receive only what you choose to
              send in the email.
            </p>
            <p className="mt-3">
              We do not currently use cookies, analytics, tracking pixels, or any third-party
              scripts on this Site.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">4. Email correspondence</h2>
            <p>
              If you contact us by email, we will use your name and email address to respond to
              your enquiry. We will not add you to any mailing list, share your details with third
              parties, or use your contact information for any purpose other than responding to
              your message.
            </p>
            <p className="mt-3">
              <strong className="text-white/80">Legal basis:</strong> Legitimate interests
              (responding to a communication you initiated).
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">5. Data retention</h2>
            <p>
              Email correspondence is retained only as long as reasonably necessary to handle your
              enquiry, and no longer than 12 months unless a legal obligation requires otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">6. Your rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Access any personal data we hold about you</li>
              <li>Request correction or erasure of your data</li>
              <li>Object to processing or request restriction</li>
              <li>Lodge a complaint with the ICO (ico.org.uk)</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email{' '}
              <a href="mailto:contact@ascendantventures.co.uk" className="text-av-cyan hover:underline">
                contact@ascendantventures.co.uk
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">7. Hosting</h2>
            <p>
              This Site is hosted on{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-av-cyan hover:underline">
                Vercel
              </a>. Vercel may collect standard server logs (IP address, browser type, page
              requests) for security and operational purposes. See Vercel&apos;s privacy policy
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">8. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date
              at the top will reflect any changes. Continued use of the Site after an update
              constitutes acceptance of the revised policy.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
