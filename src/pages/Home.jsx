import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Layers,
  Globe,
  Boxes,
  Cpu,
  ChevronRight,
  CheckCircle2,
  PhoneCall,
  MapPin,
  TrendingUp,
  Sliders,
  Sparkles,
  Phone
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import ServiceCard from '../components/ServiceCard';
import FleetCard from '../components/FleetCard';
import IndustryCard from '../components/IndustryCard';
import GoodsGrid from '../components/GoodsGrid';
import HowWeWork from '../components/HowWeWork';
import TejasNetworkCard from '../components/TejasNetworkCard';
import MissionVision from '../components/MissionVision';
import CTASection from '../components/CTASection';
import SeoHelmet from '../components/SeoHelmet';

import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES } from '../data/services';
import { FLEET_CATEGORIES, FLEET_STRENGTH } from '../data/fleet';
import { INDUSTRIES } from '../data/industries';
import { WHY_CHOOSE_US } from '../data/whyChooseUs';

export default function Home() {
  return (
    <>
      <SeoHelmet
        title="Prime Logistics | Complete Logistics Solution"
        description="Prime Logistics delivers dependable, efficient, and scalable road transportation solutions for businesses across India. Headquartered in Chennai, Tamil Nadu."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 bg-brand-navy-950 overflow-hidden text-white">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Core Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>B2B Road Transportation & Fleet Solutions</span>
              </div>

              {/* Headlines */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-display">
                Complete <span className="accent-gradient-text">Logistics Solution</span>
              </h1>

              <p className="text-xl sm:text-2xl font-medium text-slate-200 leading-snug">
                Reliable transportation solutions built around your business.
              </p>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Prime Logistics delivers dependable, efficient, and scalable road transportation solutions for businesses across India.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Button
                  href={`tel:${COMPANY_INFO.phone}`}
                  variant="primary"
                  size="lg"
                  icon={PhoneCall}
                  iconPosition="left"
                >
                  Call Prime Logistics
                </Button>

                <Button
                  to="/services"
                  variant="outlineWhite"
                  size="lg"
                  icon={ChevronRight}
                >
                  Explore Our Services
                </Button>
              </div>

              {/* Micro Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Sister Concern: Tejas Logistics Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>HQ: Chennai, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>Pan-India Capability</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Image Container */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-brand-navy-900 group">
                  <img
                    src="/images/hero/hero-lorry.jpg"
                    alt="Prime Logistics Heavy Commercial Road Transportation"
                    className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/20 to-transparent" />
                  
                  {/* Floating Fleet Capacity Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-navy-950/90 backdrop-blur-md border border-slate-700 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
                          <Truck className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 font-medium">Integrated Capacity</div>
                          <div className="text-base font-extrabold text-white">200+ Fleet Network</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-amber-400 font-bold uppercase">Pan-India</div>
                        <div className="text-[11px] text-slate-400">Road Freight</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative border badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-black px-4 py-2 rounded-xl shadow-lg uppercase tracking-wider hidden sm:block">
                  50+ Owned • 150+ Attached
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMPANY SCALE / TRUST BAR */}
      <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <StatCard
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              desc={stat.desc}
              isText={stat.isText}
              dark={true}
            />
          ))}
        </div>
      </section>

      {/* 3. ABOUT PREVIEW */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src="/images/about/about-operations.jpg"
                  alt="Prime Logistics Road Freight Operations"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-navy-950 text-amber-400 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy-950">Tejas Logistics Network</h4>
                      <p className="text-xs text-slate-600">Sister Concern Operational Synergy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/10 text-amber-600 border border-amber-500/20">
                <span>About Prime Logistics</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950 tracking-tight leading-tight">
                Built to Move Business Forward
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Prime Logistics is a Chennai-headquartered transportation and logistics company focused on delivering reliable, efficient, and scalable road transportation solutions for businesses across India.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-500 text-sm text-slate-700 leading-relaxed">
                Prime Logistics is a sister concern of <strong>Tejas Logistics Service</strong>, backed by the operational experience and fleet capabilities of the Tejas Logistics network.
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                With 50+ owned vehicles and a network of 150+ attached fleet vehicles, Prime Logistics combines dedicated assets with scalable fleet capacity to respond to varying cargo volumes, routes, vehicle requirements, and delivery schedules.
              </p>

              <div className="pt-2">
                <Button
                  to="/about"
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                >
                  Discover Prime Logistics
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Road Freight"
            title="Transportation Solutions That Fit Your Business"
            subtitle="Dependable and scalable road transportation services engineered around B2B operational needs across India."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Button
              to="/services"
              variant="secondary"
              size="lg"
              icon={ArrowRight}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* 5. FLEET PREVIEW */}
      <section className="py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <span>Fleet Diversity & Strength</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                The Right Fleet for Every Requirement
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {FLEET_STRENGTH.description}
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
                <div className="text-3xl font-extrabold text-amber-400 font-display">50+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Owned Vehicles</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
                <div className="text-3xl font-extrabold text-amber-400 font-display">150+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Attached Vehicles</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center col-span-2">
                <div className="text-3xl font-extrabold text-white font-display">200+ Total Fleet Network</div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mt-1">Multiple Configurations • Flexible Deployment</div>
              </div>
            </div>
          </div>

          {/* Fleet Grid Preview (Showing 6 key categories) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {FLEET_CATEGORIES.slice(0, 6).map((fleet) => (
              <FleetCard key={fleet.id} fleet={fleet} />
            ))}
          </div>

          <div className="text-center">
            <Button
              to="/fleet"
              variant="primary"
              size="lg"
              icon={ArrowRight}
            >
              Explore Our Complete Fleet (12 Configurations)
            </Button>
          </div>
        </div>
      </section>

      {/* 6. TYPES OF GOODS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Versatile Cargo Handling"
            title="Moving What Businesses Need"
            subtitle="From industrial raw materials to precision automotive components, we move essential commercial goods with disciplined road freight protocols."
            align="center"
          />

          <GoodsGrid dark={false} />
        </div>
      </section>

      {/* 7. INDUSTRIES PREVIEW */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Sector Expertise"
            title="Industries We Serve"
            subtitle="Supporting major commercial sectors across India with dedicated road freight reliability and supply chain agility."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>

          <div className="text-center">
            <Button
              to="/industries"
              variant="secondary"
              size="lg"
              icon={ArrowRight}
            >
              Explore Industries
            </Button>
          </div>
        </div>
      </section>

      {/* 8. WHY PRIME LOGISTICS */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Prime Advantage"
            title="Why Choose Prime Logistics?"
            subtitle="Built on tangible asset strength, disciplined operations, and scalable road transport capacity."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="group relative p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-500 font-display">
                      {item.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy-950 mb-2.5 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-amber-600 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Enterprise Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. HOW WE WORK */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Disciplined Execution"
            title="How We Work"
            subtitle="A structured 4-step workflow ensuring clarity, safety, and predictability at every milestone."
            align="center"
          />

          <HowWeWork />
        </div>
      </section>

      {/* 10. TEJAS LOGISTICS CONNECTION */}
      <section className="py-20 lg:py-28 bg-brand-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TejasNetworkCard />
        </div>
      </section>

      {/* 11. MISSION & VISION */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Philosophy"
            title="Mission & Vision"
            subtitle="Guiding principles driving our operational standards, client relationships, and nationwide expansion."
            align="center"
          />

          <MissionVision />
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            headline="Ready to Move Your Business Forward?"
            description="Speak directly with the Prime Logistics operations team to discuss your transportation and fleet requirements."
            primaryBtnText="Call Prime Logistics"
            secondaryBtnText="Email Prime Logistics"
          />
        </div>
      </section>
    </>
  );
}
