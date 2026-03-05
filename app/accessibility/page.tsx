import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility statement for the Ascendant Ventures website.',
  alternates: { canonical: '/accessibility' },
};

export default function AccessibilityPage() {
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
        <h1 className="text-4xl font-extrabold text-white mb-3">Accessibility Statement</h1>
        <p className="text-av-slate/50 text-sm">Last updated: March 2026</p>
      </div>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="border-t border-white/5 mb-10" />

        <div className="space-y-10 text-av-slate leading-relaxed text-sm">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Our commitment</h2>
            <p>
              Ascendant Ventures Ltd is committed to making its website accessible to as many
              people as possible, regardless of disability, assistive technology, or how they
              choose to access the web.
            </p>
            <p className="mt-3">
              We aim to conform to the{' '}
              <a
                href="https://www.w3.org/TR/WCAG21/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-av-cyan hover:underline"
              >
                Web Content Accessibility Guidelines (WCAG) 2.1
              </a>{' '}
              at Level AA. These guidelines explain how to make web content more accessible to
              people with disabilities.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">What we have done</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Semantic HTML structure with appropriate heading hierarchy</li>
              <li>Sufficient colour contrast between text and background</li>
              <li>All images include descriptive alternative text</li>
              <li>Interactive elements are keyboard navigable</li>
              <li>Focus states are visible on interactive elements</li>
              <li>The site does not use auto-playing audio or video</li>
              <li>Text can be resized up to 200% without loss of content or functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Known limitations</h2>
            <p>
              We are an early-stage company and while we strive to meet WCAG 2.1 AA, some areas
              of the site may not yet fully conform. We are actively working to identify and
              address any gaps.
            </p>
            <p className="mt-3">
              If you encounter any accessibility barriers, please let us know using the contact
              details below and we will do our best to resolve the issue promptly.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Reporting accessibility issues</h2>
            <p>
              If you experience difficulty accessing any part of this website, or if you have
              suggestions for improvement, please contact us:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>
                <strong className="text-white/80">Email:</strong>{' '}
                <a href="mailto:contact@ascendantventures.co.uk" className="text-av-cyan hover:underline">
                  contact@ascendantventures.co.uk
                </a>
              </li>
              <li>
                <strong className="text-white/80">Post:</strong> Ascendant Ventures Ltd,
                66 Paul Street, London EC2A 4NA
              </li>
            </ul>
            <p className="mt-3">
              We aim to respond to accessibility queries within 5 working days.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Enforcement</h2>
            <p>
              If you are not satisfied with our response, you may contact the{' '}
              <a
                href="https://www.equalityhumanrights.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-av-cyan hover:underline"
              >
                Equality and Human Rights Commission (EHRC)
              </a>{' '}
              who are responsible for enforcing the Equality Act 2010 in Great Britain.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Technical information</h2>
            <p>
              This website is built with Next.js and rendered as a server-side application.
              It has been tested on the following browsers and assistive technologies:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Chrome, Firefox, Safari, and Edge (latest versions)</li>
              <li>macOS VoiceOver</li>
              <li>Windows Narrator</li>
              <li>Keyboard-only navigation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Updates to this statement</h2>
            <p>
              We review and update this statement when we make significant changes to the website
              or when we identify and resolve accessibility issues. The &ldquo;Last updated&rdquo;
              date at the top reflects the most recent revision.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
