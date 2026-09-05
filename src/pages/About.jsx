import React from 'react';
import {
  ShieldCheck,
  Truck,
  MapPin,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  Compass,
  PhoneCall,
  PackageCheck,
  Network,
  Cpu
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import TejasNetworkCard from '../components/TejasNetworkCard';
import MissionVision from '../components/MissionVision';
import CTASection from '../components/CTASection';
import SeoHelmet from '../components/SeoHelmet';
import { COMPANY_INFO } from '../data/companyInfo';
import { FLEET_STRENGTH } from '../data/fleet';
import aboutFleetImg from '../assets/images/about/about-fleet.jpg';

export default function About() {
  const approachSteps = [
    {
      title: "Understanding Requirements",
      desc: "Deep analysis of cargo dimensions, payload weight, dispatch cycles, loading restrictions, and delivery expectations.",
      icon: ClipboardCheck
    },
    {
      title: "Vehicle Selection",
      desc: "Matching specific freight profiles to the ideal vehicle configuration—from 14ft container carriers to 32ft MXL multi-axle units.",
      icon: Cpu
    },
    {
      title: "Route Planning",
      desc: "Optimizing interstate highways and industrial corridors to ensure safe, compliant, and fuel-efficient transit schedules.",
      icon: Compass
    },
    {
      title: "Operational Coordination",
      desc: "Synchronized loading supervision, documentation checks, and dispatch execution across origins.",
      icon: Truck
    },
    {
      title: "Active Communication",
      desc: "Consistent coordination and timely updates throughout the transit journey to keep dispatch desks informed.",
      icon: PhoneCall
    },
    {
      title: "Reliable Delivery",
      desc: "Disciplined delivery execution with physical verification and formal delivery acknowledgments at destination gates.",
      icon: PackageCheck
    }
  ];

  return (
    <>
      <SeoHelmet
        title="About Prime Logistics | Transportation & Logistics"
        description="Learn about Prime Logistics, a Chennai-headquartered B2B transportation company and sister concern of Tejas Logistics Service with 200+ fleet network."
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-brand-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
            <span>Corporate Profile</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display max-w-4xl mx-auto">
            About <span className="accent-gradient-text">Prime Logistics</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Delivering dependable, efficient, and scalable road transportation solutions engineered for businesses across India.
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/10 text-amber-600 border border-amber-500/20">
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950 tracking-tight leading-tight">
                A Dedicated B2B Road Transportation Partner
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Prime Logistics is a Chennai-headquartered transportation and logistics company focused on delivering reliable, efficient, and scalable road transportation solutions for businesses across India.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We combine dedicated corporate asset ownership with extensive attached fleet flexibility. This structure allows us to support a wide range of cargo profiles, from high-velocity FMCG distribution to heavy engineering machinery and just-in-time automotive supply lines.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-brand-navy-950 font-bold text-sm mb-1">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>Headquarters</span>
                  </div>
                  <p className="text-xs text-slate-600">Chennai, Tamil Nadu, India</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-brand-navy-950 font-bold text-sm mb-1">
                    <Truck className="w-4 h-4 text-amber-500" />
                    <span>Reach</span>
                  </div>
                  <p className="text-xs text-slate-600">Pan-India Road Logistics</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src={aboutFleetImg}
                  alt="Prime Logistics Heavy Fleet in Motion"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-brand-navy-950/90 backdrop-blur-md p-5 rounded-2xl border border-slate-700 text-white">
                  <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">Enterprise Transport</span>
                  <h4 className="text-lg font-bold mt-1">200+ Integrated Fleet Network</h4>
                  <p className="text-xs text-slate-300 mt-1">Dedicated road transportation across industrial corridors</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. RELATIONSHIP WITH TEJAS LOGISTICS */}
      <section className="py-20 lg:py-28 bg-brand-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TejasNetworkCard />
        </div>
      </section>

      {/* 4. FLEET STRENGTH METRICS */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Asset Capabilities"
            title="Our Fleet Strength"
            subtitle="Prime Logistics operates with a combination of owned and attached vehicles, giving customers access to a flexible transportation network capable of supporting different cargo volumes, routes, and vehicle requirements."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg text-center group hover:border-amber-500/50 transition-all">
              <div className="text-5xl font-black text-brand-navy-950 font-display group-hover:text-amber-500 transition-colors">
                50+
              </div>
              <h3 className="text-lg font-bold text-slate-800 mt-2">Owned Vehicles</h3>
              <p className="text-xs text-slate-500 mt-1">Dedicated corporate asset base for controlled logistics operations</p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg text-center group hover:border-amber-500/50 transition-all">
              <div className="text-5xl font-black text-brand-navy-950 font-display group-hover:text-amber-500 transition-colors">
                150+
              </div>
              <h3 className="text-lg font-bold text-slate-800 mt-2">Attached Vehicles</h3>
              <p className="text-xs text-slate-500 mt-1">Flexible network capacity ready to absorb sudden volume fluctuations</p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-navy-950 text-white border border-slate-800 shadow-xl text-center group sm:col-span-2 lg:col-span-1">
              <div className="text-5xl font-black text-amber-400 font-display">
                200+
              </div>
              <h3 className="text-lg font-bold text-white mt-2">Total Fleet Network</h3>
              <p className="text-xs text-slate-300 mt-1">Comprehensive combined transport capacity serving Pan-India routes</p>
            </div>
          </div>

          <div className="text-center">
            <Button to="/fleet" variant="primary" size="md" icon={ArrowRight}>
              Explore Vehicle Categories (14ft to 32ft MXL & Trailers)
            </Button>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Operational Methodology"
            title="Our Approach"
            subtitle="A disciplined framework designed to eliminate friction and maximize transit reliability."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {approachSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-amber-500/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy-950 mb-2 group-hover:text-amber-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6 & 7. MISSION & VISION */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Corporate Purpose"
            title="Mission & Vision"
            subtitle="The foundational principles shaping our growth as India's trusted B2B logistics partner."
            align="center"
          />

          <MissionVision />
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            headline="Let's Move Your Business Forward"
            description="Partner with an established transportation network capable of handling your critical logistics operations across India."
            primaryBtnText="Call Prime Logistics"
            secondaryBtnText="Email Prime Logistics"
          />
        </div>
      </section>
    </>
  );
}
