"use client";

import { motion } from "framer-motion";
import { Testimonial } from "../types";
import {
  AnimatedSection,
  StaggeredContainer,
  fadeInUp,
} from "./AnimationWrapper";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-3xl font-serif text-spa-primary mb-2">
          Depoimentos
        </h2>
        <p className="text-spa-text/70">
          Feedback real de quem ja passou pelas sessoes
        </p>
      </AnimatedSection>

      <StaggeredContainer className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <motion.blockquote
            key={item.id}
            initial="hidden"
            variants={fadeInUp}
            className="bg-white p-6 rounded-2xl border-l-4 border-spa-highlight shadow-md hover:shadow-xl transition hover:scale-105 duration-300"
          >
            <p className="text-spa-text/80 leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer className="mt-5 border-t-2 border-spa-light pt-4">
              <p className="font-semibold text-spa-primary">{item.name}</p>
              <p className="text-xs text-spa-secondary font-medium">
                {item.treatment}
              </p>
            </footer>
          </motion.blockquote>
        ))}
      </StaggeredContainer>
    </section>
  );
}
