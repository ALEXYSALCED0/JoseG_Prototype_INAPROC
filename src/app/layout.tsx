import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title:
    "INAPROC S.A.S. | Ingeniería y Arquitectura de Proyectos Civiles · Barranquilla",
  description:
    "Empresa líder en Barranquilla y Latinoamérica en diseño arquitectónico BIM, cálculo estructural NSR-10, ingeniería geotécnica, patología forense FEM/CFD, diseño hidráulico y construcción civil.",
  keywords: [
    "INAPROC SAS",
    "ingeniería estructural Barranquilla",
    "diseño arquitectónico BIM",
    "NSR-10 Colombia",
    "geotecnia y cimentaciones",
    "patología estructural FEM CFD",
    "licencias de construcción Barranquilla",
  ],
  openGraph: {
    title: "INAPROC S.A.S. | Ingeniería y Arquitectura de Proyectos Civiles",
    description:
      "Desde el diseño hasta la entrega final: excelencia, confiabilidad y precisión técnica en proyectos civiles en Colombia y América Latina.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-white text-[#0B2240] font-sans selection:bg-[#E68A00]/20 selection:text-[#0B2240] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
