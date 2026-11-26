export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  normative: string;
  iconName:
    | "compass"
    | "shield"
    | "layers"
    | "activity"
    | "hardHat"
    | "building";
}

export interface TechItem {
  id: "bim" | "fem" | "sig";
  code: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
}

export type ProjectCategory =
  | "Todos"
  | "Edificación"
  | "Infraestructura"
  | "Industrial"
  | "BIM & Digital";

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "Todos">;
  location: string;
  year: string;
  area: string;
  steelTons: string;
  software: string;
  image: string;
  gallery: string[];
  summary: string;
  challenge: string;
  solution: string;
  featuredSpan?: "wide" | "standard";
}

export interface ArticleItem {
  id: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorRole: string;
  content: string[];
}

export const companyConfig = {
  name: "INAPROC",
  legalName: "INAPROC S.A.S.",
  tagline: "Ingeniería y Arquitectura de Proyectos Civiles S.A.S.",
  description:
    "Empresa líder en el sector de la construcción en Colombia con sede en Barranquilla. Especialistas en diseño arquitectónico y estructural NSR-10, ingeniería geotécnica, patología forense FEM/CFD, diseños hidráulicos, licencias y construcción civil.",
  phone: "+57 324 225 0653",
  phoneContact: "Ing. Hazem Al Hadwi",
  secondaryPhone: "+57 301 398 2402",
  secondaryPhoneContact: "Ing. Carolina Parra",
  email: "inaproc.info@gmail.com",
  address: "Cra. 11 #30, Barranquilla, Colombia",
  schedule: "Lunes a Viernes · 8:00 – 17:00",
  stats: [
    { value: 20, suffix: "+", label: "Años de experiencia profesional" },
    { value: 5, suffix: "+ países", label: "Presencia en Latinoamérica y México" },
    { value: 13, suffix: " apps", label: "Suite propia RCM Engineering©" },
    { value: 498, suffix: "+", label: "Alumnos en Geotechtips Academy" },
  ] as { value: number; suffix: string; label: string; decimals?: number }[],
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Novedades", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "diseno-estructural",
    title: "Diseño Estructural",
    tag: "Reglamento NSR-10",
    shortDescription:
      "Cálculo y modelación numérica de estructuras de concreto armado, acero estructural, mampostería y madera bajo el reglamento colombiano sismorresistente NSR-10.",
    fullDescription:
      "Nuestros ingenieros estructurales trabajan en Colombia y más de 5 países de América Latina y México, diseñando desde hoteles frente al mar, centros comerciales y hospitales hasta naves industriales, estadios y puentes con resistencia, viabilidad y sostenibilidad.",
    deliverables: [
      "Estructuras de Concreto Armado, Acero estructural, Mampostería y Madera",
      "Análisis y diseño sísmico bajo el reglamento colombiano NSR-10",
      "Edificios altos, complejos de uso mixto, hospitales y hoteles costeros",
      "Uso eficiente de materiales combinando función, presupuesto y estética",
    ],
    normative: "NSR-10 · Modelación Numérica",
    iconName: "building",
  },
  {
    id: "diseno-arquitectonico-bim",
    title: "Diseño Arquitectónico & BIM",
    tag: "BIM · HVAC · 3D",
    shortDescription:
      "Equipo multidisciplinario de arquitectos y 8 diseñadores expertos en tecnología BIM, instalaciones HVAC y renders tridimensionales de alto realismo.",
    fullDescription:
      "Contamos con 3 arquitectos con más de 20 años de experiencia y un equipo multidisciplinario egresado de las mejores universidades de la costa colombiana, creando modelos virtuales 3D colaborativos para arquitectura interior, exterior, industrial, comercial y residencial.",
    deliverables: [
      "Arquitectura interior y exterior (industrial, comercial y residencial)",
      "Tecnología BIM, coordinación HVAC y renders tridimensionales",
      "Desarrollo urbano sostenible y arquitectura paisajística",
      "Acústica, iluminación, diseño de instalaciones hidrosanitarias y eléctricas",
    ],
    normative: "BIM 3D · HVAC · Diseño Sostenible",
    iconName: "layers",
  },
  {
    id: "patologia-forense",
    title: "Patología Estructural & Forense",
    tag: "NDT · FEM · CFD",
    shortDescription:
      "Chequeo de estructuras existentes y edificaciones de valor histórico mediante métodos no destructivos y modelación numérica FEM y CFD.",
    fullDescription:
      "Diagnosticamos la capacidad real de edificaciones existentes, obras civiles y estructuras patrimoniales o de valor histórico combinando ensayos no destructivos en campo con simulaciones avanzadas por elementos finitos (FEM) y dinámica de fluidos (CFD).",
    deliverables: [
      "Chequeo de estructuras existentes con métodos no destructivos",
      "Modelación numérica avanzada FEM y CFD",
      "Diseños y chequeo estructural de edificaciones de valor histórico",
      "Diagnóstico patológico e ingeniería forense especializada",
    ],
    normative: "NSR-10 · Ensayos No Destructivos",
    iconName: "activity",
  },
  {
    id: "geotecnia-especializada",
    title: "Soluciones Geotécnicas",
    tag: "Cimentaciones & Taludes",
    shortDescription:
      "Diseño de cimentaciones, pilotaje, columnas de grava, inclusiones rígidas, estabilización de taludes, muros cantiléver, gaviones y geomallas.",
    fullDescription:
      "Resolvemos cimentaciones sobre suelos blandos, arcillas expansivas o zonas con riesgo de licuación en Colombia, México y Panamá, además de sistemas de contención flexibles y rígidos contra deslizamientos y erosión.",
    deliverables: [
      "Cimentaciones, pilotaje, columnas de grava e inclusiones rígidas",
      "Estabilización química con cal/cemento, drenes verticales y precarga",
      "Refuerzo de suelos con geomallas, geotextiles, geoceldas y geocompuestos",
      "Muros de contención de gravedad, cantiléver, gaviones, MSE y concreto lanzado",
    ],
    normative: "NSR-10 Geotecnia · Geosintéticos",
    iconName: "compass",
  },
  {
    id: "hidraulico-piscinas",
    title: "Diseño Hidráulico & Piscinas",
    tag: "PTAR · Spas · Fuentes",
    shortDescription:
      "Diseños hidráulicos e hidrológicos, instalaciones hidrosanitarias, PTAR, piscinas enterradas o en rooftops, jacuzzis, spas, fuentes y cascadas.",
    fullDescription:
      "Proyectamos obras hidráulicas, redes hidrosanitarias y piscinas públicas y privadas con revestimientos en piedra natural, mármol italiano o mosaico, domótica y tratamientos de agua 100% ecológicos.",
    deliverables: [
      "Diseños hidráulicos e hidrológicos, PTAR y obras hidráulicas",
      "Instalaciones hidrosanitarias y redes eléctricas asociadas",
      "Piscinas, jacuzzis y spas enterrados o en rooftops",
      "Domótica para piscinas, fuentes, cascadas y tratamiento ecológico",
    ],
    normative: "Diseño Hidrosanitario · Piscinas & Spas",
    iconName: "shield",
  },
  {
    id: "construccion-licencias",
    title: "Construcción Civil & Licencias",
    tag: "9 Pasos · Curaduría",
    shortDescription:
      "Construcción de obras civiles y viviendas con presupuesto APU, garantía de 6 meses a 1 año, y tramitación completa de licencias de construcción en Barranquilla.",
    fullDescription:
      "Con oficina física en Barranquilla y profesionales con más de 20 años de experiencia y matrículas vigentes, ejecutamos obras llave en mano y gestionamos licencias sin intermediarios ni comisionistas.",
    deliverables: [
      "Licencias: Nueva Construcción, Ampliación, Adecuación, Reforzamiento, Restauración y Demolición",
      "Visitas de campo en todo el departamento del Atlántico y presupuestos APU",
      "Ejecución de obra apoyada en tecnología BIM y mano de obra local calificada",
      "Garantía escrita de obra (6 meses a 1 año) en estructura e instalaciones",
    ],
    normative: "Curaduría Urbana Barranquilla · NSR-10",
    iconName: "hardHat",
  },
];

