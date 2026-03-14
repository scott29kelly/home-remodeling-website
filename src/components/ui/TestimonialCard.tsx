import React from 'react';
import { Testimonial } from '@/types';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div className={cn(
      "relative p-8 md:p-10 bg-cream border border-sand/30 flex flex-col h-full",
      className
    )}>
      {/* Quote Mark Decoration */}
      <span className="absolute top-6 left-6 font-display text-6xl md:text-[5rem] text-accent opacity-15 leading-none select-none pointer-events-none">
        &ldquo;
      </span>
      
      <div className="flex gap-1 mb-6 relative z-10">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>
      
      <blockquote className="relative z-10 text-concrete italic leading-relaxed flex-grow mb-8">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="mt-auto pt-6 border-t border-sand/30">
        <div className="font-semibold text-charcoal text-sm uppercase tracking-wider">
          {testimonial.author}
        </div>
        <div className="text-steel text-xs mt-1">
          {testimonial.location}
        </div>
      </div>
    </div>
  );
}
