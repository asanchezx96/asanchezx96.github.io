import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main style={{ paddingTop: 52 }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span className="label">Contacto</span>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "var(--txt)",
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          ¿Tienes un proyecto<br />en mente?
        </h1>

        <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 480, marginBottom: 36 }}>
          Estoy disponible para nuevos proyectos y oportunidades.
          Escríbeme y hablamos sobre cómo puedo ayudarte a alcanzar tus objetivos.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="mailto:alex_180796@hotmail.com" className="btn btn-solid">
            <Mail size={15} /> alex_180796@hotmail.com
          </a>
          <a href="tel:+529616334735" className="btn btn-ghost">
            <Phone size={15} /> 961 633 4735
          </a>
        </div>
      </div>
    </main>
  );
}
