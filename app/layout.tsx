import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import RichDataGenerator, {
  generateOrganizationSchema,
  generateLodgingBusinessSchema,
} from '@/components/RichDataGenerator';
import { Analytics } from '@vercel/analytics/next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aprica-website.vercel.app';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

// Metadata ottimizzati per AI e SEO
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Case Vacanze Aprica Mountain Lodge | 20 Posti Letto - 4 Appartamenti',
    template: '%s | Aprica Mountain Lodge',
  },
  description:
    'Case vacanze ad Aprica: 4 appartamenti per 20 posti letto totali. A 800m dagli impianti sciistici. Box auto privato, cucina a induzione, lavastoviglie. Ideale per famiglie e gruppi.',
  keywords: [
    'case vacanze Aprica',
    'appartamenti Aprica',
    'affitto Aprica',
    'vacanze montagna Lombardia',
    'sci Aprica',
    'Valtellina',
    '20 posti letto',
    'box auto',
    'vicino impianti',
  ],
  authors: [{ name: 'Aprica Mountain Lodge' }],
  creator: 'Aprica Mountain Lodge',
  publisher: 'Aprica Mountain Lodge',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Case Vacanze Aprica Mountain Lodge | 20 Posti Letto',
    description:
      '4 appartamenti accoglienti ad Aprica a 800m dagli impianti. Box privato, cucina completa, Wi-Fi. Perfetto per famiglie.',
    url: '/',
    siteName: 'Aprica Mountain Lodge',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Case Vacanze Aprica Mountain Lodge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Vacanze Aprica Mountain Lodge',
    description: '4 appartamenti per 20 posti ad Aprica. A 800m dagli impianti sciistici.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Aggiungere dopo la configurazione
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data for the entire site
  const organizationSchema = generateOrganizationSchema();
  const lodgingSchema = generateLodgingBusinessSchema();

  return (
    <html lang="it">
      <head>
        {/* Structured Data for AI and Search Engines */}
        <RichDataGenerator data={organizationSchema} data-testid="organization-schema" />
        <RichDataGenerator data={lodgingSchema} data-testid="lodging-schema" />
      </head>
      <body className={inter.className}>
        {/* Semantic HTML5 Structure */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-mountain-pine text-white px-4 py-2 z-50">
          Vai al contenuto principale
        </a>
        
        <Header />

        <main id="main-content" role="main">
          {children}
        </main>

        <footer role="contentinfo" className="bg-mountain-pine text-white mt-20">
          <div className="container mx-auto px-6 py-16">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <section aria-labelledby="footer-about">
                <div className="text-white mb-4">
                  <div className="text-2xl font-bold mb-1">Aprica</div>
                  <div className="text-sm text-mountain-fog">Mountain Lodge</div>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Case vacanze nel cuore di Aprica. 4 appartamenti accoglienti per 20 posti letto totali, a 800m dagli impianti sciistici.
                </p>
              </section>

              <section aria-labelledby="footer-address">
                <h3 id="footer-address" className="font-semibold mb-4 text-base text-white">
                  Dove Siamo
                </h3>
                <address className="not-italic text-gray-200 text-sm leading-relaxed">
                  Via Roma 123<br />
                  23031 Aprica (SO)<br />
                  Lombardia, Italia
                </address>
              </section>

              <section aria-labelledby="footer-contacts">
                <h3 id="footer-contacts" className="font-semibold mb-4 text-base text-white">
                  Contatti
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="tel:+390342123456"
                      className="text-gray-200 hover:text-white transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
                    >
                      +39 0342 123456
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@apricamountainlodge.it"
                      className="text-gray-200 hover:text-white transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
                    >
                      info@apricamountainlodge.it
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/393331234567"
                      className="text-gray-200 hover:text-white transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/+393331234567"
                      className="text-gray-200 hover:text-white transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Telegram
                    </a>
                  </li>
                </ul>
              </section>

              <section aria-labelledby="footer-links">
                <h3 id="footer-links" className="font-semibold mb-4 text-base text-white">
                  Esplora
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="/" className="text-gray-200 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/appartamenti" className="text-gray-200 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1">
                      Appartamenti
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="text-gray-200 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1">
                      FAQ
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            <div className="border-t border-white/20 pt-8 text-center">
              <p className="text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} Aprica Mountain Lodge. Tutti i diritti riservati.
              </p>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
