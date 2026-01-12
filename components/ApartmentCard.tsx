interface ApartmentCardProps {
  slug: string;
  nome: string;
  postiLetto: number;
  descrizione: string;
  image?: string;
  superficieMq: number;
}

export default function ApartmentCard({
  slug,
  nome,
  postiLetto,
  descrizione,
  image,
  superficieMq,
}: ApartmentCardProps) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        {image ? (
          <img
            src={image}
            alt={nome}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-aprica-blue to-aprica-green">
            <span className="text-white text-6xl">🏔️</span>
          </div>
        )}
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="font-bold text-aprica-blue">{postiLetto} posti</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-aprica-green group-hover:text-aprica-blue transition-colors">
          {nome}
        </h3>
        
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {superficieMq}m²
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {postiLetto} persone
          </span>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-2">{descrizione}</p>

        <a
          href={`/appartamento/${slug}`}
          className="inline-flex items-center gap-2 bg-aprica-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all group-hover:gap-3"
        >
          Scopri di più
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
}
