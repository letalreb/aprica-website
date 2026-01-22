import type { Metadata } from 'next';
import appartamentiData from '@/data/appartamenti.json';
import locales from '@/locales/it.json';
import HeroSlideshow from '@/components/HeroSlideshow';
import ApartmentCard from '@/components/ApartmentCard';
import Testimonials from '@/components/Testimonials';
import { IconWasher, IconWifi, IconTv, IconShower, IconGarage } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Home - Case Vacanze ad Aprica',
  description:
    '4 appartamenti accoglienti ad Aprica per un totale di 20 posti letto. A soli 800 metri dagli impianti sciistici, con box auto privato e ogni comfort.',
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
      <section className="py-20 bg-gradient-to-b from-white via-mountain-fog/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-slideUp">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-mountain-sunset/10 text-mountain-sunset text-sm font-semibold">
                ✨ Esperienza Alpina Premium
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-mountain-pine bg-gradient-to-r from-mountain-pine to-mountain-wood bg-clip-text text-transparent">
              {locales.home.welcome}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              {locales.home.intro}
            </p>
          </div>

          {/* Elegant Amenities Grid */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-mountain-pine">
              {locales.home.amenitiesTitle}
            </h3>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="glass p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 card-elegant">
                <div className="flex justify-center mb-4"><IconWasher className="w-12 h-12 text-mountain-pine" size={48} /></div>
                <p className="text-sm font-bold text-gray-800">Lavatrice e<br />lavastoviglie</p>
              </div>
              <div className="glass p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 card-elegant">
                <div className="flex justify-center mb-4"><IconWifi className="w-12 h-12 text-mountain-pine" size={48} /></div>
                <p className="text-sm font-bold text-gray-800">Wi-Fi<br />veloce</p>
              </div>
              <div className="glass p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 card-elegant">
                <div className="flex justify-center mb-4"><IconTv className="w-12 h-12 text-mountain-pine" size={48} /></div>
                <p className="text-sm font-bold text-gray-800">Netflix<br />e TV</p>
              </div>
              <div className="glass p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 card-elegant">
                <div className="flex justify-center mb-4"><IconShower className="w-12 h-12 text-mountain-pine" size={48} /></div>
                <p className="text-sm font-bold text-gray-800">Bagno elegante<br />con doccia</p>
              </div>
              <div className="glass p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 card-elegant">
                <div className="flex justify-center mb-4"><IconGarage className="w-12 h-12 text-mountain-pine" size={48} /></div>
                <p className="text-sm font-bold text-gray-800">Garage<br />privato</p>
              </div>
            </div>
          </div>

          {/* Description Paragraphs */}
          <div className="max-w-4xl mx-auto mt-16 space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-center animate-fadeIn">{locales.home.description1}</p>
            <p className="text-center animate-fadeIn">{locales.home.description2}</p>
            <p className="text-center font-bold text-mountain-pine text-2xl animate-fadeIn">
              {locales.home.description3}
            </p>
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
                <div className="text-5xl font-bold text-mountain-pine mb-2">800m</div>
                <p className="text-sm">10 minuti a piedi</p>
                <p className="text-xs text-gray-500 mt-1">Funivia Aprica-Magnolta</p>
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
                <p className="text-xs text-gray-500 mt-1">Coperto</p>
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
                  Piano cottura a induzione, Lavastoviglie, Lavatrice, Wi-Fi, Riscaldamento autonomo con controllo remoto
                </dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apartments Preview - Elegant Cards */}
      <section
        className="container mx-auto px-4 py-20 bg-gradient-to-b from-white to-mountain-fog/20"
        aria-labelledby="apartments-heading"
      >
        <div className="text-center mb-16 animate-slideUp">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-mountain-pine/10 text-mountain-pine text-sm font-semibold">
              🏔️ 4 Appartamenti Esclusivi
            </span>
          </div>
          <h2 id="apartments-heading" className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-mountain-pine via-mountain-wood to-mountain-pine bg-clip-text text-transparent">
            I Nostri Appartamenti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Scegli l'appartamento perfetto per la tua vacanza ad Aprica. Design moderno, comfort premium e vista mozzafiato.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {appartamenti.map((apt, index) => (
            <div key={apt.slug} className="animate-fadeIn" style={{animationDelay: `${index * 0.1}s`}}>
              <ApartmentCard
                slug={apt.slug}
                nome={apt.nome}
                postiLetto={apt.postiLetto}
                descrizione={apt.descrizione}
                image={apt.image}
                superficieMq={apt.superficieMq}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Location Highlights - Elegant Design with Glassmorphism */}
      <section
        className="relative bg-gradient-to-br from-mountain-pine via-mountain-wood to-mountain-pine text-white py-24 overflow-hidden"
        aria-labelledby="location-heading"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-mountain-sunset rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slideUp">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold">
                📍 Posizione Privilegiata
              </span>
            </div>
            <h2 id="location-heading" className="text-5xl md:text-6xl font-bold mb-4">
              Nel Cuore di Aprica
            </h2>
            <p className="text-gray-100 mb-12 text-xl max-w-2xl mx-auto">
              Accesso immediato a piste, servizi e attrazioni alpine
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="glass p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-elegant group">
              <div className="text-7xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-500">⛷️</div>
              <h3 className="font-bold text-2xl mb-4 text-center text-mountain-pine">Impianti Sciistici</h3>
              <p className="text-gray-700 text-center">
                <span className="text-4xl font-bold block mb-3 bg-gradient-to-r from-mountain-pine to-mountain-wood bg-clip-text text-transparent">800m</span>
                Funivia Aprica-Magnolta
              </p>
            </article>
            <article className="glass p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-elegant group">
              <div className="text-7xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-500">🏪</div>
              <h3 className="font-bold text-2xl mb-4 text-center text-mountain-pine">Centro Paese</h3>
              <p className="text-gray-700 text-center">
                <span className="text-4xl font-bold block mb-3 bg-gradient-to-r from-mountain-pine to-mountain-wood bg-clip-text text-transparent">200m</span>
                Negozi, ristoranti, servizi
              </p>
            </article>
            <article className="glass p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-elegant group">
              <div className="text-7xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-500">🚂</div>
              <h3 className="font-bold text-2xl mb-4 text-center text-mountain-pine">Trenino Bernina</h3>
              <p className="text-gray-700 text-center">
                <span className="text-4xl font-bold block mb-3 bg-gradient-to-r from-mountain-pine to-mountain-wood bg-clip-text text-transparent">35km</span>
                Patrimonio UNESCO da Tirano
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section - Elegant with Glassmorphism */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto relative">
          {/* Background gradient blob */}
          <div className="absolute inset-0 bg-gradient-to-r from-mountain-sunset via-mountain-wood to-mountain-pine opacity-10 blur-3xl rounded-3xl"></div>
          
          <div className="relative glass border-2 border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-mountain-sunset/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-mountain-pine/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="inline-block mb-6">
                <span className="inline-flex items-center px-5 py-2 rounded-full bg-mountain-sunset/20 text-mountain-sunset text-sm font-bold backdrop-blur-sm">
                  ✨ Disponibilità Limitata
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-mountain-pine via-mountain-wood to-mountain-sunset bg-clip-text text-transparent">
                Prenota la Tua Vacanza
              </h2>
              <p className="text-xl mb-12 text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Contattaci per verificare la disponibilità e ricevere un preventivo personalizzato per
                il tuo soggiorno ad Aprica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@apricamountainlodge.it"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-mountain-pine to-mountain-wood text-white px-10 py-5 rounded-full font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl group"
                >
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-full font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl group"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://t.me/+393331234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-full font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl group"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
                <a
                  href="tel:+390342123456"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-10 py-5 rounded-full font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl group"
                >
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          </div>
        </div>
      </section>
    </>
  );
}
