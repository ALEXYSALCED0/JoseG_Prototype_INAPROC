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
  const [seismicLoad, setSeismicLoad] = useState(1.4);
  const [bimLayer, setBimLayer] = useState<"estructura" | "mep" | "clash">(
    "estructura"
  );

  const computedStressMpa = Math.round(145 * seismicLoad);
  const safetyFactor = (2.6 / seismicLoad).toFixed(2);

  return (
    <>
      {/* SECTION 4: PRECISION STRUCTURAL APPROACH */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image with Interactive CAD Blueprint Toggle */}
            <div className="lg:col-span-6 relative">
              <BlueprintImageReveal className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0B2240]/12 aspect-[4/3] bg-[#0B2240]">
                <Image
                  src="/images/structure-frame.jpg"
                  alt="Estructura reticular de concreto y acero en construcción"
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
                      className="absolute inset-0 bg-[#0A254D]/65 bg-blueprint-grid mix-blend-hard-light pointer-events-none"
                    >
                      <motion.div
                        initial={{ top: "0%" }}
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_16px_#38BDF8]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Interactive Mode Toggle Pill */}
                <button
                  type="button"
                  onClick={() => setBlueprintOverlay((prev) => !prev)}
                  className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-[#0B2240]/85 hover:bg-[#0B2240] text-white px-3.5 py-2 text-xs font-mono uppercase tracking-wider border border-white/20 backdrop-blur-md shadow-lg transition-all cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5 text-[#38BDF8]" />
                  <span>
                    {blueprintOverlay ? "Modo Fotografía" : "Modo Escáner CAD"}
                  </span>
                </button>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-[#061326]/80 backdrop-blur-md px-4 py-2.5 border border-white/10 text-xs text-slate-200 font-mono">
                  <span>EJE ESTRUCTURAL A-14 // ACERO A992</span>
                  <span className="text-[#F59E0B]">TOL: ±1.2 mm</span>
                </div>
              </BlueprintImageReveal>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#E68A00]">
                <span className="h-[2px] w-6 bg-[#E68A00]" />
                Nuestro Enfoque
              </div>

              <RevealMask>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.12] text-[#0B2240]">
                  Diseño estructural de precisión desde el inicio.
                </h2>
              </RevealMask>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Cada milímetro calculado en gabinete se traduce en certidumbre
                financiera y velocidad de montaje en obra. Activa el modo
                escáner CAD sobre la imagen para visualizar nuestra trazabilidad
                técnica.
              </p>

              <ul className="space-y-3 pt-1">
                {[
                  "Ingeniería conceptual y de valor desde la factibilidad.",
                  "Modelos analíticos calibrados contra sismo, viento y vibración.",
                  "Planos ejecutivos con despiece claro para taller y obra.",
                  "Coordinación continua con arquitectura y especialidades MEP.",
                  "Acompañamiento técnico y visitas de verificación en sitio.",
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
                    className="flex items-start gap-3 text-slate-700 font-medium text-sm sm:text-base"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#E68A00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-2">
                <MagneticButton
                  href="#contacto"
                  className="inline-flex items-center gap-2.5 rounded-lg bg-[#E68A00] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E68A00]/25 hover:bg-[#d17d00] transition-colors"
                >
                  Solicitar asesoría técnica
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TECHNOLOGY BAND (BIM / FEM / SIG) */}
      <section
        id="tecnologia"
        className="relative py-20 lg:py-28 bg-[#0B2240] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-blueprint-grid opacity-70 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">
                <span className="h-[2px] w-6 bg-[#38BDF8]" />
                Ecosistema Digital
              </div>
              <RevealMask>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                  Tecnología al servicio de la ingeniería
                </h2>
              </RevealMask>
              <p className="text-slate-300 text-base sm:text-lg">
                Selecciona una plataforma tecnológica para interactuar con sus
                parámetros y simulaciones en tiempo real.
              </p>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-sky-300/80">
              BIM // FEM // SIG
            </span>
          </div>

          {/* 3 Flagship Tech Cards matching Figma */}
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
                      ? "border-[#38BDF8] bg-[#102E56] shadow-[0_0_35px_rgba(56,189,248,0.2)] -translate-y-1"
                      : "border-white/12 bg-[#081A33] hover:border-white/30"
                  }`}
                >
                  <div className="relative h-48 w-full overflow-hidden bg-[#051020]">
                    <Image
                      src={tech.image}
                      alt={tech.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081A33] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 rounded-md bg-[#061326]/85 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-sky-300 border border-sky-400/25">
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
                            ? "bg-[#E68A00] shadow-[0_0_10px_#E68A00]"
                            : "bg-white/20"
                        }`}
                      />
                    </div>
                    <p className="text-xs font-mono text-sky-300">
                      {tech.subtitle}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed pt-1">
                      {tech.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Interactive Tech Lab Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: EASE_ARCHITECTURAL }}
              className="mt-8 rounded-2xl border border-white/15 bg-[#07162C]/90 backdrop-blur-xl p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Interactive Simulation Viewport */}
                <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-sky-400/20 bg-[#040E1D] aspect-[16/10]">
                  <Image
                    src={activeTech.image}
                    alt={activeTech.subtitle}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      activeTech.id === "fem" && seismicLoad > 1.8
                        ? "saturate-150 contrast-125"
                        : ""
                    }`}
                  />

                  {/* Dynamic Interactive Overlay depending on selected tech */}
                  {activeTech.id === "bim" && (
                    <div className="absolute inset-0 p-4 flex flex-col justify-between bg-gradient-to-t from-[#040E1D]/90 via-transparent to-[#040E1D]/40">
                      <div className="flex flex-wrap gap-2">
                        {(
                          [
                            { id: "estructura", label: "Estructura Acero" },
                            { id: "mep", label: "Coordinación MEP" },
                            { id: "clash", label: "0 Colisiones" },
                          ] as const
                        ).map((tab) => (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setBimLayer(tab.id)}
                            className={`rounded-full px-3 py-1 font-mono text-[11px] border transition-all cursor-pointer ${
                              bimLayer === tab.id
                                ? "bg-[#38BDF8] text-[#040E1D] border-[#38BDF8] font-bold"
                                : "bg-[#061326]/80 text-slate-200 border-white/20 hover:bg-white/10"
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono text-sky-200">
                        <span className="flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5 text-[#E68A00]" />
                          CAPA ACTIVA: {bimLayer.toUpperCase()}
                        </span>
                        <span>MODELO FEDERADO IFC 4.3</span>
                      </div>
                    </div>
                  )}

                  {activeTech.id === "fem" && (
                    <div className="absolute inset-0 p-4 flex flex-col justify-between bg-gradient-to-t from-[#040E1D]/95 via-transparent to-[#040E1D]/40">
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="rounded bg-[#061326]/85 px-2.5 py-1 border border-amber-400/30 text-amber-300">
                          ESFUERZO PICO: {computedStressMpa} MPa
                        </span>
                        <span className="rounded bg-[#061326]/85 px-2.5 py-1 border border-emerald-400/30 text-emerald-300">
                          F. SEGURIDAD: {safetyFactor}x
                        </span>
                      </div>
                      <div className="rounded-lg bg-[#061326]/85 border border-white/15 p-3 backdrop-blur-md">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 mb-1.5">
                          <span className="flex items-center gap-1.5">
                            <SlidersHorizontal className="h-3.5 w-3.5 text-[#38BDF8]" />
                            Simular aceleración sísmica
                          </span>
                          <span className="text-[#F59E0B] font-bold">
                            {seismicLoad.toFixed(1)}g
                          </span>
                        </div>
                        <input
                          type="range"
                          min="1.0"
                          max="2.5"
                          step="0.1"
                          value={seismicLoad}
                          onChange={(e) =>
                            setSeismicLoad(parseFloat(e.target.value))
                          }
                          className="w-full accent-[#E68A00] cursor-pointer"
                        />
                      </div>
                    </div>
                  )}

                  {activeTech.id === "sig" && (
                    <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                      <motion.div
                        animate={{ top: ["10%", "88%", "10%"] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_18px_#22d3ee]"
                      />
                      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#061326]/85 px-3 py-1 font-mono text-[11px] text-cyan-300 border border-cyan-400/30">
                        <Radar className="h-3.5 w-3.5 animate-spin" />
                        ESCANEO LIDAR EN VIVO
                      </div>
                      <div className="flex items-center justify-between font-mono text-[11px] text-slate-300 bg-[#061326]/80 rounded-lg px-3 py-2 border border-white/10">
                        <span>WGS84 // UTM Z14N</span>
                        <span className="text-cyan-300">
                          DENSIDAD: 180 PTS/m²
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Telemetry Metrics & Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-wider">
                      <Cpu className="h-4 w-4" />
                      Laboratorio Interactivo // {activeTech.title}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1.5">
                      {activeTech.subtitle}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                      {activeTech.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {activeTech.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl bg-white/5 border border-white/10 p-3.5"
                      >
                        <p className="font-display text-lg sm:text-xl font-extrabold text-[#38BDF8]">
                          {m.value}
                        </p>
                        <p className="text-[11px] text-slate-300 mt-0.5">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2.5">
                    {activeTech.highlights.map((hl) => (
                      <li
                        key={hl}
                        className="flex items-center gap-2.5 text-sm text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#E68A00] shrink-0" />
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

