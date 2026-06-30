import { useState, useEffect } from "react";
import img from "../assets/yo.jpeg";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Moon,
  Sun,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Linkedin,
  Terminal,
  Laptop,
  Database,
  PenTool,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "@/stores/useTheme";
import { NAV, SKILLS, EXPERIENCE, PROJECTS } from "@/data/portfolio";

/* ═══════════════════════════════════════════════════════════
   HELPERS & DATA MAPPING
   We map the paths from portfolio.ts to anchors
═══════════════════════════════════════════════════════════ */
const SECTION_MAP: Record<string, string> = {
  "/": "hero",
  "/about": "about",
  "/skills": "skills",
  "/experience": "experience",
  "/projects": "projects",
  "/contact": "contact",
};

const go = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 70;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/* ═══════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════ */
function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = Object.values(SECTION_MAP);
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-opacity-80 backdrop-blur-lg border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
      style={{ background: scrolled ? "var(--bg)" : "transparent" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => go("hero")}
          className="text-[var(--txt)] font-mono font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          <span className="text-[var(--primary)]">&lt;</span>
          asv
          <span className="text-[var(--primary)]">/&gt;</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 glass px-8 py-2 rounded-full border border-[var(--border)]">
          {NAV.map((n) => {
            const sectionId = SECTION_MAP[n.path];
            return (
              <button
                key={n.path}
                className={`text-[0.75rem] font-mono tracking-wide uppercase transition-all duration-200 ${
                  active === sectionId
                    ? "text-[var(--primary)]"
                    : "text-[var(--txt-3)] hover:text-[var(--txt)]"
                }`}
                onClick={() => go(sectionId)}
              >
                {n.label}
              </button>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <div className="h-8 w-[1px] bg-[var(--border)] hidden md:block" />
          <button
            onClick={toggle}
            className="p-2 text-[var(--txt-3)] hover:text-[var(--txt)] transition-colors"
            title={dark ? "Modo claro" : "Modo oscuro"}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="md:hidden p-2 text-[var(--txt-2)]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[var(--bg)] border-b border-[var(--border)] px-6 py-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {NAV.map((n) => (
            <button
              key={n.path}
              className="text-left text-[var(--txt-2)] py-2 text-lg font-medium"
              onClick={() => {
                go(SECTION_MAP[n.path]);
                setOpen(false);
              }}
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-[var(--bg)]"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--primary)]/5 to-transparent -z-10 hidden lg:block" />
      
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] min-h-screen items-stretch">
          {/* Text Content / Editor Area */}
          <div className="flex flex-col justify-center px-6 py-20 lg:px-16 xl:px-24 order-2 lg:order-1 relative z-10 border-r border-[var(--border)] bg-[var(--surface)]/30 backdrop-blur-sm">
            {/* IDE Line Numbers Decoration */}
            <div className="absolute left-4 top-0 bottom-0 w-8 hidden xl:flex flex-col items-center py-20 text-[var(--txt-3)] font-mono text-xs opacity-20 select-none">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="h-6 flex items-center">{(i + 1).toString().padStart(2, '0')}</div>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--subtle)] border border-[var(--border)] mb-10 w-fit animate-in fade-in slide-in-from-left-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
              </span>
              <span className="text-[0.7rem] font-mono font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                system.status == "online"
              </span>
            </div>

            <div className="space-y-2 mb-10">
              <p className="font-mono text-[var(--secondary)] text-lg">&lt;h1&gt;</p>
              <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.9] tracking-tighter text-[var(--txt)] font-space animate-in fade-in slide-in-from-up-8 duration-1000">
                Alexis<br />
                Rodrigo<br />
                <span className="text-gradient">Sánchez</span>
              </h1>
              <p className="font-mono text-[var(--secondary)] text-lg">&lt;/h1&gt;</p>
            </div>

            <p className="text-xl lg:text-2xl text-[var(--txt-2)] max-w-[540px] mb-14 leading-relaxed font-medium animate-in fade-in slide-in-from-up-10 duration-1000 delay-200">
              Senior Software Engineer. 
              <span className="text-[var(--txt)]"> Building scalable architectures</span> and 
              high-impact digital experiences. +6 years of expertise. 
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-in fade-in slide-in-from-up-12 duration-1000 delay-300">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  go("contact");
                }}
                className="group relative bg-[var(--txt)] text-[var(--bg)] px-12 py-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[var(--primary)]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-20 transition-opacity" />
                <Mail size={22} className="relative z-10" /> 
                <span className="relative z-10">Trabajemos juntos</span>
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  go("projects");
                }}
                className="bg-transparent text-[var(--txt)] border-2 border-[var(--border)] px-12 py-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[var(--surface)] hover:border-[var(--txt)] transition-all"
              >
                Ver proyectos
              </a>
            </div>

            {/* Background elements for image */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--secondary)]/10 rounded-full blur-[100px] -z-10" />
          </div>

          {/* Hero Image / Code View */}
          <div className="hidden lg:flex items-center justify-center p-16 relative order-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-5 -z-10" />
            
            <div className="relative w-full max-w-[500px]"> {/* Contenedor más pequeño para la foto */}
              <div className="code-card shadow-2xl animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
                <div className="code-dots">
                  <div className="code-dot dot-r" />
                  <div className="code-dot dot-y" />
                  <div className="code-dot dot-g" />
                </div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[var(--txt-3)] font-mono text-[10px]">
                  profile_render.tsx
                </div>
                
                <div className="p-1 pt-12">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-[var(--border)] m-3">
                    <img 
                      src={img} 
                      alt="Alexis Sánchez" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="glass p-4 rounded-xl border border-white/5 backdrop-blur-md">
                        <p className="text-[10px] font-mono text-[var(--primary)] mb-1 uppercase tracking-widest">status</p>
                        <p className="text-sm font-mono text-white">Active and building</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 font-mono text-sm space-y-2 opacity-60">
                    <div className="flex gap-4">
                      <span className="text-[var(--txt-3)]">01</span>
                      <p><span className="text-pink-400">const</span> <span className="text-blue-400">dev</span> = &#123;</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[var(--txt-3)]">02</span>
                      <p className="pl-4">name: <span className="text-green-400">'Alexis Rodrigo'</span>,</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[var(--txt-3)]">03</span>
                      <p className="pl-4">role: <span className="text-green-400">'Senior Software Engineer'</span>,</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[var(--txt-3)]">04</span>
                      <p>&#125;;</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl border border-[var(--primary)]/30 animate-bounce duration-[3000ms]">
                <Terminal className="text-[var(--primary)]" size={24} />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-5 rounded-2xl border border-[var(--secondary)]/30 animate-pulse">
                <Laptop className="text-[var(--secondary)]" size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════════════ */
