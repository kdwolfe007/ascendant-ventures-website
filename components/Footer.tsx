import Image from 'next/image';
import Link from 'next/link';
import ConsentPreferencesButton from '@/components/ConsentPreferencesButton';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <Image src="/atransfinal.png" alt="Ascendant Ventures" width={24} height={24} className="w-6 h-6 object-contain opacity-80 flex-shrink-0" />
            <span className="text-av-slate/80 text-sm font-medium">Ascendant Ventures Ltd</span>
          </div>

          {/* Venture links */}
          <div className="flex items-center gap-5 text-sm text-av-slate/75">
            <a href="https://focusedflow.io" target="_blank" rel="noopener noreferrer" className="hover:text-av-slate transition-colors">
              Focused Flow
            </a>
            <a href="https://aitheralabs.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-av-slate transition-colors">
              Aithera Labs
            </a>
            <span className="text-av-slate/60">Paws &amp; Pace</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/ascendant-ventures-ltd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ascendant Ventures on LinkedIn"
              className="text-av-slate/50 hover:text-av-slate transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Legal + copyright */}
          <div className="flex flex-col items-center md:items-end gap-1.5">
            <div className="flex flex-wrap items-center gap-4 text-xs text-av-slate/75">
              <Link href="/privacy" className="hover:text-av-slate/70 transition-colors">Privacy Policy</Link>
              <Link href="/cookies" className="hover:text-av-slate/70 transition-colors">Cookie Policy</Link>
              <Link href="/terms" className="hover:text-av-slate/70 transition-colors">Terms</Link>
              <Link href="/dsar" className="hover:text-av-slate/70 transition-colors">Data Requests</Link>
              <Link href="/accessibility" className="hover:text-av-slate/70 transition-colors">Accessibility</Link>
            </div>
            <p className="text-av-slate/60 text-xs">
              © {year} Ascendant Ventures Ltd. All rights reserved.
            </p>
            <p className="text-av-slate/60 text-xs">
              66 Paul Street, London, EC2A 4NA ·{' '}
              <a href="tel:+442045722832" className="hover:text-av-slate/50 transition-colors">
                +44 020 4572 2832
              </a>
            </p>
            <p className="text-av-slate/60 text-xs">
              ICO Registration: ZB916024
            </p>
            <ConsentPreferencesButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
