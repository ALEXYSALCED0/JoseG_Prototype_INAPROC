"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building,
  ChevronLeft,
  ChevronRight,
  Columns2,
  Expand,
  GalleryHorizontal,
  LayoutGrid,
  MapPin,
  MoveHorizontal,
  X,
} from "lucide-react";
import {
  ProjectCategory,
  ProjectItem,
  projectsData,
} from "@/data/site-data";
import { EASE_ARCHITECTURAL, RevealMask } from "./MotionPrimitives";

const CATEGORIES: ProjectCategory[] = [
  "Todos",
  "Edificación",
  "Infraestructura",
  "Industrial",
  "BIM & Digital",
];

type GalleryMode = "bento" | "cinema" | "comparator";

function BlueprintRealitySlider({
  image,
  title,
  heightClass = "h-[360px] sm:h-[440px]",
}: {
  image: string;
  title: string;
  heightClass?: string;
}) {
  const [splitPercent, setSplitPercent] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSplit = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setSplitPercent(Math.max(5, Math.min(95, raw)));
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={(e) => {
        isDragging.current = true;
        updateSplit(e.clientX);
      }}
      onPointerMove={(e) => {
        if (isDragging.current) updateSplit(e.clientX);
      }}
      onPointerUp={() => {
        isDragging.current = false;
      }}
      onPointerLeave={() => {
        isDragging.current = false;
      }}
      className={`relative w-full ${heightClass} rounded-2xl overflow-hidden select-none cursor-ew-resize bg-[#07172C] border border-slate-200/20 shadow-2xl`}
    >
      {/* Layer 1: Full Reality Photo */}
      <Image
        src={image}
        alt={`${title} - Obra Real`}
        fill
        className="object-cover pointer-events-none"
      />
      <span className="absolute top-4 right-4 z-10 rounded-full bg-[#0B2240]/85 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/15">
        Obra Ejecutada
      </span>

      {/* Layer 2: Clipped Blueprint Wireframe View */}
      <div
        className="absolute inset-0 overflow-hidden bg-[#061836]"
        style={{ clipPath: `inset(0 ${100 - splitPercent}% 0 0)` }}
      >
        <Image
          src={image}
          alt={`${title} - Plano Estructural CAD`}
          fill
          className="object-cover pointer-events-none grayscale contrast-[2.2] brightness-110 invert opacity-75"
        />
        <div className="absolute inset-0 bg-[#0A3066]/65 bg-blueprint-grid mix-blend-multiply" />
        <div className="absolute inset-0 bg-sky-500/15 bg-blueprint-grid" />
        <span className="absolute top-4 left-4 z-10 rounded-full bg-[#38BDF8] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#061326] shadow-md">
          Modelo Estructural CAD
        </span>
      </div>

      {/* Interactive Divider Line & Drag Handle */}
      <div
        style={{ left: `${splitPercent}%` }}
        className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)] z-20 -translate-x-1/2 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#E68A00] text-white shadow-xl border-2 border-white">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 rounded-full bg-[#061326]/80 backdrop-blur-md px-4 py-1.5 text-[11px] font-mono text-slate-200 border border-white/15 pointer-events-none">
        Arrastra para comparar Diseño CAD vs. Estructura Real
      </div>
    </div>
  );
}

