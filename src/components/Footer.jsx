import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, MapPin, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  const servicesLinks = [
    { name: 'Road Transportation', path: '/services#road-transportation' },
    { name: 'Full Load Transportation', path: '/services#full-load-transportation' },
    { name: 'Dedicated Fleet Solutions', path: '/services#dedicated-fleet-solutions' },
    { name: 'Specialized Fleet Requirements', path: '/services#specialized-fleet-requirements' },
    { name: 'Pan-India Transportation', path: '/services#pan-india-transportation' },
  ];

  return (
    <footer className="bg-brand-navy-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand & About Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 shadow-md">
                <Truck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-wider text-white">
                  PRIME<span className="text-amber-500">-LOGISTICS</span>
                </span>
                <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">
                  Complete Logistics Solution
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Prime Logistics delivers dependable, efficient, and scalable road transportation solutions for businesses across India. Headquartered in Chennai, Tamil Nadu.
            </p>

            {/* Sister Concern Note */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 font-bold text-amber-400 mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Sister Concern</span>
              </div>
              <span>Tejas Logistics Service Network</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-amber-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transform group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-amber-500 pl-2.5">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transform group-hover:translate-x-0.5 transition-transform" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-amber-500 pl-2.5">
              Corporate Office
            </h4>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-300 space-y-0.5 leading-snug">
                  <span className="text-white font-bold block mb-1">Physical Address:</span>
                  <div>No.55/1, Poonamallee Bypass Road</div>
                  <div>Poonamallee, Chennai</div>
                  <div>Tiruvallur District, Tamil Nadu - 600056</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold text-xs block">Phone:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-slate-300 hover:text-amber-400 transition-colors font-mono text-sm font-medium"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold text-xs block">Email:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-slate-300 hover:text-amber-400 transition-colors font-mono text-xs sm:text-sm break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Prime Logistics. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Chennai • Tamil Nadu • South India • Pan-India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
