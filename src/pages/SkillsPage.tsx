import { SKILLS } from "@/data/portfolio";

export default function SkillsPage() {
  return (
    <main style={{ paddingTop: 52 }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span className="label">Habilidades</span>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "var(--txt)",
            marginBottom: 40,
            lineHeight: 1.15,
          }}
        >
          Stack tecnológico
        </h1>

        {/* Skill table */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {SKILLS.map((g) => (
            <div
              key={g.label}
              className="skrow"
            >
              <span style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--txt-2)", paddingTop: 3 }}>
                {g.label}
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {g.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Knowledge areas */}
        <div style={{ marginTop: 56, borderTop: "1px solid var(--border)", paddingTop: 40 }}>
          <span className="label">Áreas de conocimiento</span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 1,
              border: "1px solid var(--border)",
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            {[
              { title: "Desarrollo Front End",  desc: "React, Vue.js, Angular, TypeScript, CSS" },
              { title: "Desarrollo Back End",    desc: "PHP, C#, .NET, REST APIs" },
              { title: "Apps Móviles",           desc: "Ionic, Angular, apps híbridas" },
              { title: "Bases de Datos",         desc: "MySQL, SQL Server, Firebird, diseño de esquemas" },
              { title: "Diseño de Software",     desc: "Arquitectura, patrones, buenas prácticas" },
              { title: "Diseño Gráfico",         desc: "Photoshop, UI, identidad visual" },
            ].map((area) => (
              <div
                key={area.title}
                style={{
                  padding: "24px 22px",
                  background: "var(--surface)",
                  borderRight: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                  transition: "background .18s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "var(--subtle)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "var(--surface)")}
              >
                <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--txt)", marginBottom: 6 }}>
                  {area.title}
                </div>
                <div style={{ fontSize: "0.76rem", color: "var(--txt-3)", lineHeight: 1.6 }}>
                  {area.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
