import { BusinessConfig, ReviewFeedback, FaqItem } from '../types';

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'bp pulse Charging Station',
  shortName: 'bp pulse Archway',
  category: 'Electric Vehicle Charging Station',
  tagline: 'Electric vehicle charging in Pemberton Gardens, Archway, London. Listed open 24 hours.',
  address: {
    street: 'Pemberton Gardens',
    area: 'Archway',
    city: 'London',
    postcode: 'N19 5PX',
    country: 'United Kingdom',
    full: 'Pemberton Gardens, Archway, London N19 5PX, United Kingdom',
  },
  phone: '+44 800 464 3444',
  phoneRaw: '+448004643444',
  phoneHref: 'tel:+448004643444',
  hours: 'Open 24 hours',
  is24Hours: true,
  rating: 2.9,
  maxRating: 5.0,
  reviewCount: 7,
  officialWebsite: 'https://chargers.bppulse.com/',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Pemberton+Gardens,+Archway,+London+N19+5PX,+United+Kingdom',
  googleMapsSearchUrl: 'https://maps.google.com/?q=bp+pulse+Charging+Station+Pemberton+Gardens+Archway+London+N19+5PX',
  appleMapsUrl: 'https://maps.apple.com/?daddr=Pemberton+Gardens,+Archway,+London+N19+5PX,+United+Kingdom',
};

// Curated high-resolution, genuine EV charging imagery
export const SITE_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80', // Modern EV plugged into fast charger
  chargingPoint: 'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?auto=format&fit=crop&w=1200&q=80', // Clean EV charger connection cable
  urbanLondon: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', // London urban street context
  driverUsingCharger: 'https://images.unsplash.com/photo-1558441719-aa3445475d66?auto=format&fit=crop&w=1200&q=80', // Electric vehicle at charging bay
  chargerCloseUp: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80', // High-tech EV port display
};

// Verified Google review themes from the supplied dataset
export const REVIEWS_FEEDBACK: ReviewFeedback[] = [
  {
    id: 'rev-1',
    source: 'Google Reviewer',
    rating: 1,
    dateContext: 'Verified Google Review',
    summary: 'Reported CCS connector out of order for an extended timeframe.',
    quote: 'Customer reported the CCS connector had been out of service for a significant period. Drivers are advised to confirm operational state on the bp pulse network live map before arrival.',
    operationalTopic: 'Charger Status',
    supportAdvice: 'Check chargers.bppulse.com or call +44 800 464 3444 for live hardware updates before departing.',
  },
  {
    id: 'rev-2',
    source: 'Google Reviewer',
    rating: 2,
    dateContext: 'Verified Google Review',
    summary: 'Observations regarding equipment and bay capacity during peak periods.',
    quote: 'Feedback highlighting on-site equipment availability and waiting times when local charging demand is high.',
    operationalTopic: 'Equipment Availability',
    supportAdvice: 'Because equipment capacity may fluctuate, we recommend having alternative local charging spots identified.',
  },
  {
    id: 'rev-3',
    source: 'Google Reviewer',
    rating: 2,
    dateContext: 'Verified Google Review',
    summary: 'Feedback noting only one charger operational during their visit.',
    quote: 'Driver noted that only one charging point was functional at the time of their charging attempt.',
    operationalTopic: 'Charger Status',
    supportAdvice: 'bp pulse 24/7 customer care line (+44 800 464 3444) can verify if a fault ticket is active.',
  },
  {
    id: 'rev-4',
    source: 'Google Reviewer',
    rating: 4,
    dateContext: 'Verified Google Review',
    summary: 'Positive note on the convenient Archway residential street location.',
    quote: 'Useful location when driving through North London near Archway station and Junction Road.',
    operationalTopic: 'Location Access',
    supportAdvice: 'Access is listed 24 hours a day on Pemberton Gardens.',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'location',
    question: 'Where is the bp pulse charging station located?',
    answer: 'The charging station is located on Pemberton Gardens, Archway, London N19 5PX, United Kingdom, situated in North London near the Archway area.',
  },
  {
    id: 'faq-2',
    category: 'access',
    question: 'Is the location open 24 hours?',
    answer: 'Yes, the location is officially listed on Google as open 24 hours a day, allowing electric vehicle drivers access at any time of day or night.',
  },
  {
    id: 'faq-3',
    category: 'location',
    question: 'How do I get driving directions to Pemberton Gardens?',
    answer: 'You can tap the "Get Directions" buttons throughout this website to launch Google Maps or your device\'s preferred navigation application with the destination preset to Pemberton Gardens, Archway, London N19 5PX.',
  },
  {
    id: 'faq-4',
    category: 'support',
    question: 'How can I contact bp pulse customer support for this site?',
    answer: 'You can reach bp pulse customer support directly by telephone at +44 800 464 3444. This dedicated telephone line provides driver assistance and equipment reporting.',
  },
  {
    id: 'faq-5',
    category: 'charging',
    question: 'Where can I check live charger availability and connector types before travelling?',
    answer: 'To check real-time charger status, connector types (such as CCS or Type 2), and live availability, please visit the official bp pulse network map at chargers.bppulse.com or use the official bp pulse mobile app. We do not display unverified live status data on this informational portal.',
  },
  {
    id: 'faq-6',
    category: 'charging',
    question: 'How do I initiate a charge when I arrive?',
    answer: 'Follow the step-by-step digital instructions displayed on the physical charging unit screen at Pemberton Gardens. You can authenticate and initiate charging using the official bp pulse mobile app, an RFID card, or contactless payment where supported by the unit.',
  },
  {
    id: 'faq-7',
    category: 'support',
    question: 'What should I do if a charger is unresponsive or displays an error?',
    answer: 'If you encounter an unresponsive charger or an error code on-site, immediately call bp pulse customer support at +44 800 464 3444. The support team can run remote diagnostics, initiate a remote reboot of the unit, or dispatch field engineers.',
  },
  {
    id: 'faq-8',
    category: 'access',
    question: 'Are there parking restrictions or bay limits?',
    answer: 'Bay regulations and parking rules are posted on the signage adjacent to the charging bays on Pemberton Gardens. Please inspect local street signs upon arrival to ensure compliance with Islington borough parking rules while actively charging.',
  },
];
