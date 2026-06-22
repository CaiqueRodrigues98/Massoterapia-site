"use client";

import { motion } from "framer-motion";
import { Service } from "../types";
import {
  AnimatedSection,
  StaggeredContainer,
  fadeInUp,
} from "./AnimationWrapper";
import { ServiceCardImage } from "./ServiceCardImage";

interface ServicesSectionProps {
  services: Service[];
}

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section
      id="servicos"
      className="px-6 py-16 max-w-6xl mx-auto scroll-mt-24"
    >
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-3xl font-serif text-spa-primary mb-2">
          Nossos Servicos
        </h2>
        <p className="text-spa-text/70">
          Escolha a tecnica ideal para o seu momento atual
        </p>
      </AnimatedSection>

      <StaggeredContainer className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <motion.article
            key={service.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl border-2 border-spa-light transition flex flex-col justify-between hover:scale-105 hover:border-spa-highlight duration-300 group"
          >
            {service.imageType && (
              <ServiceCardImage
                service={service.imageType}
                title={service.title}
              />
            )}
            <div>
              <h3 className="text-xl font-semibold text-spa-primary mb-2">
                {service.title}
              </h3>
              <p className="text-spa-text/80 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t-2 border-spa-light">
              <span className="text-xs text-white font-semibold bg-spa-secondary px-3 py-1 rounded-full group-hover:bg-spa-highlight transition">
                {service.duration} min
              </span>
              <span className="text-xl font-bold gradient-accent bg-clip-text text-transparent">
                {priceFormatter.format(service.price)}
              </span>
            </div>
          </motion.article>
        ))}
      </StaggeredContainer>
    </section>
  );
}
