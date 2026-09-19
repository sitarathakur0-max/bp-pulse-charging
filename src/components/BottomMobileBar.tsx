import React from 'react';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { Navigation, Phone } from 'lucide-react';

export const BottomMobileBar: React.FC = () => {
  return (
    <aside aria-label="Quick Driver Actions" className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-3 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          id="mobile-bottom-directions-btn"
          href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs tracking-wide uppercase transition-all shadow-md active:scale-95"
          aria-label="Get Directions to Pemberton Gardens in Google Maps"
        >
          <Navigation className="w-4 h-4 fill-slate-950 shrink-0" />
          <span>Get Directions</span>
        </a>

        <a
          id="mobile-bottom-call-btn"
          href={BUSINESS_CONFIG.phoneHref}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-xs tracking-wide transition-all border border-slate-700 active:scale-95"
          aria-label="Call bp pulse support at 0800 464 3444"
        >
          <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Call Support</span>
        </a>
      </div>
    </aside>
  );
};
