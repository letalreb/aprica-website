import type { Metadata } from 'next';
import ImageGallery from '@/components/ImageGallery';

export const metadata: Metadata = {
  title: 'Galleria Foto - Case Vacanze Aprica',
  description: 'Scopri le foto dei nostri appartamenti ad Aprica. Interni moderni, viste panoramiche sulle montagne e servizi di qualità.',
  alternates: {
    canonical: '/galleria',
  },
};

// Tutte le immagini disponibili
const allImages = [
  '/images/IMG_20250831_120852.jpg',
  '/images/IMG_20251128_095112.jpg',
  '/images/IMG_20251220_115211.jpg',
  '/images/IMG_20251220_120620.jpg',
  '/images/IMG_20251220_120627.jpg',
  '/images/IMG_20251220_120630.jpg',
  '/images/IMG_20251220_144302.jpg',
  '/images/IMG_20251220_144315.jpg',
  '/images/IMG_20251220_152054.jpg',
  '/images/IMG_20251220_163313.jpg',
  '/images/IMG_20251220_163424.jpg',
  '/images/IMG_20251220_163427.jpg',
  '/images/IMG_20251220_163607.jpg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.58 (1).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.58.jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.59 (2).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.59 (3).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.59 (4).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.59 (5).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.59.jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (1).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (10).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (2).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (3).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (4).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (5).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (6).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.01.jpeg',
];

export default function GalleriaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="text-center mb-16 py-20 bg-gradient-to-b from-white via-mountain-fog/30 to-white">
        <div className="container mx-auto px-4">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-mountain-sunset/10 text-mountain-sunset text-sm font-semibold">
              📸 28 Foto
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-mountain-pine to-mountain-wood bg-clip-text text-transparent">
            Galleria Fotografica
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri i nostri appartamenti attraverso le immagini. Interni accoglienti, 
            vista sulle montagne e dotazioni moderne per una vacanza indimenticabile.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* Image Gallery */}
        <ImageGallery images={allImages} />

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-mountain-sunset via-mountain-wood to-mountain-pine opacity-10 blur-3xl rounded-3xl"></div>
            <div className="relative glass border-2 border-white/20 rounded-3xl p-12 shadow-2xl">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-mountain-sunset/20 text-mountain-sunset text-sm font-bold backdrop-blur-sm">
                  ✨ Prenota Ora
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-mountain-pine to-mountain-sunset bg-clip-text text-transparent">
                Ti piace quello che vedi?
              </h2>
              <p className="text-xl mb-8 text-gray-700">
                Prenota ora il tuo appartamento ad Aprica
              </p>
              <a
                href="/appartamenti"
                className="inline-block bg-gradient-to-r from-mountain-pine to-mountain-wood text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all transform hover:scale-105 shadow-lg"
              >
                Scopri gli Appartamenti →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
