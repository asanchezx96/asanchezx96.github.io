import { Mail, Phone, MapPin } from "lucide-react";

const CARDS = [
  { icon: "🌐", title: "Desarrollo Web", desc: "Aplicaciones web modernas con React, Vue.js y Angular" },
  { icon: "📱", title: "Apps Móviles",   desc: "Apps híbridas multiplataforma con Ionic" },
  { icon: "🗄️", title: "Backend & BD",  desc: "PHP, .NET, MySQL, SQL Server y Firebird" },
  { icon: "🎨", title: "Diseño Gráfico", desc: "UI diseño de marca con Photoshop" },
];

const CONTACTS = [
  { icon: <Mail size={12} />,   label: "Email",      val: "alex_180796@hotmail.com", href: "mailto:alex_180796@hotmail.com" },
  { icon: <Phone size={12} />,  label: "Teléfono",   val: "961 633 4735",             href: "tel:+529616334735" },
  { icon: <MapPin size={12} />, label: "Ubicación",   val: "Tabasco, México",         href: "#" },
];

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 52 }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span className="label">Sobre mí</span>

        {/* Bio + contacts */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 56 }}
          className="about-grid"
        >
          <div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "var(--txt)",
                marginBottom: 18,
                lineHeight: 1.2,
              }}
            >
              Desarrollador full stack<br />con visión de producto
            </h1>
            <p style={{ color: "var(--txt-2)", lineHeight: 1.8, fontSize: "0.88rem", marginBottom: 12 }}>
              Soy desarrollador de software con experiencia en proyectos tanto pequeños como empresariales.
              Me especializo en desarrollo web full-stack y aplicaciones móviles híbridas, con enfoque en
              la calidad del código y la experiencia del usuario.
            </p>
            <p style={{ color: "var(--txt-2)", lineHeight: 1.8, fontSize: "0.88rem" }}>
              He trabajado en múltiples roles — desarrollador, líder de proyectos, soporte técnico y
              diseñador gráfico — lo que me da una visión integral de cualquier proyecto digital.
            </p>
          </div>

          <div>
            <span className="label">Contacto</span>
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                style={{
                  display: "grid",
                  gridTemplateColumns: "14px 68px 1fr",
                  gap: 10,
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                  color: "var(--txt-2)",
                  fontSize: "0.83rem",
                  transition: "color .18s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--txt)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--txt-2)")}
              >
                <span style={{ color: "var(--txt-3)" }}>{c.icon}</span>
                <span style={{ color: "var(--txt-3)", fontSize: "0.66rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {c.label}
                </span>
                <span>{c.val}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Expertise cards */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 40 }}>
          <span className="label">Especialidades</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 1, border: "1px solid var(--border)", borderRadius: 5, overflow: "hidden" }}>
            {CARDS.map((c) => (
              <div
                key={c.title}
                style={{
                  padding: "28px 24px",
                  background: "var(--surface)",
                  borderRight: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                  transition: "background .18s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "var(--subtle)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "var(--surface)")}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--txt)", marginBottom: 6 }}>{c.title}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--txt-3)", lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