function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--border)] bg-[var(--bg)] grid-bg relative">
      <div className="max-w-[1040px] mx-auto px-6 relative z-10">
        <span className="text-[0.7rem] font-mono font-bold uppercase tracking-[0.2em] text-[var(--primary)] mb-4 block">
          01. about_me
        </span>
        <div className="grid md:grid-cols-[1fr,400px] gap-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[var(--txt)] leading-tight tracking-tight">
              Crafting <span className="text-[var(--primary)]">efficient</span> code for complex problems.
            </h2>
            <div className="space-y-4 text-[var(--txt-2)] leading-relaxed text-lg">
              <p>
                Soy un ingeniero enfocado en el rendimiento y la escalabilidad. 
                Mi enfoque mezcla el rigor de la ingeniería industrial con la 
                creatividad del desarrollo moderno.
              </p>
              <p>
                Especializado en arquitecturas distribuidas, integración de IA 
                y optimización de procesos de desarrollo (DevOps). Mi meta es 
                siempre reducir la fricción técnica y maximizar el valor de negocio.
              </p>
            </div>
          </div>

          <div className="code-card group hover:border-[var(--primary)]/50 transition-colors">
            <div className="code-dots">
              <div className="code-dot dot-r" />
              <div className="code-dot dot-y" />
              <div className="code-dot dot-g" />
            </div>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[var(--txt-3)] font-mono text-[10px]">
              contact_info.json
            </div>
            
            <div className="p-10 pt-14 space-y-6">
              {[
                {
                  icon: <Mail size={18} />,
                  label: "email",
                  value: "alex_180796@hotmail.com",
                  href: "mailto:alex_180796@hotmail.com",
                },
                {
                  icon: <Phone size={18} />,
                  label: "phone",
                  value: "+52 954 342 6612",
                  href: "tel:+529543426612",
                },
                {
                  icon: <MapPin size={18} />,
                  label: "location",
                  value: "Carmen, Campeche, MX",
                  href: "#",
                },
                {
                  icon: <Linkedin size={18} />,
                  label: "social",
                  value: "/in/asanchezx96/",
                  href: "https://www.linkedin.com/in/asanchezx96/",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--subtle)] flex items-center justify-center text-[var(--txt-3)] group-hover/item:text-[var(--primary)] transition-colors border border-[var(--border)]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--txt-3)]">
                      {item.label}
                    </p>
                    <p className="text-[1rem] text-[var(--txt)] font-mono">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════════════════════ */
