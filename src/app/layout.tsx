import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title:
    "INAPROC S.A.S. | Ingeniería y Arquitectura de Proyectos Civiles · Barranquilla",
  description:
    "Empresa en Barranquilla especializada en diseño arquitectónico y renders 3D, diseño estructural NSR-10, geotecnia, patología estructural FEM/CFD, diseños hidráulicos, licencias y construcción civil.",
  keywords: [
    "INAPROC S.A.S.",
    "Ingeniería y Arquitectura de Proyectos Civiles",
    "Diseño Estructural NSR-10 Barranquilla",
    "Ingeniería Geotécnica Colombia",
    "Patología Estructural FEM CFD",
    "RCM Engineering",
    "Licencias de construcción Barranquilla",
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
      className={`${archivo.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-white text-[#1E2024] font-sans selection:bg-[#C46A2B]/20 selection:text-[#0F2A44] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
