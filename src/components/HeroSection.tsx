"use client";

import { BusinessInfo } from "../types";
import { AnimatedSection } from "./AnimationWrapper";

interface HeroSectionProps {
  business: BusinessInfo;
}

export function HeroSection({ business }: HeroSectionProps) {
  return (
    <section className="px-6 py-20 text-center max-w-4xl mx-auto md:py-32 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-spa-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-spa-highlight rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <AnimatedSection variant="fadeInUp" delay={0}>
          <span className="text-spa-secondary uppercase tracking-widest text-sm font-semibold block">
            Equilibrio e Bem-Estar
          </span>
        </AnimatedSection>
        <AnimatedSection variant="fadeInUp" delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-serif text-spa-primary mt-4 mb-6 leading-tight">
            Massoterapia personalizada para aliviar dores e reduzir estresse
          </h1>
        </AnimatedSection>
        <AnimatedSection variant="fadeInUp" delay={0.2}>
          <p className="text-lg text-spa-text/80 mb-8 max-w-xl mx-auto">
            Atendimento com foco terapeutico para quem precisa cuidar do corpo e
            da mente com tecnicas adaptadas a cada necessidade.
          </p>
        </AnimatedSection>
        <AnimatedSection variant="fadeInUp" delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#agendamento"
              className="gradient-accent text-white font-semibold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl hover:scale-105 text-center"
            >
              Agendar Sessão
            </a>
            <a
              href="#servicos"
              className="border-2 border-spa-secondary text-spa-secondary hover:bg-spa-secondary hover:text-white font-semibold px-8 py-4 rounded-full transition text-center hover:scale-105"
            >
              Conhecer Técnicas
            </a>
          </div>
          <p className="mt-6 text-sm text-spa-text/70">
            Atendimento em {business.city}/{business.state} com foco em
            qualidade, acolhimento e resultado.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
