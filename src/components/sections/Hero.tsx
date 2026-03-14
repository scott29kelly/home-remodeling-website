'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { SITE_INFO } from '@/lib/constants';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[100vh] flex items-center bg-warm-black overflow-hidden bg-noise"
    >
      {/* Background Image */}
      <Image
        src="/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-cabinetry.jpg"
        alt="Kitchen remodel by Scott Romanoski Construction"
        fill
        priority
        className="object-cover opacity-25"
        sizes="100vw"
      />

      {/* Gradient Overlays for Depth & Text Readability */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-slate/50 blur-[150px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-black/60 via-warm-black/30 to-warm-black" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-8"
          >
            <span className="w-12 h-px bg-accent" />
            Licensed in {SITE_INFO.licensedIn}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cream leading-[1.05] tracking-tight mb-8 text-balance"
          >
            Building Better Spaces <br/>
            <span className="text-sand/90 italic font-light tracking-normal">for Bucks County</span> Families.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="text-ash text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12"
          >
            Remodeling, additions, decks, and patios — crafted with 18+ years of hands-on experience. Your home deserves a contractor who treats it like his own.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Button asChild size="lg">
              <a href="#contact">Request a Free Estimate</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#portfolio">View Our Work</a>
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Floating Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
        className="absolute bottom-0 left-0 w-full z-20 border-t border-sand/10 bg-warm-black/60 backdrop-blur-xl"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-sand/10">
            {[
              { value: SITE_INFO.yearsExperience, label: 'Years Experience' },
              { value: SITE_INFO.licensedIn, label: 'Licensed' },
              { value: SITE_INFO.bbbRating, label: 'BBB Rating' },
              { value: 'Bilco', label: 'Certified Installer' },
            ].map((stat, i) => (
              <div key={i} className="py-8 px-4 text-center group cursor-default">
                <span className="block font-display text-2xl sm:text-3xl md:text-4xl text-accent mb-1 transition-transform duration-500 group-hover:-translate-y-1">
                  {stat.value}
                </span>
                <span className="block text-xs font-semibold tracking-[0.15em] uppercase text-ash group-hover:text-cream transition-colors duration-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
