import type { Metadata } from 'next';
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
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex gap-2 text-sm text-gray-600">
          <li>
            <a href="/" className="hover:text-aprica-blue">
              Home
            </a>
          </li>
          <li>/</li>
          <li className="font-semibold" aria-current="page">
            FAQ
          </li>
        </ol>
      </nav>

      <FAQSection faqs={faqs} lang="it" />

      {/* Additional CTA */}
      <section className="mt-12 bg-aprica-blue text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Altre Domande?</h2>
        <p className="mb-6">Non esitare a contattarci per qualsiasi informazione.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@apricamountainlodge.it"
            className="bg-white text-aprica-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            📧 Email
          </a>
          <a
            href="https://wa.me/393331234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            💬 WhatsApp
          </a>
          <a
            href="tel:+390342123456"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            📞 Telefono
          </a>
        </div>
      </section>
    </div>
  );
}
