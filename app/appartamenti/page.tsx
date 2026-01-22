import type { Metadata } from 'next';
import Image from 'next/image';
import appartamentiData from '@/data/appartamenti.json';
import ApartmentCard from '@/components/ApartmentCard';
import { IconWasher, IconWifi, IconTv, IconShower, IconGarage } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Appartamenti - Case Vacanze Aprica',
  description: '4 appartamenti accoglienti ad Aprica: 2 bilocali da 4 posti e 2 trilocali da 6 posti. Tutti con cucina completa, box auto e a 800m dagli impianti.',
  alternates: {
    canonical: '/appartamenti',
  },
};

export default function AppartamentiPage() {
  const { appartamenti } = appartamentiData;
  const totalBeds = appartamenti.reduce((sum, apt) => sum + apt.postiLetto, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mountain-pine via-mountain-wood to-mountain-pine text-white py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/panorama-passo-mortirolo-aprica-hd.jpg"
            alt="Montagne di Aprica"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mountain-pine/60 via-mountain-pine/50 to-mountain-pine/70"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold">
              🏔️ {appartamenti.length} Soluzioni Esclusive
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">I Nostri Appartamenti</h1>
          <p className="text-2xl mb-4 drop-shadow-md">
            {appartamenti.length} appartamenti accoglienti per ogni esigenza
          </p>
          <p className="text-xl text-gray-100 drop-shadow-md mb-6">
            {totalBeds} posti letto totali • Tutti con box auto privato
          </p>
          
          {/* Pricing Badge */}
          <div className="inline-block">
            <div className="bg-white/90 border-2 border-white px-6 py-3 rounded-2xl shadow-2xl backdrop-blur-md">
              <p className="text-xs text-gray-600 mb-1">A partire da</p>
              <p className="text-2xl font-bold text-mountain-pine">€300<span className="text-lg font-normal text-gray-700">/notte</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
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

      {/* Common Features */}
      <section className="py-20 bg-gradient-to-b from-white via-mountain-fog/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-mountain-sunset/10 text-mountain-sunset text-sm font-semibold">
                ✨ Tutti i Comfort
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-mountain-pine to-mountain-wood bg-clip-text text-transparent">
              Servizi Comuni a Tutti gli Appartamenti
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
              Appartamenti di nuova costruzione, completamente arredati e dotati di tutti i comfort moderni
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="flex justify-center mb-4"><IconWasher className="w-12 h-12 text-mountain-pine" size={48} /></div>
              <h3 className="font-bold text-xl mb-2 text-mountain-pine">Lavatrice e Lavastoviglie</h3>
              <p className="text-gray-700">
                Elettrodomestici moderni per il massimo comfort durante il soggiorno
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="flex justify-center mb-4"><IconWifi className="w-12 h-12 text-mountain-pine" size={48} /></div>
              <h3 className="font-bold text-xl mb-2 text-mountain-pine">Wi-Fi Veloce</h3>
              <p className="text-gray-700">
                Connessione internet ad alta velocità in tutti gli appartamenti
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="flex justify-center mb-4"><IconTv className="w-12 h-12 text-mountain-pine" size={48} /></div>
              <h3 className="font-bold text-xl mb-2 text-mountain-pine">Netflix e TV</h3>
              <p className="text-gray-700">
                Smart TV con Netflix per il vostro intrattenimento
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="flex justify-center mb-4"><IconShower className="w-12 h-12 text-mountain-pine" size={48} /></div>
              <h3 className="font-bold text-xl mb-2 text-mountain-pine">Bagno Elegante</h3>
              <p className="text-gray-700">
                Bagni moderni con doccia, curati nei minimi dettagli
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="flex justify-center mb-4"><IconGarage className="w-12 h-12 text-mountain-pine" size={48} /></div>
              <h3 className="font-bold text-xl mb-2 text-mountain-pine">Garage Privato</h3>
              <p className="text-gray-700">
                Box auto coperto per ogni appartamento
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">🍳</div>
              <h3 className="font-bold text-xl mb-2 text-mountain-pine">Cucina Completa</h3>
              <p className="text-gray-700">
                Piano cottura a induzione e tutti gli utensili necessari
              </p>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-mountain-sunset via-mountain-wood to-mountain-pine opacity-20 blur-2xl rounded-2xl"></div>
              <div className="relative glass border-2 border-white/30 p-10 rounded-2xl shadow-xl">
                <div className="inline-block mb-3">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-mountain-sunset/20 text-mountain-sunset text-sm font-bold">
                    ✨ Nuova Costruzione
                  </span>
                </div>
                <p className="text-lg leading-relaxed text-gray-800">
                  <strong className="text-2xl block mb-3 text-mountain-pine">Appena ultimata!</strong>
                  Ambienti nuovi, curati nei dettagli e progettati per farvi sentire subito a casa.
                  Il perfetto equilibrio tra comfort moderno e fascino alpino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-mountain-sunset via-mountain-wood to-mountain-pine opacity-10 blur-3xl rounded-3xl"></div>
          <div className="relative glass border-2 border-white/20 rounded-3xl p-12 shadow-2xl text-center">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-mountain-sunset/20 text-mountain-sunset text-sm font-bold backdrop-blur-sm">
                🏔️ Disponibilità Limitata
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-mountain-pine via-mountain-wood to-mountain-sunset bg-clip-text text-transparent">Hai trovato l'appartamento perfetto?</h2>
            <p className="text-xl mb-8 text-gray-700">
              Contattaci per verificare la disponibilità e ricevere un preventivo personalizzato
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@apricamountainlodge.it"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-mountain-pine to-mountain-wood text-white px-10 py-5 rounded-full font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 shadow-xl group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Richiedi Disponibilità
              </a>
              <a
                href="https://wa.me/393331234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
