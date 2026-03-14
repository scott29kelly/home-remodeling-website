export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  image?: string;
  imageAlt: string;
  isTall?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  stars: number;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string[];
}
