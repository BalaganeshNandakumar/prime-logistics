import React, { useState } from 'react';
import {
  Truck,
  ShieldCheck,
  Layers,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  ChevronRight,
  Maximize2,
  PhoneCall,
  Mail
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import FleetCard from '../components/FleetCard';
import CTASection from '../components/CTASection';
import SeoHelmet from '../components/SeoHelmet';
import { FLEET_CATEGORIES, FLEET_STRENGTH } from '../data/fleet';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Fleet() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = [
    { label: 'All Fleet Types', value: 'All' },
    { label: 'Medium (14ft - 22ft)', value: 'Medium' },
    { label: 'Heavy Commercial (24ft - 32ft)', value: 'Heavy' },
    { label: 'Specialized & Trailers', value: 'Specialized' }
  ];

  const filteredFleet = FLEET_CATEGORIES.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Medium') {
      return ['14 ft Vehicles', '17 ft Vehicles', '19 ft Vehicles', '20 ft Vehicles', '22 ft Vehicles'].includes(item.name);
    }
    if (activeFilter === 'Heavy') {
      return ['24 ft Vehicles', '32 ft SXL', '32 ft MXL', 'Container Vehicles'].includes(item.name);
    }
    if (activeFilter === 'Specialized') {
      return ['Trailers', 'Open-Body Vehicles', 'Specialized Vehicles'].includes(item.name);
    }
    return true;
  });

  return (
    <>
      <SeoHelmet
        title="Our Fleet | Prime Logistics"
        description="Explore the Prime Logistics fleet: 50+ owned vehicles, 150+ attached vehicles, and 12 vehicle configurations from 14ft to 32ft MXL and specialized trailers."
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-brand-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 -right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
            <span>Asset Capacity & Configurations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display max-w-4xl mx-auto">
            Our <span className="accent-gradient-text">Fleet Network</span>
          </h1>

          <p className="mt-3 text-2xl font-bold text-slate-100">
            {FLEET_STRENGTH.subtitle || "The Right Fleet for Every Requirement"}
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {FLEET_STRENGTH.description}
          </p>
        </div>
      </section>

      {/* 2. FLEET STRENGTH HIGHLIGHT BAR */}
      <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-lg text-center hover:border-amber-500/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950 font-display">
              {FLEET_STRENGTH.owned}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mt-1">
              Owned Vehicles
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-lg text-center hover:border-amber-500/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950 font-display">
              {FLEET_STRENGTH.attached}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mt-1">
              Attached Vehicles
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-brand-navy-950 border border-slate-800 shadow-xl text-center text-white hover:border-amber-500/50 transition-all col-span-2 md:col-span-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display">
              {FLEET_STRENGTH.total}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
              Total Fleet Network
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-lg text-center hover:border-amber-500/50 transition-all">
            <div className="text-xl sm:text-2xl font-extrabold text-brand-navy-950 font-display pt-1">
              Multiple
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mt-1">
              Configurations
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-lg text-center hover:border-amber-500/50 transition-all">
            <div className="text-xl sm:text-2xl font-extrabold text-brand-navy-950 font-display pt-1">
              Flexible
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mt-1">
              Deployment
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLEET CATEGORY FILTER & GRID */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="12 Vehicle Categories"
            title="Comprehensive Vehicle Configurations"
            subtitle="Explore our fleet portfolio structured to transport standard, high-cube, weatherproof, and specialized industrial freight."
            align="center"
          />

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setActiveFilter(opt.value)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeFilter === opt.value
                    ? 'bg-brand-navy-950 text-amber-400 shadow-md border border-brand-navy-800'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Fleet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {filteredFleet.map((fleet) => (
              <FleetCard key={fleet.id} fleet={fleet} />
            ))}
          </div>

          {/* Configuration Note & Direct Contact Actions */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500/10 text-amber-600 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Fleet Allocation</span>
            </div>
            <h3 className="text-xl font-bold text-brand-navy-950">
              Need a Specific Vehicle Configuration?
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
              Whether your consignment requires open-body cranes, sealed containerized transit, or heavy multi-axle trailers, our Chennai operations team matches the right chassis to your freight profile.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center items-center">
              <Button
                href={`tel:${COMPANY_INFO.phone}`}
                variant="primary"
                size="md"
                icon={PhoneCall}
                iconPosition="left"
              >
                Call Prime Logistics
              </Button>
              <Button
                href={`mailto:${COMPANY_INFO.email}`}
                variant="secondary"
                size="md"
                icon={Mail}
                iconPosition="left"
              >
                Email Prime Logistics
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            headline="Ready to Deploy the Right Fleet for Your Cargo?"
            description="Discuss your vehicle requirement, volume, and route schedule directly with our Chennai operations team."
            primaryBtnText="Call Prime Logistics"
            secondaryBtnText="Email Prime Logistics"
          />
        </div>
      </section>
    </>
  );
}
