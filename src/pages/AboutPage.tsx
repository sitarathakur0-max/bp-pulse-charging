import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_CONFIG, SITE_IMAGES } from '../data/businessConfig';
import {
  Zap,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  Compass,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
            About This Station
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            bp pulse EV Charging at Pemberton Gardens
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A dedicated electric vehicle charging point located in Archway, London N19 5PX, listed as open 24 hours to support North London drivers.
          </p>
        </div>
      </section>

      {/* Main Content & Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative">
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img
                  src={SITE_IMAGES.chargingPoint}
                  alt="Electric vehicle charging station cable and plug interface"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Pemberton Gardens, Archway</span>
                <span className="text-emerald-400 font-medium">Electric Vehicle Infrastructure</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                <p className="text-2xl font-extrabold text-white font-mono">24/7</p>
                <p className="text-xs text-slate-400 mt-1">Listed Access</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                <p className="text-2xl font-extrabold text-white font-mono">N19 5PX</p>
                <p className="text-xs text-slate-400 mt-1">Archway Postcode</p>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Serving the North London EV Community
              </h2>
              <p>
                Electric vehicle charging on residential and local urban roads plays a pivotal role in enabling zero-emission transportation across Greater London. The bp pulse charging station at Pemberton Gardens provides an accessible charging point for local residents without private driveways, urban delivery operators, rideshare drivers, and through-traffic.
              </p>
              <p>
                Situated in the London Borough of Islington, just a short drive from Archway Underground Station and the A1 corridor, the location is listed on Google as open 24 hours daily.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="font-semibold text-white text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Our Commitment to Accurate Driver Information</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reliable charging requires accurate, transparent information. EV drivers need to know where hardware is located, what practical steps to take before travelling, and how to reach telephone assistance in the event of equipment downtime. We never fabricate speeds, claim unverified awards, or hide real driver reviews.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                id="about-to-charging-btn"
                onClick={() => onNavigate('charging')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs tracking-wide uppercase transition-colors"
              >
                <span>View Charging Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="about-to-location-btn"
                onClick={() => onNavigate('location')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-colors"
              >
                <span>Directions & Maps</span>
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Role & Key Facts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Station Profile & Location Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2 p-5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono text-emerald-400 uppercase">Station Name</span>
              <p className="font-semibold text-white text-base">{BUSINESS_CONFIG.name}</p>
              <p className="text-xs text-slate-400">Associated with the bp pulse UK charging network.</p>
            </div>

            <div className="space-y-2 p-5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono text-emerald-400 uppercase">Operating Hours</span>
              <p className="font-semibold text-white text-base">{BUSINESS_CONFIG.hours}</p>
              <p className="text-xs text-slate-400">Google-listed 24-hour access seven days a week.</p>
            </div>

            <div className="space-y-2 p-5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono text-emerald-400 uppercase">Telephone Support</span>
              <p className="font-semibold text-white text-base">{BUSINESS_CONFIG.phone}</p>
              <p className="text-xs text-slate-400">Direct bp pulse helpline for driver queries & fault reporting.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
