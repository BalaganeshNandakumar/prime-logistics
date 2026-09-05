import React from 'react';
import { GOODS_TYPES } from '../data/whyChooseUs';
import {
  Boxes,
  Cog,
  Car,
  Cpu,
  ShoppingBag,
  Package,
  Zap,
  Layers,
  Component,
  Briefcase,
  Container,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Boxes: Boxes,
  Cog: Cog,
  Car: Car,
  Cpu: Cpu,
  ShoppingBag: ShoppingBag,
  Package: Package,
  Zap: Zap,
  Layers: Layers,
  Component: Component,
  Briefcase: Briefcase,
  Container: Container,
  CheckCircle: CheckCircle
};

export default function GoodsGrid({ dark = false }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
      {GOODS_TYPES.map((good, idx) => {
        const IconComponent = iconMap[good.icon] || Package;
        return (
          <div
            key={idx}
            className={`group relative p-4 sm:p-5 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
              dark
                ? 'bg-brand-navy-900/80 border border-slate-800 hover:border-amber-500/50 shadow-md'
                : 'bg-white border border-slate-200 hover:border-amber-500/50 shadow-sm hover:shadow-md'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
                <IconComponent className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {good.category}
              </span>
            </div>

            <h4 className={`text-sm sm:text-base font-bold ${dark ? 'text-white' : 'text-brand-navy-950'} group-hover:text-amber-500 transition-colors`}>
              {good.name}
            </h4>

            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-medium">Safe Transit</span>
              <Link
                to="/industries"
                className="text-xs font-semibold text-amber-600 hover:text-amber-500 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
