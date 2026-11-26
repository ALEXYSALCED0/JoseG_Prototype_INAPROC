"use client";

import React, { useEffect, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/data/site-data";
import { MagneticButton, EASE_ARCHITECTURAL } from "./MotionPrimitives";

/**
 * Imagotipo oficial de INAPROC según Manual de Identidad Visual:
 * - Versión a color (fondos claros): columnas #0F2A44, anillo #C46A2B, texto #0F2A44
 * - Versión negativo (fondos oscuros): columnas #F2EDE4, anillo #C46A2B, texto #F2EDE4
 */
export function InaprocSymbol({
  dark = false,
  className = "h-10 w-auto",
}: {
  dark?: boolean;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const towerColor = dark ? "#F2EDE4" : "#0F2A44";
  const ringColor = "#C46A2B";

  return (
    <svg
      viewBox="16 12 168 204"
      className={`block shrink-0 ${className}`}
      role="img"
      aria-label="Símbolo oficial INAPROC"
    >
      <defs>
        <mask id={`ring-${uid}`} maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="200" height="230" fill="white" />
          <rect x="71" y="0" width="22" height="128" fill="black" />
        </mask>
        <clipPath id={`towers-${uid}`}>
          <rect x="0" y="0" width="200" height="130" />
          <circle cx="100" cy="130" r="77" />
        </clipPath>
      </defs>
      <circle
        cx="100"
        cy="130"
        r="78"
        fill="none"
        stroke={ringColor}
        strokeWidth="7.5"
        mask={`url(#ring-${uid})`}
      />
      <g fill={towerColor} clipPath={`url(#towers-${uid})`}>
        <path d="M75 16 L89 24 L89 230 L75 230 Z" />
        <path d="M93 60 L107 68 L107 230 L93 230 Z" />
        <path d="M112 93 L126 101 L126 230 L112 230 Z" />
      </g>
    </svg>
  );
}

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#inicio" className="inline-flex items-center gap-2.5 group">
      <InaprocSymbol
        dark={dark}
        className="h-10 w-auto transition-transform duration-500 group-hover:scale-105"
      />
      <div className="flex flex-col leading-none pb-0.5">
        <span
          className={`font-wide text-xl font-extrabold tracking-[0.06em] ${
            dark ? "text-[#F2EDE4]" : "text-[#0F2A44]"
          }`}
        >
          INAPROC
        </span>
        <span
          className={`text-[9.5px] font-mono uppercase tracking-[0.16em] mt-0.5 ${
            dark ? "text-[#F2EDE4]/70" : "text-[#3E5C76]"
          }`}
        >
          S.A.S. · Proyectos Civiles
        </span>
      </div>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#inicio");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(15,42,68,0.08)] border-b border-[#0F2A44]/10 py-2.5"
          : "bg-white/95 backdrop-blur-md border-b border-[#F2EDE4] py-3.5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-[#F2EDE4]/80 p-1 border border-[#0F2A44]/10">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors rounded-full ${
                  isActive
                    ? "text-[#F2EDE4]"
                    : "text-[#3E5C76] hover:text-[#0F2A44]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-[#0F2A44] -z-10"
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <MagneticButton
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-lg bg-[#C46A2B] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#C46A2B]/25 hover:bg-[#AD5A21] transition-colors"
          >
            Cotizar proyecto
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Abrir menú"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-[#0F2A44]/15 text-[#0F2A44] hover:bg-[#F2EDE4] transition-colors"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE_ARCHITECTURAL }}
            className="lg:hidden overflow-hidden border-t border-[#F2EDE4] bg-white"
          >
            <div className="px-4 py-5 space-y-1.5">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3.5 py-2.5 text-sm font-semibold text-[#0F2A44] hover:bg-[#F2EDE4]"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-3">
                <a
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#C46A2B] px-4 py-3 text-sm font-bold text-white shadow-md"
                >
                  Cotizar proyecto
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
