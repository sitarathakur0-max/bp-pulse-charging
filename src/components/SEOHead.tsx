import React, { useEffect } from 'react';
import { PageRoute } from '../types';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface SEOHeadProps {
  currentPage: PageRoute;
}

const PAGE_METADATA: Record<PageRoute, { title: string; description: string }> = {
  home: {
    title: 'bp pulse EV Charging Station | Pemberton Gardens, Archway, London',
    description: 'Electric vehicle charging at Pemberton Gardens, Archway, London N19 5PX. Listed open 24 hours. Get directions, official bp pulse info, and driver support.',
  },
  about: {
    title: 'About the Archway Charging Station | bp pulse Pemberton Gardens',
    description: 'Learn about the bp pulse EV charging facility in Pemberton Gardens, Archway. Accessible 24 hours for North London electric vehicle drivers.',
  },
  charging: {
    title: 'Charging Information & Guide | bp pulse Archway, London N19',
    description: 'Essential guidance for charging your EV at Pemberton Gardens, Archway. Steps before travelling, on-site charging prompts, and official bp pulse links.',
  },
  location: {
    title: 'Location & Driving Directions | bp pulse Archway, London N19 5PX',
    description: 'Interactive maps, step-by-step navigation, and local transport links to bp pulse EV charging on Pemberton Gardens, Archway, London N19 5PX.',
  },
  reviews: {
    title: 'Google Reviews & Rating (2.9/5) | bp pulse Archway Charging',
    description: 'Transparent Google review overview for bp pulse Charging Station, Pemberton Gardens, Archway. Verified 2.9/5 rating across 7 genuine reviews.',
  },
  faq: {
    title: 'Frequently Asked Questions | bp pulse Archway EV Charging',
    description: 'Common questions about 24-hour access, location, directions, reporting faults, and checking live charger availability in Archway, London.',
  },
  contact: {
    title: 'Support & Contact Information | bp pulse Charging Station Archway',
    description: 'Contact bp pulse 24-hour customer support at +44 800 464 3444 or submit an inquiry for the Pemberton Gardens, Archway charging location.',
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPage }) => {
  const meta = PAGE_METADATA[currentPage] || PAGE_METADATA.home;

  useEffect(() => {
    document.title = meta.title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', meta.description);
    }

    // Add JSON-LD Structured Data
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://chargers.bppulse.com/#archway-pemberton',
      name: BUSINESS_CONFIG.name,
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80',
      telephone: BUSINESS_CONFIG.phone,
      url: window.location.href,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_CONFIG.address.street,
        addressLocality: BUSINESS_CONFIG.address.area,
        addressRegion: 'Greater London',
        postalCode: BUSINESS_CONFIG.address.postcode,
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.5658,
        longitude: -0.1348,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: BUSINESS_CONFIG.rating.toString(),
        reviewCount: BUSINESS_CONFIG.reviewCount.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    };

    let scriptTag = document.getElementById('schema-local-business');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-local-business';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);
  }, [currentPage, meta]);

  return null;
};
