import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { Zap, MapPin, Phone, Clock, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Identity & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                <Zap className="w-5 h-5 fill-slate-950 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-bold text-white text-lg tracking-tight">bp pulse</span>
                <p className="text-xs text-slate-400 font-medium">Charging Station • Archway</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dedicated electric vehicle charging point located on Pemberton Gardens in Archway, North London. Listed as open 24 hours for EV drivers across the capital.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open 24 hours daily</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Site Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => onNavigate('home')}
                  className="hover:text-emerald-400 transition-colors text-slate-300 text-left"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => onNavigate('about')}
                  className="hover:text-emerald-400 transition-colors text-slate-300 text-left"
                >
                  About the Location
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-charging"
                  onClick={() => onNavigate('charging')}
                  className="hover:text-emerald-400 transition-colors text-slate-300 text-left"
                >
                  Charging Guide & Steps
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-location"
                  onClick={() => onNavigate('location')}
                  className="hover:text-emerald-400 transition-colors text-slate-300 text-left"
                >
                  Location & Directions
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-reviews"
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-emerald-400 transition-colors text-slate-300 text-left"
                >
                  Reviews & Rating (2.9/5)
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-faq"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-emerald-400 transition-colors text-slate-300 text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-emerald-400 transition-colors text-slate-300 text-left"
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Hours */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Location & Hours
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white">{BUSINESS_CONFIG.address.street}</p>
                <p>{BUSINESS_CONFIG.address.area}, London {BUSINESS_CONFIG.address.postcode}</p>
                <p className="text-xs text-slate-400 mt-0.5">{BUSINESS_CONFIG.address.country}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{BUSINESS_CONFIG.hours}</span>
            </div>
            <div className="pt-2">
        
            </div>
          </div>

          {/* Column 4: Official Network & Support */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Driver Support & Network
            </h3>
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <p className="text-xs text-slate-400">24/7 Telephone Support:</p>
              <a
                id="footer-phone-link"
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{BUSINESS_CONFIG.phone}</span>
              </a>
              <p className="text-[11px] text-slate-400 leading-tight">
                For live fault reporting, session diagnostics, or account queries.
              </p>
            </div>

            <div className="pt-1">
              <p className="text-xs text-slate-400 mb-2">Official bp pulse Network Reference:</p>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar: Disclaimers & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} bp pulse Charging Station • Pemberton Gardens, Archway, London N19 5PX.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>Informational portal based on verified Google location data.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
