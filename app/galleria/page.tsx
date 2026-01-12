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
  '/images/WhatsApp Image 2026-01-12 at 22.34.00.jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.59.jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (1).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.58.jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.59 (1).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.59 (2).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.59 (3).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.59 (4).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.59 (5).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (2).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (4).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (5).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (6).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (7).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (8).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (9).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.00 (10).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.01.jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.34.01 (1).jpeg',
  '/images/WhatsApp Image 2026-01-12 at 22.33.58 (1).jpeg',
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