function Skills() {
  const getIcon = (label: string) => {
    if (label.includes("Lenguajes")) return <Terminal size={18} />;
    if (label.includes("Frameworks")) return <Laptop size={18} />;
    if (label.includes("Bases")) return <Database size={18} />;
    return <PenTool size={18} />;
  };

  return (
    <section
      id="skills"
      className="py-24 border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="max-w-[1040px] mx-auto px-6">
        <span className="text-[0.7rem] font-mono font-bold uppercase tracking-[0.2em] text-[var(--secondary)] mb-4 block">
          02. tech_stack
        </span>
        <h2 className="text-3xl font-bold text-[var(--txt)] mb-12 tracking-tight">
          Tools & <span className="text-[var(--secondary)]">Technologies</span>.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILLS.map((group, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--secondary)]/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-[var(--subtle)] group-hover:text-[var(--secondary)]/5 transition-colors">
                {getIcon(group.label)}
              </div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2.5 rounded-lg bg-[var(--subtle)] text-[var(--secondary)] border border-[var(--border)]">
                  {getIcon(group.label)}
                </div>
                <h3 className="text-lg font-mono font-bold text-[var(--txt)]">
                  {group.label.toLowerCase().replace(" ", "_")}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-[var(--bg)] text-[var(--txt-2)] font-mono text-[0.75rem] border border-[var(--border)] hover:text-[var(--secondary)] hover:border-[var(--secondary)]/50 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   EXPERIENCE
═══════════════════════════════════════════════════════════ */
function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[var(--border)] bg-[var(--bg)] grid-bg relative">
      <div className="max-w-[1040px] mx-auto px-6 relative z-10">
        <span className="text-[0.7rem] font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-4 block">
          04. career_log
        </span>
        <h2 className="text-3xl font-bold text-[var(--txt)] mb-16 tracking-tight">
          Professional <span className="text-[var(--accent)]">Path</span>.
        </h2>

        <div className="relative">
          {/* Vertical Git Line */}
          <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent" />

          <div className="space-y-16">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="relative pl-12 group">
                {/* Commit Dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)] z-10 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-[0.7rem] font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded border border-[var(--accent)]/20">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--txt)] group-hover:text-[var(--accent)] transition-colors">
                      {exp.company}
                    </h3>
                    <span className="text-[var(--txt-3)] text-sm font-mono opacity-60">
                      @{exp.role.toLowerCase().replace(" ", "_")}
                    </span>
                  </div>

                  <div className="code-card !bg-transparent !border-none !before:hidden">
                    <div className="p-0 space-y-4">
                      <div className="flex items-center gap-4 text-[var(--txt-3)] text-[10px] font-mono uppercase tracking-widest">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} /> {exp.location}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
                        <span>{exp.mode}</span>
                      </div>

                      <ul className="space-y-3">
                        {exp.activities.map((act, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-[var(--txt-2)] text-[0.95rem] leading-relaxed group/li"
                          >
                            <span className="text-[var(--accent)] font-mono opacity-40 group-hover/li:opacity-100 transition-opacity">
                              &gt;
                            </span>
                            {act}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 rounded bg-[var(--surface)] text-[var(--txt-3)] text-[10px] font-mono border border-[var(--border)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-all"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECTS
═══════════════════════════════════════════════════════════ */
function Projects() {
  return (
    <section
      id="projects"
      className="py-24 border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="max-w-[1040px] mx-auto px-6">
        <span className="text-[0.7rem] font-mono font-bold uppercase tracking-[0.2em] text-[var(--primary)] mb-4 block">
          03. recent_works
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-3xl font-bold text-[var(--txt)] tracking-tight">
            Selected <span className="text-[var(--primary)]">Projects</span>.
          </h2>
          <a
            href="https://github.com/asanchezx96"
            target="_blank"
            className="text-xs font-mono text-[var(--txt-3)] hover:text-[var(--primary)] flex items-center gap-2 transition-colors uppercase tracking-widest"
          >
            git push origin main <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="code-card group hover:border-[var(--primary)]/50 transition-all duration-500"
            >
              <div className="code-dots">
                <div className="code-dot dot-r" />
                <div className="code-dot dot-y" />
                <div className="code-dot dot-g" />
              </div>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[var(--txt-3)] font-mono text-[9px] uppercase tracking-tighter">
                {proj.name.toLowerCase().replace(" ", "_")}.app
              </div>

              <div className="mt-8 h-44 bg-[var(--bg)] flex items-center justify-center overflow-hidden relative border-b border-[var(--border)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5" />
                <div className="flex flex-col items-center gap-3 text-[var(--txt-3)] group-hover:scale-110 transition-transform duration-700">
                  <div className="p-4 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-xl">
                    <Laptop size={32} strokeWidth={1.5} className="text-[var(--primary)]" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-[var(--txt)] group-hover:text-[var(--primary)] transition-colors text-lg">
                    {proj.name}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--txt-3)] group-hover:text-[var(--primary)] transition-colors"
                  />
                </div>
                <p className="text-[var(--txt-2)] text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-2 py-1 bg-[var(--subtle)] rounded border border-[var(--border)] text-[var(--txt-3)] uppercase tracking-tighter"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════════════════ */
function Contact() {
  return (
    <section
      id="contact"
      className="py-24 border-t border-[var(--border)] bg-[var(--bg)] relative overflow-hidden"
    >
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-[800px] mx-auto px-6">
        <div className="code-card animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="code-dots">
            <div className="code-dot dot-r" />
            <div className="code-dot dot-y" />
            <div className="code-dot dot-g" />
          </div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[var(--txt-3)] font-mono text-[10px]">
            send_message.sh
          </div>
          
          <div className="p-10 pt-16 text-center">
            <span className="text-[0.7rem] font-mono font-bold uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block">
              -- EXECUTE CONTACT --
            </span>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-[var(--txt)] mb-8 leading-tight tracking-tight">
              ¿Listo para el siguiente<br /><span className="text-[var(--primary)]">gran desafío</span>?
            </h2>
            <p className="text-[var(--txt-2)] text-lg mb-12 leading-relaxed max-w-[500px] mx-auto">
              Si buscas a alguien que aporte valor real a tu equipo o proyecto, 
              estoy a solo un commit de distancia.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:alex_180796@hotmail.com"
                className="w-full sm:w-auto bg-[var(--primary)] text-[var(--bg)] px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[var(--primary)]/20 flex items-center justify-center gap-3"
              >
                <Mail size={20} />
                Enviame un email
              </a>
              <a
                href="tel:+529543426612"
                className="w-full sm:w-auto px-10 py-5 border-2 border-[var(--border)] rounded-xl font-bold text-lg hover:bg-[var(--surface)] hover:border-[var(--txt)] transition-all flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                Llamar ahora
              </a>
            </div>
            
            <div className="mt-12 pt-10 border-t border-[var(--border)] opacity-40 font-mono text-xs">
              $ curl -X POST https://api.asanchez.dev/contact -d "message=hello"
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
          <p className="text-[var(--txt-3)] text-sm font-mono">
            © 2024 Alexis Sánchez. Built with React & Vite.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/asanchezx96"
              target="_blank"
              className="text-[var(--txt-3)] hover:text-[var(--primary)] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/asanchezx96/"
              target="_blank"
              className="text-[var(--txt-3)] hover:text-[var(--primary)] transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════ */
const Home = () => {
  const { dark } = useTheme();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${dark ? "dark" : ""} bg-[var(--bg)] text-[var(--txt)] min-h-screen selection:bg-blue-500 selection:text-white relative`}
    >
      <div className="noise" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 p-4 rounded-2xl glass border border-white/10 shadow-2xl text-[var(--txt)] z-50 transition-all duration-500 ${
          showScroll ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        } hover:scale-110 active:scale-90 group`}
        aria-label="Scroll to top"
      >
        <ArrowUpRight className="-rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={24} />
      </button>
    </div>
  );
};

export default Home;
