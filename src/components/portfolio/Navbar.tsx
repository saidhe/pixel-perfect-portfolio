import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(l.id);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
          <span className="h-10 w-10 rounded-xl grid place-items-center text-primary-foreground font-bold text-lg shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-primary)" }}>
            X
          </span>
          <span className="font-bold text-xl tracking-tight">
            Portfolio<span className="text-primary">.</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1 bg-card/60 backdrop-blur border border-border/60 rounded-full px-2 py-1.5">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  active === l.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-1 w-1 rounded-full bg-primary"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:inline-flex items-center gap-2 text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
          style={{ background: "var(--gradient-primary)" }}
        >
          <span className="h-2 w-2 rounded-full bg-[oklch(0.75_0.18_150)] animate-pulse" />
          Hire Me
        </button>

        <button
          className="md:hidden p-2 rounded-lg border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <ul className="px-5 py-4 space-y-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium ${
                    active === l.id ? "bg-accent text-primary" : "text-foreground"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo("contact")}
                className="w-full text-primary-foreground px-4 py-3 rounded-lg font-semibold mt-2"
                style={{ background: "var(--gradient-primary)" }}
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}