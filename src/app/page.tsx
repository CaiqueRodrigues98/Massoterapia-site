import { AboutSection } from "../components/AboutSection";
import { BookingForm } from "../components/BookingForm";
import { FaqSection } from "../components/FaqSection";
import { FloatingCTA } from "../components/FloatingCTA";
import { FooterSection } from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import {
  businessInfo,
  faqItems,
  mockServices,
  testimonials,
} from "../data/mockData";

export default function Home() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? businessInfo.whatsapp;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.streetAddress,
      addressLocality: businessInfo.city,
      addressRegion: businessInfo.state,
      postalCode: businessInfo.postalCode,
      addressCountry: businessInfo.country,
    },
    areaServed: `${businessInfo.city} - ${businessInfo.state}`,
    priceRange: "$$",
    image: "/og-massoterapia.jpg",
    sameAs: [`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <main className="min-h-screen bg-spa-background text-spa-text pb-24 md:pb-0">
        <HeroSection business={businessInfo} />
        <ServicesSection services={mockServices} />
        <AboutSection business={businessInfo} />
        <TestimonialsSection testimonials={testimonials} />
        <BookingForm services={mockServices} whatsappNumber={whatsappNumber} />
        <FaqSection items={faqItems} />
        <FooterSection business={businessInfo} />
        <FloatingCTA />
      </main>
    </>
  );
}
