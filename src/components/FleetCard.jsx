import React from 'react';
import { Truck, ShieldAlert, Maximize, ShieldCheck, Sliders, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Truck: Truck,
  Container: Truck,
  ShieldAlert: ShieldAlert,
  Maximize: Maximize,
  ShieldCheck: ShieldCheck,
  Sliders: Sliders,
};

export default function FleetCard({ fleet }) {
  const IconComponent = iconMap[fleet.icon] || Truck;

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Visual Image */}
      <div className="relative h-48 overflow-hidden bg-brand-navy-950">
        <img
          src={fleet.image}
          alt={`${fleet.name} - Prime Logistics Fleet`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-3.5 left-3.5 bg-brand-navy-950/90 backdrop-blur-md text-slate-200 text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-700/60">
          {fleet.category}
        </div>

        {fleet.badge && (
          <div className="absolute bottom-3 right-3 bg-amber-500 text-slate-950 text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
            {fleet.badge}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2.5">
            <h3 className="text-lg sm:text-xl font-bold text-brand-navy-950 group-hover:text-amber-600 transition-colors">
              {fleet.name}
            </h3>
            <div className="p-2 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors flex-shrink-0">
              <IconComponent className="w-4 h-4" />
            </div>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
            {fleet.description}
          </p>

          {fleet.suitableFor && (
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Typical Cargo Deployment
              </span>
              <p className="text-xs text-slate-700 font-medium">
                {fleet.suitableFor}
              </p>
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-slate-100">
          <Link
            to="/fleet"
            className="inline-flex items-center justify-between w-full text-xs sm:text-sm font-bold text-brand-navy-900 group-hover:text-amber-600 transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
