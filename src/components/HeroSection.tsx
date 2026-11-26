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
import { InaprocSymbol } from "./Navbar";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

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
      className="relative min-h-[92vh] pt-24 pb-12 lg:pt-28 lg:pb-16 bg-[#0F2A44] text-[#F2EDE4] overflow-hidden flex flex-col justify-between"
    >
      {/* Blueprint coordinate grid & interactive spotlight */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-80 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(640px circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(196, 106, 43, 0.14), transparent 65%)`,
        }}
      />

      {/* Right-side architectural tower background blend */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-y-0 right-0 w-full lg:w-[56%] pointer-events-none"
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-tower.jpg"
            alt="Edificación estructural en acero y concreto INAPROC"
            fill
            priority
            className="object-cover object-center opacity-35 lg:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A44] via-[#0F2A44]/82 lg:via-[#0F2A44]/48 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A44] via-transparent to-[#0F2A44]/75" />
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
              className="inline-flex items-center gap-2.5 rounded-full border border-[#F2EDE4]/20 bg-[#091B2E]/60 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C46A2B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C46A2B]" />
              </span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#F2EDE4]">
                INAPROC S.A.S. · Barranquilla, Colombia
              </span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.45rem] font-extrabold leading-[1.06] tracking-tight text-white">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.75,
                    delay: 0.1,
                    ease: EASE_ARCHITECTURAL,
                  }}
                  className="block"
                >
                  Construimos soluciones
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.75,
                    delay: 0.2,
                    ease: EASE_ARCHITECTURAL,
                  }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F2EDE4] via-white to-[#C46A2B]"
                >
                  desde el diseño hasta la entrega final.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: EASE_ARCHITECTURAL,
              }}
              className="max-w-xl text-base sm:text-lg text-[#F2EDE4]/85 leading-relaxed"
            >
              Edificios y viviendas que acogen a nuestra gente. Vías y puentes
              que conectan sueños y territorios. Unimos{" "}
              <span className="text-white font-semibold">
                Diseño Arquitectónico BIM
              </span>
              , cálculo{" "}
              <span className="text-white font-semibold">NSR-10</span>,{" "}
              <span className="text-white font-semibold">Geotecnia</span> y
              modelación{" "}
              <span className="text-white font-semibold">FEM y CFD</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: EASE_ARCHITECTURAL,
              }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton
                href="#proyectos"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-[#C46A2B] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#C46A2B]/30 hover:bg-[#AD5A21] transition-all"
              >
                Explorar portafolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>

              <MagneticButton
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-lg border border-[#F2EDE4]/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#F2EDE4] backdrop-blur-md hover:bg-white/15 transition-all"
              >
                Servicios especializados
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Interactive Official Brand & Engineering Card */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <motion.div
              style={{
                rotateX: smoothTiltX,
                rotateY: smoothTiltY,
                transformPerspective: 1000,
              }}
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.3,
                ease: EASE_ARCHITECTURAL,
              }}
              className="w-full max-w-sm rounded-2xl border border-[#F2EDE4]/15 bg-[#091B2E]/85 p-5 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-[#C46A2B]" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#F2EDE4]">
                    Ingeniería Civil S.A.S.
                  </span>
                </div>
                <span className="rounded bg-[#C46A2B]/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#F2EDE4] border border-[#C46A2B]/40">
                  NSR-10
                </span>
              </div>

              {/* Official INAPROC Symbol + Architectural Truss Backdrop */}
              <div className="relative my-4 rounded-xl bg-[#0F2A44] border border-white/10 p-4 overflow-hidden flex items-center justify-between gap-4">
                <InaprocSymbol dark className="h-24 w-auto" />
                <div className="flex-1 space-y-2 text-right">
                  <span className="font-wide text-xl font-extrabold tracking-[0.06em] text-[#F2EDE4] block">
                    INAPROC
                  </span>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#F2EDE4]/70 leading-relaxed">
                    Excelencia · Confiabilidad · Precisión
                  </p>
                  <span className="inline-block rounded bg-[#3E5C76]/50 px-2 py-0.5 font-mono text-[10px] text-[#F2EDE4] border border-white/10">
                    Colombia · Latam · México
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#F2EDE4]/70">
                    <Layers className="h-3.5 w-3.5 text-[#C46A2B]" />
                    <span>Suite Propia</span>
                  </div>
                  <p className="mt-1 font-display text-sm font-bold text-white">
                    RCM© (13 Apps)
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#F2EDE4]/70">
                    <Sparkles className="h-3.5 w-3.5 text-[#C46A2B]" />
                    <span>Modelación</span>
                  </div>
                  <p className="mt-1 font-display text-sm font-bold text-white">
                    BIM · FEM · CFD
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Verified Stats Strip */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.55,
            ease: EASE_ARCHITECTURAL,
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-[#F2EDE4]/15 bg-[#091B2E]/80 backdrop-blur-xl p-5 sm:p-6"
        >
          {companyConfig.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col ${
                idx !== 0 ? "md:border-l md:border-white/10 md:pl-6" : ""
              }`}
            >
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#F2EDE4]">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </span>
              <span className="mt-1 text-xs sm:text-sm text-[#F2EDE4]/75">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
