'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export default function CookieBanner() {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('av_cookie_consent');
    if (stored === 'accepted') {
      setConsent('accepted');
    } else if (stored === 'declined') {
      setConsent('declined');
    } else {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('av_cookie_consent', 'accepted');
    setConsent('accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('av_cookie_consent', 'declined');
    setConsent('declined');
    setVisible(false);
  };

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-HM5H55T4RL"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HM5H55T4RL');
          `}</Script>
        </>
      )}

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/8 bg-deep-space/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-av-slate text-sm leading-relaxed">
              We use cookies to understand how people find and use this site.{' '}
              <a href="/privacy" className="text-av-cyan hover:text-white transition-colors underline underline-offset-2">
                Privacy Policy
              </a>
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={decline}
                className="text-sm text-av-slate/70 hover:text-white transition-colors px-4 py-2 rounded-full border border-white/10 hover:border-white/25"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="text-sm font-semibold text-white bg-av-gradient px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
