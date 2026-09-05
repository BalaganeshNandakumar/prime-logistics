import React from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { Truck, ShieldCheck, Layers, Cpu, Globe } from 'lucide-react';

const iconMap = {
  "Owned Vehicles": Truck,
  "Attached Vehicles": ShieldCheck,
  "Total Fleet Network": Layers,
  "Vehicle Configurations": Cpu,
  "Transportation Capability": Globe,
};

export default function StatCard({
  value,
  suffix = '',
  label,
  desc,
  isText = false,
  dark = true
}) {
  const numericVal = typeof value === 'number' ? value : 0;
  const { count, elementRef } = useCountUp(isText ? 0 : numericVal, 1600);
  const IconComponent = iconMap[label] || Truck;

  return (
    <div
      ref={elementRef}
      className={`relative group p-6 sm:p-7 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 ${
        dark
          ? 'bg-gradient-to-b from-brand-navy-900/90 to-brand-navy-950/90 border border-slate-800/80 hover:border-amber-500/40 shadow-xl'
          : 'bg-white border border-slate-200/80 hover:border-amber-500/40 shadow-lg'
      }`}
    >
      {/* Subtle top accent highlight */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">
          Verified
        </span>
      </div>

      <div className="space-y-1">
        <div className="flex items-baseline gap-1">
          <span className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display ${
            dark ? 'text-white' : 'text-brand-navy-950'
          }`}>
            {isText ? value : `${count}${suffix}`}
          </span>
        </div>
        <h4 className="text-base sm:text-lg font-bold text-amber-500">
          {label}
        </h4>
      </div>

      {desc && (
        <p className={`mt-2 text-xs sm:text-sm ${dark ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
          {desc}
        </p>
      )}
    </div>
  );
}
