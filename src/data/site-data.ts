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
    "Firma con sede en Barranquilla especializada en diseño arquitectónico y estructural NSR-10, ingeniería geotécnica, patología forense FEM/CFD, diseños hidráulicos y construcción civil en Colombia y más de 5 países de América Latina.",
  phone: "+57 324 225 0653",
  phoneContact: "Ing. Hazem Al Hadwi",
  secondaryPhone: "+57 301 398 2402",
  secondaryPhoneContact: "Ing. Carolina Parra",
  email: "inaproc.info@gmail.com",
  address: "Cra. 11 #30, Barranquilla, Colombia",
  schedule: "Lunes a Viernes · 8:00 a.m. – 5:00 p.m.",
  stats: [
    { value: 11, suffix: "+", label: "Años fortaleciendo Colombia (2015–2026)" },
    { value: 5, suffix: "+ países", label: "Experiencia en Latinoamérica y México" },
    { value: 8, suffix: "+", label: "Especialistas BIM & Estructuras" },
    { value: 100, suffix: "%", label: "Cumplimiento sismorresistente NSR-10" },
  ] as { value: number; suffix: string; label: string; decimals?: number }[],
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Conocimiento", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "diseno-estructural",
    title: "Diseño Estructural",
    tag: "Norma NSR-10",
    shortDescription:
      "Cálculo y modelación numérica de estructuras en concreto armado, acero estructural, mampostería y madera para edificaciones, hoteles, hospitales y puentes.",
    fullDescription:
      "Nuestros ingenieros estructurales operan en Colombia y más de 5 países de América Latina y México, diseñando estructuras sostenibles y resilientes bajo el Reglamento Colombiano de Construcción Sismo Resistente (NSR-10).",
    deliverables: [
      "Memorias de cálculo y análisis sismorresistente NSR-10",
      "Estructuras en concreto reforzado, acero, mampostería y madera",
      "Edificaciones altas, hoteles frente al mar, clínicas y naves",
      "Optimización de materiales con viabilidad técnica y presupuestal",
    ],
    normative: "NSR-10 · ACI 318 · AISC 360 · AASHTO",
    iconName: "building",
  },
  {
    id: "diseno-arquitectonico-bim",
    title: "Diseño Arquitectónico & BIM",
    tag: "BIM · HVAC · 3D",
    shortDescription:
      "Equipo multidisciplinario de arquitectos e ingenieros con tecnología BIM, coordinación HVAC y renders tridimensionales de alto impacto.",
    fullDescription:
      "Desarrollamos arquitectura interior y exterior para edificios industriales, públicos, residenciales y desarrollos urbanos, integrando paisajismo, iluminación, acústica y coordinación digital BIM.",
    deliverables: [
      "Modelado BIM multidisciplinario y coordinación HVAC",
      "Renders tridimensionales y recorridos arquitectónicos",
      "Arquitectura interior, exterior, paisajística y urbana",
      "Integración de instalaciones hidrosanitarias y eléctricas",
    ],
    normative: "BIM LOD 300–400 · ISO 19650 · POT Barranquilla",
    iconName: "layers",
  },
  {
    id: "patologia-forense",
    title: "Patología Estructural & Forense",
    tag: "FEM · CFD · NDT",
    shortDescription:
      "Chequeo de estructuras existentes y edificaciones de valor histórico con ensayos no destructivos y modelación numérica FEM y CFD.",
    fullDescription:
      "Evaluamos la vulnerabilidad y salud estructural de activos existentes o patrimoniales combinando pruebas no destructivas en sitio con simulaciones avanzadas por elementos finitos (FEM) y dinámica de fluidos (CFD).",
    deliverables: [
      "Inspección con métodos no destructivos (NDT)",
      "Modelación numérica avanzada FEM y CFD",
      "Chequeo estructural de edificaciones de valor histórico",
      "Dictámenes forenses y proyectos de reforzamiento",
    ],
    normative: "NSR-10 Cap. A.10 · ACI 562 · ASTM NDT",
    iconName: "activity",
  },
  {
    id: "geotecnia-especializada",
    title: "Ingeniería Geotécnica",
    tag: "Cimentaciones & Taludes",
    shortDescription:
      "Cimentaciones profundas, pilotaje, columnas de grava, inclusiones rígidas, estabilización de taludes, muros cantiléver, gaviones y geomallas.",
    fullDescription:
      "Resolvemos suelos blandos, arcillas expansivas y riesgos de licuación en Colombia, México y Panamá mediante técnicas avanzadas de mejoramiento de suelos y estructuras de contención.",
    deliverables: [
      "Cimentaciones superficiales, profundas y pilotaje",
      "Mejoramiento con columnas de grava e inclusiones rígidas",
      "Estabilización de taludes, drenes verticales y geosintéticos",
      "Muros de contención cantiléver, gaviones y tierra reforzada (MSE)",
    ],
    normative: "NSR-10 Título H · INVIAS · FHWA",
    iconName: "compass",
  },
  {
    id: "hidraulico-hidrologico",
    title: "Diseño Hidráulico & Piscinas",
    tag: "PTAR & Hidrosanitario",
    shortDescription:
      "Redes hidrosanitarias, plantas PTAR, estudios hidrológicos, drenajes pluviales, piscinas públicas y privadas, spas, fuentes y cascadas.",
    fullDescription:
      "Proyectamos sistemas hidráulicos eficientes y confiables tanto para infraestructura urbana y edificaciones como para complejos recreativos y hoteleros en el Caribe colombiano.",
    deliverables: [
      "Redes hidrosanitarias, agua potable y contra incendios",
      "Estudios hidrológicos, alcantarillado pluvial y PTAR",
      "Diseño hidráulico y estructural de piscinas, spas y fuentes",
      "Instalaciones eléctricas asociadas y cuartos de máquinas",
    ],
    normative: "RAS 2017 · NTC 1500 · Ley 1209 (Piscinas)",
    iconName: "shield",
  },
  {
    id: "construccion-licencias",
    title: "Construcción Civil & Licencias",
    tag: "Obra Llave en Mano",
    shortDescription:
      "Ejecución integral de obras civiles y viviendas con metodología en 9 pasos, análisis APU, garantía escrita y gestión de licencias de construcción.",
    fullDescription:
      "Acompañamos al cliente desde la visita de campo y el presupuesto APU hasta la entrega final garantizada (6 a 12 meses), gestionando adicionalmente licencias y trámites urbanísticos.",
    deliverables: [
      "Ejecución de obra con control BIM en tiempo real",
      "Presupuestos detallados por Análisis de Precios Unitarios (APU)",
      "Tramitación completa de licencias de construcción en Barranquilla",
      "Garantía de obra en estructura e instalaciones (6 a 12 meses)",
    ],
    normative: "Curadurías Urbanas · NSR-10 · RETIE",
    iconName: "hardHat",
  },
];

