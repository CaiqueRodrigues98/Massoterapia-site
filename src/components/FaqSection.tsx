"use client";

import { motion } from "framer-motion";
import { FAQItem } from "../types";
import {
  AnimatedSection,
  StaggeredContainer,
  fadeInUp,
} from "./AnimationWrapper";

interface FaqSectionProps {
  items: FAQItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section className="px-6 pb-20 max-w-4xl mx-auto">
      <AnimatedSection className="text-center mb-10">
        <h2 className="text-3xl font-serif text-spa-primary mb-2">
          Perguntas Frequentes
        </h2>
      </AnimatedSection>

      <StaggeredContainer className="space-y-4">
        {items.map((item) => (
          <motion.details
            key={item.id}
            initial="hidden"
            variants={fadeInUp}
            className="group bg-white rounded-xl border-2 border-spa-light p-5 cursor-pointer hover:border-spa-highlight hover:shadow-lg transition duration-300"
          >
            <summary className="cursor-pointer list-none text-spa-primary font-semibold group-hover:text-spa-highlight transition">
              {item.question}
            </summary>
            <p className="mt-3 text-spa-text/80 leading-relaxed">
              {item.answer}
            </p>
          </motion.details>
        ))}
      </StaggeredContainer>
    </section>
  );
}
