/* ─ Navigation ─ */
export const NAV = [
  { label: "Inicio",       path: "/" },
  { label: "Sobre mí",     path: "/about" },
  { label: "Habilidades",  path: "/skills" },
  { label: "Experiencia",  path: "/experience" },
  { label: "Proyectos",    path: "/projects" },
  { label: "Contacto",     path: "/contact" },
];

/* ─ Skills ─ */
export const SKILLS: { label: string; items: string[] }[] = [
  { label: "Lenguajes",      items: ["PHP", "JavaScript", "TypeScript", "C#", "Visual Basic", "CSS", "HTML5"] },
  { label: "Frameworks",     items: ["React", "Vue.js", "Angular", "Ionic", "Quasar", ".NET", "Vite", "Vuetify", "Material UI"] },
  { label: "Bases de datos", items: ["MySQL", "SQL Server", "Firebird"] },
  { label: "Herramientas",   items: ["Git", "Photoshop", "Soporte Técnico", "Diseño Gráfico", "Marketing Digital"] },
];

/* ─ Experience ─ */
export interface ExperienceItem {
  id: number;
  date: string;
  company: string;
  role: string;
  mode: string;
  location: string;
  activities: string[];
  tech: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    date: "Ago 2025 – Ene 2026",
    company: "HCO Consultoría y Servicios",
    role: "Desarrollador Sénior",
    mode: "Remoto · Part time",
    location: "Ciudad del Carmen, Campeche",
    activities: [
      "Desarrollo de soluciones de software a nivel senior",
      "Consultoría técnica en proyectos empresariales",
      "Revisión y arquitectura de sistemas",
    ],
    tech: ["React", "JavaScript", "C#", "MySQL"],
  },
  {
    id: 2,
    date: "May 2024 – Actualidad",
    company: "Corporativo Industrial y Comercial S.A. de C.V.",
    role: "Ingeniero de Software",
    mode: "Presencial",
    location: "Ciudad del Carmen, Campeche",
    activities: [
      "Desarrollo de software a medida para procesos industriales",
      "Análisis y administración de bases de datos",
      "Diseño de arquitectura de software",
    ],
    tech: ["C#", "SQL Server", "React", "MySQL"],
  },
  {
    id: 3,
    date: "Jul 2020 – May 2024",
    company: "LarissaMX",
    role: "Desarrollador Jefe de Proyectos",
    mode: "Remoto",
    location: "Carmen, Campeche",
    activities: [
      "Desarrollo de aplicaciones para empresas de perforación usando ReactJs y .NET",
      "Liderazgo del equipo de desarrollo",
      "Diseño gráfico y soporte técnico",
    ],
    tech: ["React", "C#", "PHP", "MySQL", "Vue.js", "SQL Server", "Photoshop"],
  },
  {
    id: 4,
    date: "Oct 2021 – Ene 2024",
    company: "Grúas Móviles del Golfo",
    role: "Desarrollador de Software",
    mode: "Presencial",
    location: "Carmen, Campeche",
    activities: [
      "Desarrollo de software para gestión de grúas y mantenimiento",
      "Diseño gráfico y branding",
      "Desarrollo front end",
    ],
    tech: ["PHP", "MySQL", "Vue.js", "Photoshop"],
  },
  {
    id: 5,
    date: "Nov 2020 – Oct 2021",
    company: "CIMAR SC",
    role: "Auxiliar de TI",
    mode: "Presencial",
    location: "Carmen, Campeche",
    activities: [
      "Desarrollo de sistemas",
      "Soporte técnico e instalación de redes",
      "Diseño gráfico y marketing digital",
    ],
    tech: ["PHP", "MySQL", "C#", "Photoshop"],
  },
  {
    id: 6,
    date: "Ene 2020 – Dic 2021",
    company: "GC Consultoría Informática",
    role: "Desarrollador Full Stack",
    mode: "Remoto",
    location: "México",
    activities: ["Desarrollo de software web", "Diseño gráfico"],
    tech: ["PHP", "MySQL", "JavaScript", "React", "Photoshop"],
  },
  {
    id: 7,
    date: "Ene 2020 – Abr 2020",
    company: "Tecnofire",
    role: "Auxiliar en Área de Compras",
    mode: "Presencial",
    location: "México",
    activities: ["Control de inventario y gestión de proveedores"],
    tech: [],
  },
  {
    id: 8,
    date: "Ene 2019 – Feb 2020",
    company: "2MJ Consul en Informática",
    role: "Desarrollador Móvil",
    mode: "Presencial · Part time",
    location: "México",
    activities: [
      "Desarrollo de aplicaciones móviles con Ionic 4",
      "Captura de información sobre mantenimientos de tuberías",
    ],
    tech: ["Ionic", "Angular", "C#", "MySQL", "SQL Server"],
  },
];

/* ─ Projects ─ */
export interface ProjectItem {
  id: number;
  name: string;
  type: string;
  description: string;
  tech: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    name: "Sistema de Gestión de Mantenimiento",
    type: "Web App",
    description: "Control y seguimiento de mantenimientos de tuberías con reportes y trazabilidad completa.",
    tech: ["Angular", "Ionic", "C#", "SQL Server"],
  },
  {
    id: 2,
    name: "Plataforma ERP — LarissaMX",
    type: "ERP",
    description: "Sistema ERP modular para control de inventario, ventas, compras y reportes en tiempo real.",
    tech: ["Vue.js", "React", "PHP", "MySQL"],
  },
  {
    id: 3,
    name: "Sistema de Control de Grúas",
    type: "Web App",
    description: "Gestión operativa de flotilla de grúas: asignación de trabajos, seguimiento y facturación.",
    tech: ["Vue.js", "PHP", "MySQL"],
  },
  {
    id: 4,
    name: "App Móvil de Mantenimiento",
    type: "Mobile",
    description: "App híbrida para registro de órdenes de mantenimiento en campo con soporte offline.",
    tech: ["Ionic", "Angular", "C#", "MySQL"],
  },
  {
    id: 5,
    name: "Portafolio Personal",
    type: "Sitio Web",
    description: "Sitio web personal con diseño minimalista, modo oscuro y secciones de experiencia y proyectos.",
    tech: ["React", "TypeScript", "Vite"],
  },
];
