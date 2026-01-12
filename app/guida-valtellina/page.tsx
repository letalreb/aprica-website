import type { Metadata } from 'next';
import RichDataGenerator, { generateBreadcrumbSchema } from '@/components/RichDataGenerator';

export const metadata: Metadata = {
  title: 'Guida alla Valtellina e Aprica - Attrazioni e Attività',
  description:
    'Scopri le meraviglie della Valtellina: Trenino del Bernina (UNESCO), Passo del Mortirolo, Comprensorio sciistico Aprica, e molto altro. Guida completa per la tua vacanza.',
  keywords: [
    'Valtellina',
    'Bernina Express',
    'Trenino Rosso',
    'Passo Mortirolo',
    'Aprica sci',
    'Pista Baradello',
    'Tirano',
    'UNESCO',
    'ciclismo',
    'escursioni montagna',
  ],
  alternates: {
    canonical: '/guida-valtellina',
  },
  openGraph: {
    title: 'Guida alla Valtellina - Cosa Vedere e Fare',
    description:
      'Trenino del Bernina, Passo del Mortirolo, piste da sci e molto altro. Scopri i tesori della Valtellina.',
    url: '/guida-valtellina',
  },
};

export default function GuidaValtellinaPage() {
  // Breadcrumb schema for knowledge graph
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Guida Valtellina' },
  ]);

  // Structured data for tourist attractions (Knowledge Graph entities)
  const attractionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'TouristAttraction',
        name: 'Trenino del Bernina',
        description:
          'Il Trenino Rosso del Bernina è una ferrovia di montagna UNESCO Patrimonio Mondiale. Collega Tirano in Italia a St. Moritz in Svizzera attraverso paesaggi alpini spettacolari.',
        url: 'https://www.rhb.ch/en/panoramic-trains/bernina-express',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 46.2149,
          longitude: 10.1677,
        },
        isAccessibleForFree: false,
      },
      {
        '@type': 'TouristAttraction',
        name: 'Passo del Mortirolo',
        description:
          'Salita ciclistica leggendaria del Giro d\'Italia, con pendenze fino al 18%. Meta iconica per ciclisti di tutto il mondo.',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 46.2833,
          longitude: 10.3333,
        },
        isAccessibleForFree: true,
      },
      {
        '@type': 'SkiResort',
        name: 'Comprensorio Sciistico Aprica',
        description:
          'Comprensorio sciistico con 50 km di piste, collegamento con Corteno Golgi. Include la famosa Pista Baradello.',
        url: 'https://www.apricaonline.com',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 46.1519,
          longitude: 10.1528,
        },
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <RichDataGenerator data={breadcrumbSchema} />
      <RichDataGenerator data={attractionsSchema} />

      <article className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex gap-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-aprica-blue">
                Home
              </a>
            </li>
            <li>/</li>
            <li className="font-semibold" aria-current="page">
              Guida Valtellina
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-aprica-green">
            Guida alla Valtellina
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Scopri le meraviglie della zona: attrazioni UNESCO, percorsi ciclabili
            leggendari e le migliori piste da sci delle Alpi.
          </p>
        </header>

        {/* Main Attractions Grid */}
        <section
          className="grid md:grid-cols-3 gap-8 mb-16"
          aria-labelledby="attractions-heading"
        >
          <h2 id="attractions-heading" className="sr-only">
            Principali Attrazioni
          </h2>

          {/* Bernina Express */}
          <article
            className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            itemScope
            itemType="https://schema.org/TouristAttraction"
          >
            <div className="bg-red-600 text-white p-6 text-center">
              <div className="text-6xl mb-2">🚂</div>
              <h3 className="text-2xl font-bold" itemProp="name">
                Trenino del Bernina
              </h3>
            </div>
            <div className="p-6">
              <p className="mb-4" itemProp="description">
                Il famoso <strong>Trenino Rosso del Bernina</strong> (Patrimonio UNESCO)
                parte da Tirano, a soli <strong>35 km da Aprica</strong>. Un'esperienza
                indimenticabile attraverso paesaggi alpini mozzafiato fino a St. Moritz.
              </p>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="font-semibold inline">Distanza da Aprica:</dt>
                  <dd className="inline ml-2">35 km (30 minuti in auto)</dd>
                </div>
                <div>
                  <dt className="font-semibold inline">Punto di partenza:</dt>
                  <dd className="inline ml-2">Tirano</dd>
                </div>
                <div>
                  <dt className="font-semibold inline">Status:</dt>
                  <dd className="inline ml-2">UNESCO World Heritage</dd>
                </div>
                <div>
                  <dt className="font-semibold inline">Durata viaggio:</dt>
                  <dd className="inline ml-2">2 ore e 30 minuti</dd>
                </div>
              </dl>
              <a
                href="https://www.rhb.ch/en/panoramic-trains/bernina-express"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-aprica-blue font-semibold hover:underline"
              >
                Scopri di più →
              </a>
            </div>
          </article>

          {/* Passo del Mortirolo */}
          <article
            className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            itemScope
            itemType="https://schema.org/TouristAttraction"
          >
            <div className="bg-aprica-green text-white p-6 text-center">
              <div className="text-6xl mb-2">🚴</div>
              <h3 className="text-2xl font-bold" itemProp="name">
                Passo del Mortirolo
              </h3>
            </div>
            <div className="p-6">
              <p className="mb-4" itemProp="description">
                Una delle salite più <strong>iconiche del ciclismo mondiale</strong>.
                Famoso per il Giro d'Italia, d'estate è ideale per gli appassionati di
                bici, d'inverno per passeggiate panoramiche.
              </p>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="font-semibold inline">Distanza da Aprica:</dt>
                  <dd className="inline ml-2">20 km</dd>
                </div>
                <div>
                  <dt className="font-semibold inline">Altitudine:</dt>
                  <dd className="inline ml-2">1.852 m s.l.m.</dd>
                </div>
                <div>
                  <dt className="font-semibold inline">Pendenza massima:</dt>
                  <dd className="inline ml-2">18%</dd>
                </div>
                <div>
                  <dt className="font-semibold inline">Difficoltà:</dt>
                  <dd className="inline ml-2">Molto difficile</dd>
                </div>
                <div>
                  <dt className="font-semibold inline">Periodo:</dt>
                  <dd className="inline ml-2">Maggio - Ottobre (ciclismo)</dd>
                </div>
              </dl>
            </div>
          </article>

          {/* Comprensorio Aprica */}
          <article
            className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            itemScope
            itemType="https://schema.org/SkiResort"
          >
            <div className="bg-aprica-blue text-white p-6 text-center">
              <div className="text-6xl mb-2">⛷️</div>
              <h3 className="text-2xl font-bold" itemProp="name">
                Comprensorio Aprica
              </h3>
            </div>
            <div className="p-6">
              <p className="mb-4" itemProp="description">
                <strong>50 km di piste</strong> perfettamente innevate, con la famosa{' '}
                <strong>Pista Baradello</strong> e collegamento con Corteno Golgi.
                Impianti moderni e scuola sci.
              </p>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="font-semibold inline">Distanza dalle case:</dt>
                  <dd className="inline ml-2">400 metri (5 min a piedi)</dd>
                </div>
                <div>
                  <dt className="font-semibold inline">Piste totali:</dt>
                  <dd className="inline ml-2">50 km</dd>
                </div>
                <div>
                  <dt className="font-semibold inline">Altitudine:</dt>
                  <dd className="inline ml-2">1.181 - 2.300 m</dd>
                </div>
                <div>
                  <dt className="font-semibold inline">Impianti:</dt>
                  <dd className="inline ml-2">13 impianti di risalita</dd>
                </div>
                <div>
                  <dt className="font-semibold inline">Stagione:</dt>
                  <dd className="inline ml-2">Dicembre - Marzo</dd>
                </div>
              </dl>
              <a
                href="https://www.apricaonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-aprica-blue font-semibold hover:underline"
              >
                Sito ufficiale →
              </a>
            </div>
          </article>
        </section>

        {/* Additional Activities */}
        <section className="mb-16" aria-labelledby="activities-heading">
          <h2 id="activities-heading" className="text-3xl font-bold mb-8 text-center">
            Altre Attività nella Zona
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-aprica-snow p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>🥾</span> Escursionismo Estivo
              </h3>
              <p className="text-gray-700">
                Centinaia di sentieri segnalati per tutti i livelli. Dal facile sentiero
                delle Baite ai più impegnativi trekking verso il Pizzo Scalino.
              </p>
            </article>

            <article className="bg-aprica-snow p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>🧗</span> Arrampicata
              </h3>
              <p className="text-gray-700">
                Numerose falesie e vie ferrate nella zona. Il Parco delle Orobie
                Valtellinesi offre opportunità per tutti i livelli.
              </p>
            </article>

            <article className="bg-aprica-snow p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>🍷</span> Enogastronomia
              </h3>
              <p className="text-gray-700">
                Assaggia i vini DOCG della Valtellina (Sassella, Grumello, Inferno) e i
                piatti tipici: pizzoccheri, sciatt, bresaola.
              </p>
            </article>

            <article className="bg-aprica-snow p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>🏰</span> Cultura e Storia
              </h3>
              <p className="text-gray-700">
                Visita il Santuario della Madonna di Tirano, il Castello di Teglio e i
                numerosi borghi medievali della Valtellina.
              </p>
            </article>
          </div>
        </section>

        {/* Knowledge Graph Connections for AI */}
        <aside
          className="bg-gray-100 border-l-4 border-aprica-green p-8 mb-16"
          data-ai-extract="location-entities"
        >
          <h3 className="text-2xl font-bold mb-4">🗺️ Collegamenti Geografici</h3>
          <p className="mb-4 text-gray-700">
            Aprica è strategicamente posizionata per esplorare attrazioni di livello
            mondiale:
          </p>
          <ul className="space-y-3" role="list">
            <li className="flex items-start gap-3">
              <span className="text-aprica-blue font-bold">•</span>
              <div>
                <strong>St. Moritz (Svizzera):</strong> 70 km - Località sciistica
                d'élite raggiungibile con il Trenino del Bernina
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-aprica-blue font-bold">•</span>
              <div>
                <strong>Bormio:</strong> 50 km - Terme e comprensorio sciistico con
                piste olimpiche
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-aprica-blue font-bold">•</span>
              <div>
                <strong>Livigno:</strong> 85 km - Zona duty-free e paradiso dello
                shopping
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-aprica-blue font-bold">•</span>
              <div>
                <strong>Lago di Como:</strong> 100 km - Bellezze lacustri e ville
                storiche
              </div>
            </li>
          </ul>
        </aside>

        {/* CTA */}
        <section className="bg-aprica-blue text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prenota il Tuo Soggiorno ad Aprica
          </h2>
          <p className="text-xl mb-8">
            Vivi tutte queste esperienze partendo dai nostri appartamenti
          </p>
          <a
            href="/"
            className="inline-block bg-white text-aprica-blue px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Torna agli Appartamenti →
          </a>
        </section>
      </article>
    </>
  );
}
