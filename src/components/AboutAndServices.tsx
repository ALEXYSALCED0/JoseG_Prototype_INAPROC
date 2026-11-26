"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  HardHat,
  Layers,
  ShieldCheck,
  X,
} from "lucide-react";
import { ServiceItem, servicesData } from "@/data/site-data";
import {
  BlueprintImageReveal,
  EASE_ARCHITECTURAL,
  MagneticButton,
  RevealMask,
} from "./MotionPrimitives";

const serviceIcons = {
  building: Building2,
  layers: Layers,
  activity: Activity,
  compass: Compass,
  hardHat: HardHat,
  shield: ShieldCheck,
};

export function AboutAndServices() {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    servicesData[0].id
  );
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  return (
    <>
      {/* SECTION 2: SOBRE NOSOTROS */}
      <section
        id="nosotros"
        className="relative py-20 lg:py-28 bg-white overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image with architectural curtain reveal */}
            <div className="lg:col-span-6 relative">
              <BlueprintImageReveal className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0B2240]/10 aspect-[4/3]">
                <Image
                  src="/images/about-engineers.jpg"
                  alt="Ingenieros estructurales revisando planos en obra"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2240]/30 via-transparent to-transparent" />
              </BlueprintImageReveal>

              {/* Floating glass experience card */}
              <motion.div
                initial={{ opacity: 0, y: 24, x: 12 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35, ease: EASE_ARCHITECTURAL }}
                className="absolute -bottom-5 right-4 sm:right-6 rounded-xl bg-[#0B2240] text-white px-5 py-4 shadow-xl border border-white/15"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300">
                  Sede Barranquilla · Desde 2015
                </p>
                <p className="font-display text-xl font-extrabold mt-0.5">
                  +5 Países
                </p>
                <p className="text-xs text-slate-300">
                  Costa Caribe, Colombia y Latinoamérica
                </p>
              </motion.div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#E68A00]">
                <span className="h-[2px] w-6 bg-[#E68A00]" />
                Sobre INAPROC S.A.S.
              </div>

              <RevealMask>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.12] text-[#0B2240]">
                  Transformamos ideas en realidades tangibles, estéticas y seguras.
                </h2>
              </RevealMask>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-slate-600 text-base sm:text-lg leading-relaxed"
              >
                Con sede en Barranquilla, capital del Caribe colombiano, INAPROC
                S.A.S. diseña y construye edificaciones modernas, complejos
                arquitectónicos, puentes, soluciones geotécnicas y proyectos de
                valor histórico con presencia en Colombia, México y Panamá.
              </motion.p>

              <ul className="space-y-3.5 pt-1">
                {[
                  "Estructuras en concreto armado, acero, mampostería y madera bajo NSR-10.",
                  "Arquitectura, renders tridimensionales, tecnología BIM e instalaciones HVAC.",
                  "Patología estructural, ensayos no destructivos y modelación numérica FEM/CFD.",
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + idx * 0.1,
                      ease: EASE_ARCHITECTURAL,
                    }}
                    className="flex items-start gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#E68A00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-3">
                <MagneticButton
                  href="#contacto"
                  className="inline-flex items-center gap-2.5 rounded-lg bg-[#E68A00] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E68A00]/25 hover:bg-[#d17d00] transition-colors"
                >
                  Agenda una consultoría
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SOLUCIONES INTEGRALES DE INGENIERÍA */}
      <section
        id="servicios"
        className="relative py-20 lg:py-28 bg-[#F4F7FB] bg-blueprint-grid-light border-y border-slate-200/70"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#E68A00]">
                <span className="h-[2px] w-6 bg-[#E68A00]" />
                Especialidades
              </div>
              <RevealMask>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B2240]">
                  Soluciones integrales de ingeniería
                </h2>
              </RevealMask>
              <p className="text-slate-600 text-base sm:text-lg">
                Pasa el cursor o haz clic sobre cualquier especialidad para
                explorar su alcance técnico y entregables.
              </p>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
              06 Áreas de especialidad
            </span>
          </div>

          {/* 3x2 Interactive Bento Cards with shared layoutId highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, idx) => {
              const Icon = serviceIcons[service.iconName];
              const isActive = activeServiceId === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.06,
                    ease: EASE_ARCHITECTURAL,
                  }}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setModalService(service)}
                  className="relative group cursor-pointer rounded-2xl p-7 border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-xl overflow-hidden"
                >
                  {/* Animated Navy Active Background */}
                  {isActive && (
                    <motion.div
                      layoutId="service-active-card"
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 30,
                      }}
                      className="absolute inset-0 bg-[#0B2240] z-0"
                    />
                  )}

                  <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                            isActive
                              ? "bg-[#E68A00] text-white"
                              : "bg-[#0B2240]/5 text-[#0B2240]"
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <span
                          className={`font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full transition-colors ${
                            isActive
                              ? "bg-white/10 text-sky-200"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {service.tag}
                        </span>
                      </div>

                      <h3
                        className={`font-display text-xl font-bold mb-2.5 transition-colors ${
                          isActive ? "text-white" : "text-[#0B2240]"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`text-sm leading-relaxed transition-colors ${
                          isActive ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {service.shortDescription}
                      </p>
                    </div>

                    <div
                      className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                        isActive ? "text-[#F59E0B]" : "text-[#0B2240]"
                      }`}
                    >
                      <span>Ver alcance técnico</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-white border border-slate-200 px-6 py-4 shadow-sm">
            <p className="text-sm text-slate-600">
              ¿Necesitas una combinación personalizada de diseño estructural +
              coordinación BIM?
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2240] hover:text-[#E68A00] transition-colors whitespace-nowrap"
            >
              Solicitar propuesta a la medida
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Service Specification Modal */}
      <AnimatePresence>
        {modalService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalService(null)}
            className="fixed inset-0 z-[80] bg-[#061326]/75 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: EASE_ARCHITECTURAL }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden"
            >
              <div className="bg-[#0B2240] text-white p-6 flex items-start justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F59E0B]">
                    {modalService.tag}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold mt-1">
                    {modalService.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setModalService(null)}
                  className="rounded-lg p-1.5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <p className="text-slate-600 leading-relaxed">
                  {modalService.fullDescription}
                </p>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#0B2240] font-bold mb-3">
                    Entregables principales
                  </h4>
                  <ul className="space-y-2">
                    {modalService.deliverables.map((del) => (
                      <li
                        key={del}
                        className="flex items-start gap-2.5 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#E68A00] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-[#F4F7FB] border border-slate-200 px-4 py-3 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500">
                    Normativa aplicable
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#0B2240]">
                    {modalService.normative}
                  </span>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalService(null)}
                    className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Cerrar
                  </button>
                  <a
                    href="#contacto"
                    onClick={() => setModalService(null)}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#E68A00] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#d17d00]"
                  >
                    Cotizar este servicio
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

