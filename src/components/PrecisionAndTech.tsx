"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Eye,
  Layers,
  Radar,
  SlidersHorizontal,
} from "lucide-react";
import { techData, TechItem } from "@/data/site-data";
import {
  BlueprintImageReveal,
  EASE_ARCHITECTURAL,
  MagneticButton,
  RevealMask,
} from "./MotionPrimitives";

export function PrecisionAndTech() {
  const [blueprintOverlay, setBlueprintOverlay] = useState(false);
  const [activeTech, setActiveTech] = useState<TechItem>(techData[0]);
  const [structuralMaterial, setStructuralMaterial] = useState<
    "Concreto Armado" | "Acero Estructural" | "Mampostería" | "Madera"
  >("Concreto Armado");
  const [bimLayer, setBimLayer] = useState<
    "Arquitectura 3D" | "Estructura NSR-10" | "HVAC & Hidrosanitaria"
  >("Arquitectura 3D");
  const [geoTechnique, setGeoTechnique] = useState<
    "Columnas de Grava" | "Inclusiones Rígidas" | "Muros MSE y Gaviones"
  >("Columnas de Grava");

  return (
    <>
      {/* SECTION 4: PRECISION STRUCTURAL APPROACH */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image with Interactive CAD Blueprint Toggle */}
            <div className="lg:col-span-6 relative">
              <BlueprintImageReveal className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0F2A44]/12 aspect-[4/3] bg-[#0F2A44]">
                <Image
                  src="/images/structure-frame.jpg"
                  alt="Construcción de estructura civil en concreto armado y acero"
                  fill
                  className={`object-cover transition-all duration-700 ${
                    blueprintOverlay
                      ? "grayscale contrast-150 brightness-90 scale-[1.03]"
                      : "scale-100"
                  }`}
                />

                {/* Blueprint CAD Overlay Effect */}
                <AnimatePresence>
                  {blueprintOverlay && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 bg-[#0F2A44]/70 bg-blueprint-grid mix-blend-hard-light pointer-events-none"
                    >
                      <motion.div
                        initial={{ top: "0%" }}
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C46A2B] to-transparent shadow-[0_0_16px_#C46A2B]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Interactive Mode Toggle Pill */}
                <button
                  type="button"
                  onClick={() => setBlueprintOverlay((prev) => !prev)}
                  className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-[#0F2A44]/90 hover:bg-[#0F2A44] text-[#F2EDE4] px-3.5 py-2 text-xs font-mono uppercase tracking-wider border border-white/20 backdrop-blur-md shadow-lg transition-all cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5 text-[#C46A2B]" />
                  <span>
                    {blueprintOverlay ? "Modo Fotografía" : "Modo Escáner CAD"}
                  </span>
                </button>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-[#091B2E]/85 backdrop-blur-md px-4 py-2.5 border border-white/10 text-xs text-[#F2EDE4] font-mono">
                  <span>NORMATIVA NSR-10 · CONCRETO Y ACERO</span>
                  <span className="text-[#C46A2B] font-semibold">BIM + APU</span>
                </div>
              </BlueprintImageReveal>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C46A2B]">
                <span className="h-[2px] w-6 bg-[#C46A2B]" />
                Metodología de Proyecto
              </div>

              <RevealMask>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.55rem] font-extrabold leading-[1.12] text-[#0F2A44]">
                  Precisión técnica en diseño y ejecución de principio a fin.
                </h2>
              </RevealMask>

              <p className="text-[#3E5C76] text-base sm:text-lg leading-relaxed">
                Acompañamos cada proyecto con comunicación directa presencial o
                virtual, desde la visita técnica en campo hasta la entrega
                garantizada de la obra.
              </p>

              <ul className="space-y-3 pt-1">
                {[
                  "Visitas de campo en el Atlántico, estudios de suelo y diagnóstico técnico.",
                  "Presupuestos precisos mediante Análisis de Precios Unitarios (APU).",
                  "Cálculo estructural bajo normativa NSR-10 en concreto, acero, mampostería y madera.",
                  "Ejecución apoyada en BIM para actualizar modificaciones en tiempo real.",
                  "Garantía escrita de obra de 6 meses a 1 año en estructura e instalaciones.",
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.08,
                      ease: EASE_ARCHITECTURAL,
                    }}
                    className="flex items-start gap-3 text-[#1E2024] font-medium text-sm sm:text-base"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#C46A2B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-2">
                <MagneticButton
                  href="#contacto"
                  className="inline-flex items-center gap-2.5 rounded-lg bg-[#C46A2B] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C46A2B]/25 hover:bg-[#AD5A21] transition-colors"
                >
                  Solicitar asesoría con INAPROC
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TECHNOLOGY BAND (BIM / FEM / GEOTECNIA) */}
      <section
        id="tecnologia"
        className="relative py-20 lg:py-28 bg-[#0F2A44] text-[#F2EDE4] overflow-hidden"
      >
        <div className="absolute inset-0 bg-blueprint-grid opacity-70 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C46A2B]">
                <span className="h-[2px] w-6 bg-[#C46A2B]" />
                Innovación Digital & RCM©
              </div>
              <RevealMask>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                  Tecnología aplicada a la ingeniería civil
                </h2>
              </RevealMask>
              <p className="text-[#F2EDE4]/80 text-base sm:text-lg">
                Selecciona una especialidad tecnológica para explorar nuestras
                herramientas de diseño, modelación y geotecnia.
              </p>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#F2EDE4]/70">
              BIM · FEM / CFD · RCM Engineering©
            </span>
          </div>

          {/* 3 Flagship Tech Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techData.map((tech, idx) => {
              const isSelected = activeTech.id === tech.id;
              return (
                <motion.button
                  key={tech.id}
                  type="button"
                  onClick={() => setActiveTech(tech)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.1,
                    ease: EASE_ARCHITECTURAL,
                  }}
                  className={`group text-left rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-[#C46A2B] bg-[#16385A] shadow-[0_0_35px_rgba(196,106,43,0.22)] -translate-y-1"
                      : "border-white/12 bg-[#091B2E] hover:border-white/30"
                  }`}
                >
                  <div className="relative h-48 w-full overflow-hidden bg-[#061321]">
                    <Image
                      src={tech.image}
                      alt={tech.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091B2E] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 rounded-md bg-[#091B2E]/90 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#F2EDE4] border border-[#C46A2B]/40">
                      {tech.code}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl font-extrabold text-white">
                        {tech.title}
                      </h3>
                      <span
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          isSelected
                            ? "bg-[#C46A2B] shadow-[0_0_10px_#C46A2B]"
                            : "bg-white/20"
                        }`}
                      />
                    </div>
                    <p className="text-xs font-mono text-[#C46A2B]">
                      {tech.subtitle}
                    </p>
                    <p className="text-sm text-[#F2EDE4]/80 leading-relaxed pt-1">
                      {tech.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Interactive Tech Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: EASE_ARCHITECTURAL }}
              className="mt-8 rounded-2xl border border-[#F2EDE4]/15 bg-[#091B2E]/90 backdrop-blur-xl p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Interactive Viewport */}
                <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-white/15 bg-[#061321] aspect-[16/10]">
                  <Image
                    src={activeTech.image}
                    alt={activeTech.subtitle}
                    fill
                    className="object-cover"
                  />

                  {activeTech.id === "bim" && (
                    <div className="absolute inset-0 p-4 flex flex-col justify-between bg-gradient-to-t from-[#061321]/90 via-transparent to-[#061321]/45">
                      <div className="flex flex-wrap gap-2">
                        {(
                          [
                            "Arquitectura 3D",
                            "Estructura NSR-10",
                            "HVAC & Hidrosanitaria",
                          ] as const
                        ).map((tab) => (
                          <button
                            key={tab}
                            type="button"
                            onClick={() => setBimLayer(tab)}
                            className={`rounded-full px-3 py-1 font-mono text-[11px] border transition-all cursor-pointer ${
                              bimLayer === tab
                                ? "bg-[#C46A2B] text-white border-[#C46A2B] font-bold"
                                : "bg-[#091B2E]/85 text-[#F2EDE4] border-white/20 hover:bg-white/10"
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono text-[#F2EDE4]">
                        <span className="flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5 text-[#C46A2B]" />
                          ESPECIALIDAD: {bimLayer.toUpperCase()}
                        </span>
                        <span>RENDERS 3D & BIM</span>
                      </div>
                    </div>
                  )}

                  {activeTech.id === "fem" && (
                    <div className="absolute inset-0 p-4 flex flex-col justify-between bg-gradient-to-t from-[#061321]/92 via-transparent to-[#061321]/45">
                      <div className="flex flex-wrap gap-2">
                        {(
                          [
                            "Concreto Armado",
                            "Acero Estructural",
                            "Mampostería",
                            "Madera",
                          ] as const
                        ).map((mat) => (
                          <button
                            key={mat}
                            type="button"
                            onClick={() => setStructuralMaterial(mat)}
                            className={`rounded-full px-3 py-1 font-mono text-[11px] border transition-all cursor-pointer ${
                              structuralMaterial === mat
                                ? "bg-[#C46A2B] text-white border-[#C46A2B] font-bold"
                                : "bg-[#091B2E]/85 text-[#F2EDE4] border-white/20 hover:bg-white/10"
                            }`}
                          >
                            {mat}
                          </button>
                        ))}
                      </div>
                      <div className="rounded-lg bg-[#091B2E]/90 border border-white/15 p-3 backdrop-blur-md flex items-center justify-between text-[11px] font-mono text-[#F2EDE4]">
                        <span className="flex items-center gap-1.5">
                          <SlidersHorizontal className="h-3.5 w-3.5 text-[#C46A2B]" />
                          SISTEMA: {structuralMaterial.toUpperCase()}
                        </span>
                        <span className="text-[#C46A2B] font-bold">
                          NSR-10 · FEM / CFD
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTech.id === "sig" && (
                    <div className="absolute inset-0 p-4 flex flex-col justify-between bg-gradient-to-t from-[#061321]/90 via-transparent to-[#061321]/40">
                      <motion.div
                        animate={{ top: ["10%", "88%", "10%"] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C46A2B] to-transparent shadow-[0_0_18px_#C46A2B] pointer-events-none"
                      />
                      <div className="flex flex-wrap gap-2 relative z-10">
                        {(
                          [
                            "Columnas de Grava",
                            "Inclusiones Rígidas",
                            "Muros MSE y Gaviones",
                          ] as const
                        ).map((geo) => (
                          <button
                            key={geo}
                            type="button"
                            onClick={() => setGeoTechnique(geo)}
                            className={`rounded-full px-3 py-1 font-mono text-[11px] border transition-all cursor-pointer ${
                              geoTechnique === geo
                                ? "bg-[#C46A2B] text-white border-[#C46A2B] font-bold"
                                : "bg-[#091B2E]/85 text-[#F2EDE4] border-white/20 hover:bg-white/10"
                            }`}
                          >
                            {geo}
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center justify-between font-mono text-[11px] text-[#F2EDE4] bg-[#091B2E]/85 rounded-lg px-3 py-2 border border-white/10 relative z-10">
                        <span className="flex items-center gap-1.5">
                          <Radar className="h-3.5 w-3.5 text-[#C46A2B]" />
                          {geoTechnique.toUpperCase()}
                        </span>
                        <span>CO · MX · PA</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#C46A2B] uppercase tracking-wider">
                      <Cpu className="h-4 w-4" />
                      Capacidades INAPROC // {activeTech.title}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1.5">
                      {activeTech.subtitle}
                    </h3>
                    <p className="text-[#F2EDE4]/80 text-sm sm:text-base mt-2 leading-relaxed">
                      {activeTech.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {activeTech.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl bg-white/5 border border-white/10 p-3.5"
                      >
                        <p className="font-display text-base sm:text-lg font-extrabold text-[#F2EDE4]">
                          {m.value}
                        </p>
                        <p className="text-[11px] text-[#F2EDE4]/70 mt-0.5">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2.5">
                    {activeTech.highlights.map((hl) => (
                      <li
                        key={hl}
                        className="flex items-center gap-2.5 text-sm text-[#F2EDE4]/90"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#C46A2B] shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
