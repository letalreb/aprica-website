import type { MetadataRoute } from 'next';
import appartamentiData from '@/data/appartamenti.json';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aprica-website.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/appartamenti/`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/faq/`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/galleria/`, changeFrequency: 'monthly', priority: 0.5 },
  ];

  const apartmentRoutes: MetadataRoute.Sitemap = appartamentiData.appartamenti.map((apt) => ({
    url: `${SITE_URL}/appartamento/${apt.slug}/`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...apartmentRoutes];
}
