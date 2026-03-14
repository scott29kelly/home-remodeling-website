import React from 'react';
import { TESTIMONIALS } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <ScrollReveal>
            <SectionLabel className="justify-center">What Clients Say</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
              Trusted by Homeowners Across Bucks County
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal 
              key={testimonial.id} 
              delay={0.1 * index}
              className="h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
