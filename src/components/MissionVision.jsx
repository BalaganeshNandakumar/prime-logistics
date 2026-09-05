import React from 'react';
import { Target, Eye, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function MissionVision({ className = '' }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 ${className}`}>
      {/* MISSION CARD */}
      <div className="relative group bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 hover:border-amber-500/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500" />
        
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
            <Target className="w-7 h-7" />
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-slate-400 font-display">
            Strategic Purpose
          </span>
        </div>

        <h3 className="text-2xl font-black text-brand-navy-950 mb-4 tracking-tight">
          OUR MISSION
        </h3>

        <p className="text-slate-700 text-base leading-relaxed font-medium">
          "{COMPANY_INFO.mission}"
        </p>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Commitment to Timeliness & Safety</span>
        </div>
      </div>

      {/* VISION CARD */}
      <div className="relative group bg-gradient-to-br from-brand-navy-900 to-brand-navy-950 rounded-2xl p-8 sm:p-10 border border-slate-800 hover:border-amber-500/60 shadow-xl transition-all duration-300 overflow-hidden text-white">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-400" />
        
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
            <Eye className="w-7 h-7" />
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-amber-400/70 font-display">
            Long-term Horizon
          </span>
        </div>

        <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
          OUR VISION
        </h3>

        <p className="text-slate-300 text-base leading-relaxed font-medium">
          "{COMPANY_INFO.vision}"
        </p>

        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Operational Excellence Across India</span>
        </div>
      </div>
    </div>
  );
}
