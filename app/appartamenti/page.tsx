import type { Metadata } from 'next';
import appartamentiData from '@/data/appartamenti.json';
import ApartmentCard from '@/components/ApartmentCard';

export const metadata: Metadata = {
  title: 'Appartamenti - Case Vacanze Aprica',
  description: '4 appartamenti accoglienti ad Aprica: 2 bilocali da 4 posti e 2 trilocali da 6 posti. Tutti con cucina completa, box auto e a 400m dagli impianti.',
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
      <section className="bg-gradient-to-r from-aprica-blue to-aprica-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">I Nostri Appartamenti</h1>
          <p className="text-2xl mb-4">
            {appartamenti.length} appartamenti accoglienti per ogni esigenza
          </p>
          <p className="text-xl text-white/90">
            {totalBeds} posti letto totali • Tutti con box auto privato
          </p>
          <p className="text-2xl font-bold mt-4">
            A partire da €200/notte
          </p>
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
      <section className="bg-aprica-snow py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-aprica-green">
            Servizi Comuni a Tutti gli Appartamenti
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Appartamenti di nuova costruzione, completamente arredati e dotati di tutti i comfort moderni
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">🧺</div>
              <h3 className="font-bold text-xl mb-2 text-aprica-blue">Lavatrice e Lavastoviglie</h3>
              <p className="text-gray-700">
                Elettrodomestici moderni per il massimo comfort durante il soggiorno
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">📶</div>
              <h3 className="font-bold text-xl mb-2 text-aprica-blue">Wi-Fi Veloce</h3>
              <p className="text-gray-700">
                Connessione internet ad alta velocità in tutti gli appartamenti
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">📺</div>
              <h3 className="font-bold text-xl mb-2 text-aprica-blue">Netflix e TV</h3>
              <p className="text-gray-700">
                Smart TV con Netflix per il vostro intrattenimento
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">🚿</div>
              <h3 className="font-bold text-xl mb-2 text-aprica-blue">Bagno Elegante</h3>
              <p className="text-gray-700">
                Bagni moderni con doccia, curati nei minimi dettagli
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="font-bold text-xl mb-2 text-aprica-blue">Garage Privato</h3>
              <p className="text-gray-700">
                Box auto coperto e riscaldato per ogni appartamento
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">🍳</div>
              <h3 className="font-bold text-xl mb-2 text-aprica-blue">Cucina Completa</h3>
              <p className="text-gray-700">
                Piano cottura a induzione e tutti gli utensili necessari
              </p>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-aprica-blue to-aprica-green text-white p-8 rounded-2xl">
              <p className="text-lg leading-relaxed">
                <strong className="text-xl">Nuova costruzione appena ultimata!</strong><br/>
                Ambienti nuovi, curati nei dettagli e progettati per farvi sentire subito a casa.
                Il perfetto equilibrio tra comfort moderno e fascino alpino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-aprica-blue to-aprica-green text-white rounded-3xl p-12 shadow-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">Hai trovato l'appartamento perfetto?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contattaci per verificare la disponibilità e ricevere un preventivo personalizzato
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@apricamountainlodge.it"
              className="inline-flex items-center justify-center gap-2 bg-white text-aprica-blue px-8 py-4 rounded-full font-bold hover:bg-aprica-snow transition-all transform hover:scale-105 shadow-lg"
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
      </section>
    </div>
  );
}
