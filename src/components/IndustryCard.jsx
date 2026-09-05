import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Factory, Cog, ShoppingBag, Store, Building2, ArrowRight } from 'lucide-react';

const iconMap = {
  Car: Car,
  Factory: Factory,
  Cog: Cog,
  ShoppingBag: ShoppingBag,
  Store: Store,
  Building2: Building2,
};

export default function IndustryCard({ industry, detailed = false }) {
  const IconComponent = iconMap[industry.icon] || Factory;

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden bg-brand-navy-950">
        <img
          src={industry.image}
          alt={`${industry.title} Transportation - Prime Logistics`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/40 to-transparent" />
        
        {industry.badge && (
          <div className="absolute top-3.5 right-3.5 bg-brand-navy-950/90 backdrop-blur-md text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-md border border-amber-500/30">
            {industry.badge}
          </div>
        )}

        <div className="absolute bottom-3 left-4 w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-brand-navy-950 group-hover:text-amber-600 transition-colors mb-2.5">
            {industry.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {detailed && industry.fullDescription ? industry.fullDescription : industry.description}
          </p>

          {industry.keyGoods && (
            <div className="pt-3 border-t border-slate-100 mb-4">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Typical Handled Freight:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {industry.keyGoods.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-block text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-slate-100 mt-auto">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy-900 group-hover:text-amber-600 transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
