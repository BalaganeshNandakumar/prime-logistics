import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Truck,
  Boxes,
  ShieldCheck,
  Cpu,
  Globe,
  Layers,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { COMPANY_INFO } from '../data/companyInfo';
import { FLEET_CATEGORIES, FLEET_STRENGTH } from '../data/fleet';

const serviceList = [
  {
    title: "Road Transportation",
    desc: "Reliable road transportation solutions for business and industrial requirements.",
    icon: Truck
  },
  {
    title: "Full Load Transportation",
    desc: "Dedicated transportation solutions for efficient movement of larger cargo volumes.",
    icon: Boxes
  },
  {
    title: "Dedicated Fleet Solutions",
    desc: "Transportation solutions supported by an owned and attached fleet network.",
    icon: ShieldCheck
  },
  {
    title: "Specialized Fleet Requirements",
    desc: "Flexible access to multiple vehicle configurations for different transportation requirements.",
    icon: Cpu
  },
  {
    title: "Pan-India Transportation",
    desc: "Road transportation capability connecting businesses across major industrial, commercial, and distribution corridors in India.",
    icon: Globe
  }
];

export default function Contact() {
  return (
    <>
      <SeoHelmet
        title="Contact Prime Logistics | Complete Logistics Solution"
        description="Connect with Prime Logistics in Chennai, Tamil Nadu. Learn about our road transportation capabilities, 200+ fleet network, and vehicle configurations."
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-brand-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
            <span>Direct Commercial Desk</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display max-w-4xl mx-auto">
            Let's Talk About Your <span className="accent-gradient-text">Transportation Requirements</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Connect directly with our Chennai operations team for dependable, scalable road freight solutions and dedicated fleet deployment across India.
          </p>
        </div>
      </section>

      {/* 2. CONTACT & CAPABILITIES OVERVIEW SECTION */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: KEEP THE CURRENT DESIGN WITH REAL CONTACT DETAILS */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              
              {/* HQ Card */}
              <div className="bg-brand-navy-950 text-white rounded-3xl p-7 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-5">
                  <span>Headquarters</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Chennai Office
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {COMPANY_INFO.headquarters}
                </p>

                <div className="space-y-5 text-sm border-t border-slate-800/90 pt-6">
                  
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block uppercase font-bold tracking-wider">
                        Phone Number
                      </span>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-white hover:text-amber-400 transition-colors font-mono text-base font-semibold block mt-0.5"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block uppercase font-bold tracking-wider">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-white hover:text-amber-400 transition-colors font-mono text-sm font-medium block mt-0.5 break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Physical Address Structured */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block uppercase font-bold tracking-wider mb-1">
                        Physical Address
                      </span>
                      <div className="text-slate-200 text-sm leading-relaxed space-y-0.5 font-medium">
                        <div>No.55/1, Poonamallee Bypass Road</div>
                        <div>Poonamallee, Chennai</div>
                        <div>Tiruvallur District</div>
                        <div>Tamil Nadu - 600056</div>
                        <div>India</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Sister Concern Trust Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sister Concern</span>
                </div>
                <h4 className="text-base font-bold text-brand-navy-950 mb-1">
                  Tejas Logistics Service
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Prime Logistics is backed by the operational experience and fleet capabilities of the Tejas Logistics network.
                </p>
              </div>

              {/* Coverage Scope */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  <Truck className="w-4 h-4 text-amber-500" />
                  <span>Coverage Scope</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Active point-to-point road transportation connecting Chennai, Tamil Nadu, South India, and major Pan-India industrial corridors.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: CAPABILITIES & FLEET OVERVIEW PANEL (NO CLIENT DATA FORM) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Capabilities Header */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xl space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 border border-amber-500/20 mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Our Capabilities</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950 tracking-tight leading-tight">
                    Transportation Solutions Built Around Your Business
                  </h2>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Prime Logistics provides reliable, efficient, and scalable road transportation solutions designed to support different cargo volumes, routes, and vehicle requirements.
                  </p>
                </div>

                {/* OUR SERVICES SECTION */}
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Our Services
                    </h3>
                    <span className="text-xs font-semibold text-amber-600">
                      5 Core Capabilities
                    </span>
                  </div>

                  <div className="space-y-3">
                    {serviceList.map((svc, idx) => {
                      const IconComp = svc.icon;
                      return (
                        <div
                          key={idx}
                          className="group p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-500/50 hover:bg-white transition-all duration-200 flex items-start gap-4"
                        >
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors flex items-center justify-center flex-shrink-0 mt-0.5">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm sm:text-base font-bold text-brand-navy-950 group-hover:text-amber-600 transition-colors">
                              {svc.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                              {svc.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* OUR FLEET SECTION */}
                <div className="pt-8 border-t border-slate-100">
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Our Fleet
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
                      The Right Fleet for Every Requirement
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Prime Logistics operates with a combination of owned and attached vehicles, giving customers access to a flexible transportation network capable of supporting different cargo volumes, routes, and vehicle requirements.
                    </p>
                  </div>

                  {/* Fleet Stats Layout */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-6">
                    <div className="p-4 rounded-xl bg-slate-900 text-white text-center border border-slate-800">
                      <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">
                        50+
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300 mt-0.5">
                        Owned Vehicles
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 text-white text-center border border-slate-800">
                      <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">
                        150+
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300 mt-0.5">
                        Attached Vehicles
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-brand-navy-950 text-white text-center border-2 border-amber-500/50 shadow-sm col-span-2 sm:col-span-1">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                        200+
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-400 mt-0.5">
                        Total Fleet
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 text-brand-navy-950 text-center border border-slate-200 col-span-2 sm:col-span-1">
                      <div className="text-lg sm:text-xl font-extrabold text-brand-navy-950 font-display pt-1">
                        Multiple
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-600 mt-0.5">
                        Configurations
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Types Compact Grid */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sliders className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Vehicle Configurations Available
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                      {FLEET_CATEGORIES.map((fleet) => (
                        <div
                          key={fleet.id}
                          className="p-2.5 sm:p-3 rounded-xl bg-slate-50 hover:bg-amber-50/70 border border-slate-200/90 hover:border-amber-500/40 transition-all text-center group"
                        >
                          <span className="block text-xs sm:text-sm font-bold text-brand-navy-950 group-hover:text-amber-700 transition-colors">
                            {fleet.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* DIRECT CONTACT CTA */}
                <div className="pt-8 border-t border-slate-100">
                  <div className="bg-gradient-to-br from-brand-navy-950 via-brand-navy-900 to-[#132238] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-1.5 max-w-md">
                        <h4 className="text-lg sm:text-xl font-extrabold text-white">
                          Have a Transportation Requirement?
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300">
                          Speak with the Prime Logistics team to discuss your transportation requirements.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3 items-center">
                        <a
                          href={`tel:${COMPANY_INFO.phone}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-sm hover:from-amber-600 hover:to-orange-600 transition-all shadow-md active:scale-95 cursor-pointer"
                        >
                          <PhoneCall className="w-4 h-4" />
                          <span>Call Us</span>
                        </a>

                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all active:scale-95 cursor-pointer"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Email Us</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
