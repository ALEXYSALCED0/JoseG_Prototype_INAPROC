"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, Compass, Layers, Sparkles } from "lucide-react";
import { companyConfig } from "@/data/site-data";
import {
  AnimatedCounter,
  EASE_ARCHITECTURAL,
  MagneticButton,
} from "./MotionPrimitives";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Subtle interactive pointer spotlight & 3D tilt
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const smoothTiltX = useSpring(tiltX, { stiffness: 140, damping: 24 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 140, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    setCursorPos({ x: px, y: py });
    tiltX.set(((py - 50) / 50) * -3);
    tiltY.set(((px - 50) / 50) * 4);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] pt-24 pb-12 lg:pt-28 lg:pb-16 bg-[#0B2240] text-white overflow-hidden flex flex-col justify-between"
    >
      {/* Blueprint coordinate grid & interactive spotlight */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-80 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(640px circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(56, 189, 248, 0.14), transparent 65%)`,
        }}
      />

      {/* Right-side architectural tower background blend on desktop */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-y-0 right-0 w-full lg:w-[56%] pointer-events-none"
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-tower.jpg"
            alt="Rascacielos estructural en acero y concreto"
            fill
            priority
            className="object-cover object-center opacity-35 lg:opacity-85"
          />
          {/* Smooth gradient merge from Deep Navy left to architectural clarity right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2240] via-[#0B2240]/80 lg:via-[#0B2240]/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2240] via-transparent to-[#0B2240]/70" />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 lg:pt-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_ARCHITECTURAL }}
              className="inline-flex items-center gap-2.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E68A00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E68A00]" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200">
                Ingeniería & Diseño Estructural
              </span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.06] tracking-tight text-white">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.75, delay: 0.1, ease: EASE_ARCHITECTURAL }}
                  className="block"
                >
                  Construimos soluciones
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.75, delay: 0.2, ease: EASE_ARCHITECTURAL }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-[#F59E0B]"
                >
                  desde el diseño hasta la ingeniería.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE_ARCHITECTURAL }}
              className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              Combinamos cálculo estructural de alta precisión, modelado{" "}
              <span className="text-white font-semibold">BIM LOD 400</span> y
              simulación{" "}
              <span className="text-white font-semibold">FEM sísmica</span> para
              materializar edificaciones e infraestructura segura, esbelta y
              rentable.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: EASE_ARCHITECTURAL }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton
                href="#proyectos"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-[#E68A00] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#E68A00]/30 hover:bg-[#f09200] transition-all"
              >
                Explorar galería de proyectos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>

              <MagneticButton
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/15 transition-all"
              >
                Nuestros servicios
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Interactive Structural Telemetry HUD Card */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <motion.div
              style={{
                rotateX: smoothTiltX,
                rotateY: smoothTiltY,
                transformPerspective: 1000,
              }}
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: EASE_ARCHITECTURAL }}
              className="w-full max-w-sm rounded-2xl border border-white/15 bg-[#081931]/80 p-5 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-[#38BDF8]" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-sky-300">
                    Telemetry // Structural Core
                  </span>
                </div>
                <span className="rounded bg-emerald-400/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-300 border border-emerald-400/25">
                  NORMA OK
                </span>
              </div>

              {/* Animated SVG Structural Wireframe Truss */}
              <div className="relative my-4 rounded-xl bg-[#051020] border border-sky-400/15 p-3 overflow-hidden">
                <svg viewBox="0 0 300 130" className="w-full h-28">
                  <defs>
                    <linearGradient id="trussGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="50%" stopColor="#22D3EE" />
                      <stop offset="100%" stopColor="#E68A00" />
                    </linearGradient>
                  </defs>
                  {/* Animated diagrid truss lines */}
                  <motion.path
                    d="M20 105 L60 25 L100 105 L140 25 L180 105 L220 25 L260 105"
                    fill="none"
                    stroke="url(#trussGrad)"
                    strokeWidth="2.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M20 105 H280 M55 25 H245"
                    fill="none"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, delay: 0.2 }}
                  />
                  {[60, 140, 220].map((cx, i) => (
                    <motion.circle
                      key={cx}
                      cx={cx}
                      cy={25}
                      r="3.5"
                      fill="#E68A00"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.3, 1] }}
                      transition={{ delay: 0.9 + i * 0.15 }}
                    />
                  ))}
                </svg>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>DERIVA SÍSMICA: 0.0038</span>
                  <span className="text-sky-300">BIM LOD 400</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Layers className="h-3.5 w-3.5 text-[#E68A00]" />
                    <span>Optimización Acero</span>
                  </div>
                  <p className="mt-1 font-display text-lg font-bold text-white">
                    -14.5%
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Sparkles className="h-3.5 w-3.5 text-[#38BDF8]" />
                    <span>Cero Colisiones</span>
                  </div>
                  <p className="mt-1 font-display text-lg font-bold text-white">
                    100% BIM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Telemetry Stats Strip */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE_ARCHITECTURAL }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-white/12 bg-[#07162B]/75 backdrop-blur-xl p-5 sm:p-6"
        >
          {companyConfig.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col ${
                idx !== 0 ? "md:border-l md:border-white/10 md:pl-6" : ""
              }`}
            >
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </span>
              <span className="mt-1 text-xs sm:text-sm text-slate-300">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

