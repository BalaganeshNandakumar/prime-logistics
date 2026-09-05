import React from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  Boxes,
  ShieldCheck,
  Cpu,
  Globe,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  PhoneCall
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import SeoHelmet from '../components/SeoHelmet';
import { SERVICES } from '../data/services';
import { COMPANY_INFO } from '../data/companyInfo';

const iconMap = {
  Truck: Truck,
  Boxes: Boxes,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Globe: Globe
};

export default function Services() {
  return (
    <>
      <SeoHelmet
        title="Logistics & Transportation Services | Prime Logistics"
        description="Explore Prime Logistics road transportation services: Road Transportation, Full Load (FTL), Dedicated Fleet Solutions, Specialized Fleet, and Pan-India capability."
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-brand-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
            <span>B2B Transportation Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display max-w-4xl mx-auto">
            Transportation Solutions <span className="accent-gradient-text">Built Around Your Business</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Reliable, scalable, and dedicated road freight services connecting key manufacturing centers, industrial nodes, and distribution channels across India.
          </p>
        </div>
      </section>

      {/* 2. SERVICES DETAILED SECTIONS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Truck;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Visual Image */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-brand-navy-950">
                    <img
                      src={service.image}
                      alt={`${service.title} - Prime Logistics`}
                      className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/70 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-5 right-5 bg-brand-navy-950/90 backdrop-blur-md text-amber-400 text-xs font-bold px-3.5 py-1.5 rounded-full border border-amber-500/30">
                      {service.highlight}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="font-extrabold text-sm text-brand-navy-950">
                          {service.title}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-slate-500">Pan-India Transit</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                    <IconComponent className="w-3.5 h-3.5 text-amber-500" />
                    <span>Service 0{index + 1}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950 tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Key Benefits List */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Operational Advantages:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.keyBenefits.map((benefit, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Action Buttons (No Data Collection Form) */}
                  <div className="pt-3 flex flex-wrap gap-3 items-center">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-sm shadow-md transition-all active:scale-95"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Call Prime Logistics</span>
                    </a>
                    
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy-900 hover:bg-brand-navy-800 text-white border border-slate-700 font-semibold text-sm transition-all active:scale-95"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email Prime Logistics</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            headline="Need Dedicated Transportation for Your Fleet Schedule?"
            description="Speak directly with our Chennai operations team to discuss your cargo volumes, routes, and vehicle deployment."
            primaryBtnText="Call Prime Logistics"
            primaryHref={`tel:${COMPANY_INFO.phone}`}
            secondaryBtnText="Email Prime Logistics"
            secondaryHref={`mailto:${COMPANY_INFO.email}`}
          />
        </div>
      </section>
    </>
  );
}
