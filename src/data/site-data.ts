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
  name: "INNOVEC",
  tagline: "Ingeniería & Diseño Estructural",
  description:
    "Firma especializada en diseño estructural de alta complejidad, modelado BIM integral, análisis sísmico avanzado y gerencia técnica de obras.",
  phone: "+52 (55) 4890-3210",
  email: "contacto@innovec-ing.com",
  address: "Av. Paseo de la Reforma 412, Piso 14 · CDMX",
  schedule: "Lun – Vie · 8:30 a 18:30 hrs",
  stats: [
    { value: 15, suffix: "+", label: "Años de experiencia" },
    { value: 120, suffix: "+", label: "Proyectos ejecutados" },
    { value: 350, suffix: "k m²", label: "Superficie diseñada" },
    { value: 99.8, suffix: "%", label: "Precisión BIM LOD 400", decimals: 1 },
  ],
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
    tag: "Core Engineering",
    shortDescription:
      "Cálculo y optimización de estructuras de acero, concreto reforzado y sistemas mixtos bajo normativas sísmicas de alto desempeño.",
    fullDescription:
      "Desarrollamos ingeniería de detalle para torres corporativas, complejos residenciales y naves industriales, optimizando cuantías de acero y concreto sin comprometer la seguridad estructural.",
    deliverables: [
      "Memoria de cálculo estructural certificada",
      "Planos constructivos y detalles de conexiones",
      "Análisis modal espectral y tiempo-historia",
      "Optimización de cimentaciones profundas y superficiales",
    ],
    normative: "NTC-CDMX · ACI 318 · AISC 360 · ASCE 7",
    iconName: "building",
  },
  {
    id: "modelado-bim",
    title: "Modelado BIM Integral",
    tag: "LOD 300 – 400",
    shortDescription:
      "Gemelos digitales multidisciplinarios con detección temprana de interferencias y cuantificación exacta de volúmenes de obra.",
    fullDescription:
      "Integramos arquitectura, estructura e instalaciones MEP en entornos colaborativos en la nube para eliminar retrabajos en obra y acelerar la toma de decisiones ejecutivas.",
    deliverables: [
      "Modelos federados Revit / IFC LOD 400",
      "Reportes de clash detection en Navisworks",
      "Extracción automatizada de cuantificaciones (5D)",
      "Recorridos virtuales y coordinación en tiempo real",
    ],
    normative: "ISO 19650 · OpenBIM · buildingSMART",
    iconName: "layers",
  },
  {
    id: "analisis-fem",
    title: "Análisis Sísmico y FEM",
    tag: "Simulación Avanzada",
    shortDescription:
      "Simulación por elementos finitos para evaluar concentraciones de esfuerzo, vibraciones, viento y desempeño no lineal.",
    fullDescription:
      "Aplicamos modelos matemáticos de alta densidad para predecir el comportamiento real de conexiones críticas, losas postensadas y puentes ante cargas extremas.",
    deliverables: [
      "Análisis no lineal Pushover y por desempeño",
      "Modelado de conexiones metálicas complejas",
      "Evaluación de vulnerabilidad y refuerzo sísmico",
      "Mapas térmicos de esfuerzos y deformaciones",
    ],
    normative: "FEMA P-58 · Eurocode 8 · AISC Seismic",
    iconName: "activity",
  },
  {
    id: "consultoria-tecnica",
    title: "Consultoría y Revisión por Pares",
    tag: "Auditoría Técnica",
    shortDescription:
      "Dictámenes estructurales, ingeniería de valor y peritajes especializados para maximizar la rentabilidad de tu inversión.",
    fullDescription:
      "Acompañamos a desarrolladores y fondos de inversión desde la etapa conceptual para validar factibilidad, reducir costos de estructura hasta un 14% y mitigar riesgos.",
    deliverables: [
      "Revisión independiente de proyectos (Peer Review)",
      "Ingeniería de valor sobre proyectos existentes",
      "Dictámenes de seguridad estructural post-sismo",
      "Estudios de factibilidad técnico-económica",
    ],
    normative: "DRO / Corresponsable en Seguridad Estructural",
    iconName: "compass",
  },
  {
    id: "supervision-obra",
    title: "Supervisión Estructural de Obra",
    tag: "Control en Sitio",
    shortDescription:
      "Aseguramiento de calidad en campo, control de soldaduras, tensado de torones y cumplimiento estricto de especificaciones.",
    fullDescription:
      "Nuestros ingenieros residentes verifican cada etapa crítica en obra mediante protocolos digitales, bitácoras fotogramétricas y pruebas no destructivas.",
    deliverables: [
      "Inspección de armado, acero estructural y colados",
      "Control de calidad de soldadura (UT / líquidos penetrantes)",
      "Seguimiento semanal con nubes de puntos y drones",
      "Reportes ejecutivos de avance y desviaciones",
    ],
    normative: "AWS D1.1 · ASTM · Protocolos QA/QC",
    iconName: "hardHat",
  },
  {
    id: "infraestructura-civil",
    title: "Infraestructura y Puentes",
    tag: "Obra Civil Mayor",
    shortDescription:
      "Diseño de puentes vehiculares, viaductos, pasos a desnivel y obras hidráulicas con integración SIG y geotecnia.",
    fullDescription:
      "Proyectamos infraestructura resiliente de largo ciclo de vida, combinando modelado hidráulico-geotécnico con análisis dinámico de puentes atirantados y cajón.",
    deliverables: [
      "Diseño de superestructura y subestructura de puentes",
      "Interacción suelo-estructura en pilas y estribos",
      "Estudios topográficos LiDAR e integración SIG",
      "Planes de mantenimiento e instrumentación estructural",
    ],
    normative: "AASHTO LRFD · SCT · ASTM",
    iconName: "shield",
  },
];

