import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: {
    default: 'Ascendant Ventures',
    template: '%s | Ascendant Ventures',
  },
  description: 'A founder-led venture studio building AI and climate technology companies. Portfolio: Focused Flow, Aithera Labs, Paws & Pace.',
  keywords: ['venture studio', 'AI startups', 'climate tech', 'founder-led', 'Kishia Wolfe', 'Focused Flow', 'Aithera Labs', 'Paws & Pace', 'dog tracker', 'pet health app'],
  authors: [{ name: 'Ascendant Ventures Ltd' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://ascendantventures.co.uk',
    siteName: 'Ascendant Ventures',
    title: 'Ascendant Ventures — Founder-Led Venture Studio',
    description: 'Building AI and climate technology companies that matter. Portfolio: Focused Flow, Aithera Labs, Paws & Pace.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ascendant Ventures',
    description: 'Building AI and climate technology companies that matter. Portfolio: Focused Flow, Aithera Labs, Paws & Pace.',
  },
  icons: {
    icon: '/atransfinal.png',
    apple: '/atransfinal.png',
  },
  alternates: {
    canonical: 'https://ascendantventures.co.uk',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://ascendantventures.co.uk/#organization',
  name: 'Ascendant Ventures',
  legalName: 'Ascendant Ventures Ltd',
  url: 'https://ascendantventures.co.uk',
  logo: 'https://ascendantventures.co.uk/atransfinal.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '66 Paul Street',
    addressLocality: 'London',
    postalCode: 'EC2A 4NA',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@ascendantventures.co.uk',
    contactType: 'customer support',
  },
  sameAs: [
    'https://www.linkedin.com/company/ascendant-ventures-ltd',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
