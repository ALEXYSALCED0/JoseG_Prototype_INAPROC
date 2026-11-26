"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Cpu,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Send,
  Target,
  X,
} from "lucide-react";
import {
  ArticleItem,
  articlesData,
  companyConfig,
  navLinks,
  trustPillars,
} from "@/data/site-data";
import { EASE_ARCHITECTURAL, RevealMask } from "./MotionPrimitives";
import { BrandLogo } from "./Navbar";

const pillarIcons = {
  target: Target,
  clock: Clock,
  cpu: Cpu,
  handshake: Handshake,
};

export function TrustBlogContactFooter() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(
    null
  );
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Diseño Estructural NSR-10",
    message: "",
    accepted: true,
  });

  const handleCopy = (label: string, value: string) => {
    navigator.clipboard?.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <>
      {/* SECTION 7: TRUST PILLARS (SOFT ICE BLUE) */}
      <section className="py-20 lg:py-24 bg-[#F2EDE4] border-y border-[#D9D2C5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#0F2A44]">
              <span className="h-[2px] w-6 bg-[#C46A2B]" />
              Valor Agregado
            </div>
            <RevealMask>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F2A44]">
                Más que ingeniería, soluciones que generan confianza.
              </h2>
            </RevealMask>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, idx) => {
              const Icon =
                pillarIcons[pillar.icon as keyof typeof pillarIcons] || Target;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: EASE_ARCHITECTURAL,
                  }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white/80 backdrop-blur-md border border-white p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F2A44] text-white">
                      <Icon className="h-5 w-5 text-[#C46A2B]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#0F2A44]/40">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0F2A44] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: KNOWLEDGE / BLOG */}
      <section id="blog" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C46A2B]">
                <span className="h-[2px] w-6 bg-[#C46A2B]" />
                Novedades & Academia
              </div>
              <RevealMask>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F2A44]">
                  Novedades Tecnológicas y Metodología
                </h2>
              </RevealMask>
            </div>
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
              RCM© · 9 Pasos · Geotechtips
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {articlesData.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: EASE_ARCHITECTURAL,
                }}
                onClick={() => setSelectedArticle(article)}
                className="group cursor-pointer rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-[#0F2A44]/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#0F2A44] group-hover:text-[#C46A2B] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F2A44] group-hover:text-[#C46A2B]">
                    <span>Leer artículo completo</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CONTACT CTA & LEAD FORM */}
      <section
        id="contacto"
        className="relative py-20 lg:py-28 bg-[#0F2A44] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-blueprint-grid opacity-65 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-8 pt-2">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C46A2B]">
                  <span className="h-[2px] w-6 bg-[#C46A2B]" />
                  Contacto Directo
                </div>
                <RevealMask>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.7rem] font-extrabold leading-[1.1]">
                    ¿Tienes un proyecto en mente?
                  </h2>
                </RevealMask>
                <p className="text-slate-300 text-base leading-relaxed">
                  Conversa directamente con nuestros ingenieros líderes para
                  evaluar factibilidad, tiempos de ingeniería y alcance BIM de
                  tu obra.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    label: `Proyectos · ${companyConfig.phoneContact}`,
                    value: companyConfig.phone,
                    copyable: true,
                  },
                  {
                    icon: Phone,
                    label: `Atención · ${companyConfig.secondaryPhoneContact}`,
                    value: companyConfig.secondaryPhone,
                    copyable: true,
                  },
                  {
                    icon: Mail,
                    label: "Correo corporativo",
                    value: companyConfig.email,
                    copyable: true,
                  },
                  {
                    icon: MapPin,
                    label: `Oficina Barranquilla · ${companyConfig.schedule}`,
                    value: companyConfig.address,
                    copyable: false,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const isCopied = copiedField === item.label;
                  return (
                    <div
                      key={item.label}
                      onClick={() =>
                        item.copyable && handleCopy(item.label, item.value)
                      }
                      className={`flex items-center justify-between rounded-xl border border-white/12 bg-white/5 px-4 py-3.5 backdrop-blur-md ${
                        item.copyable
                          ? "cursor-pointer hover:bg-white/10 transition-colors"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C46A2B]/15 text-[#C46A2B]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                            {item.label}
                          </p>
                          <p className="text-sm font-semibold text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                      {item.copyable && (
                        <span className="text-xs font-mono text-sky-300 flex items-center gap-1">
                          {isCopied ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                              Copiado
                            </>
                          ) : (
                            <Copy className="h-3.5 w-3.5 opacity-60" />
                          )}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Floating White Quote Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: EASE_ARCHITECTURAL }}
                className="rounded-3xl bg-white text-[#0F2A44] p-6 sm:p-8 lg:p-10 shadow-2xl"
              >
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <h3 className="font-display text-2xl font-extrabold text-[#0F2A44]">
                      ¡Solicitud recibida con éxito!
                    </h3>
                    <p className="max-w-md mx-auto text-sm sm:text-base text-slate-600">
                      Gracias,{" "}
                      <span className="font-semibold text-[#0F2A44]">
                        {formState.name}
                      </span>
                      . Nuestro equipo de ingeniería revisará los detalles de tu
                      proyecto de{" "}
                      <span className="font-semibold">{formState.service}</span>{" "}
                      y te contactará a la brevedad.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormState({
                          ...formState,
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          message: "",
                        });
                      }}
                      className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#0F2A44] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#133563] cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-display text-2xl font-extrabold text-[#0F2A44]">
                        Cuéntanos sobre tu proyecto
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Completa el formulario y recibe una estimación técnica
                        preliminar.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Nombre completo *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Ej. Ing. Roberto Salazar"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:border-[#0F2A44] focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Empresa / Constructora
                        </label>
                        <input
                          type="text"
                          placeholder="Nombre de tu empresa"
                          value={formState.company}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              company: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:border-[#0F2A44] focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Correo electrónico *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="nombre@empresa.com"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:border-[#0F2A44] focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          placeholder="+57 300 000 0000"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              phone: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:border-[#0F2A44] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Servicio requerido
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            service: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:border-[#0F2A44] focus:bg-white transition-colors"
                      >
                        <option value="Diseño Estructural NSR-10">
                          Diseño Estructural NSR-10 (Concreto / Acero)
                        </option>
                        <option value="Diseño Arquitectónico y BIM">
                          Diseño Arquitectónico, Renders 3D & BIM
                        </option>
                        <option value="Ingeniería Geotécnica">
                          Geotecnia, Cimentaciones y Estabilidad de Taludes
                        </option>
                        <option value="Patología Estructural FEM/CFD">
                          Patología Estructural, NDT y Modelación FEM / CFD
                        </option>
                        <option value="Diseño Hidráulico y Piscinas">
                          Diseño Hidráulico, Hidrosanitario, PTAR y Piscinas
                        </option>
                        <option value="Construcción Civil y Licencias">
                          Construcción Civil Llave en Mano & Licencias
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Detalles del proyecto
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Cuéntanos superficie aproximada (m²), ubicación y etapa actual..."
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:border-[#0F2A44] focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <label className="flex items-center gap-2.5 text-xs text-slate-500 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formState.accepted}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            accepted: e.target.checked,
                          })
                        }
                        className="rounded border-slate-300 accent-[#C46A2B]"
                      />
                      <span>
                        Acepto el aviso de privacidad y confidencialidad
                        técnica de planos.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#C46A2B] hover:bg-[#AD5A21] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#C46A2B]/25 transition-all cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      Enviar solicitud de cotización
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FOOTER */}
      <footer className="bg-[#091B2E] text-slate-300 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5 space-y-4">
              <BrandLogo dark />
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                {companyConfig.description}
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                Navegación
              </h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-slate-400 hover:text-[#C46A2B] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                Contacto
              </h4>
              <p className="text-sm text-slate-400">{companyConfig.address}</p>
              <p className="text-sm text-slate-400">
                {companyConfig.phone} ({companyConfig.phoneContact})
              </p>
              <p className="text-sm text-slate-400">
                {companyConfig.secondaryPhone} ({companyConfig.secondaryPhoneContact})
              </p>
              <p className="text-sm text-slate-400">{companyConfig.email}</p>
              <p className="text-xs font-mono text-slate-500 pt-1">
                {companyConfig.schedule}
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © 2015 – 2026 {companyConfig.legalName} —{" "}
              {companyConfig.tagline}. Todos los derechos reservados.
            </p>
            <a
              href="#inicio"
              className="inline-flex items-center gap-1.5 font-mono text-slate-300 hover:text-[#C46A2B] transition-colors"
            >
              Volver arriba
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>

      {/* ARTICLE READER MODAL */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 z-[90] bg-[#091B2E]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: EASE_ARCHITECTURAL }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-3xl bg-white text-[#0F2A44] shadow-2xl overflow-hidden my-auto"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091B2E]/90 via-[#091B2E]/20 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 rounded-full bg-white/90 p-2 text-[#0F2A44] hover:bg-white cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C46A2B]">
                    {selectedArticle.category} · {selectedArticle.readTime}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold mt-1 leading-tight">
                    {selectedArticle.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-sm font-bold text-[#0F2A44]">
                      {selectedArticle.author}
                    </p>
                    <p className="text-xs text-slate-500">
                      {selectedArticle.authorRole}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    {selectedArticle.date}
                  </span>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  {selectedArticle.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
