import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import RichDataGenerator, {
  generateAccommodationSchema,
  generateBreadcrumbSchema,
} from '@/components/RichDataGenerator';
import appartamentiData from '@/data/appartamenti.json';

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
    description: `${apartment.descrizione} ${apartment.composizione}. Dotato di ${apartment.caratteristiche.join(', ')}. Superficie ${apartment.superficieMq}mq.`,
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
      languages: {
        'it-IT': `/it/appartamento/${apartment.slug}`,
        'en-US': `/en/appartamento/${apartment.slug}`,
      },
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

      <article className="container mx-auto px-4 py-8" itemScope itemType="https://schema.org/Apartment">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex gap-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-aprica-blue">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/appartamenti" className="hover:text-aprica-blue">
                Appartamenti
              </a>
            </li>
            <li>/</li>
            <li className="font-semibold" aria-current="page">
              {apartment.nome}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-aprica-blue" itemProp="name">
            {apartment.nome}
          </h1>
          <div className="flex gap-4 text-lg text-gray-700">
            <span className="flex items-center gap-2">
              <strong>{apartment.postiLetto}</strong> posti letto
            </span>
            <span>•</span>
            <span>{apartment.superficieMq}m²</span>
            <span>•</span>
            <span>Piano {apartment.piano}</span>
          </div>
        </header>

        {/* AI-Optimized Data Summary - Visible section for LLM parsing */}
        <section
          className="bg-aprica-snow border-l-4 border-aprica-blue p-6 mb-8"
          aria-labelledby="data-summary-heading"
          data-ai-extract="key-facts"
        >
          <h2
            id="data-summary-heading"
            className="text-2xl font-bold mb-4 text-aprica-green"
          >
            📊 Dati in Sintesi (AI-Ready Facts)
          </h2>
          <dl className="grid md:grid-cols-2 gap-4">
            <div>
              <dt className="font-semibold">Struttura:</dt>
              <dd itemProp="description">{apartment.nome}</dd>
            </div>
            <div>
              <dt className="font-semibold">Capacità:</dt>
              <dd>
                <span itemProp="occupancy">{apartment.postiLetto} persone</span>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Camere da letto:</dt>
              <dd itemProp="numberOfBedrooms">{numBedrooms}</dd>
            </div>
            <div>
              <dt className="font-semibold">Bagni:</dt>
              <dd itemProp="numberOfBathroomsTotal">{numBathrooms}</dd>
            </div>
            <div>
              <dt className="font-semibold">Superficie:</dt>
              <dd>
                <span itemProp="floorSize">{apartment.superficieMq}m²</span>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Piano:</dt>
              <dd>{apartment.piano}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="font-semibold">Posizione:</dt>
              <dd itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">Via Roma 123</span>,{' '}
                <span itemProp="addressLocality">Aprica</span> (
                <span itemProp="addressRegion">SO</span>){' '}
                <span itemProp="postalCode">23031</span>,{' '}
                <span itemProp="addressCountry">Italia</span>
              </dd>
            </div>
            <div className="md:col-span-2">
              <dt className="font-semibold">Distanza impianti sciistici:</dt>
              <dd>400 metri (5 minuti a piedi)</dd>
            </div>
          </dl>
        </section>

        {/* Description */}
        <section className="mb-8" aria-labelledby="description-heading">
          <h2 id="description-heading" className="text-2xl font-bold mb-4">
            Descrizione
          </h2>
          <p className="text-lg leading-relaxed">{apartment.descrizione}</p>
          <p className="mt-4 text-gray-700">
            <strong>Composizione:</strong> {apartment.composizione}
          </p>
        </section>

        {/* Features - Semantic list for AI parsing */}
        <section className="mb-8" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl font-bold mb-4">
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
                <span className="text-aprica-blue text-xl">✓</span>
                <span itemProp="name">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Additional Structure-wide Amenities */}
        <aside className="bg-gray-50 p-6 rounded-lg mb-8" aria-labelledby="structure-amenities">
          <h3 id="structure-amenities" className="text-xl font-bold mb-4">
            Servizi della Struttura
          </h3>
          <ul className="space-y-2" role="list">
            <li className="flex items-center gap-2">
              <span className="text-aprica-blue">🅿️</span>
              <strong>Box auto privato</strong> (coperto e riscaldato)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-aprica-blue">🎿</span>
              Ski room con deposito sci
            </li>
            <li className="flex items-center gap-2">
              <span className="text-aprica-blue">📶</span>
              Wi-Fi gratuito ad alta velocità
            </li>
            <li className="flex items-center gap-2">
              <span className="text-aprica-blue">🔑</span>
              Check-in autonomo tramite keybox
            </li>
          </ul>
        </aside>

        {/* CTA Section */}
        <section className="bg-aprica-blue text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Prenota {apartment.nome}</h2>
          <p className="mb-6">
            Contattaci per verificare la disponibilità e ricevere un preventivo
            personalizzato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@apricamountainlodge.it"
              className="bg-white text-aprica-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
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
              href="tel:+390342123456"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              📞 Chiama Ora
            </a>
          </div>
        </section>

        {/* Related Apartments */}
        <section className="mt-12" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-bold mb-6">
            Altri Appartamenti
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {appartamentiData.appartamenti
              .filter((apt) => apt.slug !== apartment.slug)
              .map((apt) => (
                <article
                  key={apt.slug}
                  className="border rounded-lg p-4 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-lg mb-2">{apt.nome}</h3>
                  <p className="text-gray-600 mb-3">{apt.postiLetto} posti letto</p>
                  <a
                    href={`/appartamento/${apt.slug}`}
                    className="text-aprica-blue font-semibold hover:underline"
                  >
                    Scopri di più →
                  </a>
                </article>
              ))}
          </div>
        </section>
      </article>
    </>
  );
}
