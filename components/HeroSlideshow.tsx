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
    src: '/videos/grok-video-592c1733-f3b4-4e00-8afd-92be57548665.mp4',
    title: 'Scopri Aprica',
    subtitle: 'Paesaggi mozzafiato e natura incontaminata',
  },
  {
    type: 'video',
    src: '/videos/grok-video-8cc55b70-1e20-40bd-95b6-c4b391673a37.mp4',
    title: 'Benvenuti ad Aprica',
    subtitle: 'Case vacanze nel cuore delle Alpi',
  },
  {
    type: 'image',
    src: '/images/IMG_20251220_144302.jpg',
    title: 'Appartamenti Moderni',
    subtitle: '20 posti letto in 4 appartamenti accoglienti',
  },
  {
    type: 'image',
    src: '/images/IMG_20251220_163427.jpg',
    title: 'A 600m dagli Impianti',
    subtitle: 'Posizione ideale per sciatori e amanti della montagna',
  },
  {
    type: 'image',
    src: '/images/IMG_20251220_152054.jpg',
    title: 'Comfort e Relax',
    subtitle: 'Box auto privato e ogni comfort per la vostra vacanza',
  },
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900" role="region" aria-label="Slideshow delle immagini della struttura">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          {slide.type === 'video' ? (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          )}
          {/* Overlay gradient - più marcato per leggibilità */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
          
          {/* Content - Centrato in stile Plum Guide */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="max-w-5xl">
              <h1
                className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`text-xl md:text-2xl lg:text-3xl text-white mb-12 font-light transition-all duration-700 delay-100 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                {slide.subtitle}
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
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

          {/* Scroll indicator - in basso */}
          <div
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-700 delay-300 ${
              index === currentSlide
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="flex flex-col items-center gap-2 text-white/70">
              <span className="text-sm font-light">Scorri per scoprire</span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
        </div>
      ))}

      {/* Navigation Arrows - più minimalisti */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all hover:scale-110 focus:ring-4 focus:ring-white/30 focus:outline-none"
        aria-label="Slide precedente"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all hover:scale-110 focus:ring-4 focus:ring-white/30 focus:outline-none"
        aria-label="Vai alla slide successiva"
        type="button"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Navigation - posizionati più in basso */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 bg-white'
                : 'w-3 bg-white/40 hover:bg-white/60'
            } h-3 rounded-full`}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
