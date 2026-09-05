import React from 'react';
import { ClipboardCheck, Compass, Truck, PackageCheck } from 'lucide-react';
import { HOW_WE_WORK } from '../data/whyChooseUs';

const iconMap = {
  ClipboardCheck: ClipboardCheck,
  Compass: Compass,
  Truck: Truck,
  PackageCheck: PackageCheck
};

export default function HowWeWork() {
  return (
    <div className="relative">
      {/* Desktop connecting horizontal line */}
      <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-amber-500/20 via-amber-500/60 to-amber-500/20 -translate-y-8 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {HOW_WE_WORK.map((item, idx) => {
          const IconComponent = iconMap[item.icon] || Truck;
          return (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-amber-500/60 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-brand-navy-950 text-amber-400 flex items-center justify-center font-black text-lg border border-slate-800 shadow-md group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-3xl font-black text-slate-200 group-hover:text-amber-500/30 transition-colors font-display">
                  {item.step}
                </span>
              </div>

              <h3 className="text-xl font-bold text-brand-navy-950 mb-2 group-hover:text-amber-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm font-semibold text-slate-800 mb-2">
                {item.description}
              </p>

              {item.detail && (
                <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                  {item.detail}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
