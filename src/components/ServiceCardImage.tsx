"use client";

import { motion } from "framer-motion";

interface ServiceCardImageProps {
  service: "relaxante" | "modeladora";
  title: string;
}

export function ServiceCardImage({ service, title }: ServiceCardImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-spa-secondary/10 to-spa-highlight/10 border border-spa-secondary/20 h-48 flex items-center justify-center"
    >
      {service === "relaxante" ? (
        <svg
          className="w-32 h-32 text-spa-secondary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M6 20c0-2.21 3.58-4 6-4s6 1.79 6 4" />
          <path d="M4 12h16M8 12v6M16 12v6" />
        </svg>
      ) : (
        <svg
          className="w-32 h-32 text-spa-accent"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L15 10H23L17 15L19 23L12 18L5 23L7 15L1 10H9L12 2Z" />
          <circle cx="12" cy="12" r="8" fill="currentColor" fillOpacity="0.1" />
        </svg>
      )}
    </motion.div>
  );
}
