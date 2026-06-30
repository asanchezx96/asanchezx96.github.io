import { useNavigate } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";
import img from "@/assets/yo.jpg";

const STATS = [
  { n: "6+", l: "Años de exp." },
  { n: "8+", l: "Empresas" },
  { n: "10+", l: "Tecnologías" },
];

export default function HeroPage() {
  const navigate = useNavigate();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 52,
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: "48px 24px 64px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: 64,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── Content ── */}
          <div>
            <p className="label fu d1" style={{ marginBottom: 18 }}>
              Desarrollador de Software · Tabasco, México
            </p>

            <h1
              className="fu d2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: "-0.045em",
                color: "var(--txt)",
                marginBottom: 20,
              }}
            >
              Alexis Rodrigo
              <br />
              Sánchez Vázquez
            </h1>

            <p
              className="fu d3"
              style={{
                color: "var(--txt-2)",
                fontSize: "0.93rem",
                lineHeight: 1.78,
                maxWidth: 500,
                marginBottom: 32,
              }}
            >
              Especialista en desarrollo de sistemas con más de 6 años de
              experiencia en plataformas web y móviles. Enfocado en código
              limpio, arquitectura sólida y soluciones que escalan.
            </p>

            <div
              className="fu d4"
              style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 44 }}
            >
              <a href="mailto:alex_180796@hotmail.com" className="btn btn-solid">
                <Mail size={13} />
                Contáctame
              </a>
              <button
                className="btn btn-ghost"
                onClick={() => { navigate("/projects"); window.scrollTo(0, 0); }}
              >
                Ver proyectos <ArrowUpRight size={13} />
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
              {STATS.map((s) => (
                <div key={s.l}>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      color: "var(--txt)",
                      lineHeight: 1,
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontSize: "0.66rem",
                      color: "var(--txt-3)",
                      marginTop: 6,
                      textTransform: "uppercase",
                      letterSpacing: "0.13em",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Photo ── */}
          <div
            className="hidden md:block"
            style={{ alignSelf: "stretch", display: "flex", alignItems: "center" }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                maxHeight: 440,
                borderRadius: 5,
                overflow: "hidden",
                border: "1px solid var(--border)",
                flexShrink: 0,
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
                }}
              />
            </div>
          </div>
        </div>

        {/* Quick nav links */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: "1px solid var(--border)",
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
          }}
          className="fu d5"
        >
          {[
            { label: "Sobre mí", path: "/about" },
            { label: "Habilidades", path: "/skills" },
            { label: "Experiencia", path: "/experience" },
            { label: "Proyectos", path: "/projects" },
          ].map((l) => (
            <button
              key={l.path}
              onClick={() => { navigate(l.path); window.scrollTo(0, 0); }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.82rem",
                color: "var(--txt-3)",
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: 0,
                transition: "color .18s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--txt)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--txt-3)")}
            >
              {l.label} <ArrowUpRight size={11} />
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
