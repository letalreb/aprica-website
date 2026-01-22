'use client';

import { useState, useEffect } from 'react';

interface Slide {
  type: 'image' | 'video';
  src: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    type: 'video',
    src: '/images/intro/grok-video-592c1733-f3b4-4e00-8afd-92be57548665.mp4',
    title: 'Scopri Aprica',
    subtitle: 'Paesaggi mozzafiato e natura incontaminata',
  },
  {
    type: 'video',
    src: '/images/intro/grok-video-8cc55b70-1e20-40bd-95b6-c4b391673a37.mp4',
    title: 'Benvenuti ad Aprica',
    subtitle: 'Case vacanze nel cuore delle Alpi',
  },
    {
    type: 'image',
    src: '/images/intro/WhatsApp Image 2026-01-12 at 22.34.00 (1).jpeg',
    title: 'Zona Relax',
    subtitle: 'Spazi per momenti indimenticabili',
  },
  {
    type: 'image',
    src: '/images/intro/WhatsApp Image 2026-01-12 at 22.33.59 (4).jpeg',
    title: 'Spazi Accoglienti',
    subtitle: 'Design moderno e funzionale',
  },
  {
    type: 'image',
    src: '/images/intro/WhatsApp Image 2026-01-12 at 22.33.59 (5).jpeg',
    title: 'Ambienti Luminosi',
    subtitle: 'Atmosfera calda e confortevole',
  },
  {
    type: 'image',
    src: '/images/intro/WhatsApp Image 2026-01-12 at 22.33.59.jpeg',
    title: 'Interni Curati',
    subtitle: 'Ogni dettaglio pensato per il vostro comfort',
  },
  {
    type: 'image',
    src: '/images/intro/WhatsApp Image 2026-01-12 at 22.34.00 (10).jpeg',
    title: 'Vacanza Perfetta',
    subtitle: 'Tutto ciò che serve per una vacanza indimenticabile',
  },
  {
    type: 'image',
    src: '/images/intro/WhatsApp Image 2026-01-12 at 22.34.00 (2).jpeg',
    title: 'Mountain Lodge',
    subtitle: 'Il vostro rifugio in montagna',
  },
  {
    type: 'image',
    src: '/images/intro/IMG_20251220_144315.jpg',
    title: 'Appartamenti Moderni',
    subtitle: '20 posti letto in 4 appartamenti accoglienti',
  }
];

const HERO_BACKGROUND_FALLBACK = '/images/intro/IMG_20251220_163427.jpg';

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsAutoPlaying(false);
    }
  }, [prefersReducedMotion]);

  const canAutoPlay = isAutoPlaying && !prefersReducedMotion;

  useEffect(() => {
    if (!canAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [canAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    if (prefersReducedMotion) return;
    setIsAutoPlaying((prev) => !prev);
  };

  const activeSlide = slides[currentSlide];

  const renderBackgroundMedia = (slide: Slide) => {
    if (slide.type === 'video') {
      if (prefersReducedMotion) {
        return (
          <img
            src={HERO_BACKGROUND_FALLBACK}
            alt=""
            role="presentation"
            className="w-full h-full object-cover"
          />
        );
      }

      return (
        <video
          src={slide.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      );
    }

    return (
      <img
        src={slide.src}
        alt=""
        role="presentation"
        className="w-full h-full object-cover"
      />
    );
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-gray-900"
      aria-label="Hero slideshow Aprica Mountain Lodge"
    >
      {/* Background slides (decorative) */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          {renderBackgroundMedia(slide)}
        </div>
      ))}

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80"
        aria-hidden="true"
      />

      {/* Content (SEO/LLM stable: single H1) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Aprica Mountain Lodge
          </h1>
          <p className="text-base md:text-lg text-white/80 font-medium mb-3" aria-live="polite">
            {activeSlide.title}
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-12 font-light">
            {activeSlide.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appartamenti"
              className="inline-block bg-white text-mountain-pine px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/90 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Scopri gli Appartamenti
            </a>
            <a
              href="mailto:info@apricamountainlodge.it"
              className="inline-block bg-white/10 backdrop-blur-md text-white border-2 border-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all shadow-2xl"
            >
              Richiedi Disponibilità
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm font-light">Scorri per scoprire</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all hover:scale-110 focus:ring-4 focus:ring-white/30 focus:outline-none"
        aria-label="Slide precedente"
        type="button"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all hover:scale-110 focus:ring-4 focus:ring-white/30 focus:outline-none"
        aria-label="Vai alla slide successiva"
        type="button"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots + Play/Pause */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={slides[index].src}
            onClick={() => goToSlide(index)}
            type="button"
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 bg-white'
                : 'w-3 bg-white/40 hover:bg-white/60'
            } h-3 rounded-full`}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}

        <button
          onClick={toggleAutoPlay}
          type="button"
          disabled={prefersReducedMotion}
          className="ml-3 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition focus:ring-4 focus:ring-white/30 focus:outline-none"
          aria-label={canAutoPlay ? 'Metti in pausa lo slideshow' : 'Riprendi lo slideshow'}
        >
          {canAutoPlay ? 'Pausa' : 'Riprendi'}
        </button>
      </div>
    </section>
  );
}
