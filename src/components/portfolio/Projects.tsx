import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, Wrench, Zap, Crown, Leaf, Laptop, Heart, GraduationCap, Users, Sprout, Coins } from "lucide-react";

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
};

// 👉 Remplace les "#" ci-dessous par tes vrais liens (Live = site déployé, Code = repo GitHub)
const projects: Project[] = [
  { title: "CreatorZap", category: "AI Platform", featured: true, icon: Zap, grad: "linear-gradient(135deg, oklch(0.60 0.25 25), oklch(0.55 0.24 15))",
    description: "Plateforme IA de création de contenu pour créateurs africains. Abstraction multi-LLM (OpenAI, Together AI, Groq, OpenRouter), paiement Fapshi, thème dark crimson, bilingue FR/EN.",
    tags: ["Next.js", "OpenAI", "Together AI", "Fapshi"],
    liveUrl: "#", codeUrl: "#" },
  { title: "EduConnect", category: "EdTech", icon: GraduationCap, grad: "linear-gradient(135deg, oklch(0.60 0.22 230), oklch(0.65 0.20 250))",
    description: "Plateforme d'apprentissage en ligne pour étudiants francophones. Cours vidéo, quiz, suivi de progression.",
    tags: ["Next.js", "Supabase", "Stripe"],
    liveUrl: "#", codeUrl: "#" },
  { title: "SocialBuzz", category: "Social App", icon: Users, grad: "linear-gradient(135deg, oklch(0.65 0.22 30), oklch(0.70 0.20 50))",
    description: "Mini réseau social pour communautés universitaires. Feed temps réel, messagerie, notifications push.",
    tags: ["React Native", "Firebase"],
    liveUrl: "#", codeUrl: "#" },
  { title: "Portfolio Idriss Sante", category: "Portfolio", icon: Laptop, grad: "linear-gradient(135deg, oklch(0.55 0.24 262), oklch(0.65 0.22 235))",
    description: "Portfolio personnel React + Vite + Tailwind + Framer Motion. Thème bleu/blanc, présente mes projets et compétences.",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
    liveUrl: "#", codeUrl: "#" },
];

const categories = ["Tous", "Marketplace", "AI Platform", "Vote Platform", "Social App", "EdTech", "Community App", "Green Tech", "FinTech", "Portfolio"];

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
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center mt-14">
          <a
            href={GITHUB_PROFILE_URL}
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