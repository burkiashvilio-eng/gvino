import type { Metadata } from 'next';
import './globals.css';

const BASE_URL = 'https://www.burkiashviliwinecellar.ge';

const SEO = {
  title: 'Burkiashvili Wine Cellar | Georgian Qvevri Wine',
  ogTitle: 'Burkiashvili Wine Cellar | Georgian Qvevri Wine',
  description:
    'Burkiashvili Wine Cellar — authentic Georgian wine crafted in traditional qvevri clay vessels. Handcrafted Saperavi & Rkatsiteli from Kakheti, Georgia. Coming soon to stores near you.',
  ogDescription:
    'Handcrafted Georgian wine made in traditional qvevri clay vessels. Saperavi & Rkatsiteli from the heart of Kakheti.',
  ogImage: '/og-image.jpg',
  ogUrl: BASE_URL,
  canonicalUrl: BASE_URL,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SEO.title,
    template: '%s | Burkiashvili Wine Cellar',
  },
  description: SEO.description,
  keywords: [
    'Burkiashvili wine cellar',
    'Burkiashvili winery',
    'ბურკიაშვილი ღვინის მარანი',
    'Georgian wine',
    'qvevri wine',
    'kvevri wine',
    'amber wine',
    'orange wine',
    'natural wine Georgia',
    'Saperavi',
    'Rkatsiteli',
    'Kisi',
    'Kakheti wine',
    'ქართული ღვინო',
    'ქვევრის ღვინო',
    'ღვინის მარანი',
    'грузинское вино',
    'вино в квеври',
  ],
  alternates: {
    canonical: SEO.canonicalUrl,
    languages: {
      ka: BASE_URL + '?lang=ka',
      en: BASE_URL + '?lang=en',
      ru: BASE_URL + '?lang=ru',
      'x-default': BASE_URL,
    },
  },
  openGraph: {
    type: 'website',
    url: SEO.ogUrl,
    siteName: 'Burkiashvili Wine Cellar',
    title: SEO.ogTitle,
    description: SEO.ogDescription,
    locale: 'ka_GE',
    alternateLocale: ['en_US', 'ru_RU'],
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: 'Burkiashvili Wine Cellar — Georgian Qvevri Wine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.ogTitle,
    description: 'Authentic Georgian wine from traditional qvevri clay vessels. Saperavi, Rkatsiteli & more from Kakheti.',
    images: [SEO.ogImage],
  },
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE',
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
      image: BASE_URL + SEO.ogImage,
      description: 'Traditional Georgian winery producing qvevri wines including Saperavi and Rkatsiteli from Kakheti region.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GE',
      },
      knowsAbout: ['Georgian wine', 'Qvevri winemaking', 'Saperavi', 'Rkatsiteli', 'Kisi'],
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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
