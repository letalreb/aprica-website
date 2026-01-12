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
  '/images/IMG_20250831_120821.jpg',
  '/images/IMG_20250831_120852.jpg',
  '/images/IMG_20251128_095112.jpg',
  '/images/IMG_20251220_115211.jpg',
  '/images/IMG_20251220_120620.jpg',
  '/images/IMG_20251220_120627.jpg',
  '/images/IMG_20251220_120630.jpg',
  '/images/IMG_20251220_131759.jpg',
  '/images/IMG_20251220_144302.jpg',
  '/images/IMG_20251220_144315.jpg',
  '/images/IMG_20251220_144714.jpg',
  '/images/IMG_20251220_144731.jpg',
  '/images/IMG_20251220_144736.jpg',
  '/images/IMG_20251220_152049.jpg',
  '/images/IMG_20251220_152054.jpg',
  '/images/IMG_20251220_163313.jpg',
  '/images/IMG_20251220_163424.jpg',
  '/images/IMG_20251220_163427.jpg',
  '/images/IMG_20251220_163441.jpg',
  '/images/IMG_20251220_163447.jpg',
  '/images/IMG_20251220_163501.jpg',
  '/images/IMG_20251220_163506.jpg',
  '/images/IMG_20251220_163513.jpg',
  '/images/IMG_20251220_163605.jpg',
  '/images/IMG_20251220_163606.jpg',
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
    <div className="container mx-auto px-4 py-12">
      {/* Hero Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-aprica-green">
          📸 Galleria Fotografica
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Scopri i nostri appartamenti attraverso le immagini. Interni accoglienti, 
          vista sulle montagne e dotazioni moderne per una vacanza indimenticabile.
        </p>
      </div>

      {/* Image Gallery */}
      <ImageGallery images={allImages} />

      {/* CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-aprica-blue to-aprica-green text-white rounded-3xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ti piace quello che vedi?</h2>
        <p className="text-xl mb-8 text-white/90">
          Prenota ora il tuo appartamento ad Aprica
        </p>
        <a
          href="/appartamenti"
          className="inline-block bg-white text-aprica-blue px-8 py-4 rounded-full font-bold hover:bg-aprica-snow transition-all transform hover:scale-105 shadow-lg"
        >
          Scopri gli Appartamenti →
        </a>
      </div>
    </div>
  );
}
