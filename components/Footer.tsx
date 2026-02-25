import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <Image src="/atransfinal.png" alt="Ascendant Ventures" width={24} height={24} className="w-6 h-6 object-contain opacity-80 flex-shrink-0" />
            <span className="text-av-slate/60 text-sm font-medium">Ascendant Ventures Ltd</span>
          </div>

          {/* Venture links */}
          <div className="flex items-center gap-5 text-sm text-av-slate/50">
            <a href="https://focusedflow.io" target="_blank" rel="noopener noreferrer" className="hover:text-av-slate transition-colors">
              Focused Flow
            </a>
            <a href="https://aitheralabs.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-av-slate transition-colors">
              Aithera Labs
            </a>
            <span className="text-av-slate/30">Paws &amp; Pace</span>
          </div>

          {/* Legal + copyright */}
          <div className="flex flex-col items-center md:items-end gap-1.5">
            <div className="flex items-center gap-4 text-xs text-av-slate/40">
              <Link href="/privacy" className="hover:text-av-slate/70 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-av-slate/70 transition-colors">Terms</Link>
            </div>
            <p className="text-av-slate/30 text-xs">
              © {year} Ascendant Ventures Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
