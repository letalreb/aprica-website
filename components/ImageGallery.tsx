interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  return (
    <section className="py-8">
      {title && (
        <h3 className="text-2xl font-bold mb-6 text-aprica-green">{title}</h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group"
          >
            <img
              src={image}
              alt={`Immagine ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
