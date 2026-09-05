import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed group cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 shadow-md",
    xl: "text-lg px-8 py-4 gap-3 shadow-lg"
  };

  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold shadow-amber-500/20 hover:shadow-accent-glow focus:ring-amber-500 active:scale-[0.98]",
    secondary: "bg-brand-navy-900 hover:bg-brand-navy-800 text-white border border-slate-700 hover:border-slate-500 focus:ring-slate-400 active:scale-[0.98]",
    outline: "bg-transparent text-slate-800 hover:text-brand-navy-950 border-2 border-slate-300 hover:border-brand-orange-500 focus:ring-brand-orange-500 active:scale-[0.98]",
    outlineWhite: "bg-transparent text-white hover:text-amber-400 border border-white/30 hover:border-amber-400 focus:ring-amber-400 active:scale-[0.98] backdrop-blur-sm",
    ghost: "bg-transparent text-slate-700 hover:text-brand-navy-900 hover:bg-slate-100 focus:ring-slate-400",
    accentLight: "bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 hover:border-amber-300 focus:ring-amber-400"
  };

  const classes = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...props}>
      {content}
    </button>
  );
}
