import React, { useState } from 'react';
import { PageRoute, FaqItem } from '../types';
import { BUSINESS_CONFIG, FAQ_DATA } from '../data/businessConfig';
import {
  ChevronDown,
  HelpCircle,
  Phone,
  Navigation,
  ExternalLink,
  MapPin,
  Clock,
  Zap,
} from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs =
    selectedCategory === 'all'
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
            Driver FAQs
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Essential facts, access details, and operating guidance for the bp pulse EV charging point on Pemberton Gardens, Archway.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'location', label: 'Location & Directions' },
            { id: 'access', label: 'Hours & Access' },
            { id: 'charging', label: 'Charging & Hardware' },
            { id: 'support', label: 'Support & Help' },
          ].map((cat) => (
            <button
              key={cat.id}
              id={`faq-tab-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Working Accordions */}
        <div className="mt-8 space-y-4">
          {filteredFaqs.map((faq: FaqItem) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-colors"
              >
                <button
                  id={`faq-accordion-toggle-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span className="font-bold text-white text-base sm:text-lg flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400 bg-slate-800/80' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-accordion-content-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50"
                  >
                    <p className="pl-8">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions? Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Have a specific question?</h3>
            <p className="text-sm text-slate-400">
              Check official network resources or contact bp pulse telephone care.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              id="faq-page-call-btn"
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Support</span>
            </a>
            <button
              id="faq-to-contact-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold transition-colors"
            >
              <span>Contact Page</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
