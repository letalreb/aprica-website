import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import RichDataGenerator, {
  generateAccommodationSchema,
  generateBreadcrumbSchema,
} from '@/components/RichDataGenerator';
import appartamentiData from '@/data/appartamenti.json';
import { IconGarage, IconSki, IconWifi, IconKey, IconCheck } from '@/components/Icons';

// Generate static paths for all apartments
export async function generateStaticParams() {
  return appartamentiData.appartamenti.map((apt) => ({
    slug: apt.slug,
  }));
}

// Generate metadata for each apartment
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const apartment = appartamentiData.appartamenti.find(
    (apt) => apt.slug === params.slug
  );

  if (!apartment) {
    return {
      title: 'Appartamento non trovato',
    };
  }

  return {
    title: `${apartment.nome} - ${apartment.postiLetto} Posti Letto`,
    description: `${apartment.descrizione} ${apartment.composizione}. Dotato di ${apartment.caratteristiche.join(', ')}.`,
    keywords: [
      apartment.nome,
      `appartamento ${apartment.postiLetto} posti`,
      'Aprica',
      'case vacanze',
      'piano cottura induzione',
      'lavastoviglie',
      ...apartment.caratteristiche,
    ],
    openGraph: {
      title: `${apartment.nome} - ${apartment.postiLetto} Posti Letto | Aprica`,
      description: apartment.descrizione,
      url: `/appartamento/${apartment.slug}`,
      type: 'website',
      images: [
        {
          url: apartment.image || '/default-apartment.jpg',
          width: 1200,
          height: 630,
          alt: apartment.nome,
        },
      ],
    },
    alternates: {
      canonical: `/appartamento/${apartment.slug}`,
    },
  };
}

