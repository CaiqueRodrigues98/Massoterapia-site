"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Service } from "../types";
import { AnimatedSection } from "./AnimationWrapper";

interface BookingFormProps {
  services: Service[];
  whatsappNumber: string;
}

export function BookingForm({ services, whatsappNumber }: BookingFormProps) {
  const [selectedService, setSelectedService] = useState(services[0]?.id ?? "");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const minDate = useMemo(() => {
    return new Date().toISOString().split("T")[0];
  }, []);

  const handleWhatsAppRedirect = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceObj = services.find(
      (service) => service.id === selectedService,
    );
    if (!serviceObj) {
      return;
    }

    const safePhone = whatsappNumber.replace(/\D/g, "");
    if (!safePhone) {
      return;
    }

    const message = [
      "Ola! Gostaria de agendar um horario.",
      "",
      `Nome: ${name}`,
      `Servico: ${serviceObj.title}`,
      `Data: ${date}`,
      `Horario: ${time}`,
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${safePhone}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="agendamento"
      className="px-6 py-20 max-w-md mx-auto scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-white p-8 rounded-3xl shadow-xl border-2 border-spa-secondary"
      >
        <AnimatedSection className="text-center mb-6">
          <h2 className="text-2xl font-serif text-spa-primary text-center mb-2">
            Reserve seu Horario
          </h2>
          <p className="text-sm text-center text-spa-text/60">
            Escolha o servico e o dia de sua preferencia
          </p>
        </AnimatedSection>

        <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
          <div>
            <label
              htmlFor="booking-service"
              className="block text-xs font-semibold text-spa-primary uppercase tracking-wider mb-2"
            >
              Procedimento
            </label>
            <select
              id="booking-service"
              value={selectedService}
              onChange={(event) => setSelectedService(event.target.value)}
              className="w-full bg-spa-background border border-spa-secondary/30 rounded-xl px-4 py-3 text-sm focus:outline-spa-primary"
            >
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="booking-name"
              className="block text-xs font-semibold text-spa-primary uppercase tracking-wider mb-2"
            >
              Seu Nome
            </label>
            <input
              id="booking-name"
              type="text"
              required
              placeholder="Ex: Maria Silva"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full bg-spa-background border border-spa-secondary/30 rounded-xl px-4 py-3 text-sm focus:outline-spa-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="booking-date"
                className="block text-xs font-semibold text-spa-primary uppercase tracking-wider mb-2"
              >
                Data
              </label>
              <input
                id="booking-date"
                type="date"
                min={minDate}
                required
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="w-full bg-spa-background border border-spa-secondary/30 rounded-xl px-4 py-3 text-sm focus:outline-spa-primary"
              />
            </div>
            <div>
              <label
                htmlFor="booking-time"
                className="block text-xs font-semibold text-spa-primary uppercase tracking-wider mb-2"
              >
                Horario
              </label>
              <input
                id="booking-time"
                type="time"
                required
                value={time}
                onChange={(event) => setTime(event.target.value)}
                className="w-full bg-spa-background border border-spa-secondary/30 rounded-xl px-4 py-3 text-sm focus:outline-spa-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full gradient-accent text-white font-semibold py-4 rounded-xl transition shadow-lg hover:shadow-2xl hover:scale-105 duration-300"
          >
            Confirmar via WhatsApp 🚀
          </button>
        </form>
      </motion.div>
    </section>
  );
}
