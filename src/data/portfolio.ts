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
  {
    label: "Lenguajes",
    items: ["PHP", "JavaScript", "TypeScript", "C#", "Visual Basic", "Python", "GDScript", "CSS", "HTML5"],
  },
  {
    label: "Frameworks & Libs",
    items: ["React", "Vue.js", "Angular", "Ionic", "Flutter", "Quasar", ".NET", "FastAPI", "Vite", "Vuetify", "Material UI", "Godot"],
  },
  {
    label: "Bases de datos",
    items: ["MySQL", "SQL Server", "PostgreSQL", "MongoDB", "Firebird"],
  },
  {
    label: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Linux / Bash"],
  },
  {
    label: "Despliegue & APIs",
    items: ["Vercel", "IIS", "cPanel", "PM2", "Nginx", "SSH", "REST APIs", "WebSockets", "Swagger / OpenAPI", "GitHub Webhooks"],
  },
  {
    label: "Diseño & Marketing",
    items: ["Photoshop", "Figma", "Diseño Gráfico", "UI / UX", "Marketing Digital", "SEO"],
  },
  {
    label: "Habilidades",
    items: ["Soporte Técnico", "Liderazgo de Equipos", "Gestión de Proyectos", "Análisis de Requerimientos", "Metodologías Ágiles", "Documentación Técnica"],
  },
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
export interface RepoLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: number;
  name: string;
  type: string;
  description: string;
  tech: string[];
  repos: RepoLink[];
  url?: string;
  folder?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    name: "Arcan MMORPG",
    folder: "arcan-mmorpg",
    type: "Game / Full Stack",
    description: "MMORPG en desarrollo con mundo persistente, sistema de combate en tiempo real, economía de jugadores y narrativa expansiva. Arquitectura distribuida con servidor de juego dedicado y cliente web/desktop.",
    tech: ["TypeScript", "React", "C#", ".NET", "MySQL", "WebSockets"],
    url: "https://github.com/asanchezx96/arcan-client",
    repos: [
      { label: "arcan-client", url: "https://github.com/asanchezx96/arcan-client" },
      { label: "arcan-server", url: "https://github.com/asanchezx96/arcan-server" },
      { label: "arcan-shared", url: "https://github.com/asanchezx96/arcan-shared" },
    ],
  },
  {
    id: 2,
    name: "Arcan Warspace",
    folder: "arcan-warspace",
    type: "Game / Full Stack",
    description: "Juego de estrategia espacial en tiempo real ambientado en el universo Arcan. Batallas entre flotas, conquista de sectores, diplomacia entre facciones y economía galáctica dinámica.",
    tech: ["TypeScript", "React", "C#", ".NET", "MySQL", "WebSockets"],
    url: "https://github.com/asanchezx96/warspace-client",
    repos: [
      { label: "warspace-client", url: "https://github.com/asanchezx96/warspace-client" },
      { label: "warspace-server", url: "https://github.com/asanchezx96/warspace-server" },
      { label: "warspace-assets", url: "https://github.com/asanchezx96/warspace-assets" },
    ],
  },
  {
    id: 3,
    name: "GuardSpace",
    folder: "guardspace",
    type: "Dev Tool / Workspace",
    description: "Plataforma para guardar y restaurar workspaces de desarrollo completos. Cada workspace agrupa múltiples repositorios, archivos de configuración, documentación y tareas pendientes en un solo lugar. Si cambias de equipo, se te daña el equipo o simplemente necesitas retomar un proyecto desde cero, GuardSpace te permite restaurar todo tu entorno de trabajo exactamente como lo dejaste — sin perder ningún contexto.",
    tech: ["Vue.js", "TypeScript", "C#", ".NET", "SQL Server", "WebSockets"],
    url: "https://github.com/asanchezx96/guardspace-web",
    repos: [
      { label: "guardspace-web", url: "https://github.com/asanchezx96/guardspace-web" },
      { label: "guardspace-api", url: "https://github.com/asanchezx96/guardspace-api" },
      { label: "guardspace-mobile", url: "https://github.com/asanchezx96/guardspace-mobile" },
    ],
  },
  {
    id: 4,
    name: "IA Agent Console",
    folder: "ia-agent-console",
    type: "Dev Tool / GCP",
    description: "Herramienta de escritorio/web que centraliza la gestión de credenciales de Google Cloud Platform (GCP) sin necesidad de usar la terminal. Permite autenticarse con cuentas de GCP, seleccionar proyectos, gestionar service accounts, generar tokens y ejecutar operaciones directamente desde una interfaz gráfica intuitiva — eliminando la fricción del flujo de trabajo con gcloud CLI en el día a día.",
    tech: ["React", "TypeScript", "Python", "FastAPI", "GCP", "OAuth 2.0"],
    url: "https://github.com/asanchezx96/ia-agent-console",
    repos: [
      { label: "ia-agent-console", url: "https://github.com/asanchezx96/ia-agent-console" },
      { label: "ia-agent-core", url: "https://github.com/asanchezx96/ia-agent-core" },
    ],
  },
  {
    id: 5,
    name: "IntPro RH",
    folder: "intpro-rh",
    type: "ERP / Recursos Humanos",
    description: "Sistema integral de gestión de recursos humanos: nómina, control de asistencia, expedientes digitales, evaluaciones de desempeño y reportes gerenciales en tiempo real.",
    tech: ["React", "C#", ".NET", "SQL Server", "TypeScript"],
    url: "https://github.com/asanchezx96/intpro-rh-web",
    repos: [
      { label: "intpro-rh-web", url: "https://github.com/asanchezx96/intpro-rh-web" },
      { label: "intpro-rh-api", url: "https://github.com/asanchezx96/intpro-rh-api" },
      { label: "intpro-rh-mobile", url: "https://github.com/asanchezx96/intpro-rh-mobile" },
    ],
  },
  {
    id: 6,
    name: "SavEnv",
    folder: "savenv",
    type: "SaaS / Dev Tool",
    description: "Plataforma segura de gestión de variables de entorno con arquitectura zero-knowledge: las variables se encriptan en el cliente antes de llegar al servidor, por lo que nadie más puede leerlas. Soporta jerarquía completa de organizaciones: compañías, equipos con roles independientes, proyectos y asignación de equipos a proyectos. Cada miembro accede únicamente a las variables que le corresponden según su rol. Ideal para equipos que trabajan con múltiples entornos (dev, staging, prod) sin exponer credenciales sensibles.",
    tech: ["Vue.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "AES-256"],
    url: "https://github.com/asanchezx96/savenv-web",
    repos: [
      { label: "savenv-web", url: "https://github.com/asanchezx96/savenv-web" },
      { label: "savenv-api", url: "https://github.com/asanchezx96/savenv-api" },
      { label: "savenv-reports", url: "https://github.com/asanchezx96/savenv-reports" },
    ],
  },
  {
    id: 7,
    name: "HCO Databoard",
    folder: "hco-databoard",
    type: "Dashboard / Business Intelligence",
    description: "Dashboard empresarial para HCO Consultoría y Servicios: visualización de KPIs en tiempo real, gestión de reportes, análisis de datos operativos y panel administrativo centralizado.",
    tech: ["React", "JavaScript", "C#", "MySQL"],
    url: "https://github.com/asanchezx96/hco-databoard",
    repos: [
      { label: "hco-databoard", url: "https://github.com/asanchezx96/hco-databoard" },
      { label: "hco-databoard-api", url: "https://github.com/asanchezx96/hco-databoard-api" },
    ],
  },
];
