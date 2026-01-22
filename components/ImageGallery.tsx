'use client';

import { useState } from 'react';

type GalleryImage =
  | string
  | {
      src: string;
      alt: string;
    };

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const getSrc = (image: GalleryImage) => (typeof image === 'string' ? image : image.src);
  const getAlt = (image: GalleryImage, index: number) =>
    typeof image === 'string'
      ? `Foto ${index + 1} degli appartamenti Aprica Mountain Lodge ad Aprica (SO)`
      : image.alt;

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <>
      <section className="py-8">
        {title && (
          <h3 className="text-2xl font-bold mb-6 text-mountain-pine">{title}</h3>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              className="aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity cursor-pointer group"
              onClick={() => openLightbox(index)}
              type="button"
              aria-label={getAlt(image, index)}
            >
              <img
                src={getSrc(image)}
                alt={getAlt(image, index)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-105 contrast-110 saturate-110"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors z-10"
            aria-label="Chiudi"
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10"
            aria-label="Immagine precedente"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="max-w-7xl max-h-[90vh] mx-auto px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getSrc(images[selectedImage])}
              alt={getAlt(images[selectedImage], selectedImage)}
              className="max-w-full max-h-[90vh] object-contain mx-auto brightness-105 contrast-110 saturate-110"
            />
            {/* Counter */}
            <div className="text-white text-center mt-4 text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10"
            aria-label="Immagine successiva"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
