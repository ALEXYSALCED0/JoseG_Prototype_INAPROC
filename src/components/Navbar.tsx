"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { companyConfig, navLinks } from "@/data/site-data";
import { MagneticButton, EASE_ARCHITECTURAL } from "./MotionPrimitives";

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5 group">
      <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B2240] border border-white/10 shadow-sm overflow-hidden">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="h-5 w-5 transition-transform duration-500 group-hover:scale-110"
        >
          <path
            d="M5 25L16 6L27 25H5Z"
            stroke="#38BDF8"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M11 25L16 15L21 25"
            stroke="#E68A00"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <line
            x1="8.5"
            y1="19"
            x2="23.5"
            y2="19"
            stroke="#FFFFFF"
            strokeWidth="1.6"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            dark ? "text-white" : "text-[#0B2240]"
          }`}
        >
          {companyConfig.name}
        </span>
        <span
          className={`text-[10px] font-mono uppercase tracking-[0.16em] ${
            dark ? "text-slate-300" : "text-slate-500"
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
          ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(11,34,64,0.08)] border-b border-slate-200/80 py-2.5"
          : "bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-slate-100/80 p-1 border border-slate-200/70">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors rounded-full ${
                  isActive
                    ? "text-white"
                    : "text-slate-600 hover:text-[#0B2240]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-[#0B2240] -z-10"
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
            className="inline-flex items-center gap-2 rounded-lg bg-[#E68A00] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#E68A00]/25 hover:bg-[#cc7a00] transition-colors"
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
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#0B2240] hover:bg-slate-100 transition-colors"
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
            className="lg:hidden overflow-hidden border-t border-slate-200 bg-white"
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
                  className="block rounded-lg px-3.5 py-2.5 text-sm font-semibold text-[#0B2240] hover:bg-slate-100"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-3">
                <a
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#E68A00] px-4 py-3 text-sm font-bold text-white shadow-md"
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

