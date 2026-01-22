import type { Metadata } from 'next';
import Image from 'next/image';
import FAQSection from '@/components/FAQSection';
import locales from '@/locales/it.json';

export const metadata: Metadata = {
  title: 'Domande Frequenti - Case Vacanze Aprica',
  description:
    'Risposte alle domande più comuni sulle nostre case vacanze ad Aprica: distanza impianti, parcheggio, check-in, dotazioni cucina, Wi-Fi e animali domestici.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: locales.faq.q1,
      answer: locales.faq.a1,
    },
    {
      question: locales.faq.q2,
      answer: locales.faq.a2,
    },
    {
      question: locales.faq.q3,
      answer: locales.faq.a3,
    },
    {
      question: locales.faq.q4,
      answer: locales.faq.a4,
    },
    {
      question: locales.faq.q5,
      answer: locales.faq.a5,
    },
    {
      question: locales.faq.q6,
      answer: locales.faq.a6,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-mountain-pine via-mountain-wood to-mountain-pine text-white py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/intro/WhatsApp Image 2026-01-12 at 22.34.00 (1).jpeg"
            alt="Domande frequenti Aprica Mountain Lodge"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mountain-pine/70 via-mountain-pine/60 to-mountain-pine/80"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold">
              ❓ Domande e Risposte
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Domande Frequenti
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
            Risposte alle domande più comuni sulle nostre case vacanze ad Aprica
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex gap-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-mountain-pine transition">
                Home
              </a>
            </li>
            <li>/</li>
            <li className="font-semibold text-mountain-pine" aria-current="page">
              FAQ
            </li>
          </ol>
        </nav>

      <FAQSection faqs={faqs} lang="it" />

      {/* Additional CTA */}
      <section className="mt-16 max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-mountain-pine via-mountain-wood to-mountain-pine opacity-10 blur-3xl rounded-3xl"></div>
          <div className="relative glass border-2 border-white/20 rounded-3xl p-10 shadow-2xl text-center">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-mountain-sunset/20 text-mountain-sunset text-sm font-bold backdrop-blur-sm">
                💬 Assistenza
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-mountain-pine to-mountain-wood bg-clip-text text-transparent">Altre Domande?</h2>
            <p className="mb-8 text-gray-700">Non esitare a contattarci per qualsiasi informazione.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@apricamountainlodge.it"
                className="bg-gradient-to-r from-mountain-pine to-mountain-wood text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                📧 Email
              </a>
              <a
                href="https://wa.me/393331234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                💬 WhatsApp
              </a>
              <a
                href="https://t.me/+393331234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                ✈️ Telegram
              </a>
              <a
                href="tel:+390342123456"
                className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                📞 Chiama Ora
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
