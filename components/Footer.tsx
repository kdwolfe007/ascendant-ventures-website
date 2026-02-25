import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Ascendant Ventures" width={24} height={24} className="w-6 h-6 opacity-70" />
            <span className="text-av-slate/60 text-sm font-medium">Ascendant Ventures Ltd</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-av-slate/50">
            <a href="https://focusedflow.io" target="_blank" rel="noopener noreferrer" className="hover:text-av-slate transition-colors">
              Focused Flow
            </a>
            <a href="https://aitheralabs.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-av-slate transition-colors">
              Aithera Labs
            </a>
            <a href="mailto:hello@ascendantventures.co.uk" className="hover:text-av-slate transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-av-slate/30 text-xs">
            © {year} Ascendant Ventures Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
