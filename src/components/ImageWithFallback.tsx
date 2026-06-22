"use client";

import { motion } from "framer-motion";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackBg?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackBg = "bg-spa-secondary/20",
}: ImageWithFallbackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}
    >
      <div
        className={`${fallbackBg} rounded-2xl overflow-hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-spa-secondary/10 to-spa-highlight/10`}
      >
        <svg
          className="w-32 h-32 text-spa-secondary/40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </motion.div>
  );
}
