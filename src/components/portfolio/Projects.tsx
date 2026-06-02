import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, Wrench, Zap, Crown, Leaf, Laptop, Heart, GraduationCap, Users, Sprout, Coins, Clock, Figma, Palette, Layout } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured?: boolean;
  icon: typeof Wrench;
  grad: string;
  liveUrl?: string;
  codeUrl?: string;
  designUrl?: string;
  status?: "in-progress";
};

// 👉 Remplace les "#" ci-dessous par tes vrais liens (Live = site déployé, Code = repo GitHub)
const projects: Project[] = [
  { title: "AJD-Conference", category: "AI Platform", featured: true, icon: Zap, grad: "linear-gradient(135deg, oklch(0.60 0.25 25), oklch(0.55 0.24 15))",
    description: "Plateforme de gestion de conférences permettant d’organiser des événements, gérer les inscriptions des participants et structurer les programmes. Elle optimise la coordination des événements grâce à une interface intuitive et centralisée.",
    tags: ["React.Js", "Stripe"],
    liveUrl: "https://ajd-eight.vercel.app/", codeUrl: "https://github.com/saidhe/adj-connect-hub" },
  { title: "Agence-Voyage", category: "EdTech", icon: GraduationCap, grad: "linear-gradient(135deg, oklch(0.60 0.22 230), oklch(0.65 0.20 250))",
    description: "Plateforme web dédiée aux agences de transport au Cameroun, facilitant la réservation de billets, la gestion des trajets et la consultation des horaires. L’application améliore l’expérience utilisateur grâce à une interface moderne, rapide et adaptée au contexte local.",
    tags: ["React.Js", "Supabase", "Stripe"],
    status: "in-progress" },
  { title: "FIRST TRUST", category: "Social App", icon: Users, grad: "linear-gradient(135deg, oklch(0.65 0.22 30), oklch(0.70 0.20 50))",
    description: "Application web de gestion et de fiabilisation des numéros de téléphone. Elle permet de vérifier le format des numéros, de nettoyer automatiquement les données et de stocker les numéros valides dans une base de données.",
    tags: ["Php", "My SQL"],
    liveUrl: "https://firsttrust.netlify.app/", codeUrl: "https://github.com/saidhe/THEME_FIRST-TRUST" },
  { title: "educreate-platform", category: "Design", icon: Layout, grad: "linear-gradient(135deg, oklch(0.65 0.20 290), oklch(0.60 0.22 320))",
    description: "Educreate est une plateforme web d’évaluation permettant aux étudiants de composer leurs examens localement dans un environnement numérique sécurisé, puis de soumettre leurs épreuves une fois terminées. Le système intègre une intelligence artificielle capable d’assister la correction et l’évaluation des réponses afin d’optimiser le processus de notation et le suivi académique.",
    tags: ["Figma", "UI/UX", , "Prototype"],
    designUrl: "https://www.figma.com/design/L4z4YA3mEFHEdMOoSd3Li9/Sans-titre?node-id=0-1&t=GB1FF6s3RUTi2o3E-1" },
  { title: "First trust", category: "Design", icon: Palette, grad: "linear-gradient(135deg, oklch(0.62 0.20 160), oklch(0.58 0.22 190))",
    description: "Maquette UI/UX d’une application web de fiabilisation des numéros de téléphone. Le design a été conçu pour simplifier la validation, la gestion et l’organisation des données utilisateurs grâce à une interface moderne et intuitive.",
    tags: ["Figma", "UI/UX", "Prototype"],
    designUrl: "https://www.figma.com/design/2sSNqlt0Zc2BXsQoCrU9E1/Untitled?node-id=0-1&t=VhBhq3WPZR3bq1tz-1" },
];

const categories = ["Tous", "AI Platform", "Social App", "EdTech", "Design"];

// TODO: Remplace par ton lien GitHub principal (page "tous les projets")
const GITHUB_PROFILE_URL = "#";

export function Projects() {
  const [filter, setFilter] = useState("Tous");
  const list = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-primary text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Mon travail
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Projets{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
              récents
            </span>
          </h2>
          <p className="text-muted-foreground">
            {projects.length} projets livrés en production — de l'idée au déploiement, pour les marchés africains et au-delà.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                filter === c
                  ? "text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
              style={filter === c ? { background: "var(--gradient-primary)" } : undefined}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-card border border-border rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <div className="relative aspect-[16/10] grid place-items-center" style={{ background: p.grad }}>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px]" />
                  <p.icon size={80} className="text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  {p.featured && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur text-white text-xs font-bold">
                      <Star size={12} className="fill-yellow-300 text-yellow-300" /> Featured
                    </span>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold leading-tight">{p.title}</h3>
                    <span className="shrink-0 px-2.5 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-semibold">{p.category}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-accent text-primary text-xs font-semibold">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    {p.status === "in-progress" ? (
                      <span className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-primary font-semibold text-sm">
                        <Clock size={15} /> En cours
                      </span>
                    ) : p.designUrl ? (
                      <a
                        href={p.designUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-primary-foreground font-semibold text-sm shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
                        style={{ background: "var(--gradient-primary)" }}
                      >
                        <Figma size={15} /> Voir la maquette
                      </a>
                    ) : (
                      <>
                    <a
                      href={p.liveUrl ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-primary-foreground font-semibold text-sm shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <ExternalLink size={15} /> Live
                    </a>
                    <a
                      href={p.codeUrl ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border font-semibold text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      <Github size={15} /> Code
                    </a>
                      </>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center mt-14">
          <a
            href="https://github.com/saidhe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border-2 border-border bg-card font-semibold text-primary hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all"
          >
            <Github size={18} /> Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}