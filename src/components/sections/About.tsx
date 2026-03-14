import React from 'react';
import Image from 'next/image';
import { ABOUT_CONTENT } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Camera, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative section-padding bg-warm-black bg-noise overflow-hidden">
      
      {/* Decorative architectural line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block" style={{ right: '15%' }} />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 lg:pr-10">
            <ScrollReveal>
              <SectionLabel light>About Scott</SectionLabel>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] mb-10 whitespace-pre-line">
                {ABOUT_CONTENT.heading}
              </h2>
            </ScrollReveal>
            
            <div className="space-y-6 mb-12">
              {ABOUT_CONTENT.paragraphs.map((text, i) => (
                <ScrollReveal key={i} delay={0.2 + (i * 0.1)}>
                  <p className={`text-lg leading-relaxed ${i === 0 ? 'text-sand/90 font-medium' : 'text-ash font-light'}`}>
                    {text}
                  </p>
                </ScrollReveal>
              ))}
            </div>
            
            <div className="space-y-4">
              {ABOUT_CONTENT.credentials.map((cred, i) => (
                <ScrollReveal key={i} delay={0.4 + (i * 0.05)} className="flex items-start gap-4">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-1" />
                  <span className="text-cream/80 text-base">{cred}</span>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          {/* Image Wrapper */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={0.3} className="relative w-full aspect-[4/5] lg:aspect-[3/4] group">
              {/* Offset decorative border */}
              <div className="absolute -inset-2 md:-inset-4 lg:-inset-6 border border-sand/20 z-0 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 lg:translate-x-6 lg:translate-y-6 transition-transform duration-700 ease-out group-hover:translate-x-2 group-hover:translate-y-2" />
              
              <div className="absolute inset-0 z-10 overflow-hidden border border-sand/10">
                <Image 
                  src="/images/scott-romanoski-self-photo-1.jpeg"
                  alt="Scott Romanoski"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
