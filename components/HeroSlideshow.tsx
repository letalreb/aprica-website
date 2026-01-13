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
    src: '/images/IMG_20251220_163441.jpg',
    title: 'A 400m dagli Impianti',
    subtitle: 'Posizione ideale per sciatori e amanti della montagna',
  },
  {
    type: 'image',
    src: '/images/IMG_20251220_163501.jpg',
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
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'video' ? (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover brightness-105 contrast-110 saturate-110"
            />
          ) : (
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover brightness-105 contrast-110 saturate-110"
            />
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1
                className={`text-5xl md:text-7xl font-bold text-white mb-4 transition-all duration-700 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`text-xl md:text-2xl text-white/90 mb-8 transition-all duration-700 delay-100 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                {slide.subtitle}
              </p>
              <a
                href="/appartamenti"
                className={`inline-block bg-white text-aprica-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-aprica-snow transition-all shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                } transition-all duration-700 delay-200`}
              >
                Scopri gli Appartamenti →
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
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
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
        aria-label="Slide successiva"
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

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 bg-white'
                : 'w-3 bg-white/50 hover:bg-white/75'
            } h-3 rounded-full`}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
