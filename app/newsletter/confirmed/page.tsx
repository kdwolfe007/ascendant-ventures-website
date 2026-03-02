import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Subscription Confirmed',
  robots: { index: false, follow: false },
};

export default async function NewsletterConfirmed({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;

  if (status === 'expired') {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-3">Link expired.</h1>
          <p className="text-av-slate leading-relaxed mb-8">
            Confirmation links are valid for 72 hours. Please subscribe again to receive a fresh link.
          </p>
          <Link href="/#newsletter" className="bg-av-gradient text-white font-bold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-all hover:scale-105 inline-block">
            Subscribe again
          </Link>
        </div>
      </section>
    );
  }

  if (status === 'invalid' || status === 'error') {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-3">Something went wrong.</h1>
          <p className="text-av-slate leading-relaxed mb-8">
            That confirmation link doesn&apos;t look right. Please try subscribing again.
          </p>
          <Link href="/#newsletter" className="bg-av-gradient text-white font-bold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-all hover:scale-105 inline-block">
            Try again
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-3">You&apos;re confirmed.</h1>
        <p className="text-av-slate leading-relaxed mb-8">
          Welcome to the Ascendant Ventures newsletter. Your first issue arrives on the
          first Tuesday of next month.
        </p>
        <Link href="/" className="bg-av-gradient text-white font-bold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-all hover:scale-105 inline-block">
          Back to home
        </Link>
      </div>
    </section>
  );
}
