import React, { useEffect } from 'react';
import { PageRoute } from '../types';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import {
  Home,
  Info,
  Zap,
  MapPin,
  Star,
  HelpCircle,
  Mail,
  Navigation,
  Phone,
  Clock,
  ExternalLink,
  X,
} from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

interface MobileNavItem {
  id: PageRoute;
  label: string;
  description: string;
  icon: React.ElementType;
}

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { id: 'home', label: 'Home', description: 'Overview & quick driver actions', icon: Home },
  { id: 'about', label: 'About Station', description: 'Role as an Archway charging point', icon: Info },
  { id: 'charging', label: 'Charging Info', description: 'Pre-trip checks & on-site steps', icon: Zap },
  { id: 'location', label: 'Location & Maps', description: 'Pemberton Gardens directions', icon: MapPin },
  { id: 'reviews', label: 'Reviews (2.9/5)', description: 'Google ratings & driver feedback', icon: Star },
  { id: 'faq', label: 'FAQ', description: 'Common driver questions answered', icon: HelpCircle },
  { id: 'contact', label: 'Contact & Support', description: '24/7 phone assistance & inquiries', icon: Mail },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
}) => {
  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden flex flex-col bg-slate-950/95 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      {/* Top bar inside drawer */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
            <Zap className="w-5 h-5 fill-slate-950" />
          </div>
          <div>
            <span className="font-bold text-base text-white tracking-tight">bp pulse Archway</span>
            <p className="text-[11px] text-emerald-400 font-medium">Open 24 Hours</p>
          </div>
        </div>
        <button
          id="mobile-drawer-close-btn"
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        {MOBILE_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => {
                onNavigate(item.id);
                onClose();
              }}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-left transition-all ${
                isActive
                  ? 'bg-slate-900 text-emerald-400 border border-emerald-500/30 font-semibold'
                  : 'text-slate-200 hover:bg-slate-900/60 hover:text-white'
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-900 text-slate-400'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-base font-medium">{item.label}</div>
                <div className="text-xs text-slate-400 truncate">{item.description}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Action Section */}
      <div className="p-5 border-t border-slate-800 bg-slate-900/80 space-y-3">
        <a
          id="mobile-menu-directions-btn"
          href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-400 text-slate-950 font-semibold text-sm hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-950/40"
        >
          <Navigation className="w-4 h-4 fill-slate-950" />
          <span>Get Directions (Google Maps)</span>
        </a>

        <a
          id="mobile-menu-support-btn"
          href={BUSINESS_CONFIG.phoneHref}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium text-sm transition-colors border border-slate-700"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Call Support ({BUSINESS_CONFIG.phone})</span>
        </a>

        <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-emerald-400" />
          <span>Pemberton Gardens, Archway • Open 24h</span>
        </div>
      </div>
    </div>
  );
};
