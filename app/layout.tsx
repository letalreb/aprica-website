import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RichDataGenerator, {
  generateOrganizationSchema,
  generateLodgingBusinessSchema,
} from '@/components/RichDataGenerator';

const inter = Inter({ subsets: ['latin'] });

// Metadata ottimizzati per AI e SEO
export const metadata: Metadata = {
  title: {
    default: 'Case Vacanze Aprica Mountain Lodge | 20 Posti Letto - 4 Appartamenti',
    template: '%s | Aprica Mountain Lodge',
  },
  description:
    'Case vacanze ad Aprica: 4 appartamenti per 20 posti letto totali. A 400m dagli impianti sciistici. Box auto privato, cucina a induzione, lavastoviglie. Ideale per famiglie e gruppi.',
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
  metadataBase: new URL('https://apricamountainlodge.it'), // Sostituire con dominio reale
  alternates: {
    canonical: '/',
    languages: {
      'it-IT': '/it',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Case Vacanze Aprica Mountain Lodge | 20 Posti Letto',
    description:
      '4 appartamenti accoglienti ad Aprica a 400m dagli impianti. Box privato, cucina completa, Wi-Fi. Perfetto per famiglie.',
    url: 'https://apricamountainlodge.it',
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
    description: '4 appartamenti per 20 posti ad Aprica. A 400m dagli impianti sciistici.',
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
}: {
  children: React.ReactNode;
}) {
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-aprica-blue text-white px-4 py-2 z-50">
          Vai al contenuto principale
        </a>
        
        <header role="banner" className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
          <nav
            role="navigation"
            aria-label="Navigazione principale"
            className="container mx-auto px-4 py-5"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🏔️</div>
                <div>
                  <a href="/" aria-label="Torna alla home" className="text-2xl font-bold text-aprica-blue hover:text-aprica-green transition-colors">
                    Aprica Mountain Lodge
                  </a>
                  <p className="text-xs text-gray-600">Case Vacanze</p>
                </div>
              </div>
              <ul className="hidden md:flex gap-8" role="menubar">
                <li role="none">
                  <a
                    href="/"
                    role="menuitem"
                    className="text-gray-700 hover:text-aprica-blue transition-colors font-medium"
                  >
                    Home
                  </a>
                </li>
                <li role="none">
                  <a
                    href="/appartamenti"
                    role="menuitem"
                    className="text-gray-700 hover:text-aprica-blue transition-colors font-medium"
                  >
                    Appartamenti
                  </a>
                </li>
                <li role="none">
                  <a
                    href="/galleria"
                    role="menuitem"
                    className="text-gray-700 hover:text-aprica-blue transition-colors font-medium"
                  >
                    Galleria
                  </a>
                </li>
                <li role="none">
                  <a
                    href="/guida-valtellina"
                    role="menuitem"
                    className="text-gray-700 hover:text-aprica-blue transition-colors font-medium"
                  >
                    Guida
                  </a>
                </li>
                <li role="none">
                  <a
                    href="/faq"
                    role="menuitem"
                    className="text-gray-700 hover:text-aprica-blue transition-colors font-medium"
                  >
                    FAQ
                  </a>
                </li>
                <li role="none">
                  <a
                    href="mailto:info@apricamountainlodge.it"
                    role="menuitem"
                    className="bg-aprica-blue text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all font-semibold"
                  >
                    Contatti
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main id="main-content" role="main">
          {children}
        </main>

        <footer role="contentinfo" className="bg-gradient-to-b from-gray-800 to-gray-900 text-white mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <section aria-labelledby="footer-about">
                <h3 id="footer-about" className="font-bold mb-4 text-xl flex items-center gap-2">
                  <span className="text-2xl">🏔️</span>
                  Aprica Mountain Lodge
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Case vacanze nel cuore di Aprica. 4 appartamenti accoglienti per 20 posti letto totali, a 400m dagli impianti sciistici.
                </p>
              </section>

              <section aria-labelledby="footer-address">
                <h3 id="footer-address" className="font-bold mb-4 text-lg">
                  📍 Indirizzo
                </h3>
                <address className="not-italic text-gray-300 text-sm leading-relaxed">
                  Via Roma 123<br />
                  23031 Aprica (SO)<br />
                  Lombardia, Italia
                </address>
              </section>

              <section aria-labelledby="footer-contacts">
                <h3 id="footer-contacts" className="font-bold mb-4 text-lg">
                  📞 Contatti
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="tel:+390342123456"
                      className="text-gray-300 hover:text-white transition flex items-center gap-2"
                    >
                      <span>☎️</span> +39 0342 123456
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@apricamountainlodge.it"
                      className="text-gray-300 hover:text-white transition flex items-center gap-2"
                    >
                      <span>✉️</span> info@apricamountainlodge.it
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/393331234567"
                      className="text-gray-300 hover:text-white transition flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>💬</span> +39 333 1234567
                    </a>
                  </li>
                </ul>
              </section>

              <section aria-labelledby="footer-links">
                <h3 id="footer-links" className="font-bold mb-4 text-lg">
                  🔗 Link Utili
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/" className="text-gray-300 hover:text-white transition">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/appartamenti" className="text-gray-300 hover:text-white transition">
                      Appartamenti
                    </a>
                  </li>
                  <li>
                    <a href="/guida-valtellina" className="text-gray-300 hover:text-white transition">
                      Guida Valtellina
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="text-gray-300 hover:text-white transition">
                      FAQ
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Aprica Mountain Lodge. Tutti i diritti riservati.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Made with ❤️ for mountain lovers
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
