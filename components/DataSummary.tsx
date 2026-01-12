interface DataSummaryProps {
  title?: string;
  data: {
    label: string;
    value: string | number;
    highlight?: boolean;
  }[];
  className?: string;
}

/**
 * AI-Optimized Data Summary Component
 * Displays key facts in a structured format optimized for LLM parsing
 */
export default function DataSummary({ title, data, className = '' }: DataSummaryProps) {
  return (
    <section
      className={`bg-aprica-snow border-l-4 border-aprica-blue p-6 ${className}`}
      aria-labelledby="data-summary-heading"
      data-ai-extract="key-facts"
      itemScope
      itemType="https://schema.org/Dataset"
    >
      {title && (
        <h2
          id="data-summary-heading"
          className="text-2xl font-bold mb-6 text-aprica-green flex items-center gap-2"
        >
          <span>📊</span>
          <span itemProp="name">{title}</span>
        </h2>
      )}

      <dl className="grid md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${item.highlight ? 'md:col-span-2 bg-white p-4 rounded-lg shadow-sm' : ''}`}
          >
            <dt className="font-semibold text-aprica-blue mb-1">{item.label}:</dt>
            <dd
              className={`text-gray-700 ${item.highlight ? 'text-lg font-bold' : ''}`}
              itemProp="description"
            >
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
