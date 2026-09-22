import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { Zap, Navigation, Phone, Menu, X, Clock } from 'lucide-react';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

interface NavItem {
  id: PageRoute;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'charging', label: 'Charging' },
  { id: 'location', label: 'Location' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      {/* Top micro-bar: 24h & phone info */}
      <div className="hidden sm:block border-b border-slate-900 bg-slate-950 text-xs text-slate-400 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {BUSINESS_CONFIG.hours} Access
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Pemberton Gardens, Archway, London N19 5PX</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              id="header-top-phone-link"
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-slate-300 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Driver Support: {BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <button
          id="header-brand-logo-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          aria-label="bp pulse Charging Station Home"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-950/40 text-slate-950 transition-transform group-hover:scale-105">
            <Zap className="w-6 h-6 text-slate-950 fill-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white font-mono uppercase">bp pulse</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 tracking-wide uppercase">
                EV Station
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium tracking-normal">
              Archway • Pemberton Gdns
            </p>
          </div>
        </button>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'text-white bg-slate-900 shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-emerald-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            id="header-call-support-btn"
            href={BUSINESS_CONFIG.phoneHref}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors border border-slate-800"
            title="Call Support (+44 800 464 3444)"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call Support</span>
          </a>

          
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            id="mobile-header-call-icon"
            href={BUSINESS_CONFIG.phoneHref}
            className="p-2 text-emerald-400 bg-slate-900 rounded-lg border border-slate-800"
            aria-label="Call Support"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};
