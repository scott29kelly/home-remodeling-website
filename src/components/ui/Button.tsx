import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-body font-semibold tracking-[0.08em] uppercase transition-all duration-300 ease-out cursor-pointer';
    
    const variants = {
      primary: 'bg-accent text-warm-black hover:bg-accent-light hover:-translate-y-0.5 shadow-sm hover:shadow-md',
      secondary: 'bg-transparent text-cream border border-sand/30 hover:border-accent hover:text-accent',
      dark: 'bg-charcoal text-cream hover:bg-slate',
      outline: 'bg-transparent text-charcoal border border-charcoal/20 hover:border-accent hover:text-accent',
    };
    
    const sizes = {
      sm: 'px-4 py-2.5 text-xs',
      md: 'px-8 py-4 text-sm',
      lg: 'px-10 py-5 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