export const techData: TechItem[] = [
  {
    id: "bim",
    code: "01 // BIM LOD 400",
    title: "BIM",
    subtitle: "Building Information Modeling",
    description:
      "Coordinación tridimensional inteligente que conecta cálculo estructural, detallado de acero/concreto y presupuesto en un único gemelo digital vivo.",
    image: "/images/tech-bim.jpg",
    metrics: [
      { label: "Reducción de retrabajos", value: "-42%" },
      { label: "Precisión de metrados", value: "99.8%" },
      { label: "Nivel de detalle", value: "LOD 400" },
    ],
    highlights: [
      "Detección automática de colisiones MEP vs. Estructura",
      "Generación directa de planos de taller y despiece",
      "Trazabilidad completa bajo estándar ISO 19650",
    ],
  },
  {
    id: "fem",
    code: "02 // ANÁLISIS FEM",
    title: "FEM",
    subtitle: "Método de Elementos Finitos",
    description:
      "Simulación computacional de esfuerzos, desplazamientos y respuesta sísmica no lineal para validar cada nodo crítico antes de fabricar una sola pieza.",
    image: "/images/tech-fem.jpg",
    metrics: [
      { label: "Malla de elementos", value: "2.4M nodos" },
      { label: "Ahorro en acero", value: "12–16%" },
      { label: "Factor de seguridad", value: "1.85x" },
    ],
    highlights: [
      "Mapas de esfuerzo Von Mises y pandeo local",
      "Análisis dinámico tiempo-historia y espectro sísmico",
      "Validación de conexiones híbridas acero-concreto",
    ],
  },
  {
    id: "sig",
    code: "03 // SIG & LIDAR",
    title: "SIG",
    subtitle: "Sistemas de Información Geográfica",
    description:
      "Integración geoespacial con fotogrametría y nubes de puntos LiDAR para analizar topografía, cuencas y emplazamientos de infraestructura.",
    image: "/images/tech-sig.jpg",
    metrics: [
      { label: "Precisión LiDAR", value: "±1.5 cm" },
      { label: "Cobertura aérea", value: "500 ha/día" },
      { label: "Capas geodésicas", value: "24 capas" },
    ],
    highlights: [
      "Modelos digitales de elevación (MDE) de alta densidad",
      "Cruce de amenazas geotécnicas e hidrológicas",
      "Seguimiento georreferenciado de avance de obra",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "torre-meridian",
    title: "Torre Corporativa Meridian",
    category: "Edificación",
    location: "Ciudad de México",
    year: "2025",
    area: "48,500 m²",
    steelTons: "6,400 ton",
    software: "ETABS · Tekla · Revit BIM",
    image: "/images/hero-tower.jpg",
    gallery: [
      "/images/hero-tower.jpg",
      "/images/structure-frame.jpg",
      "/images/tech-bim.jpg",
    ],
    featuredSpan: "wide",
    summary:
      "Torre de 34 niveles con exoesqueleto diagrid de acero de alta resistencia y núcleo central de concreto postensado en zona de alta sismicidad.",
    challenge:
      "Lograr plantas libres de columnas interiores con claros de 14 metros minimizando la deriva lateral ante sismos severos.",
    solution:
      "Implementamos un sistema dual con diagonales perimetrales acopladas mediante análisis no lineal tiempo-historia y coordinación BIM LOD 400.",
  },
  {
    id: "complejo-eje-central",
    title: "Centro Logístico & Corporativo Eje",
    category: "Industrial",
    location: "Monterrey, N.L.",
    year: "2025",
    area: "62,000 m²",
    steelTons: "4,850 ton",
    software: "SAP2000 · Navisworks · BIM",
    image: "/images/structure-frame.jpg",
    gallery: [
      "/images/structure-frame.jpg",
      "/images/about-engineers.jpg",
      "/images/tech-fem.jpg",
    ],
    featuredSpan: "wide",
    summary:
      "Estructura modular híbrida de concreto prefabricado y marcos rígidos metálicos diseñada para montaje acelerado en 7 meses.",
    challenge:
      "Soportar cargas dinámicas de puentes grúa de 25 toneladas optimizando la cimentación en suelo heterogéneo.",
    solution:
      "Diseñamos marcos arriostrados excéntricos con conexiones precalificadas y modelado de interacción suelo-estructura por elementos finitos.",
  },
  {
    id: "puente-bahia-sur",
    title: "Puente Atirantado Bahía Sur",
    category: "Infraestructura",
    location: "Veracruz",
    year: "2024",
    area: "1,180 m luz",
    steelTons: "9,200 ton",
    software: "MIDAS Civil · ANSYS · SIG",
    image: "/images/project-bridge.jpg",
    gallery: [
      "/images/project-bridge.jpg",
      "/images/tech-fem.jpg",
      "/images/tech-sig.jpg",
    ],
    featuredSpan: "standard",
    summary:
      "Viaducto marítimo atirantado de cuatro carriles con pilones de concreto de alto desempeño resistentes a ambiente marino agresivo.",
    challenge:
      "Estabilidad aeroelástica frente a rachas huracanadas superiores a 220 km/h y socavación en pilas profundas.",
    solution:
      "Simulación CFD acoplada a análisis FEM de cables y sección cajón aerodinámica monitoreada con sensores de fibra óptica.",
  },
  {
    id: "gemelo-digital-horizonte",
    title: "Gemelo Digital Campus Horizonte",
    category: "BIM & Digital",
    location: "Guadalajara, Jal.",
    year: "2025",
    area: "31,200 m²",
    steelTons: "3,150 ton",
    software: "Revit · Tekla · BIM 360",
    image: "/images/tech-bim.jpg",
    gallery: [
      "/images/tech-bim.jpg",
      "/images/project-blueprints.jpg",
      "/images/hero-tower.jpg",
    ],
    featuredSpan: "standard",
    summary:
      "Coordinación integral BIM LOD 400 de campus hospitalario y de investigación con cero interferencias críticas antes del inicio de obra.",
    challenge:
      "Integrar más de 14 disciplinas técnicas en espacios técnicos reducidos manteniendo plena trazabilidad de costos y tiempos.",
    solution:
      "Flujo OpenBIM federado en la nube con detección automatizada semanal y extracción directa de fabricación de acero.",
  },
  {
    id: "estacion-intermodal-norte",
    title: "Plan Maestro & Ingeniería de Detalle",
    category: "BIM & Digital",
    location: "Querétaro",
    year: "2024",
    area: "24,800 m²",
    steelTons: "2,900 ton",
    software: "Revit · IDEA StatiCa · CAD",
    image: "/images/project-blueprints.jpg",
    gallery: [
      "/images/project-blueprints.jpg",
      "/images/about-engineers.jpg",
      "/images/structure-frame.jpg",
    ],
    featuredSpan: "standard",
    summary:
      "Desarrollo completo de ingeniería ejecutiva, maquetación paramétrica y revisión por pares para hub corporativo y cultural.",
    challenge:
      "Voladizos arquitectónicos de 11 metros de luz sin apoyos visibles en fachadas acristaladas.",
    solution:
      "Armaduras Vierendeel integradas en entrepisos con verificación FEM de deflexiones a largo plazo y vibración peatonal.",
  },
  {
    id: "corredor-topografico-sig",
    title: "Corredor Vial & Mapeo LiDAR SIG",
    category: "Infraestructura",
    location: "Puebla – Oaxaca",
    year: "2025",
    area: "42 km traza",
    steelTons: "5,100 ton",
    software: "ArcGIS · Civil 3D · LiDAR",
    image: "/images/tech-sig.jpg",
    gallery: [
      "/images/tech-sig.jpg",
      "/images/project-bridge.jpg",
      "/images/tech-fem.jpg",
    ],
    featuredSpan: "standard",
    summary:
      "Levantamiento geoespacial de precisión y diseño estructural de cinco viaductos en topografía montañosa compleja.",
    challenge:
      "Cruzar fallas geotécnicas y cañadas profundas minimizando el impacto ambiental y movimiento de tierras.",
    solution:
      "Combinamos vuelos LiDAR de alta densidad con optimización paramétrica de pilas y trazado en entorno SIG 3D.",
  },
];

export const trustPillars = [
  {
    number: "01",
    title: "Precisión técnica",
    description:
      "Cálculos auditados bajo normativas internacionales con tolerancias milimétricas en fabricación y montaje.",
    icon: "target",
  },
  {
    number: "02",
    title: "Eficiencia en plazos",
    description:
      "Metodologías BIM colaborativas que eliminan interferencias en obra y reducen hasta 30% los tiempos de entrega.",
    icon: "clock",
  },
  {
    number: "03",
    title: "Innovación digital",
    description:
      "Simulación FEM, nubes de puntos LiDAR y automatización paramétrica para optimizar cada tonelada de acero.",
    icon: "cpu",
  },
  {
    number: "04",
    title: "Acompañamiento integral",
    description:
      "Desde el anteproyecto conceptual hasta la recepción final en campo junto a tu equipo constructor.",
    icon: "handshake",
  },
];

export const articlesData: ArticleItem[] = [
  {
    id: "diseno-estructural-seguridad",
    category: "INGENIERÍA SÍSMICA",
    readTime: "5 min lectura",
    date: "Octubre 2025",
    title: "¿Qué es el diseño estructural y por qué define el éxito de una obra?",
    excerpt:
      "Más allá de cumplir con reglamentos, una estructura bien concebida equilibra seguridad resiliente, esbeltez arquitectónica y rentabilidad.",
    image: "/images/structure-frame.jpg",
    author: "Ing. Valeria Mendoza, M.Sc.",
    authorRole: "Directora de Ingeniería Estructural",
    content: [
      "El diseño estructural es la columna vertebral invisible de cualquier edificación o infraestructura. Cuando se aborda desde las fases tempranas del proyecto arquitectónico, permite liberar espacios, reducir el peso propio de la obra y optimizar significativamente la cimentación.",
      "En zonas de alta actividad sísmica o vientos extremos, el enfoque moderno ya no se limita a evitar el colapso: el diseño basado en desempeño busca garantizar la continuidad operativa inmediata tras un evento extraordinario, protegiendo tanto vidas humanas como el valor patrimonial del inmueble.",
      "Al combinar criterios normativos (NTC, ACI, AISC) con herramientas de simulación no lineal, logramos identificar exactamente dónde fluye la energía sísmica y concentrar la ductilidad en fusibles estructurales fáciles de inspeccionar.",
    ],
  },
  {
    id: "optimizacion-bim-acero",
    category: "METODOLOGÍA BIM",
    readTime: "4 min lectura",
    date: "Noviembre 2025",
    title: "Optimización de acero y concreto con modelado BIM LOD 400",
    excerpt:
      "Cómo la coordinación multidisciplinaria temprana evita sobrecostos en obra y convierte los planos en gemelos digitales listos para fabricar.",
    image: "/images/project-blueprints.jpg",
    author: "Arq. & Ing. Carlos Ramírez",
    authorRole: "Líder de Coordinación BIM",
    content: [
      "Históricamente, los cambios de último minuto en obra por cruces entre ductos electromecánicos y trabes estructurales representaban entre un 8% y un 15% de sobrecosto en proyectos complejos.",
      "Con un modelo federado en nivel LOD 400, cada placa base, perno de anclaje, varilla traslapada y paso de instalación queda resuelto virtualmente antes de movilizar maquinaria al sitio.",
      "El resultado directo para desarrolladores y constructoras es una lista exacta de materiales (BOM), cronogramas 4D sincronizados con suministros y cero sorpresas durante el montaje.",
    ],
  },
  {
    id: "fem-inteligencia-digital",
    category: "TECNOLOGÍA FEM",
    readTime: "6 min lectura",
    date: "Noviembre 2025",
    title: "El futuro de la ingeniería: FEM y simulación avanzada aplicada",
    excerpt:
      "De modelos simplificados a mallas tridimensionales de millones de nodos que predicen esfuerzos reales en conexiones críticas.",
    image: "/images/tech-bim.jpg",
    author: "Dr. Sebastián Ortiz",
    authorRole: "Especialista en Análisis Avanzado",
    content: [
      "Durante décadas, muchas conexiones atípicas de acero y nodos de concreto se diseñaban con hipótesis conservadoras que sobredimensionaban espesores y soldaduras.",
      "Hoy, el análisis por elementos finitos (FEM) permite someter gemelos computacionales de conexiones, losas y puentes a miles de combinaciones de carga en cuestión de minutos, visualizando con precisión milimétrica zonas de plastificación o pandeo local.",
      "Esta capacidad analítica transforma la arquitectura audaz en proyectos constructivamente viables, eficientes y certificados.",
    ],
  },
];

