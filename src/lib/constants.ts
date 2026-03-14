import { Service, PortfolioItem, Testimonial, ProcessStep, ContactInfo } from '@/types';

export const SITE_INFO = {
  name: 'Scott Romanoski Construction',
  tagline: 'Building Better Spaces for Bucks County Families',
  description: 'Remodeling, additions, decks, and patios — crafted with 18+ years of hands-on experience. Your home deserves a contractor who treats it like his own.',
  yearsExperience: '18+',
  licensedIn: 'PA & NJ',
  bbbRating: 'A+',
  certifications: 'Bilco Certified Installer',
};

export const SERVICES: Service[] = [
  {
    id: 'remodeling',
    title: 'Home Remodeling',
    description: 'Complete interior renovations — kitchens, bathrooms, basements, and whole-home transformations. We modernize your living space while respecting the character of your home.',
    icon: 'Hammer' // We will map these to lucide-react icons in the component
  },
  {
    id: 'additions',
    title: 'Additions',
    description: 'Need more room? We design and build home additions that blend seamlessly with your existing structure — from extra bedrooms to expanded living areas.',
    icon: 'Home'
  },
  {
    id: 'decks-patios',
    title: 'Decks & Patios',
    description: 'Custom-built outdoor living spaces tailored to your property and lifestyle. Composite, wood, and stone options with lasting craftsmanship.',
    icon: 'TreePine'
  },
  {
    id: 'bilco',
    title: 'Bilco Door Installation',
    description: 'As a Certified Bilco Installer, we provide expert basement door replacement and installation — ensuring proper fit, waterproofing, and code compliance.',
    icon: 'DoorOpen'
  },
  {
    id: 'windows-doors',
    title: 'Windows & Doors',
    description: 'Energy-efficient window and door replacements that improve comfort, security, and curb appeal. Professional installation backed by manufacturer warranties.',
    icon: 'AppWindow'
  },
  {
    id: 'contracting',
    title: 'General Contracting',
    description: 'Full-service project management from permits to final walkthrough. One point of contact, transparent communication, and work done right the first time.',
    icon: 'HardHat'
  }
];

export const ABOUT_CONTENT = {
  heading: 'Built on Integrity.\nProven by Results.',
  paragraphs: [
    'For over 18 years, Scott Romanoski has been helping Bucks County families transform their homes. What started as a passion for building has grown into a trusted construction business known for honest communication, quality craftsmanship, and projects delivered right.',
    'As an owner-operator, Scott is on every job site — not in a back office. When you hire Scott Romanoski Construction, you\'re getting the person whose name is on the business, personally invested in the outcome of your project.'
  ],
  credentials: [
    'Licensed Contractor — Pennsylvania (PA012701)',
    'Licensed Contractor — New Jersey',
    'Certified Bilco Installer',
    'A+ BBB Rating — Zero Complaints',
    'Fully Insured'
  ]
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'kitchen-remodel',
    title: 'Kitchen Remodel',
    location: 'Langhorne, PA',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-wide.jpg',
    imageAlt: 'Complete kitchen remodel with custom island and cabinetry in Langhorne, PA',
    isTall: true
  },
  {
    id: 'bathroom-renovation',
    title: 'Bathroom Renovation',
    location: 'Langhorne, PA',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/bathroom-full-room.jpg',
    imageAlt: 'Full bathroom renovation with custom vanity and tile work in Langhorne, PA'
  },
  {
    id: 'custom-staircase',
    title: 'Custom Staircase & Entry',
    location: 'Langhorne, PA',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/staircase-newel-entry.jpg',
    imageAlt: 'Custom oak staircase with turned newel post and marble entry floor'
  },
  {
    id: 'fireplace-trim',
    title: 'Fireplace & Trim Work',
    location: 'Langhorne, PA',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/fireplace-mantel.jpg',
    imageAlt: 'Custom fireplace mantel with crown molding and brick surround'
  },
  {
    id: 'tray-ceiling',
    title: 'Tray Ceiling & Crown Molding',
    location: 'Langhorne, PA',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/bedroom-tray-ceiling.jpg',
    imageAlt: 'Master bedroom with custom tray ceiling and crown molding detail'
  },
  {
    id: 'powder-room',
    title: 'Powder Room',
    location: 'Langhorne, PA',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/powder-room-vanity.jpg',
    imageAlt: 'Powder room renovation with dark wood vanity and granite countertop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Scott is without a doubt the best all around contractor I've come across from framing to finish work, masonry the list goes on. Many contractors claim to treat your house like their own but Scott truly does treat every house like it's his own.",
    author: 'Josh Sharpe',
    location: 'Facebook Recommendation',
    stars: 5
  },
  {
    id: 't2',
    quote: "Love Scott's work!",
    author: 'Tom Aquilone',
    location: 'Facebook Recommendation',
    stars: 5
  },
  {
    id: 't3',
    quote: "I know who to call when I do my master bath!",
    author: 'Kelley Graff McConnell',
    location: 'Facebook Recommendation',
    stars: 5
  },
  {
    id: 't4',
    quote: "Beautiful work. Wow!",
    author: 'Maria Anderson',
    location: 'Facebook Recommendation',
    stars: 5
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Free Consultation',
    description: 'We visit your home, discuss your vision, assess the space, and answer your questions. No pressure, no obligation.'
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Detailed Estimate',
    description: 'You receive a transparent, itemized estimate. We walk through every line item so you know exactly where your money goes.'
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Build Phase',
    description: 'Work begins on the agreed timeline. Scott is on-site managing every detail, and you get regular progress updates throughout.'
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Final Walkthrough',
    description: 'We walk the completed project together. Every detail is reviewed, and the job isn\'t done until you\'re completely satisfied.'
  }
];

export const CONTACT_INFO: ContactInfo = {
  phone: '(215) 519-1795',
  email: 'sroman2@verizon.net',
  address: '710 Parker St, Langhorne, PA 19047',
  hours: ['Mon–Fri 7:00 AM – 5:00 PM', 'Sat by Appointment']
};

export const SERVICE_AREAS = [
  'Langhorne', 'Newtown', 'Yardley', 'Morrisville', 'Levittown', 'Doylestown', 'Warminster', 'Bensalem', 'Bristol', 'Fairless Hills', 'and surrounding Bucks County & South Jersey communities'
];
