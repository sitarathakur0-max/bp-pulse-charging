import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_CONFIG, SITE_IMAGES, REVIEWS_FEEDBACK, FAQ_DATA } from '../data/businessConfig';
import {
  Navigation,
  Phone,
  Clock,
  MapPin,
  Zap,
  ShieldAlert,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Star,
  CheckCircle2,
  Compass,
  ArrowRight,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const faqPreview = FAQ_DATA.slice(0, 4);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>OPEN 24 HOURS • ELECTRIC VEHICLE CHARGING</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                EV Charging in <br className="hidden sm:block" />
                <span className="text-emerald-400">Archway, London</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Convenient electric vehicle charging at Pemberton Gardens, Archway, with access listed 24 hours. Serving EV drivers in North London and travelers along the A1 corridor.
              </p>

              {/* Hero Action CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  id="hero-directions-cta"
                  href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-emerald-950/40 transform hover:-translate-y-0.5"
                >
                  <Navigation className="w-4 h-4 fill-slate-950" />
                  <span>Get Directions</span>
                </a>

                <a
                  id="hero-call-support-cta"
                  href={BUSINESS_CONFIG.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Support ({BUSINESS_CONFIG.phone})</span>
                </a>

                <button
                  id="hero-charging-info-link"
                  onClick={() => onNavigate('charging')}
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <span>Charging details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Status pill summary */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Pemberton Gardens, N19 5PX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Accessible 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>2.9 / 5 on Google (7 reviews)</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950 relative">
                  <img
                    src={SITE_IMAGES.hero}
                    alt="Electric vehicle charging connection in an urban London setting"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                <div className="p-5 bg-slate-900/90 backdrop-blur border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-emerald-400 font-semibold tracking-wide uppercase font-mono">
                      Location Snapshot
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      Open 24 Hours
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-base">
                    Pemberton Gardens Charging Bay
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Archway, Islington, London N19 5PX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOCATION QUICK INFO BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-slate-800">
            {/* Item 1: Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-emerald-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Location
                </p>
                <p className="text-sm font-bold text-white mt-1">Pemberton Gardens, Archway</p>
                <p className="text-xs text-slate-400">London N19 5PX</p>
              </div>
            </div>

            {/* Item 2: Hours */}
            <div className="flex items-start gap-4 lg:pl-6">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-emerald-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Hours
                </p>
                <p className="text-sm font-bold text-white mt-1">Open 24 Hours</p>
                <p className="text-xs text-slate-400">Listed open all days of the week</p>
              </div>
            </div>

            {/* Item 3: Category */}
            <div className="flex items-start gap-4 lg:pl-6">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-emerald-400 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Category
                </p>
                <p className="text-sm font-bold text-white mt-1">EV Charging Station</p>
                <p className="text-xs text-slate-400">bp pulse charging point</p>
              </div>
            </div>

            {/* Item 4: Phone Support */}
            <div className="flex items-start gap-4 lg:pl-6">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Phone Support
                </p>
                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="text-sm font-bold text-white hover:text-emerald-400 transition-colors block mt-1"
                >
                  {BUSINESS_CONFIG.phone}
                </a>
                <p className="text-xs text-slate-400">Clickable driver assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY THIS LOCATION (PRACTICAL BENEFITS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Practical Benefits
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Use the Pemberton Gardens Location
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Conveniently situated in North London for local residents, delivery drivers, and commuters passing through the Archway and Highgate areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">24-Hour Continuous Access</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Listed as open around the clock, providing electric vehicle charging flexibility whether charging early morning, daytime, or late at night.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">North London Connectivity</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Positioned just off Junction Road and close to Archway Underground Station, with easy access to the A1 Holloway Road and Highgate Hill.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Direct Phone Support</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Immediate connection to bp pulse customer care (+44 800 464 3444) for hardware inquiries, reporting issues, or getting account assistance.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">bp pulse Network Links</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Part of the nationwide bp pulse charging network. Users can monitor official network information and live operational statuses on chargers.bppulse.com.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Navigation className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Simple Route Planning</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Direct turn-by-turn navigation available for Google Maps and Apple Maps, minimizing route confusion in residential Archway streets.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Transparent Information</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We provide real verified review data (2.9/5) and encourage drivers to verify live connector statuses prior to setting off.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HOW TO USE THE WEBSITE / PLAN YOUR CHARGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest font-mono">
              Driver Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Three Simple Steps for Your Charging Stop
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Follow this practical guide to ensure a smooth charging visit to Pemberton Gardens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative space-y-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-500/30 font-mono">
                01
              </div>
              <h3 className="text-lg font-bold text-white">Plan Your Journey</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Check the location and relevant charging information before travelling. Consult the official bp pulse app or network map for live equipment status.
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Check chargers.bppulse.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative space-y-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-500/30 font-mono">
                02
              </div>
              <h3 className="text-lg font-bold text-white">Navigate to Pemberton Gardens</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Use the directions CTA to plan your route directly to Pemberton Gardens, Archway, London N19 5PX in North London.
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Open Directions</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative space-y-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-500/30 font-mono">
                03
              </div>
              <h3 className="text-lg font-bold text-white">Charge Your EV</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Follow the charging instructions and on-site prompts on the physical unit. If you need any assistance, call support at +44 800 464 3444.
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Support Helpline</span>
                  <Phone className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATION FEATURE & MAP CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card Info */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 font-mono uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Station Coordinates</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Pemberton Gardens, Archway
              </h2>
              <div className="space-y-2 text-sm text-slate-300">
                <p className="font-semibold text-white">bp pulse Charging Station</p>
                <p>Pemberton Gardens, Archway</p>
                <p>London N19 5PX</p>
                <p>United Kingdom</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Access:</span>
                  <span className="text-emerald-400 font-semibold">Open 24 Hours</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Phone Support:</span>
                  <span className="text-slate-200 font-mono">{BUSINESS_CONFIG.phone}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Borough:</span>
                  <span className="text-slate-300">London Borough of Islington</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                id="location-section-directions-cta"
                href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-950/40"
              >
                <Navigation className="w-4 h-4 fill-slate-950" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                id="location-section-apple-maps"
                href={BUSINESS_CONFIG.appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors border border-slate-700"
              >
                <span>Open in Apple Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => onNavigate('location')}
                className="w-full text-center text-xs text-slate-400 hover:text-emerald-400 transition-colors pt-1"
              >
                View full location & driving details →
              </button>
            </div>
          </div>

          {/* Visual Map/Location Representation */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 relative flex flex-col">
            {/* Embedded Google Maps iframe for reliable, API-key-free map viewing */}
            <div className="w-full h-80 sm:h-96 lg:h-full min-h-[340px] relative bg-slate-950">
              <iframe
                title="bp pulse Pemberton Gardens Location Map"
                src="https://maps.google.com/maps?q=Pemberton%20Gardens,%20Archway,%20London%20N19%205PX&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-85"
                loading="lazy"
                aria-label="Map showing Pemberton Gardens, Archway, London N19 5PX"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="truncate pr-2 font-medium">
                  📍 Pemberton Gardens, Archway, London N19 5PX
                </span>
                <a
                  href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold shrink-0"
                >
                  Direct Route →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEED HELP WITH YOUR CHARGING JOURNEY? (SUPPORT SECTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 border border-emerald-500/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
              Driver Support
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Need Help With Your Charging Journey?
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              If you experience any difficulties on-site, require assistance initiating a charge, or wish to report a charging hardware fault, bp pulse provides telephone support for drivers.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                id="support-section-call-cta"
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-emerald-950/40"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span>Call Support ({BUSINESS_CONFIG.phone})</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-colors"
              >
                <span>Submit Inquiry Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRANSPARENT GOOGLE REVIEWS SECTION (HONEST 2.9 / 5 RATING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Customer Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Google Reviews & Driver Transparency
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            We present factual customer feedback directly from Google so you know what to expect before you arrive.
          </p>
        </div>

        {/* Rating Banner */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                {BUSINESS_CONFIG.rating}
                <span className="text-slate-400 text-2xl font-normal"> / 5</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(BUSINESS_CONFIG.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : i === Math.floor(BUSINESS_CONFIG.rating)
                          ? 'fill-amber-400/50 text-amber-400'
                          : 'text-slate-700'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  Based on {BUSINESS_CONFIG.reviewCount} Google reviews
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 max-w-md">
              <p className="text-slate-400">
                <strong className="text-white">Driver Tip:</strong> Several drivers have reported equipment availability issues or CCS downtime at this location. We recommend checking live operational status via the bp pulse app before travelling.
              </p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_FEEDBACK.slice(0, 2).map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">{rev.source}</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[11px]">
                  {rev.operationalTopic}
                </span>
              </div>

              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-800'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-slate-300 italic leading-relaxed">
                "{rev.quote}"
              </p>

              <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                <span className="font-semibold text-emerald-400">Recommended action:</span>{' '}
                {rev.supportAdvice}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            id="view-all-reviews-btn"
            onClick={() => onNavigate('reviews')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 transition-colors"
          >
            <span>Read full reviews and driver guidance</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 8. FAQ PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider font-mono">
              Driver Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>
          <button
            id="faq-preview-all-btn"
            onClick={() => onNavigate('faq')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
          >
            <span>View all 8 FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqPreview.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5"
            >
              <h3 className="font-bold text-white text-base flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item.question}</span>
              </h3>
              <p className="text-sm text-slate-400 pl-7 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
