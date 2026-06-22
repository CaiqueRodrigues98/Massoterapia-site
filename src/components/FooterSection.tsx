import { BusinessInfo } from "../types";

interface FooterSectionProps {
  business: BusinessInfo;
}

export function FooterSection({ business }: FooterSectionProps) {
  return (
    <footer className="gradient-hero text-white py-12 px-6 text-center text-sm border-t-4 border-spa-highlight">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="font-serif text-lg text-white font-semibold">
          {business.name}
        </p>
        <p className="text-white/90">
          {business.streetAddress} - {business.neighborhood}, {business.city} -{" "}
          {business.state}
        </p>
        <p className="text-white/90 font-medium">{business.phone}</p>
        <p className="text-xs text-white/70">
          © 2026 {business.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
