import { SITE_INFO, CONTACT_INFO, SERVICE_AREAS, SERVICES } from '@/lib/constants';

export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    url: 'https://scottromconstruction.com',
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '710 Parker St',
      addressLocality: 'Langhorne',
      addressRegion: 'PA',
      postalCode: '19047',
      addressCountry: 'US',
    },
    areaServed: SERVICE_AREAS.slice(0, -1).map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: {
        '@type': 'State',
        name: 'Pennsylvania',
      },
    })),
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Services',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
