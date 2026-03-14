'use client';

import React, { useState } from 'react';
import { CONTACT_INFO } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setFormData(initialFormData);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <section id="contact" className="section-padding bg-cream relative">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <ScrollReveal>
            <SectionLabel className="justify-center">Get In Touch</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact Info */}
          <div className="order-2 lg:order-1">
            <ScrollReveal direction="right">
              <h3 className="font-display text-3xl text-charcoal mb-6">
                Let's Talk About Your Home
              </h3>
              <p className="text-steel text-lg leading-relaxed mb-12">
                Whether you're planning a major renovation or just exploring ideas, we're happy to talk it through. Reach out for a free, no-obligation consultation.
              </p>

              <div className="space-y-8">

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-charcoal text-accent flex items-center justify-center shrink-0 rounded-sm group-hover:bg-accent group-hover:text-warm-black transition-colors duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest uppercase text-steel mb-1">Phone</span>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-charcoal font-medium text-lg hover:text-accent transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-charcoal text-accent flex items-center justify-center shrink-0 rounded-sm group-hover:bg-accent group-hover:text-warm-black transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest uppercase text-steel mb-1">Email</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-charcoal font-medium text-lg hover:text-accent transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-charcoal text-accent flex items-center justify-center shrink-0 rounded-sm group-hover:bg-accent group-hover:text-warm-black transition-colors duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest uppercase text-steel mb-1">Location</span>
                    <p className="text-charcoal font-medium text-lg">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-charcoal text-accent flex items-center justify-center shrink-0 rounded-sm group-hover:bg-accent group-hover:text-warm-black transition-colors duration-300">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest uppercase text-steel mb-1">Hours</span>
                    {CONTACT_INFO.hours.map((hour, i) => (
                      <p key={i} className="text-charcoal font-medium text-lg">
                        {hour}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="order-1 lg:order-2">
            <ScrollReveal direction="left" delay={0.2}>
              {status === 'success' ? (
                <div className="bg-white p-8 md:p-12 border border-sand/30 shadow-2xl shadow-charcoal/5 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-accent" />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal mb-3">Thank You!</h3>
                  <p className="text-steel text-base leading-relaxed mb-8">
                    Your message has been sent. Scott will get back to you within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-accent font-semibold text-sm tracking-widest uppercase hover:text-accent-dark transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-sand/30 shadow-2xl shadow-charcoal/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName" className="text-xs font-semibold tracking-widest uppercase text-steel">First Name</label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="px-4 py-3 bg-cream/50 border border-sand/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-charcoal" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName" className="text-xs font-semibold tracking-widest uppercase text-steel">Last Name</label>
                      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="px-4 py-3 bg-cream/50 border border-sand/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-charcoal" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold tracking-widest uppercase text-steel">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="px-4 py-3 bg-cream/50 border border-sand/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-charcoal" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-semibold tracking-widest uppercase text-steel">Phone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="px-4 py-3 bg-cream/50 border border-sand/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-charcoal" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mb-6">
                    <label htmlFor="projectType" className="text-xs font-semibold tracking-widest uppercase text-steel">Project Type</label>
                    <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className="px-4 py-3 bg-cream/50 border border-sand/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-charcoal appearance-none">
                      <option value="">Select a service...</option>
                      <option>Home Remodeling</option>
                      <option>Addition</option>
                      <option>Deck</option>
                      <option>Patio / Hardscaping</option>
                      <option>Bilco Door Installation</option>
                      <option>Windows & Doors</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 mb-8">
                    <label htmlFor="message" className="text-xs font-semibold tracking-widest uppercase text-steel">Tell Us About Your Project</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Describe your project, timeline, and any questions you have..." className="px-4 py-3 bg-cream/50 border border-sand/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-charcoal resize-y min-h-[120px]"></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <Button type="submit" className="w-full md:w-auto" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Request'}
                  </Button>
                </form>
              )}
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