export default function AppartamentoPage({ params }: { params: { slug: string } }) {
  const apartment = appartamentiData.appartamenti.find(
    (apt) => apt.slug === params.slug
  );

  if (!apartment) {
    notFound();
  }

  // Generate structured data
  const accommodationSchema = generateAccommodationSchema(apartment, 'it');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Appartamenti', url: '/appartamenti' },
    { name: apartment.nome },
  ]);

  // Extract bedroom and bathroom info for AI agents
  const bedroomMatch = apartment.composizione.match(/(\d+)\s*camer/i);
  const bathroomMatch = apartment.composizione.match(/(\d+)\s*bagn/i);
  const numBedrooms = bedroomMatch ? parseInt(bedroomMatch[1]) : 0;
  const numBathrooms = bathroomMatch ? parseInt(bathroomMatch[1]) : 0;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <RichDataGenerator data={accommodationSchema} />
      <RichDataGenerator data={breadcrumbSchema} />

      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-mountain-pine via-mountain-wood to-mountain-pine text-white py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={apartment.image || '/images/intro/IMG_20251220_163427.jpg'}
            alt={apartment.nome}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mountain-pine/70 via-mountain-pine/60 to-mountain-pine/80"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold">
              🏔️ {apartment.postiLetto} Posti Letto
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg" itemProp="name">
            {apartment.nome}
          </h1>
          <p className="text-2xl mb-4 drop-shadow-md text-gray-100">
            {apartment.composizione}
          </p>
          <div className="flex gap-4 text-lg justify-center drop-shadow-md mb-8">
            <span className="flex items-center gap-2">
              <strong>{apartment.superficieMq} m²</strong>
            </span>
            <span>•</span>
            <span>Piano {apartment.piano}</span>
            <span>•</span>
            <span>A 800m dagli impianti</span>
          </div>
          
          {/* Pricing Badge */}
          <div className="inline-block">
            <div className="bg-white/90 border-2 border-white px-6 py-3 rounded-2xl shadow-2xl backdrop-blur-md">
              <p className="text-xs text-gray-600 mb-1">A partire da</p>
              <p className="text-2xl font-bold text-mountain-pine">€300<span className="text-lg font-normal text-gray-700">/notte</span></p>
            </div>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12" itemScope itemType="https://schema.org/Apartment">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex gap-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-mountain-pine transition">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/appartamenti" className="hover:text-mountain-pine transition">
                Appartamenti
              </a>
            </li>
            <li>/</li>
            <li className="font-semibold text-mountain-pine" aria-current="page">
              {apartment.nome}
            </li>
          </ol>
        </nav>

        {/* AI-Optimized Data Summary - Visible section for LLM parsing */}
        <section
          className="bg-gradient-to-br from-mountain-fog/30 to-white border-l-4 border-mountain-pine p-8 mb-8 rounded-lg shadow-sm"
          aria-labelledby="data-summary-heading"
          data-ai-extract="key-facts"
        >
          <h2
            id="data-summary-heading"
            className="text-2xl md:text-3xl font-bold mb-6 text-mountain-pine"
          >
            📊 Informazioni Principali
          </h2>
          <dl className="grid md:grid-cols-2 gap-6 text-gray-800">
            <div>
              <dt className="font-semibold text-mountain-wood mb-1">Struttura:</dt>
              <dd itemProp="description" className="text-gray-700">{apartment.nome}</dd>
            </div>
            <div>
              <dt className="font-semibold text-mountain-wood mb-1">Capacità:</dt>
              <dd className="text-gray-700">
                <span itemProp="occupancy">{apartment.postiLetto} persone</span>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-mountain-wood mb-1">Camere da letto:</dt>
              <dd itemProp="numberOfBedrooms" className="text-gray-700">{numBedrooms}</dd>
            </div>
            <div>
              <dt className="font-semibold text-mountain-wood mb-1">Bagni:</dt>
              <dd itemProp="numberOfBathroomsTotal" className="text-gray-700">{numBathrooms}</dd>
            </div>
            <div>
              <dt className="font-semibold text-mountain-wood mb-1">Piano:</dt>
              <dd className="text-gray-700">{apartment.piano}</dd>
            </div>
            <div>
              <dt className="font-semibold text-mountain-wood mb-1">Superficie:</dt>
              <dd className="text-gray-700">{apartment.superficieMq} m²</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="font-semibold text-mountain-wood mb-1">Posizione:</dt>
              <dd itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="text-gray-700">
                <span itemProp="streetAddress">Via Roma 123</span>,{' '}
                <span itemProp="addressLocality">Aprica</span> (
                <span itemProp="addressRegion">SO</span>){' '}
                <span itemProp="postalCode">23031</span>,{' '}
                <span itemProp="addressCountry">Italia</span>
              </dd>
            </div>
            <div className="md:col-span-2">
              <dt className="font-semibold text-mountain-wood mb-1">Distanza impianti sciistici:</dt>
              <dd className="text-gray-700">800 metri (10 minuti a piedi)</dd>
            </div>
          </dl>
        </section>

        {/* Description */}
        <section className="mb-8" aria-labelledby="description-heading">
          <h2 id="description-heading" className="text-2xl md:text-3xl font-bold mb-4 text-mountain-pine">
            Descrizione
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">{apartment.descrizione}</p>
          <p className="mt-4 text-gray-700">
            <strong className="text-mountain-wood">Composizione:</strong> {apartment.composizione}
          </p>
        </section>

        {/* Features - Semantic list for AI parsing */}
        <section className="mb-8" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl md:text-3xl font-bold mb-4 text-mountain-pine">
            Caratteristiche e Dotazioni
          </h2>
          <ul
            className="grid md:grid-cols-2 gap-3"
            role="list"
            data-ai-extract="amenities"
          >
            {apartment.caratteristiche.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2"
                itemProp="amenityFeature"
                itemScope
                itemType="https://schema.org/LocationFeatureSpecification"
              >
                <IconCheck className="w-5 h-5 text-mountain-pine" size={20} />
                <span itemProp="name" className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Additional Structure-wide Amenities */}
        <aside className="bg-gray-50 p-6 rounded-lg mb-8" aria-labelledby="structure-amenities">
          <h3 id="structure-amenities" className="text-xl md:text-2xl font-bold mb-4 text-mountain-pine">
            Servizi della Struttura
          </h3>
          <ul className="space-y-3" role="list">
            <li className="flex items-center gap-3">
              <IconGarage className="w-5 h-5 text-mountain-pine" size={20} />
              <span className="text-gray-700"><strong className="text-mountain-wood">Box auto privato</strong> (coperto)</span>
            </li>
            <li className="flex items-center gap-3">
              <IconSki className="w-5 h-5 text-mountain-pine" size={20} />
              <span className="text-gray-700">Ski room con deposito sci</span>
            </li>
            <li className="flex items-center gap-3">
              <IconWifi className="w-5 h-5 text-mountain-pine" size={20} />
              <span className="text-gray-700">Wi-Fi gratuito ad alta velocità</span>
            </li>
            <li className="flex items-center gap-3">
              <IconKey className="w-5 h-5 text-mountain-pine" size={20} />
              <span className="text-gray-700">Check-in autonomo tramite keybox</span>
            </li>
          </ul>
        </aside>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-mountain-pine to-mountain-wood text-white p-8 rounded-lg text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Prenota {apartment.nome}</h2>
          <p className="mb-6 text-gray-100">
            Contattaci per verificare la disponibilità e ricevere un preventivo
            personalizzato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@apricamountainlodge.it"
              className="inline-flex items-center justify-center gap-2 bg-white text-mountain-pine px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md"
              aria-label="Invia una email a info@apricamountainlodge.it"
            >
              📧 Invia Email
            </a>
            <a
              href="https://wa.me/393331234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              💬 WhatsApp
            </a>
            <a
              href="https://t.me/+393331234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              aria-label="Contattaci su Telegram"
            >
              ✈️ Telegram
            </a>
            <a
              href="tel:+390342123456"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              📞 Chiama Ora
            </a>
          </div>
        </section>

        {/* Related Apartments */}
        <section className="mt-12" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl md:text-3xl font-bold mb-6 text-mountain-pine">
            Altri Appartamenti
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {appartamentiData.appartamenti
              .filter((apt) => apt.slug !== apartment.slug)
              .map((apt) => (
                <article
                  key={apt.slug}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
                >
                  <h3 className="font-bold text-lg mb-2 text-mountain-pine">{apt.nome}</h3>
                  <p className="text-gray-600 mb-3">{apt.postiLetto} posti letto</p>
                  <a
                    href={`/appartamento/${apt.slug}`}
                    className="text-mountain-wood font-semibold hover:text-mountain-pine transition inline-flex items-center gap-1"
                  >
                    Scopri di più <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
          </div>
        </section>
      </article>
    </>
  );
}
