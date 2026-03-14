import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_INFO, SERVICE_AREAS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-warm-black border-t border-sand/10 pt-24 pb-8 bg-noise">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 mb-20">
          
          {/* Brand Column (Spans 4) */}
          <div className="md:col-span-4">
            <Link href="#" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-16 h-16 relative overflow-hidden rounded-sm">
                <Image 
                  src="/images/logo.webp"
                  alt="Scott Romanoski Construction Logo" 
                  fill
                  className="object-contain grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-cream text-base leading-tight tracking-wide">
                  Scott Romanoski
                </span>
                <span className="font-display text-accent-light text-xs leading-tight tracking-widest uppercase">
                  Construction
                </span>
              </div>
            </Link>
            <p className="text-ash text-sm leading-relaxed mb-6 max-w-sm">
              {SITE_INFO.description}
            </p>
            <div className="text-sand/70 text-xs tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Licensed in {SITE_INFO.licensedIn}
            </div>
          </div>
          
          {/* Quick Links Column (Spans 2) */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-cream font-display text-lg mb-6 relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-accent" />
            </h4>
            <ul className="flex flex-col gap-4">
              {['Services', 'About', 'Portfolio', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-ash hover:text-accent text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Service Areas Column (Spans 4) */}
          <div className="md:col-span-4">
            <h4 className="text-cream font-display text-lg mb-6 relative inline-block">
              Service Areas
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-accent" />
            </h4>
            <p className="text-ash/80 text-sm leading-relaxed text-balance">
              <strong className="text-sand font-medium block mb-2">Proudly serving:</strong> 
              {SERVICE_AREAS.join(' · ')}
            </p>
          </div>
          
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel text-xs text-center md:text-left">
            &copy; {currentYear} {SITE_INFO.name}. All rights reserved. PA License #PA012701
          </p>
          <p className="text-steel text-xs flex items-center gap-1">
            Website by 
            <a 
              href="#" 
              className="text-ash hover:text-accent font-medium transition-colors"
            >
              Kelly Digital LLC
            </a>
          </p>
        </div>
        
      </div>
    </footer>
  );
}
