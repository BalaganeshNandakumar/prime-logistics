import React from 'react';
import {
  Factory,
  Car,
  Cog,
  ShoppingBag,
  Store,
  Building2,
  MapPin,
  Globe,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import IndustryCard from '../components/IndustryCard';
import GoodsGrid from '../components/GoodsGrid';
import CTASection from '../components/CTASection';
import SeoHelmet from '../components/SeoHelmet';
import { INDUSTRIES } from '../data/industries';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Industries() {
  return (
    <>
      <SeoHelmet
        title="Industries We Serve | Prime Logistics"
        description="Prime Logistics provides specialized road transportation solutions for Automotive, Manufacturing, Engineering, FMCG, Retail & Distribution, and Industrial & Infrastructure sectors."
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-brand-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
            <span>B2B Sector Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display max-w-4xl mx-auto">
            Industries <span className="accent-gradient-text">We Serve</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Tailored road transportation capabilities designed to meet the rigorous logistics demands of leading industrial, manufacturing, and distribution sectors across India.
          </p>
        </div>
      </section>

      {/* 2. INDUSTRIES DETAILED GRID */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Logistics by Sector"
            title="Specialized Transportation for Key Sectors"
            subtitle="Explore how Prime Logistics supports critical supply chains across major Indian industrial verticals."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} detailed={true} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. TYPES OF GOODS WE TRANSPORT */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Freight Versatility"
            title="Types of Goods We Transport"
            subtitle="Our flexible fleet network handles a diverse range of industrial, commercial, and raw materials with disciplined safety standards."
            align="center"
          />

          <GoodsGrid dark={false} />
        </div>
      </section>

      {/* 4. AREAS WE SERVE */}
      <section className="py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Geographic Reach"
            title="Transportation Across India"
            subtitle="Prime Logistics provides road transportation solutions connecting businesses across major industrial, commercial, and distribution corridors in India."
            align="center"
            dark={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {COMPANY_INFO.areasServed.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Dedicated Road Transport Management • Connecting Major Indian Freight Routes</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            headline="Looking for an Industry-Aligned Logistics Partner?"
            description="Discuss your sector-specific freight demands, dispatch schedules, and vehicle requirements directly with our team."
            primaryBtnText="Call Prime Logistics"
            secondaryBtnText="Email Prime Logistics"
          />
        </div>
      </section>
    </>
  );
}
