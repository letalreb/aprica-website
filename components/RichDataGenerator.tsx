import type {
  LodgingBusiness,
  Accommodation,
  BreadcrumbList,
  FAQPage,
  PostalAddress,
  GeoCoordinates,
  PropertyValue,
  QuantitativeValue,
} from '@/types/schema';

const BASE_URL = 'https://apricamountainlodge.it'; // Sostituire con il dominio reale

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Case Vacanze Aprica Mountain Lodge',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+39-0342-123456',
      contactType: 'Customer Service',
      email: 'info@apricamountainlodge.it',
      availableLanguage: ['Italian', 'English'],
    },
    sameAs: [
      // Aggiungere social media se disponibili
      // 'https://www.facebook.com/...',
      // 'https://www.instagram.com/...',
    ],
  };
}

// Generate LodgingBusiness Schema
export function generateLodgingBusinessSchema(): LodgingBusiness {
  const address: PostalAddress = {
    '@type': 'PostalAddress',
    streetAddress: 'Via Roma 123',
    addressLocality: 'Aprica',
    addressRegion: 'SO',
    postalCode: '23031',
    addressCountry: 'IT',
  };

  const geo: GeoCoordinates = {
    '@type': 'GeoCoordinates',
    latitude: 46.1519,
    longitude: 10.1528,
  };

  const amenities: PropertyValue[] = [
    { '@type': 'LocationFeatureSpecification', name: 'Private parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Ski storage', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Self check-in', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Heating', value: true },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Case Vacanze Aprica Mountain Lodge',
    description:
      'Case vacanze ad Aprica con 4 appartamenti per un totale di 20 posti letto. A 800 metri dagli impianti sciistici, con box auto privato e ogni comfort.',
    url: BASE_URL,
    image: [
      `${BASE_URL}/images/structure-1.jpg`,
      `${BASE_URL}/images/structure-2.jpg`,
    ],
    address,
    geo,
    telephone: '+39-0342-123456',
    email: 'info@apricamountainlodge.it',
    priceRange: '€€',
    amenityFeature: amenities,
    numberOfRooms: 4,
    petsAllowed: true,
  };
}

// Generate Accommodation Schema for individual apartments
interface ApartmentData {
  slug: string;
  nome: string;
  postiLetto: number;
  descrizione: string;
  caratteristiche: string[];
  composizione: string;
  superficieMq: number;
  piano: number;
}

export function generateAccommodationSchema(
  apartment: ApartmentData,
  lang: string = 'it'
): Accommodation {
  const amenities: PropertyValue[] = apartment.caratteristiche.map((feature) => ({
    '@type': 'LocationFeatureSpecification',
    name: feature,
    value: true,
  }));

  const floorSize: QuantitativeValue = {
    '@type': 'QuantitativeValue',
    value: apartment.superficieMq,
    unitCode: 'MTK',
    unitText: 'square meters',
  };

  const occupancy: QuantitativeValue = {
    '@type': 'QuantitativeValue',
    value: apartment.postiLetto,
    unitText: 'persons',
  };

  // Extract bedroom and bathroom count from composition
  const bedroomMatch = apartment.composizione.match(/(\d+)\s*camer/i);
  const bathroomMatch = apartment.composizione.match(/(\d+)\s*bagn/i);

  return {
    '@context': 'https://schema.org',
    '@type': 'Apartment',
    name: apartment.nome,
    description: apartment.descrizione,
    url: `${BASE_URL}/${lang}/appartamento/${apartment.slug}`,
    image: [`${BASE_URL}${apartment.slug}-1.jpg`],
    numberOfBedrooms: bedroomMatch ? parseInt(bedroomMatch[1]) : undefined,
    numberOfBathroomsTotal: bathroomMatch ? parseInt(bathroomMatch[1]) : undefined,
    floorSize,
    occupancy,
    amenityFeature: amenities,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Roma 123',
      addressLocality: 'Aprica',
      addressRegion: 'SO',
      postalCode: '23031',
      addressCountry: 'IT',
    },
  };
}

// Generate BreadcrumbList Schema
interface BreadcrumbItem {
  name: string;
  url?: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbList {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${BASE_URL}${item.url}` : undefined,
    })),
  };
}

// Generate FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]): FAQPage {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Component to render JSON-LD
interface RichDataGeneratorProps {
  data: any;
  'data-testid'?: string;
}

export default function RichDataGenerator({ data, ...props }: RichDataGeneratorProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      {...props}
    />
  );
}
