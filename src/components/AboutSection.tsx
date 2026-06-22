"use client";

import { motion } from "framer-motion";
import { BusinessInfo } from "../types";
import {
  AnimatedSection,
  slideInFromLeft,
  slideInFromRight,
} from "./AnimationWrapper";
import { ImageWithFallback } from "./ImageWithFallback";

interface AboutSectionProps {
  business: BusinessInfo;
}

export function AboutSection({ business }: AboutSectionProps) {
  return (
    <section className="gradient-soft py-20 px-6 border-y-4 border-spa-highlight">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInFromLeft}
          className="h-96"
        >
          <ImageWithFallback
            src="/images/specialist.jpg"
            alt={business.specialistName}
            width={500}
            height={384}
            className="h-96 w-full"
            fallbackBg="bg-spa-secondary/20"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInFromRight}
        >
          <AnimatedSection variant="fadeInUp">
            <span className="text-spa-accent font-semibold text-sm tracking-wide uppercase block mb-2">
              A Profissional
            </span>
          </AnimatedSection>
          <AnimatedSection variant="fadeInUp" delay={0.1}>
            <h2 className="text-3xl font-serif text-spa-primary mt-2 mb-6">
              Cuidado focado em voce
            </h2>
          </AnimatedSection>
          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <p className="text-spa-text/80 mb-4 leading-relaxed">
              Ola, sou {business.specialistName}, especialista em terapias
              corporais integrativas com mais de{" "}
              {business.specialistExperienceYears} anos de experiencia ajudando
              pessoas a reencontrarem equilibrio fisico e mental.
            </p>
          </AnimatedSection>
          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <p className="text-spa-text/80 leading-relaxed">
              Cada sessao e planejada individualmente de acordo com as suas
              necessidades, unindo tecnicas tradicionais ao uso de oleos
              essenciais para uma experiencia completa de alivio e renovacao.
            </p>
          </AnimatedSection>
        </motion.div>
      </div>
    </section>
  );
}
