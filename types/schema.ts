// Type definitions for structured data
export interface Organization {
  '@context': string;
  '@type': string;
  name: string;
  url?: string;
  logo?: string;
  address?: PostalAddress;
  contactPoint?: ContactPoint;
  sameAs?: string[];
}

export interface PostalAddress {
  '@type': string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface ContactPoint {
  '@type': string;
  telephone: string;
  contactType: string;
  email?: string;
  availableLanguage?: string[];
}

export interface GeoCoordinates {
  '@type': string;
  latitude: number;
  longitude: number;
}

export interface LodgingBusiness {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  image?: string[];
  address: PostalAddress;
  geo: GeoCoordinates;
  telephone: string;
  email: string;
  priceRange?: string;
  starRating?: Rating;
  amenityFeature?: PropertyValue[];
  numberOfRooms?: number;
  petsAllowed?: boolean;
}

export interface Accommodation {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  image?: string[];
  numberOfBedrooms?: number;
  numberOfBathroomsTotal?: number;
  floorSize?: QuantitativeValue;
  occupancy?: QuantitativeValue;
  amenityFeature?: PropertyValue[];
  address?: PostalAddress;
}

export interface PropertyValue {
  '@type': string;
  name: string;
  value?: string | boolean;
}

export interface QuantitativeValue {
  '@type': string;
  value: number;
  unitCode?: string;
  unitText?: string;
}

export interface Rating {
  '@type': string;
  ratingValue: string;
  bestRating?: string;
}

export interface BreadcrumbList {
  '@context': string;
  '@type': string;
  itemListElement: ListItem[];
}

export interface ListItem {
  '@type': string;
  position: number;
  name: string;
  item?: string;
}

export interface FAQPage {
  '@context': string;
  '@type': string;
  mainEntity: Question[];
}

export interface Question {
  '@type': string;
  name: string;
  acceptedAnswer: Answer;
}

export interface Answer {
  '@type': string;
  text: string;
}
