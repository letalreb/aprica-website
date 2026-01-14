'use client';

import { useState } from 'react';
import Logo from '@/components/Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header role="banner" className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm">
      <nav
        role="navigation"
        aria-label="Navigazione principale"
        className="container mx-auto px-6 py-4"
      >
        <div className="flex justify-between items-center">
          <a href="/" aria-label="Torna alla home" className="hover:opacity-80 transition-opacity">
            <Logo className="h-16 w-auto brightness-0 invert" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center" role="menubar">
            <li role="none">
              <a
                href="/"
                role="menuitem"
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                Home
              </a>
            </li>
            <li role="none">
              <a
                href="/appartamenti"
                role="menuitem"
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                Appartamenti
              </a>
            </li>
            <li role="none">
              <a
                href="/galleria"
                role="menuitem"
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                Galleria
              </a>
            </li>
            <li role="none">
              <a
                href="/guida-valtellina"
                role="menuitem"
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                Guida
              </a>
            </li>
            <li role="none">
              <a
                href="/faq"
                role="menuitem"
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                FAQ
              </a>
            </li>
            <li role="none">
              <a
                href="mailto:info@apricamountainlodge.it"
                role="menuitem"
                className="bg-white text-mountain-pine px-5 py-2.5 rounded-lg hover:bg-white/90 transition-all text-sm font-semibold shadow-sm"
              >
                Contatti
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-white rounded"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-4 py-4 bg-black/80 backdrop-blur-md rounded-lg px-4" role="menu">
            <li role="none">
              <a
                href="/"
                role="menuitem"
                onClick={closeMobileMenu}
                className="block text-white hover:text-white/80 transition-colors text-base font-medium py-2"
              >
                Home
              </a>
            </li>
            <li role="none">
              <a
                href="/appartamenti"
                role="menuitem"
                onClick={closeMobileMenu}
                className="block text-white hover:text-white/80 transition-colors text-base font-medium py-2"
              >
                Appartamenti
              </a>
            </li>
            <li role="none">
              <a
                href="/galleria"
                role="menuitem"
                onClick={closeMobileMenu}
                className="block text-white hover:text-white/80 transition-colors text-base font-medium py-2"
              >
                Galleria
              </a>
            </li>
            <li role="none">
              <a
                href="/guida-valtellina"
                role="menuitem"
                onClick={closeMobileMenu}
                className="block text-white hover:text-white/80 transition-colors text-base font-medium py-2"
              >
                Guida
              </a>
            </li>
            <li role="none">
              <a
                href="/faq"
                role="menuitem"
                onClick={closeMobileMenu}
                className="block text-white hover:text-white/80 transition-colors text-base font-medium py-2"
              >
                FAQ
              </a>
            </li>
            <li role="none">
              <a
                href="mailto:info@apricamountainlodge.it"
                role="menuitem"
                onClick={closeMobileMenu}
                className="block bg-white text-mountain-pine px-5 py-3 rounded-lg hover:bg-white/90 transition-all text-base font-semibold shadow-sm text-center"
              >
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
