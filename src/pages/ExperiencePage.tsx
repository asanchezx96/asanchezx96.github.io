import { useState } from "react";
import { EXPERIENCE } from "@/data/portfolio";
import { ChevronDown, MapPin } from "lucide-react";

export default function ExperiencePage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main style={{ paddingTop: 52 }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span className="label">Experiencia Profesional</span>

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
          Mi trayectoria
        </h1>

        <div>
          {EXPERIENCE.map(e => {
            const isOpen = open === e.id;
            return (
              <div key={e.id}>
                <button
                  className="xrow"
                  onClick={() => setOpen(isOpen ? null : e.id)}
                >
                  {/* Date */}
                  <span
                    className="xrow-date"
                    style={{ fontSize: "0.8rem", color: "var(--txt-3)", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}
                  >
                    {e.date}
                  </span>

                  {/* Company + role */}
                  <div>
                    <span
                      className="xrow-co"
                      style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--txt)", display: "block", transition: "color .18s" }}
                    >
                      {e.company}
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "var(--txt-3)" }}>{e.role}</span>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    size={15}
                    style={{
                      color: "var(--txt-3)",
                      transform: isOpen ? "rotate(180deg)" : "none",
                      transition: "transform .2s",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <div
                    style={{
                      paddingBottom: 24,
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                    }}
                    className="xrow-detail"
                  >
                    {e.location && (
                      <p style={{ fontSize: "0.8rem", color: "var(--txt-3)", display: "flex", alignItems: "center", gap: 6 }}>
                        <MapPin size={12} />
                        {e.location} · {e.mode}
                      </p>
                    )}

                    <ul style={{ display: "flex", flexDirection: "column", gap: 6, listStyle: "none" }}>
                      {e.activities.map((a, i) => (
                        <li
                          key={i}
                          style={{ fontSize: "0.88rem", color: "var(--txt-2)", display: "flex", gap: 10, alignItems: "flex-start" }}
                        >
                          <span style={{ color: "var(--txt-3)", flexShrink: 0 }}>—</span>
                          {a}
                        </li>
                      ))}
                    </ul>

                    {e.tech.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {e.tech.map(t => (
                          <span key={t} className="tag" style={{ fontSize: "0.75rem" }}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* Bottom line */}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </main>
  );
}
