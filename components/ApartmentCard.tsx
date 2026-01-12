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
    <article className="group cursor-pointer">
      <a href={`/appartamento/${slug}`} className="block">
        {/* Image Container - Airbnb style */}
        <div className="relative aspect-square rounded-2xl overflow-hidden mb-3">
          {image ? (
            <img
              src={image}
              alt={nome}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-105 contrast-110 saturate-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-mountain-pine to-mountain-wood">
              <span className="text-white text-6xl">🏔️</span>
            </div>
          )}
        </div>

        {/* Content - Airbnb style */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-mountain-pine group-hover:text-mountain-wood transition-colors">
              {nome}
            </h3>
          </div>
          
          <p className="text-sm text-mountain-stone">
            {postiLetto} ospiti · {superficieMq}m²
          </p>
          
          <p className="text-sm text-mountain-stone line-clamp-2">{descrizione}</p>
          
          <div className="pt-1">
            <span className="text-mountain-pine font-medium text-sm">Scopri disponibilità →</span>
          </div>
        </div>
      </a>
    </article>
  );
}
