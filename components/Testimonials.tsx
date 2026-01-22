export default function Testimonials() {
  const allTestimonials = [
    {
      name: 'Marco & Giulia',
      location: 'Milano',
      date: 'Dicembre 2025',
      rating: 5,
      text: 'Appartamento fantastico! Pulizia impeccabile, vicinissimo agli impianti e con un box auto che in pieno inverno è oro. I bambini hanno adorato la zona e noi genitori il comfort dell\'appartamento. Cucina super attrezzata, ci siamo sentiti come a casa. Torneremo sicuramente!',
      avatar: 'MG',
    },
    {
      name: 'Famiglia Rossi',
      location: 'Bergamo',
      date: 'Dicembre 2025',
      rating: 5,
      text: 'Una settimana indimenticabile! L\'appartamento è spazioso, moderno e dotato di ogni comfort. La posizione è strategica: in 10 minuti a piedi sei sulle piste. Il proprietario disponibilissimo e gentile. Rapporto qualità-prezzo imbattibile. Consigliatissimo!',
      avatar: 'FR',
    },
    {
      name: 'Alessandro',
      location: 'Brescia',
      date: 'Dicembre 2025',
      rating: 5,
      text: 'Perfetto per un weekend sulla neve con gli amici! Appartamento pulitissimo, cucina attrezzata con tutto il necessario e la lavastoviglie che salva la vita. Zona tranquilla ma vicina a tutto. Super consigliato!',
      avatar: 'A',
    },
    {
      name: 'Laura & Paolo',
      location: 'Monza',
      date: 'Gennaio 2026',
      rating: 5,
      text: 'Che dire... semplicemente perfetto! Dall\'accoglienza alla pulizia, dalla posizione alla dotazione dell\'appartamento. Il box auto è stato provvidenziale con tutta la neve che c\'era. Vista stupenda sulle montagne. Una vacanza da sogno, grazie di cuore!',
      avatar: 'LP',
    },
    {
      name: 'Famiglia Bianchi',
      location: 'Como',
      date: 'Dicembre 2025',
      rating: 5,
      text: 'Siamo una famiglia con 3 bambini e ci siamo trovati benissimo! Spazio, comfort e vicinanza agli impianti. I piccoli hanno imparato a sciare e noi ci siamo goduti una settimana di relax totale. Appartamento caldo, accogliente e curato nei minimi dettagli. Top!',
      avatar: 'FB',
    },
    {
      name: 'Stefania',
      location: 'Lecco',
      date: 'Gennaio 2026',
      rating: 5,
      text: 'Weekend perfetto con il mio compagno! L\'appartamento è nuovo, pulito e arredato con gusto. La cucina a induzione è fantastica e c\'è davvero tutto. Zona tranquilla, parcheggio comodo. Aprica è un gioiello e questo appartamento lo valorizza. Ci ritorneremo presto!',
      avatar: 'S',
    },
  ];

  // Selezione deterministica (più citabile da AI e consistente per gli utenti)
  const testimonials = [
    allTestimonials.find((t) => t.avatar === 'FB'),
    allTestimonials.find((t) => t.avatar === 'S'),
    allTestimonials.find((t) => t.avatar === 'LP'),
  ].filter(Boolean) as typeof allTestimonials;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-mountain-mist/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mountain-stone mb-4">
            Le Recensioni dei Nostri Ospiti
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scopri cosa dicono le famiglie e gli ospiti che hanno scelto Aprica Mountain Lodge per le loro vacanze
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.avatar}-${testimonial.date}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-mountain-fog/30"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-mountain-pine text-white flex items-center justify-center font-semibold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-mountain-stone text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].slice(0, testimonial.rating).map((star) => (
                  <svg
                    key={`${testimonial.avatar}-star-${star}`}
                    className="w-5 h-5 fill-amber-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Date */}
              <p className="text-sm text-gray-500">{testimonial.date}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Vuoi lasciare anche tu una recensione dopo il tuo soggiorno?
          </p>
          <a
            href="mailto:info@apricamountainlodge.it?subject=Recensione soggiorno"
            className="inline-block bg-mountain-pine text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all text-base font-semibold shadow-lg hover:shadow-xl"
          >
            Condividi la Tua Esperienza
          </a>
        </div>
      </div>
    </section>
  );
}
