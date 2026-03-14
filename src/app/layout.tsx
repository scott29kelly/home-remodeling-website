import type { Metadata } from 'next';
import { Montserrat, Manrope } from 'next/font/google';
import { StructuredData } from '@/components/StructuredData';
import './globals.css';

// Load our Canva-compatible modern font pairing
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://scottromconstruction.com'),
  title: 'Scott Romanoski Construction | Langhorne, PA',
  description: 'Building Better Spaces for Bucks County Families. Remodeling, additions, decks, and patios — crafted with 18+ years of hands-on experience.',
  keywords: [
    'home remodeling Langhorne PA',
    'construction contractor Bucks County',
    'kitchen remodel Newtown PA',
    'bathroom renovation Yardley PA',
    'home additions Bucks County PA',
    'deck builder Langhorne',
    'Bilco door installation PA',
    'licensed contractor Pennsylvania',
    'Scott Romanoski Construction',
  ],
  openGraph: {
    title: 'Scott Romanoski Construction | Langhorne, PA',
    description: 'Remodeling, additions, decks, and patios — crafted with 18+ years of hands-on experience. Licensed in PA & NJ. A+ BBB Rating.',
    url: 'https://scottromconstruction.com',
    siteName: 'Scott Romanoski Construction',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scott Romanoski Construction | Langhorne, PA',
    description: 'Remodeling, additions, decks, and patios — crafted with 18+ years of hands-on experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-body bg-cream text-charcoal antialiased selection:bg-accent selection:text-white">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
