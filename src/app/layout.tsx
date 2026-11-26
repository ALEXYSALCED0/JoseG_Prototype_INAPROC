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
  title: "INAPROC | Ingeniería Estructural, Diseño BIM & Consultoría",
  description:
    "Construimos soluciones desde el diseño hasta la ingeniería. Modelado BIM, análisis sísmico FEM, infraestructura y gerencia de proyectos de alta precisión.",
  keywords: [
    "ingeniería estructural",
    "diseño BIM",
    "análisis FEM",
    "infraestructura civil",
    "consultoría estructural",
    "supervisión de obra",
  ],
  openGraph: {
    title: "INAPROC | Ingeniería Estructural y Diseño BIM",
    description:
      "Soluciones integrales de ingeniería estructural, modelado BIM y tecnología aplicada a proyectos de alto impacto.",
    type: "website",
    locale: "es_MX",
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
