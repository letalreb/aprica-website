import type { Metadata } from 'next';
import Image from 'next/image';
import ImageGallery from '@/components/ImageGallery';

export const metadata: Metadata = {
  title: 'Galleria Foto - Case Vacanze Aprica',
  description: 'Scopri le foto dei nostri appartamenti ad Aprica. Interni moderni, viste panoramiche sulle montagne e servizi di qualità.',
  alternates: {
    canonical: '/galleria',
  },
};

// Tutte le immagini disponibili organizzate per appartamento
const allImages = [
  // Immagini intro / panoramiche
  {
    src: '/images/intro/IMG_20251220_144315.jpg',
    alt: 'Vista panoramica degli appartamenti - Aprica Mountain Lodge',
  },
  {
    src: '/images/intro/IMG_20251220_163424.jpg',
    alt: 'Esterno e vista montagna - Aprica Mountain Lodge',
  },
  {
    src: '/images/intro/IMG_20251220_163427.jpg',
    alt: 'Vista appartamenti con terrazzo - Aprica Mountain Lodge',
  },
  {
    src: '/images/intro/IMG_20251220_163607.jpg',
    alt: 'Vista esterna struttura - Aprica Mountain Lodge',
  },
  {
    src: '/images/intro/WhatsApp Image 2026-01-12 at 22.33.59 (4).jpeg',
    alt: 'Interni moderni degli appartamenti - Aprica Mountain Lodge',
  },
  {
    src: '/images/intro/WhatsApp Image 2026-01-12 at 22.33.59 (5).jpeg',
    alt: 'Zona living con vista - Aprica Mountain Lodge',
  },
  {
    src: '/images/intro/WhatsApp Image 2026-01-12 at 22.33.59.jpeg',
    alt: 'Cucina moderna attrezzata - Aprica Mountain Lodge',
  },
  {
    src: '/images/intro/WhatsApp Image 2026-01-12 at 22.34.00 (1).jpeg',
    alt: 'Camera da letto accogliente - Aprica Mountain Lodge',
  },
  {
    src: '/images/intro/WhatsApp Image 2026-01-12 at 22.34.00 (10).jpeg',
    alt: 'Spazi luminosi e confortevoli - Aprica Mountain Lodge',
  },
  {
    src: '/images/intro/WhatsApp Image 2026-01-12 at 22.34.00 (2).jpeg',
    alt: 'Dettagli degli interni - Aprica Mountain Lodge',
  },
  
  // Appartamento Baradello (app1)
  {
    src: '/images/app1/IMG_20251128_095112.jpg',
    alt: 'Appartamento Baradello - Vista esterna',
  },
  {
    src: '/images/app1/IMG_20251220_120620.jpg',
    alt: 'Appartamento Baradello - Soggiorno',
  },
  {
    src: '/images/app1/IMG_20251220_120627.jpg',
    alt: 'Appartamento Baradello - Cucina',
  },
  {
    src: '/images/app1/WhatsApp Image 2026-01-12 at 22.33.58 (1).jpeg',
    alt: 'Appartamento Baradello - Dettaglio interni',
  },
  {
    src: '/images/app1/WhatsApp Image 2026-01-12 at 22.33.59 (2).jpeg',
    alt: 'Appartamento Baradello - Camera da letto',
  },
  {
    src: '/images/app1/WhatsApp Image 2026-01-12 at 22.34.00 (1).jpeg',
    alt: 'Appartamento Baradello - Bagno moderno',
  },
  {
    src: '/images/app1/WhatsApp Image 2026-01-12 at 22.34.00 (10).jpeg',
    alt: 'Appartamento Baradello - Zona relax',
  },
  
  // Appartamento Magnolta (app2)
  {
    src: '/images/app2/IMG_20250831_120852.jpg',
    alt: 'Appartamento Magnolta - Vista panoramica',
  },
  {
    src: '/images/app2/IMG_20251220_115211.jpg',
    alt: 'Appartamento Magnolta - Living',
  },
  {
    src: '/images/app2/IMG_20251220_144302.jpg',
    alt: 'Appartamento Magnolta - Cucina attrezzata',
  },
  {
    src: '/images/app2/IMG_20251220_144315.jpg',
    alt: 'Appartamento Magnolta - Zona giorno',
  },
  {
    src: '/images/app2/IMG_20251220_151911.jpg',
    alt: 'Appartamento Magnolta - Camera matrimoniale',
  },
  {
    src: '/images/app2/IMG_20251220_152054.jpg',
    alt: 'Appartamento Magnolta - Dettagli',
  },
  {
    src: '/images/app2/IMG_20251220_163313.jpg',
    alt: 'Appartamento Magnolta - Balcone con vista',
  },
  {
    src: '/images/app2/IMG_20251220_163424.jpg',
    alt: 'Appartamento Magnolta - Esterno',
  },
  
  // Appartamento Mortirolo (app3)
  {
    src: '/images/app3/WhatsApp Image 2026-01-12 at 22.33.58 (1).jpeg',
    alt: 'Appartamento Mortirolo - Interni moderni',
  },
  {
    src: '/images/app3/WhatsApp Image 2026-01-12 at 22.33.59 (2).jpeg',
    alt: 'Appartamento Mortirolo - Soggiorno',
  },
  {
    src: '/images/app3/WhatsApp Image 2026-01-12 at 22.33.59 (3).jpeg',
    alt: 'Appartamento Mortirolo - Cucina',
  },
  {
    src: '/images/app3/WhatsApp Image 2026-01-12 at 22.33.59 (4).jpeg',
    alt: 'Appartamento Mortirolo - Camera',
  },
  {
    src: '/images/app3/WhatsApp Image 2026-01-12 at 22.33.59 (5).jpeg',
    alt: 'Appartamento Mortirolo - Zona living',
  },
  {
    src: '/images/app3/WhatsApp Image 2026-01-12 at 22.34.00 (1).jpeg',
    alt: 'Appartamento Mortirolo - Bagno',
  },
  
  // Appartamento Palabione (app4)
  {
    src: '/images/app4/IMG_20250831_120821.jpg',
    alt: 'Appartamento Palabione - Vista esterna',
  },
  {
    src: '/images/app4/IMG_20250831_120852.jpg',
    alt: 'Appartamento Palabione - Panorama montagne',
  },
  {
    src: '/images/app4/IMG_20251220_115211.jpg',
    alt: 'Appartamento Palabione - Soggiorno',
  },
  {
    src: '/images/app4/IMG_20251220_144302.jpg',
    alt: 'Appartamento Palabione - Cucina moderna',
  },
  {
    src: '/images/app4/IMG_20251220_144315.jpg',
    alt: 'Appartamento Palabione - Living',
  },
  {
    src: '/images/app4/IMG_20251220_151911.jpg',
    alt: 'Appartamento Palabione - Camera matrimoniale',
  },
  {
    src: '/images/app4/IMG_20251220_152054.jpg',
    alt: 'Appartamento Palabione - Dettagli interni',
  },
  {
    src: '/images/app4/IMG_20251220_163313.jpg',
    alt: 'Appartamento Palabione - Balcone',
  },
];

export default function GalleriaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-mountain-pine via-mountain-wood to-mountain-pine text-white py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/intro/IMG_20251220_163427.jpg"
            alt="Galleria fotografica Aprica Mountain Lodge"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mountain-pine/70 via-mountain-pine/60 to-mountain-pine/80"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold">
              📸 Galleria Fotografica
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Le Nostre Foto
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
            Scopri i nostri appartamenti attraverso le immagini. Interni accoglienti, 
            vista sulle montagne e dotazioni moderne per una vacanza indimenticabile.
          </p>
        </div>
      </section>

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
