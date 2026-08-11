import { useState, useEffect } from "react";
import img from "../assets/yo.png";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Moon,
  Sun,
  Menu,
  X,
  ArrowUp,
  Linkedin,
  ExternalLink,
  GitBranch,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "@/stores/useTheme";
import { NAV, SKILLS, EXPERIENCE, PROJECTS } from "@/data/portfolio";

/* ─────────────────────────────────────────────
   ANCHOR SCROLL
───────────────────────────────────────────── */
const SECTION_MAP: Record<string, string> = {
  "/": "hero",
  "/about": "about",
  "/skills": "skills",
  "/experience": "experience",
  "/projects": "projects",
  "/contact": "contact",
};

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.offsetTop - 52, behavior: "smooth" });
};

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = Object.values(SECTION_MAP);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--bg)",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "border-color .2s",
        height: 52,
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: "0 24px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "monospace",
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "var(--txt)",
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <span style={{ color: "var(--accent)" }}>&lt;</span>asv
          <span style={{ color: "var(--accent)" }}>/&gt;</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex" style={{ gap: 32 }}>
          {NAV.map((n) => {
            const id = SECTION_MAP[n.path];
            const isOn = active === id;
            return (
              <button
                key={n.path}
                onClick={() => scrollTo(id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "monospace",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: isOn ? "var(--accent)" : "var(--txt-3)",
                  transition: "color .15s",
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  if (!isOn)
                    (e.currentTarget as HTMLElement).style.color = "var(--txt)";
                }}
                onMouseLeave={(e) => {
                  if (!isOn)
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--txt-3)";
                }}
              >
                {n.label}
              </button>
            );
          })}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={toggle}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--txt-3)",
              display: "flex",
              padding: 4,
            }}
            title={dark ? "Modo claro" : "Modo oscuro"}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--txt-2)",
              display: "flex",
            }}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
            padding: "8px 24px 14px",
          }}
        >
          {NAV.map((n) => (
            <button
              key={n.path}
              onClick={() => {
                scrollTo(SECTION_MAP[n.path]);
                setOpen(false);
              }}
              style={{
                display: "block",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
                fontFamily: "monospace",
                fontSize: "0.8rem",
                color: "var(--txt-2)",
                textAlign: "left",
                width: "100%",
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

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 52,
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: "64px 24px 80px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 64,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div>
            {/* Status pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 32,
                border: "1px solid var(--border)",
                padding: "4px 12px",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.68rem",
                  color: "var(--txt-3)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                disponible para proyectos
              </span>
            </div>

            <h1
              className="fu d1"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.045em",
                color: "var(--txt)",
                marginBottom: 24,
              }}
            >
              Alexis Rodrigo
              <br />
              <span style={{ color: "var(--accent)" }}>Sánchez</span> Vázquez
            </h1>

            <p
              className="fu d2"
              style={{
                fontFamily: "monospace",
                fontSize: "0.8rem",
                color: "var(--txt-3)",
                marginBottom: 8,
                letterSpacing: "0.04em",
              }}
            >
              // Senior Software Engineer · 6+ años
            </p>
            <p
              className="fu d3"
              style={{
                fontSize: "0.93rem",
                color: "var(--txt-2)",
                lineHeight: 1.75,
                maxWidth: 480,
                marginBottom: 40,
              }}
            >
              Especialista en desarrollo full-stack: plataformas web, apps
              móviles y arquitecturas de software escalables. Enfocado en código
              limpio y soluciones de impacto real.
            </p>

            {/* CTA */}
            <div
              className="fu d4"
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginBottom: 48,
              }}
            >
              <a
                href="mailto:alex_180796@hotmail.com"
                className="btn btn-solid"
              >
                <Mail size={13} /> Contáctame
              </a>
              <button
                className="btn btn-ghost"
                onClick={() => scrollTo("projects")}
              >
                Ver proyectos <ExternalLink size={12} />
              </button>
            </div>

            {/* Stats */}
            <div
              className="fu d5"
              style={{
                display: "flex",
                gap: 40,
                paddingTop: 28,
                borderTop: "1px solid var(--border)",
              }}
            >
              {[
                { n: "6+", l: "Años exp." },
                { n: "8+", l: "Empresas" },
                { n: "10+", l: "Tecnologías" },
                { n: "6", l: "Proyectos" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "var(--accent)",
                      lineHeight: 1,
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontSize: "0.64rem",
                      color: "var(--txt-3)",
                      marginTop: 5,
                      textTransform: "uppercase",
                      letterSpacing: "0.13em",
                      fontFamily: "monospace",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div
            className="hidden md:block"
            style={{ width: 260, flexShrink: 0 }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              <img
                src={img}
                alt="Alexis Rodrigo Sánchez Vázquez"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                  filter: "grayscale(30%)",
                }}
              />
            </div>
            <div
              style={{
                borderLeft: "1px solid var(--border)",
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                padding: "10px 14px",
                fontFamily: "monospace",
                fontSize: "0.68rem",
                color: "var(--txt-3)",
              }}
            >
              <span style={{ color: "var(--accent)" }}>$ </span>whoami ·
              Tabasco, MX
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────── */
function About() {
  return (
    <section id="about" style={{ borderBottom: "1px solid var(--border)" }}>
      {/* Constrained content */}
      <div
        style={{ maxWidth: 1040, margin: "0 auto", padding: "72px 24px 48px" }}
      >
        <span className="label">01 · sobre mí</span>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}
          className="about-grid"
        >
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "var(--txt)",
                marginBottom: 20,
                lineHeight: 1.25,
              }}
            >
              Desarrollador full-stack
              <br />
              con visión de producto
            </h2>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--txt-2)",
                lineHeight: 1.8,
                marginBottom: 14,
              }}
            >
              Desarrollo software desde pequeños proyectos hasta sistemas
              empresariales. Me especializo en aplicaciones web full-stack y
              móviles híbridas, con enfoque en calidad de código y experiencia
              de usuario.
            </p>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--txt-2)",
                lineHeight: 1.8,
              }}
            >
              He trabajado en múltiples roles — desarrollador, líder de
              proyectos, soporte técnico y diseñador — lo que me da una visión
              integral de cualquier producto digital.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <span className="label">contacto</span>
            {[
              {
                icon: <Mail size={13} />,
                label: "Email",
                val: "alex_180796@hotmail.com",
                href: "mailto:alex_180796@hotmail.com",
              },
              {
                icon: <Phone size={13} />,
                label: "Teléfono",
                val: "961 633 4735",
                href: "tel:+529616334735",
              },
              {
                icon: <MapPin size={13} />,
                label: "Ubicación",
                val: "Tabasco, México",
                href: "#",
              },
              {
                icon: <Linkedin size={13} />,
                label: "LinkedIn",
                val: "/in/asanchezx96",
                href: "https://www.linkedin.com/in/asanchezx96/",
              },
              {
                icon: <Github size={13} />,
                label: "GitHub",
                val: "asanchezx96",
                href: "https://github.com/asanchezx96",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "grid",
                  gridTemplateColumns: "14px 80px 1fr",
                  gap: 12,
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                  color: "var(--txt-2)",
                  fontSize: "0.83rem",
                  textDecoration: "none",
                  transition: "color .15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--txt-2)")
                }
              >
                <span style={{ color: "var(--txt-3)" }}>{c.icon}</span>
                <span
                  style={{
                    fontSize: "0.64rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--txt-3)",
                    fontFamily: "monospace",
                  }}
                >
                  {c.label}
                </span>
                <span>{c.val}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Specialties grid — same width as other sections */}
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px 0" }}>
        <div
          className="spec-grid"
          style={{
            borderTop: "1px solid var(--border)",
            borderLeft: "1px solid var(--border)",
          }}
        >
          {[
            { t: "Desarrollo Web", d: "React · Vue.js · Angular · TypeScript" },
            { t: "Apps Móviles", d: "Ionic · Flutter · Android / iOS" },
            {
              t: "Backend & APIs",
              d: "PHP · .NET · Python · FastAPI · REST · WebSockets",
            },
            {
              t: "Bases de Datos",
              d: "MySQL · PostgreSQL · MongoDB · SQL Server",
            },
            {
              t: "Despliegue",
              d: "Vercel · Nginx · IIS · cPanel · Docker · SSH",
            },
            {
              t: "Diseño & Más",
              d: "Photoshop · Figma · Marketing Digital · SEO",
            },
          ].map((c) => (
            <div
              key={c.t}
              style={{
                padding: "20px 24px",
                background: "var(--surface)",
                borderBottom: "1px solid var(--border)",
                borderRight: "1px solid var(--border)",
                transition: "background .15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "var(--subtle)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "var(--surface)")
              }
            >
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "var(--txt)",
                  marginBottom: 5,
                }}
              >
                {c.t}
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "var(--txt-3)",
                  fontFamily: "monospace",
                  lineHeight: 1.6,
                }}
              >
                {c.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SKILLS
───────────────────────────────────────────── */
function Skills() {
  return (
    <section id="skills" style={{ borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "72px 24px" }}>
        <span className="label">02 · stack tecnológico</span>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "var(--txt)",
            marginBottom: 40,
            lineHeight: 1.2,
          }}
        >
          Herramientas & Tecnologías
        </h2>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {SKILLS.map((g) => (
            <div key={g.label} className="skrow">
              <span className="skrow-label">{g.label}</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {g.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "3px 10px",
                      border: "1px solid var(--border)",
                      fontSize: "0.73rem",
                      color: "var(--txt-2)",
                      background: "var(--surface)",
                      fontFamily: "monospace",
                      cursor: "default",
                      transition: "border-color .15s, color .15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--accent)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--txt-2)";
                    }}
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

/* ─────────────────────────────────────────────
   EXPERIENCE
───────────────────────────────────────────── */
function Experience() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="experience"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "72px 24px" }}>
        <span className="label">03 · experiencia</span>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "var(--txt)",
            marginBottom: 40,
            lineHeight: 1.2,
          }}
        >
          Trayectoria profesional
        </h2>

        <div>
          {EXPERIENCE.map((e) => {
            const isOpen = open === e.id;
            return (
              <div key={e.id}>
                <button
                  onClick={() => setOpen(isOpen ? null : e.id)}
                  className="xrow"
                >
                  <span
                    className="xrow-date"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--txt-3)",
                      fontFamily: "monospace",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {e.date}
                  </span>
                  <div>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "0.92rem",
                        color: isOpen ? "var(--accent)" : "var(--txt)",
                        display: "block",
                        transition: "color .15s",
                      }}
                    >
                      {e.company}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--txt-3)" }}>
                      {e.role}
                    </span>
                  </div>
                  <ChevronDown
                    size={14}
                    style={{
                      color: "var(--txt-3)",
                      transform: isOpen ? "rotate(180deg)" : "none",
                      transition: "transform .2s",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      paddingBottom: 24,
                      paddingLeft: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                    className="xrow-detail"
                  >
                    {e.location && (
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--txt-3)",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontFamily: "monospace",
                        }}
                      >
                        <MapPin size={11} /> {e.location} · {e.mode}
                      </p>
                    )}
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      {e.activities.map((a, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "0.86rem",
                            color: "var(--txt-2)",
                            display: "flex",
                            gap: 10,
                            alignItems: "flex-start",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--accent)",
                              flexShrink: 0,
                              fontFamily: "monospace",
                            }}
                          >
                            ›
                          </span>{" "}
                          {a}
                        </li>
                      ))}
                    </ul>
                    {e.tech.length > 0 && (
                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 5 }}
                      >
                        {e.tech.map((t) => (
                          <span
                            key={t}
                            style={{
                              padding: "2px 8px",
                              border: "1px solid var(--border)",
                              fontSize: "0.68rem",
                              color: "var(--txt-3)",
                              fontFamily: "monospace",
                              background: "var(--surface)",
                            }}
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROJECTS
───────────────────────────────────────────── */
const _projImages = import.meta.glob(
  "../assets/projects/**/*.{png,jpg,jpeg,webp,gif,svg}",
  { eager: true },
) as Record<string, { default: string }>;

function getProjectImages(folder: string): string[] {
  return Object.entries(_projImages)
    .filter(([path]) => path.includes(`/projects/${folder}/`))
    .map(([, mod]) => (mod as any).default as string);
}

const CARD_ACCENTS = [
  "#00e676",
  "#00bcd4",
  "#7c4dff",
  "#ff4081",
  "#ff9800",
  "#64dd17",
  "#00b0ff",
];

/* ── Modal ── */
function ProjectModal({
  project,
  idx,
  onClose,
}: {
  project: (typeof PROJECTS)[0];
  idx: number;
  onClose: () => void;
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const images = getProjectImages(project.folder ?? "");
  const color = CARD_ACCENTS[idx % CARD_ACCENTS.length];
  const init = project.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // ESC to close
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && images.length > 1)
        setImgIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft" && images.length > 1)
        setImgIdx((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose, images.length]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((i) => (i + 1) % images.length);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 400,
        background: "rgba(0,0,0,0.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          width: "100%",
          maxWidth: 1240,
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          animation: "modalIn .2s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "13px 20px",
            borderBottom: "1px solid var(--border)",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "var(--txt)",
              }}
            >
              {project.name}
            </span>
            <span
              style={{
                fontSize: "0.6rem",
                color: "var(--accent)",
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {project.type}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--txt-3)",
              padding: 4,
              display: "flex",
              alignItems: "center",
              transition: "color .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--txt)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--txt-3)")}
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Left — Image carousel */}
          <div
            style={{
              position: "relative",
              background: "var(--bg)",
              borderRight: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 380,
            }}
          >
            {images.length > 0 ? (
              <>
                <img
                  src={images[imgIdx]}
                  alt={`${project.name} screenshot ${imgIdx + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    maxHeight: 500,
                  }}
                />
                {images.length > 1 && (
                  <>
                    {/* Arrows */}
                    <button
                      onClick={prev}
                      className="modal-arrow modal-arrow-l"
                    >
                      <span>‹</span>
                    </button>
                    <button
                      onClick={next}
                      className="modal-arrow modal-arrow-r"
                    >
                      <span>›</span>
                    </button>
                    {/* Counter */}
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        fontFamily: "monospace",
                        fontSize: "0.62rem",
                        color: "var(--txt-3)",
                        background: "var(--surface)",
                        padding: "2px 8px",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {imgIdx + 1} / {images.length}
                    </div>
                    {/* Dots */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 12,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 6,
                      }}
                    >
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setImgIdx(i);
                          }}
                          style={{
                            width: 6,
                            height: 6,
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            background:
                              i === imgIdx
                                ? "var(--accent)"
                                : "var(--border-2)",
                            transition: "background .15s",
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: 280,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "4rem",
                    fontWeight: 800,
                    color,
                    opacity: 0.15,
                  }}
                >
                  {init}
                </span>
              </div>
            )}
          </div>

          {/* Right — Details */}
          <div
            style={{
              padding: 24,
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <p
              style={{
                fontSize: "0.83rem",
                color: "var(--txt-2)",
                lineHeight: 1.8,
              }}
            >
              {project.description}
            </p>

            <div>
              <div
                style={{
                  fontSize: "0.62rem",
                  fontFamily: "monospace",
                  color: "var(--txt-3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: 10,
                }}
              >
                Stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "3px 8px",
                      border: "1px solid var(--border)",
                      fontSize: "0.65rem",
                      color: "var(--txt-2)",
                      fontFamily: "monospace",
                      background: "var(--bg)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "0.62rem",
                  fontFamily: "monospace",
                  color: "var(--txt-3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: 10,
                }}
              >
                Repositorios
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.repos.map((r) => (
                  <a
                    key={r.label}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "3px 9px",
                      border: "1px solid var(--border)",
                      fontSize: "0.65rem",
                      color: "var(--txt-3)",
                      fontFamily: "monospace",
                      textDecoration: "none",
                      transition: "color .15s, border-color .15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--accent)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--txt-3)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "var(--border)";
                    }}
                  >
                    <GitBranch size={10} /> {r.label} <ExternalLink size={9} />
                  </a>
                ))}
              </div>
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid"
                style={{ alignSelf: "flex-start", marginTop: "auto" }}
              >
                <ExternalLink size={12} /> Ver proyecto
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Grid ── */
function ProjectGrid() {
  const [active, setActive] = useState<{
    project: (typeof PROJECTS)[0];
    idx: number;
  } | null>(null);

  return (
    <>
      <div className="proj-grid">
        {PROJECTS.map((p, idx) => {
          const images = getProjectImages(p.folder ?? "");
          const color = CARD_ACCENTS[idx % CARD_ACCENTS.length];
          const init = p.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
          const thumb = images[0];
          return (
            <div
              key={p.id}
              className="proj-card"
              onClick={() => setActive({ project: p, idx })}
            >
              {/* Thumbnail */}
              <div
                style={{
                  height: 110,
                  overflow: "hidden",
                  position: "relative",
                  background: "var(--subtle)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {thumb ? (
                  <img
                    src={thumb}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1.6rem",
                        fontWeight: 800,
                        color,
                        opacity: 0.35,
                      }}
                    >
                      {init}
                    </span>
                  </div>
                )}
                {images.length > 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      fontFamily: "monospace",
                      fontSize: "0.55rem",
                      color: "var(--txt-3)",
                      background: "rgba(0,0,0,0.55)",
                      padding: "2px 6px",
                    }}
                  >
                    {images.length} imgs
                  </div>
                )}
              </div>
              {/* Info */}
              <div
                style={{
                  padding: "12px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ overflow: "hidden", paddingRight: 8 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "0.84rem",
                      color: "var(--txt)",
                      marginBottom: 3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      color: "var(--txt-3)",
                      fontFamily: "monospace",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.type}
                  </div>
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      color: "var(--txt-3)",
                      padding: 4,
                      display: "flex",
                      transition: "color .15s",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--txt-3)")}
                    title="Visitar proyecto"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {active && (
        <ProjectModal
          project={active.project}
          idx={active.idx}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "72px 24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <span className="label">04 · proyectos</span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "var(--txt)",
                lineHeight: 1.2,
              }}
            >
              Proyectos
            </h2>
          </div>
          <a
            href="https://github.com/asanchezx96"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.72rem",
              color: "var(--txt-3)",
              fontFamily: "monospace",
              textDecoration: "none",
              transition: "color .15s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--txt-3)")}
          >
            <Github size={13} /> github.com/asanchezx96{" "}
            <ExternalLink size={11} />
          </a>
        </div>
        <ProjectGrid />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact">
      <div
        style={{ maxWidth: 1040, margin: "0 auto", padding: "72px 24px 96px" }}
      >
        <span className="label">05 · contacto</span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 64,
            alignItems: "start",
          }}
          className="about-grid"
        >
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.045em",
                color: "var(--txt)",
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              ¿Tienes un proyecto
              <br />
              en mente?
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--txt-2)",
                lineHeight: 1.75,
                maxWidth: 440,
                marginBottom: 36,
              }}
            >
              Estoy disponible para nuevos proyectos y oportunidades. Escríbeme
              y hablamos sobre cómo puedo ayudarte.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href="mailto:alex_180796@hotmail.com"
                className="btn btn-solid"
              >
                <Mail size={13} /> alex_180796@hotmail.com
              </a>
              <a href="tel:+529616334735" className="btn btn-ghost">
                <Phone size={13} /> 961 633 4735
              </a>
            </div>
          </div>

          {/* Social */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              paddingTop: 8,
            }}
          >
            {[
              {
                icon: <Github size={14} />,
                label: "GitHub",
                href: "https://github.com/asanchezx96",
              },
              {
                icon: <Linkedin size={14} />,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/asanchezx96/",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "0.8rem",
                  color: "var(--txt-3)",
                  textDecoration: "none",
                  transition: "color .15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--txt-3)")
                }
              >
                {s.icon} {s.label} <ExternalLink size={10} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{ borderTop: "1px solid var(--border)", padding: "14px 24px" }}
      >
        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.68rem",
              color: "var(--txt-3)",
              fontFamily: "monospace",
            }}
          >
            © 2025 Alexis Rodrigo Sánchez Vázquez
          </span>
          <span
            style={{
              fontSize: "0.68rem",
              color: "var(--txt-3)",
              fontFamily: "monospace",
            }}
          >
            Built with React & Vite
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BACK TO TOP
───────────────────────────────────────────── */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 50,
        width: 36,
        height: 36,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        color: "var(--txt-3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "opacity .25s, color .15s, border-color .15s",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.color = "var(--accent)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.color = "var(--txt-3)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      <ArrowUp size={14} />
    </button>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
const Home = () => {
  const { dark } = useTheme();

  return (
    <div
      className={dark ? "dark" : ""}
      style={{
        background: "var(--bg)",
        color: "var(--txt)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
};

export default Home;
