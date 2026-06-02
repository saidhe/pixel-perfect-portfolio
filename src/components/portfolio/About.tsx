import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import portrait from "@/assets/photo.jpg";

const tags = ["React Js", "React Native", "Node.js", "TypeScript", "PostgreSQL",  "Supabase", "Vercel"];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-xs lg:max-w-sm"
        >
          <Star className="absolute -left-6 -top-6 h-32 w-32 text-primary/10 fill-primary/10" />
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] border border-border aspect-[4/5]">
            <img src={portrait} alt="About" loading="lazy" className="w-full h-full object-cover" width={768} height={768} />
          </div>

          <div className="absolute -top-4 right-4 lg:right-8 text-primary-foreground rounded-2xl px-4 py-3 shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-primary)" }}>
            <div className="text-xs font-semibold">Stack favorite</div>
            <div className="text-base mt-1">⚛️ 🟢 🐘</div>
          </div>
          <div className="absolute -bottom-4 right-4 bg-card border border-border rounded-2xl px-5 py-3 shadow-[var(--shadow-card)]">
            <div className="text-3xl font-extrabold text-primary">3+</div>
            <div className="text-xs text-muted-foreground">Ans d'expérience</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-primary text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-primary" />
            À propos de moi
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Développeur passionné par{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
              l'impact réel
            </span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Je suis <span className="font-bold text-foreground">Idriss Sante</span>, développeur fullstack basé au Cameroun.
             Je conçois des applications web modernes, performantes 
             et adaptées aux besoins des entreprises et particuliers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Mon objectif : créer des solutions digitales utiles, sécurisées
            et simples à utiliser, avec une attention particulière portée à l’expérience utilisateur et à la qualité du développement.
            
          </p>
           <p className="text-muted-foreground leading-relaxed">
            Du frontend au backend, je développe des projets allant des applications web aux plateformes de gestion, en utilisant des technologies modernes pour transformer les idées en solutions concrètes. 
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 text-primary font-semibold group"
          >
            Me contacter
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}