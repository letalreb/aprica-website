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
    <article className="group cursor-pointer card-elegant">
      <a href={`/appartamento/${slug}`} className="block">
        {/* Image Container - Elegant style */}
        <div className="relative aspect-square rounded-3xl overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
          {image ? (
            <>
              <img
                src={image}
                alt={nome}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 brightness-105 contrast-110 saturate-110"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-mountain-pine shadow-lg transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                Disponibile
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-mountain-pine via-mountain-wood to-mountain-sunset">
              <span className="text-white text-6xl">🏔️</span>
            </div>
          )}
        </div>

        {/* Content - Elegant style */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-mountain-pine group-hover:text-mountain-sunset transition-colors duration-300">
              {nome}
            </h3>
          </div>
          
          <p className="text-sm text-mountain-stone font-medium">
            {postiLetto} ospiti
          </p>
          
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{descrizione}</p>
          
          <div className="pt-2 flex items-center justify-end border-t border-gray-100 mt-3">
            <span className="text-mountain-sunset font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
              Scopri <span className="ml-1">→</span>
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
