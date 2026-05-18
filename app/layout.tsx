import type { Metadata } from 'next';
import './globals.css';
 
const BASE_URL = 'https://www.burkiashviliwinecellar.ge';
 
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
 
  // ── Title ──────────────────────────────────────────────────────────────────
  title: {
    default: 'Burkiashvili Wine Cellar | Georgian Qvevri Wine',
    template: '%s | Burkiashvili Wine Cellar',
  },
 
  // ── Description (multilingual hint — Google picks by user locale) ──────────
  description:
    'Burkiashvili Wine Cellar — authentic Georgian wine crafted in traditional qvevri clay vessels. Handcrafted Saperavi & Rkatsiteli from Kakheti, Georgia. Coming soon to stores near you.',
 
  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    'Georgian wine',
    'qvevri wine',
    'Burkiashvili wine cellar',
    'buy Georgian wine',
    'Saperavi',
    'Rkatsiteli',
    'amber wine',
    'natural wine Georgia',
    'Kakheti wine',
    'Georgian wine cellar',
    'traditional qvevri',
    'Georgian wine online',
    'wine marani',
    'ქართული ღვინო',
    'კახური ღვინო',
    'ქვევრის ღვინო',
    'грузинское вино',
    'вино в квеври',
  ],
 
  // ── Canonical & Alternates ─────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
    languages: {
      'ka':    BASE_URL + '?lang=ka',
      'en':    BASE_URL + '?lang=en',
      'ru':    BASE_URL + '?lang=ru',
      'x-default': BASE_URL,
    },
  },
 
  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Burkiashvili Wine Cellar',
    title: 'Burkiashvili Wine Cellar | Georgian Qvevri Wine',
    description:
      'Handcrafted Georgian wine made in traditional qvevri clay vessels. Saperavi & Rkatsiteli from the heart of Kakheti.',
    locale: 'ka_GE',
    alternateLocale: ['en_US', 'ru_RU'],
    images: [
      {
        url: '/og-image.jpg',      // place a 1200×630 image in /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: 'Burkiashvili Wine Cellar — Georgian Qvevri Wine',
      },
    ],
  },
 
  // ── Twitter / X Card ───────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Burkiashvili Wine Cellar | Georgian Qvevri Wine',
    description:
      'Authentic Georgian wine from traditional qvevri clay vessels. Saperavi, Rkatsiteli & more from Kakheti.',
    images: ['/og-image.jpg'],
  },
 
  // ── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
 
  // ── Icons ──────────────────────────────────────────────────────────────────
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',  // place 180×180 in /public/
  },
 
  // ── Verification (add your real codes when ready) ──────────────────────────
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE',
    // yandex: 'REPLACE_WITH_YANDEX_CODE',  // useful for Russian audience
  },
};
 
// ── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': BASE_URL + '/#business',
      name: 'Burkiashvili Wine Cellar',
      url: BASE_URL,
      description:
        'Traditional Georgian winery producing qvevri wines including Saperavi and Rkatsiteli from Kakheti region.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GE',
      },
      knowsAbout: [
        'Georgian wine',
        'Qvevri winemaking',
        'Saperavi',
        'Rkatsiteli',
        'Natural wine',
        'Amber wine',
        'Kakheti wine region',
      ],
      sameAs: [
        // Add your social profile URLs here when ready:
        // 'https://www.facebook.com/burkiashviliwinecellar',
        // 'https://www.instagram.com/burkiashviliwinecellar',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': BASE_URL + '/#website',
      url: BASE_URL,
      name: 'Burkiashvili Wine Cellar',
      inLanguage: ['ka', 'en', 'ru'],
      publisher: { '@id': BASE_URL + '/#business' },
    },
  ],
};
 
// ── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
