import { PROJECTS } from "@/data/portfolio";
import { GitBranch, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: 52 }}>
      <div
        style={{ maxWidth: 1040, margin: "0 auto", padding: "64px 24px 80px" }}
      >
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
          Proyectos
        </h1>

        <div className="pgrid">
          {PROJECTS.map((p) => (
            <div key={p.id} className="pcell">
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 12,
                }}
              >
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--txt)",
                    lineHeight: 1.35,
                    flex: 1,
                  }}
                >
                  {p.name}
                </h3>
                <span
                  className="tag"
                  style={{ fontSize: "0.68rem", marginLeft: 10, flexShrink: 0 }}
                >
                  {p.type}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--txt-2)",
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}
              >
                {p.description}
              </p>

              {/* Tech tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: 16,
                }}
              >
                {p.tech.map((t) => (
                  <span key={t} className="tag" style={{ fontSize: "0.72rem" }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Repos */}
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: 14,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <GitBranch
                  size={13}
                  style={{ color: "var(--txt-3)", marginTop: 2, flexShrink: 0 }}
                />
                {p.repos.map((repo) => (
                  <a
                    key={repo.label}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: "0.72rem",
                      color: "var(--txt-2)",
                      textDecoration: "none",
                      padding: "2px 8px",
                      borderRadius: 4,
                      border: "1px solid var(--border)",
                      transition: "color 0.15s, border-color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--txt)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "var(--txt-3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--txt-2)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "var(--border)";
                    }}
                  >
                    {repo.label}
                    <ExternalLink size={10} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
