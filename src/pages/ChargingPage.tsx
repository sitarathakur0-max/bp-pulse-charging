import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_CONFIG, SITE_IMAGES } from '../data/businessConfig';
import {
  Zap,
  Phone,
  AlertTriangle,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  Clock,
  ArrowRight,
  Info,
  Shield,
} from 'lucide-react';

interface ChargingPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ChargingPage: React.FC<ChargingPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Page Title */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
            Charging Guide
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Charging Information & Guidance
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Essential steps and practical recommendations for charging your electric vehicle at Pemberton Gardens, Archway.
          </p>
        </div>
      </section>

      {/* Important Advisory Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-amber-500/30 shadow-xl space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white">
                Check Live Charger Status Before Travelling
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                Because hardware operational status and connector availability can change, we strongly recommend checking the official bp pulse live network map or mobile app prior to making your journey. Specific charging bay speeds, tariffs, and connector protocols (such as CCS or Type 2) are maintained on the central bp pulse network system.
              </p>
              <div className="pt-2">
                <a
                  id="charging-official-network-map-link"
                  href={BUSINESS_CONFIG.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30 transition-colors"
                >
                  <span>Open Official bp pulse Network Map (chargers.bppulse.com)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Sections: 1. Before You Travel, 2. At the Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Section: Before You Travel */}
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase">
                <Clock className="w-4 h-4" />
                <span>Phase 1: Pre-Departure</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Before You Travel</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Taking a moment to plan ahead helps prevent unnecessary delays or detours:
              </p>
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>
                    <strong>Verify network availability:</strong> Confirm the Pemberton Gardens station is currently operational on the official bp pulse app or website.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>
                    <strong>Confirm payment method:</strong> Prepare your bp pulse RFID card, mobile app, or standard contactless bank card.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>
                    <strong>Have a secondary backup:</strong> In the event of a bay being occupied or an unexpected fault, have an alternative nearby North London charging stop in mind.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <a
                href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5"
              >
                <span>Navigate route on Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Section: At the Location */}
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase">
                <Zap className="w-4 h-4" />
                <span>Phase 2: On-Site Charging</span>
              </div>
              <h2 className="text-2xl font-bold text-white">At the Location</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                When you arrive at Pemberton Gardens, Archway:
              </p>
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>
                    <strong>Park securely in the charging bay:</strong> Position your vehicle safely without obstructing pedestrian pavements or neighboring driveways.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>
                    <strong>Follow the on-screen prompts:</strong> The digital interface on the physical unit provides exact instructions for connecting your cable and starting power flow.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>
                    <strong>Adhere to local bay signage:</strong> Always check posted Islington borough parking and maximum stay notices displayed adjacent to the bays.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs text-slate-400">
                Listed open 24 hours daily on Pemberton Gardens.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break with Real EV Charging Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto w-full h-full min-h-[280px]">
              <img
                src={SITE_IMAGES.driverUsingCharger}
                alt="Electric vehicle driver connecting charging cable to modern car"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-center space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">
                Driver Support Line
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Need Assistance While at the Charger?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                If the charging unit does not release your cable, fails to authorize your card or app, or displays a maintenance indicator, bp pulse technical support is available by phone.
              </p>
              <div className="pt-3">
                <a
                  id="charging-page-support-call-cta"
                  href={BUSINESS_CONFIG.phoneHref}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-950/40"
                >
                  <Phone className="w-4 h-4 text-slate-950" />
                  <span>Call Support ({BUSINESS_CONFIG.phone})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Network Reference Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Official bp pulse Reference & Resources</h3>
            <p className="text-sm text-slate-400">
              For complete tariff rates, membership options, and nationwide network maps, visit the official site.
            </p>
          </div>
          <a
            id="charging-official-site-btn"
            href={BUSINESS_CONFIG.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors shrink-0"
          >
            <span>Visit chargers.bppulse.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};
