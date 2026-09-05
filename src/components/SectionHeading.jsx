import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3.5 transition-all bg-amber-500/10 text-amber-500 border border-amber-500/20 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          {badge}
        </div>
      )}
      
      {title && (
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${dark ? 'text-white' : 'text-brand-navy-950'}`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'} text-balance`}>
          {subtitle}
        </p>
      )}

      {/* Decorative accent divider */}
      <div className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
