import { PROJECTS } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: 52 }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span className="label">Proyectos</span>

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
          Casos de estudio
        </h1>

        <div className="pgrid">
          {PROJECTS.map(p => (
            <div key={p.id} className="pcell">
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}
              >
                <h3
                  style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--txt)", lineHeight: 1.35, flex: 1 }}
                >
                  {p.name}
                </h3>
                <ArrowUpRight size={15} style={{ color: "var(--txt-3)", marginLeft: 10, flexShrink: 0, marginTop: 2 }} />
              </div>

              <p
                style={{ fontSize: "0.85rem", color: "var(--txt-2)", lineHeight: 1.65, marginBottom: 18 }}
              >
                {p.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span className="tag" style={{ fontSize: "0.72rem" }}>{p.type}</span>
                {p.tech.map(t => (
                  <span key={t} className="tag" style={{ fontSize: "0.72rem" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
