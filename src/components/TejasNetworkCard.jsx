import React from 'react';
import { ArrowDown, Network, ShieldCheck, Sparkles, Building2, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function TejasNetworkCard() {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#060D19] via-[#0B1528] to-[#132238] border border-slate-800 p-8 sm:p-12 lg:p-14 shadow-2xl text-white">
      {/* Background ambient lighting */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 bg-amber-500/10 text-amber-400 border border-amber-500/20 backdrop-blur-sm">
          <Network className="w-3.5 h-3.5 text-amber-400" />
          <span>Established Strategic Affiliation</span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
          Backed by an Established Transportation Network
        </h3>

        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          {COMPANY_INFO.sisterConcern.relationshipText}
        </p>
      </div>

      {/* Visual Flow diagram: Tejas Logistics Service -> Operational Experience + Fleet Capabilities -> Prime Logistics */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Step 1: Tejas Logistics */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 text-center hover:border-amber-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Sister Concern
            </span>
            <h4 className="text-lg font-bold text-white">
              Tejas Logistics Service
            </h4>
            <p className="text-xs text-slate-400 mt-2">
              Foundational road logistics infrastructure & heritage
            </p>
          </div>

          {/* Flow Connector 1 (Vertical on mobile, horizontal arrow effect on desktop) */}
          <div className="flex flex-col items-center justify-center py-2 md:py-0">
            <div className="bg-amber-500/20 border border-amber-500/30 text-amber-400 p-2.5 rounded-full shadow-lg">
              <ArrowDown className="w-5 h-5 md:-rotate-90" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 mt-1.5">
              Empowers
            </span>
          </div>

          {/* Step 2: Prime Logistics */}
          <div className="bg-gradient-to-b from-brand-navy-800 to-brand-navy-950 border-2 border-amber-500/60 rounded-2xl p-6 text-center shadow-accent-glow group">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Active Provider
            </span>
            <h4 className="text-lg font-bold text-white">
              PRIME-LOGISTICS
            </h4>
            <p className="text-xs text-slate-300 mt-2">
              Modern, scalable B2B road transportation solutions
            </p>
          </div>
        </div>

        {/* Supporting Capability Bar */}
        <div className="mt-8 bg-slate-900/60 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">
                Synergistic Fleet & Operations
              </h5>
              <p className="text-xs text-slate-400">
                Operational experience + combined 200+ fleet capabilities across Pan-India routes
              </p>
            </div>
          </div>
          <div className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-md border border-amber-500/20 whitespace-nowrap">
            Chennai Headquartered
          </div>
        </div>
      </div>
    </div>
  );
}