export const techData: TechItem[] = [
  {
    id: "bim",
    code: "01 // BIM · HVAC · 3D",
    title: "BIM",
    subtitle: "Modelado Digital y Renders 3D",
    description:
      "Coordinación arquitectónica, estructural y de instalaciones HVAC/hidrosanitarias en entorno BIM para actualizar cambios en obra sin retrabajos.",
    image: "/images/tech-bim.jpg",
    metrics: [
      { label: "Disciplinas integradas", value: "Arq + Est + MEP" },
      { label: "Control de cambios", value: "Tiempo real" },
      { label: "Nivel de detalle", value: "BIM LOD 400" },
    ],
    highlights: [
      "Renders tridimensionales fotorrealistas para aprobación del cliente",
      "Coordinación de estructuras, redes HVAC, eléctricas e hidrosanitarias",
      "Trazabilidad directa entre planos ejecutivos y presupuesto APU",
    ],
  },
  {
    id: "fem",
    code: "02 // FEM & CFD",
    title: "FEM",
    subtitle: "Modelación Numérica FEM y CFD",
    description:
      "Análisis avanzado por elementos finitos (FEM) y dinámica de fluidos (CFD) para evaluar desempeño sismorresistente NSR-10 y patología forense.",
    image: "/images/tech-fem.jpg",
    metrics: [
      { label: "Norma aplicada", value: "NSR-10" },
      { label: "Ensayos en campo", value: "NDT + FEM" },
      { label: "Simulación eólica/agua", value: "CFD 3D" },
    ],
    highlights: [
      "Chequeo de edificaciones existentes y de valor histórico",
      "Análisis de vientos huracanados y sismos en la Costa Caribe",
      "Validación de conexiones de acero, concreto y mampostería",
    ],
  },
  {
    id: "sig",
    code: "03 // GEOTECNIA & SIG",
    title: "SIG",
    subtitle: "Geotecnia, Taludes y Topografía",
    description:
      "Integración geoespacial y geotécnica para cimentaciones profundas, estabilidad de taludes, muros de contención y grandes obras viales.",
    image: "/images/tech-sig.jpg",
    metrics: [
      { label: "Alcance regional", value: "5+ países" },
      { label: "Suelos complejos", value: "Blandos / Arcilla" },
      { label: "Estabilización", value: "MSE & Pilotaje" },
    ],
    highlights: [
      "Columnas de grava e inclusiones rígidas en suelos compresibles",
      "Diseño de muros cantiléver, gaviones y refuerzo con geomallas",
      "Drenes verticales y precarga en infraestructura vial y portuaria",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "edificaciones-costa-caribe",
    title: "Edificios y Complejos Residenciales Caribe",
    category: "Edificación",
    location: "Barranquilla · Santa Marta · Cartagena",
    year: "2025",
    area: "Edificaciones Multi-nivel",
    steelTons: "Concreto & Acero",
    software: "NSR-10 · ETABS · BIM",
    image: "/images/hero-tower.jpg",
    gallery: [
      "/images/hero-tower.jpg",
      "/images/structure-frame.jpg",
      "/images/tech-bim.jpg",
    ],
    featuredSpan: "wide",
    summary:
      "Diseño arquitectónico, cálculo estructural sismorresistente NSR-10 y coordinación BIM para complejos residenciales, hoteles frente al mar y edificaciones institucionales en la Costa Colombiana.",
    challenge:
      "Garantizar durabilidad frente a ambiente marino costero, cargas de viento huracanado y eficiencia estructural en cimentaciones sobre suelos del Atlántico.",
    solution:
      "Sistemas duales optimizados bajo NSR-10, cimentaciones profundas estudiadas geotécnicamente y modelado BIM multidisciplinario con coordinación HVAC.",
  },
  {
    id: "naves-industriales-barranquilla",
    title: "Naves Industriales, Fábricas y Estructuras de Soporte",
    category: "Industrial",
    location: "Barranquilla, Atlántico",
    year: "2025",
    area: "Complejos Industriales",
    steelTons: "Acero Estructural",
    software: "SAP2000 · FEM · BIM",
    image: "/images/structure-frame.jpg",
    gallery: [
      "/images/structure-frame.jpg",
      "/images/about-engineers.jpg",
      "/images/tech-fem.jpg",
    ],
    featuredSpan: "wide",
    summary:
      "Ingeniería estructural, estructuras de soporte industrial y construcción civil para fábricas, bodegas logísticas y plantas productivas de gran luz libre.",
    challenge:
      "Cubrir grandes claros sin apoyos intermedios soportando equipos pesados, puentes grúa y pisos industriales sobre terrenos compresibles.",
    solution:
      "Pórticos en acero estructural verificados por FEM, mejoramiento de suelo con inclusiones rígidas y presupuesto controlado por APU.",
  },
  {
    id: "puentes-caminos-latam",
    title: "Puentes, Caminos y Obras Civiles Regionales",
    category: "Infraestructura",
    location: "Colombia, México y Panamá",
    year: "2024",
    area: "Obra Civil & Vial",
    steelTons: "Concreto Postensado",
    software: "FEM · CFD · Geotecnia",
    image: "/images/project-bridge.jpg",
    gallery: [
      "/images/project-bridge.jpg",
      "/images/tech-fem.jpg",
      "/images/tech-sig.jpg",
    ],
    featuredSpan: "standard",
    summary:
      "Vías, puentes vehiculares y obras civiles de gran escala que conectan territorios en Colombia y América Latina con altos estándares de estabilidad.",
    challenge:
      "Cruzar cauces y terrenos inestables mitigando socavación en pilas, asentamientos diferenciales y empujes de tierra.",
    solution:
      "Diseño estructural de superestructura y subestructura acoplado a pilotaje profundo, muros de contención cantiléver y drenaje pluvial.",
  },
  {
    id: "patologia-historica-bim",
    title: "Patología Forense, BIM y Edificaciones Históricas",
    category: "BIM & Digital",
    location: "Cartagena · Barranquilla",
    year: "2025",
    area: "Patrimonio & Comercial",
    steelTons: "Reforzamiento NSR-10",
    software: "NDT · FEM · CFD · BIM",
    image: "/images/tech-bim.jpg",
    gallery: [
      "/images/tech-bim.jpg",
      "/images/project-blueprints.jpg",
      "/images/hero-tower.jpg",
    ],
    featuredSpan: "standard",
    summary:
      "Evaluación y chequeo estructural de edificaciones existentes y de valor histórico mediante ensayos no destructivos (NDT) y gemelos numéricos FEM.",
    challenge:
      "Diagnosticar lesiones estructurales y actualizar estructuras patrimoniales a la normativa sísmica vigente sin alterar su arquitectura original.",
    solution:
      "Levantamiento BIM de alta precisión, pruebas no destructivas en campo y diseño de reforzamiento calibrado con modelación numérica FEM y CFD.",
  },
  {
    id: "viviendas-arquitectura-9-pasos",
    title: "Viviendas, Casas y Gestión Integral en 9 Pasos",
    category: "BIM & Digital",
    location: "Barranquilla y Atlántico",
    year: "2025",
    area: "Residencial & Piscinas",
    steelTons: "Mampostería & Concreto",
    software: "BIM · Renders 3D · APU",
    image: "/images/project-blueprints.jpg",
    gallery: [
      "/images/project-blueprints.jpg",
      "/images/about-engineers.jpg",
      "/images/structure-frame.jpg",
    ],
    featuredSpan: "standard",
    summary:
      "Proceso llave en mano de diseño arquitectónico, renders 3D, cálculo NSR-10, licencias de construcción, piscinas/spas y ejecución garantizada.",
    challenge:
      "Integrar diseño personalizado, control exacto de costos APU, trámites de curaduría y cronograma garantizado en un único flujo transparente.",
    solution:
      "Metodología INAPROC en 9 pasos desde la visita de campo en cualquier punto del Atlántico hasta la entrega final con garantía escrita.",
  },
  {
    id: "geotecnia-contencion-taludes",
    title: "Geotecnia, Pilotaje y Estabilización de Taludes",
    category: "Infraestructura",
    location: "Colombia · México · Panamá",
    year: "2025",
    area: "Geotecnia & PTAR",
    steelTons: "Muros MSE · Gaviones",
    software: "Geotecnia · SIG · Geosintéticos",
    image: "/images/tech-sig.jpg",
    gallery: [
      "/images/tech-sig.jpg",
      "/images/project-bridge.jpg",
      "/images/tech-fem.jpg",
    ],
    featuredSpan: "standard",
    summary:
      "Soluciones geotécnicas avanzadas: columnas de grava, inclusiones rígidas, drenes verticales, muros cantiléver, gaviones y refuerzo con geomallas.",
    challenge:
      "Controlar erosión, arcillas expansivas, licuación y fallas de talud en proyectos viales, tanques, PTAR y urbanizaciones de topografía compleja.",
    solution:
      "Ingeniería geotécnica a la medida combinando muros de tierra reforzada (MSE), estabilización química y sistemas flexibles de contención.",
  },
];

export const trustPillars = [
  {
    number: "01",
    title: "Excelencia",
    description:
      "Desde la visita inicial y el diseño conceptual hasta la entrega final de obra con acabados y estructura de primer nivel.",
    icon: "target",
  },
  {
    number: "02",
    title: "Confiabilidad",
    description:
      "El socio estratégico que tu proyecto necesita: comunicación directa, presupuestos transparentes por APU y cero sorpresas.",
    icon: "handshake",
  },
  {
    number: "03",
    title: "Precisión técnica",
    description:
      "Modelación numérica FEM y CFD, tecnología BIM y cumplimiento riguroso del reglamento sismorresistente NSR-10.",
    icon: "cpu",
  },
  {
    number: "04",
    title: "Garantía de obra",
    description:
      "Respaldo escrito de 6 meses a 1 año sobre estructura, redes hidrosanitarias y eléctricas para total tranquilidad.",
    icon: "clock",
  },
];

export const articlesData: ArticleItem[] = [
  {
    id: "diseno-sismorresistente-nsr10",
    category: "NORMATIVA NSR-10",
    readTime: "5 min lectura",
    date: "INAPROC Técnica",
    title: "Diseños bajo el techo de la NSR-10: seguridad y sostenibilidad",
    excerpt:
      "Cómo el cálculo estructural sismorresistente optimiza concreto y acero en edificaciones de la Costa Colombiana y Latinoamérica.",
    image: "/images/structure-frame.jpg",
    author: "Equipo Estructural INAPROC S.A.S.",
    authorRole: "Barranquilla, Colombia",
    content: [
      "En INAPROC basamos cada proyecto estructural en el Reglamento Colombiano de Construcción Sismo Resistente (NSR-10), empleando programas avanzados de modelación numérica para responder a sismos, vientos huracanados y cargas de servicio exigentes.",
      "Nuestro enfoque integra la estética arquitectónica con la viabilidad presupuestal: optimizamos secciones en concreto armado, acero estructural, mampostería y madera para evitar sobredimensionamientos innecesarios.",
      "Desde hoteles frente al mar y hospitales hasta estadios, naves industriales y puentes, cada obra se convierte en un reto de ingeniería resuelto con estabilidad y largo ciclo de vida.",
    ],
  },
  {
    id: "metodologia-9-pasos-bim",
    category: "CONSTRUCCIÓN & BIM",
    readTime: "4 min lectura",
    date: "Metodología INAPROC",
    title: "Del terreno a la entrega garantizada: nuestra ruta en 9 pasos",
    excerpt:
      "Visita de campo en el Atlántico, diagnóstico, presupuesto APU, diseño BIM y ejecución con garantía de 6 a 12 meses.",
    image: "/images/project-blueprints.jpg",
    author: "Dirección de Proyectos INAPROC",
    authorRole: "Arquitectura & Construcción Civil",
    content: [
      "Un proyecto exitoso comienza en el terreno. Por ello iniciamos con visitas técnicas en cualquier punto de Barranquilla y el departamento del Atlántico para verificar dimensiones, estructuras existentes y estudios de suelo.",
      "Tras el diagnóstico elaboramos un presupuesto real mediante Análisis de Precios Unitarios (APU) y definimos junto al cliente la distribución arquitectónica, renders 3D, diseño estructural NSR-10 y trámites de licencia de construcción.",
      "Durante la ejecución nos apoyamos en tecnología BIM para reflejar cualquier modificación en tiempo real, culminando con entrega a tiempo y garantía escrita.",
    ],
  },
  {
    id: "patologia-geotecnia-fem",
    category: "PATOLOGÍA & GEOTECNIA",
    readTime: "6 min lectura",
    date: "Ingeniería Forense",
    title: "Patología estructural, modelación FEM/CFD y mejoramiento de suelos",
    excerpt:
      "Ensayos no destructivos en edificaciones históricas y soluciones geotécnicas para suelos blandos en Colombia, México y Panamá.",
    image: "/images/tech-bim.jpg",
    author: "Área Forense y Geotecnia INAPROC",
    authorRole: "Ingeniería Especializada",
    content: [
      "Cuando una estructura existente o patrimonial presenta fisuras, asentamientos o cambios de uso, aplicamos métodos no destructivos (NDT) combinados con modelación numérica FEM y CFD para diagnosticar con exactitud su capacidad real.",
      "En el ámbito geotécnico, enfrentamos suelos blandos, arcillas expansivas y riesgo de licuación mediante columnas de grava, inclusiones rígidas, drenes verticales con precarga y refuerzo con geomallas o muros MSE.",
      "Esta sinergia entre diagnóstico forense, geotecnia y diseño estructural protege la inversión y extiende la vida útil de cada obra civil.",
    ],
  },
];
