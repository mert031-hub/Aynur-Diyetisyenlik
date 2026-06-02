import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aynurkazakdiyetisyen.com'),
  title: 'Aynur Kazak | Uzman Diyetisyen & Beslenme Danışmanı – Afyonkarahisar',
  description:
    'Afyonkarahisar\'da uzman diyetisyen Aynur Kazak ile kişisel beslenme programları, kilo kontrolü, diyabet diyeti, sporcu beslenmesi ve çocuk beslenmesi danışmanlığı.',
  keywords: [
    'diyetisyen', 'beslenme danışmanı', 'Afyonkarahisar diyetisyen',
    'kilo verme', 'kilo alma', 'obezite tedavisi', 'diyabet diyeti',
    'insülin direnci', 'sporcu beslenmesi', 'çocuk beslenmesi',
    'online diyet', 'metabolik hastalıklar', 'gebelik beslenmesi',
    'Aynur Kazak', 'beslenme programı', 'sağlıklı yaşam',
  ],
  authors: [{ name: 'Aynur Kazak' }],
  creator: 'Aynur Kazak Beslenme ve Diyet Danışmanlık Merkezi',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://aynurkazakdiyetisyen.com',
    siteName: 'Aynur Kazak Diyetisyen',
    title: 'Aynur Kazak | Uzman Diyetisyen – Afyonkarahisar',
    description:
      'Kişisel beslenme programları ve bilimsel yaklaşımla sürdürülebilir sağlıklı yaşam. Afyonkarahisar\'ın en güvenilir diyetisyen kliniği.',
    images: [
      {
        url: '/images/diyetkadin.jpg',
        width: 1200,
        height: 630,
        alt: 'Aynur Kazak Diyetisyen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aynur Kazak | Uzman Diyetisyen – Afyonkarahisar',
    description: 'Kişisel beslenme programları ile sağlıklı ve sürdürülebilir bir yaşam için uzman diyetisyen danışmanlığı.',
    images: ['/images/diyetkadin.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
  alternates: {
    canonical: 'https://aynurkazakdiyetisyen.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dietitian',
  name: 'Aynur Kazak Beslenme ve Diyet Danışmanlık Merkezi',
  description:
    'Afyonkarahisar\'da uzman diyetisyen Aynur Kazak ile kişisel beslenme programları.',
  url: 'https://aynurkazakdiyetisyen.com',
  telephone: '+905388371509',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dumlupınar Mh. Yüzbaşı Bayburtlu Agah Cd. No:22 Balık İş Merkezi Kat:3 Daire:11',
    addressLocality: 'Afyonkarahisar',
    postalCode: '03030',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.7559934,
    longitude: 30.542822,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '150',
    bestRating: '5',
  },
  priceRange: '₺₺',
  image: 'https://aynurkazakdiyetisyen.com/images/diyetkadin.jpg',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7C9A75" />
      </head>
      <body className="font-body bg-background text-text antialiased">
        {children}
      </body>
    </html>
  );
}
