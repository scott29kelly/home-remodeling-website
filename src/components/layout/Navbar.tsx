'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-warm-black/95 backdrop-blur-md border-b border-sand/10 py-3 shadow-lg' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <Link href="#" className="relative z-50 flex items-center gap-3 group">
          <div className="w-14 h-14 md:w-16 md:h-16 relative overflow-hidden rounded-sm transition-transform duration-500 group-hover:scale-105">
            <Image 
              src="/images/logo.webp"
              alt="Scott Romanoski Construction Logo" 
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-cream text-sm md:text-base leading-tight tracking-wide">
              Scott Romanoski
            </span>
            <span className="font-display text-accent text-xs md:text-sm leading-tight tracking-widest uppercase">
              Construction
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-xs font-body font-medium tracking-[0.1em] text-cream/70 uppercase hover:text-accent transition-colors duration-300 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="#contact"
            className="bg-accent text-warm-black px-6 py-3 text-xs font-semibold tracking-[0.1em] uppercase hover:bg-accent-light transition-colors duration-300 shadow-sm"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 text-cream p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-warm-black/98 backdrop-blur-xl h-screen flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.5 }}
                >
                  <a 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-3xl text-cream hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8"
              >
                <a 
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-accent text-warm-black px-8 py-4 text-sm font-semibold tracking-[0.1em] uppercase block"
                >
                  Get a Quote
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
