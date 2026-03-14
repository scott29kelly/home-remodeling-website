import React from 'react';
import Image from 'next/image';
import { PORTFOLIO } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Camera } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-cream">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <ScrollReveal>
              <SectionLabel>Our Work</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
                Projects That Speak for Themselves
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} className="md:max-w-xs">
            <p className="text-steel text-base leading-relaxed">
              Browse recent remodeling, addition, and outdoor living projects across Bucks County and beyond. SOTA craftsmanship in every detail.
            </p>
          </ScrollReveal>
        </div>

        {/* Premium CSS Grid - varying sizes for an editorial feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] sm:auto-rows-[300px]">
          {PORTFOLIO.map((item, index) => (
            <ScrollReveal 
              key={item.id} 
              delay={0.1 * (index % 3)}
              className={cn(
                "group relative overflow-hidden bg-slate/5 border border-sand/20 cursor-pointer block",
                item.isTall ? "md:row-span-2" : "row-span-1"
              )}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-steel/50 transition-transform duration-700 group-hover:scale-105">
                  <Camera size={48} strokeWidth={1} className="mb-4 opacity-50" />
                  <span className="text-xs font-semibold tracking-widest uppercase opacity-70">Awaiting Photo</span>
                </div>
              )}
              
              {/* Premium Overlay — always visible on mobile (no hover), animated on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-black/80 via-warm-black/10 to-transparent md:from-warm-black/90 md:via-warm-black/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-6 md:p-10">
                <span className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-2 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 delay-100">
                  {item.location}
                </span>
                <h4 className="font-display text-xl md:text-2xl text-cream md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 delay-150">
                  {item.title}
                </h4>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
