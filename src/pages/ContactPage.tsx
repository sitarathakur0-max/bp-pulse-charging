import React, { useState } from 'react';
import { PageRoute } from '../types';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import {
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  ExternalLink,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: 'General Location Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@example.com).';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please select or provide a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'General Location Inquiry',
      message: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
            Contact & Support
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch & Driver Support
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Direct contact information and assistance channels for the bp pulse charging station at Pemberton Gardens, Archway.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Details & Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & 24/7 Helpline */}
          <div className="lg:col-span-5 space-y-6">
            {/* Urgent Assistance Warning Card */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2.5 text-amber-300 font-bold text-sm">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <span>Urgent Charging Faults & Stuck Cables</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                If you are currently at the charging station and experiencing an emergency, stuck charging cable, or offline unit, do not wait for email reply. Call the bp pulse 24-hour driver line immediately.
              </p>
              <a
                id="contact-urgent-call-cta"
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wide transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-slate-950" />
                <span>Call Helpline: {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>

            {/* Official Station Information */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <h2 className="text-base font-bold text-white uppercase font-mono tracking-wider">
                Location Particulars
              </h2>

              <div className="flex items-start gap-3.5 text-sm">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">bp pulse Charging Station</p>
                  <p className="text-slate-300">Pemberton Gardens, Archway</p>
                  <p className="text-slate-300">London N19 5PX</p>
                  <p className="text-xs text-slate-400 mt-0.5">United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Opening Hours</p>
                  <p className="text-slate-300">{BUSINESS_CONFIG.hours}</p>
                  <p className="text-xs text-slate-400">Continuous 7-day driver access</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Telephone Support</p>
                  <a
                    href={BUSINESS_CONFIG.phoneHref}
                    className="text-emerald-400 font-mono font-semibold hover:underline block"
                  >
                    {BUSINESS_CONFIG.phone}
                  </a>
                  <p className="text-xs text-slate-400">Customer care & fault reporting</p>
                </div>
              </div>
            </div>

            {/* Official Network Resource */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
              <p className="font-semibold text-white">bp pulse Central Network:</p>
              <p className="text-slate-400">
                To manage membership, inspect tariffs, or check other stations:
              </p>
              <a
                href={BUSINESS_CONFIG.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <span>chargers.bppulse.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Form Submitted</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for your feedback regarding the Pemberton Gardens charging station. Your message has been formatted and logged.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto text-left">
                    <p>
                      <strong>Note:</strong> Urgent hardware breakdowns or active session errors should always be phoned through to <strong>+44 800 464 3444</strong>.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      id="contact-send-another-btn"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-white">Send a Location Message</h2>
                    <p className="text-xs text-slate-400 mt-1">
                      For general location comments, access observations, or non-urgent queries.
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="block text-xs font-semibold text-slate-300">
                      Full Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 text-white text-sm border focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400'
                      }`}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'form-name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="form-name-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="block text-xs font-semibold text-slate-300">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 text-white text-sm border focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400'
                      }`}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'form-email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="form-email-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-subject" className="block text-xs font-semibold text-slate-300">
                      Inquiry Subject <span className="text-emerald-400">*</span>
                    </label>
                    <select
                      id="form-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 text-white text-sm border border-slate-800 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    >
                      <option value="General Location Inquiry">General Location Inquiry</option>
                      <option value="Bay Access & Street Parking">Bay Access & Street Parking</option>
                      <option value="Non-Urgent Feedback">Non-Urgent Feedback</option>
                      <option value="Website Correction">Website Information Inquiry</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="block text-xs font-semibold text-slate-300">
                      Message / Notes <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your inquiry or note regarding the Pemberton Gardens charging point..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 text-white text-sm border focus:outline-none transition-all resize-y ${
                        errors.message
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400'
                      }`}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'form-message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="form-message-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-slate-950 font-bold text-sm uppercase tracking-wide transition-all shadow-lg shadow-emerald-950/40 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Validating...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      Client-side form with direct validation. For real-time fault resolution, please call +44 800 464 3444.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
