interface FeatureListProps {
  features: string[];
  title?: string;
  icon?: string;
  columns?: 1 | 2 | 3;
}

/**
 * Semantic Feature List Component
 * Displays amenities/features in a structured format for AI parsing
 */
export default function FeatureList({
  features,
  title,
  icon = '✓',
  columns = 2,
}: FeatureListProps) {
  const columnClass =
    columns === 3 ? 'md:grid-cols-3' : columns === 1 ? 'grid-cols-1' : 'md:grid-cols-2';

  return (
    <section aria-labelledby={title ? 'features-heading' : undefined}>
      {title && (
        <h3 id="features-heading" className="text-xl font-bold mb-4">
          {title}
        </h3>
      )}

      <ul
        className={`grid ${columnClass} gap-3`}
        role="list"
        data-ai-extract="amenities"
      >
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-2"
            itemProp="amenityFeature"
            itemScope
            itemType="https://schema.org/LocationFeatureSpecification"
          >
            <span className="text-aprica-blue text-xl flex-shrink-0">{icon}</span>
            <span itemProp="name">{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
