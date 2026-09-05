import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Boxes, ShieldCheck, Cpu, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Truck: Truck,
  Boxes: Boxes,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Globe: Globe,
};

export default function ServiceCard({
  service,
  showFullDetails = false
}) {
  const IconComponent = iconMap[service.icon] || Truck;

  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200/90 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Visual Image Header */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-brand-navy-950">
        <img
          src={service.image}
          alt={`${service.title} - Prime Logistics`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/40 to-transparent" />
        
        {/* Floating badge */}
        {service.highlight && (
          <div className="absolute top-4 right-4 bg-brand-navy-900/90 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
            {service.highlight}
          </div>
        )}

        {/* Icon container overlapping */}
        <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-brand-navy-950 group-hover:text-amber-600 transition-colors duration-200 mb-3">
            {service.title}
          </h3>
          
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            {showFullDetails ? service.description : service.shortDescription}
          </p>

          {/* Key Benefits (if present or full view) */}
          {service.keyBenefits && (
            <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Highlights
              </span>
              {service.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Link / CTA */}
        <div className="pt-4 mt-auto border-t border-slate-100">
          <Link
            to={`/services#${service.id}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy-900 group-hover:text-amber-600 transition-colors duration-200"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
