
export interface NavLinkItem {
  name: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  icon?: React.ReactNode; // For homepage overview
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string; // e.g., "Beheer", "Advertenties", "Creatie", "Strategie"
  imageUrl: string;
  description?: string; // Short description for gallery card
  link?: string; // Link to case study or live project
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  summary: string;
  imageUrl: string;
  challenge: string;
  approach: string;
  results: { keyMetric: string; value: string; chartData?: { labels: string[]; data: number[] } }[];
  testimonial?: { text: string; author: string };
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceSuffix: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string; // Format: "DD Maand YYYY"
  category: string;
  imageUrl: string;
  summary: string;
  content?: string; // Full content for article page
  author?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  imageUrl?: string; // Optional: photo of the author
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  downloadLink?: string; // Direct link or signifies form requirement
}

// SVG Icon Prop Type
export interface IconProps {
  className?: string;
}
