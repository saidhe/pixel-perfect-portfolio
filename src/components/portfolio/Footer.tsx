import { Heart, Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@xhrisdior.dev", label: "Email" },
];

export function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative mt-20 border-t border-border overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span
                className="h-11 w-11 rounded-xl grid place-items-center text-primary-foreground font-bold text-lg shadow-[var(--shadow-glow)]"
                style={{ background: "var(--gradient-primary)" }}
              >
                X
              </span>
              <span
                className="font-bold text-2xl tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Xhris Dior<span className="text-primary">.</span>
              </span>
            </div>
            <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
              Fullstack Developer passionné, je conçois des applications web modernes,
              performantes et élégantes pour transformer vos idées en produits réels.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="h-10 w-10 rounded-xl border border-border bg-card grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4
              className="text-sm font-semibold uppercase tracking-widest text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div className="md:col-span-4">
            <h4
              className="text-sm font-semibold uppercase tracking-widest text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Travaillons ensemble
            </h4>
            <p className="mt-5 text-sm text-muted-foreground">
              Un projet en tête ? Discutons-en autour d'un café virtuel.
            </p>
            <a
              href="mailto:hello@xhrisdior.dev"
              className="mt-5 inline-flex items-center gap-2 text-primary-foreground px-5 py-3 rounded-full font-semibold text-sm shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
              style={{ background: "var(--gradient-primary)" }}
            >
              hello@xhrisdior.dev
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Xhris Dior. Tous droits réservés.</div>
          <div className="flex items-center gap-1.5">
            Made with <Heart size={14} className="fill-primary text-primary" /> au Cameroun
          </div>
        </div>
      </div>
    </footer>
  );
}