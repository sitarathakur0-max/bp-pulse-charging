import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import {
  Navigation,
  Phone,
  Clock,
  MapPin,
  ExternalLink,
  Compass,
  Car,
  AlertCircle,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';

interface LocationPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Title Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
            Navigation & Map
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Location & Driving Directions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Find the bp pulse EV charging point on Pemberton Gardens, Archway, London N19 5PX.
          </p>
        </div>
      </section>

      {/* Large Featured Location Card with Action Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Detailed Info Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">
                  Official Postal Address
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  bp pulse Charging Station
                </h2>
              </div>

              {/* Address block */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-200">
                    <p className="font-bold text-white text-base">{BUSINESS_CONFIG.address.street}</p>
                    <p>{BUSINESS_CONFIG.address.area}, London</p>
                    <p className="font-mono text-emerald-300 font-semibold">{BUSINESS_CONFIG.address.postcode}</p>
                    <p className="text-xs text-slate-400 mt-1">{BUSINESS_CONFIG.address.country}</p>
                  </div>
                </div>

                <button
                  id="copy-address-btn"
                  onClick={handleCopyAddress}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 border border-slate-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied full address to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Address for SatNav</span>
                    </>
                  )}
                </button>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Access Hours:</span>
                  <p className="text-emerald-400 font-bold mt-0.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Open 24 Hours
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Helpline:</span>
                  <p className="text-slate-200 font-bold mt-0.5 font-mono">
                    0800 464 3444
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <a
                id="location-page-directions-btn"
                href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-950/40"
              >
                <Navigation className="w-4 h-4 fill-slate-950" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  id="location-page-apple-maps-btn"
                  href={BUSINESS_CONFIG.appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <span>Apple Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  id="location-page-call-support-btn"
                  href={BUSINESS_CONFIG.phoneHref}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Phone className="w-3 h-3 text-emerald-400" />
                  <span>Call Support</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative min-h-[420px] flex flex-col">
            <iframe
              title="bp pulse Charging Station Pemberton Gardens Map View"
              src="https://maps.google.com/maps?q=Pemberton%20Gardens,%20Archway,%20London%20N19%205PX&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-85"
              loading="lazy"
              aria-label="Map showing Pemberton Gardens, Archway, London N19 5PX"
            />
            <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-emerald-400 font-medium flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Pemberton Gardens, London N19 5PX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Route & Approach Guidance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">
              Approach Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Navigating to Pemberton Gardens
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Helpful directions for EV drivers arriving from key North London arterial routes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Route 1 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Car className="w-4 h-4" />
                <span>From Archway / A1 (Holloway Rd)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Approaching the Archway gyratory / Junction Road, turn onto St John's Way or Pemberton Gardens. Pemberton Gardens connects residential streets just east of Junction Road.
              </p>
            </div>

            {/* Route 2 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Car className="w-4 h-4" />
                <span>From Highgate Hill / Crouch End</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Descend Highgate Hill towards Archway, continuing through towards Junction Road. Take the appropriate turn into Pemberton Gardens, observing one-way residential signage.
              </p>
            </div>

            {/* Route 3 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Car className="w-4 h-4" />
                <span>From Tufnell Park / Dartmouth Park</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Head north along Junction Road towards Archway station, turning right into Pemberton Terrace / Pemberton Gardens.
              </p>
            </div>
          </div>

          {/* Bay Regulations Advisory */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 space-y-1">
              <strong className="text-white">Islington Borough Street Parking Note:</strong>
              <p className="text-slate-400">
                Pemberton Gardens is an urban residential street. Always check street signs adjacent to the charging bays for parking restrictions, electric vehicle charging only rules, and maximum dwell limits while plugged in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
