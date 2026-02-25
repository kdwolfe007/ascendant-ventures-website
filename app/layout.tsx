import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Ascendant Ventures',
    template: '%s | Ascendant Ventures',
  },
  description: 'A founder-led venture studio building AI and climate technology companies. Portfolio: Focused Flow, Aithera Labs.',
  keywords: ['venture studio', 'AI startups', 'climate tech', 'founder-led', 'Kishia Wolfe', 'Focused Flow', 'Aithera Labs'],
  authors: [{ name: 'Ascendant Ventures Ltd' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://ascendantventures.co.uk',
    siteName: 'Ascendant Ventures',
    title: 'Ascendant Ventures — Founder-Led Venture Studio',
    description: 'Building AI and climate technology companies that matter.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ascendant Ventures',
    description: 'Building AI and climate technology companies that matter.',
  },
  icons: {
    icon: '/atransfinal.png',
    apple: '/atransfinal.png',
  },
  alternates: {
    canonical: 'https://ascendantventures.co.uk',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HM5H55T4RL" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HM5H55T4RL');
        `}</Script>
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
