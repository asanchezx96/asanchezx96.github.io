import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/stores/useTheme";
import { NAV } from "@/data/portfolio";

/* ─── Navbar ─────────────────────────────────────────────── */
function Navbar() {
  const { dark, toggle } = useTheme();
  const navigate          = useNavigate();
  const location          = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0 });
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        transition: "background .25s, border-color .25s",
      }}
    >
      <div
        style={{
          maxWidth: 1040, margin: "0 auto",
          padding: "0 24px", height: 52,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => go("/")}
          style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "monospace", fontWeight: 700, fontSize: "0.95rem",
            color: "var(--txt)", letterSpacing: "-0.04em",
          }}
        >
          asv.
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: 26 }}>
          {NAV.map((n) => (
            <button
              key={n.path}
              className={`nl ${isActive(n.path) ? "on" : ""}`}
              onClick={() => go(n.path)}
            >
              {n.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button
            onClick={toggle}
            title={dark ? "Modo claro" : "Modo oscuro"}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--txt-3)", display: "flex", padding: 4,
            }}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <button
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--txt-2)", display: "flex", alignItems: "center",
            }}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
            padding: "10px 24px 16px",
          }}
        >
          {NAV.map((n) => (
            <button
              key={n.path}
              className={`nl ${isActive(n.path) ? "on" : ""}`}
              style={{
                display: "block", background: "none", border: "none", cursor: "pointer",
                padding: "8px 0", width: "100%", textAlign: "left",
              }}
              onClick={() => go(n.path)}
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── Layout ──────────────────────────────────────────────── */
function MainLayout() {
  const { dark } = useTheme();

  return (
    <div
      className={dark ? "dark" : ""}
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--txt)",
        transition: "background .25s, color .25s",
      }}
    >
      <Navbar />
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh", display: "flex",
              alignItems: "center", justifyContent: "center",
              fontSize: "0.8rem", color: "var(--txt-3)",
            }}
          >
            Cargando...
          </div>
        }
      >
        <Outlet />
      </Suspense>

      {/* Footer shared */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "16px 24px" }}>
        <div
          style={{
            maxWidth: 1040, margin: "0 auto",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}
        >
          <span style={{ fontSize: "0.7rem", color: "var(--txt-3)" }}>
            © 2024 Alexis Rodrigo Sánchez Vázquez
          </span>
          <span style={{ fontSize: "0.7rem", color: "var(--txt-3)", fontFamily: "monospace" }}>
            asv.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
