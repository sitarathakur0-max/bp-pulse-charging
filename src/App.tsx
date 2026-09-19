import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { Footer } from './components/Footer';
import { BottomMobileBar } from './components/BottomMobileBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ChargingPage } from './pages/ChargingPage';
import { LocationPage } from './pages/LocationPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Parse route from window.location.pathname or fallback to 'home'
  const getRouteFromPath = (): PageRoute => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
    if (path === 'about') return 'about';
    if (path === 'charging') return 'charging';
    if (path === 'location') return 'location';
    if (path === 'reviews') return 'reviews';
    if (path === 'faq') return 'faq';
    if (path === 'contact') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getRouteFromPath);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync state with browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getRouteFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'charging':
        return <ChargingPage onNavigate={handleNavigate} />;
      case 'location':
        return <LocationPage onNavigate={handleNavigate} />;
      case 'reviews':
        return <ReviewsPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FaqPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      {/* Dynamic SEO Meta & Schema.org LocalBusiness */}
      <SEOHead currentPage={currentPage} />

      {/* Main Responsive Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Accessible Mobile Slide-out Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main View Area with bottom padding for mobile quick action bar */}
      <main className="flex-1 pb-16 md:pb-0" id="main-content">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick Action Bar (Get Directions & Call Support) */}
      <BottomMobileBar />
    </div>
  );
}