export function InteractiveProjectsGallery() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("Todos");
  const [galleryMode, setGalleryMode] = useState<GalleryMode>("bento");
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(
    null
  );
  const [lightboxImageIdx, setLightboxImageIdx] = useState(0);
  const [lightboxShowBlueprint, setLightboxShowBlueprint] = useState(false);

  // Cinema slider state
  const [cinemaIndex, setCinemaIndex] = useState(0);
  // Comparator project selector
  const [comparatorIdx, setComparatorIdx] = useState(0);

  const filteredProjects =
    selectedCategory === "Todos"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  // Keyboard support inside Lightbox
  useEffect(() => {
    if (!lightboxProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxProject(null);
      if (e.key === "ArrowRight") {
        setLightboxImageIdx(
          (prev) => (prev + 1) % lightboxProject.gallery.length
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxImageIdx(
          (prev) =>
            (prev - 1 + lightboxProject.gallery.length) %
            lightboxProject.gallery.length
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxProject]);

  const openLightbox = (project: ProjectItem) => {
    setLightboxProject(project);
    setLightboxImageIdx(0);
    setLightboxShowBlueprint(false);
  };

  return (
    <section
      id="proyectos"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Interactive Mode Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#E68A00]">
              <span className="h-[2px] w-6 bg-[#E68A00]" />
              Portafolio & Galería Interactiva
            </div>
            <RevealMask>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B2240]">
                Soluciones que respaldan nuestra trayectoria
              </h2>
            </RevealMask>
            <p className="text-slate-600 text-base sm:text-lg">
              Explora nuestras obras en vista arquitectónica Bento, galería
              cinemática interactiva o comparador CAD vs. Obra.
            </p>
          </div>

          {/* 3-Way Gallery View Mode Switcher */}
          <div className="inline-flex items-center rounded-xl bg-[#F4F7FB] p-1.5 border border-slate-200 self-start lg:self-auto">
            {(
              [
                { id: "bento", label: "Vista Bento", icon: LayoutGrid },
                { id: "cinema", label: "Galería 3D", icon: GalleryHorizontal },
                { id: "comparator", label: "Comparador CAD", icon: Columns2 },
              ] as const
            ).map((mode) => {
              const Icon = mode.icon;
              const active = galleryMode === mode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setGalleryMode(mode.id)}
                  className={`relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer ${
                    active
                      ? "text-white"
                      : "text-slate-600 hover:text-[#0B2240]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="gallery-mode-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-lg bg-[#0B2240] -z-0"
                    />
                  )}
                  <Icon className="relative z-10 h-3.5 w-3.5" />
                  <span className="relative z-10">{mode.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filter Bar (matching Figma light-blue pill bar) */}
        {galleryMode !== "comparator" && (
          <div className="mb-10 rounded-xl bg-[#E6EFFA] p-1.5 flex flex-wrap items-center gap-1.5 border border-[#D2E2F5]">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCinemaIndex(0);
                  }}
                  className={`relative rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    isSelected
                      ? "text-white"
                      : "text-[#0B2240]/75 hover:text-[#0B2240]"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="project-category-pill"
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-lg bg-[#0B2240] shadow-sm"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* MODE 1: FILTERABLE BENTO GRID (2 wide top + 3 cards bottom) */}
        <AnimatePresence mode="wait">
          {galleryMode === "bento" && (
            <motion.div
              key="bento-mode"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE_ARCHITECTURAL }}
              className="grid grid-cols-1 md:grid-cols-6 gap-6"
            >
              <AnimatePresence>
                {filteredProjects.map((project, idx) => {
                  const isWide =
                    selectedCategory === "Todos" && idx < 2;
                  return (
                    <motion.article
                      layout
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{
                        duration: 0.45,
                        ease: EASE_ARCHITECTURAL,
                      }}
                      onClick={() => openLightbox(project)}
                      className={`group relative cursor-pointer rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#0B2240]/12 transition-all duration-300 ${
                        isWide ? "md:col-span-3" : "md:col-span-2"
                      }`}
                    >
                      <div
                        className={`relative overflow-hidden bg-[#0B2240] ${
                          isWide ? "h-64 sm:h-72" : "h-56"
                        }`}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-108"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/85 via-[#061326]/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                        {/* Top Floating Tags */}
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                          <span className="rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0B2240] shadow-sm">
                            {project.category}
                          </span>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B2240]/80 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                            <Expand className="h-3.5 w-3.5" />
                          </span>
                        </div>

                        {/* Bottom Hover Specs */}
                        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-white font-mono">
                          <span className="flex items-center gap-1.5 text-slate-200">
                            <MapPin className="h-3.5 w-3.5 text-[#F59E0B]" />
                            {project.location}
                          </span>
                          <span className="rounded bg-white/15 px-2 py-0.5 backdrop-blur-md">
                            {project.area}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                          <span>{project.software}</span>
                          <span>{project.year}</span>
                        </div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B2240] group-hover:text-[#E68A00] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                          {project.summary}
                        </p>
                        <div className="pt-1 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B2240] group-hover:text-[#E68A00]">
                          <span>Abrir galería y ficha</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}

          {/* MODE 2: KINEMATIC 3D STAGE GALLERY */}
          {galleryMode === "cinema" && (
            <motion.div
              key="cinema-mode"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE_ARCHITECTURAL }}
              className="rounded-3xl bg-[#0B2240] text-white p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Active Cinema Showcase Card */}
                <div className="lg:col-span-7 relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={filteredProjects[cinemaIndex]?.id}
                      initial={{ opacity: 0, scale: 0.96, x: 24 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.96, x: -24 }}
                      transition={{ duration: 0.45, ease: EASE_ARCHITECTURAL }}
                      onClick={() =>
                        filteredProjects[cinemaIndex] &&
                        openLightbox(filteredProjects[cinemaIndex])
                      }
                      className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 cursor-pointer group"
                    >
                      <Image
                        src={filteredProjects[cinemaIndex].image}
                        alt={filteredProjects[cinemaIndex].title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/90 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 rounded-full bg-[#061326]/80 px-3 py-1.5 text-xs font-mono text-sky-300 border border-white/15 flex items-center gap-1.5 backdrop-blur-md">
                        <Expand className="h-3.5 w-3.5" />
                        Click para ampliar
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                        <div>
                          <span className="font-mono text-[11px] uppercase tracking-widest text-[#F59E0B]">
                            {filteredProjects[cinemaIndex].category} ·{" "}
                            {filteredProjects[cinemaIndex].year}
                          </span>
                          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                            {filteredProjects[cinemaIndex].title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Project Telemetry & Controls */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs text-sky-300">
                      <span>
                        PROYECTO{" "}
                        {String(cinemaIndex + 1).padStart(2, "0")} /{" "}
                        {String(filteredProjects.length).padStart(2, "0")}
                      </span>
                      <span>{filteredProjects[cinemaIndex].location}</span>
                    </div>

                    <p className="text-slate-200 text-base leading-relaxed">
                      {filteredProjects[cinemaIndex].summary}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white/5 border border-white/10 p-3.5">
                        <span className="text-[11px] font-mono text-slate-400 uppercase">
                          Superficie / Luz
                        </span>
                        <p className="font-display text-lg font-bold text-white mt-0.5">
                          {filteredProjects[cinemaIndex].area}
                        </p>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 p-3.5">
                        <span className="text-[11px] font-mono text-slate-400 uppercase">
                          Acero Estructural
                        </span>
                        <p className="font-display text-lg font-bold text-[#F59E0B] mt-0.5">
                          {filteredProjects[cinemaIndex].steelTons}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#07162C] border border-sky-400/20 p-4">
                      <p className="font-mono text-[11px] uppercase text-sky-300 mb-1">
                        Solución Técnica
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {filteredProjects[cinemaIndex].solution}
                      </p>
                    </div>
                  </div>

                  {/* Carousel Controls & Thumbnails */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setCinemaIndex(
                            (prev) =>
                              (prev - 1 + filteredProjects.length) %
                              filteredProjects.length
                          )
                        }
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 transition-colors cursor-pointer"
                        aria-label="Proyecto anterior"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setCinemaIndex(
                            (prev) => (prev + 1) % filteredProjects.length
                          )
                        }
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 transition-colors cursor-pointer"
                        aria-label="Siguiente proyecto"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          openLightbox(filteredProjects[cinemaIndex])
                        }
                        className="flex-1 rounded-xl bg-[#E68A00] hover:bg-[#d17d00] px-5 py-3 text-sm font-bold text-white transition-colors cursor-pointer"
                      >
                        Inspeccionar caso completo
                      </button>
                    </div>

                    {/* Thumbnail scrubber */}
                    <div className="grid grid-cols-6 gap-2">
                      {filteredProjects.map((proj, i) => (
                        <button
                          key={proj.id}
                          type="button"
                          onClick={() => setCinemaIndex(i)}
                          className={`relative h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                            i === cinemaIndex
                              ? "border-[#E68A00] scale-105"
                              : "border-transparent opacity-50 hover:opacity-85"
                          }`}
                        >
                          <Image
                            src={proj.image}
                            alt={proj.title}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* MODE 3: INTERACTIVE CAD-TO-REALITY COMPARATOR */}
          {galleryMode === "comparator" && (
            <motion.div
              key="comparator-mode"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE_ARCHITECTURAL }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                {projectsData.slice(0, 4).map((proj, idx) => (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => setComparatorIdx(idx)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer border ${
                      comparatorIdx === idx
                        ? "bg-[#0B2240] text-white border-[#0B2240] shadow-md"
                        : "bg-[#F4F7FB] text-slate-700 border-slate-200 hover:bg-slate-200/70"
                    }`}
                  >
                    {proj.title}
                  </button>
                ))}
              </div>

              <BlueprintRealitySlider
                image={projectsData[comparatorIdx].image}
                title={projectsData[comparatorIdx].title}
                heightClass="h-[380px] sm:h-[480px]"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FULL-SCREEN INTERACTIVE LIGHTBOX & CASE STUDY MODAL */}
      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxProject(null)}
            className="fixed inset-0 z-[90] bg-[#061326]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.35, ease: EASE_ARCHITECTURAL }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl rounded-3xl bg-white text-[#0B2240] shadow-2xl overflow-hidden my-auto"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-[#F4F7FB]">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#0B2240] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                    {lightboxProject.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    {lightboxProject.location} · {lightboxProject.year}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxShowBlueprint((prev) => !prev)
                    }
                    className={`rounded-lg px-3 py-1.5 text-xs font-mono font-semibold border transition-colors cursor-pointer ${
                      lightboxShowBlueprint
                        ? "bg-[#0B2240] text-[#38BDF8] border-[#0B2240]"
                        : "bg-white text-[#0B2240] border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {lightboxShowBlueprint
                      ? "Ver Fotos"
                      : "Comparador CAD/Obra"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxProject(null)}
                    className="rounded-lg p-2 text-slate-500 hover:bg-slate-200 hover:text-[#0B2240] transition-colors cursor-pointer"
                    aria-label="Cerrar galería"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Gallery Viewer */}
                <div className="lg:col-span-7 bg-[#061326] p-4 sm:p-6 flex flex-col justify-between gap-4">
                  {lightboxShowBlueprint ? (
                    <BlueprintRealitySlider
                      image={lightboxProject.gallery[lightboxImageIdx]}
                      title={lightboxProject.title}
                      heightClass="h-[300px] sm:h-[380px]"
                    />
                  ) : (
                    <div className="relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden">
                      <Image
                        src={lightboxProject.gallery[lightboxImageIdx]}
                        alt={lightboxProject.title}
                        fill
                        className="object-cover"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxImageIdx(
                            (prev) =>
                              (prev - 1 + lightboxProject.gallery.length) %
                              lightboxProject.gallery.length
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[#061326]/75 text-white hover:bg-[#E68A00] transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxImageIdx(
                            (prev) =>
                              (prev + 1) % lightboxProject.gallery.length
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[#061326]/75 text-white hover:bg-[#E68A00] transition-colors cursor-pointer"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  {/* Thumbnails */}
                  <div className="flex items-center gap-3">
                    {lightboxProject.gallery.map((img, i) => (
                      <button
                        key={`${img}-${i}`}
                        type="button"
                        onClick={() => setLightboxImageIdx(i)}
                        className={`relative h-16 w-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                          lightboxImageIdx === i
                            ? "border-[#E68A00]"
                            : "border-white/15 opacity-55 hover:opacity-90"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${lightboxProject.title} vista ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Case Study Datasheet */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2240]">
                      {lightboxProject.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {lightboxProject.summary}
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="rounded-xl bg-[#F4F7FB] p-3 border border-slate-200">
                        <span className="font-mono text-[10px] uppercase text-slate-500">
                          Superficie / Luz
                        </span>
                        <p className="font-display font-bold text-[#0B2240]">
                          {lightboxProject.area}
                        </p>
                      </div>
                      <div className="rounded-xl bg-[#F4F7FB] p-3 border border-slate-200">
                        <span className="font-mono text-[10px] uppercase text-slate-500">
                          Acero Estructural
                        </span>
                        <p className="font-display font-bold text-[#0B2240]">
                          {lightboxProject.steelTons}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div>
                        <span className="font-mono text-[11px] font-bold uppercase text-[#E68A00]">
                          Desafío Estructural
                        </span>
                        <p className="text-sm text-slate-600 mt-0.5">
                          {lightboxProject.challenge}
                        </p>
                      </div>
                      <div>
                        <span className="font-mono text-[11px] font-bold uppercase text-[#0B2240]">
                          Solución INAPROC
                        </span>
                        <p className="text-sm text-slate-600 mt-0.5">
                          {lightboxProject.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <Building className="h-4 w-4 text-[#0B2240]" />
                      <span>{lightboxProject.software}</span>
                    </div>
                    <a
                      href="#contacto"
                      onClick={() => setLightboxProject(null)}
                      className="rounded-lg bg-[#E68A00] hover:bg-[#d17d00] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                    >
                      Proyecto similar
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
