import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_CONFIG, REVIEWS_FEEDBACK } from '../data/businessConfig';
import {
  Star,
  ShieldCheck,
  Phone,
  ExternalLink,
  Info,
  AlertTriangle,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Google Review Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Customer Reviews & Driver Feedback
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Unfiltered, honest presentation of verified Google review feedback for the Pemberton Gardens charging station in Archway, London.
          </p>
        </div>
      </section>

      {/* Verified Rating Scorecard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Score box */}
            <div className="md:col-span-4 text-center md:text-left space-y-3 md:border-r md:border-slate-800 md:pr-8">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Overall Google Score
              </span>
              <div className="text-5xl sm:text-6xl font-extrabold text-white font-mono tracking-tight">
                {BUSINESS_CONFIG.rating}
                <span className="text-2xl text-slate-400 font-normal"> / 5</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(BUSINESS_CONFIG.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : i === Math.floor(BUSINESS_CONFIG.rating)
                        ? 'fill-amber-400/50 text-amber-400'
                        : 'text-slate-700'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-slate-400">
                Based on {BUSINESS_CONFIG.reviewCount} public Google reviews
              </p>
            </div>

            {/* Explanation & Context */}
            <div className="md:col-span-8 space-y-4">
              <h2 className="text-xl font-bold text-white">
                Understanding Driver Experiences at This Site
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Public driver reviews reflect a rating of 2.9 out of 5 stars on Google. Feedback indicates that while the Archway location is appreciated for residential convenience, drivers have encountered periodic hardware issues—notably CCS connector downtime or instances where only a single unit was active.
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">Proactive Travel Recommendation:</strong> Before setting off, always consult the official bp pulse app or live network map at <a href={BUSINESS_CONFIG.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">chargers.bppulse.com</a> to confirm whether the specific connector type you need is online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Customer Feedback Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">
            Supplied Review Insights
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Summary of Documented Feedback
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Factual summaries of the supplied Google user reports:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_FEEDBACK.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    {item.source}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {item.operationalTopic}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-800'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-slate-400 ml-2 font-mono">{item.rating}/5</span>
                </div>

                <h3 className="text-base font-bold text-white">
                  {item.summary}
                </h3>

                <blockquote className="text-sm text-slate-300 italic border-l-2 border-slate-700 pl-3 leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-1">
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide font-mono">
                  Driver Advice
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.supportAdvice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support CTA for drivers experiencing faults */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Encountering an issue at Pemberton Gardens?</h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Report faults directly to the bp pulse network support team to expedite engineering dispatch and firmware resets.
            </p>
          </div>
          <a
            id="reviews-call-support-cta"
            href={BUSINESS_CONFIG.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm tracking-wide transition-colors shrink-0 shadow-lg shadow-emerald-950/40"
          >
            <Phone className="w-4 h-4 text-slate-950" />
            <span>Call {BUSINESS_CONFIG.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
