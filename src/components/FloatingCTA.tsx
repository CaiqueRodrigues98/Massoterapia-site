"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 inset-x-0 md:hidden z-40 p-4 bg-gradient-to-t from-spa-background via-spa-background/98 to-transparent backdrop-blur pointer-events-none"
    >
      <Link
        href="#agendamento"
        className="block w-full text-center gradient-accent text-white font-semibold py-4 rounded-xl transition shadow-lg hover:shadow-2xl pointer-events-auto hover:scale-105 duration-300"
      >
        Agendar via WhatsApp 💬
      </Link>
    </motion.div>
  );
}
