export interface Service {
  id: string;
  title: string;
  description: string;
  duration: number; // em minutos
  price: number;
  imageType?: "relaxante" | "modeladora";
}

export interface BusinessInfo {
  name: string;
  legalName: string;
  phone: string;
  whatsapp: string;
  email: string;
  streetAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  specialistName: string;
  specialistExperienceYears: number;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
}
