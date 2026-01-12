import { generateFAQSchema } from '@/components/RichDataGenerator';
import RichDataGenerator from '@/components/RichDataGenerator';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  lang?: string;
}

export default function FAQSection({ faqs, lang = 'it' }: FAQSectionProps) {
  // Generate FAQ Schema for AI/Search Engines
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      {/* JSON-LD Structured Data for FAQs */}
      <RichDataGenerator data={faqSchema} data-testid="faq-schema" />

      <section
        className="py-12"
        aria-labelledby="faq-heading"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="container mx-auto px-4">
          <h2
            id="faq-heading"
            className="text-3xl font-bold mb-8 text-center text-aprica-green"
          >
            {lang === 'en' ? 'Frequently Asked Questions' : 'Domande Frequenti'}
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3
                  className="text-xl font-bold mb-3 text-aprica-blue"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-gray-700 leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
