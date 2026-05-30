import { motion } from "framer-motion";
import { Download, Mail, Github, MessageCircle, Music2, Code2, CheckCircle2 } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.68_0.20_235/0.18)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur text-sm font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-[oklch(0.70_0.18_150)] animate-pulse" />
            Disponible pour des projets
          </div>

          <div className="flex gap-3">
            {[Github, MessageCircle, Music2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-11 w-11 rounded-full border border-border bg-card grid place-items-center text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-1 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-lg text-muted-foreground">Bonjour, je suis 👋</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Idriss{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                Sante
              </span>
            </h1>
            <div className="flex items-center gap-3 pt-1">
              <span className="h-0.5 w-10 bg-primary rounded-full" />
              <span className="text-xl font-semibold text-foreground/80">Fullstack Developer</span>
            </div>
          </div>

          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Je conçois et développe des applications web & mobiles modernes,
            performantes et sur-mesure — avec une expertise particulière sur les
            marchés <span className="text-primary font-semibold">francophones d'Afrique</span>.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary-foreground px-6 py-3.5 rounded-xl font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="flex gap-10 pt-6">
            {[
              { v: "10+", l: "Projets livrés" },
              { v: "3+", l: "Ans d'expérience" },
              { v: "100%", l: "Satisfaction" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl lg:text-4xl font-extrabold text-primary">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md aspect-square order-1 lg:order-2"
        >
          <div className="absolute inset-0 rounded-full" style={{ background: "var(--gradient-primary)", opacity: 0.15 }} />
          <div className="absolute inset-4 rounded-full border-2 border-dashed border-primary/30 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-card shadow-[var(--shadow-glow)]">
            <img src={portrait} alt="Idriss Sante" className="w-full h-full object-cover" width={768} height={768} />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-8 -right-4 lg:right-0 bg-card rounded-2xl shadow-[var(--shadow-card)] border border-border p-3 flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl grid place-items-center text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
              <Code2 size={18} />
            </div>
            <div>
              <div className="font-bold text-sm">Fullstack</div>
              <div className="text-xs text-muted-foreground">React & Node.js</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute bottom-12 -left-4 lg:left-0 bg-card rounded-2xl shadow-[var(--shadow-card)] border border-border p-3 flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl grid place-items-center bg-[oklch(0.70_0.18_150)] text-white">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <div className="font-bold text-sm">10+ projets</div>
              <div className="text-xs text-muted-foreground">livrés en prod</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden lg:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-9 w-5 rounded-full border-2 border-current grid justify-center pt-1.5">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}