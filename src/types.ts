export type PageRoute = 'home' | 'about' | 'charging' | 'location' | 'reviews' | 'faq' | 'contact';

export interface BusinessConfig {
  name: string;
  category: string;
  shortName: string;
  tagline: string;
  address: {
    street: string;
    area: string;
    city: string;
    postcode: string;
    country: string;
    full: string;
  };
  phone: string;
  phoneRaw: string;
  phoneHref: string;
  hours: string;
  is24Hours: boolean;
  rating: number;
  maxRating: number;
  reviewCount: number;
  officialWebsite: string;
  googleMapsDirectionsUrl: string;
  googleMapsSearchUrl: string;
  appleMapsUrl: string;
}

export interface ReviewFeedback {
  id: string;
  source: 'Google Reviewer';
  rating: number;
  dateContext: string;
  summary: string;
  quote?: string;
  operationalTopic: 'Equipment Availability' | 'Charger Status' | 'Location Access';
  supportAdvice: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'location' | 'charging' | 'access' | 'support';
}