export const techData: TechItem[] = [
  {
    id: "bim",
    code: "01 // BIM · HVAC · 3D",
    title: "BIM",
    subtitle: "BIM, HVAC y Renders Tridimensionales",
    description:
      "Utilizamos Building Information Modeling (BIM) como eje central para crear modelos virtuales 3D precisos, actualizando modificaciones del cliente en tiempo real durante la obra.",
    image: "/images/tech-bim.jpg",
    metrics: [
      { label: "Equipo creativo", value: "8 diseñadores" },
      { label: "Visualización", value: "Renders 3D" },
      { label: "Especialidades", value: "BIM + HVAC" },
    ],
    highlights: [
      "Modelos virtuales 3D colaborativos para arquitectura y estructura",
      "Renders tridimensionales con iluminación, materiales y texturas reales",
      "Coordinación de instalaciones hidrosanitarias, eléctricas y HVAC",
    ],
  },
  {
    id: "fem",
    code: "02 // FEM · CFD · RCM©",
    title: "FEM",
    subtitle: "Modelación Numérica FEM, CFD y RCM©",
    description:
      "Combinamos modelación numérica FEM y CFD con nuestra propia suite de software RCM Engineering© (13 apps desarrolladas en Barranquilla desde 2016).",
    image: "/images/tech-fem.jpg",
    metrics: [
      { label: "Suite propia", value: "RCM© (2016)" },
      { label: "Google Play Store", value: "13 Apps" },
      { label: "Simulación", value: "FEM & CFD" },
    ],
    highlights: [
      "Chequeo de estructuras existentes con métodos no destructivos (NDT)",
      "Modelación FEM y CFD para estructuras civiles, sismos y vientos",
      "13 aplicaciones propias en Google Play Store para cálculo técnico",
    ],
  },
  {
    id: "sig",
    code: "03 // GEOTECNIA & CONTENCIÓN",
    title: "SIG",
    subtitle: "Geotecnia Aplicada y Obras de Contención",
    description:
      "Soluciones geotécnicas probadas en Colombia, México y Panamá sobre suelos blandos, arcillas expansivas, taludes inestables y zonas con riesgo de licuación.",
    image: "/images/tech-sig.jpg",
    metrics: [
      { label: "Cobertura", value: "CO · MX · PA" },
      { label: "Mejoramiento", value: "Grava / Rígidas" },
      { label: "Contención", value: "MSE & Gaviones" },
    ],
    highlights: [
      "Columnas de grava, inclusiones rígidas y drenes verticales (wick drains)",
      "Estabilización química con cal/cemento y refuerzo con geomallas/geoceldas",
      "Muros cantiléver, gravedad, gaviones, tierra reforzada y concreto lanzado",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "edificaciones-costa-caribe",
    title: "Edificios, Hoteles y Complejos Residenciales",
    category: "Edificación",
    location: "Barranquilla, Santa Marta y Cartagena",
    year: "Costa Colombiana",
    area: "Edificación & Turismo",
    steelTons: "Concreto Armado y Acero",
    software: "NSR-10 · BIM · Renders 3D",
    image: "/images/hero-tower.jpg",
    gallery: [
      "/images/hero-tower.jpg",
      "/images/structure-frame.jpg",
      "/images/tech-bim.jpg",
    ],
    featuredSpan: "wide",
    summary:
      "Diseño arquitectónico, cálculo estructural bajo NSR-10 y construcción de edificios modernos, hoteles frente al mar, centros comerciales y hospitales en la Costa Colombiana.",
    challenge:
      "Combinar estética arquitectónica, presupuesto viable y alta durabilidad en edificaciones costeras sometidas a viento, sismo y ambiente marino.",
    solution:
      "Modelación numérica sismorresistente NSR-10, coordinación multidisciplinaria en tecnología BIM y supervisión directa en obra.",
  },
  {
    id: "naves-industriales-soporte",
    title: "Naves Industriales, Fábricas y Estructuras de Soporte",
    category: "Industrial",
    location: "Barranquilla y Región Caribe",
    year: "Sector Industrial",
    area: "Plantas & Bodegas",
    steelTons: "Acero Estructural",
    software: "BIM · FEM · Presupuesto APU",
    image: "/images/structure-frame.jpg",
    gallery: [
      "/images/structure-frame.jpg",
      "/images/about-engineers.jpg",
      "/images/tech-fem.jpg",
    ],
    featuredSpan: "wide",
    summary:
      "Diseño estructural y ejecución civil de naves industriales, fábricas, estructuras de soporte y almacenes capaces de resistir vientos huracanados y grandes cargas de operación.",
    challenge:
      "Cubrir grandes luces operativas garantizando estabilidad de pisos, cimentaciones y resistencia estructural ante cargas industriales exigentes.",
    solution:
      "Estructuras en acero y concreto optimizadas con software FEM, cimentaciones estudiadas geotécnicamente y control de costos mediante análisis APU.",
  },
  {
    id: "puentes-estadios-obras-civiles",
    title: "Puentes, Caminos, Estadios y PTAR",
    category: "Infraestructura",
    location: "Colombia y América Latina",
    year: "Infraestructura",
    area: "Obras Civiles Mayores",
    steelTons: "Concreto & Acero",
    software: "FEM · CFD · Diseño Hidráulico",
    image: "/images/project-bridge.jpg",
    gallery: [
      "/images/project-bridge.jpg",
      "/images/tech-fem.jpg",
      "/images/tech-sig.jpg",
    ],
    featuredSpan: "standard",
    summary:
      "Vías, puentes vehiculares, estadios, canchas, PTAR y obras hidráulicas al servicio de las comunidades en Colombia y América Latina.",
    challenge:
      "Asegurar estabilidad hidráulica, estructural y geotécnica en infraestructuras de uso público sometidas a cargas máximas de servicio.",
    solution:
      "Ingeniería estructural, diseño hidráulico e hidrológico y análisis FEM/CFD para obras resilientes y sostenibles.",
  },
  {
    id: "patologia-historica-bim",
    title: "Patología Forense y Edificaciones Históricas",
    category: "BIM & Digital",
    location: "Costa Colombiana",
    year: "Ingeniería Forense",
    area: "Patrimonio & Existentes",
    steelTons: "Reforzamiento NSR-10",
    software: "Ensayos NDT · FEM · CFD",
    image: "/images/tech-bim.jpg",
    gallery: [
      "/images/tech-bim.jpg",
      "/images/project-blueprints.jpg",
      "/images/hero-tower.jpg",
    ],
    featuredSpan: "standard",
    summary:
      "Chequeo de estructuras existentes y edificaciones de valor histórico mediante métodos no destructivos, modelación numérica FEM/CFD y proyectos de reforzamiento.",
    challenge:
      "Evaluar con exactitud la seguridad estructural de edificaciones antiguas o con patologías sin afectar su integridad física ni su valor arquitectónico.",
    solution:
      "Combinación de inspección con métodos no destructivos, modelado BIM y verificación numérica FEM y CFD.",
  },
  {
    id: "viviendas-piscinas-9-pasos",
    title: "Viviendas, Piscinas, Rooftops y Licencias",
    category: "BIM & Digital",
    location: "Barranquilla y Depto. del Atlántico",
    year: "Llave en Mano",
    area: "Residencial & Spas",
    steelTons: "Concreto · Mampostería · Madera",
    software: "BIM · Renders 3D · APU",
    image: "/images/project-blueprints.jpg",
    gallery: [
      "/images/project-blueprints.jpg",
      "/images/about-engineers.jpg",
      "/images/structure-frame.jpg",
    ],
    featuredSpan: "standard",
    summary:
      "Construcción integral en 9 pasos: visitas de campo en todo el Atlántico, presupuesto APU, diseño arquitectónico-estructural, licencias en Curaduría, piscinas y garantía de 6 a 12 meses.",
    challenge:
      "Centralizar diseño, trámites de curaduría urbana, presupuesto real y ejecución sin intermediarios ni sobrecostos para el propietario.",
    solution:
      "Equipo propio con matrículas profesionales vigentes, seguimiento BIM en obra y garantía escrita sobre estructura, redes eléctricas e hidrosanitarias.",
  },
  {
    id: "geotecnia-contencion-latam",
    title: "Geotecnia, Pilotaje y Muros de Contención",
    category: "Infraestructura",
    location: "Colombia, México y Panamá",
    year: "Geotecnia",
    area: "Suelos & Taludes",
    steelTons: "Muros MSE · Gaviones · Cantiléver",
    software: "Geosintéticos · Drenes · Pilotaje",
    image: "/images/tech-sig.jpg",
    gallery: [
      "/images/tech-sig.jpg",
      "/images/project-bridge.jpg",
      "/images/tech-fem.jpg",
    ],
    featuredSpan: "standard",
    summary:
      "Cimentaciones, pilotaje, columnas de grava, inclusiones rígidas, estabilización de taludes, muros cantiléver, gaviones y refuerzo con geomallas en Colombia, México y Panamá.",
    challenge:
      "Mitigar asentamientos en suelos blandos o con riesgo de licuación, controlar arcillas expansivas y contener taludes bajo lluvias intensas.",
    solution:
      "Técnicas de drenaje vertical con precarga, mejoramiento de suelos sin pilotes rígidos y estructuras de contención flexibles o en tierra reforzada (MSE).",
  },
];

export const trustPillars = [
  {
    number: "01",
    title: "Excelencia",
    description:
      "Desde el diseño hasta la entrega final: superamos expectativas cumpliendo los más altos estándares técnicos, estéticos y de sostenibilidad.",
    icon: "target",
  },
  {
    number: "02",
    title: "Confiabilidad",
    description:
      "El socio estratégico que tu proyecto necesita, con comunicación presencial o virtual constante y presupuestos transparentes por APU.",
    icon: "handshake",
  },
  {
    number: "03",
    title: "Precisión",
    description:
      "Precisión técnica en diseño y ejecución bajo normativa NSR-10, tecnología BIM, modelación numérica FEM/CFD y software propio RCM©.",
    icon: "cpu",
  },
  {
    number: "04",
    title: "Garantía de Obra",
    description:
      "Ofrecemos garantía escrita de 6 meses a 1 año sobre estructura, redes eléctricas e instalaciones hidrosanitarias en nuestros proyectos.",
    icon: "clock",
  },
];

export const articlesData: ArticleItem[] = [
  {
    id: "tecnologia-rcm-engineering",
    category: "INNOVACIÓN PROPIA",
    readTime: "4 min lectura",
    date: "Desde 2016 · Barranquilla",
    title: "Tecnología RCM Engineering©: 13 apps propias de ingeniería",
    excerpt:
      "Suite especializada creada íntegramente por nuestro equipo en Barranquilla con 13 aplicaciones en Google Play Store para cálculo técnico.",
    image: "/images/tech-bim.jpg",
    author: "INAPROC S.A.S.",
    authorRole: "Desarrollo RCM Engineering©",
    content: [
      "Desde 2016 desarrollamos RCM Engineering©, una suite de software especializada creada íntegramente por nuestro equipo en Barranquilla para resolver desafíos complejos de la ingeniería civil y mecánica.",
      "Estos programas permiten el análisis, cálculo y diseño preciso de sistemas geotécnicos, estructurales, hidráulicos y mecánicos.",
      "Actualmente contamos con 13 aplicaciones disponibles en Google Play Store que respaldan tanto la práctica diaria de nuestros proyectos como a profesionales del sector en toda la región.",
    ],
  },
  {
    id: "ruta-9-pasos-vivienda",
    category: "METODOLOGÍA EN 9 PASOS",
    readTime: "5 min lectura",
    date: "Atlántico · Colombia",
    title: "Los 9 pasos de INAPROC para materializar tu proyecto de obra",
    excerpt:
      "De la visita de campo en el Atlántico y presupuesto APU al diseño NSR-10, ejecución BIM y entrega con garantía de 6 a 12 meses.",
    image: "/images/project-blueprints.jpg",
    author: "Departamento de Proyectos INAPROC",
    authorRole: "Diseño & Construcción Civil",
    content: [
      "Nuestra estrategia de diseño y construcción mantiene comunicación directa con el cliente en cada etapa: 1) Visitas de campo en cualquier punto del departamento del Atlántico, 2) Diagnóstico arquitectónico-estructural, 3) Presupuesto por Análisis de Precios Unitarios (APU) y 4) Comunicación continua presencial o virtual.",
      "Luego avanzamos con: 5) Diseño arquitectónico-estructural bajo norma NSR-10, 6) Cronograma de actividades, 7) Ejecución de obra apoyada en tecnología BIM para reflejar cambios en tiempo real, y 8) Entrega final con acabados de primera.",
      "Finalmente, el paso 9 respalda la inversión con una garantía de obra entre 6 meses y 1 año cubriendo aspectos estructurales, eléctricos e hidrosanitarios sin costo adicional.",
    ],
  },
  {
    id: "academia-geotechtips-cursos",
    category: "ACADEMIA & CURSOS",
    readTime: "4 min lectura",
    date: "Alianza desde 2020",
    title: "Formación especializada junto a Geotechtips Academy (+498 alumnos)",
    excerpt:
      "Compartimos nuestras metodologías en cursos virtuales de Muros de Contención, Cimentaciones y Edificios de Concreto Armado.",
    image: "/images/structure-frame.jpg",
    author: "INAPROC × Geotechtips Academy",
    authorRole: "Comunidad Hispanohablante de Geotecnia",
    content: [
      "Más allá de la ejecución de obras civiles, en INAPROC compartimos nuestro conocimiento técnico y metodologías constructivas reales con ingenieros de toda Iberoamérica.",
      "Gracias a nuestra alianza estratégica con Geotechtips Academy iniciada en enero de 2020, formamos a más de 498 alumnos activos en nuestra plataforma en línea.",
      "Nuestros cursos virtuales principales profundizan en tres pilares prácticos de la ingeniería civil: Muros de Contención, Cimentaciones y Edificios de Concreto Armado.",
    ],
  },
];
