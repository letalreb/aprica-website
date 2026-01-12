import type { Metadata } from 'next';
import appartamentiData from '@/data/appartamenti.json';
import locales from '@/locales/it.json';
import HeroSlideshow from '@/components/HeroSlideshow';
import ApartmentCard from '@/components/ApartmentCard';

export const metadata: Metadata = {
  title: 'Home - Case Vacanze ad Aprica',
  description:
    '4 appartamenti accoglienti ad Aprica per un totale di 20 posti letto. A soli 400 metri dagli impianti sciistici, con box auto privato e ogni comfort.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const { appartamenti, struttura } = appartamentiData;
  const totalBeds = appartamenti.reduce((sum, apt) => sum + apt.postiLetto, 0);

  return (
    <>
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-mountain-pine">
              {locales.home.welcome}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {locales.home.intro}
            </p>
          </div>

          {/* Modern Amenities Grid */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-mountain-wood">
              {locales.home.amenitiesTitle}
            </h3>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="bg-mountain-snow p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🧺</div>
                <p className="text-sm font-semibold text-gray-800">Lavatrice e<br />lavastoviglie</p>
              </div>
              <div className="bg-mountain-snow p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">📶</div>
                <p className="text-sm font-semibold text-gray-800">Wi-Fi<br />veloce</p>
              </div>
              <div className="bg-mountain-snow p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">📺</div>
                <p className="text-sm font-semibold text-gray-800">Netflix<br />e TV</p>
              </div>
              <div className="bg-mountain-snow p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🚿</div>
                <p className="text-sm font-semibold text-gray-800">Bagno elegante<br />con doccia</p>
              </div>
              <div className="bg-mountain-snow p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🚗</div>
                <p className="text-sm font-semibold text-gray-800">Garage<br />privato</p>
              </div>
            </div>
          </div>

          {/* Description Paragraphs */}
          <div className="max-w-4xl mx-auto mt-12 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-center">{locales.home.description1}</p>
            <p className="text-center">{locales.home.description2}</p>
            <p className="text-center font-semibold text-mountain-pine text-xl">
              {locales.home.description3}
            </p>
            <div className="text-center pt-4">
              <p className="text-3xl font-bold text-mountain-wood">A partire da €200/notte</p>
              <p className="text-sm text-mountain-stone mt-2">Prezzi variabili in base al periodo e alla durata del soggiorno</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Optimized Quick Facts - Modern Design */}
      <section
        className="py-16 bg-gradient-to-b from-white to-aprica-snow"
        aria-labelledby="quick-facts"
        data-ai-extract="key-information"
      >
        <div className="container mx-auto px-4">
          <h2
            id="quick-facts"
            className="text-4xl font-bold mb-12 text-center text-mountain-pine"
          >
            📊 Dati in Sintesi
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-mountain-sunset">
              <div className="text-4xl mb-4 text-center">🏠</div>
              <dt className="font-bold text-xl text-mountain-wood mb-3 text-center">
                Posti Letto Totali
              </dt>
              <dd className="text-gray-700 text-center">
                <div className="text-5xl font-bold text-mountain-pine mb-2">{totalBeds}</div>
                <p className="text-sm">Suddivisi in {appartamenti.length} appartamenti</p>
                <p className="text-xs text-gray-500 mt-1">(4+4+6+6)</p>
              </dd>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-mountain-wood">
              <div className="text-4xl mb-4 text-center">⛷️</div>
              <dt className="font-bold text-xl text-mountain-wood mb-3 text-center">
                Distanza Impianti
              </dt>
              <dd className="text-gray-700 text-center">
                <div className="text-5xl font-bold text-mountain-pine mb-2">400m</div>
                <p className="text-sm">5 minuti a piedi</p>
                <p className="text-xs text-gray-500 mt-1">Funivia Aprica-Palabione</p>
              </dd>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-mountain-sunset">
              <div className="text-4xl mb-4 text-center">🅿️</div>
              <dt className="font-bold text-xl text-mountain-wood mb-3 text-center">
                Parcheggio
              </dt>
              <dd className="text-gray-700 text-center">
                <div className="text-2xl font-bold text-mountain-pine mb-2">Box Privato</div>
                <p className="text-sm">Per ogni appartamento</p>
                <p className="text-xs text-gray-500 mt-1">Coperto e riscaldato</p>
              </dd>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto border-l-4 border-mountain-sunset">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <dt className="font-bold text-lg text-mountain-wood mb-2 flex items-center gap-2">
                  <span>📍</span> Posizione
                </dt>
                <dd className="text-gray-700 text-sm">
                  Via Roma 123, 23031 Aprica (SO), Lombardia, Italia
                </dd>
              </div>
              <div>
                <dt className="font-bold text-lg text-mountain-wood mb-2 flex items-center gap-2">
                  <span>✨</span> Dotazioni Standard
                </dt>
                <dd className="text-gray-700 text-sm">
                  Piano cottura a induzione, Lavastoviglie, Lavatrice, Wi-Fi, Riscaldamento autonomo
                </dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apartments Preview - Modern Cards */}
      <section
        className="container mx-auto px-4 py-16"
        aria-labelledby="apartments-heading"
      >
        <div className="text-center mb-12">
          <h2 id="apartments-heading" className="text-4xl font-bold mb-4 text-mountain-pine">
            I Nostri Appartamenti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scegli l'appartamento perfetto per la tua vacanza ad Aprica
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {appartamenti.map((apt) => (
            <ApartmentCard
              key={apt.slug}
              slug={apt.slug}
              nome={apt.nome}
              postiLetto={apt.postiLetto}
              descrizione={apt.descrizione}
              image={apt.image}
              superficieMq={apt.superficieMq}
            />
          ))}
        </div>
      </section>

      {/* Location Highlights - Modern Design with Icons */}
      <section
        className="bg-mountain-pine text-white py-20"
        aria-labelledby="location-heading"
      >
        <div className="container mx-auto px-4">
          <h2 id="location-heading" className="text-4xl font-bold mb-4 text-center">
            Posizione Strategica
          </h2>
          <p className="text-center text-white/90 mb-12 text-lg max-w-2xl mx-auto">
            Nel cuore di Aprica, con accesso immediato a tutte le attrazioni
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <article className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all">
              <div className="text-6xl mb-4 text-center">⛷️</div>
              <h3 className="font-bold text-2xl mb-3 text-center">Impianti Sciistici</h3>
              <p className="text-white/90 text-center">
                <span className="text-3xl font-bold block mb-2">400m</span>
                Comprensorio Aprica con Pista Baradello
              </p>
            </article>
            <article className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all">
              <div className="text-6xl mb-4 text-center">🏪</div>
              <h3 className="font-bold text-2xl mb-3 text-center">Centro Paese</h3>
              <p className="text-white/90 text-center">
                <span className="text-3xl font-bold block mb-2">200m</span>
                Negozi, ristoranti, servizi
              </p>
            </article>
            <article className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all">
              <div className="text-6xl mb-4 text-center">🚂</div>
              <h3 className="font-bold text-2xl mb-3 text-center">Trenino Bernina</h3>
              <p className="text-white/90 text-center">
                <span className="text-3xl font-bold block mb-2">35km</span>
                Patrimonio UNESCO da Tirano
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Gradient */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-mountain-pine to-mountain-wood text-white rounded-3xl p-12 shadow-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">Prenota la Tua Vacanza</h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Contattaci per verificare la disponibilità e ricevere un preventivo personalizzato per
            il tuo soggiorno ad Aprica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@apricamountainlodge.it"
              className="inline-flex items-center justify-center gap-2 bg-white text-mountain-wood px-8 py-4 rounded-full font-bold hover:bg-mountain-snow transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Invia Email
            </a>
            <a
              href="https://wa.me/393331234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:+390342123456"
              className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Chiama Ora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
