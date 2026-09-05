import React from 'react';
import Button from './Button';
import { PhoneCall, Mail, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function CTASection({
  headline = "Ready to Move Your Business Forward?",
  description = "Speak directly with the Prime Logistics team to discuss your transportation and fleet requirements.",
  primaryBtnText = "Call Prime Logistics",
  primaryHref = `tel:${COMPANY_INFO.phone}`,
  primaryTo,
  secondaryBtnText = "Email Prime Logistics",
  secondaryHref = `mailto:${COMPANY_INFO.email}`,
  secondaryTo,
  className = ""
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-navy-950 via-brand-navy-900 to-[#132238] border border-slate-800 p-8 sm:p-12 lg:p-16 shadow-2xl text-white ${className}`}>
      {/* Background industrial graphic effect */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-industrial-grid opacity-30 pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 top-10 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-amber-500/20 text-amber-400 border border-amber-500/30">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>Pan-India B2B Road Transportation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          {headline}
        </h2>

        <p className="mt-4 text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <Button
            href={primaryHref}
            to={primaryTo}
            variant="primary"
            size="lg"
            icon={PhoneCall}
            iconPosition="left"
          >
            {primaryBtnText}
          </Button>

          <Button
            href={secondaryHref}
            to={secondaryTo}
            variant="outlineWhite"
            size="lg"
            icon={Mail}
            iconPosition="left"
          >
            {secondaryBtnText}
          </Button>
        </div>
      </div>
    </div>
  );
}
